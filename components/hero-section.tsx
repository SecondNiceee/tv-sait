"use client"

import { Phone, MessageCircle, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-24 overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center bg-blue-600/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-6 py-2 mb-8">
            <Clock className="w-4 h-4 mr-2 text-blue-300" />
            <span className="text-blue-100 text-sm font-medium">Работаем 24/7 • Выезд в день обращения</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Сервисный Центр
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Теле-Ателье
            </span>
          </h1>

          <p className="text-xl md:text-2xl mb-4 text-gray-300 font-light">Срочный ремонт телевизоров</p>
          <p className="text-lg mb-10 text-gray-400">
            Профессиональный ремонт на дому • Все бренды • Гарантия качества
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white px-10 py-6 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200"
              onClick={() => window.open("tel:87077700795")}
            >
              <Phone className="mr-3 h-6 w-6" />
              Вызвать мастера
            </Button>
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-10 py-6 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200"
              onClick={() => window.open("https://wa.me/87077700795")}
            >
              <MessageCircle className="mr-3 h-6 w-6" />
              WhatsApp
            </Button>
          </div>

          <div className="flex items-center justify-center text-gray-300 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 inline-flex">
            <MapPin className="mr-2 h-5 w-5 text-blue-300" />
            <span className="text-lg font-medium">г. Петропавловск</span>
          </div>
        </div>
      </div>
    </section>
  )
}
