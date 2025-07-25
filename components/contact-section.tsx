"use client"

import { useState } from "react"
import type React from "react"
import { Phone, MessageCircle, Mail, Instagram, Send, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    question: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-gray-300">Оставьте заявку и мы свяжемся с вами в течение 5 минут</p>
          </div>

          {/* Форма сверху */}
          <div className="mb-12">
            <Card className="border-0 shadow-2xl bg-white/10 backdrop-blur-sm max-w-2xl mx-auto">
              <CardContent className="p-8">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name" className="text-white text-lg font-medium mb-2 block">
                        Ваше имя
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="bg-white/20 border-white/30 text-white placeholder:text-gray-300 text-lg py-3 focus:bg-white/30 focus:border-blue-400"
                        placeholder="Введите ваше имя"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone" className="text-white text-lg font-medium mb-2 block">
                        Номер телефона
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="bg-white/20 border-white/30 text-white placeholder:text-gray-300 text-lg py-3 focus:bg-white/30 focus:border-blue-400"
                        placeholder="+7 (___) ___-__-__"
                      />
                    </div>

                    <div>
                      <Label htmlFor="question" className="text-white text-lg font-medium mb-2 block">
                        Опишите проблему подробнее
                      </Label>
                      <Textarea
                        id="question"
                        name="question"
                        required
                        value={formData.question}
                        onChange={handleInputChange}
                        rows={4}
                        className="bg-white/20 border-white/30 text-white placeholder:text-gray-300 text-lg focus:bg-white/30 focus:border-blue-400 resize-none"
                        placeholder="Опишите что случилось с телевизором, какие симптомы наблюдаете..."
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white py-4 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200"
                    >
                      <Send className="mr-3 h-5 w-5" />
                      Отправить заявку
                    </Button>
                  </form>
                ) : (
                  <div className="text-center py-8">
                    <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">Заявка отправлена!</h3>
                    <p className="text-gray-300">Мы свяжемся с вами в ближайшее время</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Контакты снизу */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <Phone className="h-8 w-8 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Телефоны</h3>
              <div className="space-y-2">
                <a href="tel:87077700795" className="block text-lg text-blue-300 hover:text-blue-200 transition-colors">
                  8 707 770 0795
                </a>
                <a href="tel:87066601500" className="block text-lg text-blue-300 hover:text-blue-200 transition-colors">
                  8 706 660 1500
                </a>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <MessageCircle className="h-8 w-8 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">WhatsApp</h3>
              <a
                href="https://wa.me/87077700795"
                className="text-lg text-green-300 hover:text-green-200 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                8 707 770 0795
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <Instagram className="h-8 w-8 text-pink-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Instagram</h3>
              <a
                href="https://instagram.com/teleatele.kz"
                className="text-lg text-pink-300 hover:text-pink-200 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                @teleatele.kz
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center break-words">
              <Mail className="h-8 w-8 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Email</h3>
              <a
                href="mailto:teleatele.kz@gmail.com"
                className="text-sm sm:text-base lg:text-lg text-yellow-300 hover:text-yellow-200 transition-colors break-all"
              >
                teleatele.kz@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
