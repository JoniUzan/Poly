"use client";

import { Button } from "@poly/ui/components/button";
import { CheckCircle2 } from "lucide-react";

export function Features() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        {/* First Bento Row - Large left, content right */}
        <div className="mx-auto mb-8 grid max-w-6xl gap-6 lg:grid-cols-2">
          {/* Large card with coral gradient - shows automation flow */}
          <div className="from-coral to-coral-light relative overflow-hidden rounded-3xl bg-gradient-to-br p-8 lg:min-h-[400px]">
            {/* Floating UI mockup */}
            <div className="bg-card absolute bottom-8 left-1/2 w-[90%] -translate-x-1/2 rounded-2xl p-6 shadow-2xl">
              <div className="mb-4 flex items-center gap-3">
                <div className="bg-emerald/20 h-8 w-8 rounded-lg" />
                <span className="text-foreground font-medium">
                  Building your Lead Automation
                </span>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-emerald h-5 w-5" />
                  <span className="text-muted-foreground text-sm">
                    Setting up webhook triggers
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-emerald h-5 w-5" />
                  <span className="text-muted-foreground text-sm">
                    Connecting CRM integration
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-emerald h-5 w-5" />
                  <span className="text-muted-foreground text-sm">
                    Configuring email sequences
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-emerald h-5 w-5" />
                  <span className="text-muted-foreground text-sm">
                    Setting up AI qualification
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Content card - right side */}
          <div className="bg-secondary/50 flex flex-col justify-center rounded-3xl p-8 lg:p-12">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
              Dream big. Build fast.
            </h2>
            <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
              Just describe it — Poly helps you build it, host it, and get it
              ready to launch. No code. No setup. Just go.
            </p>
            <div>
              <Button className="bg-foreground text-background hover:bg-foreground/90 h-auto rounded-xl px-6 py-4 text-base font-semibold">
                Start building
              </Button>
            </div>
          </div>
        </div>

        {/* Second Bento Row - Content left, large right */}
        <div className="mx-auto mb-8 grid max-w-6xl gap-6 lg:grid-cols-2">
          {/* Content card - left side */}
          <div className="bg-secondary/50 flex flex-col justify-center rounded-3xl p-8 lg:p-12">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
              Backend? Already done.
            </h2>
            <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
              CRM sync, data storage, AI logic — all built in, no extra setup
              needed. Focus on your business while we handle the tech.
            </p>
            <div>
              <Button className="bg-foreground text-background hover:bg-foreground/90 h-auto rounded-xl px-6 py-4 text-base font-semibold">
                Start building
              </Button>
            </div>
          </div>

          {/* Large card with sky gradient */}
          <div className="from-sky to-sky-light relative overflow-hidden rounded-3xl bg-gradient-to-br p-8 lg:min-h-[400px]">
            {/* Floating chat UI mockup */}
            <div className="bg-card absolute bottom-8 left-1/2 w-[90%] -translate-x-1/2 rounded-2xl p-6 shadow-2xl">
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="bg-purple/20 h-8 w-8 shrink-0 rounded-full" />
                  <div className="bg-secondary rounded-2xl rounded-tl-none p-3">
                    <p className="text-sm">
                      Hi! I&apos;m interested in your services. Do you offer
                      custom integrations?
                    </p>
                  </div>
                </div>
                <div className="flex justify-end gap-3">
                  <div className="bg-emerald/10 rounded-2xl rounded-tr-none p-3">
                    <p className="text-sm">
                      Absolutely! We build custom integrations for any platform.
                      What systems do you currently use?
                    </p>
                  </div>
                  <div className="bg-emerald/20 h-8 w-8 shrink-0 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Third Row - Three equal cards */}
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          <div className="bg-card group rounded-3xl border p-8 transition-all hover:shadow-lg">
            <div className="bg-emerald/10 text-emerald mb-4 inline-flex rounded-xl p-3">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-semibold">Lightning Fast</h3>
            <p className="text-muted-foreground">
              Automations deploy in minutes, not weeks. See results from day
              one.
            </p>
          </div>

          <div className="bg-card group rounded-3xl border p-8 transition-all hover:shadow-lg">
            <div className="bg-purple/10 text-purple mb-4 inline-flex rounded-xl p-3">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-semibold">Enterprise Security</h3>
            <p className="text-muted-foreground">
              Bank-grade encryption and compliance. Your data stays yours.
            </p>
          </div>

          <div className="bg-card group rounded-3xl border p-8 transition-all hover:shadow-lg">
            <div className="bg-coral/20 text-coral mb-4 inline-flex rounded-xl p-3">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-semibold">Dedicated Support</h3>
            <p className="text-muted-foreground">
              Real humans available when you need them. No chatbot runarounds.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
