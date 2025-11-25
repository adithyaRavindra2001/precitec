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
        className="bg-white py-16"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container mx-auto max-w-5xl px-6 text-center md:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">About</p>
          <h3 className="mt-3 text-3xl font-bold text-foreground">Engineering precision since 1978</h3>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            We design and build machine tools that keep factories running—rigid bases, balanced spindles,
            and intelligent controls tuned for demanding production.
          </p>
        </div>
      </motion.section>

      <motion.section
        id="services"
        className="bg-slate-100 py-16"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container mx-auto max-w-5xl px-6">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h4 className="text-lg font-semibold text-foreground">Application Support</h4>
              <p className="mt-2 text-sm text-muted-foreground">Process engineering and turnkey tooling packages.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-foreground">Lifecycle Service</h4>
              <p className="mt-2 text-sm text-muted-foreground">Installations, retrofits, and preventive maintenance.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-foreground">Training</h4>
              <p className="mt-2 text-sm text-muted-foreground">Operator upskilling and on-site process training.</p>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="contact"
        className="bg-white py-16"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <h4 className="text-2xl font-bold text-foreground">Ready to build your next machine?</h4>
          <p className="mt-3 text-base text-muted-foreground">
            Talk to our engineers about capacities, automation, and lead times tailored to your line.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <a className="text-primary underline decoration-primary/50 underline-offset-4" href="mailto:info@precitec.com">
              info@precitec.com
            </a>
            <span className="text-muted-foreground">|</span>
            <a className="text-primary underline decoration-primary/50 underline-offset-4" href="tel:+918012345678">
              +91 80 1234 5678
            </a>
          </div>
        </div>
      </motion.section>
    </div>
  )
}
