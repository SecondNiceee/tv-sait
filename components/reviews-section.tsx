"use client"

import { useEffect, useRef, useState } from "react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function ReviewsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const sectionRef = useRef<HTMLElement>(null)
  const sliderRef = useRef<HTMLDivElement>(null)

  const reviews = [
    {
      text: "Быстро и не дорого! Красавцы!",
      author: "Антон См...",
      date: "26 апреля 2023",
      avatar: "А",
      color: "from-blue-400 to-blue-500",
      image: "/reviews/review-anton.jpg",
      reviewsCount: "2 отзыва",
    },
    {
      text: "Отремонтировал здесь свой панасоник и не жалею, экран восстановили, гарантию дали, по цене приемлемо, по расположению доступно.",
      author: "MrLambokz",
      date: "10 декабря 2022",
      avatar: "M",
      color: "from-green-400 to-green-500",
      image: "/reviews/review-lambokz.jpg",
      reviewsCount: "627 отзывов",
    },
    {
      text: "Отличный сервис, всё быстро и качественно)",
      author: "Артем Ка...",
      date: "4 августа 2023",
      avatar: "А",
      color: "from-purple-400 to-purple-500",
      image: "/reviews/review-artem.jpg",
      reviewsCount: "4 отзыва",
    },
    {
      text: "Мастер Алексей, спасибо большое! Мастер своего дело это точно! Быстро и по хорошей цене сделали нам телевизор. Мы очень довольны 😂😂😂 Советую всем!!!",
      author: "Адия Тас...",
      date: "30 августа 2024",
      avatar: "А",
      color: "from-orange-400 to-orange-500",
      image: "/reviews/review-adiya.jpg",
      reviewsCount: "15 отзывов",
    },
    {
      text: "Крутой сервис быстро чётко качественно 👍",
      author: "Катерина...",
      date: "24 апреля 2024",
      avatar: "К",
      color: "from-pink-400 to-pink-500",
      image: "/reviews/review-katerina.jpg",
      reviewsCount: "5 отзывов",
    },
    {
      text: "Делаю не впервые, качественное обслуживание, вежливый персонал",
      author: "Владимир...",
      date: "11 января 2024",
      avatar: "В",
      color: "from-teal-400 to-teal-500",
      image: "/reviews/review-vladimir.jpg",
      reviewsCount: "10 отзывов",
    },
  ]

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

  // Автоматическая прокрутка
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % reviews.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, reviews.length])

  // Touch события для мобильных
  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return

    let startX = 0
    let isDragging = false

    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX
      isDragging = true
      setIsAutoPlaying(false)
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging) return
      e.preventDefault()
    }

    const handleTouchEnd = (e: TouchEvent) => {
      if (!isDragging) return
      isDragging = false

      const endX = e.changedTouches[0].clientX
      const diff = startX - endX

      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          nextSlide()
        } else {
          prevSlide()
        }
      }

      setTimeout(() => setIsAutoPlaying(true), 1000)
    }

    slider.addEventListener("touchstart", handleTouchStart)
    slider.addEventListener("touchmove", handleTouchMove)
    slider.addEventListener("touchend", handleTouchEnd)

    return () => {
      slider.removeEventListener("touchstart", handleTouchStart)
      slider.removeEventListener("touchmove", handleTouchMove)
      slider.removeEventListener("touchend", handleTouchEnd)
    }
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % reviews.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const handleMouseEnter = () => {
    setIsAutoPlaying(false)
  }

  const handleMouseLeave = () => {
    setIsAutoPlaying(true)
  }

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 overflow-hidden">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Отзывы наших клиентов</h2>
          <p className="text-xl text-gray-600">Более 1000 довольных клиентов за последний год</p>
        </div>

        <div className="relative max-w-6xl mx-auto" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          {/* Основной слайдер */}
          <div
            ref={sliderRef}
            className="relative overflow-hidden rounded-3xl shadow-2xl bg-white"
            style={{ height: "500px" }}
          >
            <div
              className="flex transition-transform duration-700 ease-in-out h-full"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {reviews.map((review, index) => (
                <div key={index} className="w-full flex-shrink-0 relative">
                  <div className="grid lg:grid-cols-2 h-full">
                    {/* Изображение отзыва */}
                    <div className="relative overflow-hidden bg-gray-900 flex items-center justify-center">
                      <div className="relative w-full h-full flex items-center justify-center">
                        {/* Placeholder пока загружается */}
                        <div className="absolute inset-0 bg-gray-800 animate-pulse flex items-center justify-center">
                          <div className="text-gray-400 text-lg">Загрузка...</div>
                        </div>

                        <Image
                          src={review.image || "/placeholder.svg"}
                          alt={`Отзыв ${review.author}`}
                          width={400}
                          height={300}
                          className="object-contain max-w-full max-h-full relative z-10"
                          loading={index === currentSlide ? "eager" : "lazy"}
                          priority={index === 0}
                          onLoad={(e) => {
                            // Скрываем placeholder после загрузки
                            const placeholder = e.currentTarget.parentElement?.querySelector(".animate-pulse")
                            if (placeholder) {
                              placeholder.classList.add("opacity-0")
                            }
                          }}
                        />
                      </div>
                    </div>

                    {/* Контент отзыва */}
                    <div className="p-8 lg:p-12 flex flex-col justify-center bg-white">
                      <div className="flex mb-6">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                        ))}
                      </div>

                      <blockquote className="text-xl lg:text-2xl text-gray-700 mb-8 leading-relaxed font-medium">
                        "{review.text}"
                      </blockquote>

                      <div className="flex items-center mb-4">
                        <div
                          className={`w-16 h-16 bg-gradient-to-br ${review.color} rounded-full flex items-center justify-center text-white font-bold text-xl mr-4`}
                        >
                          {review.avatar}
                        </div>
                        <div>
                          <p className="font-bold text-gray-900 text-lg">{review.author}</p>
                          <p className="text-gray-500 text-sm">{review.reviewsCount}</p>
                        </div>
                      </div>

                      <div className="text-gray-500 text-sm">
                        <p>{review.date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Кнопки навигации */}
          <Button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 hover:bg-white shadow-lg border-0 z-10"
            size="sm"
          >
            <ChevronLeft className="h-6 w-6 text-gray-700" />
          </Button>

          <Button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 hover:bg-white shadow-lg border-0 z-10"
            size="sm"
          >
            <ChevronRight className="h-6 w-6 text-gray-700" />
          </Button>

          {/* Индикаторы точек */}
          <div className="flex justify-center mt-8 space-x-3">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? "bg-blue-600 scale-125" : "bg-gray-400 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>

          {/* Прогресс бар */}
          <div className="mt-6 max-w-md mx-auto">
            <div className="w-full bg-gray-300 rounded-full h-1">
              <div
                className="bg-blue-600 h-1 rounded-full transition-all duration-300"
                style={{ width: `${((currentSlide + 1) / reviews.length) * 100}%` }}
              />
            </div>
            <div className="flex justify-between text-sm text-gray-500 mt-2">
              <span>
                {currentSlide + 1} из {reviews.length}
              </span>
              <span>Отзывы клиентов</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
