import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { categories, getProductsBySubcategory, getProductsByCategory } from "@/data/products"
import { ChevronRight } from "lucide-react"

export function Products() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      {/* Hero Section */}
      <motion.section
        className="bg-gradient-to-r from-slate-900 to-slate-700 py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Our Products
            </h1>
            <p className="mt-4 text-lg text-slate-300 md:text-xl">
              Discover our comprehensive range of precision machining solutions, from facing and centering machines to advanced in-situ machining systems.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Categories Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="space-y-16">
          {categories.map((category, categoryIndex) => {
            const categoryProducts = getProductsByCategory(category.id)

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
                    to={`/products/category/${category.id}`}
                    className="group inline-flex items-center gap-2 transition-all"
                  >
                    <h2 className="text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {category.name}
                    </h2>
                    <ChevronRight className="h-6 w-6 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </Link>
                  <p className="mt-2 text-muted-foreground">
                    {categoryProducts.length} product{categoryProducts.length !== 1 ? 's' : ''} available
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
                ) : (
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {categoryProducts.slice(0, 4).map((product) => (
                      <motion.div
                        key={product.id}
                        whileHover={{ y: -4 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Link to={`/products/${product.id}`}>
                          <Card className="h-full transition-all hover:shadow-lg">
                            <div className="aspect-video overflow-hidden rounded-t-lg bg-muted">
                              <img
                                src={product.image}
                                alt={product.name}
                                className="h-full w-full object-cover transition-transform hover:scale-105"
                              />
                            </div>
                            <CardHeader>
                              <CardTitle className="text-lg">{product.name}</CardTitle>
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

                {!category.subcategories && categoryProducts.length > 4 && (
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
        className="bg-slate-900 py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-white">Need a Custom Solution?</h3>
          <p className="mt-4 text-lg text-slate-300">
            Our engineering team can design and build customized machining equipment tailored to your specific requirements.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              to="/products/special-machines"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-white transition-all hover:bg-primary/90"
            >
              Explore Custom Solutions
              <ChevronRight className="h-5 w-5" />
            </Link>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-white px-6 py-3 font-semibold text-white transition-all hover:bg-white hover:text-slate-900"
            >
              Contact Us
            </a>
          </div>
        </div>
      </motion.section>
    </div>
  )
}
