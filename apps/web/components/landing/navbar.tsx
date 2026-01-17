"use client";

import { useState } from "react";
import { Button } from "@poly/ui/components/button";
import { Menu, X } from "lucide-react";
import { cn } from "@poly/ui/lib/utils";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="absolute left-0 right-0 top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-end">
          {/* Desktop CTA + Theme Toggle */}
          <div className="hidden items-center gap-3 md:flex">
            <ThemeToggle />
            <Button variant="outline" size="sm" className="rounded-full px-6">
              Log in
            </Button>
            <Button
              size="sm"
              className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-6"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button + Theme Toggle */}
          <div className="flex items-center gap-1 md:hidden">
            <ThemeToggle />
            <button
              className="text-muted-foreground hover:text-foreground p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "overflow-hidden transition-all duration-300 md:hidden",
            isMobileMenuOpen ? "max-h-64 pb-4" : "max-h-0"
          )}
        >
          <div className="bg-card/90 flex flex-col gap-3 rounded-2xl border p-4 backdrop-blur-sm">
            <Button variant="outline" size="sm" className="w-full rounded-full">
              Log in
            </Button>
            <Button
              size="sm"
              className="bg-foreground text-background hover:bg-foreground/90 w-full rounded-full"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
