export interface Product {
  id: string
  name: string
  fullName: string
  category: string
  subcategory?: string
  series: string
  description: string
  features: string[]
  specifications: {
    label: string
    value: string
  }[]
  image: string
}

export interface Category {
  id: string
  name: string
  subcategories?: Subcategory[]
}

export interface Subcategory {
  id: string
  name: string
  series: string
}

// Categories structure
export const categories: Category[] = [
  {
    id: "facing-centering",
    name: "Facing and Centering Machines",
  },
  {
    id: "vertical-turning",
    name: "Vertical Turning and Turn Mill Solutions",
  },
  {
    id: "in-situ",
    name: "In-Situ Machining Solutions",
    subcategories: [
      {
        id: "flange-facers",
        name: "Flange Facers",
        series: "Rotaface Series",
      },
      {
        id: "portable-boring",
        name: "Portable Boring Machines",
        series: "PortaBore Series",
      },
      {
        id: "portable-milling",
        name: "Portable Milling Machines",
        series: "PortaMill Series",
      },
      {
        id: "multi-purpose",
        name: "Multi-Purpose Machining",
        series: "Sarva",
      },
      {
        id: "custom-solutions",
        name: "Custom Solutions",
        series: "Special Machines",
      },
    ],
  },
]

// Common specifications template (used for all products for now)
const commonSpecs = [
  { label: "Spindle Unit (Standard)", value: "Precitec Make Spindle Unit RMH 20I - Integral Ram Type Milling Head" },
  { label: "Spindle Nose", value: "ISO 50" },
  { label: "Y-Axis RAM Stroke", value: "800 mm" },
  { label: "Motor Power", value: "15 HP" },
  { label: "Boring and Facing Capacity", value: "Up to 900 mm diameter (including flange facing)" },
  { label: "Drilling Capacity", value: "50 mm in solid steel" },
  { label: "Face Milling Capacity", value: "Any angle with cutters up to 500 mm" },
  { label: "Taper Boring Range", value: "2° to 90°" },
  { label: "Maximum Drilling Diameter", value: "50 mm in solid steel" },
  { label: "Tapping Capacity", value: "M36" },
  { label: "Milling Cutter Size (Standard/Maximum)", value: "250 mm / 400 mm" },
  { label: "Horizontal Slide (X-Axis) Stroke", value: "1500 mm" },
  { label: "Vertical Slide Stroke", value: "800 mm" },
  { label: "Horizontal RAM Stroke", value: "800 mm" },
]

