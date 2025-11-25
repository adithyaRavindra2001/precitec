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
        backgroundImage:
          "url('https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?q=80&w=1920&auto=format&fit=crop')",
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
          Precision Engineering
        </motion.p>
        <motion.h1
          variants={item}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
        >
          Machine Tools Built for <span className="text-primary">Industrial Reliability</span>
        </motion.h1>
        <motion.p
          variants={item}
          className="text-base sm:text-lg md:text-xl text-white/80 px-2"
        >
          High-performance turning centers, machining centers, and grinders engineered to deliver accuracy,
          uptime, and throughput for modern manufacturers.
        </motion.p>
        <motion.div variants={item} className="flex justify-center mt-2">
          <Button
            size="lg"
            className="text-sm sm:text-base"
            onClick={() => {
              document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            Discover Machines
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}
