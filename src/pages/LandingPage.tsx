import { Hero } from "@/components/sections/Hero"
import { StatisticsRow } from "@/components/sections/StatisticsRow"
import { IsoIdentityBanner } from "@/components/sections/IsoIdentityBanner"
import { ProductOverview } from "@/components/sections/ProductOverview"
import { TrustedBy } from "@/components/sections/TrustedBy"
import { Testimonials } from "@/components/sections/Testimonials"
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
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 text-center">
          <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-primary">About</p>
          <h3 className="mt-2 sm:mt-3 text-2xl sm:text-3xl font-bold text-foreground">Precision-Focused Engineering, Trusted Since 1978</h3>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-muted-foreground md:text-lg max-w-3xl mx-auto">
            A full-service machine tool builder with 47+ years of experience, Precitec delivers end-to-end solutions—from design and manufacturing to assembly, controls, and service—trusted by repeat customers across precision, heavy-duty machining applications and specialised machines into testing, forming and other applications.
          </p>
        </div>
      </motion.section>

      {/* Industries Served */}
      <section className="bg-white py-14 sm:py-20 overflow-hidden">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="mb-10 sm:mb-12 text-center"
          >
            <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-primary">Industries Served</p>
            <h3 className="mt-2 sm:mt-3 text-2xl sm:text-3xl font-bold text-foreground">Built for demanding sectors</h3>
          </motion.div>

          <div className="grid gap-px bg-slate-100 border border-slate-100 rounded-2xl overflow-hidden md:grid-cols-2">
            {[
              { label: "Automotive & Automotive Parts", sub: [] },
              { label: "Aerospace & Defence Equipment", sub: [] },
              { label: "Energy & Power", sub: [] },
              { label: "Industrial Manufacturing", sub: [] },
              {
                label: "Heavy Engineering",
                sub: ["Fabrication", "Heat exchangers, boilers & pressure vessels", "Mining equipment & components", "Ship building"],
              },
              {
                label: "Installation / Erection of Large Equipment",
                sub: ["On-site machines / In-Situ machines"],
              },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.06 }}
                className="group bg-white px-6 py-5 hover:bg-slate-50 transition-colors duration-200"
              >
                <div className="flex items-start gap-4">
                  <span className="mt-[5px] flex h-2.5 w-2.5 flex-shrink-0 rounded-full bg-primary/80 group-hover:bg-primary transition-colors duration-200" />
                  <div>
                    <p className="text-sm sm:text-[15px] font-semibold text-foreground leading-snug">{item.label}</p>
                    {item.sub.length > 0 && (
                      <ul className="mt-2 space-y-1">
                        {item.sub.map((s) => (
                          <li key={s} className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground">
                            <span className="mt-[5px] flex h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-300" />
                            {s}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <TrustedBy />
      <Testimonials />

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
            <div className="text-center">
              <h4 className="text-base sm:text-lg font-semibold text-foreground">Application Support</h4>
              <p className="mt-2 text-sm text-muted-foreground">Process engineering and turnkey tooling packages.</p>
            </div>
            <div className="text-center">
              <h4 className="text-base sm:text-lg font-semibold text-foreground">Lifecycle Service</h4>
              <p className="mt-2 text-sm text-muted-foreground">Installations, retrofits, and preventive maintenance.</p>
            </div>
            <div className="text-center">
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
            <a className="text-sm sm:text-base text-primary underline decoration-primary/50 underline-offset-4 break-all" href="mailto:info@precitec.co.in">
              info@precitec.co.in
            </a>
            <span className="hidden sm:inline text-muted-foreground">|</span>
            <a className="text-sm sm:text-base text-primary underline decoration-primary/50 underline-offset-4" href="tel:+917022024562">
              +91 70220 24562
            </a>
          </div>
        </div>
      </motion.section>
    </div>
  )
}
