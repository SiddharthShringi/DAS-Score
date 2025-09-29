"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { questions } from "@/lib/questions";
import LineChartPage from "@/components/LineChartPage";
import ResultInfo from "@/components/ResultInfo";
import ResultTable from "@/components/ResultTable";
import ScoreExplanation from "@/components/ScoreExplanation";
import { IResponse, IMergedQuestion, IGroupedByCategory } from "@/lib/types";

export default function Page() {
  const [parsedResponses, setParsedResponses] = useState<IResponse[]>([]);
  const router = useRouter();

  useEffect(() => {
    try {
      const raw = localStorage.getItem("responses");

      if (!raw) {
        router.push("/");
        return;
      }
      const data = JSON.parse(raw);
      if (Array.isArray(data.responses)) {
        setParsedResponses(data.responses);
      }
    } catch {
      setParsedResponses([]);
    }
  }, [router]);

  const answerById = useMemo<Record<string, number>>(
    () =>
      Object.fromEntries(
        (parsedResponses || []).map((a) => [
          String(a.questionId),
          Number(a.point) || 0,
        ])
      ),
    [parsedResponses]
  );

  const merged = useMemo(
    () => questions.map((q) => ({ ...q, point: answerById[q.id] ?? 0 })),
    [answerById]
  );

  const groupedData = useMemo<IGroupedByCategory[]>(() => {
    const byCategory = new Map<string, IMergedQuestion[]>();

    for (const r of merged) {
      const arr = byCategory.get(r.category) ?? [];
      arr.push(r);
      byCategory.set(r.category, arr);
    }

    const results: IGroupedByCategory[] = [];
    for (const [category, items] of byCategory.entries()) {
      items.sort((a, b) => a.id - b.id);
      results.push({
        category,
        QuestionFrom: items[0].id,
        QuestionTo: items[items.length - 1].id,
        IndividualScore: items.map((i) => i.point),
        TotalScore: items.reduce((sum, i) => sum + i.point, 0),
      });
    }
    return results;
  }, [merged]);

  const categoryTotals = useMemo<Record<string, number>>(
    () =>
      merged.reduce<Record<string, number>>((acc, q) => {
        acc[q.category] = (acc[q.category] || 0) + q.point;
        return acc;
      }, {}),
    [merged]
  );

  const lineGraphData = useMemo(
    () =>
      Object.entries(categoryTotals).map(([category, score]) => ({
        category,
        score,
      })),
    [categoryTotals]
  );

  if (parsedResponses.length === 0) return null;

  return (
    <div className="lg:grid lg:grid-cols-12 lg:gap-6 text-foreground">
      <aside className="lg:col-span-5 lg:h-screen lg:sticky lg:top-0 lg:self-start p-4">
        <div className="rounded-xl border p-4 my-10 border-foreground">
          <LineChartPage lineGraphData={lineGraphData} />
          <ScoreExplanation merged={merged} />
        </div>
      </aside>
      <main className="lg:col-span-7 lg:h-screen lg:overflow-y-auto p-4 space-y-6">
        <ResultTable groupedData={groupedData} />
        <ResultInfo categoryTotals={categoryTotals} />
      </main>
    </div>
  );
}
