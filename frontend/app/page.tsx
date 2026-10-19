import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ServicesBento } from "@/components/services-bento"
import { TeamRevealGrid } from "@/components/team-reveal-grid"
import { MarqueeGallery } from "@/components/marquee-gallery"
import { TestimonialsSection } from "@/components/testimonials"
import { LocationHours } from "@/components/location-hours"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Urban Gloss | Next-Gen Hair Artistry & Balayage | Dublin",
  description:
    "Dublin's colour and finish atelier on Wicklow Street. Bespoke precision haircuts, dimensional balayage, Olaplex bond repair, and couture bridal styling.",
  alternates: { canonical: "/" },
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-foreground selection:text-background">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <ServicesBento />
        <TeamRevealGrid />
        <MarqueeGallery />
        <TestimonialsSection />
        <LocationHours />
      </main>
      <Footer />
    </div>
  )
}
