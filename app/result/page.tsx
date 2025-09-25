"use client";

import { useEffect, useMemo, useState } from "react";
import { Question, questions } from "@/lib/questions";
import LineChart from "@/components/LineChart";
import ResultInfo from "@/components/ResultInfo";
import ResultTable from "@/components/ResultTable";

interface IResponse {
  questionId: number;
  point: number;
}

export default function Page() {
  const [parsedResponses, setParsedResponses] = useState<IResponse[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("responses");

      if (!raw) return;
      const data = JSON.parse(raw);
      console.log({ raw, data });
      if (Array.isArray(data.responses)) {
        setParsedResponses(data.responses);
      }
    } catch {
      setParsedResponses([]);
    }
  }, []);

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

  console.log({ parsedResponses, merged, categoryTotals, lineGraphData }, "In");

  return (
    <div className="text-foreground text-4xl">
      <p>DAS Result</p>
      <LineChart lineGraphData={lineGraphData} />
      <ResultTable />
      <ResultInfo />
    </div>
  );
}
