import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Factory, TrendingUp } from "lucide-react"

const teamMembers = [
  {
    name: "H S Sridhara",
    designation: "Founder",
    image: "/Sridhara.jpg",
  },
  {
    name: "S. Y. Rao",
    designation: "Founder",
    image: null,
  },
  {
    name: "H S Nikhila",
    designation: "Managing Director",
    image: "/Nikhila.jpg",
  },
  {
    name: "H S Ravindra",
    designation: "Executive Director",
    image: "/Ravi.jpg",
  },
  {
    name: "M K Kirshnaswamy",
    designation: "Chief Consultant for Design",
    image: null,
  },
  {
    name: "G Ananda",
    designation: "Directors and Business Advisor",
    image: null,
  },
]

const milestones = [
  {
    year: "1978",
    title: "Company Founded",
    description: "Established by Mr. H. K. Sridhara and Mr. S. Y. Rao from CMTI",
  },
  {
    year: "40+",
    title: "Years of Excellence",
    description: "Over four decades of designing special purpose machine tools",
  },
  {
    year: "50+",
    title: "Team Members",
    description: "Dynamic team of experienced engineers and professionals",
  },
]

const highlights = [
  {
    icon: Factory,
    title: "State-of-the-art Manufacturing",
    description: "Advanced facilities in Bangalore equipped with cutting-edge technology for large-scale production",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Led by experienced engineers with a team of 50+ dedicated professionals",
  },
  {
    icon: TrendingUp,
    title: "Industry Leadership",
    description: "Specialized in CNC machines for Automobile, Mass manufacturing, and Heavy Engineering industries",
  },
  {
    icon: Award,
    title: "ISO Certified",
    description: "ISO 9001:2015 certified ensuring highest quality standards",
  },
]

export function AboutPage() {
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
            className="text-center"
          >
            <div className="mb-8 flex justify-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="rounded-2xl bg-white p-6 shadow-xl border-2 border-primary/10"
              >
                <img
                  src="/MiniPrecitecLogo.svg"
                  alt="Precitec Logo"
                  className="h-20 sm:h-24 md:h-32 w-auto"
                />
              </motion.div>
            </div>
            <h1 className="text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
              About Precitec
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Precision Engineering Excellence Since 1978
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Company Overview */}
      <motion.section
        className="container mx-auto px-4 sm:px-6 py-12 sm:py-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 shadow-xl bg-gradient-to-br from-white to-primary/5">
            <CardContent className="p-6 sm:p-8 md:p-12">
              <div className="space-y-6 text-base sm:text-lg leading-relaxed text-muted-foreground">
                <p>
                  <span className="font-semibold text-foreground">Precitec</span> is a machine tool manufacturing company led by two experienced engineers and powered by a dynamic team of more than 50 members. The company's manufacturing plants, which are located in Bangalore, India, are equipped with state-of-the-art technology to deliver large-scale high quality products.
                </p>
                <p>
                  Precitec was established in 1978 by <span className="font-semibold text-foreground">Mr. H. K. Sridhara</span> and <span className="font-semibold text-foreground">Mr. S. Y. Rao</span> from the founding team at CMTI, who designed and built various special purpose machine tools for over four decades. The company has rich experience in designing and manufacturing machines for both conceptualization and production as well as supporting customers to get optimum output from the machines supplied both within India and abroad.
                </p>
                <p>
                  Currently, Precitec manufactures CNC machines for metal cutting to Automobile, Mass manufacturing, Heavy Engineering industries. Precitec has specialized in design manufacturer of Embedded type of Finning machine which caters to Heat Exchanger manufacturing industries.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.section>

      {/* Milestones */}
      <motion.section
        className="bg-gradient-to-b from-slate-50 to-white py-12 sm:py-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Our Journey</h2>
            <p className="mt-3 text-lg text-muted-foreground">
              Key milestones in our legacy of excellence
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="h-full text-center border-2 hover:border-primary/50 transition-all hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="text-4xl sm:text-5xl font-bold text-primary mb-3">
                    {milestone.year}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {milestone.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
          </div>
        </div>
      </motion.section>

      {/* Highlights */}
      <motion.section
        className="bg-gradient-to-br from-primary/5 via-slate-50 to-white py-12 sm:py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Why Choose Precitec</h2>
            <p className="mt-3 text-lg text-muted-foreground">
              Excellence in precision engineering
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <Card className="h-full border-2 hover:border-primary/50 transition-all hover:shadow-xl">
                    <CardContent className="p-6">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {highlight.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {highlight.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </motion.section>

      {/* Our Team */}
      <motion.section
        className="bg-white py-12 sm:py-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Our Leadership Team</h2>
            <p className="mt-3 text-lg text-muted-foreground">
              Experienced leaders driving innovation and excellence
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <Card className="h-full border-2 hover:border-primary/50 transition-all hover:shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    {member.image ? (
                      <div className="h-20 w-20 sm:h-24 sm:w-24 rounded-full overflow-hidden border-2 border-primary/30 shadow-md">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-primary/10 border-2 border-primary/30">
                        <Users className="h-10 w-10 text-primary" />
                      </div>
                    )}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">
                    {member.name}
                  </h3>
                  <p className="text-sm text-primary font-semibold">
                    {member.designation}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
          </div>
        </div>
      </motion.section>

      {/* Certifications */}
      <motion.section
        className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-primary/80 py-12 sm:py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6 flex justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/20">
                  <Award className="h-10 w-10 text-primary" />
                </div>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Quality Certifications
              </h2>
              <p className="text-lg sm:text-xl text-slate-300 mb-8">
                ISO 9001:2015 Certified Company
              </p>
              <div className="inline-flex items-center gap-3 rounded-xl bg-white/10 backdrop-blur-sm px-6 py-4 border-2 border-white/20">
                <Award className="h-6 w-6 text-primary" />
                <span className="text-white font-semibold">
                  Certified Quality Management System
                </span>
              </div>
              <p className="mt-6 text-slate-400 max-w-2xl mx-auto">
                Our ISO 9001:2015 certification demonstrates our commitment to maintaining the highest standards in design, manufacturing, and customer service.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="container mx-auto px-4 sm:px-6 py-12 sm:py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <Card className="overflow-hidden border-0 bg-gradient-to-r from-primary/10 to-primary/5 shadow-xl">
          <CardContent className="p-8 md:p-12 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Ready to Experience Precision Engineering?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Partner with us for world-class CNC machines and special purpose equipment designed for your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/products"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-white transition-all hover:bg-primary/90 shadow-lg hover:shadow-xl"
              >
                Explore Our Products
              </a>
              <a
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-primary px-6 py-3 font-semibold text-primary transition-all hover:bg-primary hover:text-white"
              >
                Contact Us
              </a>
            </div>
          </CardContent>
        </Card>
      </motion.section>
    </div>
  )
}
