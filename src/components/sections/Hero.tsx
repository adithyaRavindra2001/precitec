import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

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
  return (
    <section
      className="relative flex min-h-[60vh] sm:min-h-[70vh] md:min-h-[75vh] items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/hero-image.png')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/30" />

      <motion.div
        className="relative z-10 mx-auto flex max-w-4xl flex-col gap-4 sm:gap-6 px-4 sm:px-6 text-center text-white"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.p
          variants={item}
          className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-primary-foreground/80"
        >
          CNC Machine Manufacturer | Bangalore, India
        </motion.p>
        <motion.h1
          variants={item}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white"
        >
          Precision CNC Machines for <span className="text-white">Industrial Manufacturing Excellence</span>
        </motion.h1>
        <motion.p
          variants={item}
          className="text-base sm:text-lg md:text-xl text-white/80 px-2"
        >
          High-performance CNC turning centers and multi-axis machining centers engineered to deliver exceptional accuracy, maximum uptime, and superior productivity for automotive, aerospace, and heavy engineering manufacturing operations.
        </motion.p>
        <motion.div variants={item} className="flex justify-center mt-2">
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
    </section>
  )
}
