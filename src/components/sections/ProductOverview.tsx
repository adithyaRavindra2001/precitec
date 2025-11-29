import { motion } from "framer-motion";
import { Carousel } from "@/components/carousel/Carousel";

export function ProductOverview() {
  return (
    <motion.section
      id="products"
      className="bg-slate-50 py-12 sm:py-16"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-6 sm:mb-8">
          <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-primary">
            Precision lineup
          </p>
          <h2 className="mt-2 sm:mt-3 text-2xl sm:text-3xl font-bold text-foreground md:text-4xl">
            Our Machines
          </h2>
          <p className="mt-2 sm:mt-3 text-sm sm:text-base text-muted-foreground px-2">
            Select a platform to explore configurations, capacities, and
            automation options.
          </p>
        </div>

        <Carousel />

        <div className="mt-4 sm:mt-8 text-center text-muted-foreground text-xs sm:text-sm">
          <p>Swipe or use arrow keys to navigate.</p>
        </div>
      </div>
    </motion.section>
  );
}
