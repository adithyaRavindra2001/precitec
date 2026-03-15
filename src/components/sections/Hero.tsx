import { useEffect, useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  { image: "/hero-1.jpg.jpeg" },
  { image: "/hero-2.JPG" },
  { image: "/hero-3.jpg.jpeg" },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.15,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

export function Hero() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length)
  }, [])

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
  }, [])

  useEffect(() => {
    if (paused) return
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [paused, next])

  return (
    <section
      className="relative flex aspect-video sm:aspect-auto sm:min-h-[70vh] md:min-h-[75vh] items-center justify-center overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Sliding background images */}
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${slides[current].image}')` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/30" />

      {/* Content */}
      <motion.div
        className="relative z-10 mx-auto flex max-w-4xl flex-col gap-2 sm:gap-6 px-4 sm:px-6 text-center text-white"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.p
          variants={item}
          className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-primary-foreground/80"
        >
          CNC Machine Manufacturer | Bengaluru, India
        </motion.p>
        <motion.h1
          variants={item}
          className="text-xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white"
        >
          Precision CNC Machines for <span className="text-white">Industrial Manufacturing Excellence</span>
        </motion.h1>
        <motion.p
          variants={item}
          className="hidden sm:block text-base sm:text-lg md:text-xl text-white/80 px-2"
        >
          High-performance CNC turning centers and multi-axis machining centers engineered to deliver exceptional accuracy, maximum uptime, and superior productivity for automotive, aerospace, and heavy engineering manufacturing operations.
        </motion.p>
        <motion.div variants={item} className="hidden sm:flex justify-center mt-2">
          <Button
            size="lg"
            className="text-sm sm:text-base"
            onClick={() => {
              document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            Explore CNC Machines
          </Button>
        </motion.div>
      </motion.div>

      {/* Prev / Next arrows */}
      <button
        onClick={prev}
        className="absolute left-3 sm:left-5 z-20 flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition hover:bg-black/50"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-3 sm:right-5 z-20 flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition hover:bg-black/50"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-5 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current ? "w-6 bg-white" : "w-2 bg-white/50"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
