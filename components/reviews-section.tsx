"use client"

import { useEffect, useRef, useState } from "react"
import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function ReviewsSection() {
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

  const reviews = [
    {
      text: "Быстро приехали, качественно отремонтировали Samsung. Мастер очень вежливый и профессиональный. Рекомендую!",
      author: "Анна Козлова",
      date: "2 дня назад",
      avatar: "А",
      color: "from-blue-400 to-blue-500",
      delay: "delay-100",
    },
    {
      text: "Отличный сервис! Телевизор LG работает как новый. Цены адекватные, работа выполнена качественно.",
      author: "Дмитрий Михайлов",
      date: "1 неделю назад",
      avatar: "Д",
      color: "from-green-400 to-green-500",
      delay: "delay-200",
    },
    {
      text: "Мастер приехал в тот же день, быстро нашел проблему и устранил. Спасибо за оперативность и профессионализм!",
      author: "Елена Васильева",
      date: "3 дня назад",
      avatar: "Е",
      color: "from-purple-400 to-purple-500",
      delay: "delay-300",
    },
  ]

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 overflow-hidden">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Отзывы наших клиентов</h2>
          <p className="text-xl text-gray-600">Более 1000 довольных клиентов за последний год</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <Card
              key={index}
              className={`border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${isVisible ? `opacity-100 translate-y-0 ${review.delay}` : "opacity-0 translate-y-10"}`}
            >
              <CardContent className="p-8">
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current animate-pulse"
                      style={{ animationDelay: `${i * 100}ms` }}
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed text-lg">{review.text}</p>
                <div className="flex items-center">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${review.color} rounded-full flex items-center justify-center text-white font-bold text-lg mr-4 hover:scale-110 transition-transform duration-300`}
                  >
                    {review.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{review.author}</p>
                    <p className="text-gray-500 text-sm">{review.date}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
