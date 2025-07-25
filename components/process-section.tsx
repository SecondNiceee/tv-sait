"use client"

import { useEffect, useRef, useState } from "react"
import { Phone, Calendar, Wrench, CheckCircle, ArrowRight } from "lucide-react"

export function ProcessSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeStep, setActiveStep] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Автоматическая анимация шагов
          const timer = setInterval(() => {
            setActiveStep((prev) => (prev + 1) % 4)
          }, 2000)
          return () => clearInterval(timer)
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
      title: "Звонок или заявка",
      description: "Позвоните нам или оставьте заявку на сайте. Мы ответим в течение 5 минут",
      details: ["Бесплатная консультация", "Предварительная диагностика", "Согласование времени"],
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Calendar,
      title: "Выезд мастера",
      description: "Мастер приедет в удобное для вас время с необходимым инструментом",
      details: ["Выезд в день обращения", "Профессиональный инструмент", "Опытный специалист"],
      color: "from-green-500 to-green-600",
    },
    {
      icon: Wrench,
      title: "Диагностика и ремонт",
      description: "Проводим полную диагностику и озвучиваем стоимость ремонта",
      details: ["Бесплатная диагностика", "Прозрачное ценообразование", "Качественные запчасти"],
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: CheckCircle,
      title: "Готовый результат",
      description: "Тестируем работу телевизора и предоставляем гарантию на выполненные работы",
      details: ["Полное тестирование", "Гарантия до 6 месяцев", "Рекомендации по эксплуатации"],
      color: "from-purple-500 to-purple-600",
    },
  ]

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white overflow-hidden relative"
    >
      {/* Декоративные элементы */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl font-bold text-white mb-4">Как мы работаем</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Простой и понятный процесс от заявки до готового результата
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Мобильная версия - вертикальная */}
          <div className="lg:hidden space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div
                  key={index}
                  className={`relative transition-all duration-700 ${
                    isVisible ? `opacity-100 translate-y-0` : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div
                        className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg`}
                      >
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <span className="text-sm font-bold text-gray-400 mr-3">0{index + 1}</span>
                          <h3 className="text-xl font-bold text-white">{step.title}</h3>
                        </div>
                        <p className="text-gray-300 mb-4">{step.description}</p>
                        <ul className="space-y-1">
                          {step.details.map((detail, idx) => (
                            <li key={idx} className="text-sm text-gray-400 flex items-center">
                              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="flex justify-center my-4">
                      <ArrowRight className="h-6 w-6 text-gray-500 rotate-90" />
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Десктопная версия - горизонтальная */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-4 gap-8 relative">
              {/* Соединительные линии */}
              <div className="absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-green-500 via-orange-500 to-purple-500 opacity-30"></div>

              {steps.map((step, index) => {
                const Icon = step.icon
                const isActive = activeStep === index
                return (
                  <div
                    key={index}
                    className={`text-center relative transition-all duration-700 ${
                      isVisible ? `opacity-100 translate-y-0` : "opacity-0 translate-y-10"
                    } ${isActive ? "scale-105" : ""}`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <div className="relative mb-6">
                      <div
                        className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center mx-auto shadow-lg transition-all duration-500 relative z-10 ${
                          isActive ? "scale-110 shadow-2xl" : "hover:scale-105"
                        }`}
                      >
                        <Icon className="h-10 w-10 text-white" />
                      </div>

                      {/* Пульсирующий эффект для активного шага */}
                      {isActive && (
                        <div className="absolute inset-0 w-20 h-20 mx-auto bg-gradient-to-br from-white/20 to-white/10 rounded-full animate-ping"></div>
                      )}

                      {/* Номер шага */}
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-sm font-bold text-gray-800 z-20 shadow-lg">
                        {index + 1}
                      </div>
                    </div>

                    <div
                      className={`bg-white/10 backdrop-blur-sm rounded-2xl p-6 h-64 flex flex-col justify-between transition-all duration-300 ${
                        isActive ? "bg-white/20 shadow-2xl" : "hover:bg-white/15"
                      }`}
                    >
                      <div>
                        <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
                        <p className="text-gray-300 leading-relaxed text-sm mb-4">{step.description}</p>
                      </div>

                      <ul className="space-y-2">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="text-xs text-gray-400 flex items-center">
                            <div className={`w-1.5 h-1.5 bg-gradient-to-r ${step.color} rounded-full mr-2`}></div>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Индикаторы прогресса */}
            <div className="flex justify-center mt-12 space-x-2">
              {steps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeStep === index ? "bg-blue-500 scale-125" : "bg-gray-600 hover:bg-gray-500"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
