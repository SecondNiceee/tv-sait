"use client"

import { HeroSection } from "@/components/hero-section"
import { TVModelsSection } from "@/components/tv-models-section"
import { ProcessSection } from "@/components/process-section"
import { AdvantagesSection } from "@/components/advantages-section"
import { PricingSection } from "@/components/pricing-section"
import { StatsSection } from "@/components/stats-section"
import { ReviewsSection } from "@/components/reviews-section"
import { FAQSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function TVRepairLanding() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection /> {/* 1. Hero-section первая (Темная) */}
      <TVModelsSection /> {/* 2. Ремонтируем все типы телевизоров (Темная) */}
      <ProcessSection /> {/* 3. Как мы работаем (Светлая) */}
      <AdvantagesSection /> {/* 4. Почему выбирают именно нас (Светлая) */}
      <PricingSection /> {/* 5. Наши цены (Темная) */}
      <StatsSection /> {/* 6. Достижения (Светлая) */}
      <ReviewsSection /> {/* 7. Отзывы (Светлая) */}
      <FAQSection /> {/* 8. Вопросы (Темная) */}
      <ContactSection /> {/* 9. Свяжитесь с нами (Темная) */}
      <Footer /> {/* 10. Футер (Темная) */}
    </div>
  )
}
