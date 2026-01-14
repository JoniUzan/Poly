"use client";

import { useState } from "react";
import { Button } from "@poly/ui/components/button";
import { Input } from "@poly/ui/components/input";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

export function CTA() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <section className="relative overflow-hidden py-24">
      {/* Background effects */}
      <div className="from-emerald/10 to-purple/10 absolute inset-0 bg-gradient-to-t via-transparent" />
      <div className="bg-emerald/5 absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl" />

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-2xl">
          <div className="mb-12 text-center">
            <h2 className="mb-6 text-3xl font-bold sm:text-4xl md:text-5xl">
              Ready to{" "}
              <span className="from-emerald to-purple bg-gradient-to-r bg-clip-text text-transparent">
                Automate
              </span>
              ?
            </h2>
            <p className="text-muted-foreground text-lg">
              Book a free automation audit. We&apos;ll analyze your current
              workflows and show you exactly where AI can save you time and
              money.
            </p>
          </div>

          <div className="bg-card/80 border-border/50 rounded-2xl border p-8 shadow-xl backdrop-blur-sm">
            {isSubmitted ? (
              <div className="py-8 text-center">
                <div className="bg-emerald/10 text-emerald mb-4 inline-flex rounded-full p-4">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">
                  Thanks for reaching out!
                </h3>
                <p className="text-muted-foreground">
                  We&apos;ll be in touch within 24 hours to schedule your free
                  automation audit.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-foreground text-sm font-medium"
                    >
                      Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="John Smith"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="bg-background"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="company"
                      className="text-foreground text-sm font-medium"
                    >
                      Company
                    </label>
                    <Input
                      id="company"
                      type="text"
                      placeholder="Acme Inc"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      required
                      className="bg-background"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-foreground text-sm font-medium"
                  >
                    Work Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-background"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="group h-auto w-full py-6 text-base"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Book Your Free Audit
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </Button>
                <p className="text-muted-foreground text-center text-xs">
                  No commitment required. We&apos;ll review your workflows and
                  provide actionable recommendations.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
