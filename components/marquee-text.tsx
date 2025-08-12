"use client"

import { useEffect, useRef } from "react"

interface MarqueeTextProps {
  text: string
  className?: string
  speed?: number
}

export function MarqueeText({ text, className = "", speed = 30 }: MarqueeTextProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current || !textRef.current) return

    const container = containerRef.current
    const textElement = textRef.current

    // Создаем достаточно копий текста для бесшовной анимации
    const repeatedText = Array.from({ length: 10 }, () => text).join(" • ")
    textElement.textContent = repeatedText

    // Устанавливаем CSS переменную для скорости анимации
    container.style.setProperty("--marquee-speed", `${speed}s`)
  }, [text, speed])

  return (
    <div ref={containerRef} className="overflow-hidden whitespace-nowrap relative">
      <div
        ref={textRef}
        className={`inline-block animate-marquee ${className}`}
        style={{
          animation: "marquee var(--marquee-speed, 30s) linear infinite",
        }}
      />
    </div>
  )
}