// Products data - In-Situ Machining Solutions
export const products: Product[] = [
  // Flange Facers - Rotaface Series
  {
    id: "rotaface-mini-350",
    name: "Rotaface Mini 350",
    fullName: "Rotaface Mini 350 - Compact Flange Facer",
    category: "in-situ",
    subcategory: "flange-facers",
    series: "Rotaface Series",
    description: "The Rotaface Mini 350 is a compact, portable flange facing machine designed for on-site machining operations. Perfect for tight spaces and smaller flanges, it delivers precision machining with minimal setup time. Ideal for maintenance teams and field service operations requiring reliable, accurate flange preparation.",
    features: [
      "Compact and lightweight design for easy transportation",
      "Quick setup and alignment system",
      "Precise flange facing up to 350mm diameter",
      "Hydraulic feed system for smooth cutting",
      "Self-centering mechanism for accurate alignment",
      "Built-in coolant delivery system",
      "Low vibration operation",
      "Suitable for various flange standards including ANSI, DIN, and JIS",
    ],
    specifications: commonSpecs,
    image: "https://placehold.co/800x600/334155/fff?text=Rotaface+Mini+350",
  },
  {
    id: "rotaface-500",
    name: "Rotaface 500",
    fullName: "Rotaface 500 - Flange Facer",
    category: "in-situ",
    subcategory: "flange-facers",
    series: "Rotaface Series",
    description: "The Rotaface 500 offers versatile flange facing capabilities for medium-sized applications. Engineered for durability and precision, this machine handles demanding on-site machining tasks with ease. Features advanced control systems and robust construction for reliable performance in industrial environments.",
    features: [
      "Flange facing capacity up to 500mm diameter",
      "Heavy-duty construction for industrial applications",
      "Variable speed control for different materials",
      "Digital position indicators for precise depth control",
      "Quick-change tooling system",
      "Integrated safety features and emergency stop",
      "Compact footprint for confined spaces",
      "Compatible with standard power supplies",
    ],
    specifications: commonSpecs,
    image: "https://placehold.co/800x600/475569/fff?text=Rotaface+500",
  },
  {
    id: "rotaface-800",
    name: "Rotaface 800",
    fullName: "Rotaface 800 - Flange Facer",
    category: "in-situ",
    subcategory: "flange-facers",
    series: "Rotaface Series",
    description: "The Rotaface 800 delivers powerful flange facing performance for large-diameter applications. Built with industrial-grade components and precision engineering, it ensures consistent results even in the most challenging field conditions. Ideal for power generation, oil & gas, and heavy manufacturing sectors.",
    features: [
      "Large flange facing capacity up to 800mm",
      "Robust gearbox for high torque transmission",
      "Advanced thermal management system",
      "Precision ground ways for smooth operation",
      "Modular design for easy maintenance",
      "Remote control operation available",
      "Automatic feed and depth control",
      "Suitable for high-pressure applications",
    ],
    specifications: commonSpecs,
    image: "https://placehold.co/800x600/64748b/fff?text=Rotaface+800",
  },
  {
    id: "rotaface-1000",
    name: "Rotaface 1000",
    fullName: "Rotaface 1000 - Flange Facer",
    category: "in-situ",
    subcategory: "flange-facers",
    series: "Rotaface Series",
    description: "The Rotaface 1000 combines power and precision for demanding flange machining applications. Designed for heavy industrial use, it features advanced control systems and robust construction to handle the toughest jobs. Perfect for large valve bodies, pump casings, and pipeline flanges.",
    features: [
      "Flange facing up to 1000mm diameter",
      "High-power spindle motor for tough materials",
      "CNC-ready with digital control options",
      "Integrated clamping and centering system",
      "Anti-vibration mounting system",
      "Real-time cutting parameter monitoring",
      "Dust and chip extraction ready",
      "Field-proven reliability in harsh environments",
    ],
    specifications: commonSpecs,
    image: "https://placehold.co/800x600/334155/fff?text=Rotaface+1000",
  },
  {
    id: "rotaface-1500",
    name: "Rotaface 1500",
    fullName: "Rotaface 1500 - Flange Facer",
    category: "in-situ",
    subcategory: "flange-facers",
    series: "Rotaface Series",
    description: "The Rotaface 1500 is engineered for large-scale flange machining operations. With its heavy-duty construction and advanced features, it delivers precision results on flanges up to 1500mm. Designed for continuous operation in demanding industrial environments with minimal downtime.",
    features: [
      "Large capacity up to 1500mm diameter",
      "Dual-speed gearbox for versatile cutting",
      "Precision ball screws for accurate positioning",
      "Programmable logic controller (PLC) integration",
      "Tool life monitoring system",
      "Automatic lubrication system",
      "Heavy-duty base for stability",
      "24/7 operation capability",
    ],
    specifications: commonSpecs,
    image: "https://placehold.co/800x600/475569/fff?text=Rotaface+1500",
  },
  {
    id: "rotaface-2000",
    name: "Rotaface 2000",
    fullName: "Rotaface 2000 - Heavy-Duty Flange Facer",
    category: "in-situ",
    subcategory: "flange-facers",
    series: "Rotaface Series",
    description: "The Rotaface 2000 heavy-duty flange facer is built for the most demanding industrial applications. Featuring massive cutting power and precision control, it handles extra-large flanges with ease. Perfect for shipbuilding, power plants, and large-scale manufacturing facilities.",
    features: [
      "Heavy-duty capacity up to 2000mm diameter",
      "Extra-rigid construction for vibration-free cutting",
      "High-torque spindle with multiple speed ranges",
      "Advanced coolant filtration system",
      "Wireless remote monitoring and control",
      "Modular tooling system for quick changes",
      "Built-in alignment laser system",
      "Certified for hazardous area operation",
    ],
    specifications: commonSpecs,
    image: "https://placehold.co/800x600/64748b/fff?text=Rotaface+2000",
  },
  {
    id: "rotaface-3000",
    name: "Rotaface 3000",
    fullName: "Rotaface 3000 - Heavy-Duty Flange Facer",
    category: "in-situ",
    subcategory: "flange-facers",
    series: "Rotaface Series",
    description: "The Rotaface 3000 represents the pinnacle of heavy-duty flange machining technology. Engineered for extreme applications, it delivers unmatched power and precision for flanges up to 3000mm. The ultimate solution for large turbine casings, vessel openings, and massive pipeline connections.",
    features: [
      "Massive capacity up to 3000mm diameter",
      "Ultra-rigid frame design",
      "Variable frequency drive (VFD) for precise speed control",
      "Automatic tool wear compensation",
      "Real-time load monitoring",
      "Multiple operator interface options",
      "Redundant safety systems",
      "Suitable for nuclear and aerospace applications",
    ],
    specifications: commonSpecs,
    image: "https://placehold.co/800x600/334155/fff?text=Rotaface+3000",
  },
  {
    id: "rotaface-4000",
    name: "Rotaface 4000",
    fullName: "Rotaface 4000 - Heavy-Duty Flange Facer",
    category: "in-situ",
    subcategory: "flange-facers",
    series: "Rotaface Series",
    description: "The Rotaface 4000 is designed for the largest flange machining challenges in heavy industry. With exceptional rigidity and cutting power, it maintains precision even on massive workpieces. Ideal for large pressure vessels, turbine casings, and industrial-scale manufacturing.",
    features: [
      "Extra-large capacity up to 4000mm diameter",
      "Triple-bearing spindle support system",
      "Servo-controlled feed mechanisms",
      "Integrated vibration damping technology",
      "Multi-axis positioning system",
      "Advanced thermal stability features",
      "Automated setup and calibration",
      "Industry 4.0 ready with IoT connectivity",
    ],
    specifications: commonSpecs,
    image: "https://placehold.co/800x600/475569/fff?text=Rotaface+4000",
  },
  {
    id: "rotaface-5000",
    name: "Rotaface 5000",
    fullName: "Rotaface 5000 - Heavy-Duty Flange Facer",
    category: "in-situ",
    subcategory: "flange-facers",
    series: "Rotaface Series",
    description: "The Rotaface 5000 is the ultimate heavy-duty flange facer for the most extreme machining applications. Engineered with cutting-edge technology and massive structural rigidity, it handles the largest flanges with micron-level precision. The go-to solution for mega-projects in oil & gas, shipbuilding, and power generation.",
    features: [
      "Maximum capacity up to 5000mm diameter",
      "Reinforced cast iron construction",
      "High-efficiency spindle cooling system",
      "Precision linear encoders for positioning",
      "Multi-zone lubrication system",
      "Remote diagnostics and support capability",
      "Explosion-proof electrical systems available",
      "Customizable for specific industry requirements",
    ],
    specifications: commonSpecs,
    image: "https://placehold.co/800x600/64748b/fff?text=Rotaface+5000",
  },
  {
    id: "rotamill",
    name: "RotaMill",
    fullName: "RotaMill - Milling Flange Facer",
    category: "in-situ",
    subcategory: "flange-facers",
    series: "Rotaface Series",
    description: "The RotaMill combines flange facing and precision milling capabilities in one versatile machine. Featuring advanced milling head technology and flexible tooling options, it handles complex machining operations on-site. Perfect for applications requiring both facing and milling operations without equipment changes.",
    features: [
      "Dual functionality: facing and milling",
      "Universal milling head with multi-angle capability",
      "Quick-change tooling system",
      "Digital angle measurement",
      "Programmable cutting sequences",
      "Integrated workpiece clamping",
      "Compact design for versatile positioning",
      "Suitable for complex geometry machining",
    ],
    specifications: commonSpecs,
    image: "https://placehold.co/800x600/334155/fff?text=RotaMill",
  },

  // Portable Boring Machines - PortaBore Series
  {
    id: "portabore-75",
    name: "PortaBore 75",
    fullName: "PortaBore 75 - Portable Boring Machine",
    category: "in-situ",
    subcategory: "portable-boring",
    series: "PortaBore Series",
    description: "The PortaBore 75 is a versatile portable boring machine designed for precision on-site boring operations. With its compact design and powerful boring capabilities, it's ideal for maintenance and repair work in confined spaces. Perfect for bearing housings, cylinder blocks, and general machining tasks.",
    features: [
      "Portable design with easy setup",
      "Boring capacity up to 75mm diameter",
      "Precision boring bar system",
      "Adjustable boring head for various diameters",
      "Self-centering alignment mechanism",
      "Variable speed control",
      "Integrated measurement system",
      "Suitable for horizontal and vertical boring",
    ],
    specifications: commonSpecs,
    image: "https://placehold.co/800x600/059669/fff?text=PortaBore+75",
  },
  {
    id: "portabore-50",
    name: "PortaBore 50",
    fullName: "PortaBore 50 - Portable Boring Machine",
    category: "in-situ",
    subcategory: "portable-boring",
    series: "PortaBore Series",
    description: "The PortaBore 50 offers compact and efficient boring solutions for smaller diameter applications. Engineered for precision and reliability, it's the perfect tool for field service teams requiring accurate boring in challenging locations. Lightweight yet robust construction ensures consistent performance.",
    features: [
      "Compact and lightweight for easy transport",
      "Boring capacity up to 50mm diameter",
      "Quick-lock boring bar system",
      "Digital depth indicator",
      "Magnetic base mounting option",
      "Battery-powered operation available",
      "Precision ground spindle",
      "Ideal for maintenance and repair operations",
    ],
    specifications: commonSpecs,
    image: "https://placehold.co/800x600/10b981/fff?text=PortaBore+50",
  },

  // Portable Milling Machines - PortaMill Series
  {
    id: "portamill-40",
    name: "PortaMill 40",
    fullName: "PortaMill 40 - Portable Milling Machine",
    category: "in-situ",
    subcategory: "portable-milling",
    series: "PortaMill Series",
    description: "The PortaMill 40 is a portable milling solution designed for on-site machining operations. With its versatile milling capabilities and robust construction, it handles a wide range of materials and applications. Perfect for field repairs, maintenance work, and emergency machining situations.",
    features: [
      "Portable milling capacity",
      "Multi-axis milling capability",
      "Precision linear guides",
      "Variable spindle speed",
      "Digital readout system",
      "Modular base plate system",
      "Quick-setup magnetic clamping",
      "Suitable for ferrous and non-ferrous materials",
    ],
    specifications: commonSpecs,
    image: "https://placehold.co/800x600/0891b2/fff?text=PortaMill+40",
  },
  {
    id: "portamill-50",
    name: "PortaMill 50",
    fullName: "PortaMill 50 - Portable Milling Machine",
    category: "in-situ",
    subcategory: "portable-milling",
    series: "PortaMill Series",
    description: "The PortaMill 50 offers enhanced milling capabilities with increased power and precision. Designed for demanding field applications, it delivers workshop-quality results on-site. Features advanced control systems and robust construction for reliable performance in industrial environments.",
    features: [
      "Increased milling capacity",
      "High-torque milling spindle",
      "Three-axis digital positioning",
      "Programmable feed rates",
      "Tool change system",
      "Integrated coolant delivery",
      "Heavy-duty construction",
      "Remote control operation",
    ],
    specifications: commonSpecs,
    image: "https://placehold.co/800x600/06b6d4/fff?text=PortaMill+50",
  },
  {
    id: "portamill-gantry",
    name: "PortaMill Gantry",
    fullName: "PortaMill Gantry - Gantry-Style Portable Milling Machine",
    category: "in-situ",
    subcategory: "portable-milling",
    series: "PortaMill Series",
    description: "The PortaMill Gantry is a revolutionary gantry-style portable milling machine for large-scale on-site machining. With its expansive working envelope and precision control, it handles massive workpieces that cannot be moved to a workshop. Ideal for shipbuilding, large fabrication, and infrastructure projects.",
    features: [
      "Large gantry-style working envelope",
      "Multi-axis simultaneous machining",
      "Modular construction for scalability",
      "Laser-guided alignment system",
      "CNC control with CAM integration",
      "Wireless remote operation",
      "Heavy-duty linear motion system",
      "Suitable for large structural components",
    ],
    specifications: commonSpecs,
    image: "https://placehold.co/800x600/0284c7/fff?text=PortaMill+Gantry",
  },

  // Multi-Purpose Machining
  {
    id: "sarva",
    name: "Sarva",
    fullName: "Sarva - Multi-Purpose In-Situ Machining System",
    category: "in-situ",
    subcategory: "multi-purpose",
    series: "Sarva",
    description: "Sarva is the ultimate multi-purpose in-situ machining system, combining milling, boring, drilling, and facing capabilities in one versatile platform. Engineered for maximum flexibility and precision, it adapts to virtually any on-site machining challenge. The all-in-one solution for complex field machining operations.",
    features: [
      "Multi-function machining capabilities",
      "Modular tooling system for quick changes",
      "Universal mounting and alignment system",
      "Advanced CNC control with touchscreen",
      "Automatic tool measurement and compensation",
      "Integrated work holding solutions",
      "Comprehensive software suite",
      "Suitable for milling, boring, drilling, and facing",
      "Remote diagnostics and support",
      "Industry 4.0 connectivity",
    ],
    specifications: commonSpecs,
    image: "https://placehold.co/800x600/7c3aed/fff?text=Sarva+System",
  },

  // Custom Solutions
  {
    id: "special-machines",
    name: "Special Machines",
    fullName: "Special Machines and Solutions - Customized In-Situ Machining Equipment",
    category: "in-situ",
    subcategory: "custom-solutions",
    series: "Custom Solutions",
    description: "Our Special Machines and Solutions division designs and manufactures customized in-situ machining equipment tailored to your unique requirements. From concept to commissioning, we work closely with you to develop innovative solutions for challenging machining applications that standard equipment cannot address.",
    features: [
      "Fully customized design and engineering",
      "Application-specific solutions",
      "Consultation and feasibility studies",
      "3D modeling and simulation",
      "Prototype development and testing",
      "Complete documentation and training",
      "Worldwide installation and commissioning",
      "Ongoing technical support",
      "Modification of existing equipment",
      "Integration with customer systems",
    ],
    specifications: [
      { label: "Customization Level", value: "Fully tailored to customer requirements" },
      { label: "Engineering Process", value: "Collaborative design with customer input" },
      { label: "Design Tools", value: "Advanced CAD/CAM and FEA analysis" },
      { label: "Prototyping", value: "Available upon request" },
      { label: "Documentation", value: "Complete technical and operational manuals" },
      { label: "Training", value: "On-site operator and maintenance training included" },
      { label: "Support", value: "24/7 technical assistance" },
      { label: "Warranty", value: "Standard warranty with extended options" },
    ],
    image: "https://placehold.co/800x600/dc2626/fff?text=Custom+Solutions",
  },
]

// Helper functions
export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id)
}

export function getProductsByCategory(categoryId: string): Product[] {
  return products.filter((p) => p.category === categoryId)
}

export function getProductsBySubcategory(
  categoryId: string,
  subcategoryId: string
): Product[] {
  return products.filter(
    (p) => p.category === categoryId && p.subcategory === subcategoryId
  )
}

export function getCategoryById(id: string): Category | undefined {
  return categories.find((c) => c.id === id)
}

export function getSubcategoryById(
  categoryId: string,
  subcategoryId: string
): Subcategory | undefined {
  const category = getCategoryById(categoryId)
  return category?.subcategories?.find((s) => s.id === subcategoryId)
}
