"use client"

import { useEffect, useRef, useState } from "react"
import { Check, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function PricingSection() {
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

  const services = [
    {
      title: "Диагностика",
      price: "Бесплатно",
      description: "При заказе ремонта",
      features: ["Выезд мастера", "Полная диагностика", "Консультация"],
      color: "from-blue-500 to-blue-600",
      delay: "delay-100",
    },
    {
      title: "Стандартный ремонт",
      price: "от 5000 ₸",
      description: "Большинство поломок",
      features: ["Замена деталей", "Настройка", "Гарантия 3 месяца"],
      color: "from-green-500 to-green-600",
      delay: "delay-200",
      popular: true,
    },
    {
      title: "Сложный ремонт",
      price: "от 10000 ₸",
      description: "Серьезные поломки",
      features: ["Ремонт платы", "Замена матрицы", "Гарантия 6 месяцев"],
      color: "from-purple-500 to-purple-600",
      delay: "delay-300",
    },
  ]

  return (
    <section ref={sectionRef} className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Наши цены</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Честные цены без скрытых доплат. Окончательная стоимость определяется после диагностики
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`relative border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 ${
                service.popular ? "ring-2 ring-green-500 scale-105" : ""
              } ${isVisible ? `opacity-100 translate-y-0 ${service.delay}` : "opacity-0 translate-y-10"}`}
            >
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Популярно
                  </div>
                </div>
              )}
              <CardContent className="p-8 text-center">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <span className="text-2xl font-bold text-white">₸</span>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-gray-900">{service.title}</h3>
                <div className="text-3xl font-bold text-gray-900 mb-2">{service.price}</div>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center justify-center">
                      <Check className="w-5 h-5 text-green-500 mr-2" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full bg-gradient-to-r ${service.color} hover:opacity-90 text-white py-3 rounded-xl font-semibold transition-all duration-200`}
                  onClick={() => window.open("tel:87077700795")}
                >
                  Заказать
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
