"use client";

import { Badge } from "@poly/ui/components/badge";
import { Bot, RefreshCcw, Zap, Shield } from "lucide-react";

const solutions = [
  {
    icon: Bot,
    title: "Intelligent AI Agents",
    description:
      "Custom-built AI assistants that handle customer inquiries, qualify leads, and manage routine communications — 24/7, without breaks.",
    color: "lime",
  },
  {
    icon: RefreshCcw,
    title: "Seamless CRM Syncing",
    description:
      'Your data flows automatically between systems. No more manual updates, no more data silos, no more "which spreadsheet has the latest version?"',
    color: "blue-medium",
  },
  {
    icon: Zap,
    title: "Automated Reporting",
    description:
      "Get real-time dashboards and auto-generated reports delivered to your inbox. Make decisions based on data, not gut feelings.",
    color: "lime",
  },
  {
    icon: Shield,
    title: "Custom Proprietary Logic",
    description:
      "We build bespoke automation workflows tailored to your exact business processes — not off-the-shelf solutions that force you to adapt.",
    color: "blue-medium",
  },
];

export function Solution() {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Gradient background */}
      <div className="from-lime/5 to-blue-medium/5 absolute inset-0 bg-gradient-to-b via-transparent" />
      <div className="bg-lime/5 absolute right-0 top-0 h-[500px] w-[500px] rounded-full blur-3xl" />
      <div className="bg-blue-medium/5 absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full blur-3xl" />

      <div className="container relative mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <Badge
            variant="outline"
            className="border-lime/30 bg-lime/5 text-lime mb-4"
          >
            The Solution
          </Badge>
          <h2 className="mb-6 text-3xl font-bold sm:text-4xl md:text-5xl">
            The{" "}
            <span className="from-lime to-blue-medium bg-gradient-to-r bg-clip-text text-transparent">
              Polychain
            </span>{" "}
            Way
          </h2>
          <p className="text-muted-foreground text-lg">
            We design, build, and maintain custom automation systems using
            integrated cloud workflows. Your operations run smoother. Your team
            works on high-value tasks. Your business scales effortlessly.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          {solutions.map((solution, index) => (
            <div
              key={solution.title}
              className={`bg-card/50 group relative rounded-2xl border p-8 backdrop-blur-sm transition-all hover:shadow-lg ${
                solution.color === "lime"
                  ? "border-lime/20 hover:border-lime/40"
                  : "border-blue-medium/20 hover:border-blue-medium/40"
              }`}
            >
              {/* Number badge */}
              <div className="bg-background border-border text-muted-foreground absolute -left-3 -top-3 flex h-8 w-8 items-center justify-center rounded-full border text-sm font-bold">
                {index + 1}
              </div>

              <div
                className={`mb-4 inline-flex rounded-xl p-3 ${
                  solution.color === "lime"
                    ? "bg-lime/10 text-lime"
                    : "bg-blue-medium/10 text-blue-medium"
                }`}
              >
                <solution.icon className="h-7 w-7" />
              </div>

              <h3 className="mb-3 text-xl font-semibold">{solution.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
