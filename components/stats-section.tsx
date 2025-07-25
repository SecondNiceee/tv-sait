"use client"

import { useEffect, useRef, useState } from "react"
import { Users, Clock, Award, MapPin } from "lucide-react"

export function StatsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [counters, setCounters] = useState({ clients: 0, years: 0, repairs: 0, districts: 0 })
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          animateCounters()
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const animateCounters = () => {
    const targets = { clients: 1200, years: 15, repairs: 5000, districts: 8 }
    const duration = 2000
    const steps = 60

    let step = 0
    const timer = setInterval(() => {
      step++
      const progress = step / steps

      setCounters({
        clients: Math.floor(targets.clients * progress),
        years: Math.floor(targets.years * progress),
        repairs: Math.floor(targets.repairs * progress),
        districts: Math.floor(targets.districts * progress),
      })

      if (step >= steps) {
        clearInterval(timer)
        setCounters(targets)
      }
    }, duration / steps)
  }

  const stats = [
    {
      icon: Users,
      value: counters.clients,
      suffix: "+",
      label: "Довольных клиентов",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Clock,
      value: counters.years,
      suffix: "+",
      label: "Лет опыта",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Award,
      value: counters.repairs,
      suffix: "+",
      label: "Выполненных ремонтов",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: MapPin,
      value: counters.districts,
      suffix: "",
      label: "Районов города",
      color: "from-orange-500 to-orange-600",
    },
  ]

  return (
    <section ref={sectionRef} className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Наши достижения</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Цифры, которые говорят о нашем профессионализме</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className={`text-center transition-all duration-700 ${
                  isVisible ? `opacity-100 translate-y-0` : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div
                  className={`w-20 h-20 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <Icon className="h-10 w-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {stat.value}
                  {stat.suffix}
                </div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
