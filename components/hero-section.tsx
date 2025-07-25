"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { CallMasterModal } from "./call-master-modal"
import Image from "next/image"

export function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const scrollToNextSection = () => {
    const nextSection = document.getElementById("tv-models-section")
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      <section className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white relative overflow-hidden flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image src="/tv-hero.jpeg" alt="TV Repair Background" fill className="object-cover opacity-20" priority />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-gray-900/70 to-black/90"></div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl animate-spin-slow"></div>
        </div>

        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent leading-tight">
                Ремонт телевизоров
                <span className="block text-4xl md:text-6xl mt-2 text-yellow-400">на дому</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Быстрый и качественный ремонт телевизоров всех марок. Выезд мастера в день обращения. Гарантия на все
                виды работ.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-delay">
              <Button
                onClick={() => setIsModalOpen(true)}
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
              >
                Вызвать мастера
              </Button>

              <Button
                onClick={scrollToNextSection}
                variant="outline"
                size="lg"
                className="bg-transparent border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-sm transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 group"
              >
                Читать далее
                <ChevronDown className="ml-2 h-5 w-5 animate-bounce group-hover:translate-y-1 transition-transform duration-300" />
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center animate-fade-in-delay-2">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                <div className="text-3xl font-bold text-yellow-400 mb-2">24/7</div>
                <div className="text-gray-300">Работаем круглосуточно</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                <div className="text-3xl font-bold text-yellow-400 mb-2">1 год</div>
                <div className="text-gray-300">Гарантия на ремонт</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                <div className="text-3xl font-bold text-yellow-400 mb-2">30 мин</div>
                <div className="text-gray-300">Время приезда мастера</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="animate-bounce">
            <ChevronDown className="h-8 w-8 text-white/60" />
          </div>
        </div>
      </section>

      <CallMasterModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
