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
        },
        {
          "parameter": "Spindle Position Adjustment for Job length",
          "FC-40-400-SC": "Fixed",
          "FC-40-800-SC": "Manually adjusted",
          "FC-40-1200-SC": "Manually adjusted"
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
        },
        {
          "parameter": "Maximum connected load (electric)",
          "Standard": "15 KVA",
          "Options": "20 KVA"
        },
        {
          "parameter": "Hydraulic power pack",
          "Standard": "0.75 kW / (1 HP), 6L/min / (1.55 Gal/min)",
          "Options": "2.2 kW / (3 HP), 20L/min / (5.25 Gal/min) (for special fixturing)"
        },
        {
          "parameter": "Coolant tank and pump",
          "Standard": "100 Ltr / (26.5 Gal), 40 LPM / (10.5 GPM)",
          "Options": "180 Ltr / (47.5 Gal); 40+150 LPM / (10.5+40 GPM) (Cutting+flush coolant)"
        },
        {
          "parameter": "Electric connection",
          "Standard": "3ph, 415V, 50Hz/60Hz",
          "Options": "3ph, 200V, 50/60 Hz"
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
          "FCM-80-NC/CNC-500": "80 mm / (3.15\")",
          "Options": "-"
        },
        {
          "parameter": "Min Job dia",
          "FCM-80-NC/CNC-500": "20 mm / (0.79\")",
          "Options": "-"
        },
        {
          "parameter": "Maximum length of job",
          "FCM-80-NC/CNC-500": "500 mm / (19.7\")",
          "Options": "-"
        },
        {
          "parameter": "Minimum length of job",
          "FCM-80-NC/CNC-500": "100 mm / (4\")",
          "Options": "60mm / 2.25\" with 1 vice/special fixture"
        },
        {
          "parameter": "Z axis stroke",
          "FCM-80-NC/CNC-500": "125 / 4.9\"",
          "Options": "-"
        },
        {
          "parameter": "Overall dimension (L × D × H)",
          "FCM-80-NC/CNC-500": "2300mm × 1500mm × 1500mm / 7'9\" × 5' × 5'",
          "Options": "-"
        },
        {
          "parameter": "Machine overall weight (approx.)",
          "FCM-80-NC/CNC-500": "1600 DaN / (3500 lbf)",
          "Options": "-"
        }
      ],
      "Standard and Optional Specifications": [
        {
          "parameter": "No of spindles",
          "Standard": "2",
          "Options": "4/6 (Specials)"
        },
        {
          "parameter": "Spindle speed range",
          "Standard": "30-2250 RPM",
          "Options": "-"
        },
        {
          "parameter": "Spindle Power",
          "Standard": "3.7 kW / (5 HP)",
          "Options": "-"
        },
        {
          "parameter": "Spindle Max. torque/thrust force",
          "Standard": "50 Nm (440 lb-in) / 450 Kgf (1000 Lbf)",
          "Options": "-"
        },
        {
          "parameter": "Tools",
          "Standard": "Milling cum centring tool 110mm dia",
          "Options": "90mm/125mm, boring tools and others"
        },
        {
          "parameter": "Controls",
          "Standard": "PLC with servo motors and VFD/CNC controls",
          "Options": "Delta/Siemens/Mitsubishi/Pragati"
        },
        {
          "parameter": "X axis stroke",
          "Standard": "150 / 5.8\"",
          "Options": "-"
        },
        {
          "parameter": "Vice Type",
          "Standard": "Self-Centring: 2 nos.",
          "Options": "V and flat, special fixtures"
        },
        {
          "parameter": "Vice Actuation",
          "Standard": "Hydraulic",
          "Options": "Air/Servomotor"
        },
        {
          "parameter": "Maximum connected load (electric)",
          "Standard": "15 KVA",
          "Options": "20 KVA"
        },
        {
          "parameter": "Hydraulic power pack",
          "Standard": "1 kW, 6 L/min",
          "Options": "3 kW, 20 L/min (for special fixturing)"
        },
        {
          "parameter": "Coolant tank and pump",
          "Standard": "120 Ltr, 40 LPM",
          "Options": "300 Ltr, 40+150 LPM (flush coolant)"
        },
        {
          "parameter": "Electric connection",
          "Standard": "3 ph, 415V / 50Hz/60Hz",
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
      ],
      "Standard and Optional Specifications": [
        {
          "parameter": "No of spindles",
          "Standard": "2",
          "Options": "4/6 (Specials)"
        },
        {
          "parameter": "Spindle speed range (RPM)",
          "Standard": "30-1200",
          "Options": "30-1200"
        },
        {
          "parameter": "Spindle Power",
          "Standard": "3.7 kW / (5 HP)",
          "Options": "2.2 kW / (3 HP), 5.5 kW / (7.5 HP)"
        },
        {
          "parameter": "Centring and facing Cutter size dia",
          "Standard": "125 mm / (5\")",
          "Options": "63/80/100/150 mm (2.5\"/3.15\"/4\"/6\")"
        },
        {
          "parameter": "X1 and X2 axis stroke (milling)",
          "Standard": "200 mm / (10\")",
          "Options": "425 mm / (16\")"
        },
        {
          "parameter": "Vice actuation",
          "Standard": "Hydraulic",
          "Options": "Servo/Air-hydraulic"
        },
        {
          "parameter": "Maximum connected load (electric)",
          "Standard": "15 KVA",
          "Options": "20 KVA"
        },
        {
          "parameter": "Hydraulic power pack",
          "Standard": "1 kW, 6 L/min",
          "Options": "3 kW, 20 L/min (for special fixturing)"
        },
        {
          "parameter": "Coolant tank and pump",
          "Standard": "120 Ltr, 40 LPM",
          "Options": "450 Ltr, 40+150 LPM (flush coolant)"
        },
        {
          "parameter": "Electric connection",
          "Standard": "3 ph, 415V / 50Hz/60Hz",
          "Options": "3ph, 200V, 50/60Hz"
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
      ],
      "Standard and Optional Specifications": [
        {
          "parameter": "No of spindles",
          "Standard": "2",
          "Options": "4/6 (Specials)"
        },
        {
          "parameter": "Spindle speed range (RPM)",
          "Standard": "30-1200",
          "Options": "30-1200"
        },
        {
          "parameter": "Spindle Power",
          "Standard": "5.5 kW / (7.5 HP)",
          "Options": "7.5 kW / (10 HP), 11 kW / (15 HP)"
        },
        {
          "parameter": "Centering and facing Cutter size dia",
          "Standard": "200 mm / (5\")",
          "Options": "63/80/100/150/250 mm (2.5\"/3.15\"/4\"/6\"/10\")"
        },
        {
          "parameter": "X1 and X2 axis stroke (milling)",
          "Standard": "250 mm / (10\")",
          "Options": "400/630 mm (16\"/25\")"
        },
        {
          "parameter": "Vice actuation",
          "Standard": "Hydraulic",
          "Options": "Servo/Air-hydraulic"
        },
        {
          "parameter": "Maximum connected load (electric)",
          "Standard": "15 KVA",
          "Options": "20/30 KVA"
        },
        {
          "parameter": "Hydraulic power pack",
          "Standard": "1 kW, 6 L/min",
          "Options": "3 kW, 20 L/min (for special fixturing)"
        },
        {
          "parameter": "Coolant tank and pump",
          "Standard": "120 Ltr, 40 LPM",
          "Options": "300 Ltr, 40+150 LPM (flush coolant)"
        },
        {
          "parameter": "Electric connection",
          "Standard": "3 ph, 415V / 50Hz/60Hz",
          "Options": "3ph, 200V, 50/60Hz"
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
    specifications: [
      { label: "Spindle Type", value: "'Precitec' UMS 200" },
      { label: "Bearing", value: "Precision angular contact Bearing" },
      { label: "Nose", value: "ISO40" },
      { label: "Power Std (kW)", value: "2.2" },
      { label: "Power Optional (kW)", value: "3.7, 5.6" },
      { label: "Speed Range - Fixed (RPM)", value: "400-2500" },
      { label: "Speed Range - Inverter Drive (RPM)", value: "50-2500" },
      { label: "Drive", value: "Poly V Belt" },
      { label: "Slide Type", value: "'Precitec' US 200-SP" },
      { label: "Max. Feed Stroke Std (mm)", value: "200" },
      { label: "Max. Feed Stroke Optional (mm)", value: "400, 630" },
      { label: "Slide Feed", value: "Hydraulic / AC Servo (Std/Optional)" },
      { label: "Max Diameter (mm)", value: "70" },
      { label: "Max Length (mm)", value: "400" },
      { label: "Min Length (mm)", value: "60" },
      { label: "Optional", value: "As per requirement" },
      { label: "Coolant (LPM/Bar)", value: "40/2" },
      { label: "Flush Optional (LPM)", value: "50" },
      { label: "Total Connected Load (kVA)", value: "10" },
      { label: "Machine Dimension L×W×H (mm) Approx.", value: "2300 × 1960 × 1780" },
      { label: "Machine Weight Kgf (Approx)", value: "1500" }
    ],
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
    specifications: [
      { label: "Spindle Type", value: "'Precitec' UMS 250" },
      { label: "Bearing", value: "Precision angular contact Bearing" },
      { label: "Nose", value: "ISO 50" },
      { label: "Power Std (kW)", value: "3.7" },
      { label: "Power Optional (kW)", value: "5.6, 7.5" },
      { label: "Speed Range - Fixed (RPM)", value: "400-2500" },
      { label: "Speed Range - Inverter Drive (RPM)", value: "50-2500" },
      { label: "Drive", value: "Poly V Belt" },
      { label: "Slide Type", value: "Precitec' US 250 SP" },
      { label: "Max. Feed Stroke Std (mm)", value: "250" },
      { label: "Max. Feed Stroke Optional (mm)", value: "400, 630" },
      { label: "Slide Feed", value: "Hydraulic / AC Servo (Std/Optional)" },
      { label: "Max Diameter (mm)", value: "180" },
      { label: "Max Length (mm)", value: "500" },
      { label: "Min Length (mm)", value: "100" },
      { label: "Optional", value: "As per requirement" },
      { label: "Coolant (LPM/Bar)", value: "60/2" },
      { label: "Flush Optional (LPM)", value: "50" },
      { label: "Total Connected Load (kVA)", value: "15" },
      { label: "Machine Dimension L×W×H (mm) Approx.", value: "3050 × 2100 × 2100" },
      { label: "Machine Weight Kgf (Approx)", value: "2200" }
    ],
    images: [
      {
        id: "db-50-main",
        url: "/FCM/DB50.png",
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
          "630 TC-TL": "800",
          "630 TC-CT": "750"
        },
        {
          "parameter": "Max. Swing (mm)",
          "500 TC-TL": "700",
          "500 TC-CT": "700",
          "630 TC-TL": "900",
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
          "630 TC-TL": "600",
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
          "630 TC-TL": "450",
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
      ],
      "Models": [
        {
          "description": "TC-TL : Turning Center - Turning-Linear-Tooling"
        },
        {
          "description": "TC-TR : Turning Center - Table Ram type"
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
          "1600 TC-TR/ TC-TL": "2050"
        },
        {
          "parameter": "Max. Swing (mm)",
          "1200 TC-TR/ TC-TL": "1450",
          "1600 TC-TR/ TC-TL": "2200"
        },
        {
          "parameter": "Day Light (mm)",
          "1200 TC-TR/ TC-TL": "1100",
          "1600 TC-TR/ TC-TL": "1100"
        }
      ],
      "Table Range": [
        {
          "parameter": "Table Dia (mm)",
          "1200 TC-TR/ TC-TL": "1200",
          "1600 TC-TR/ TC-TL": "1600"
        },
        {
          "parameter": "Speed Range (RPM)",
          "1200 TC-TR/ TC-TL": "2-350",
          "1600 TC-TR/ TC-TL": "2-250"
        },
        {
          "parameter": "No of speed ranges",
          "1200 TC-TR/ TC-TL": "2",
          "1600 TC-TR/ TC-TL": "2"
        },
        {
          "parameter": "Table Spindle Motor (kW)",
          "1200 TC-TR/ TC-TL": "30 (37/45)",
          "1600 TC-TR/ TC-TL": "30 (37/45)"
        }
      ],
      "Axes": [
        {
          "parameter": "X Axis Stroke",
          "1200 TC-TR/ TC-TL": "-100, +1100",
          "1600 TC-TR/ TC-TL": "-100, +1350"
        },
        {
          "parameter": "Z Axis Stroke",
          "1200 TC-TR/ TC-TL": "1000 (1200/1400)",
          "1600 TC-TR/ TC-TL": "1000 (1200/1400)"
        },
        {
          "parameter": "Cutting Feed Rate (mm/min)",
          "1200 TC-TR/ TC-TL": "0.5-5000",
          "1600 TC-TR/ TC-TL": "0.5-5000"
        },
        {
          "parameter": "Ram Size (mm)",
          "1200 TC-TR/ TC-TL": "230X230 (250X250)",
          "1600 TC-TR/ TC-TL": "230X230 (250X250)"
        }
      ],
      "C-Axis & Live Spindle": [
        {
          "parameter": "Milling Spindle Speed Range (RPM)",
          "1200 TM-TR": "10-2500",
          "1600 TM-TR": "10-2500"
        },
        {
          "parameter": "Milling Spindle Power (kW/Nm)",
          "1200 TM-TR": "11",
          "1600 TM-TR": "11"
        },
        {
          "parameter": "CNC System",
          "1200 TM-TR": "Fanuc OiTF, Siemens 840DSL, 828D",
          "1600 TM-TR": "Fanuc OiTF, Siemens 840DSL, 828D"
        }
      ],
      "Models": [
        {
          "description": "TC-TL : Turning Center - Turning-Linear-Tooling"
        },
        {
          "description": "TC-TR : Turning Center - Table Ram type"
        },
        {
          "description": "TM-TR : Turn-Mill Centers - Table Ram type"
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
    id: "sadaa-chakra-2000-4000",
    name: "Sadaa Chakra 2000/2500/3000/4000",
    fullName: "Sadaa Chakra 2000/2500/3000/4000 - Vertical Turning Lathe Series",
    category: "vertical-turning",
    series: "Sadaa Chakra Series",
    description: "The Sadaa Chakra 2000/2500/3000/4000 series represents advanced vertical turning technology for extra-large components and the most demanding applications in heavy industry. With massive structural design, comprehensive machining capabilities, and state-of-the-art automation, these machines handle the largest and most challenging workpieces. Ideal for shipbuilding, power generation, and large equipment manufacturing.",
    features: [
      "Extra-large chuck diameter from 2000mm to 4000mm",
      "Maximum workpiece weight capacity up to 80+ tons",
      "Ultra-rigid machine base with heavy-duty hydrostatic ways",
      "Heavy-duty spindle with 37kW motor",
      "Reinforced ram structure",
      "Multi-spindle configuration option",
      "Comprehensive turn-mill capabilities",
      "Multiple machining heads and tool turrets available",
      "Multi-axis simultaneous machining",
      "Automatic part inspection system",
      "Automatic workpiece loading system",
      "Automatic tool management system",
      "Advanced CNC with 3D simulation",
      "Advanced thermal stability features",
      "Centralized lubrication system",
      "Real-time machine monitoring",
      "High-accuracy position feedback",
      "Complete automation ecosystem",
      "Redundant safety and monitoring systems",
      "Integrated quality control systems",
      "Customizable automation solutions",
      "Climate-controlled precision environment",
      "Engineering support and custom integration",
      "24/7 production capability",
      "Worldwide service and support",
    ],
    specifications: {
      "Working Range": [
        {
          "parameter": "Max. Dia For Facing & OD Turning (mm)",
          "2000 TC-TR/ TC-TL": "2300",
          "2500 TC-TR/ TC-TL": "2800"
        },
        {
          "parameter": "Max. Swing (mm)",
          "2000 TC-TR/ TC-TL": "2500",
          "2500 TC-TR/ TC-TL": "2900"
        },
        {
          "parameter": "Day Light (mm)",
          "2000 TC-TR/ TC-TL": "1400",
          "2500 TC-TR/ TC-TL": "1400"
        }
      ],
      "Table Range": [
        {
          "parameter": "Table Dia (mm)",
          "2000 TC-TR/ TC-TL": "2000",
          "2500 TC-TR/ TC-TL": "2500"
        },
        {
          "parameter": "Speed Range (RPM)",
          "2000 TC-TR/ TC-TL": "2-220",
          "2500 TC-TR/ TC-TL": "2-190"
        },
        {
          "parameter": "No of speed ranges",
          "2000 TC-TR/ TC-TL": "2",
          "2500 TC-TR/ TC-TL": "2"
        },
        {
          "parameter": "Table Spindle Motor (kW)",
          "2000 TC-TR/ TC-TL": "45 (50/60)",
          "2500 TC-TR/ TC-TL": "45 (50/60)"
        }
      ],
      "Axes": [
        {
          "parameter": "X Axis Stroke",
          "2000 TC-TR/ TC-TL": "-100, +1450",
          "2500 TC-TR/ TC-TL": "-100, +1650"
        },
        {
          "parameter": "Z Axis Stroke",
          "2000 TC-TR/ TC-TL": "1200 (1300/1400)",
          "2500 TC-TR/ TC-TL": "1300 (1400/1500)"
        },
        {
          "parameter": "Cutting Feed Rate (mm/min)",
          "2000 TC-TR/ TC-TL": "0.5-5000",
          "2500 TC-TR/ TC-TL": "0.5-2000"
        },
        {
          "parameter": "Ram Size (mm)",
          "2000 TC-TR/ TC-TL": "230X230 (250X250)",
          "2500 TC-TR/ TC-TL": "250X250 (280X280)"
        }
      ],
      "C-Axis & Live Spindle": [
        {
          "parameter": "Milling Spindle Speed Range (RPM)",
          "2000 TM-TR": "10-2500",
          "2500 TM-TR": "10-2500"
        },
        {
          "parameter": "Milling Spindle Power (kW/Nm)",
          "2000 TM-TR": "11",
          "2500 TM-TR": "11"
        },
        {
          "parameter": "CNC System",
          "2000 TM-TR": "Fanuc OiTF, Siemens 840DSL, 828D",
          "2500 TM-TR": "Fanuc OiTF, Siemens 840DSL, 828D"
        }
      ],
      "Models": [
        {
          "description": "TC-TL : Turning Center - Turning-Linear-Tooling"
        },
        {
          "description": "TC-TR : Turning Center - Table Ram type"
        },
        {
          "description": "TM-TR : Turn-Mill Centers - Table Ram type"
        }
      ]
    },
    images: [
      {
        id: "sadaa-chakra-2000-4000-main",
        url: "/VTL/SC 2000 SadaaChakra 2000 VTL.jpg",
        alt: "Sadaa Chakra 2000/2500/3000/4000 Vertical Turning Lathe Series",
        caption: "Sadaa Chakra 2000/2500/3000/4000",
      },
    ],
  },

  // Category 3: In-Situ Machining Solutions
  // Flange Facers - Rotaface Series
  {
    id: "rotaface-mini-350",
    name: "RotaFace MFF-350",
    fullName: "RotaFace MFF-350 - Portable Flange Facing Machine",
    category: "in-situ",
    subcategory: "flange-facers",
    series: "Rotaface Series",
    description: "The Precitec RotaFace MFF-350 is a compact and portable flange facing machine designed for on-site machining, maintenance, and repair applications. Fully hand-operated and independent of any external power source, the machine is ideal for field conditions, shutdown maintenance, and confined working spaces. Despite its lightweight and portable construction, the MFF-350 is capable of accurately machining flange faces up to 360 mm diameter on materials such as cast iron, steel, and stainless steel, delivering consistent and reliable surface finishes with minimal setup time.",
    features: [
      "Fully hand-operated machine requiring no external power",
      "Lightweight and portable design for easy on-site use",
      "Machines flange diameters up to 360 mm on multiple materials",
      "Precision mechanical feed for smooth and controlled cutting",
      "Interchangeable feed system for different surface finishes",
      "Wide clamping range with self-centering mechanism",
      "Quick setup and easy alignment for field applications",
    ],
    specifications: commonSpecs,
    images: [
      {
        id: "rotaface-mini-350-main",
        url: "/flange_facers/Rota face MINI.jpeg",
        alt: "Rotaface Mini 350 Compact Flange Facer",
        caption: "Rotaface Mini 350",
      },
    ],
  },
  {
    id: "rotaface-550-1000-1500",
    name: "Rotaface 550/800/1000/1500",
    fullName: "Rotaface 550/800/1000/1500 - Flange Facer Series",
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
    id: "rotaface-2000-5000",
    name: "Rotaface 2000/3000/4000/5000",
    fullName: "Rotaface 2000/3000/4000/5000 - Heavy-Duty Flange Facer Series",
    category: "in-situ",
    subcategory: "flange-facers",
    series: "Rotaface Series",
    description: "The Rotaface heavy-duty series represents the pinnacle of flange machining technology for the most demanding industrial applications. Engineered with cutting-edge technology and massive structural rigidity, these machines handle the largest flanges with exceptional precision. Perfect for shipbuilding, power plants, large pressure vessels, turbine casings, and mega-projects in oil & gas and power generation.",
    features: [
      "Heavy-duty capacity from 2000mm to 5000mm diameter",
      "Extra-rigid construction for vibration-free cutting",
      "High-torque spindle with multiple speed ranges",
      "Advanced coolant filtration system",
      "Wireless remote monitoring and control",
      "Modular tooling system for quick changes",
      "Built-in alignment laser system",
      "Certified for hazardous area operation",
      "Variable frequency drive (VFD) for precise speed control",
      "Automatic tool wear compensation",
      "Real-time load monitoring",
      "Industry 4.0 ready with IoT connectivity",
    ],
    specifications: commonSpecs,
    images: [
      {
        id: "rotaface-2000-5000-main",
        url: "/flange_facers/Rotaface_2000_3000_4000_5000.jpeg",
        alt: "Rotaface 2000/3000/4000/5000 Heavy-Duty Flange Facer Series",
        caption: "Rotaface 2000/3000/4000/5000 Series",
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
          "parameter": "Machining Range Standard (Diameter)",
          "Rotamill 5000": "2000 – 5000 mm",
          "Rotamill 10000": "4800 – 10000 mm",
          "Rotamill 16 M": "6300 – 16000 mm"
        },
        {
          "parameter": "ID Clamping Range",
          "Rotamill 5000": "2000 – 4800 mm",
          "Rotamill 10000": "4600 – 9500 mm",
          "Rotamill 16 M": "Modular customised clamping systems provided for ID and OD"
        },
        {
          "parameter": "Optional: OD Clamping Range",
          "Rotamill 5000": "2400 – 5200 mm",
          "Rotamill 10000": "5200 – 10000 mm",
          "Rotamill 16 M": "-"
        },
        {
          "parameter": "Main Table Rotation Speed (Standard / Optional)",
          "Rotamill 5000": "0.016 – 0.05 rpm (for single point grinding; additional drive & motor provided)",
          "Rotamill 10000": "0.1 – 0.25 rpm (for milling) / < 2 to 6 rpm (single point tool operation)",
          "Rotamill 16 M": "0.008 – 2 rpm (for milling) / < 0.8 rpm"
        },
        {
          "parameter": "Milling Head",
          "Rotamill 5000": "ISO 40/ISO 50 - 2.2 to 5.6 kW electric or hydromotor drive (optional tilting arrangement)",
          "Rotamill 10000": "ISO 40/ISO 50 - 2.2 to 5.6 kW electric or hydromotor drive (optional tilting arrangement)",
          "Rotamill 16 M": "ISO 40/ISO 50 - 2.2 to 5.6 kW electric or hydromotor drive (optional tilting arrangement)"
        },
        {
          "parameter": "Cross Feed Slide Stroke (for radius adjustment)",
          "Rotamill 5000": "400 mm",
          "Rotamill 10000": "400 / 630 mm",
          "Rotamill 16 M": "400 / 630 mm"
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
    description: "Precitec Portabore IBM50 boring system is a versatile, highly flexible, easy-to-mount, use and operates in-situ boring and machining system that can reach difficult-to-reach areas. Precitec Portabore IBM50 boring system is a comprehensive solution developed by Precitec with over two decades of experience in in-situ and portable machining solutions. The main features include: Modular approach with a variety of accessories and options. Choice of main drives (electric, pneumatic or hydraulic). Can carry out a wide variety of operations including boring, facing, drilling, and other related operations.",
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
        id: "portabore-50-main",
        url: "/portabore/portabore50.jpg",
        alt: "PortaBore 50 Portable Boring Machine",
        caption: "PortaBore 50",
      },
    ],
  },

  // Portable Milling Machines - PortaMill Series
  {
    id: "portamill-2500",
    name: "PortaMill 2500",
    fullName: "PortaMill 2500 - Portable/In-Situ Milling Machine",
    category: "in-situ",
    subcategory: "portable-milling",
    series: "PortaMill Series",
    description: "The Precitec PortaMill 2500 is a revolutionary portable/in-situ milling system designed for large-scale on-site machining operations. This versatile gantry-style machine excels at portable/in-situ machining and milling of surfaces, edge preparation, and clad removal. With its expansive working envelope and precision control, it handles massive workpieces that cannot be moved to a workshop. Engineered for onsite milling of plates, clad removal, portable machining of mounting areas and pads, machining of skids, and various operations including drilling, milling, boring, and reaming. The PortaMill 2500 delivers workshop-quality results on-site with advanced control systems and robust construction for reliable performance in demanding industrial environments. Ideal for shipbuilding, large fabrication, infrastructure projects, power plants, oil & gas facilities, and heavy manufacturing sectors.",
    features: [
      "Large gantry-style working envelope",
      "Portable/in-situ machining of surfaces",
      "Edge preparation capabilities",
      "Clad removal operations",
      "Onsite milling of plates",
      "Portable machining of mounting areas and pads",
      "Machining of skids",
      "Multi-axis simultaneous machining",
      "Modular construction for scalability",
      "Laser-guided alignment system",
      "CNC control with CAM integration",
      "Wireless remote operation",
      "Heavy-duty linear motion system",
      "High-torque milling spindle",
      "Three-axis digital positioning",
      "Programmable feed rates",
      "Tool change system",
      "Integrated coolant delivery",
      "Suitable for large structural components and ferrous/non-ferrous materials",
    ],
    specifications: {
      "Machine Specifications": [
        {
          "parameter": "Model",
          "Specs": "Precitec PortaMill 2500"
        },
        {
          "parameter": "Purpose",
          "Specs": "Onsite milling of plates, clad removal, portable machining of mounting areas and pads, machining of skids, drilling, milling, boring, reaming various operations"
        },
        {
          "parameter": "Max machining in one setup - Option 1",
          "Specs": "2500 × 100 mm"
        },
        {
          "parameter": "Max machining in one setup - Option 2",
          "Specs": "2500 × 500 mm"
        },
        {
          "parameter": "Milling cutter (Standard)",
          "Specs": "125 mm"
        },
        {
          "parameter": "Milling cutter (Maximum)",
          "Specs": "Up to 300 mm"
        },
        {
          "parameter": "Drilling capacity (solid)",
          "Specs": "Up to 28 mm"
        },
        {
          "parameter": "Boring capacity",
          "Specs": "Up to 250 mm dia × 350 mm deep"
        },
        {
          "parameter": "Main drive",
          "Specs": "Rotary milling"
        }
      ]
    },
    images: [
      {
        id: "portamill-2500-main",
        url: "/portamill/portamill-gantry.png",
        alt: "PortaMill 2500 Portable Milling Machine",
        caption: "PortaMill 2500",
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
