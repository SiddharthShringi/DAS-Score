"use client";

import { useState } from "react";
import { questions } from "@/lib/questions";
import { Button } from "@/components/ui/button";
import RadioButtons from "@/components/RadioButtons";

export default function Quiz() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentQuestion = questions[currentIndex];

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <section className="w-full px-6 py-6 sm:py-10 bg-gradient-to-b from-background to-muted rounded-lg border border-accent flex">
        <div className="max-w-xl w-full h-[300px] mx-auto p-6 text-center flex flex-col">
          <p className="text-sm text-muted-foreground">
            Question {currentIndex + 1} of {questions.length}
          </p>
          {/* Question */}
          <div className="flex-1 flex flex-col items-center justify-center space-y-4 p-4">
            <h2 className="text-xl font-semibold text-foreground">
              {currentQuestion.text}
            </h2>
          </div>

          <RadioButtons />

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-6">
            <Button
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              variant="outline"
            >
              Previous
            </Button>
            <Button
              onClick={handleNext}
              disabled={currentIndex === questions.length - 1}
            >
              Next
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
