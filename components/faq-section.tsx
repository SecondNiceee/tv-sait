"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function FAQSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [openItems, setOpenItems] = useState<number[]>([])
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

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index]))
  }

  const faqs = [
    {
      question: "Сколько стоит выезд мастера?",
      answer:
        "Выезд мастера бесплатный при заказе ремонта. Если ремонт не заказывается, стоимость выезда составляет 2000 ₸.",
    },
    {
      question: "Какая гарантия на ремонт?",
      answer: "Мы предоставляем гарантию от 3 до 6 месяцев в зависимости от сложности ремонта и замененных деталей.",
    },
    {
      question: "Как быстро можете приехать?",
      answer: "В большинстве случаев мастер может приехать в день обращения. Точное время согласовывается при звонке.",
    },
    {
      question: "Ремонтируете ли старые модели телевизоров?",
      answer:
        "Да, мы ремонтируем телевизоры любого возраста и производителя. У нас есть опыт работы с винтажными моделями.",
    },
    {
      question: "Что делать, если телевизор не включается?",
      answer:
        "Не пытайтесь ремонтировать самостоятельно. Позвоните нам, и мастер проведет диагностику для определения причины поломки.",
    },
    {
      question: "Можно ли отремонтировать разбитый экран?",
      answer: "Да, мы заменяем матрицы и экраны. Стоимость зависит от модели телевизора и размера экрана.",
    },
  ]

  return (
    <section
      ref={sectionRef}
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden"
    >
      <div className="container mx-auto px-3 sm:px-4">
        <div
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
            Часто задаваемые вопросы
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Ответы на самые популярные вопросы о ремонте телевизоров
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <Card
              key={index}
              className={`border-0 bg-white/10 backdrop-blur-sm shadow-lg hover:shadow-xl hover:bg-white/20 transition-all duration-500 ${
                isVisible ? `opacity-100 translate-y-0` : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-0">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full p-4 sm:p-6 text-left flex items-center justify-between hover:bg-white/10 transition-colors duration-200"
                >
                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-white pr-4">{faq.question}</h3>
                  {openItems.includes(index) ? (
                    <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 flex-shrink-0" />
                  )}
                </button>
                {openItems.includes(index) && (
                  <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-2">
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
