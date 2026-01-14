"use client";

import { Button } from "@poly/ui/components/button";

export function CTA() {
  return (
    <section className="relative min-h-[60vh] overflow-hidden">
      {/* Base44-style gradient background */}
      <div className="from-background via-sky-light/30 to-coral-light/50 absolute inset-0 bg-gradient-to-b" />
      <div className="bg-coral/30 absolute left-1/2 top-1/2 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl" />
      <div className="bg-sky/20 absolute left-0 top-0 h-[400px] w-[400px] rounded-full blur-3xl" />
      <div className="bg-purple/10 absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full blur-3xl" />

      <div className="container relative z-10 mx-auto flex min-h-[60vh] flex-col items-center justify-center px-4 py-24">
        <h2 className="mb-8 text-center text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
          So, what are we
          <br />
          <span className="italic">building?</span>
        </h2>

        <Button
          size="lg"
          className="bg-lime text-lime-foreground hover:bg-lime/90 h-auto rounded-xl px-8 py-5 text-lg font-semibold shadow-lg"
        >
          Start building
        </Button>
      </div>
    </section>
  );
}
