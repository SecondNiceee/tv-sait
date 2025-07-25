"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { CallMasterModal } from "./call-master-modal"

export function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <footer className="bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-bold mb-4 text-yellow-400">Контакты</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-400" />
                  <span className="text-sm sm:text-base break-all">+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                  <span className="text-sm break-all">repair@tvservice.ru</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Москва и Московская область</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-yellow-400">Услуги</h3>
              <ul className="space-y-2 text-sm">
                <li>Ремонт LED телевизоров</li>
                <li>Ремонт OLED телевизоров</li>
                <li>Ремонт Smart TV</li>
                <li>Замена матрицы</li>
                <li>Ремонт блока питания</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-yellow-400">Режим работы</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-3">
                  <Clock className="h-4 w-4 text-blue-400" />
                  <span>Пн-Вс: 8:00 - 22:00</span>
                </div>
                <p className="text-gray-400">Выезд мастера в день обращения</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-yellow-400">Быстрый заказ</h3>
              <p className="text-sm text-gray-400 mb-4">Оставьте заявку и мы свяжемся с вами в течение 5 минут</p>
              <Button
                onClick={() => setIsModalOpen(true)}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Вызвать мастера
              </Button>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 TV Service. Все права защищены. Профессиональный ремонт телевизоров на дому.
            </p>
          </div>
        </div>
      </footer>

      <CallMasterModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
