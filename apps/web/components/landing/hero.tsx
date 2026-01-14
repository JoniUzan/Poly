"use client";

import { useState, useEffect } from "react";
import { Button } from "@poly/ui/components/button";
import { ArrowRight } from "lucide-react";

const automationExamples = [
  "Sync my CRM with accounting software automatically",
  "Send follow-up emails when leads go cold",
  "Generate weekly reports from all my tools",
  "Qualify leads with an AI chatbot 24/7",
  "Auto-update inventory across all sales channels",
];

const quickStarts = [
  { label: "Lead Automation", icon: "🎯" },
  { label: "Email Sequences", icon: "📧" },
  { label: "CRM Sync", icon: "🔄" },
  { label: "AI Chatbots", icon: "🤖" },
  { label: "Data Reports", icon: "📊" },
];

export function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [exampleIndex, setExampleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentExample = automationExamples[exampleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (currentExample && displayText.length < currentExample.length) {
            setDisplayText(currentExample.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setExampleIndex((prev) => (prev + 1) % automationExamples.length);
          }
        }
      },
      isDeleting ? 30 : 50
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, exampleIndex]);

  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      {/* Base44-inspired gradient background */}
      <div className="from-sky-light via-background to-coral-light/30 absolute inset-0 bg-gradient-to-b" />
      <div className="bg-coral/20 absolute right-0 top-0 h-[600px] w-[600px] rounded-full blur-3xl" />
      <div className="bg-sky/20 absolute -left-32 top-1/4 h-[500px] w-[500px] rounded-full blur-3xl" />
      <div className="from-background absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t to-transparent" />

      <div className="container relative z-10 mx-auto flex min-h-[90vh] flex-col items-center justify-center px-4 pt-20">
        {/* Logo mark */}
        <div className="text-emerald mb-8 text-4xl font-bold">
          <span className="from-emerald to-purple bg-gradient-to-r bg-clip-text text-transparent">
            Poly
          </span>
        </div>

        {/* Main headline */}
        <h1 className="mb-4 text-center text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Automate your business.
          <br />
          <span className="text-muted-foreground">No code needed.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-muted-foreground mb-12 max-w-xl text-center text-lg">
          Your workflows, without limits.
        </p>

        {/* Interactive input card */}
        <div className="bg-card/90 mb-8 w-full max-w-2xl rounded-2xl border p-4 shadow-2xl backdrop-blur-sm">
          <div className="flex items-center gap-4">
            <div className="min-h-[60px] flex-1 px-2 py-3">
              <p className="text-foreground text-base sm:text-lg">
                {displayText}
                <span className="bg-emerald ml-0.5 inline-block h-5 w-0.5 animate-pulse" />
              </p>
            </div>
            <Button
              size="lg"
              className="bg-lime text-lime-foreground hover:bg-lime/90 h-auto shrink-0 rounded-xl px-6 py-4 text-base font-semibold shadow-lg"
            >
              Build now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Quick start chips */}
        <div className="mb-8 text-center">
          <p className="text-muted-foreground mb-4 text-sm">
            Not sure where to start? Try one of these:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {quickStarts.map((item) => (
              <button
                key={item.label}
                className="bg-card hover:bg-secondary inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors"
              >
                <span>{item.icon}</span>
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
