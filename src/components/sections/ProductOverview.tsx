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
        <div className="text-center mb-6 sm:mb-8 mx-auto max-w-3xl">
          <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-primary">
            Complete CNC Machine Portfolio
          </p>
          <h2 className="mt-2 sm:mt-3 text-2xl sm:text-3xl font-bold text-foreground md:text-4xl">
            Precision CNC Machining Equipment
          </h2>
          <p className="mt-2 sm:mt-3 text-sm sm:text-base text-muted-foreground px-2">
            Precitec offers a complete portfolio of vertical turning and turn-mill lathes (VTL), facing and centering machines (FCM), milling and boring machines, in-situ machining solutions, and special purpose machines (SPMs) for metal cutting and specialized applications—developed for precision-critical and heavy-duty industrial requirements.
          </p>
        </div>

        <Carousel />

      </div>
    </motion.section>
  );
}
