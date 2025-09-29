import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Info } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import { IMergedQuestion } from "@/lib/types";

type ScoreExplanationProps = {
  merged: IMergedQuestion[];
};

export default function ScoreExplanation({ merged }: ScoreExplanationProps) {
  const handleClick = () => {
    localStorage.setItem("responsesData", JSON.stringify(merged));
    window.open("/responses", "_blank", "noopener,noreferrer");
  };
  return (
    <section className="">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1" className="border-muted/40">
          <AccordionTrigger className="text-left">
            <div className="flex items-center gap-2 font-medium">
              <Info className="h-4 w-4" aria-hidden />
              How we calculate category scores
            </div>
          </AccordionTrigger>
          <AccordionContent className="text-sm leading-relaxed">
            <ol className="space-y-3 list-decimal pl-5">
              <li>
                <p className="text-muted-foreground">
                  Every question is tagged under a <strong>category</strong>{" "}
                  (e.g.,
                  <span className="mx-1">
                    <Badge variant="secondary">Approval</Badge>
                  </span>
                  <span className="mx-1">
                    <Badge variant="secondary">Love</Badge>
                  </span>
                  <span className="mx-1">
                    <Badge variant="secondary">Achievement</Badge>
                  </span>
                  ). We compute scores within each category separately.
                </p>
              </li>
              <li className="mt-3">
                <div className="text-muted-foreground mt-2">
                  Your answer gives that statement a point from −2 to +2
                </div>
                <ul className="grid grid-cols-1 gap-1 sm:grid-cols-2 md:grid-cols-3 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Badge variant="outline">2</Badge> Strongly Disagree
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="outline">1</Badge> Disagree
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="outline">0</Badge> Neutral
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="outline">-1</Badge> Agree
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="outline">-2</Badge> Strongly Agree
                  </li>
                </ul>
              </li>
              <li>
                <p className="text-muted-foreground">
                  For each category, we collect all its answers in question
                  order.
                  <code>IndividualScore</code>{" "}
                  <Badge>Example:`IndividualScore = [-2, 1]`</Badge>
                </p>
              </li>
              <li className="mt-3">
                <p className="text-muted-foreground">
                  We then sum these points to get your <code>TotalScore</code>{" "}
                  for that category.
                  <Badge>Example: `TotalScore = -2 + 1 = -1`</Badge>
                </p>
              </li>
            </ol>
            <div className="text-center mt-6">
              <Button
                size="lg"
                variant="outline"
                className="group cursor-pointer"
                onClick={handleClick}
              >
                See Your Responses
              </Button>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
