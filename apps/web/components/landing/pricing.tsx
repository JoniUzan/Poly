"use client";

import { Button } from "@poly/ui/components/button";
import { CheckCircle2 } from "lucide-react";

export function Pricing() {
  return (
    <section className="bg-[#0a0a0f] py-24 text-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-lime mb-4 text-sm uppercase tracking-widest">
              Pricing
            </p>
            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
              Every project is unique. We'll build a custom solution and quote
              tailored to your needs.
            </h2>
          </div>

          <div className="rounded-3xl bg-white p-8 text-gray-900">
            <h3 className="mb-2 text-2xl font-bold">Custom Quote</h3>
            <p className="mb-6 text-gray-600">
              Tell us about your project and we'll provide a tailored proposal.
            </p>

            <ul className="mb-8 space-y-4">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-green-500" />
                <span>Free discovery call</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-green-500" />
                <span>Custom proposal</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-green-500" />
                <span>Flexible payment terms</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-green-500" />
                <span>Ongoing support included</span>
              </li>
            </ul>

            <Button className="h-auto w-full rounded-xl bg-gray-900 px-6 py-4 text-base font-semibold text-white hover:bg-gray-800">
              Contact us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
