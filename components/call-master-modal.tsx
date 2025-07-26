"use client"

import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { X, CheckCircle } from "lucide-react"
import { request } from "@/utils/request"

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
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<FormData>({
    defaultValues: {
      name: "",
      phone: "",
      problem: defaultMessage,
    },
  })

  useEffect(() => {
    if (defaultMessage) {
      setValue("problem", defaultMessage)
    }
  }, [defaultMessage, setValue])

  useEffect(() => {
    if (!isOpen) {
      reset()
      setIsSuccess(false)
      setIsSubmitting(false)
    }
  }, [isOpen, reset])

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)

    // Отправка формы
    await request({method : "POST", url : "/api/telegram/sendMessage", body : {
      message : `
Пришла заявка с сайта!!
-----------------------
Имя : ${data.name}
Телефон : ${data.phone},
-----------------------
${data.problem}
      `
    }})

    console.log("Отправка заявки:", data)
    setIsSubmitting(false)
    setIsSuccess(true)

    // Автоматическое закрытие через 3 секунды
    setTimeout(() => {
      onClose()
    }, 3000)
  }

  if (isSuccess) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-md">
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Заявка отправлена!</h3>
            <p className="text-gray-600 mb-4">Мы свяжемся с вами в ближайшее время</p>
            <p className="text-sm text-gray-500">Окно закроется автоматически через несколько секунд</p>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-center">Вызвать мастера</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Имя *</Label>
            <Input
              id="name"
              {...register("name", {
                required: "Имя обязательно для заполнения",
                minLength: {
                  value: 2,
                  message: "Имя должно содержать минимум 2 символа",
                },
                pattern: {
                  value: /^[а-яёА-ЯЁa-zA-Z\s]+$/,
                  message: "Имя должно содержать только буквы",
                },
              })}
              className={errors.name ? "border-red-500" : ""}
              placeholder="Введите ваше имя"
            />
            {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Телефон *</Label>
            <Input
              id="phone"
              {...register("phone", {
                required: "Телефон обязателен для заполнения",
                pattern: {
                  value: /^(\+7|8)?[\s-]?\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/,
                  message: "Введите корректный номер телефона",
                },
              })}
              className={errors.phone ? "border-red-500" : ""}
              placeholder="+7 (999) 123-45-67"
            />
            {errors.phone && <p className="text-sm text-red-500">{errors.phone.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="problem">Описание проблемы *</Label>
            <Textarea
              id="problem"
              {...register("problem", {
                required: "Описание проблемы обязательно",
                minLength: {
                  value: 10,
                  message: "Описание должно содержать минимум 10 символов",
                },
              })}
              className={errors.problem ? "border-red-500" : ""}
              placeholder="Опишите проблему с телевизором"
              rows={4}
            />
            {errors.problem && <p className="text-sm text-red-500">{errors.problem.message}</p>}
          </div>

          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={isSubmitting}>
            {isSubmitting ? "Отправка..." : "Отправить заявку"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
