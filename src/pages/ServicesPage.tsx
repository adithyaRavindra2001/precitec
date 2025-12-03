import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

const services = [
  {
    title: "Product Engineering Consultancy Services",
    description: `Precitec is a leading product engineering consultancy firm in Bangalore, India, specializing in end-to-end product development solutions for diverse industries. With over 40 years of manufacturing excellence since 1978, our experienced engineers and consultants deliver innovative product engineering services across automotive, medical devices, consumer electronics, industrial equipment, and heavy machinery sectors.

Our comprehensive product engineering consultancy services encompass the complete product lifecycle - from initial concept development and feasibility studies to detailed design engineering, prototyping, rigorous testing, and full-scale manufacturing support. We leverage cutting-edge CAD/CAM technologies, advanced simulation tools, and industry 4.0 methodologies to ensure your products are developed with optimal efficiency, cost-effectiveness, and superior quality standards.

As a trusted partner in product development, we understand that successful engineering goes beyond technical expertise. Our collaborative approach combines deep industry knowledge with strategic business insights to deliver customized solutions aligned with your specific requirements. Whether you're developing precision CNC machine components, specialized industrial equipment, or custom manufacturing solutions, our team provides the technical prowess and market understanding needed for success.

Our product engineering services include: conceptual design and feasibility analysis, 3D modeling and simulation, prototype development and validation, design for manufacturing (DFM), materials selection and optimization, performance testing and quality assurance, production engineering support, and value engineering for cost reduction.

We offer flexible engagement models - from complete turnkey product development solutions to specialized support for specific engineering challenges. Our ISO 9001:2015 certified processes ensure consistent quality, while our agile methodology enables rapid iterations and faster time-to-market for your innovative products.

Partner with Precitec's product engineering consultancy to transform your ideas into market-ready products. Our proven track record in precision engineering, combined with state-of-the-art manufacturing facilities in Bangalore, makes us the ideal choice for businesses seeking reliable, high-quality product development services in India and internationally.`,
    image: "/product_engineering.jpg",
  },
  {
    title: "Special Purpose Tooling & Custom Manufacturing Solutions",
    description: `Precitec is a renowned provider of special purpose tooling design and manufacturing services, delivering customized tooling solutions to industries across automotive, aerospace, heavy engineering, and mass production sectors. With over four decades of expertise in precision tool engineering, we specialize in creating innovative, efficient, and cost-effective tooling systems that optimize production processes and maximize manufacturing efficiency.

Our special tooling consultancy services are engineered to solve complex manufacturing challenges and streamline production workflows. From custom jigs and fixtures to specialized cutting tools, inspection gauges, and automated tooling systems, we design and manufacture precision tooling equipment tailored to your exact specifications. Our deep understanding of diverse industry requirements enables us to deliver tooling solutions that improve product quality, reduce cycle times, and enhance overall operational efficiency.

As specialists in custom tooling design and fabrication, we provide comprehensive services including: special purpose machine tool design, custom jigs and fixtures development, precision cutting tool engineering, inspection and quality control gauges, automated tooling systems, modular tooling solutions, tool reconditioning and maintenance, and tooling optimization for existing production lines.

Our state-of-the-art manufacturing facility in Bangalore is equipped with advanced CNC machining centers, precision grinding machines, and sophisticated measurement equipment to produce tooling with micron-level accuracy. Every special tooling project undergoes rigorous quality checks and performance validation to ensure it meets the demanding standards of modern manufacturing environments.

Whether you require simple tooling solutions for specific operations or complex, multi-stage production tooling systems, our expert engineers work closely with your team to understand your unique manufacturing challenges. We analyze your production processes, identify optimization opportunities, and design tooling solutions that deliver measurable improvements in productivity, quality, and cost-efficiency.

Our special tooling services extend beyond design and manufacturing - we provide comprehensive support including installation, operator training, performance monitoring, and ongoing maintenance to ensure long-term reliability and optimal performance of your tooling systems.

With ISO 9001:2015 certification and a proven track record of successful tooling projects across diverse industries, Precitec stands as your trusted partner for special purpose tooling in India. Our commitment to innovation, precision, and customer satisfaction has made us the preferred choice for businesses seeking world-class custom tooling solutions.

Contact Precitec today to discuss your special tooling requirements and discover how our engineering expertise can transform your manufacturing operations with precision-engineered, custom-designed tooling solutions.`,
    image: "/special_tooling.jpeg",
  },
]

export function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.section
        className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-primary/5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
        <div className="container relative mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
              Precision Engineering & Manufacturing Services
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-muted-foreground">
              Specialized CNC machining consultancy, custom machine tool design, and precision manufacturing solutions for industrial applications
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Sections - Alternating Layout */}
      {services.map((service, index) => {
        const isEven = index % 2 === 0

        return (
          <motion.section
            key={index}
            className={`py-12 sm:py-16 md:py-20 ${
              isEven ? "bg-white" : "bg-gradient-to-br from-slate-50 to-white"
            }`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="container mx-auto px-4 sm:px-6">
              <div
                className={`grid gap-8 lg:gap-12 lg:grid-cols-2 items-center ${
                  isEven ? "" : "lg:grid-flow-dense"
                }`}
              >
                {/* Text Content */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className={isEven ? "" : "lg:col-start-2"}
                >
                  <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                    {service.title}
                  </h2>
                  <div className="space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed text-justify">
                    {service.description.split('\n\n').map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))}
                  </div>
                  <div className="mt-8">
                    <Link to="/contact">
                      <Button size="lg" className="gap-2">
                        I am Interested
                        <ArrowRight className="h-5 w-5" />
                      </Button>
                    </Link>
                  </div>
                </motion.div>

                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className={isEven ? "" : "lg:col-start-1 lg:row-start-1"}
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl border-2 border-primary/10">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.section>
        )
      })}

      {/* CTA Section */}
      <motion.section
        className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 py-12 sm:py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Ready to Start Your CNC Machining Project?
            </h3>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Contact our precision engineering team to discuss custom CNC machine solutions, specialized tooling design, and manufacturing consultancy for your industrial applications.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="secondary"
                  className="gap-2"
                >
                  Contact Us
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white px-6 py-3 font-semibold text-white transition-all hover:bg-white hover:text-primary"
              >
                View Our Products
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}
