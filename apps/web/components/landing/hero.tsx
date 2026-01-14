"use client";

import { Button } from "@poly/ui/components/button";
import { Badge } from "@poly/ui/components/badge";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden">
      {/* Background gradient effects */}
      <div className="from-background via-background to-background/80 absolute inset-0 bg-gradient-to-b" />
      <div className="bg-emerald/10 absolute left-1/4 top-1/4 h-96 w-96 rounded-full blur-3xl" />
      <div className="bg-purple/10 absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full blur-3xl" />

      <div className="container relative z-10 mx-auto px-4 text-center">
        <Badge
          variant="outline"
          className="border-emerald/30 bg-emerald/5 text-emerald mb-6"
        >
          <Sparkles className="mr-1.5 h-3.5 w-3.5" />
          AI-Powered Automation Agency
        </Badge>

        <h1 className="from-foreground via-foreground to-muted-foreground mb-6 bg-gradient-to-br bg-clip-text text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Stop Working{" "}
          <span className="from-emerald to-emerald-light bg-gradient-to-r bg-clip-text text-transparent">
            Harder
          </span>
          .
          <br />
          Start Working{" "}
          <span className="from-purple to-purple-light bg-gradient-to-r bg-clip-text text-transparent">
            Smarter
          </span>
          .
        </h1>

        <p className="text-muted-foreground mx-auto mb-10 max-w-2xl text-lg sm:text-xl">
          We build custom AI automation systems that eliminate repetitive tasks,
          reduce human error, and let your team focus on what actually matters —
          growing your business.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" className="group h-auto px-8 py-6 text-base">
            Book an Automation Audit
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="h-auto px-8 py-6 text-base"
          >
            See How It Works
          </Button>
        </div>

        {/* Stats row */}
        <div className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-8 md:grid-cols-4">
          <div className="text-center">
            <div className="text-emerald text-3xl font-bold sm:text-4xl">
              40+
            </div>
            <div className="text-muted-foreground text-sm">
              Hours Saved/Week
            </div>
          </div>
          <div className="text-center">
            <div className="text-emerald text-3xl font-bold sm:text-4xl">
              99%
            </div>
            <div className="text-muted-foreground text-sm">Error Reduction</div>
          </div>
          <div className="text-center">
            <div className="text-purple text-3xl font-bold sm:text-4xl">3x</div>
            <div className="text-muted-foreground text-sm">Revenue Growth</div>
          </div>
          <div className="text-center">
            <div className="text-purple text-3xl font-bold sm:text-4xl">
              24/7
            </div>
            <div className="text-muted-foreground text-sm">
              Always-On Systems
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
