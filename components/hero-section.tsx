"use client"

import { useState } from "react"
import { Phone, MessageCircle, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CallMasterModal } from "@/components/call-master-modal"

export function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-3 sm:px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-blue-600/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-3 sm:px-6 py-2 mb-6 sm:mb-8">
              <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-blue-300" />
              <span className="text-blue-100 text-xs sm:text-sm font-medium">
                Работаем 24/7 • Выезд в день обращения
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight px-2">
              Сервисный Центр
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Теле-Ателье
              </span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 text-gray-300 font-light px-4">
              Срочный ремонт телевизоров
            </p>
            <p className="text-sm sm:text-base lg:text-lg mb-8 sm:mb-10 text-gray-400 px-4">
              Профессиональный ремонт на дому • Все бренды • Гарантия качества
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white px-6 sm:px-10 py-4 sm:py-6 text-base sm:text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200"
                onClick={() => setIsModalOpen(true)}
              >
                <Phone className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6" />
                Вызвать мастера
              </Button>
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-6 sm:px-10 py-4 sm:py-6 text-base sm:text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200"
                onClick={() => window.open("https://wa.me/87077700795")}
              >
                <MessageCircle className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6" />
                WhatsApp
              </Button>
            </div>

            <div className="flex items-center justify-center text-gray-300 bg-white/10 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 inline-flex">
              <MapPin className="mr-2 h-4 w-4 sm:h-5 sm:w-5 text-blue-300" />
              <span className="text-sm sm:text-base lg:text-lg font-medium">г. Петропавловск</span>
            </div>
          </div>
        </div>
      </section>

      <CallMasterModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
