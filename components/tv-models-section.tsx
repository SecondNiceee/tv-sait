"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Star } from "lucide-react"

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

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <div
            className={`flex justify-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-3xl transform rotate-3 animate-pulse"></div>
              <Image
                src="/tv-models.png"
                alt="Различные модели телевизоров"
                width={600}
                height={400}
                className="relative rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <h2 className="text-4xl font-bold mb-8 text-white leading-tight">Ремонтируем все типы телевизоров</h2>
            <div className="space-y-6">
              {[
                {
                  title: "LED и OLED телевизоры",
                  desc: "Современные модели с высоким разрешением",
                  delay: "delay-100",
                },
                { title: "Smart TV любых брендов", desc: "Умные телевизоры с интернет-функциями", delay: "delay-200" },
                { title: "Плазменные панели", desc: "Классические плазменные телевизоры", delay: "delay-300" },
                { title: "ЖК телевизоры", desc: "Жидкокристаллические дисплеи всех размеров", delay: "delay-[400ms]" },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`flex items-start space-x-4 transition-all duration-700 ${isVisible ? `opacity-100 translate-x-0 ${item.delay}` : "opacity-0 translate-x-5"}`}
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1 hover:scale-110 transition-transform duration-300">
                    <Star className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-300">{item.desc}</p>
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
