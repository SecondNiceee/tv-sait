"use client"

import { useState } from "react"
import type React from "react"
import { X, Send, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

interface CallMasterModalProps {
  isOpen: boolean
  onClose: () => void
}

export function CallMasterModal({ isOpen, onClose }: CallMasterModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    problem: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      onClose()
      setFormData({ name: "", phone: "", problem: "" })
    }, 3000)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200 z-10"
        >
          <X className="w-4 h-4 text-gray-600" />
        </button>

        <div className="p-8">
          {!isSubmitted ? (
            <>
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Вызвать мастера</h2>
                <p className="text-gray-600">Заполните форму и мы свяжемся с вами в течение 5 минут</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="modal-name" className="text-gray-700 text-sm font-medium mb-2 block">
                    Ваше имя *
                  </Label>
                  <Input
                    id="modal-name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                    placeholder="Введите ваше имя"
                  />
                </div>

                <div>
                  <Label htmlFor="modal-phone" className="text-gray-700 text-sm font-medium mb-2 block">
                    Номер телефона *
                  </Label>
                  <Input
                    id="modal-phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>

                <div>
                  <Label htmlFor="modal-problem" className="text-gray-700 text-sm font-medium mb-2 block">
                    Опишите проблему подробнее *
                  </Label>
                  <Textarea
                    id="modal-problem"
                    name="problem"
                    required
                    value={formData.problem}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 resize-none"
                    placeholder="Опишите что случилось с телевизором, какие симптомы наблюдаете..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                >
                  <Send className="mr-3 h-5 w-5" />
                  Отправить заявку
                </Button>
              </form>
            </>
          ) : (
            <div className="text-center py-8">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Заявка отправлена!</h3>
              <p className="text-gray-600 mb-4">Мы свяжемся с вами в ближайшее время</p>
              <div className="text-sm text-gray-500">Окно закроется автоматически...</div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
