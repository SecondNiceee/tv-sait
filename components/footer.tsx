"use client"

import { useState } from "react"
import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CallMasterModal } from "@/components/call-master-modal"

export function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Сервисный Центр Теле-Ателье
            </h3>
            <p className="text-gray-400 text-lg mb-6">Профессиональный ремонт телевизоров в г. Петропавловск</p>
            <div className="flex justify-center mb-8">
              <Button
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full"
                onClick={() => setIsModalOpen(true)}
              >
                <Phone className="mr-2 h-5 w-5" />
                Вызвать мастера
              </Button>
            </div>
            <p className="text-gray-500">© 2024 Сервисный Центр Теле-Ателье. Все права защищены.</p>
            <div className=" text-gray-500">Инн организации : 880122351228</div>
          </div>
        </div>
      </footer>

      <CallMasterModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
