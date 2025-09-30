"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-border/60 bg-background/40 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        <div className="flex flex-col px-4 py-8 md:px-6 gap-2">
          <div className="flex items-center gap-3">
            <span className="text-base font-semibold tracking-tight">
              DAS Score
            </span>
            <span className="rounded-full border px-2 py-0.5 text-xs text-muted-foreground">
              v1.0.0
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            Built by <span className="font-medium">Siddharth Shringi</span>
          </p>
          <nav
            aria-label="Footer navigation"
            className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm"
          >
            <Link
              href="/"
              className="text-muted-foreground transition hover:text-primary"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-muted-foreground transition hover:text-primary"
            >
              About
            </Link>
            <Link
              href="/quiz"
              className="text-muted-foreground transition hover:text-primary"
            >
              Take the Test
            </Link>
          </nav>
        </div>
        <div className="flex flex-col px-4 py-8 md:px-6 gap-2">
          <p className="text-muted-foreground text-sm">
            &copy; 2025 Built by Siddharth Shringi. Educational tool inspired by
            the book <span className="text-chart-1">The Feeling Good</span> by{" "}
            <span className="text-chart-1">David D Bruns MD</span>
          </p>
          <div className="text-sm leading-relaxed text-muted-foreground">
            <span className="font-medium text-foreground">Privacy:</span> Your
            data stays on your device (<code>localStorage</code> only).
          </div>
          <div className="text-sm leading-relaxed text-muted-foreground">
            <span className="font-medium text-foreground">Disclaimer:</span>
            This is an educational self-reflection tool, not a diagnosis. If
            you&apos;re in distress, please seek professional help.
          </div>
        </div>
      </div>
    </footer>
  );
}
