"use client"

import { useEffect, useRef, useState } from "react"
import { Check, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CallMasterModal } from "@/components/call-master-modal"

export function PricingSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedService, setSelectedService] = useState("")
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
      message: "Здравствуйте, интересует диагностика, цена: бесплатно",
    },
    {
      title: "Стандартный ремонт",
      price: "от 5000 ₸",
      description: "Большинство поломок",
      features: ["Замена деталей", "Настройка", "Гарантия 6 месяца"],
      color: "from-green-500 to-green-600",
      delay: "delay-200",
      popular: true,
      message: "Здравствуйте, интересует стандартный ремонт, цена: от 5000 ₸",
    },
    {
      title: "Сложный ремонт",
      price: "от 10000 ₸",
      description: "Серьезные поломки",
      features: ["Ремонт платы", "Замена матрицы", "Гарантия 12 месяцев"],
      color: "from-purple-500 to-purple-600",
      delay: "delay-300",
      message: "Здравствуйте, интересует сложный ремонт, цена: от 10000 ₸",
    },
  ]

  const handleServiceOrder = (service: any) => {
    setSelectedService(service.message)
    setIsModalOpen(true)
  }

  return (
    <>
      <section
        ref={sectionRef}
        className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden"
      >
        <div className="container mx-auto px-3 sm:px-4">
          <div
            className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">Наши цены</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Честные цены без скрытых доплат. Окончательная стоимость определяется после диагностики
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <Card
                key={index}
                className={`relative border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 ${
                  service.popular ? "ring-2 ring-green-500 scale-105" : ""
                } ${isVisible ? `opacity-100 translate-y-0 ${service.delay}` : "opacity-0 translate-y-10"}`}
              >
                {service.popular && (
                  <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-semibold flex items-center">
                      <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                      Популярно
                    </div>
                  </div>
                )}
                <CardContent className="p-4 sm:p-6 lg:p-8 text-center">
                  <div
                    className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br ${service.color} rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <span className="text-lg sm:text-xl lg:text-2xl font-bold text-white">₸</span>
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 text-white">{service.title}</h3>
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-2">{service.price}</div>
                  <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6">{service.description}</p>
                  <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center justify-center">
                        <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 mr-2" />
                        <span className="text-sm sm:text-base text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full bg-gradient-to-r ${service.color} hover:opacity-90 text-white py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold transition-all duration-200 text-sm sm:text-base`}
                    onClick={() => handleServiceOrder(service)}
                  >
                    Заказать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CallMasterModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} defaultMessage={selectedService} />
    </>
  )
}
