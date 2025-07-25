"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Phone, X } from "lucide-react"

interface CallMasterModalProps {
  isOpen: boolean
  onClose: () => void
  defaultMessage?: string
}

export function CallMasterModal({ isOpen, onClose, defaultMessage = "" }: CallMasterModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    problem: defaultMessage,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Здесь будет логика отправки формы
    console.log("Form submitted:", formData)
    onClose()
    // Сброс формы
    setFormData({
      name: "",
      phone: "",
      problem: "",
    })
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  // Обновляем проблему при изменении defaultMessage
  useState(() => {
    if (defaultMessage && defaultMessage !== formData.problem) {
      setFormData((prev) => ({
        ...prev,
        problem: defaultMessage,
      }))
    }
  })

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-white">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-gray-900">
            <Phone className="h-5 w-5 text-green-600" />
            Вызвать мастера
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-gray-700">
              Имя
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="Введите ваше имя"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              required
              className="border-gray-300 focus:border-blue-500"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-gray-700">
              Телефон
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+7 (999) 123-45-67"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              required
              className="border-gray-300 focus:border-blue-500"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="problem" className="text-gray-700">
              Проблема
            </Label>
            <Textarea
              id="problem"
              placeholder="Опишите проблему с телевизором"
              value={formData.problem}
              onChange={(e) => handleInputChange("problem", e.target.value)}
              rows={3}
              className="border-gray-300 focus:border-blue-500 resize-none"
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button type="submit" className="flex-1 bg-green-600 hover:bg-green-700 text-white">
              Отправить заявку
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="px-4 border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
