import React, { useState, useEffect, useCallback, useRef } from "react"
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
  const [currentIndex, setCurrentIndex] = useState(0)
  const [cardWidth, setCardWidth] = useState(320) // Default width
  const containerRef = useRef<HTMLDivElement>(null)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  const length = items.length

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === length - 1 ? 0 : prev + 1))
  }, [length])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? length - 1 : prev - 1))
  }, [length])

  // Calculate card width based on viewport
  useEffect(() => {
    const updateCardWidth = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth
        // On mobile, show nearly full width; on tablet/desktop, show fixed width
        if (width < 640) {
          setCardWidth(Math.min(300, width - 40)) // Mobile: almost full width
        } else if (width < 1024) {
          setCardWidth(280) // Tablet
        } else {
          setCardWidth(320) // Desktop
        }
      }
    }

    updateCardWidth()
    window.addEventListener("resize", updateCardWidth)
    return () => window.removeEventListener("resize", updateCardWidth)
  }, [])

  // Adjust index if items change and index is out of bounds
  useEffect(() => {
    if (currentIndex >= items.length) {
      setCurrentIndex(Math.max(0, items.length - 1))
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

  // Touch/swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    const swipeThreshold = 50
    const diff = touchStartX.current - touchEndX.current

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        nextSlide()
      } else {
        prevSlide()
      }
    }
  }

  return (
    <div className="relative w-full max-w-6xl mx-auto px-2 sm:px-4 py-8 sm:py-12">
      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-0 sm:left-2 md:-left-12 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 bg-white rounded-full shadow-lg text-gray-600 hover:text-primary hover:bg-primary/10 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-0 sm:right-2 md:-right-12 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 bg-white rounded-full shadow-lg text-gray-600 hover:text-primary hover:bg-primary/10 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
        aria-label="Next slide"
      >
        <ChevronRight size={20} className="sm:w-6 sm:h-6" />
      </button>

      {/* Carousel Viewport */}
      <div
        ref={containerRef}
        className="overflow-hidden w-full py-6 sm:py-10"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(calc(50% - ${currentIndex * (cardWidth + 20)}px - ${cardWidth / 2}px))`,
          }}
        >
          {items.map((item, index) => {
            const isActive = index === currentIndex
            const distance = Math.abs(index - currentIndex)

            return (
              <div
                key={item.id}
                className="flex-shrink-0 px-2 sm:px-2.5 transition-all duration-500"
                style={{
                  width: `${cardWidth + 20}px`,
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
      <div className="flex justify-center gap-1.5 sm:gap-2 mt-4 sm:mt-8">
        {items.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`
              h-1.5 sm:h-2 rounded-full transition-all duration-300
              ${idx === currentIndex ? "w-6 sm:w-8 bg-primary" : "w-1.5 sm:w-2 bg-gray-300 hover:bg-gray-400"}
            `}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
