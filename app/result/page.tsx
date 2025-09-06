"use client";

import React from "react";

export default function page() {
  const saved = localStorage.getItem("responses");

  if (saved) {
    console.log("Found responses:", JSON.parse(saved));
  } else {
    console.log("No responses saved yet.");
  }
  return <div className="text-foreground text-4xl">DAS Result</div>;
}
