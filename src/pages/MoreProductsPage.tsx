import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

const moreProducts = [
  // Milling and Boring Machines Solutions
  { name: "Shilpi FHMB Horizontal Milling and Boring Machines MH Series", category: "Milling and Boring Machines", image: "/Shilpi/SHILPI-FHMB-MH-SERIES.png" },
  { name: "Shilpi Horizontal Boring Machines (HBM)", category: "Milling and Boring Machines", image: "/Shilpi/SHILPI FHMB HORIZONTAL MILLING AND BORING MACHINES MH SERIES.png" },
  { name: "Shilpi FHBM", category: "Milling and Boring Machines", image: "/Shilpi/Shilpi-FHBM.jpg" },
  { name: "Shilpi GM", category: "Milling and Boring Machines", image: "/Shilpi/Shilpi-Gantry-Milling-GM.png" },
  { name: "Shilpi VMC OF", category: "Milling and Boring Machines", image: "/Shilpi/Shilpi VMC OF.png" },

  // Milling Machines
  { name: "Edge Master", category: "Milling Machines", image: "/others/Edge Master.png" },
  { name: "PEM", category: "Milling Machines", image: "/others/PEM.png" },

  // Horizontal Turning and TurnMill Solutions
  { name: "SriChakra 350", category: "Horizontal Turning and TurnMill Solutions", image: "/others/srichakra 350.jpg" },
  { name: "SriChakra HDT", category: "Horizontal Turning and TurnMill Solutions", image: "/others/SriChakra-HDT.png" },
  { name: "SriChakra Large Lathes", category: "Horizontal Turning and TurnMill Solutions", image: "/others/SRI-CHAKRA-LARGE-LATHE.JPG" },
  { name: "Floor Lathes", category: "Horizontal Turning and TurnMill Solutions", image: "/others/floor-lathe.jpg" },

  // Special Machines
  { name: "Finning Machines", category: "Special Machines", image: "/others/finning-machine.png" },
  { name: "Riser Cutting Machines", category: "Special Machines", image: "/others/riser-cutting.jpg" },
  { name: "Tube Coiling Machines", category: "Special Machines", image: "/others/Tube-Coiling-Machine.jpg" },
  { name: "SPM's", category: "Special Machines" },
  { name: "Machining Composites", category: "Special Machines", image: "/others/Composite-Machine.png" },
  { name: "Automobile Assembly Machines", category: "Special Machines" },

  // Attachments and Accessories
  { name: "PAMH 40/50/60: Right Angle Milling Attachments", category: "Attachments and Accessories", image: "/others/PAMH-60.jpg" },
  { name: "PUMH_A-NC A Axis CNC Milling Attachment", category: "Attachments and Accessories", image: "/others/PUMH-A-NC-CNC-Milling-Attachment.jpg" },
  { name: "PUMH: Universal Milling Attachments", category: "Attachments and Accessories", image: "/others/PUMH_U45.png" },
  { name: "PUAMBH: Universal Milling and Boring Head", category: "Attachments and Accessories", image: "/others/PUAMBH.png" },
  { name: "B250 Facing Attachment", category: "Attachments and Accessories" },
  { name: "B1500 Facing Attachment", category: "Attachments and Accessories", image: "/others/B1500-Facing-Attachment.jpg" },
  { name: "RAMH 50 Ram Head", category: "Attachments and Accessories", image: "/others/RAMH-50-Ram-Head.jpg" },
  { name: "RUMH 50 Plano Milling Head", category: "Attachments and Accessories", image: "/others/RUMH-50-Plano-Milling-Head.png" },
  { name: "UMS Series Spindle Units", category: "Attachments and Accessories", image: "/others/UMS 250.png" },
  { name: "Cartridge Type Spindle Units", category: "Attachments and Accessories", image: "/others/Cartridge-Type-Spindle-Units.png" },
  { name: "US Series Slides", category: "Attachments and Accessories", image: "/others/US-Series-Slides.png" },
]

export function MoreProductsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      {/* Hero Section */}
      <motion.section
        className="relative bg-gradient-to-r from-slate-900 to-slate-700 py-12 sm:py-16 md:py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl"
          >
            <h1 className="text-3xl sm:text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Other Machines, SPM's and Accessories by Precitec
            </h1>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-slate-300 md:text-xl">
              Explore our expanding portfolio of precision machining solutions, special purpose machines, and accessories.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Products Grid */}
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-50 border-2 border-yellow-200 rounded-lg">
            <span className="text-2xl">🚀</span>
            <p className="text-sm sm:text-base font-semibold text-yellow-800">
              Web page coming soon
            </p>
          </div>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {moreProducts.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.03 }}
              whileHover={{ y: -4 }}
            >
              <Dialog>
                <DialogTrigger asChild>
                  <Card className="h-full transition-all hover:shadow-lg border-2 hover:border-primary/50 relative overflow-hidden cursor-pointer">
                    {/* Product Image */}
                    <div className="aspect-video overflow-hidden rounded-t-lg bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                      {product.image ? (
                        <img
                          src={product.image}
                          alt={product.name}
                          className="h-full w-full object-contain"
                        />
                      ) : (
                        <div className="text-center p-4">
                          <div className="text-5xl mb-2">🏭</div>
                          <p className="text-xs text-muted-foreground font-medium">Product Image</p>
                        </div>
                      )}
                    </div>

                    <CardHeader className="pb-3">
                      <CardTitle className="text-base sm:text-lg leading-tight">
                        {product.name}
                      </CardTitle>
                      <CardDescription className="text-xs sm:text-sm">
                        {product.category}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="pt-0">
                      <p className="text-xs text-muted-foreground">
                        Click for more details
                      </p>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl">{product.name}</DialogTitle>
                    <DialogDescription className="text-base">
                      {product.category}
                    </DialogDescription>
                  </DialogHeader>

                  {/* Enlarged Product Image */}
                  <div className="mt-4 rounded-lg overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center min-h-[400px]">
                    {product.image ? (
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <div className="text-center p-8">
                        <div className="text-8xl mb-4">🏭</div>
                        <p className="text-lg text-muted-foreground font-medium">Product Image</p>
                      </div>
                    )}
                  </div>

                  {/* Coming Soon Section */}
                  <div className="mt-6 p-6 bg-yellow-50 border-2 border-yellow-200 rounded-lg text-center">
                    <h3 className="text-xl font-semibold text-yellow-900 mb-2">
                      Web page coming soon
                    </h3>
                    <p className="text-yellow-800 mb-4">
                      For more details contact us
                    </p>
                    <Link to="/contact">
                      <Button className="bg-primary hover:bg-primary/90">
                        Contact Us
                      </Button>
                    </Link>
                  </div>
                </DialogContent>
              </Dialog>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        className="bg-slate-900 py-12 sm:py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-white">Interested in These Products?</h3>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
            Get in touch with our team to learn more about these upcoming products and how they can enhance your manufacturing capabilities.
          </p>
          <div className="mt-6 sm:mt-8">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm sm:text-base font-semibold text-white transition-all hover:bg-primary/90 hover:shadow-lg"
            >
              Contact Us for Details
            </a>
          </div>
        </div>
      </motion.section>
    </div>
  )
}
