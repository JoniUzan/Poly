"use client";

export function SocialProof() {
  // Placeholder company names - in production these would be actual client logos
  const companies = [
    "TechFlow",
    "ScaleUp Co",
    "DataDrive",
    "CloudNine",
    "AutoSphere",
    "InnovateCo",
  ];

  return (
    <section className="border-border/50 bg-secondary/30 border-y py-16">
      <div className="container mx-auto px-4">
        <p className="text-muted-foreground mb-8 text-center text-sm uppercase tracking-widest">
          Trusted by forward-thinking teams
        </p>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {companies.map((company) => (
            <div
              key={company}
              className="text-muted-foreground/40 hover:text-muted-foreground/70 text-xl font-semibold transition-colors md:text-2xl"
            >
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
