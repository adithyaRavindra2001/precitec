import React, { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { MachineCard } from "./MachineCard"

interface Machine {
  id: string
  title: string
  description: string
}

interface CarouselProps {
  items: Machine[]
}

export const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(1) // Start at index 1 (center of initial 3)

  const length = items.length

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === length - 1 ? 0 : prev + 1))
  }, [length])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? length - 1 : prev - 1))
  }, [length])

  // Adjust index if items change and index is out of bounds
  useEffect(() => {
    if (currentIndex >= items.length) {
      setCurrentIndex(items.length - 1)
    }
  }, [items.length, currentIndex])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        prevSlide()
      } else if (e.key === "ArrowRight") {
        nextSlide()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [nextSlide, prevSlide])

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4 py-12">
      {/* Navigation Buttons (Absolute) */}
      <button
        onClick={prevSlide}
        className="absolute left-0 md:-left-12 top-1/2 -translate-y-1/2 z-20 p-3 bg-white rounded-full shadow-lg text-gray-600 hover:text-primary hover:bg-primary/10 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-0 md:-right-12 top-1/2 -translate-y-1/2 z-20 p-3 bg-white rounded-full shadow-lg text-gray-600 hover:text-primary hover:bg-primary/10 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Carousel Viewport */}
      <div className="overflow-hidden w-full py-10">
        {" "}
        {/* Extra py for shadow/scale clipping */}
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{
            // This calculation centers the `currentIndex` item
            // 320px is approximate card width + gap
            transform: `translateX(calc(50% - ${currentIndex * 320}px - 160px))`,
          }}
        >
          {items.map((item, index) => {
            // Logic to determine distance from active index for styling
            const isActive = index === currentIndex

            // Dynamic opacity based on distance
            const distance = Math.abs(index - currentIndex)

            return (
              <div
                key={item.id}
                className="flex-shrink-0 w-[300px] mx-[10px] transition-all duration-500"
                style={{
                  opacity: Math.max(0.3, 1 - distance * 0.3),
                }}
              >
                <MachineCard machine={item} isActive={isActive} onClick={() => setCurrentIndex(index)} />
              </div>
            )
          })}
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center gap-2 mt-8">
        {items.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`
              h-2 rounded-full transition-all duration-300
              ${idx === currentIndex ? "w-8 bg-primary" : "w-2 bg-gray-300 hover:bg-gray-400"}
            `}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
