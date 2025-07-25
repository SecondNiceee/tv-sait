"use client"

import { useEffect, useRef, useState } from "react"
import { Home, Clock, Wrench } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function ServicesSection() {
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
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl font-bold text-white mb-4">Наши преимущества</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Профессиональный ремонт телевизоров с выездом на дом
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card
            className={`group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 ${isVisible ? "opacity-100 translate-y-0 delay-100" : "opacity-0 translate-y-10"}`}
          >
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Home className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Выезд на дом</h3>
              <p className="text-gray-300 leading-relaxed">
                Мастер приедет к вам домой в удобное время. Не нужно везти тяжелый телевизор в сервис
              </p>
            </CardContent>
          </Card>

          <Card
            className={`group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 ${isVisible ? "opacity-100 translate-y-0 delay-200" : "opacity-0 translate-y-10"}`}
          >
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Срочный ремонт</h3>
              <p className="text-gray-300 leading-relaxed">
                Быстрая диагностика и качественный ремонт. Большинство поломок устраняем в день обращения
              </p>
            </CardContent>
          </Card>

          <Card
            className={`group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 ${isVisible ? "opacity-100 translate-y-0 delay-300" : "opacity-0 translate-y-10"}`}
          >
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Wrench className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Все бренды</h3>
              <p className="text-gray-300 leading-relaxed">
                Ремонтируем телевизоры любых марок: Samsung, LG, Sony, Philips и многие другие
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
