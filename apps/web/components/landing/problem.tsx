"use client";

import { AlertTriangle, Clock, TrendingDown, Users } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "Drowning in Manual Tasks",
    description:
      "Your team spends hours every day on repetitive data entry, copy-pasting between systems, and chasing updates.",
  },
  {
    icon: AlertTriangle,
    title: "Costly Human Errors",
    description:
      "Manual processes lead to mistakes — missed follow-ups, wrong data, duplicate entries — costing you time and money.",
  },
  {
    icon: Users,
    title: "Bottlenecked by People",
    description:
      "Your business can only scale as fast as your team can work. Without automation, growth means more headcount.",
  },
  {
    icon: TrendingDown,
    title: "Missed Opportunities",
    description:
      "While you're stuck in operational chaos, leads go cold, customers wait too long, and competitors move faster.",
  },
];

export function Problem() {
  return (
    <section className="relative py-24">
      {/* Subtle background accent */}
      <div className="via-destructive/5 absolute inset-0 bg-gradient-to-b from-transparent to-transparent" />

      <div className="container relative mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="text-destructive mb-4 text-sm uppercase tracking-widest">
            The Problem
          </p>
          <h2 className="mb-6 text-3xl font-bold sm:text-4xl md:text-5xl">
            Manual Work is Killing Your Growth
          </h2>
          <p className="text-muted-foreground text-lg">
            You didn&apos;t start a business to spend your days on spreadsheets
            and admin work. Yet here you are — buried in tasks that should run
            themselves.
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="border-border/50 bg-card/50 hover:border-destructive/30 group rounded-xl border p-6 backdrop-blur-sm transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="bg-destructive/10 text-destructive shrink-0 rounded-lg p-3">
                  <problem.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold">
                    {problem.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
