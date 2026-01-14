import {
  Navbar,
  Hero,
  Features,
  Pricing,
  CTA,
  Footer,
} from "@/components/landing";

export default function Page() {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
