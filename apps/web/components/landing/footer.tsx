"use client";

import { Separator } from "@poly/ui/components/separator";

export function Footer() {
  return (
    <footer className="border-border/50 bg-card/30 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8 grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="mb-4 text-2xl font-bold">
              <span className="from-emerald to-purple bg-gradient-to-r bg-clip-text text-transparent">
                Poly
              </span>
            </div>
            <p className="text-muted-foreground max-w-md text-sm">
              We build custom AI automation solutions that help businesses scale
              without scaling headcount. Less manual work. More growth.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Services</h4>
            <ul className="text-muted-foreground space-y-2 text-sm">
              <li className="hover:text-foreground cursor-pointer transition-colors">
                AI Agents
              </li>
              <li className="hover:text-foreground cursor-pointer transition-colors">
                Workflow Automation
              </li>
              <li className="hover:text-foreground cursor-pointer transition-colors">
                CRM Integration
              </li>
              <li className="hover:text-foreground cursor-pointer transition-colors">
                Custom Solutions
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Company</h4>
            <ul className="text-muted-foreground space-y-2 text-sm">
              <li className="hover:text-foreground cursor-pointer transition-colors">
                About
              </li>
              <li className="hover:text-foreground cursor-pointer transition-colors">
                Case Studies
              </li>
              <li className="hover:text-foreground cursor-pointer transition-colors">
                Contact
              </li>
              <li className="hover:text-foreground cursor-pointer transition-colors">
                Privacy Policy
              </li>
            </ul>
          </div>
        </div>

        <Separator className="bg-border/50 my-8" />

        <div className="text-muted-foreground flex flex-col items-center justify-between gap-4 text-sm sm:flex-row">
          <p>
            © {new Date().getFullYear()} Poly Automations. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Built with <span className="text-emerald">♥</span> using integrated
            cloud workflows
          </p>
        </div>
      </div>
    </footer>
  );
}
