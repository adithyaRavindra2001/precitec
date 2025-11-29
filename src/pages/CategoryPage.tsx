import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link, useParams } from "react-router-dom"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  getCategoryById,
  getSubcategoryById,
  getProductsByCategory,
  getProductsBySubcategory,
} from "@/data/products"
import { ArrowLeft, ChevronRight, Zap, Eye, ArrowUpRight } from "lucide-react"

export function CategoryPage() {
  const { categoryId, subcategoryId } = useParams<{
    categoryId: string
    subcategoryId?: string
  }>()

  const [expandedProduct, setExpandedProduct] = useState<string | null>(null)

  const category = categoryId ? getCategoryById(categoryId) : undefined
  const subcategory =
    categoryId && subcategoryId
      ? getSubcategoryById(categoryId, subcategoryId)
      : undefined

  const products =
    categoryId && subcategoryId
      ? getProductsBySubcategory(categoryId, subcategoryId)
      : categoryId
        ? getProductsByCategory(categoryId)
        : []

  if (!category) {
    return (
      <div className="container mx-auto flex min-h-[60vh] items-center justify-center px-6">
        <div className="text-center">
          <h1 className="mb-6 text-3xl font-bold">Category Not Found</h1>
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

  const pageTitle = subcategory ? subcategory.name : category.name
  const pageSeries = subcategory ? subcategory.series : undefined
  const featuredProduct = products[0] // First product as featured

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white">
      {/* Breadcrumb */}
      <div className="border-b bg-white">
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-muted-foreground overflow-x-auto">
            <Link to="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/products" className="hover:text-primary transition-colors">
              Products
            </Link>
            <ChevronRight className="h-3 w-3" />
            <Link
              to={`/products/category/${categoryId}`}
              className="hover:text-primary transition-colors"
            >
              {category.name}
            </Link>
            {subcategory && (
              <>
                <ChevronRight className="h-3 w-3" />
                <span className="text-foreground font-medium">{subcategory.name}</span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <motion.section
        className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="container relative mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center"
          >
            <div>
              {pageSeries && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="mb-4"
                >
                  <span className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur-sm">
                    <Zap className="h-4 w-4" />
                    {pageSeries}
                  </span>
                </motion.div>
              )}
              <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-4xl font-bold text-white md:text-5xl lg:text-6xl"
              >
                {pageTitle}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-4 text-lg text-slate-300"
              >
                Explore our range of {products.length} precision-engineered products
              </motion.p>

              {/* Capacity Range Indicator */}
              {subcategoryId && products.length > 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="mt-8 rounded-xl bg-white/10 p-6 backdrop-blur-sm"
                >
                  <p className="text-sm font-semibold text-slate-300 mb-3">Capacity Range</p>
                  <div className="flex items-center gap-3">
                    <div className="text-2xl font-bold text-white">{products[0].name.split(' ')[1]}</div>
                    <div className="h-1 flex-1 rounded-full bg-white/20">
                      <div className="h-full w-full rounded-full bg-gradient-to-r from-primary to-primary/60" />
                    </div>
                    <div className="text-2xl font-bold text-white">
                      {products[products.length - 1].name.split(' ')[1]}
                    </div>
                  </div>
                  <p className="mt-2 text-xs text-slate-400">
                    From compact to heavy-duty solutions
                  </p>
                </motion.div>
              )}
            </div>

            {/* Featured Product Preview */}
            {featuredProduct && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative"
              >
                <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-primary/20 to-purple-600/20 blur-2xl" />
                <Link
                  to={`/products/${featuredProduct.id}`}
                  className="group relative block"
                >
                  <div className="overflow-hidden rounded-2xl border-2 border-white/20 bg-white shadow-2xl transition-transform duration-300 group-hover:scale-[1.02]">
                    <div className="aspect-video overflow-hidden bg-slate-100">
                      <img
                        src={featuredProduct.images?.[0]?.url || "/images/placeholder.jpg"}
                        alt={featuredProduct.images?.[0]?.alt || featuredProduct.name}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-xl font-bold text-foreground">
                            {featuredProduct.name}
                          </h3>
                          <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                            {featuredProduct.description}
                          </p>
                        </div>
                        <ArrowUpRight className="h-5 w-5 text-primary transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </div>
                      <div className="mt-4 flex items-center gap-2">
                        <span className="text-xs font-semibold text-primary">Featured Product</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )}
          </motion.div>
        </div>
      </motion.section>

      {/* Show subcategories if we're on a category page without subcategory */}
      {!subcategoryId && category.subcategories && category.subcategories.length > 0 && (
        <motion.section
          className="container mx-auto px-6 py-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-foreground">Browse by Series</h2>
            <p className="mt-2 text-muted-foreground">
              Explore our specialized product series in this category
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {category.subcategories.map((sub, index) => {
              const subProducts = getProductsBySubcategory(categoryId!, sub.id)
              return (
                <motion.div
                  key={sub.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <Link to={`/products/category/${categoryId}/${sub.id}`}>
                    <Card className="group h-full overflow-hidden transition-all hover:shadow-2xl border-2 hover:border-primary/50">
                      <CardHeader className="bg-gradient-to-br from-slate-50 to-white">
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                          {sub.name}
                        </CardTitle>
                        <CardDescription className="text-sm font-medium text-primary">
                          {sub.series}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pt-6">
                        <p className="text-sm text-muted-foreground">
                          {subProducts.length} product{subProducts.length !== 1 ? "s" : ""}
                        </p>
                        <div className="mt-4 flex items-center gap-2 text-sm font-medium text-primary">
                          View Products
                          <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </motion.section>
      )}

      {/* Products Grid with Expandable Cards */}
      <motion.section
        className="container mx-auto px-6 py-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-foreground">
              {subcategoryId ? "All Products" : "Product Range"}
            </h2>
            <p className="mt-2 text-muted-foreground">
              Click any product to view detailed specifications
            </p>
          </div>
        </div>

        {products.length === 0 ? (
          <Card className="p-12 text-center">
            <p className="text-lg text-muted-foreground">
              No products found in this category.
            </p>
          </Card>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start">
            {products.map((product, index) => {
              const isExpanded = expandedProduct === product.id
              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="h-full"
                >
                  <Card className="group flex flex-col overflow-hidden transition-all hover:shadow-xl">
                    <Link to={`/products/${product.id}`}>
                      <div className="relative aspect-video overflow-hidden bg-muted">
                        <img
                          src={product.images?.[0]?.url || "/images/placeholder.jpg"}
                          alt={product.images?.[0]?.alt || product.name}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          <span className="text-sm font-semibold text-white">View Details</span>
                          <Eye className="h-5 w-5 text-white" />
                        </div>
                      </div>
                    </Link>

                    <CardHeader className="flex-shrink-0">
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        {product.name}
                      </CardTitle>
                      <CardDescription className="line-clamp-2 text-xs">
                        {product.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="flex-grow">
                      <button
                        onClick={() => setExpandedProduct(isExpanded ? null : product.id)}
                        className="w-full text-left"
                      >
                        <div className="flex items-center justify-between rounded-lg border-2 border-slate-200 p-3 transition-all hover:border-primary hover:bg-primary/5">
                          <span className="text-sm font-medium text-foreground">
                            {isExpanded ? "Hide" : "Quick"} Specs
                          </span>
                          <ChevronRight
                            className={`h-4 w-4 text-primary transition-transform ${
                              isExpanded ? "rotate-90" : ""
                            }`}
                          />
                        </div>
                      </button>

                      <AnimatePresence>
                        {isExpanded && Array.isArray(product.specifications) && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="mt-4 space-y-2 rounded-lg bg-slate-50 p-4">
                              {product.specifications.slice(0, 4).map((spec: any, idx: number) => (
                                <div
                                  key={idx}
                                  className="flex items-start justify-between gap-2 text-xs"
                                >
                                  <span className="font-medium text-muted-foreground">
                                    {spec.label}
                                  </span>
                                  <span className="text-right font-semibold text-foreground">
                                    {spec.value.length > 30
                                      ? spec.value.substring(0, 30) + "..."
                                      : spec.value}
                                  </span>
                                </div>
                              ))}
                              <Link
                                to={`/products/${product.id}`}
                                className="mt-3 block text-center text-xs font-semibold text-primary hover:underline"
                              >
                                View Full Specifications →
                              </Link>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        )}
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="container mx-auto px-6 py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <Card className="overflow-hidden border-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white shadow-2xl">
          <CardContent className="p-8 md:p-12">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold">Can't Find What You Need?</h3>
                <p className="mt-4 text-lg text-slate-300">
                  Our engineering team specializes in custom solutions. We'll design and build equipment tailored to your exact specifications.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button size="lg" variant="secondary" className="gap-2">
                    Request Custom Quote
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="gap-2 border-white bg-transparent text-white hover:bg-white hover:text-slate-900 hover:border-white"
                  >
                    Contact Engineering Team
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-primary/20 to-purple-600/20 blur-2xl" />
                <div className="relative rounded-xl bg-white/10 p-8 backdrop-blur-sm">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20">
                        <Zap className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold">Fast Turnaround</p>
                        <p className="text-sm text-slate-400">Custom designs in weeks, not months</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20">
                        <Zap className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold">Expert Engineering</p>
                        <p className="text-sm text-slate-400">40+ years of machining expertise</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20">
                        <Zap className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold">Worldwide Support</p>
                        <p className="text-sm text-slate-400">Installation & training included</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.section>

      {/* Back Button */}
      <div className="container mx-auto px-6 pb-16">
        <Link
          to={subcategoryId ? `/products/category/${categoryId}` : "/products"}
          className="group inline-flex items-center gap-3 rounded-xl border-2 border-slate-200 bg-white px-6 py-3 font-semibold text-foreground shadow-sm transition-all hover:border-primary hover:bg-primary hover:text-white hover:shadow-lg"
        >
          <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
          <span>{subcategoryId ? `Back to ${category.name}` : "Back to All Products"}</span>
        </Link>
      </div>
    </div>
  )
}
