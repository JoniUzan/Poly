"use client";

import { Button } from "@poly/ui/components/button";
import { CheckCircle2 } from "lucide-react";

export function Pricing() {
  return (
    <section className="bg-[#0a0a0f] py-24 text-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="text-lime mb-4 text-sm uppercase tracking-widest">
            Pricing for every need
          </p>
          <h2 className="mb-6 text-3xl font-bold sm:text-4xl md:text-5xl">
            Scale as you go with plans designed to match your growth.
          </h2>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          {/* Free/Starter Plan */}
          <div className="rounded-3xl bg-white p-8 text-gray-900">
            <h3 className="mb-2 text-2xl font-bold">Start for free.</h3>
            <p className="mb-6 text-gray-600">Get access to:</p>

            <ul className="mb-8 space-y-4">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-500" />
                <span>All core automation features</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-500" />
                <span>Built-in CRM integrations</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-500" />
                <span>AI chatbot system</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-500" />
                <span>Email automation</span>
              </li>
            </ul>

            <Button className="h-auto w-full rounded-xl bg-gray-900 px-6 py-4 text-base font-semibold text-white hover:bg-gray-800">
              Start building
            </Button>
          </div>

          {/* Pro Plan */}
          <div className="rounded-3xl bg-white p-8 text-gray-900">
            <div className="mb-2 flex items-baseline gap-2">
              <span className="text-sm text-gray-500">Custom plans from</span>
            </div>
            <h3 className="mb-2 text-4xl font-bold">
              $500<span className="text-lg font-normal text-gray-500">/mo</span>
            </h3>
            <p className="mb-6 text-gray-600">
              Upgrade as you go for more automations, more features, and
              dedicated support.
            </p>

            <Button className="h-auto w-full rounded-xl bg-gray-900 px-6 py-4 text-base font-semibold text-white hover:bg-gray-800">
              See all plans
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
