"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@poly/ui/components/card";
import {
  Mail,
  Calendar,
  FileSpreadsheet,
  MessageSquare,
  Database,
  BarChart3,
  Webhook,
  Workflow,
} from "lucide-react";

const features = [
  {
    icon: Mail,
    title: "Email Automation",
    description:
      "Automatically send personalized follow-ups, onboarding sequences, and triggered notifications based on customer actions.",
  },
  {
    icon: Calendar,
    title: "Scheduling Systems",
    description:
      "Let clients book meetings directly into your calendar with automated reminders, prep emails, and follow-up tasks.",
  },
  {
    icon: FileSpreadsheet,
    title: "Document Processing",
    description:
      "Extract data from invoices, contracts, and forms automatically. No more manual data entry or copy-paste errors.",
  },
  {
    icon: MessageSquare,
    title: "Customer Support Bots",
    description:
      "AI-powered chat agents that answer FAQs, qualify leads, and escalate complex issues to your team — instantly.",
  },
  {
    icon: Database,
    title: "Data Synchronization",
    description:
      "Keep your CRM, accounting software, and marketing tools in perfect sync. Updates flow automatically between systems.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description:
      "Real-time dashboards that pull data from all your tools. Get weekly reports delivered without lifting a finger.",
  },
  {
    icon: Webhook,
    title: "API Integrations",
    description:
      "Connect any software in your stack. We build custom integrations that make your tools work together seamlessly.",
  },
  {
    icon: Workflow,
    title: "Process Orchestration",
    description:
      "Complex, multi-step workflows that trigger automatically. From lead capture to customer onboarding — all automated.",
  },
];

export function Features() {
  return (
    <section className="bg-secondary/30 py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="text-emerald mb-4 text-sm uppercase tracking-widest">
            Automation Categories
          </p>
          <h2 className="mb-6 text-3xl font-bold sm:text-4xl md:text-5xl">
            What We Automate
          </h2>
          <p className="text-muted-foreground text-lg">
            From simple email sequences to complex multi-system workflows, we
            build automation solutions for every part of your business.
          </p>
        </div>

        <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="border-border/50 bg-card/50 hover:border-emerald/30 hover:shadow-emerald/5 group backdrop-blur-sm transition-all hover:shadow-lg"
            >
              <CardHeader className="pb-4">
                <div className="bg-emerald/10 text-emerald group-hover:bg-emerald/20 mb-2 w-fit rounded-lg p-3 transition-colors">
                  <feature.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
