"use client";

import { Button } from "@poly/ui/components/button";

export function CTA() {
  return (
    <section className="relative min-h-[60vh] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/gradient-bg.avif')`,
        }}
      />

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
          Contact us
        </Button>
      </div>
    </section>
  );
}
