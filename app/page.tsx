import type { Metadata } from "next"
import HeroSection from "@/components/hero-section"
import FeatureSection from "@/components/feature-section"
import HowItWorks from "@/components/how-it-works"
import StyleShowcase from "@/components/style-showcase"
import PhotoComparison from "@/components/photo-comparison"
import Testimonials from "@/components/testimonials"
import Pricing from "@/components/pricing"
import FAQ from "@/components/faq"
import CTASection from "@/components/cta-section"
import ClientLogos from "@/components/client-logos"

export const metadata: Metadata = {
  title: "TryItOnAI | Professional AI Headshots in Minutes",
  description:
    "Transform your selfies into studio-quality professional headshots with AI. Trusted by 800,000+ professionals and 500+ global companies.",
  openGraph: {
    images: ["/og-image.jpg"],
  },
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <HeroSection />
      <ClientLogos />
      <FeatureSection />
      <PhotoComparison />
      <HowItWorks />
      <StyleShowcase />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTASection />
    </main>
  )
}

