import { motion } from "framer-motion"

const customers = [
  { name: "ISRO", logo: "/customers/isro-seeklogo.png" },
  { name: "L&T", logo: "/customers/larsen-toubro-lt-seeklogo.png" },
  { name: "BHEL", logo: "/customers/Bharat_Heavy_Electricals_Limited-Logo.wine.png" },
  { name: "Godrej", logo: "/customers/godrej.png" },
  { name: "TVS", logo: "/customers/tvs-logo-33710.png" },
  { name: "Thermax", logo: "/customers/Thermax-Logo.wine.png" },
  { name: "Uno Minda", logo: "/customers/uno-minda-logo-2365x1538.png" },
  { name: "Asia Motor Works", logo: "/customers/asia-motor-works-seeklogo.png" },
]

function LogoCard({ c, i }: { c: { name: string; logo: string }; i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, delay: i * 0.07 }}
      className="flex items-center justify-center rounded-2xl bg-white p-6 sm:p-8 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
    >
      <img
        src={c.logo}
        alt={c.name}
        className="h-12 sm:h-16 w-full object-contain"
        draggable={false}
      />
    </motion.div>
  )
}

export function TrustedBy() {
  return (
    <section className="relative bg-slate-950 py-16 sm:py-24 overflow-hidden">
      {/* Background grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-3">
            Our Clients
          </p>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
            Trusted by India's Best
          </h3>
        </motion.div>

        {/* Logo grid — 4×2 perfectly symmetric */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {customers.map((c, i) => (
            <LogoCard key={c.name} c={c} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
