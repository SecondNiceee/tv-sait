"use client"

import { useEffect, useRef, useState } from "react"
import { Tv, Zap, Shield } from "lucide-react"
import Image from "next/image"

export function TVModelsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const tvTypes = [
    {
      icon: <Tv className="w-8 h-8" />,
      title: "LED телевизоры",
      description: "Ремонт подсветки, замена светодиодов, настройка изображения",
      delay: "delay-100",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "OLED телевизоры",
      description: "Восстановление органических диодов, калибровка цветов",
      delay: "delay-200",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Smart TV",
      description: "Настройка ПО, восстановление системы, обновление прошивки",
      delay: "delay-300",
    },
  ]

  return (
    <section
      id="tv-models-section"
      ref={sectionRef}
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden"
    >
      <div className="container mx-auto px-3 sm:px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Левая часть - изображение */}
          <div
            className={`relative transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <div className="relative">
              <Image
                src="/tv-models.jpg"
                alt="Ремонт телевизоров"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          {/* Правая часть - контент */}
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
              Ремонтируем все типы телевизоров
            </h2>
            <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 leading-relaxed">
              Наши мастера имеют опыт работы с телевизорами всех популярных брендов: Samsung, LG, Sony, Philips,
              Panasonic и многими другими. Используем только оригинальные запчасти.
            </p>

            <div className="space-y-4 sm:space-y-6">
              {tvTypes.map((type, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-4 p-4 sm:p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 ${
                    isVisible ? `opacity-100 translate-y-0 ${type.delay}` : "opacity-0 translate-y-5"
                  }`}
                >
                  <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white">
                    {type.icon}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white">{type.title}</h3>
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed">{type.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
