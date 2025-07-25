"use client"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Phone, X, CheckCircle } from "lucide-react"
import { useEffect } from "react"

interface CallMasterModalProps {
  isOpen: boolean
  onClose: () => void
  defaultMessage?: string
}

interface FormData {
  name: string
  phone: string
  problem: string
}

export function CallMasterModal({ isOpen, onClose, defaultMessage = "" }: CallMasterModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
  } = useForm<FormData>({
    defaultValues: {
      name: "",
      phone: "",
      problem: defaultMessage,
    },
  })

  // Обновляем поле проблемы при изменении defaultMessage
  useEffect(() => {
    if (defaultMessage) {
      setValue("problem", defaultMessage)
    }
  }, [defaultMessage, setValue])

  const onSubmit = async (data: FormData) => {
    try {
      // Здесь будет логика отправки формы
      console.log("Form submitted:", data)

      // Имитация отправки
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setIsSubmitted(true)

      // Закрываем модал через 3 секунды
      setTimeout(() => {
        setIsSubmitted(false)
        onClose()
        reset()
      }, 3000)
    } catch (error) {
      console.error("Error submitting form:", error)
    }
  }

  const handleClose = () => {
    setIsSubmitted(false)
    onClose()
    reset()
  }

  // Валидация телефона (российский формат)
  const phoneValidation = {
    required: "Телефон обязателен для заполнения",
    pattern: {
      value: /^(\+7|8)?[\s-]?\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/,
      message: "Введите корректный номер телефона",
    },
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md bg-white">
        {!isSubmitted ? (
          <>
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2 text-gray-900">
                <Phone className="h-5 w-5 text-green-600" />
                Вызвать мастера
              </DialogTitle>
            </DialogHeader>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-gray-700">
                  Имя *
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Введите ваше имя"
                  {...register("name", {
                    required: "Имя обязательно для заполнения",
                    minLength: {
                      value: 2,
                      message: "Имя должно содержать минимум 2 символа",
                    },
                    pattern: {
                      value: /^[а-яА-ЯёЁa-zA-Z\s]+$/,
                      message: "Имя может содержать только буквы",
                    },
                  })}
                  className={`border-gray-300 focus:border-blue-500 ${
                    errors.name ? "border-red-500 focus:border-red-500" : ""
                  }`}
                />
                {errors.name && <p className="text-sm text-red-600">{errors.name.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-gray-700">
                  Телефон *
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+7 (999) 123-45-67"
                  {...register("phone", phoneValidation)}
                  className={`border-gray-300 focus:border-blue-500 ${
                    errors.phone ? "border-red-500 focus:border-red-500" : ""
                  }`}
                />
                {errors.phone && <p className="text-sm text-red-600">{errors.phone.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="problem" className="text-gray-700">
                  Проблема *
                </Label>
                <Textarea
                  id="problem"
                  placeholder="Опишите проблему с телевизором"
                  {...register("problem", {
                    required: "Описание проблемы обязательно",
                    minLength: {
                      value: 10,
                      message: "Описание должно содержать минимум 10 символов",
                    },
                  })}
                  rows={3}
                  className={`border-gray-300 focus:border-blue-500 resize-none ${
                    errors.problem ? "border-red-500 focus:border-red-500" : ""
                  }`}
                />
                {errors.problem && <p className="text-sm text-red-600">{errors.problem.message}</p>}
              </div>

              <div className="flex gap-3 pt-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white disabled:opacity-50"
                >
                  {isSubmitting ? "Отправка..." : "Отправить заявку"}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleClose}
                  className="px-4 border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </form>
          </>
        ) : (
          <div className="text-center py-8">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Заявка отправлена!</h3>
            <p className="text-gray-600 mb-4">Мы свяжемся с вами в ближайшее время</p>
            <div className="text-sm text-gray-500">Окно закроется автоматически...</div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
