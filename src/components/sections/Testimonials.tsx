import { motion } from "framer-motion"

const testimonials = [
  {
    quote:
      "Many of the components used in the project are made in India. Straight Channel Milling Machine used in the project was made by Precitec Precision Machineries Pvt. Ltd., Bengaluru.",
    name: "Dr. Venkatkrishnan PV",
    title: "Director, LPSC · ISRO",
    context: "During GSLV success speech",
    photo: "/testimonials/maheshkumar-joshi.png",
    logo: "/customers/isro-seeklogo.png",
  },
  {
    quote:
      "We have procured several machines, and they are working well. Once I visited, I came to know about more features and more new machines which they have made — it's been an eye opener. I am thankful to Mr. Nikhila and the Precitec team.",
    name: "Maheshkumar Joshi",
    title: "Head Capital Procurement · L&T Hazira",
    context: "During IMTEX 2017, Bengaluru",
    photo: "/testimonials/dr-venkatkrishnan.png",
    logo: "/customers/larsen-toubro-lt-seeklogo.png",
  },
]

export function Testimonials() {
  return (
    <section className="bg-slate-100 py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">

        {/* Header */}
        <motion.div
          className="mb-10 sm:mb-14 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-2">
            Testimonials
          </p>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground">
            Heard from the best.
          </h3>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-5 sm:gap-6 lg:grid-cols-2">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="flex flex-col justify-between rounded-2xl bg-white border border-slate-200 p-7 sm:p-8"
            >
              {/* Top: logo + quote mark */}
              <div className="flex items-center justify-between mb-5">
                <img
                  src={t.logo}
                  alt={t.title}
                  className="h-6 sm:h-7 w-auto object-contain opacity-70"
                />
                <span className="text-4xl font-serif text-primary/50 leading-none select-none">❝</span>
              </div>

              {/* Quote */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed flex-1">
                {t.quote}
              </p>

              {/* Attribution */}
              <div className="mt-6 flex items-center gap-3">
                <img
                  src={t.photo}
                  alt={t.name}
                  className="h-10 w-10 rounded-full object-cover object-top flex-shrink-0 ring-2 ring-slate-200"
                />
                <div className="min-w-0">
                  <p className="text-foreground font-semibold text-sm truncate">{t.name}</p>
                  <p className="text-slate-400 text-xs mt-0.5 truncate">{t.title}</p>
                  <p className="text-slate-400 text-xs mt-0.5 truncate">{t.context}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
