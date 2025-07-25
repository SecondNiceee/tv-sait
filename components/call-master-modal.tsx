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
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-4">
      <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl max-w-sm sm:max-w-md w-full max-h-[90vh] overflow-y-auto relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 w-7 h-7 sm:w-8 sm:h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200 z-10"
        >
          <X className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" />
        </button>

        <div className="p-4 sm:p-6 lg:p-8">
          {!isSubmitted ? (
            <>
              <div className="text-center mb-4 sm:mb-6">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Вызвать мастера</h2>
                <p className="text-sm sm:text-base text-gray-600">
                  Заполните форму и мы свяжемся с вами в течение 5 минут
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
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
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 text-sm sm:text-base"
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
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 text-sm sm:text-base"
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
                    rows={3}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 resize-none text-sm sm:text-base"
                    placeholder="Опишите что случилось с телевизором..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white py-3 sm:py-4 text-sm sm:text-lg font-semibold rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                >
                  <Send className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5" />
                  Отправить заявку
                </Button>
              </form>
            </>
          ) : (
            <div className="text-center py-6 sm:py-8">
              <CheckCircle className="h-12 w-12 sm:h-16 sm:w-16 text-green-500 mx-auto mb-3 sm:mb-4" />
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Заявка отправлена!</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">Мы свяжемся с вами в ближайшее время</p>
              <div className="text-xs sm:text-sm text-gray-500">Окно закроется автоматически...</div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
