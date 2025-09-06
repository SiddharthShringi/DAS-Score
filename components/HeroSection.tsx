// components/HeroSection.tsx
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import WhatIsDas from "./WhatIsDAS";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div>
      <section className="relative flex flex-col items-center justify-center text-center px-6 py-20 sm:py-28 bg-gradient-to-b from-background to-muted rounded-lg">
        <div className="max-w-3xl mx-auto space-y-6">
          {/* Tagline */}
          <p className="text-sm font-medium tracking-wide text-primary uppercase">
            Understand Your Core Beliefs
          </p>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
            Check Your <span className="text-primary">DAS Score</span> <br />
            and Visualize Your Progress
          </h1>

          {/* Subtext */}
          <p className="text-muted-foreground text-lg sm:text-xl">
            Discover hidden patterns in your thinking. The DAS-Score app helps
            you measure and track changes in your beliefs over time.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/das-test">
              <Button size="lg" className="group cursor-pointer">
                Take the Test
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/about">
              <Button
                size="lg"
                variant="outline"
                className="group cursor-pointer"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <WhatIsDas />
    </div>
  );
}
