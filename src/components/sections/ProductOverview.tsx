import { motion } from "framer-motion"
import { Carousel } from "@/components/carousel/Carousel"

const products = [
  {
    id: "turning-center",
    title: "Turning Centers",
    description: "Rigid, high-speed lathes delivering consistent concentricity across complex runs.",
  },
  {
    id: "vmc",
    title: "VMCs",
    description: "Vertical machining centers optimized for accuracy, chip control, and uptime.",
  },
  {
    id: "grinder",
    title: "Grinders",
    description: "Precision grinding solutions with micron-level finishes and thermal stability.",
  },
  {
    id: "laser-cutter",
    title: "Laser Cutters",
    description: "High-power CO2 and Fiber lasers for precise sheet metal fabrication and complex geometries.",
  },
  {
    id: "press-brake",
    title: "Press Brakes",
    description: "Hydraulic and electric bending solutions for versatile metal forming with exceptional repeatability.",
  },
]

export function ProductOverview() {
  return (
    <motion.section
      id="products"
      className="bg-slate-50 py-16"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto max-w-6xl px-6">
        <div className="text-center mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Precision lineup</p>
          <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">Our Machines</h2>
          <p className="mt-3 text-base text-muted-foreground">
            Select a platform to explore configurations, capacities, and automation options.
          </p>
        </div>

        <Carousel items={products} />

        <div className="mt-8 text-center text-muted-foreground text-sm">
          <p>Swipe or use arrow keys to navigate.</p>
        </div>
      </div>
    </motion.section>
  )
}
