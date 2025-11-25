import { Settings, Wrench } from "lucide-react"
import { motion } from "framer-motion"

export function IsoIdentityBanner() {
  return (
    <section className="bg-primary text-primary-foreground py-10 px-6">
      <div className="container mx-auto flex flex-col items-center justify-center gap-6 md:flex-row md:gap-12">
        <motion.div
          className="flex-shrink-0"
          animate={{ rotate: [0, 8, -6, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Settings size={48} className="opacity-90" />
        </motion.div>

        <div className="max-w-3xl text-center md:text-left">
          <h2 className="mb-2 text-xl font-semibold uppercase md:text-2xl">
            Since 1978 — An ISO 9001:2015 Certified Company
          </h2>
          <p className="text-base leading-relaxed text-primary-foreground/90">
            Precision-focused manufacturing backed by rigorous quality systems, modern automation, and a culture
            of continuous improvement.
          </p>
        </div>

        <motion.div
          className="flex-shrink-0"
          animate={{ rotate: [0, -8, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <Wrench size={48} className="opacity-90" />
        </motion.div>
      </div>
    </section>
  )
}
