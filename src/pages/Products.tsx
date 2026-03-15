import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { categories, getProductsBySubcategory, getProductsByCategory } from "@/data/products"
import { moreProducts } from "./MoreProductsPage"
import { ChevronRight } from "lucide-react"

export function Products() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      {/* Hero Section */}
      <motion.section
        className="bg-gradient-to-r from-slate-900 to-slate-700 py-12 sm:py-16 md:py-20"
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
              Our Products
            </h1>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-slate-300 md:text-xl">
              Discover our comprehensive range of precision machining solutions, from facing and centering machines to advanced in-situ machining systems.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Categories Section */}
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="space-y-16">
          {categories.map((category, categoryIndex) => {
            const categoryProducts = getProductsByCategory(category.id)
            const isOtherProducts = category.id === "spms-other"
            const displayProducts = isOtherProducts ? moreProducts : categoryProducts
            const productCount = displayProducts.length

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              >
                <div className="mb-8">
                  <Link
                    to={isOtherProducts ? `/products/more` : `/products/category/${category.id}`}
                    className="group inline-flex items-center gap-2 transition-all"
                  >
                    <h2 className="text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {category.name}
                    </h2>
                    <ChevronRight className="h-6 w-6 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </Link>
                  <p className="mt-2 text-muted-foreground">
                    {productCount} product{productCount !== 1 ? 's' : ''} available
                  </p>
                </div>

                {/* Show subcategories if they exist */}
                {category.subcategories && category.subcategories.length > 0 ? (
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {category.subcategories.map((subcategory) => {
                      const subcategoryProducts = getProductsBySubcategory(
                        category.id,
                        subcategory.id
                      )

                      return (
                        <motion.div
                          key={subcategory.id}
                          whileHover={{ y: -4 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Link to={`/products/category/${category.id}/${subcategory.id}`}>
                            <Card className="h-full transition-all hover:shadow-lg border-2 hover:border-primary/50">
                              <CardHeader>
                                <CardTitle className="text-xl">{subcategory.name}</CardTitle>
                                <CardDescription className="text-sm font-medium text-primary">
                                  {subcategory.series}
                                </CardDescription>
                              </CardHeader>
                              <CardContent>
                                <p className="text-sm text-muted-foreground">
                                  {subcategoryProducts.length} product{subcategoryProducts.length !== 1 ? 's' : ''}
                                </p>
                                <div className="mt-4 flex items-center gap-2 text-sm font-medium text-primary">
                                  View Products
                                  <ChevronRight className="h-4 w-4" />
                                </div>
                              </CardContent>
                            </Card>
                          </Link>
                        </motion.div>
                      )
                    })}
                  </div>
                ) : isOtherProducts ? (
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    {moreProducts.filter(p => !p.hidden).slice(0, 4).map((product, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ y: -4 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Dialog>
                          <DialogTrigger asChild>
                            <Card className="h-full transition-all hover:shadow-lg cursor-pointer">
                              <div className="aspect-square overflow-hidden rounded-t-lg bg-muted flex items-center justify-center">
                                {product.image ? (
                                  <img
                                    src={product.image}
                                    alt={product.name}
                                    className="h-full w-full object-contain"
                                  />
                                ) : (
                                  <div className="text-4xl">🏭</div>
                                )}
                              </div>
                              <CardHeader className="p-4 pb-2">
                                <CardTitle className="text-sm font-semibold">{product.name}</CardTitle>
                                <CardDescription className="line-clamp-2 text-xs">
                                  {product.category}
                                </CardDescription>
                              </CardHeader>
                            </Card>
                          </DialogTrigger>
                          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                            <DialogHeader>
                              <DialogTitle className="text-2xl">{product.name}</DialogTitle>
                              <DialogDescription className="text-base">
                                {product.category}
                              </DialogDescription>
                            </DialogHeader>
                            <div className="mt-4 rounded-lg overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center min-h-[300px]">
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
                ) : (
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    {categoryProducts.slice(0, 4).map((product) => (
                      <motion.div
                        key={product.id}
                        whileHover={{ y: -4 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Link to={`/products/${product.id}`}>
                          <Card className="h-full transition-all hover:shadow-lg">
                            <div className="aspect-square overflow-hidden rounded-t-lg bg-muted">
                              <img
                                src={product.images?.[0]?.url || "/images/placeholder.jpg"}
                                alt={product.images?.[0]?.alt || product.name}
                                className="h-full w-full object-contain transition-transform hover:scale-105"
                              />
                            </div>
                            <CardHeader className="p-4 pb-2">
                              <CardTitle className="text-sm font-semibold">{product.name}</CardTitle>
                              <CardDescription className="line-clamp-2 text-xs">
                                {product.description}
                              </CardDescription>
                            </CardHeader>
                          </Card>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                )}

                {isOtherProducts && moreProducts.length > 4 && (
                  <div className="mt-6 text-center">
                    <Link
                      to="/products/more"
                      className="inline-flex items-center gap-2 text-primary hover:underline"
                    >
                      View all {moreProducts.length} products
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                  </div>
                )}

                {!category.subcategories && !isOtherProducts && categoryProducts.length > 4 && (
                  <div className="mt-6 text-center">
                    <Link
                      to={`/products/category/${category.id}`}
                      className="inline-flex items-center gap-2 text-primary hover:underline"
                    >
                      View all {categoryProducts.length} products
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                  </div>
                )}
              </motion.div>
            )
          })}
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
          <h3 className="text-2xl sm:text-3xl font-bold text-white">Need a Custom Solution?</h3>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-slate-300 px-2">
            Our engineering team can design and build customized machining equipment tailored to your specific requirements.
          </p>
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Link
              to="/products/special-machines"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-white transition-all hover:bg-primary/90"
            >
              Explore Custom Solutions
              <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
            <a
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-white transition-all hover:bg-white hover:text-slate-900"
            >
              Contact Us
            </a>
          </div>
        </div>
      </motion.section>
    </div>
  )
}
