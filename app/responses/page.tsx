"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { IMergedQuestion } from "@/lib/types";

import { getLabel } from "@/lib/questions";

export default function Page() {
  const [responsesData, setResponsesData] = useState<
    Record<string, IMergedQuestion[]>
  >({});
  const router = useRouter();
  useEffect(() => {
    try {
      const raw = localStorage.getItem("responsesData");
      if (raw) {
        setResponsesData(groupByCategory(JSON.parse(raw)));
      } else {
        router.push("/");
      }
    } catch {
      setResponsesData({});
      router.push("/");
    }
  }, []);

  const groupByCategory = (
    data: IMergedQuestion[]
  ): Record<string, IMergedQuestion[]> => {
    return data.reduce((acc, item) => {
      const category = item.category || "Uncategorized";
      if (!acc[category]) acc[category] = [];
      acc[category].push(item);
      return acc;
    }, {} as Record<string, IMergedQuestion[]>);
  };
  return (
    <div className="max-w-3xl mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-6">Your Responses</h1>
      {Object.entries(responsesData).map(([category, items]) => (
        <div key={category} className="p-4 m-4">
          <h2 className="text-center text-xl font-bold text-primary mb-2">
            {category}
          </h2>
          <div>
            {items.map((item) => (
              <div key={item.id} className="mb-2">
                <p className="font-medium text-lg">
                  <strong>Q{item.id}:</strong> {item.text}
                </p>
                <p className="text-muted-foreground">
                  {`${getLabel(
                    item.point.toString() as "0" | "-2" | "-1" | "1" | "2"
                  )} (${item.point})`}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
