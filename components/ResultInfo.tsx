// components/ResultInfo.tsx
import { CATEGORY_ORDER, dasInfo, CategoryKey } from "@/lib/dasInfo";

type ResultTableProps = {
  categoryTotals: Partial<Record<CategoryKey, number>>;
};

export default function ResultInfo({ categoryTotals }: ResultTableProps) {
  return (
    <div className="max-w-4xl mx-auto p-3 lg:p-0">
      <h2 className="text-3xl mb-5 font-bold">What Your Scores Mean</h2>

      <div className="space-y-6">
        {CATEGORY_ORDER.map((category) => {
          const info = dasInfo[category];
          const score = categoryTotals[category] ?? 0;

          return (
            <section key={category} className="p-4">
              <h3 className="text-2xl text-primary font-bold mb-2">
                {category} ({score})
              </h3>

              {/* one-liner belief */}
              <p className="mb-3 text-sidebar-primary font-semibold italic">
                {info.belief}
              </p>

              {/* optional bullets */}
              {info.bullets && info.bullets.length > 0 && (
                <ul className="list-disc pl-5 space-y-2">
                  {info.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              )}
            </section>
          );
        })}
      </div>
    </div>
  );
}
