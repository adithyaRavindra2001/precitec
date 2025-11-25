import { CountUpStat } from "./CountUpStat"

const stats = [
  { value: 40, label: "Years of Industry Experience" },
  { value: 800, label: "Machines Manufactured" },
  { value: 6, label: "Events & Exhibitions" },
  { value: 2, label: "Awards & Recognitions" },
]

export function StatisticsRow() {
  return (
    <section className="bg-white py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 text-center md:grid-cols-4">
          {stats.map((stat, index) => (
            <CountUpStat
              key={stat.label}
              value={stat.value}
              label={stat.label}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
