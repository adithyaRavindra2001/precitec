export interface SpecificationGroup {
  parameter?: string
  description?: string
  column_1?: string
  column_2?: string
  [key: string]: string | undefined
}

export interface ProductImage {
  id: string
  url: string
  alt: string
  caption?: string
  isPrimary?: boolean
  displayOrder?: number
}

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
  }[] | {
    [key: string]: SpecificationGroup[]
  }
  images: ProductImage[]
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
  {
    id: "spms-other",
    name: "SPMs and Other Products",
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

// Products data
export const products: Product[] = [
  // Category 1: Facing and Centering Machines - MacInnes Series
  {
    id: "fc-40",
    name: "FC 40",
    fullName: "FC 40 - Facing and Centering Machine",
    category: "facing-centering",
    series: "MacInnes Series",
    description: "Precitec FC 40 NC machines are versatile, fully programmable facing and centring machines with servo-controlled spindle movement and user-friendly programmable machining cycles. These machines possess exceptional precision in controlling both the length and centre depth, enabling the consistent achievement of high-quality surface finishes. Equipped as standard with plunge facing and centring tools. Wide range of custom and special tools for boring, drilling, end facing, chamfering and more. FC 40 spindles are well-established Precitec PUSF S 40 quill-type spindle units that are powered by servo motors, precisely manufactured, and undergo hard case hardening and grinding, supported by preloaded precision angular contact bearings. Hardened and well lubricated quill guide bores for very low wear and long life. PLC with HMI touch screen for menu-based on-screen cycle programming, providing users with the ability to set the cycle with ease and precision, and the option to adopt different feed rates in the machining cycle to achieve a superior surface finish.",
    features: [
      "Standard Guard: with a sliding door near the cutting zone",
      "Facing and centring tools 1 LH + 1 RH",
      "Clamping Vice 1 set of V blocks, clamping cylinder",
      "1 set of V block Shim for any one job dia",
      "Machine Levelling pads",
      "Manuals 1 set (English)",
      "Powerpack",
      "Control panel",
      "Operator Pendant with the Touch screen interface",
      "PLC based controls for machine Servo motor and drives 2 nos",
      "Center bit holders 3 sizes",
    ],
    specifications: {
      "Machine Specifications": [
        {
          "parameter": "Max job dia",
          "FC-40-400-SC": "50 mm / (2\")",
          "FC-40-800-SC": "50 mm / (2\")",
          "FC-40-1200-SC": "50 mm / (2\")"
        },
        {
          "parameter": "Min Job dia",
          "FC-40-400-SC": "16 mm / (5/8\")",
          "FC-40-800-SC": "16 mm / (5/8\")",
          "FC-40-1200-SC": "16 mm / (5/8\")"
        },
        {
          "parameter": "Maximum length of job",
          "FC-40-400-SC": "400 mm / (15.75\")",
          "FC-40-800-SC": "800 mm / (31.5\")",
          "FC-40-1200-SC": "1200 mm / (47.2\")"
        },
        {
          "parameter": "Spindle Position Adjustment for Job length",
          "FC-40-400-SC": "Fixed",
          "FC-40-800-SC": "Manually adjusted",
          "FC-40-1200-SC": "Manually adjusted"
        },
        {
          "parameter": "Minimum length of job",
          "FC-40-400-SC": "60 mm / (2.4\")",
          "FC-40-800-SC": "60 mm / (2.4\")",
          "FC-40-1200-SC": "60 mm / (2.4\")"
        },
        {
          "parameter": "Overall dimension (L × D × H)",
          "FC-40-400-SC": "2300 × 1200 × 1500 mm / (7'6\" × 4' × 5')",
          "FC-40-800-SC": "2800 × 1200 × 1500 mm / (9'2\" × 4' × 5')",
          "FC-40-1200-SC": "3200 × 1200 × 1500 mm / (10'6\" × 4' × 5')"
        },
        {
          "parameter": "Machine Overall weight (approx.)",
          "FC-40-400-SC": "1800 DaN / (3968 lbf)",
          "FC-40-800-SC": "2400 DaN / (5291 lbf)",
          "FC-40-1200-SC": "2800 DaN / (6173 lbf)"
        }
      ],
      "Standard and Optional Specifications": [
        {
          "parameter": "No of spindles",
          "Standard": "2",
          "Options": "-"
        },
        {
          "parameter": "Spindle speed range",
          "Standard": "630/750 RPM",
          "Options": "30-1200 infinitely variable"
        },
        {
          "parameter": "Spindle Power",
          "Standard": "2.2 kW / (3 HP)",
          "Options": "1.5 kW / (2 HP), 3.7 kW / (5 HP)"
        },
        {
          "parameter": "Centring and facing Cutter size: dia",
          "Standard": "80 mm / (3.2\")",
          "Options": "50 mm"
        },
        {
          "parameter": "Z1 and Z2 axis stroke (drilling)",
          "Standard": "125 mm / (4.85\")",
          "Options": "-"
        },
        {
          "parameter": "Vice Type",
          "Standard": "V and Flat Hydraulic",
          "Options": "Self Centering (Hydraulic)"
        }
      ]
    },
    images: [
      {
        id: "fc-40-main",
        url: "/FCM/FC-40.jpeg",
        alt: "FC 40 Facing and Centering Machine",
        caption: "Main view of FC 40",
      },
    ],
  },
  {
    id: "fcm-80",
    name: "FCM 80",
    fullName: "FCM 80 - Facing and Centering Machine",
    category: "facing-centering",
    series: "MacInnes Series",
    description: "Precitec FCM 80 NC machines are versatile facing and centring machines with servo-controlled slides and easily menu-driven programmable machining cycles. Length and centre depth are controlled very accurately. High-quality surface finish and centre depth controls are easily and consistently achieved on even tough materials. Compact design with Across movement for the job and independent forward and reverse movements for each of the spindles. All axes are controlled through servo motors and drives. High-quality spindles Case hardened and ground with preloaded Precision bearings, Poly V belt drive to the spindle. Programmable speeds for different operations. Spindles are precisely guided in hardened ground bores for movement and for Cross axis LM rails are provided. Well-designed bed and axes for easy flow of coolant and chip disposal towards rear side. Compact guarding with fully covered cutting zone with sliding doors. Simultaneous RH and LH side functioning with different programming cycles as standard. PLC-based controls with Touch Screen HMI with simple easy to understand Menus and programming screens. 100 Job program storage. Optional CNC based controls with Pragati or Fanuc CNC's. Automation for Loading and unloading can be provided, In addition to special fixturing, tooling options for OD, turning, double ended boring, conveyor roller manufacturing. Etc.",
    features: [
      "Shaft-end machining",
      "Length control within 0.1mm",
      "Centre hole drilling",
      "OD turning (optional)",
      "Chamfering (optional)",
      "Double-ended boring and facing",
      "Standard Guard: with a sliding door near the cutting zone",
      "Milling and centring tools 1 LH + 1 RH",
      "Clamping Vice self-centring hydraulic 2nos",
      "1 set of V jaws",
      "Machine Levelling pads",
      "Manuals 1 set (English)",
      "Powerpack",
      "Control panel",
      "Operator Pendant with the Touch screen interface",
      "Machine with PLC control",
    ],
    specifications: {
      "Machine Specifications": [
        {
          "parameter": "Max job dia",
          "FCM-80-NC-500": "80 mm / (3.15\")",
          "FCM-80-CNC-500": "80 mm / (3.15\")",
          "Options": "-"
        },
        {
          "parameter": "Min Job dia",
          "FCM-80-NC-500": "20 mm / (0.79\")",
          "FCM-80-CNC-500": "20 mm / (0.79\")",
          "Options": "-"
        },
        {
          "parameter": "Maximum length of job",
          "FCM-80-NC-500": "500 mm / (19.7\")",
          "FCM-80-CNC-500": "500 mm / (19.7\")",
          "Options": "-"
        },
        {
          "parameter": "Z axis stroke",
          "FCM-80-NC-500": "125 mm / (4.9\")",
          "FCM-80-CNC-500": "125 mm / (4.9\")",
          "Options": "-"
        },
        {
          "parameter": "X axis stroke",
          "FCM-80-NC-500": "150 mm / (5.8\")",
          "FCM-80-CNC-500": "150 mm / (5.8\")",
          "Options": "-"
        },
        {
          "parameter": "Minimum length of job",
          "FCM-80-NC-500": "100 mm / (4\")",
          "FCM-80-CNC-500": "100 mm / (4\")",
          "Options": "60mm/2.25\" with 1 vice/special fixture"
        },
        {
          "parameter": "No of spindles",
          "FCM-80-NC-500": "2",
          "FCM-80-CNC-500": "2",
          "Options": "4/6 (Specials)"
        },
        {
          "parameter": "Spindle speed range",
          "FCM-80-NC-500": "30-1500 RPM",
          "FCM-80-CNC-500": "30-3000 RPM",
          "Options": "-"
        },
        {
          "parameter": "Spindle Power",
          "FCM-80-NC-500": "3.7 kW / (5 HP)",
          "FCM-80-CNC-500": "2.2 kW / (3 HP)",
          "Options": "-"
        },
        {
          "parameter": "Spindle Max. torque/thrust force",
          "FCM-80-NC-500": "50 Nm (440 lb-in) / 450 Kgf (1000 Lbf)",
          "FCM-80-CNC-500": "50 Nm (440 lb-in) / 450 Kgf (1000 Lbf)",
          "Options": "-"
        },
        {
          "parameter": "Controls",
          "FCM-80-NC-500": "PLC with servo motors and VFD",
          "FCM-80-CNC-500": "CNC controls",
          "Options": "Delta/Siemens/Mitsubishi/Pragati"
        },
        {
          "parameter": "Vice Type",
          "FCM-80-NC-500": "Self-Centring: 2 nos.",
          "FCM-80-CNC-500": "Self-Centring: 2 nos.",
          "Options": "V and flat, special fixtures"
        },
        {
          "parameter": "Vice Actuation",
          "FCM-80-NC-500": "Hydraulic",
          "FCM-80-CNC-500": "Hydraulic",
          "Options": "Air/Servomotor"
        },
        {
          "parameter": "Tools",
          "FCM-80-NC-500": "Milling cum centring tool 110mm dia",
          "FCM-80-CNC-500": "Milling cum centring tool 110mm dia",
          "Options": "90mm/125mm, boring tools and others"
        },
        {
          "parameter": "Overall dimension (L × D × H)",
          "FCM-80-NC-500": "2300 × 1500 × 1500 mm / (7'9\" × 5' × 5')",
          "FCM-80-CNC-500": "2300 × 1500 × 1500 mm / (7'9\" × 5' × 5')",
          "Options": "-"
        },
        {
          "parameter": "Machine Overall weight (approx.)",
          "FCM-80-NC-500": "1600 DaN / (3500 lbf)",
          "FCM-80-CNC-500": "1600 DaN / (3500 lbf)",
          "Options": "-"
        },
        {
          "parameter": "Maximum connected load (electric)",
          "FCM-80-NC-500": "15 KVA",
          "FCM-80-CNC-500": "20 KVA",
          "Options": "-"
        },
        {
          "parameter": "Hydraulic power pack",
          "FCM-80-NC-500": "1 kW, 6 L/min",
          "FCM-80-CNC-500": "1 kW, 6 L/min",
          "Options": "3 kW, 20 L/min (for special fixturing)"
        },
        {
          "parameter": "Coolant tank and pump",
          "FCM-80-NC-500": "120 Ltr, 40 LPM",
          "FCM-80-CNC-500": "120 Ltr, 40 LPM",
          "Options": "300 Ltr, 40+150 LPM (flush coolant)"
        },
        {
          "parameter": "Electric connection",
          "FCM-80-NC-500": "3 ph, 415V / 50Hz/60Hz",
          "FCM-80-CNC-500": "3 ph, 415V / 50Hz/60Hz",
          "Options": "3ph, 200V, 50/60Hz"
        }
      ]
    },
    images: [
      {
        id: "fcm-80-main",
        url: "/FCM/FCM 80-SC-500 edited.png",
        alt: "FCM 80 Facing and Centering Machine",
        caption: "FCM 80 Front View",
      },
    ],
  },
  {
    id: "fcm-100",
    name: "FCM 100",
    fullName: "FCM 100 - Facing and Centering Machine",
    category: "facing-centering",
    series: "MacInnes Series",
    description: "Precitec FCM 100 NC machines are versatile face milling and centering machines with servo-controlled slides and easily menu-driven programmable machining cycles. Length and center depth are controlled very accurately. High-quality surface finish and center depth controls are easily and consistently achieved on even tough materials. Two-axis movements to spindle on either side facilitate length machining in either one step or multistep process to remove larger stock in forgings and castings. High-quality spindles, Case hardened and ground with preloaded Precision bearings. Spindle is driven through Poly V Belt. LM rails for all the axes movements with Ball screws ensure high accuracies and long life, and metallic telescopic covers prevent chip entry. Well-designed guides with easy movement and locking for setting the vice or fixturing position for different lengths of job on the base. Rigid base structures with inbuilt slopes for easy coolant and swarf removal Easy changeover of job setup by simple program recall or by drawing dimension and parameters-based programming for new jobs. Simultaneous RH and LH side functioning with different programming cycles as standard. PLC-based controls with Touch Screen HMI with simple easy to understand Menus and programming screens. 100 Job program storage. Optional CNC based controls with Pragati or Fanuc CNC's.",
    features: [
      "Shaft-end machining",
      "Length control within 0.1mm",
      "Center hole drilling",
      "OD turning (optional)",
      "Chamfering (optional)",
      "Double ended boring and facing",
      "Standard Guard: All round guard with sliding doors",
      "2 spindles: 1 LH + 1 RH",
      "Milling and centering tools 1 LH + 1 RH (Combination tool)",
      "Clamping Vice self-centering hydraulic 2nos",
      "1 set of V jaws 1 nos",
      "Machine Levelling pads",
      "Manuals 1 set (English)",
      "Powerpack",
      "Control panel",
      "Operator pendant with touch screen Interface",
      "Machine with PLC based controls",
    ],
    specifications: {
      "Machine Specifications": [
        {
          "parameter": "Max job diameter",
          "FCM-100-2S-2SC-800": "100 mm / (3.9\")",
          "FCM-100-2S-2SC-1200": "100 mm / (3.9\")",
          "FCM-100-2S-2SC-2000": "100 mm / (3.9\")"
        },
        {
          "parameter": "Min job diameter",
          "FCM-100-2S-2SC-800": "20 mm / (0.79\")",
          "FCM-100-2S-2SC-1200": "20 mm / (0.79\")",
          "FCM-100-2S-2SC-2000": "20 mm / (0.79\")"
        },
        {
          "parameter": "Maximum length of job",
          "FCM-100-2S-2SC-800": "800 mm / (31.5\")",
          "FCM-100-2S-2SC-1200": "1200 mm / (47.5\")",
          "FCM-100-2S-2SC-2000": "2000 mm / (79\")"
        },
        {
          "parameter": "Minimum length of job",
          "FCM-100-2S-2SC-800": "150 mm / (6\")",
          "FCM-100-2S-2SC-1200": "150 mm / (6\")",
          "FCM-100-2S-2SC-2000": "150 mm / (6\")"
        },
        {
          "parameter": "Z1 and Z2 axis stroke (drilling)",
          "FCM-100-2S-2SC-800": "425 mm",
          "FCM-100-2S-2SC-1200": "625 mm",
          "FCM-100-2S-2SC-2000": "1025 mm"
        },
        {
          "parameter": "Overall dimension (L × D × H)",
          "FCM-100-2S-2SC-800": "2500 × 1500 × 1500 mm / (8.2' × 5' × 5')",
          "FCM-100-2S-2SC-1200": "3000 × 1500 × 1500 mm / (10' × 5' × 5')",
          "FCM-100-2S-2SC-2000": "3900 × 1500 × 1500 mm / (12.8' × 5' × 5')"
        },
        {
          "parameter": "Machine overall weight (approx.)",
          "FCM-100-2S-2SC-800": "3200 DaN / (7194 lbf)",
          "FCM-100-2S-2SC-1200": "3700 DaN / (8318 lbf)",
          "FCM-100-2S-2SC-2000": "4400 DaN / (9891 lbf)"
        }
      ]
    },
    images: [
      {
        id: "fcm-100-main",
        url: "/FCM/FCM100-800-25C 2S EDITED.png",
        alt: "FCM 100 Facing and Centering Machine",
        caption: "FCM 100 - Large Capacity Model",
      },
    ],
  },
  {
    id: "fcm-150",
    name: "FCM 150",
    fullName: "FCM 150 - Facing and Centering Machine",
    category: "facing-centering",
    series: "MacInnes Series",
    description: "Precitec FCM 150 NC machines are versatile face milling and centring machines with servo-controlled slides and easily menu-driven programmable machining cycles. Length and centre depth are controlled very accurately. High-quality surface finish and centre depth controls are easily and consistently achieved on even tough materials. Two-axis movements to spindle on either side facilitate length machining in either one step or multistep process to remove larger stock in forgings and castings. High-quality and heavy duty ISO-50 spindles, Case hardened and ground with preloaded Precision bearings. Spindle is driven through Poly V Belt and gear drive is optional. LM rails for all the axes movements with Ball screws ensure high accuracies and long life, and metallic telescopic covers prevent chip entry. Well-designed guides with easy movement and locking for setting the vice or fixturing position for different lengths of job on the base. Rigid base structures with inbuilt slopes for easy coolant and swarf removal. Easy changeover of job setup by simple program recall or by drawing dimension and parameters-based programming for new jobs. And automation for Loading and unloading can also be provided. Simultaneous RH and LH side functioning with different programming cycles as standard. PLC-based controls with Touch Screen HMI with simple easy to understand Menus and programming screens. 100 Job program storage. Optional CNC based controls with Pragati or Fanuc CNC's.",
    features: [
      "Shaft-end machining",
      "Length control within 0.1mm",
      "Centre hole drilling",
      "OD turning (optional)",
      "Chamfering (optional)",
      "Double ended boring and facing",
      "Standard Guard: All round guard with sliding door near cutting zone",
      "Milling and centring tools 1 LH + 1 RH",
      "Clamping Vice self-centring hydraulic 2nos",
      "1 set of V jaws 1 nos",
      "Machine Levelling pads",
      "Manuals 1 set (English)",
      "Powerpack",
      "Control panel",
      "Operator Pendant with Touch screen interface",
      "Power draw bar used for Tool clamp",
      "Machine with PLC Control",
    ],
    specifications: {
      "Machine Specifications": [
        {
          "parameter": "Max job diameter",
          "FCM-150-2S-SC-800": "180 mm / (7\")",
          "FCM-150-2S-SC-1200": "180 mm / (7\")",
          "FCM-150-2S-SC-2000": "180 mm / (7\")"
        },
        {
          "parameter": "Min job diameter",
          "FCM-150-2S-SC-800": "20 mm / (0.78\")",
          "FCM-150-2S-SC-1200": "20 mm / (0.78\")",
          "FCM-150-2S-SC-2000": "20 mm / (0.78\")"
        },
        {
          "parameter": "Maximum length of job",
          "FCM-150-2S-SC-800": "800 mm / (31.5\")",
          "FCM-150-2S-SC-1200": "1200 mm / (47.5\")",
          "FCM-150-2S-SC-2000": "2000 mm / (79\")"
        },
        {
          "parameter": "Minimum length of job",
          "FCM-150-2S-SC-800": "150 mm / (6\")",
          "FCM-150-2S-SC-1200": "150 mm / (6\")",
          "FCM-150-2S-SC-2000": "150 mm / (6\")"
        },
        {
          "parameter": "Z1 and Z2 axis stroke (drilling)",
          "FCM-150-2S-SC-800": "425 mm",
          "FCM-150-2S-SC-1200": "625 mm",
          "FCM-150-2S-SC-2000": "1025 mm"
        },
        {
          "parameter": "Overall dimension (L × D × H) (approx.)",
          "FCM-150-2S-SC-800": "3300 × 2000 × 2000 mm / (11' × 6.6' × 6.6')",
          "FCM-150-2S-SC-1200": "4300 × 2000 × 2000 mm / (14' × 6.6' × 6.6')",
          "FCM-150-2S-SC-2000": "5500 × 2000 × 2000 mm / (18' × 6.6' × 6.6')"
        },
        {
          "parameter": "Machine overall weight (approx.)",
          "FCM-150-2S-SC-800": "3500 DaN / (7870 lbf)",
          "FCM-150-2S-SC-1200": "4000 DaN / (9000 lbf)",
          "FCM-150-2S-SC-2000": "4700 DaN / (10570 lbf)"
        }
      ]
    },
    images: [
      {
        id: "fcm-150-main",
        url: "/FCM/FCM 150-NC-800w.png",
        alt: "FCM 150 Heavy-Duty Facing and Centering Machine",
        caption: "FCM 150 - Heavy Duty Configuration",
      },
    ],
  },
  {
    id: "db-40",
    name: "DB 40",
    fullName: "DB 40 - Drilling and Boring Machine",
    category: "facing-centering",
    series: "MacInnes Series",
    description: "The DB 40 is a precision drilling and boring machine optimized for creating accurate center holes in round bars. Its compact design and easy operation make it ideal for job shops and small production facilities. Delivers consistent bore quality with minimal operator intervention.",
    features: [
      "Precision drilling and boring operations",
      "Capacity up to 40mm diameter bars",
      "Variable speed spindle control",
      "Quick-change drill chuck system",
      "Digital depth measurement",
      "Automatic feed control",
      "Compact and portable design",
      "Low maintenance requirements",
    ],
    specifications: commonSpecs,
    images: [
      {
        id: "db-40-main",
        url: "/FCM/DBM40-Arudra.png",
        alt: "DB 40 Drilling and Boring Machine",
        caption: "DB 40 - Compact Drilling Solution",
      },
    ],
  },
  {
    id: "db-50",
    name: "DB 50",
    fullName: "DB 50 - Drilling and Boring Machine",
    category: "facing-centering",
    series: "MacInnes Series",
    description: "The DB 50 offers enhanced drilling and boring capabilities for medium to large production volumes. With its robust construction and advanced features, it handles tough materials and continuous operation with ease. Features automation-ready design for integration into production lines.",
    features: [
      "Enhanced capacity up to 50mm diameter",
      "High-torque drilling spindle",
      "Programmable drilling cycles",
      "Automatic tool change system",
      "Precision boring head",
      "Integrated cooling system",
      "Production monitoring interface",
      "Automation-ready design",
    ],
    specifications: commonSpecs,
    images: [
      {
        id: "db-50-main",
        url: "https://placehold.co/800x600/155e75/fff?text=DB+50",
        alt: "DB 50 Drilling and Boring Machine",
        caption: "DB 50 - Enhanced Capacity Model",
      },
    ],
  },

  // Category 2: Vertical Turning and Turn Mill Solutions - Sadaa Chakra Series
  {
    id: "sadaa-chakra-500",
    name: "Sadaa Chakra 500 & 630",
    fullName: "Sadaa Chakra 500 & 630 - Vertical Turning Lathe",
    category: "vertical-turning",
    series: "Sadaa Chakra Series",
    description: "The Sadaa Chakra 500 & 630 series are entry to mid-level vertical turning lathes designed for compact to medium-sized workpieces requiring precision machining. With stable vertical spindle design and rigid construction, they deliver excellent surface finish and dimensional accuracy. Ideal for small to medium batch production.",
    features: [
      "Compact vertical design saves floor space",
      "Chuck diameter 500mm",
      "High-rigidity vertical spindle",
      "Easy workpiece loading and setup",
      "Precision ball screws on all axes",
      "User-friendly CNC control",
      "Automatic tool changer (12 positions)",
      "Integrated coolant system with filtration",
    ],
    specifications: {
      "Working Range": [
        {
          "parameter": "Max. Dia For Facing & OD Turning (mm)",
          "500 TC-TL": "630",
          "500 TC-CT": "630",
          "630 TC-TL": "750",
          "630 TC-CT": "750"
        },
        {
          "parameter": "Max. Swing (mm)",
          "500 TC-TL": "700",
          "500 TC-CT": "700",
          "630 TC-TL": "800",
          "630 TC-CT": "800"
        },
        {
          "parameter": "Day Light (mm)",
          "500 TC-TL": "500",
          "500 TC-CT": "500",
          "630 TC-TL": "500",
          "630 TC-CT": "500"
        }
      ],
      "Table Range": [
        {
          "parameter": "Table Dia (mm)",
          "500 TC-TL": "500",
          "500 TC-CT": "400",
          "630 TC-TL": "630",
          "630 TC-CT": "500"
        },
        {
          "parameter": "Speed Range (RPM)",
          "500 TC-TL": "5-1000",
          "500 TC-CT": "5-1000",
          "630 TC-TL": "4-800",
          "630 TC-CT": "4-800"
        },
        {
          "parameter": "No of speed ranges",
          "500 TC-TL": "1",
          "500 TC-CT": "1",
          "630 TC-TL": "1",
          "630 TC-CT": "1"
        },
        {
          "parameter": "Type of drive",
          "500 TC-TL": "Belt drive/(Gear box drive)",
          "500 TC-CT": "Belt drive/(Gear box drive)",
          "630 TC-TL": "Belt drive/(Gear box drive)",
          "630 TC-CT": "Belt drive/(Gear box drive)"
        }
      ],
      "Axes": [
        {
          "parameter": "X Axis Stroke",
          "500 TC-TL": "630",
          "500 TC-CT": "400",
          "630 TC-TL": "700",
          "630 TC-CT": "450"
        },
        {
          "parameter": "Z Axis Stroke",
          "500 TC-TL": "630",
          "500 TC-CT": "630",
          "630 TC-TL": "630",
          "630 TC-CT": "630"
        },
        {
          "parameter": "Cutting Feed Rate (mm/min)",
          "500 TC-TL": "0.5-2000",
          "500 TC-CT": "0.5-2000",
          "630 TC-TL": "0.5-2000",
          "630 TC-CT": "0.5-2000"
        },
        {
          "parameter": "CNC System",
          "500 TC-TL": "Fanuc OiTF",
          "500 TC-CT": "Siemens 840DSL",
          "630 TC-TL": "Siemens 828D",
          "630 TC-CT": "Siemens 808D"
        },
        {
          "parameter": "Overall Machine Size (H X W X D)",
          "500 TC-TL": "3.3m X 2.3m X 2.3m",
          "500 TC-CT": "3.3m X 2.3m X 2.3m",
          "630 TC-TL": "3.6m X 2.6m X 2.4m",
          "630 TC-CT": "3.6m X 2.6m X 2.4m"
        }
      ],
      "Models": [
        {
          "description": "TC-TL : Turning Center - Turning-Linear-Tooling"
        },
        {
          "description": "TC-CT : Turning Center - Chuck-Turret"
        }
      ]
    },
    images: [
      {
        id: "sadaa-chakra-500-main",
        url: "/images/VTL/VTL-500 (1).jpg",
        alt: "Sadaa Chakra 500 Vertical Turning Lathe",
        caption: "Sadaa Chakra 500 - Front View",
      },
      {
        id: "sadaa-chakra-500-side",
        url: "/images/VTL/VTL-630.JPG",
        alt: "Sadaa Chakra 500 Vertical Turning Lathe - Side View",
        caption: "Sadaa Chakra 500 - Side View",
      },
    ],
  },
  {
    id: "sadaa-chakra-800",
    name: "Sadaa Chakra 800",
    fullName: "Sadaa Chakra 800 - Vertical Turning Lathe",
    category: "vertical-turning",
    series: "Sadaa Chakra Series",
    description: "The Sadaa Chakra 800 is engineered for demanding vertical turning applications on larger workpieces. With its massive structural rigidity and powerful cutting capabilities, it maintains precision even under heavy cutting loads. Perfect for mold & die, aerospace, and power generation industries.",
    features: [
      "Chuck diameter 800mm",
      "Heavy-duty casting for maximum rigidity",
      "High-torque spindle with multiple speed ranges",
      "Large tool turret capacity (20 positions)",
      "Advanced CNC with conversational programming",
      "Automatic workpiece measurement",
      "Chip conveyor and coolant management",
      "Remote monitoring and diagnostics",
    ],
    specifications: {
      "Working Range": [
        {
          "parameter": "Max. Dia For Facing & OD Turning (mm)",
          "800 TC-TR": "900",
          "800 TC-TL": "-"
        },
        {
          "parameter": "Max. Swing (mm)",
          "800 TC-TR": "900",
          "800 TC-TL": "-"
        },
        {
          "parameter": "Day Light (mm)",
          "800 TC-TR": "630",
          "800 TC-TL": "-"
        }
      ],
      "Table Range": [
        {
          "parameter": "Table Dia (mm)",
          "800 TC-TR": "800",
          "800 TC-TL": "-"
        },
        {
          "parameter": "Speed Range (RPM)",
          "800 TC-TR": "8-300",
          "800 TC-TL": "-"
        },
        {
          "parameter": "No of speed ranges",
          "800 TC-TR": "2",
          "800 TC-TL": "-"
        }
      ],
      "Axes": [
        {
          "parameter": "X Axis Stroke",
          "800 TC-TR": "800",
          "800 TC-TL": "-"
        },
        {
          "parameter": "Z Axis Stroke",
          "800 TC-TR": "630/(800)",
          "800 TC-TL": "-"
        },
        {
          "parameter": "Cutting Feed Rate (mm/min)",
          "800 TC-TR": "0.5-2000",
          "800 TC-TL": "-"
        },
        {
          "parameter": "CNC System",
          "800 TC-TR": "Fanuc OiTF",
          "800 TC-TL": "Siemens 840DSL"
        }
      ]
    },
    images: [
      {
        id: "sadaa-chakra-800-main",
        url: "/images/VTL/VTL-800.JPG",
        alt: "Sadaa Chakra 800 Vertical Turning Lathe",
        caption: "Sadaa Chakra 800 - Large Capacity",
      },
    ],
  },
  {
    id: "sadaa-chakra-1200",
    name: "Sadaa Chakra 1200 & 1600 & 1800",
    fullName: "Sadaa Chakra 1200 & 1600 & 1800 - Vertical Turning Lathe",
    category: "vertical-turning",
    series: "Sadaa Chakra Series",
    description: "The Sadaa Chakra 1200, 1600 & 1800 series deliver exceptional capacity and performance for large-diameter workpieces. With advanced vertical spindle design and comprehensive turn-mill capabilities, they are versatile machining centers. Ideal for complex parts requiring multiple operations in one setup.",
    features: [
      "Large chuck diameter 1200mm",
      "Turn-mill capability with powered tools",
      "Dual-spindle option available",
      "Heavy-duty roller ways for smooth motion",
      "Automatic pallet changer ready",
      "High-pressure coolant system",
      "In-process quality measurement",
      "Industry 4.0 connectivity",
    ],
    specifications: {
      "Working Range": [
        {
          "parameter": "Max. Dia For Facing & OD Turning (mm)",
          "1200 TC-TR/ TC-TL": "1400",
          "1600 TC-TR/ TC-TL": "2000",
          "2000 TC-TR/ TC-TL": "2200"
        },
        {
          "parameter": "Max. Swing (mm)",
          "1200 TC-TR/ TC-TL": "1450",
          "1600 TC-TR/ TC-TL": "2000",
          "2000 TC-TR/ TC-TL": "2500"
        },
        {
          "parameter": "Day Light (mm)",
          "1200 TC-TR/ TC-TL": "1000",
          "1600 TC-TR/ TC-TL": "1200",
          "2000 TC-TR/ TC-TL": "1200"
        }
      ],
      "Table Range": [
        {
          "parameter": "Table Dia (mm)",
          "1200 TC-TR/ TC-TL": "1200",
          "1600 TC-TR/ TC-TL": "1600",
          "2000 TC-TR/ TC-TL": "2000"
        },
        {
          "parameter": "Speed Range (RPM)",
          "1200 TC-TR/ TC-TL": "2-350",
          "1600 TC-TR/ TC-TL": "2-280",
          "2000 TC-TR/ TC-TL": "2-250"
        },
        {
          "parameter": "No of speed ranges",
          "1200 TC-TR/ TC-TL": "2",
          "1600 TC-TR/ TC-TL": "2",
          "2000 TC-TR/ TC-TL": "2"
        }
      ],
      "Axes": [
        {
          "parameter": "X Axis Stroke",
          "1200 TC-TR/ TC-TL": "1460",
          "1600 TC-TR/ TC-TL": "1600",
          "2000 TC-TR/ TC-TL": "1900"
        },
        {
          "parameter": "Z Axis Stroke",
          "1200 TC-TR/ TC-TL": "1000 (630/800/1200)",
          "1600 TC-TR/ TC-TL": "1000 (630/800/1200)",
          "2000 TC-TR/ TC-TL": "1000 (630/800/1200)"
        },
        {
          "parameter": "Cutting Feed Rate (mm/min)",
          "1200 TC-TR/ TC-TL": "0.5-2000",
          "1600 TC-TR/ TC-TL": "0.5-2000",
          "2000 TC-TR/ TC-TL": "0.5-2000"
        },
        {
          "parameter": "Ram Size (mm)",
          "1200 TC-TR/ TC-TL": "220X230(230X230)(250X250)",
          "1600 TC-TR/ TC-TL": "220X230(230X230)(250X250)",
          "2000 TC-TR/ TC-TL": "220X230(230X230)(250X250)"
        }
      ],
      "C-Axis & Live Spindle": [
        {
          "parameter": "Milling Spindle Speed Range (RPM)",
          "1200 TC-TR/ TC-TL": "10-2500",
          "1600 TC-TR/ TC-TL": "10-2500",
          "2000 TC-TR/ TC-TL": "10-2500"
        },
        {
          "parameter": "Milling Spindle Power (kW/Nm)",
          "1200 TC-TR/ TC-TL": "11",
          "1600 TC-TR/ TC-TL": "11",
          "2000 TC-TR/ TC-TL": "11"
        },
        {
          "parameter": "CNC System",
          "1200 TC-TR/ TC-TL": "Fanuc OiTF, Siemens 840DSL, 828D",
          "1600 TC-TR/ TC-TL": "Fanuc OiTF, Siemens 840DSL, 828D",
          "2000 TC-TR/ TC-TL": "Fanuc OiTF, Siemens 840DSL, 828D"
        }
      ],
      "Models": [
        {
          "description": "TC-TL : Turning Center - Turning-Linear-Tooling"
        },
        {
          "description": "TC-TR : Turning Center Table Ram type"
        },
        {
          "description": "TM-TR : Turn-Mill Centers Table Ram type"
        }
      ]
    },
    images: [
      {
        id: "sadaa-chakra-1200-main",
        url: "/images/VTL/SADAA CHAKRA VTL 1200.jpg",
        alt: "Sadaa Chakra 1200 Vertical Turning Lathe",
        caption: "Sadaa Chakra 1200 - Extra Large Capacity",
      },
    ],
  },
  {
    id: "sadaa-chakra-2000",
    name: "Sadaa Chakra 2000",
    fullName: "Sadaa Chakra 2000 - Vertical Turning Lathe",
    category: "vertical-turning",
    series: "Sadaa Chakra Series",
    description: "The Sadaa Chakra 2000 is engineered for massive workpieces requiring precision machining. Its robust construction and powerful spindle deliver exceptional performance on large turbine components, mining equipment, and industrial machinery parts. Built for continuous operation in demanding environments.",
    features: [
      "Chuck diameter 2000mm",
      "Heavy-duty spindle with 37kW motor",
      "Reinforced ram structure",
      "Multiple tool turrets available",
      "Automatic workpiece loading system",
      "Advanced thermal stability features",
      "High-accuracy position feedback",
      "24/7 production capability",
    ],
    specifications: commonSpecs,
    images: [
      {
        id: "sadaa-chakra-2000-main",
        url: "/VTL/SC 2000 SadaaChakra 2000 VTL.jpg",
        alt: "Sadaa Chakra 2000 Vertical Turning Lathe",
        caption: "Sadaa Chakra 2000 - Massive Capacity",
      },
    ],
  },
  {
    id: "sadaa-chakra-2500",
    name: "Sadaa Chakra 2500",
    fullName: "Sadaa Chakra 2500 - Vertical Turning Lathe",
    category: "vertical-turning",
    series: "Sadaa Chakra Series",
    description: "The Sadaa Chakra 2500 represents advanced vertical turning technology for extra-large components. With its massive structural design and comprehensive machining capabilities, it handles the most demanding applications in heavy industry. Features state-of-the-art automation and monitoring systems.",
    features: [
      "Extra-large chuck diameter 2500mm",
      "Ultra-rigid machine base",
      "Multi-spindle configuration option",
      "Comprehensive turn-mill capabilities",
      "Automatic part inspection system",
      "Centralized lubrication system",
      "Real-time machine monitoring",
      "Customizable automation solutions",
    ],
    specifications: commonSpecs,
    images: [
      {
        id: "sadaa-chakra-2500-main",
        url: "/images/VTL/Sadaa Chakra 2500 Edited.jpg",
        alt: "Sadaa Chakra 2500 Vertical Turning Lathe",
        caption: "Sadaa Chakra 2500 - Advanced Technology",
      },
    ],
  },
  {
    id: "sadaa-chakra-3000",
    name: "Sadaa Chakra 3000",
    fullName: "Sadaa Chakra 3000 - Vertical Turning Lathe",
    category: "vertical-turning",
    series: "Sadaa Chakra Series",
    description: "The Sadaa Chakra 3000 is designed for the largest vertical turning applications in heavy manufacturing. Its massive structure and powerful components ensure precision machining of extra-large workpieces. Ideal for shipbuilding, power generation, and large equipment manufacturing.",
    features: [
      "Massive chuck diameter 3000mm",
      "Maximum workpiece weight capacity 50 tons",
      "Heavy-duty hydrostatic ways",
      "Multiple machining heads available",
      "Automatic tool management system",
      "Advanced CNC with 3D simulation",
      "Integrated quality control systems",
      "Worldwide service and support",
    ],
    specifications: commonSpecs,
    images: [
      {
        id: "sadaa-chakra-3000-main",
        url: "https://placehold.co/800x600/365314/fff?text=Sadaa+Chakra+3000",
        alt: "Sadaa Chakra 3000 Vertical Turning Lathe",
        caption: "Sadaa Chakra 3000 - Largest Applications",
      },
    ],
  },
  {
    id: "sadaa-chakra-4000",
    name: "Sadaa Chakra 4000",
    fullName: "Sadaa Chakra 4000 - Vertical Turning Lathe",
    category: "vertical-turning",
    series: "Sadaa Chakra Series",
    description: "The Sadaa Chakra 4000 is the ultimate vertical turning solution for the largest and most challenging workpieces. With its exceptional rigidity, massive spindle power, and comprehensive automation, it represents the pinnacle of vertical machining technology. Built for the most demanding industrial applications worldwide.",
    features: [
      "Ultimate capacity: 4000mm chuck diameter",
      "Maximum workpiece weight 80+ tons",
      "Triple-reinforced machine structure",
      "Multi-axis simultaneous machining",
      "Complete automation ecosystem",
      "Redundant safety and monitoring systems",
      "Climate-controlled precision environment",
      "Engineering support and custom integration",
    ],
    specifications: commonSpecs,
    images: [
      {
        id: "sadaa-chakra-4000-main",
        url: "https://placehold.co/800x600/84cc16/fff?text=Sadaa+Chakra+4000",
        alt: "Sadaa Chakra 4000 Vertical Turning Lathe",
        caption: "Sadaa Chakra 4000 - Ultimate Solution",
      },
    ],
  },

  // Category 3: In-Situ Machining Solutions
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
    images: [
      {
        id: "rotaface-mini-350-main",
        url: "https://placehold.co/800x600/334155/fff?text=Rotaface+Mini+350",
        alt: "Rotaface Mini 350 Compact Flange Facer",
        caption: "Rotaface Mini 350",
      },
    ],
  },
  {
    id: "rotaface-550-1000-1500",
    name: "Rotaface 550/1000/1500",
    fullName: "Rotaface 550/1000/1500 - Flange Facer Series",
    category: "in-situ",
    subcategory: "flange-facers",
    series: "Rotaface Series",
    description: "The Precitec Rotaface series offers versatile in-situ flange facing capabilities for medium to large-sized applications. Engineered for durability and precision, these portable, lightweight machines handle demanding on-site machining tasks with ease including flange facing, RTJ groove machining, serrated gasket seat machining, and boring. Features advanced control systems and robust construction for reliable performance in industrial environments.",
    features: [
      "Portable, lightweight, easy to operate",
      "In-situ flange facing capabilities",
      "RTJ groove machining",
      "Serrated gasket seat machining",
      "Boring operations",
      "Variable speed control for different materials",
      "Digital position indicators for precise depth control",
      "Quick-change tooling system",
      "Integrated safety features and emergency stop",
      "Compact footprint for confined spaces",
    ],
    specifications: {
      "Machine Specifications": [
        {
          "parameter": "Model",
          "Rotaface 550i": "Precitec Rotaface 550i",
          "Rotaface 1000i": "Precitec Rotaface 1000i",
          "Rotaface 1500i": "Precitec Rotaface 1500i",
          "Rotaface 2000i": "Precitec Rotaface 2000i"
        },
        {
          "parameter": "Purpose",
          "Rotaface 550i": "Insitu Flange facing, RTJ groove machining, serrated gasket seat machining, boring, etc. Machine is portable, light weight easy to operate",
          "Rotaface 1000i": "Insitu Flange facing, RTJ groove machining, serrated gasket seat machining, boring, etc. Machine is portable, light weight easy to operate",
          "Rotaface 1500i": "Insitu Flange facing, RTJ groove machining, serrated gasket seat machining, boring, etc. Machine is portable, light weight easy to operate",
          "Rotaface 2000i": "Insitu Flange facing, RTJ groove machining, serrated gasket seat machining, boring, etc. Machine is portable, light weight easy to operate"
        },
        {
          "parameter": "Max flange dia",
          "Rotaface 550i": "580 mm",
          "Rotaface 1000i": "1080 mm",
          "Rotaface 1500i": "1580 mm",
          "Rotaface 2000i": "2100 mm"
        },
        {
          "parameter": "Min flange dia",
          "Rotaface 550i": "130 mm",
          "Rotaface 1000i": "160 mm",
          "Rotaface 1500i": "250 mm",
          "Rotaface 2000i": "400 mm"
        },
        {
          "parameter": "Stroke",
          "Rotaface 550i": "150 mm",
          "Rotaface 1000i": "250 mm",
          "Rotaface 1500i": "400 mm",
          "Rotaface 2000i": "500 mm"
        },
        {
          "parameter": "Depth of cut",
          "Rotaface 550i": "Up to 1.5 mm, serrated finish",
          "Rotaface 1000i": "Up to 1.5 mm, serrated finish",
          "Rotaface 1500i": "Up to 1.5 mm, serrated finish",
          "Rotaface 2000i": "Up to 1.5 mm, serrated finish"
        },
        {
          "parameter": "Rotary milling - Electric (Standard)",
          "Rotaface 550i": "1.5 kW / 2.2 kW with AC motor",
          "Rotaface 1000i": "1.5 kW / 2.2 kW with AC motor",
          "Rotaface 1500i": "1.5 kW / 2.2 kW with AC motor",
          "Rotaface 2000i": "1.5 kW / 2.2 kW with AC motor"
        },
        {
          "parameter": "Pneumatic (Optional)",
          "Rotaface 550i": "2 kW approx.",
          "Rotaface 1000i": "2 kW approx.",
          "Rotaface 1500i": "2 kW approx.",
          "Rotaface 2000i": "2 kW approx."
        },
        {
          "parameter": "Hydraulic (Optional)",
          "Rotaface 550i": "Hydromotor approx. 3 kW / PP 7.5 kW",
          "Rotaface 1000i": "Hydromotor approx. 3 kW / PP 7.5 kW",
          "Rotaface 1500i": "Hydromotor approx. 3 kW / PP 7.5 kW",
          "Rotaface 2000i": "Hydromotor approx. 3 kW / PP 7.5 kW"
        }
      ]
    },
    images: [
      {
        id: "rotaface-1000-main",
        url: "/flange_facers/ROTO FACE 1000I.png",
        alt: "Rotaface 550/1000/1500 Flange Facer",
        caption: "Rotaface Series",
      },
    ],
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
    images: [
      {
        id: "rotaface-2000-main",
        url: "https://placehold.co/800x600/64748b/fff?text=Rotaface+2000",
        alt: "Rotaface 2000 Heavy-Duty Flange Facer",
        caption: "Rotaface 2000",
      },
    ],
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
    images: [
      {
        id: "rotaface-3000-main",
        url: "https://placehold.co/800x600/334155/fff?text=Rotaface+3000",
        alt: "Rotaface 3000 Heavy-Duty Flange Facer",
        caption: "Rotaface 3000",
      },
    ],
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
    images: [
      {
        id: "rotaface-4000-main",
        url: "https://placehold.co/800x600/475569/fff?text=Rotaface+4000",
        alt: "Rotaface 4000 Heavy-Duty Flange Facer",
        caption: "Rotaface 4000",
      },
    ],
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
    images: [
      {
        id: "rotaface-5000-main",
        url: "https://placehold.co/800x600/64748b/fff?text=Rotaface+5000",
        alt: "Rotaface 5000 Heavy-Duty Flange Facer",
        caption: "Rotaface 5000",
      },
    ],
  },
  {
    id: "rotamill",
    name: "RotaMill",
    fullName: "RotaMill - In-Situ Machining System",
    category: "in-situ",
    subcategory: "flange-facers",
    series: "Rotaface Series",
    description: "Rotomill is an insitu machine developed for machining heavy components used in power plants, Ship building, Cement industry, Wind mills, Sugar Industry, huge chemical plants and refineries, etc., without having to move the job. It consists of a circular frame with spider arms which permit it to clamp on the surface of the job. At the center of the frame, a rotating arm is located and this arm houses a rotary drive from an electric motor which can be infinitely variable depending upon the requirement. At the end of rotary arm, the machining unit is suitably located. Depending upon the requirement of the machining operations to be carried out, suitable spindle unit with required axis movement slides/devices are selected.",
    features: [
      "No foundation Required: It doesn't require foundation and the machine is portable type so that the machine can be moved to the job",
      "Ease of packing & Transportation: Special packing methods and containers are used to store the machine and for required transportation when not in use",
      "Circular frame with spider arms for surface clamping",
      "Rotating arm with variable speed electric motor drive",
      "Customizable spindle unit selection based on operation requirements",
      "Suitable for power plants, shipbuilding, cement industry, wind mills",
      "Ideal for sugar industry, chemical plants, and refineries",
      "On-site machining without moving heavy components",
    ],
    specifications: {
      "Machine Specifications": [
        {
          "parameter": "X Axis",
          "Specs": "800 mm"
        },
        {
          "parameter": "Z Axis",
          "Specs": "800 mm"
        },
        {
          "parameter": "Milling Head",
          "Specs": "PRECITEC UMP-I-7.5HP"
        },
        {
          "parameter": "Spindle Nose",
          "Specs": "ISO 40"
        },
        {
          "parameter": "Spindle Speed",
          "Specs": "MIN 63rpm, MAX 600rpm"
        },
        {
          "parameter": "Max Cutter Dia",
          "Specs": "300 mm"
        },
        {
          "parameter": "Working Area",
          "Specs": "MIN DIA 5000mm, MAX DIA 10000 mm"
        }
      ]
    },
    images: [
      {
        id: "rotamill-main",
        url: "/flange_facers/ROTAMILL-10000.JPG",
        alt: "RotaMill Milling Flange Facer",
        caption: "RotaMill",
      },
    ],
  },

  // Portable Boring Machines - PortaBore Series
  {
    id: "portabore-75",
    name: "PortaBore 75",
    fullName: "PortaBore 75 - Portable Boring Machine",
    category: "in-situ",
    subcategory: "portable-boring",
    series: "PortaBore Series",
    description: "Precitec Portabore IBM75 boring system is a versatile, highly flexible, easy-to-mount, use and operates in-situ boring and machining system that can reach difficult-to-reach areas. Precitec Portabore IBM75 boring system is a comprehensive solution developed by Precitec with over two decades of experience in in-situ and portable machining solutions. The main features include: Modular approach with a variety of accessories and options. Choice of main drives (electric, pneumatic or hydraulic). Can carry out a wide variety of operations including boring, facing, drilling, and other related operations.",
    features: [
      "Main drive unit with Electric/Pneumatic/Hydraulic drive as selected",
      "Boring bar 75mm x 1500mm, 1no",
      "Boring Bar 50mm x 1000mm and reduction sleeves, 1set",
      "Feed Unit with DC drive programmable, 1no",
      "Feed screw for boring 320mm, 1no",
      "Support bearings, 2nos",
      "Bearing support bracket rear, 1no",
      "Bearing support bracket front, 1no",
      "Control panel and operator pendent, 1set",
      "Boring tool holders and boring tools, 1set",
      "Holding cases, 1 set (plywood)",
    ],
    specifications: {
      "Machine Specifications": [
        {
          "parameter": "Boring Bar Diameter",
          "Standard": "75 / 50 mm",
          "Options": "62 / 40 / 32 / 25 mm"
        },
        {
          "parameter": "Boring Bar length (For Ø50mm)",
          "Standard": "1250 mm",
          "Options": "750 / 1000 / 1500 / 2000~4000 mm"
        },
        {
          "parameter": "Boring Bar length (For Ø75mm)",
          "Standard": "1500 mm",
          "Options": "750 / 1000 / 1250 / 2000~4000 mm"
        },
        {
          "parameter": "Bore range (For boring bar Ø50mm)",
          "Standard": "Ø60mm - Ø400mm",
          "Options": "-"
        },
        {
          "parameter": "Bore range (For boring bar Ø75mm)",
          "Standard": "Ø90mm - Ø800mm",
          "Options": "-"
        },
        {
          "parameter": "Lead Screw Stroke",
          "Standard": "320 mm",
          "Options": "-"
        },
        {
          "parameter": "Boring Speed range",
          "Standard": "3-150 RPM",
          "Options": "-"
        },
        {
          "parameter": "Feed rate (programmable)",
          "Standard": "Programmable 0-300 mm/min",
          "Options": "-"
        },
        {
          "parameter": "Max Boring Torque/Thrust force",
          "Standard": "180 Nm / 300 kgf",
          "Options": "280 Nm / 550 kgf"
        },
        {
          "parameter": "Tool setting",
          "Standard": "-",
          "Options": "Micro setting and measuring devices"
        },
        {
          "parameter": "Drive motors - Electric (Std)",
          "Standard": "1.5 kW",
          "Options": "2.2 kW"
        },
        {
          "parameter": "Drive motors - Hydraulic (Optional)",
          "Standard": "1.4 kW",
          "Options": "2.3 kW"
        },
        {
          "parameter": "Drive motors - Pneumatic (Optional)",
          "Standard": "1.2 kW",
          "Options": "~2.0 kW"
        },
        {
          "parameter": "Control",
          "Standard": "PLC Control",
          "Options": "-"
        },
        {
          "parameter": "Feed Screw Length",
          "Standard": "320 mm",
          "Options": "500 / 630 / 800 / 1000 mm (special)"
        }
      ]
    },
    images: [
      {
        id: "portabore-75-main",
        url: "/portabore/portabore-75.png",
        alt: "PortaBore 75 Portable Boring Machine",
        caption: "PortaBore 75",
      },
    ],
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
    images: [
      {
        id: "portabore-50-main",
        url: "https://placehold.co/800x600/10b981/fff?text=PortaBore+50",
        alt: "PortaBore 50 Portable Boring Machine",
        caption: "PortaBore 50",
      },
    ],
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
    images: [
      {
        id: "portamill-40-main",
        url: "https://placehold.co/800x600/0891b2/fff?text=PortaMill+40",
        alt: "PortaMill 40 Portable Milling Machine",
        caption: "PortaMill 40",
      },
    ],
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
    images: [
      {
        id: "portamill-50-main",
        url: "https://placehold.co/800x600/06b6d4/fff?text=PortaMill+50",
        alt: "PortaMill 50 Portable Milling Machine",
        caption: "PortaMill 50",
      },
    ],
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
    images: [
      {
        id: "portamill-gantry-main",
        url: "https://placehold.co/800x600/0284c7/fff?text=PortaMill+Gantry",
        alt: "PortaMill Gantry Portable Milling Machine",
        caption: "PortaMill Gantry",
      },
    ],
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
    specifications: {
      "Machine Specifications": [
        {
          "parameter": "Model",
          "Specs": "Sarva-3-5A-7A (optional CNC)"
        },
        {
          "parameter": "Purpose",
          "Specs": "Portable/Insitu Machining operations: Milling, boring, nozzle cutout machining, drilling, edge preparation, flange facing etc"
        },
        {
          "parameter": "Strokes (X × Y × Z)",
          "Specs": "1500 × 800 × 800 mm"
        },
        {
          "parameter": "Max boring dia",
          "Specs": "9000 mm"
        },
        {
          "parameter": "Max cutter dia",
          "Specs": "315 mm"
        },
        {
          "parameter": "Taper boring",
          "Specs": "Available"
        },
        {
          "parameter": "Facing",
          "Specs": "Available"
        },
        {
          "parameter": "Spindle Power",
          "Specs": "11 kW (optional 15/18 kW)"
        },
        {
          "parameter": "Controls",
          "Specs": "Conventional with PLC or CNC"
        }
      ]
    },
    images: [
      {
        id: "sarva-main",
        url: "/mpm/SARVA.jpg",
        alt: "Sarva Multi-Purpose In-Situ Machining System",
        caption: "Sarva System",
      },
    ],
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
    images: [
      {
        id: "special-machines-main",
        url: "https://placehold.co/800x600/dc2626/fff?text=Custom+Solutions",
        alt: "Special Machines and Solutions - Custom Equipment",
        caption: "Custom Solutions",
      },
    ],
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
