"use client"

import { useEffect, useRef, useState } from "react"
import { Shield, Clock, Award, Users, Wrench, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function AdvantagesSection() {
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

  const advantages = [
    {
      icon: Shield,
      title: "Гарантия качества",
      description: "Предоставляем гарантию на все виды работ до 6 месяцев",
      color: "from-blue-500 to-blue-600",
      delay: "delay-100",
    },
    {
      icon: Clock,
      title: "Работаем 24/7",
      description: "Принимаем заявки круглосуточно, выезжаем в любое время",
      color: "from-green-500 to-green-600",
      delay: "delay-200",
    },
    {
      icon: Award,
      title: "15+ лет опыта",
      description: "Наши мастера имеют большой опыт работы с любыми моделями",
      color: "from-purple-500 to-purple-600",
      delay: "delay-300",
    },
    {
      icon: Users,
      title: "1000+ клиентов",
      description: "Более тысячи довольных клиентов доверили нам свою технику",
      color: "from-orange-500 to-orange-600",
      delay: "delay-[400ms]",
    },
    {
      icon: Wrench,
      title: "Оригинальные запчасти",
      description: "Используем только качественные и оригинальные комплектующие",
      color: "from-red-500 to-red-600",
      delay: "delay-500",
    },
    {
      icon: MapPin,
      title: "По всему городу",
      description: "Выезжаем во все районы Петропавловска без доплат",
      color: "from-teal-500 to-teal-600",
      delay: "delay-[600ms]",
    },
  ]

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Почему выбирают нас?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы предлагаем профессиональный сервис с гарантией качества и индивидуальным подходом к каждому клиенту
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon
            return (
              <Card
                key={index}
                className={`group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-white hover:bg-gray-50 ${
                  isVisible ? `opacity-100 translate-y-0 ${advantage.delay}` : "opacity-0 translate-y-10"
                }`}
              >
                <CardContent className="p-8 text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${advantage.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 relative z-10`}
                  >
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 relative z-10">{advantage.title}</h3>
                  <p className="text-gray-600 leading-relaxed relative z-10">{advantage.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
