import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link, useParams } from "react-router-dom"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog"
import {
  getCategoryById,
  getSubcategoryById,
  getProductsByCategory,
  getProductsBySubcategory,
  type Subcategory,
  type Product,
} from "@/data/products"
import { ArrowLeft, ChevronRight, Zap, Eye, ArrowUpRight, Play, X } from "lucide-react"

function SubcategoryProductSlider({
  subcategory,
  products,
  categoryId,
}: {
  subcategory: Subcategory
  products: Product[]
  categoryId: string
}) {
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      {/* Subcategory header */}
      <div className="mb-4 flex items-end justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-1">{subcategory.series}</p>
          <h3 className="text-2xl font-bold text-foreground">{subcategory.name}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{products.length} machine{products.length !== 1 ? "s" : ""}</p>
        </div>
        <Link
          to={`/products/category/${categoryId}/${subcategory.id}`}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
        >
          View all <ChevronRight className="h-4 w-4" />
        </Link>
      </div>

      {/* Slider */}
      <div className="relative">
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scroll-smooth pb-3 no-scrollbar"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/products/${product.id}`}
              className="flex-shrink-0 w-56 sm:w-64 rounded-xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-lg hover:border-primary/40 transition-all group/card"
              style={{ scrollSnapAlign: "start" }}
            >
              <div className="aspect-square overflow-hidden bg-slate-50">
                <img
                  src={product.images?.[0]?.url || "/images/placeholder.jpg"}
                  alt={product.images?.[0]?.alt || product.name}
                  className="h-full w-full object-contain transition-transform duration-500 group-hover/card:scale-105"
                />
              </div>
              <div className="p-3">
                <p className="text-sm font-semibold text-foreground leading-snug group-hover/card:text-primary transition-colors line-clamp-2">
                  {product.name}
                </p>
                <p className="mt-1 text-xs text-muted-foreground line-clamp-2">{product.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

function VideoThumbnail({ src }: { src: string }) {
  const ref = useRef<HTMLVideoElement>(null)
  return (
    <video
      ref={ref}
      src={src}
      preload="metadata"
      muted
      playsInline
      onLoadedMetadata={() => {
        if (ref.current) ref.current.currentTime = 1
      }}
      className="w-full h-full object-cover pointer-events-none"
    />
  )
}

export function CategoryPage() {
  const { categoryId, subcategoryId } = useParams<{
    categoryId: string
    subcategoryId?: string
  }>()

  const [expandedProduct, setExpandedProduct] = useState<string | null>(null)
  const [isVideoDialogOpen, setIsVideoDialogOpen] = useState(false)

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
                Discover {products.length} precision-engineered CNC machining solutions designed for industrial manufacturing excellence
              </motion.p>

              {/* Capacity Range Indicator */}
              {subcategoryId && products.length > 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="mt-8 rounded-xl bg-white/10 p-6 backdrop-blur-sm"
                >
                  <p className="text-sm font-semibold text-slate-300 mb-3">Machine Capacity Range</p>
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
                    Complete range from compact precision machines to heavy-duty industrial CNC equipment
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
                <div className="relative">
                  <div className="overflow-hidden rounded-2xl border-2 border-white/20 bg-white shadow-2xl">
                    {/* Video Section for FCM, Vertical Turning, and In-Situ products */}
                    {categoryId === "facing-centering" || categoryId === "vertical-turning" || categoryId === "in-situ" ? (
                      <div
                        className="relative aspect-video overflow-hidden bg-slate-100 cursor-pointer group"
                        onClick={() => setIsVideoDialogOpen(true)}
                      >
                        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40 z-10 flex items-center justify-center transition-all group-hover:bg-black/50">
                          <div className="rounded-full bg-white/90 p-6 transition-transform group-hover:scale-110 group-hover:bg-white shadow-2xl">
                            <Play className="h-12 w-12 text-primary fill-primary" />
                          </div>
                        </div>
                        <div className="absolute top-4 left-4 z-20 bg-black/70 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                          Click to watch video
                        </div>
                        <VideoThumbnail
                          src={
                            categoryId === "facing-centering"
                              ? "https://s3.ap-southeast-1.amazonaws.com/precitec.co.in/videos/PRECITEC_FCM_PRODUCT_VIDEO.mp4"
                              : categoryId === "vertical-turning"
                                ? "https://s3.ap-southeast-1.amazonaws.com/precitec.co.in/videos/PRECITEC_SADAA+CHAKRA_PRODUCT_VIDEO.mp4"
                                : "https://s3.ap-southeast-1.amazonaws.com/precitec.co.in/videos/PRECITEC_INSITU_PRODUCT_VIDEO.mp4"
                          }
                        />
                      </div>
                    ) : (
                      <Link to={`/products/${featuredProduct.id}`} className="group block">
                        <div className="aspect-square overflow-hidden bg-slate-100">
                          <img
                            src={featuredProduct.images?.[0]?.url || "/images/placeholder.jpg"}
                            alt={featuredProduct.images?.[0]?.alt || featuredProduct.name}
                            className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                      </Link>
                    )}
                    <div className="p-6">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-xl font-bold text-foreground">
                            {categoryId === "facing-centering"
                              ? "Facing and Centering Machines"
                              : categoryId === "vertical-turning"
                                ? "Vertical Turning and Turn Mill Solutions"
                                : categoryId === "in-situ"
                                  ? "In-Situ Machining Solutions"
                                  : featuredProduct.name}
                          </h3>
                          <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                            {categoryId === "facing-centering"
                              ? "Watch our product demonstration video showcasing the precision and capabilities of our FCM series."
                              : categoryId === "vertical-turning"
                                ? "Watch our Sadaa Chakra product demonstration video showcasing the precision and capabilities of our VTL series."
                                : categoryId === "in-situ"
                                  ? "Watch our In-Situ machining solutions video showcasing portable and on-site machining capabilities."
                                  : featuredProduct.description}
                          </p>
                        </div>
                        {categoryId !== "facing-centering" && categoryId !== "vertical-turning" && categoryId !== "in-situ" && (
                          <ArrowUpRight className="h-5 w-5 text-primary" />
                        )}
                      </div>
                      {categoryId !== "in-situ" && (
                        <div className="mt-4 flex items-center gap-2">
                          <span className="text-xs font-semibold text-primary">Featured Product</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </motion.section>

      {/* Show subcategory product sliders if we're on a category page without subcategory */}
      {!subcategoryId && category.subcategories && category.subcategories.length > 0 && (
        <section className="container mx-auto px-6 py-16">
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-foreground">Browse by Series</h2>
            <p className="mt-2 text-muted-foreground">
              Explore our specialized machining series — click any machine to view full specifications
            </p>
          </div>
          {category.subcategories.map((sub) => {
            const subProducts = getProductsBySubcategory(categoryId!, sub.id)
            return (
              <SubcategoryProductSlider
                key={sub.id}
                subcategory={sub}
                products={subProducts}
                categoryId={categoryId!}
              />
            )
          })}
        </section>
      )}

      {/* Products Grid with Expandable Cards */}
      {(!category.subcategories || category.subcategories.length === 0 || subcategoryId) && <motion.section
        className="container mx-auto px-6 py-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-foreground">
              {subcategoryId ? "Complete Machine Portfolio" : "Precision CNC Machine Range"}
            </h2>
            <p className="mt-2 text-muted-foreground">
              Click any CNC machine to view detailed technical specifications and capabilities
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
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-start">
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
                      <div className="relative aspect-square overflow-hidden bg-muted">
                        <img
                          src={product.images?.[0]?.url || "/images/placeholder.jpg"}
                          alt={product.images?.[0]?.alt || product.name}
                          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          <span className="text-sm font-semibold text-white">View Details</span>
                          <Eye className="h-5 w-5 text-white" />
                        </div>
                      </div>
                    </Link>

                    <CardHeader className="flex-shrink-0 p-4 pb-2">
                      <CardTitle className="text-sm font-semibold group-hover:text-primary transition-colors leading-snug">
                        {product.name}
                      </CardTitle>
                      <CardDescription className="line-clamp-2 text-xs">
                        {product.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="flex-grow p-4 pt-0">
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
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="mt-4 space-y-2 rounded-lg bg-slate-50 p-4">
                              {Array.isArray(product.specifications) ? (
                                // Old format: array of label/value pairs
                                product.specifications.slice(0, 4).map((spec: any, idx: number) => (
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
                                ))
                              ) : (
                                // New format: nested object with category keys
                                Object.entries(product.specifications)
                                  .slice(0, 1)
                                  .map(([, specs]) => {
                                    const firstSpecs = Array.isArray(specs) ? specs.slice(0, 4) : []
                                    return firstSpecs.map((spec: any, idx: number) => {
                                      const columnHeaders = Object.keys(spec).filter(
                                        (key) => key !== "parameter" && key !== "description"
                                      )
                                      const firstColumn = columnHeaders[0]
                                      return (
                                        <div
                                          key={idx}
                                          className="flex items-start justify-between gap-2 text-xs"
                                        >
                                          <span className="font-medium text-muted-foreground">
                                            {spec.parameter}
                                          </span>
                                          <span className="text-right font-semibold text-foreground">
                                            {firstColumn && spec[firstColumn]
                                              ? spec[firstColumn].length > 30
                                                ? spec[firstColumn].substring(0, 30) + "..."
                                                : spec[firstColumn]
                                              : "-"}
                                          </span>
                                        </div>
                                      )
                                    })
                                  })
                              )}
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
      </motion.section>}

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
                <h3 className="text-3xl font-bold">Need Custom CNC Machining Solutions?</h3>
                <p className="mt-4 text-lg text-slate-300">
                  Our precision engineering team specializes in designing and manufacturing custom CNC machines, special purpose machining equipment, and tailored industrial automation solutions to meet your exact manufacturing specifications.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link to="/contact">
                    <Button size="lg" variant="secondary" className="gap-2">
                      Request Custom Quote
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button
                      size="lg"
                      variant="outline"
                      className="gap-2 border-white bg-transparent text-white hover:bg-white hover:text-slate-900 hover:border-white"
                    >
                      Contact Engineering Team
                    </Button>
                  </Link>
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
                        <p className="font-semibold">Rapid Custom Design</p>
                        <p className="text-sm text-slate-400">Custom CNC machine engineering in weeks, not months</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20">
                        <Zap className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold">47+ Years Precision Engineering</p>
                        <p className="text-sm text-slate-400">Veteran CNC machine tool manufacturing expertise</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20">
                        <Zap className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold">Global Installation Support</p>
                        <p className="text-sm text-slate-400">Complete installation, commissioning & operator training services</p>
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

      {/* Video Dialog */}
      <Dialog open={isVideoDialogOpen} onOpenChange={setIsVideoDialogOpen}>
        <DialogContent className="max-w-5xl w-full p-0 overflow-hidden bg-black border-0">
          <DialogClose className="absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-all hover:bg-white/40 focus:outline-none focus:ring-2 focus:ring-white">
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </DialogClose>
          <video
            src={
              categoryId === "facing-centering"
                ? "https://s3.ap-southeast-1.amazonaws.com/precitec.co.in/videos/PRECITEC_FCM_PRODUCT_VIDEO.mp4"
                : categoryId === "vertical-turning"
                  ? "https://s3.ap-southeast-1.amazonaws.com/precitec.co.in/videos/PRECITEC_SADAA+CHAKRA_PRODUCT_VIDEO.mp4"
                  : "https://s3.ap-southeast-1.amazonaws.com/precitec.co.in/videos/PRECITEC_INSITU_PRODUCT_VIDEO.mp4"
            }
            controls
            autoPlay
            className="w-full aspect-video"
          />
        </DialogContent>
      </Dialog>
    </div>
  )
}
