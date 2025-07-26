"use client"

import { useEffect, useRef } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel"

const reviewImages = [
  "/response1.jpeg",
  "/response2.jpeg",
  "/response3.jpeg",
  "/response4.jpeg",
  "/response5.jpeg",
  "/response6.jpeg",
]

export function ReviewsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const apiRef = useRef<CarouselApi | null>(null)
  const autoplayRef = useRef<NodeJS.Timeout | null>(null)

  // Autoplay logic
  useEffect(() => {
    if (!apiRef.current) return
    function play() {
      if (!apiRef.current) return
      if (apiRef.current.canScrollNext()) {
        apiRef.current.scrollNext()
      } else {
        apiRef.current.scrollTo(0)
      }
    }
    autoplayRef.current = setInterval(play, 4000)
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current)
    }
  }, [apiRef.current])

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Отзывы наших клиентов</h2>
          <p className="text-xl text-gray-600">Более 1000 довольных клиентов за последний год</p>
        </div>
        <div className="relative max-w-4xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              slidesToScroll: 1,
              loop: true,
              dragFree: false,
            }}
            setApi={(api) => (apiRef.current = api)}
            className="w-full"
          >
            <CarouselContent>
              {reviewImages.map((img, idx) => (
                <CarouselItem
                  key={img}
                  className="basis-full md:basis-1/2 rounded-2xl shadow-lg bg-[#141414] overflow-hidden border border-gray-200"
                >
                  <img
                    src={img}
                    alt={`Отзыв клиента ${idx + 1}`}
                    className="w-full h-[500px] object-contain object-center"
                    loading="lazy"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-6" />
            <CarouselNext className="-right-6" />
          </Carousel>
        </div>
      </div>
    </section>
  )
}
