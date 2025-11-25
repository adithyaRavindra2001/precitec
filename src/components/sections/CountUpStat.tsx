import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion"
import { useEffect, useRef } from "react"

type CountUpStatProps = {
  value: number
  suffix?: string
  label: string
  delay?: number
}

export function CountUpStat({ value, suffix = "+", label, delay = 0 }: CountUpStatProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const count = useMotionValue(0)
  const rounded = useTransform(count, latest => Math.floor(latest))

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: 1.6,
        ease: "easeOut",
        delay,
      })
      return () => controls.stop()
    }
  }, [count, delay, isInView, value])

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      <div className="mb-1 sm:mb-2 text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary">
        <motion.span>{rounded}</motion.span>
        {suffix}
      </div>
      <div className="text-xs sm:text-sm uppercase tracking-wide text-muted-foreground px-1">
        {label}
      </div>
    </motion.div>
  )
}
