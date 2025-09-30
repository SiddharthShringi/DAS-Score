import { BookOpen, Target, Lightbulb } from "lucide-react";

export default function Page() {
  return (
    <section className="px-6 py-16 sm:py-24 bg-background">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Heading */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            About the DAS Score
          </h2>
          <p className="text-muted-foreground text-lg">
            Understand where your beliefs come from and how they shape your
            life.
          </p>
        </div>

        {/* What is DAS */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-primary" />
            What is DAS?
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            The <strong>Dysfunctional Attitude Scale (DAS)</strong> is a
            psychology-based tool used to uncover hidden <em>core beliefs</em>—
            deep-seated ideas about yourself and the world. These beliefs
            influence your thoughts, emotions, and decisions.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The test in based on{" "}
            <strong>Dr. David Burns The Feeling Good Handbook</strong>, this
            test invites you to explore the subtle thinking patterns and silent
            assumptions influencing how you think and act.
          </p>
        </div>

        {/* What to do after score */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold flex items-center gap-2">
            <Target className="w-6 h-6 text-primary" />
            What to do once you know your DAS score
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Your score is not a label — it’s a mirror. Use it to reflect on
            where your beliefs might be holding you back. You can:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2">
            <li>Notice which belief categories scored highest.</li>
            <li>Explore patterns in your journaling or therapy sessions.</li>
            <li>Track your progress over time to see real change.</li>
          </ul>
        </div>

        {/* Positive vs Negative Scores */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold flex items-center gap-2">
            <Lightbulb className="w-6 h-6 text-primary" />
            What your scores mean
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Each DAS category reflects a cluster of beliefs. Scores can be{" "}
            <strong>positive</strong> (more balanced/healthy) or{" "}
            <strong>negative</strong> (more rigid/unhelpful):
          </p>
          <ul className="grid sm:grid-cols-2 gap-4 text-muted-foreground">
            <li>
              <strong>Approval:</strong> Positive → self-trusting. Negative →
              dependent on others validation.
            </li>
            <li>
              <strong>Achievement:</strong> Positive → growth-focused. Negative
              → worth tied only to success.
            </li>
            <li>
              <strong>Love:</strong> Positive → feels lovable as is. Negative →
              “I&apos;m only worthy if loved.”
            </li>
            <li>
              <strong>Omnipotence:</strong> Positive → accepts limits. Negative
              → believes must control everything.
            </li>
            <li>
              <strong>Autonomy:</strong> Positive → healthy independence.
              Negative → fears dependence or feels trapped.
            </li>
            <li>
              <strong>Entitlement:</strong> Positive → balanced expectations.
              Negative → rigid beliefs about what&apos;s “owed.”
            </li>
            <li>
              <strong>Perfectionism:</strong> Positive → values effort. Negative
              → “I must never fail.”
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
