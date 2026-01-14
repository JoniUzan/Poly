import {
  Navbar,
  Hero,
  SocialProof,
  Problem,
  Solution,
  Features,
  CTA,
  Footer,
} from "@/components/landing";

export default function Page() {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      <div className="pt-16">
        {/* pt-16 to offset the fixed navbar */}
        <Hero />
        <SocialProof />
        <Problem />
        <Solution />
        <Features />
        <CTA />
        <Footer />
      </div>
    </main>
  );
}
