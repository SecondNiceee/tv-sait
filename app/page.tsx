"use client"

import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { TVModelsSection } from "@/components/tv-models-section"
import { ReviewsSection } from "@/components/reviews-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { AdvantagesSection } from "@/components/advantages-section"
import { ProcessSection } from "@/components/process-section"
import { PricingSection } from "@/components/pricing-section"
import { FAQSection } from "@/components/faq-section"
import { StatsSection } from "@/components/stats-section"

export default function TVRepairLanding() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection /> {/* Темная */}
      <ServicesSection /> {/* Темная */}
      <AdvantagesSection /> {/* Светлая */}
      <TVModelsSection /> {/* Темная */}
      <ProcessSection /> {/* Светлая */}
      <StatsSection /> {/* Светлая */}
      <PricingSection /> {/* Светлая */}
      <ReviewsSection /> {/* Светлая */}
      <FAQSection /> {/* Темная */}
      <ContactSection /> {/* Темная */}
      <Footer /> {/* Темная */}
    </div>
  )
}
