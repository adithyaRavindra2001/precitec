import { Hero } from "@/components/sections/Hero"
import { StatisticsRow } from "@/components/sections/StatisticsRow"
import { IsoIdentityBanner } from "@/components/sections/IsoIdentityBanner"
import { ProductOverview } from "@/components/sections/ProductOverview"
import { motion } from "framer-motion"

export function LandingPage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <StatisticsRow />
      <IsoIdentityBanner />
      <ProductOverview />

      <motion.section
        id="company"
        className="bg-white py-12 sm:py-16"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 text-center md:text-left">
          <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-primary">About</p>
          <h3 className="mt-2 sm:mt-3 text-2xl sm:text-3xl font-bold text-foreground">Engineering precision since 1978</h3>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-muted-foreground md:text-lg">
            We design and build machine tools that keep factories running—rigid bases, balanced spindles,
            and intelligent controls tuned for demanding production.
          </p>
        </div>
      </motion.section>

      <motion.section
        id="services"
        className="bg-slate-100 py-12 sm:py-16"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
            <div className="text-center md:text-left">
              <h4 className="text-base sm:text-lg font-semibold text-foreground">Application Support</h4>
              <p className="mt-2 text-sm text-muted-foreground">Process engineering and turnkey tooling packages.</p>
            </div>
            <div className="text-center md:text-left">
              <h4 className="text-base sm:text-lg font-semibold text-foreground">Lifecycle Service</h4>
              <p className="mt-2 text-sm text-muted-foreground">Installations, retrofits, and preventive maintenance.</p>
            </div>
            <div className="text-center md:text-left">
              <h4 className="text-base sm:text-lg font-semibold text-foreground">Training</h4>
              <p className="mt-2 text-sm text-muted-foreground">Operator upskilling and on-site process training.</p>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="contact"
        className="bg-white py-12 sm:py-16"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <h4 className="text-xl sm:text-2xl font-bold text-foreground">Ready to build your next machine?</h4>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground">
            Talk to our engineers about capacities, automation, and lead times tailored to your line.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4">
            <a className="text-sm sm:text-base text-primary underline decoration-primary/50 underline-offset-4 break-all" href="mailto:info@precitec.com">
              info@precitec.com
            </a>
            <span className="hidden sm:inline text-muted-foreground">|</span>
            <a className="text-sm sm:text-base text-primary underline decoration-primary/50 underline-offset-4" href="tel:+918012345678">
              +91 80 1234 5678
            </a>
          </div>
        </div>
      </motion.section>
    </div>
  )
}
