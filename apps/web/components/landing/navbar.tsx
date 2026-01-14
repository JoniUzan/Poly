"use client";

import { useState } from "react";
import { Button } from "@poly/ui/components/button";
import { Menu, X } from "lucide-react";
import { cn } from "@poly/ui/lib/utils";
import { ThemeToggle } from "./theme-toggle";

const navLinks = [
  { label: "Solutions", href: "#solutions" },
  { label: "Features", href: "#features" },
  { label: "About", href: "#about" },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-background/80 border-border/50 fixed left-0 right-0 top-0 z-50 border-b backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="text-xl font-bold">
            <span className="from-emerald to-purple bg-gradient-to-r bg-clip-text text-transparent">
              Poly
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-muted-foreground hover:text-foreground text-sm transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA + Theme Toggle */}
          <div className="hidden items-center gap-2 md:flex">
            <ThemeToggle />
            <Button size="sm">Get Started</Button>
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
          <div className="border-border/50 flex flex-col gap-4 border-t pt-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button size="sm" className="mt-2 w-full">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
