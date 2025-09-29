"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { questions } from "@/lib/questions";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

type FormValues = {
  responses: { questionId: number; point: number | null }[];
};

export default function Quiz() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasAttemptedNext, setHasAttemptedNext] = useState(false);
  const router = useRouter();

  const { control, handleSubmit, trigger } = useForm<FormValues>({
    defaultValues: {
      responses: questions.map((q) => ({
        questionId: q.id,
        point: null,
      })),
    },
  });

  const { fields } = useFieldArray({
    control,
    name: "responses",
  });

  const currentQuestion = questions[currentIndex];

  const handleNext = async (e?: React.MouseEvent) => {
    e?.preventDefault();
    setHasAttemptedNext(true);
    const isValid = await trigger(`responses.${currentIndex}.point`);
    if (!isValid) return;
    setHasAttemptedNext(false);
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((current) => current + 1);
    }
  };

  const handlePrevious = (e?: React.MouseEvent) => {
    e?.preventDefault();
    if (currentIndex > 0) {
      setCurrentIndex((current) => current - 1);
    }
  };

  const isLast = currentIndex === fields.length - 1;

  const onSubmit = (data: FormValues) => {
    localStorage.setItem("responses", JSON.stringify(data));
    router.push("/result");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="h-screen">
      <div className="min-h-screen flex items-center justify-center ">
        <section className="w-full md:w-2/3 px-6 py-6 sm:py-10 bg-gradient-to-b from-background to-muted rounded-lg border border-accent flex m-6">
          <div className="max-w-4xl mx-auto p-6 text-center flex flex-col">
            <p className="text-sm text-primary">
              Question {currentIndex + 1} of {questions.length}
            </p>
            {/* Question */}
            <div className="flex-1 flex flex-col items-center justify-center space-y-4 p-4">
              <h2 className="text-xl font-semibold text-foreground">
                {currentQuestion.text}
              </h2>
            </div>

            {/* <RadioButtons /> */}
            <Controller
              key={currentIndex}
              control={control}
              name={`responses.${currentIndex}.point`}
              rules={{ required: "Please select an option" }}
              render={({ field, fieldState }) => {
                return (
                  <div className="w-full">
                    <RadioGroup
                      value={field.value !== null ? String(field.value) : ""}
                      onValueChange={(value) => field.onChange(Number(value))}
                    >
                      <div className="flex items-center space-x-2 border p-2 rounded">
                        <RadioGroupItem value="-2" id={`q${currentIndex}-sa`} />
                        <Label htmlFor={`q${currentIndex}-sa`}>
                          Strongly Agree
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 border p-2 rounded">
                        <RadioGroupItem value="-1" id={`q${currentIndex}-a`} />
                        <Label htmlFor={`q${currentIndex}-a`}>Agree</Label>
                      </div>
                      <div className="flex items-center space-x-2 border p-2 rounded">
                        <RadioGroupItem value="0" id={`q${currentIndex}-n`} />
                        <Label htmlFor={`q${currentIndex}-n`}>Neutral</Label>
                      </div>
                      <div className="flex items-center space-x-2 border p-2 rounded">
                        <RadioGroupItem value="1" id={`q${currentIndex}-d`} />
                        <Label htmlFor={`q${currentIndex}-d`}>Disagree</Label>
                      </div>
                      <div className="flex items-center space-x-2 border p-2 rounded">
                        <RadioGroupItem value="2" id={`q${currentIndex}-sd`} />
                        <Label htmlFor={`q${currentIndex}-sd`}>
                          Strongly Disagree
                        </Label>
                      </div>
                    </RadioGroup>
                    {hasAttemptedNext && fieldState.error && (
                      <p className="text-red-500">{fieldState.error.message}</p>
                    )}
                  </div>
                );
              }}
            />

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-6">
              <Button
                onClick={handlePrevious}
                disabled={currentIndex === 0}
                variant="outline"
              >
                Previous
              </Button>
              {!isLast ? (
                <Button
                  onClick={handleNext}
                  disabled={currentIndex === questions.length - 1}
                >
                  Next
                </Button>
              ) : (
                <Button type="submit">Submit</Button>
              )}
            </div>
          </div>
        </section>
      </div>
    </form>
  );
}
