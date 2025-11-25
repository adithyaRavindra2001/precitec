import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Link, useParams } from "react-router-dom"
import { ArrowLeft } from "lucide-react"

const machineData: Record<string, {
  name: string
  description: string
  image: string
  specs: { label: string; value: string }[]
  features: string[]
}> = {
  "tc-500": {
    name: "TC-500 Turning Center",
    description: "Compact CNC lathe with 500mm swing diameter, perfect for high-precision turning operations with superior chip evacuation and thermal stability.",
    image: "/images/tc-500.jpg",
    specs: [
      { label: "Max Swing Diameter", value: "500mm" },
      { label: "Max Turning Length", value: "1000mm" },
      { label: "Spindle Speed", value: "4000 RPM" },
      { label: "Motor Power", value: "15 kW" },
    ],
    features: [
      "High-rigidity slant bed design",
      "Automatic tool changer (12 positions)",
      "Advanced coolant system",
      "Integrated chip conveyor",
    ],
  },
  "vmc-850": {
    name: "VMC-850 Vertical Mill",
    description: "3-axis vertical machining center with 850mm table, ideal for complex milling tasks requiring high precision and repeatability.",
    image: "/images/vmc-850.jpg",
    specs: [
      { label: "Table Size", value: "850 x 450mm" },
      { label: "X/Y/Z Travel", value: "800/500/600mm" },
      { label: "Spindle Speed", value: "8000 RPM" },
      { label: "Tool Capacity", value: "24 tools" },
    ],
    features: [
      "Rigid box-way construction",
      "High-speed spindle with HSK interface",
      "Thermal compensation system",
      "Through-spindle coolant",
    ],
  },
  "pg-300": {
    name: "PG-300 Precision Grinder",
    description: "Surface grinder with 300mm capacity, achieving micron-level surface finishes with advanced vibration damping.",
    image: "/images/pg-300.jpg",
    specs: [
      { label: "Table Size", value: "300 x 600mm" },
      { label: "Grinding Wheel", value: "Ø250mm" },
      { label: "Spindle Speed", value: "2800 RPM" },
      { label: "Precision", value: "±0.001mm" },
    ],
    features: [
      "Precision ground ways",
      "Digital readout system",
      "Automatic lubrication",
      "Dust collection system",
    ],
  },
  "tc-800": {
    name: "TC-800 Heavy Duty Lathe",
    description: "Industrial-grade turning center with 800mm swing, built for heavy-duty operations and continuous production environments.",
    image: "/images/tc-800.jpg",
    specs: [
      { label: "Max Swing Diameter", value: "800mm" },
      { label: "Max Turning Length", value: "2000mm" },
      { label: "Spindle Speed", value: "3000 RPM" },
      { label: "Motor Power", value: "30 kW" },
    ],
    features: [
      "Heavy-duty cast iron construction",
      "Servo turret with 12 stations",
      "C-axis capability",
      "Live tooling ready",
    ],
  },
  "vmc-1200": {
    name: "VMC-1200 Large Format Mill",
    description: "5-axis machining center with 1200mm travel, designed for large part production with exceptional accuracy and surface finish.",
    image: "/images/vmc-1200.jpg",
    specs: [
      { label: "Table Size", value: "1200 x 700mm" },
      { label: "X/Y/Z Travel", value: "1200/800/700mm" },
      { label: "Spindle Speed", value: "12000 RPM" },
      { label: "Tool Capacity", value: "40 tools" },
    ],
    features: [
      "5-axis simultaneous machining",
      "Direct drive rotary table",
      "Linear motor drives",
      "Full-enclosure design",
    ],
  },
  "cg-400": {
    name: "CG-400 Cylindrical Grinder",
    description: "Precision cylindrical grinding with 400mm center distance for shaft and round parts, delivering superior surface finish.",
    image: "/images/cg-400.jpg",
    specs: [
      { label: "Max Grinding Diameter", value: "Ø250mm" },
      { label: "Center Distance", value: "400mm" },
      { label: "Grinding Wheel", value: "Ø400mm" },
      { label: "Wheelhead Motor", value: "3.7 kW" },
    ],
    features: [
      "Hydrostatic wheelhead bearing",
      "CNC control system",
      "In-process gauging",
      "Automatic dressing system",
    ],
  },
}

export function MachineDetail() {
  const { id } = useParams<{ id: string }>()
  const machine = id && machineData[id]

  if (!machine) {
    return (
      <div className="container mx-auto flex min-h-[60vh] items-center justify-center px-6">
        <div className="text-center">
          <h1 className="mb-6 text-3xl font-bold">Machine Not Found</h1>
          <Link
            to="/"
            className="group inline-flex items-center gap-3 rounded-xl border-2 border-slate-200 bg-white px-6 py-3 font-semibold text-foreground shadow-sm transition-all hover:border-primary hover:bg-primary hover:text-white hover:shadow-lg"
          >
            <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
            <span>Return to Home</span>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto flex min-h-[60vh] flex-col gap-8 px-6 py-16">
      <div className="flex flex-col gap-4">
        <Link
          to="/"
          className="group inline-flex w-fit items-center gap-3 rounded-xl border-2 border-slate-200 bg-white px-6 py-3 font-semibold text-foreground shadow-sm transition-all hover:border-primary hover:bg-primary hover:text-white hover:shadow-lg"
        >
          <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
          <span>Back to Products</span>
        </Link>
        <h1 className="text-4xl font-bold text-foreground md:text-5xl">{machine.name}</h1>
        <p className="max-w-3xl text-lg text-muted-foreground">{machine.description}</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="overflow-hidden rounded-lg bg-muted">
          <img
            src={machine.image}
            alt={machine.name}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-col gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Technical Specifications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {machine.specs.map((spec, index) => (
                  <div key={index} className="flex justify-between border-b pb-2 last:border-0">
                    <span className="font-medium text-muted-foreground">{spec.label}</span>
                    <span className="font-semibold">{spec.value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Key Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {machine.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="mt-1 text-primary">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <div className="flex gap-4">
            <Button size="lg" className="flex-1">
              Request a Quote
            </Button>
            <Button size="lg" variant="outline" className="flex-1">
              Download Specs
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
