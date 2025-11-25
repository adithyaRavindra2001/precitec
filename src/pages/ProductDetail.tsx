import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Link, useParams } from "react-router-dom"

const productCopy: Record<string, { title: string; summary: string }> = {
  "turning-center": {
    title: "Turning Centers",
    summary: "High-speed CNC lathes engineered for accuracy, chip evacuation, and automation-ready workflows.",
  },
  vmc: {
    title: "Vertical Machining Centers",
    summary: "Stiff castings, thermal stability, and intelligent controls for repeatable milling performance.",
  },
  grinder: {
    title: "Precision Grinders",
    summary: "Micron-level grinding solutions with advanced coolant and vibration damping systems.",
  },
}

const machines = [
  {
    id: "tc-500",
    name: "TC-500 Turning Center",
    description: "Compact CNC lathe with 500mm swing diameter, perfect for high-precision turning operations.",
    image: "/images/tc-500.jpg",
  },
  {
    id: "vmc-850",
    name: "VMC-850 Vertical Mill",
    description: "3-axis vertical machining center with 850mm table, ideal for complex milling tasks.",
    image: "/images/vmc-850.jpg",
  },
  {
    id: "pg-300",
    name: "PG-300 Precision Grinder",
    description: "Surface grinder with 300mm capacity, achieving micron-level surface finishes.",
    image: "/images/pg-300.jpg",
  },
  {
    id: "tc-800",
    name: "TC-800 Heavy Duty Lathe",
    description: "Industrial-grade turning center with 800mm swing, built for heavy-duty operations.",
    image: "/images/tc-800.jpg",
  },
  {
    id: "vmc-1200",
    name: "VMC-1200 Large Format Mill",
    description: "5-axis machining center with 1200mm travel, designed for large part production.",
    image: "/images/vmc-1200.jpg",
  },
  {
    id: "cg-400",
    name: "CG-400 Cylindrical Grinder",
    description: "Precision cylindrical grinding with 400mm center distance for shaft and round parts.",
    image: "/images/cg-400.jpg",
  },
]

export function ProductDetail() {
  const { id } = useParams<{ id: string }>()
  const product = (id && productCopy[id]) || {
    title: "Product",
    summary: "Explore our precision machine tools built for industrial reliability.",
  }

  return (
    <div className="container mx-auto flex min-h-[60vh] flex-col gap-6 sm:gap-8 px-4 sm:px-6 py-8 sm:py-12 md:py-16">
      <div className="flex flex-col gap-3 sm:gap-4">
        <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-primary">Product detail</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground md:text-5xl">{product.title}</h1>
        <p className="max-w-3xl text-base sm:text-lg text-muted-foreground">{product.summary}</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
        {machines.map((machine) => (
          <Link key={machine.id} to={`/machine/${machine.id}`} className="group">
            <Card className="h-full transition-all hover:shadow-lg">
              <div className="aspect-video overflow-hidden rounded-t-lg bg-muted">
                <img
                  src={machine.image}
                  alt={machine.name}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-lg sm:text-xl">{machine.name}</CardTitle>
                <CardDescription className="text-xs sm:text-sm">{machine.description}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
