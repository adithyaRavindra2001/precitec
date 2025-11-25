import { motion } from "framer-motion"
import { Link, useParams } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getProductById } from "@/data/products"
import { ArrowLeft, CheckCircle2, Download, Mail, Phone } from "lucide-react"

export function ProductDetailPage() {
  const { productId } = useParams<{ productId: string }>()
  const product = productId ? getProductById(productId) : undefined

  if (!product) {
    return (
      <div className="container mx-auto flex min-h-[60vh] items-center justify-center px-6">
        <div className="text-center">
          <h1 className="mb-6 text-3xl font-bold">Product Not Found</h1>
          <Link
            to="/products"
            className="group inline-flex items-center gap-3 rounded-xl border-2 border-slate-200 bg-white px-6 py-3 font-semibold text-foreground shadow-sm transition-all hover:border-primary hover:bg-primary hover:text-white hover:shadow-lg"
          >
            <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
            <span>Back to Products</span>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      {/* Breadcrumb */}
      <div className="border-b bg-white">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link to="/products" className="hover:text-primary transition-colors">
              Products
            </Link>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <motion.section
        className="container mx-auto px-6 py-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="overflow-hidden rounded-xl bg-muted shadow-xl"
          >
            <img
              src={product.image}
              alt={product.fullName}
              className="h-full w-full object-cover"
            />
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col justify-center"
          >
            <div className="mb-4 inline-flex items-center gap-2">
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                {product.series}
              </span>
            </div>
            <h1 className="text-4xl font-bold text-foreground md:text-5xl">
              {product.name}
            </h1>
            <p className="mt-2 text-xl text-muted-foreground">{product.fullName}</p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" className="gap-2">
                <Mail className="h-5 w-5" />
                Request a Quote
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Download className="h-5 w-5" />
                Download Brochure
              </Button>
            </div>

            <div className="mt-8 flex items-center gap-6 border-t pt-8">
              <div>
                <p className="text-sm text-muted-foreground">Need Help?</p>
                <a
                  href="tel:+918012345678"
                  className="mt-1 flex items-center gap-2 text-primary hover:underline"
                >
                  <Phone className="h-4 w-4" />
                  +91 80 1234 5678
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        className="container mx-auto px-6 py-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">About This Product</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {product.description}
            </p>
          </CardContent>
        </Card>
      </motion.section>

      {/* Features Section */}
      <motion.section
        className="container mx-auto px-6 py-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Key Features</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              {product.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-muted-foreground">{feature}</span>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.section>

      {/* Specifications Section */}
      <motion.section
        className="container mx-auto px-6 py-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Technical Specifications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="px-4 py-3 text-left font-semibold text-foreground">
                      Specification
                    </th>
                    <th className="px-4 py-3 text-left font-semibold text-foreground">
                      Value
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {product.specifications.map((spec, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.2, delay: index * 0.03 }}
                      className="border-b last:border-0 hover:bg-slate-50 transition-colors"
                    >
                      <td className="px-4 py-3 font-medium text-muted-foreground">
                        {spec.label}
                      </td>
                      <td className="px-4 py-3 text-foreground">{spec.value}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="container mx-auto px-6 py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <Card className="bg-gradient-to-r from-slate-900 to-slate-700 text-white">
          <CardContent className="p-8 md:p-12">
            <div className="text-center">
              <h3 className="text-3xl font-bold">Interested in {product.name}?</h3>
              <p className="mt-4 text-lg text-slate-300">
                Contact our sales team for pricing, delivery schedules, and customization options.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button size="lg" className="gap-2 border-2 border-white bg-white/10 text-white backdrop-blur-sm hover:bg-white hover:text-slate-900">
                  <Mail className="h-5 w-5" />
                  Send Inquiry
                </Button>
                <Button size="lg" className="gap-2 border-2 border-white bg-transparent text-white hover:bg-white hover:text-slate-900">
                  <Phone className="h-5 w-5" />
                  Call Sales Team
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.section>

      {/* Back Button */}
      <div className="container mx-auto px-6 pb-16">
        <Link
          to="/products"
          className="group inline-flex items-center gap-3 rounded-xl border-2 border-slate-200 bg-white px-6 py-3 font-semibold text-foreground shadow-sm transition-all hover:border-primary hover:bg-primary hover:text-white hover:shadow-lg"
        >
          <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
          <span>Back to All Products</span>
        </Link>
      </div>
    </div>
  )
}
