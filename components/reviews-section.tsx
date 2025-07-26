"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

// Импортируем стили
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const reviewImages = [
  "/response1.jpeg",
  "/response2.jpeg",
  "/response3.jpeg",
  "/response4.jpeg",
  "/response5.jpeg",
  "/response6.jpeg",
];

export function ReviewsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Swiper instance для управления вручную (стрелки)
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Заголовок */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Отзывы наших клиентов</h2>
          <p className="text-xl text-gray-600">Более 1000 довольных клиентов за последний год</p>
        </div>

        {/* Swiper слайдер */}
        <div className="relative max-w-4xl mx-auto">
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              el: ".swiper-pagination",
              clickable: true,
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
            }}
            loop={true}
            className="rounded-2xl"
          >
            {reviewImages.map((img, idx) => (
              <SwiperSlide key={img}>
                <div className="rounded-2xl shadow-lg bg-[#141414] overflow-hidden border border-gray-200">
                  <img
                    src={img}
                    alt={`Отзыв клиента ${idx + 1}`}
                    className="w-full h-[500px] object-contain object-center"
                    loading="lazy"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Кастомные стрелки */}
          <div className="swiper-button-prev w-[30px] bg-transparent border-none min-h-[30px] max-h-[30px] absolute left-0 top-1/2 -translate-y-1/2 z-1 shadow rounded-full p-2 transition-all duration-300 cursor-pointer flex items-center justify-center">
                <ChevronLeft className="h-4 w-4 text-sm text-gray-900" />
          </div>
            <div className="swiper-button-next absolute bg-transparent right-0 top-1/2 -translate-y-1/2 z-10shadow rounded-full p-2 transition-all duration-300 cursor-pointer w-10 h-10 flex items-center justify-center">
              <ChevronRight className="h-6 w-6 text-gray-900" />
            </div>

          {/* Индикаторы (точки) */}
          <div className="swiper-pagination flex justify-center gap-2 mt-6"></div>
        </div>
      </div>
    </section>
  );
}