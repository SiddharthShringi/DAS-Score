// components/WhatIsDas.tsx
import { Brain } from "lucide-react";

export default function WhatIsDas() {
  return (
    <section className="px-6 py-16 sm:py-24 bg-background">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <Brain className="w-12 h-12 mx-auto text-primary" />

        <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
          What is the DAS Score?
        </h2>

        <p className="text-lg text-muted-foreground leading-relaxed">
          The <strong>Dysfunctional Attitude Scale (DAS)</strong> is a
          psychology-based tool that uncovers hidden core beliefs about
          approval, achievement, and self-worth. Tracking your DAS Score helps
          you see if your mindset is shifting over time through therapy,
          journaling, or personal growth work.
        </p>
      </div>
    </section>
  );
}
