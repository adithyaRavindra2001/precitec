import React, { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { MachineCard } from "./MachineCard";
import { categories, products } from "@/data/products";

const CLONE_COUNT = 3;

export const Carousel: React.FC = () => {
  const [cardWidth, setCardWidth] = useState(320);
  const [enableTransition, setEnableTransition] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(CLONE_COUNT);
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const isPaused = useRef(false);

  // Transform data: Map categories to carousel items
  const items = categories.map((category) => {
    if (category.id === "spms-other") {
      return {
        id: category.id,
        title: category.name,
        image: "/Shilpi/SHILPI FHMB HORIZONTAL MILLING AND BORING MACHINES MH SERIES.png",
      };
    }
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

  // Extended items: clones of last CLONE_COUNT + real items + clones of first CLONE_COUNT
  const extendedItems = [
    ...items.slice(-CLONE_COUNT).map((item, i) => ({ ...item, key: `clone-start-${i}` })),
    ...items.map((item) => ({ ...item, key: item.id })),
    ...items.slice(0, CLONE_COUNT).map((item, i) => ({ ...item, key: `clone-end-${i}` })),
  ];

  // The real index (0-based) for dot indicators
  const realIndex = (currentIndex - CLONE_COUNT + length) % length;

  // Silently jump position without animation when entering clone territory
  const jumpToReal = useCallback((idx: number) => {
    setEnableTransition(false);
    setCurrentIndex(idx);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setEnableTransition(true);
      });
    });
  }, []);

  const handleTransitionEnd = useCallback(() => {
    if (currentIndex < CLONE_COUNT) {
      jumpToReal(currentIndex + length);
    } else if (currentIndex >= CLONE_COUNT + length) {
      jumpToReal(currentIndex - length);
    }
  }, [currentIndex, length, jumpToReal]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => prev + 1);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => prev - 1);
  }, []);

  // Calculate card width based on viewport
  useEffect(() => {
    const updateCardWidth = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        if (width < 640) {
          setCardWidth(Math.min(300, width - 40));
        } else if (width < 1024) {
          setCardWidth(280);
        } else {
          setCardWidth(320);
        }
      }
    };
    updateCardWidth();
    window.addEventListener("resize", updateCardWidth);
    return () => window.removeEventListener("resize", updateCardWidth);
  }, []);

  // Auto-scroll every 3.5s, pauses on hover
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused.current) {
        setCurrentIndex((prev) => prev + 1);
      }
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevSlide();
      else if (e.key === "ArrowRight") nextSlide();
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
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) nextSlide();
      else prevSlide();
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
        onMouseEnter={() => { isPaused.current = true; }}
        onMouseLeave={() => { isPaused.current = false; }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          ref={trackRef}
          className="flex"
          style={{
            transition: enableTransition ? "transform 500ms ease-out" : "none",
            transform: `translateX(calc(50% - ${currentIndex * (cardWidth + 24)}px - ${cardWidth / 2}px))`,
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {extendedItems.map((item, index) => {
            const isActive = index === currentIndex;
            const distance = Math.abs(index - currentIndex);

            return (
              <div
                key={item.key}
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

      {/* Dots Navigation — based on real index */}
      <div className="flex justify-center gap-2 mt-6">
        {items.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx + CLONE_COUNT)}
            className={`
              h-2 rounded-full transition-all duration-300
              ${idx === realIndex ? "w-8 bg-primary" : "w-2 bg-gray-300 hover:bg-gray-400"}
            `}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
