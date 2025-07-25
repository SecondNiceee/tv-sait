"use client"

import { useEffect, useRef, useState } from "react"
import { Phone, Calendar, Wrench, CheckCircle } from "lucide-react"

export function ProcessSection() {
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

  const steps = [
    {
      icon: Phone,
      title: "Звонок",
      description: "Позвоните нам или оставьте заявку на сайте",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Calendar,
      title: "Согласование",
      description: "Согласуем удобное время для выезда мастера",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Wrench,
      title: "Диагностика",
      description: "Мастер проведет диагностику и озвучит стоимость",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: CheckCircle,
      title: "Ремонт",
      description: "Выполняем ремонт и тестируем работу телевизора",
      color: "from-purple-500 to-purple-600",
    },
  ]

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Как мы работаем</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Простой и понятный процесс от заявки до готового результата
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connecting lines */}
            <div className="hidden lg:block absolute top-20 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-blue-200 via-green-200 via-orange-200 to-purple-200"></div>

            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div
                  key={index}
                  className={`text-center relative transition-all duration-700 ${
                    isVisible ? `opacity-100 translate-y-0` : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="relative mb-6">
                    <div
                      className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center mx-auto shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 relative z-10`}
                    >
                      <Icon className="h-10 w-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -left-2 w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full opacity-20 animate-pulse"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-sm font-bold text-gray-600 z-20">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
