import React, { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { MachineCard } from "./MachineCard";
import { categories, products } from "@/data/products";

export const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(320);
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Transform data: Map categories to carousel items
  // We use the first product in each category to provide the cover image
  const items = categories.map((category) => {
    const representativeProduct = products.find(
      (p) => p.category === category.id
    );

    return {
      id: category.id,
      title: category.name,
      image: representativeProduct?.images?.[0]?.url || "/images/placeholder.jpg",
    };
  });

  const length = items.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === length - 1 ? 0 : prev + 1));
  }, [length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? length - 1 : prev - 1));
  }, [length]);

  // Calculate card width based on viewport
  useEffect(() => {
    const updateCardWidth = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        // Responsive card widths
        if (width < 640) {
          setCardWidth(Math.min(300, width - 40)); // Mobile
        } else if (width < 1024) {
          setCardWidth(280); // Tablet
        } else {
          setCardWidth(320); // Desktop
        }
      }
    };

    updateCardWidth();
    window.addEventListener("resize", updateCardWidth);
    return () => window.removeEventListener("resize", updateCardWidth);
  }, []);

  // Adjust index if items change
  useEffect(() => {
    if (currentIndex >= length) {
      setCurrentIndex(Math.max(0, length - 1));
    }
  }, [length, currentIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        prevSlide();
      } else if (e.key === "ArrowRight") {
        nextSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Touch/swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const swipeThreshold = 50;
    const diff = touchStartX.current - touchEndX.current;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  };

  if (length === 0) return null;

  return (
    <div className="relative w-full max-w-7xl mx-auto px-2 sm:px-4 py-8 sm:py-12">
      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-0 sm:left-2 md:-left-4 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg text-gray-800 hover:text-primary hover:bg-white transition-all focus:outline-none focus:ring-2 focus:ring-primary"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-0 sm:right-2 md:-right-4 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg text-gray-800 hover:text-primary hover:bg-white transition-all focus:outline-none focus:ring-2 focus:ring-primary"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Carousel Viewport */}
      <div
        ref={containerRef}
        className="overflow-hidden w-full py-8 sm:py-12"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(calc(50% - ${
              currentIndex * (cardWidth + 24)
            }px - ${cardWidth / 2}px))`,
          }}
        >
          {items.map((item, index) => {
            const isActive = index === currentIndex;
            const distance = Math.abs(index - currentIndex);

            return (
              <div
                key={item.id}
                className="flex-shrink-0 px-3 transition-all duration-500"
                style={{
                  width: `${cardWidth + 24}px`,
                  opacity: Math.max(0.4, 1 - distance * 0.3),
                  transform: `scale(${isActive ? 1 : 0.9})`,
                }}
              >
                <MachineCard
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  isActive={isActive}
                  onClick={() => setCurrentIndex(index)}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center gap-2 mt-6">
        {items.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`
              h-2 rounded-full transition-all duration-300
              ${
                idx === currentIndex
                  ? "w-8 bg-primary"
                  : "w-2 bg-gray-300 hover:bg-gray-400"
              }
            `}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
