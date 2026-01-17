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
    <section className="relative h-screen overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/gradient-bg.avif')`,
        }}
      />

      <div className="container relative z-10 mx-auto flex h-screen flex-col items-center justify-center px-4 pt-20">
        {/* Logo mark */}
        <div className="mb-8 text-4xl font-bold">Polychain</div>

        {/* Main headline */}
        <h1 className="mb-4 text-center text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          We Build AI
          <br />
          <span className="text-muted-foreground italic">
            That Works for You
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-muted-foreground mb-12 max-w-xl text-center text-lg">
          Custom AI solutions that scale with your business.
        </p>

        {/* Interactive input card */}
        <div className="bg-card/90 mb-8 w-full max-w-2xl rounded-2xl border p-4 shadow-2xl backdrop-blur-sm">
          <div className="flex items-center gap-4">
            <div className="min-h-[60px] flex-1 px-2 py-3">
              <p className="text-foreground text-base sm:text-lg">
                {displayText}
                <span className="bg-lime ml-0.5 inline-block h-5 w-0.5 animate-pulse" />
              </p>
            </div>
            <Button
              size="lg"
              className="bg-lime text-lime-foreground hover:bg-lime/90 h-auto shrink-0 rounded-xl px-6 py-4 text-base font-semibold shadow-lg"
            >
              Contact us
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
