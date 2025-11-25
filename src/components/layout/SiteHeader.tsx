import { useState } from "react"
import { Link } from "react-router-dom"
import { ChevronDown, Wrench, Cog, Zap } from "lucide-react"
import { categories } from "@/data/products"
import { motion, AnimatePresence } from "framer-motion"
import { Logo } from "@/components/ui/Logo"

const navItems = [
  { label: "Home", href: "/" },
  { label: "Company", href: "/#company" },
  { label: "Services", href: "/#services" },
  { label: "Contact", href: "/#contact" },
]

const categoryIcons: Record<string, any> = {
  "facing-centering": Wrench,
  "vertical-turning": Cog,
  "in-situ": Zap,
}

export function SiteHeader() {
  const [isProductsOpen, setIsProductsOpen] = useState(false)
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <Logo />

        <nav className="flex items-center gap-8 text-[15px] font-medium text-muted-foreground">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}

          {/* Products Mega Menu */}
          <div
            className="relative"
            onMouseEnter={() => setIsProductsOpen(true)}
            onMouseLeave={() => {
              setIsProductsOpen(false)
              setHoveredCategory(null)
            }}
          >
            <button
              className="flex items-center gap-1.5 transition-colors hover:text-foreground"
            >
              Products
              <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isProductsOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {isProductsOpen && (
                <>
                  {/* Backdrop overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="fixed inset-0 top-16 bg-black/20 backdrop-blur-sm"
                    style={{ zIndex: 40 }}
                  />

                  {/* Mega Menu */}
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="absolute top-full right-0 mt-4 w-[720px] rounded-2xl border bg-white shadow-2xl overflow-hidden"
                    style={{ zIndex: 50 }}
                  >
                    <div className="grid grid-cols-5 divide-x">
                      {/* Categories Column */}
                      <div className="col-span-2 bg-slate-50/50 p-6">
                        <div className="mb-4">
                          <Link
                            to="/products"
                            className="group mb-6 block"
                          >
                            <div className="flex items-center justify-between rounded-lg bg-gradient-to-r from-primary to-primary/80 p-4 transition-all hover:shadow-lg">
                              <span className="font-semibold text-white">All Products</span>
                              <ChevronDown className="h-5 w-5 -rotate-90 text-white" />
                            </div>
                          </Link>
                        </div>

                        <div className="space-y-1">
                          {categories.map((category) => {
                            const Icon = categoryIcons[category.id] || Wrench
                            const isHovered = hoveredCategory === category.id

                            return (
                              <div
                                key={category.id}
                                onMouseEnter={() => setHoveredCategory(category.id)}
                              >
                                <Link
                                  to={`/products/category/${category.id}`}
                                  className={`group flex items-start gap-3 rounded-lg p-3 transition-all ${
                                    isHovered
                                      ? "bg-white shadow-md"
                                      : "hover:bg-white/60"
                                  }`}
                                >
                                  <div className={`mt-0.5 rounded-lg p-2 transition-colors ${
                                    isHovered
                                      ? "bg-primary/10 text-primary"
                                      : "bg-slate-200/50 text-slate-600 group-hover:bg-primary/10 group-hover:text-primary"
                                  }`}>
                                    <Icon className="h-4 w-4" />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className={`text-sm font-semibold transition-colors ${
                                      isHovered ? "text-primary" : "text-foreground"
                                    }`}>
                                      {category.name}
                                    </div>
                                    {category.subcategories && (
                                      <div className="mt-0.5 text-xs text-muted-foreground">
                                        {category.subcategories.length} series
                                      </div>
                                    )}
                                  </div>
                                  {category.subcategories && category.subcategories.length > 0 && (
                                    <ChevronDown className={`mt-1 h-4 w-4 -rotate-90 transition-colors ${
                                      isHovered ? "text-primary" : "text-slate-400"
                                    }`} />
                                  )}
                                </Link>
                              </div>
                            )
                          })}
                        </div>
                      </div>

                      {/* Subcategories Column */}
                      <div className="col-span-3 p-6">
                        {hoveredCategory ? (
                          <AnimatePresence mode="wait">
                            <motion.div
                              key={hoveredCategory}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              transition={{ duration: 0.15 }}
                            >
                              {(() => {
                                const category = categories.find((c) => c.id === hoveredCategory)
                                if (!category) return null

                                return (
                                  <div>
                                    <h3 className="mb-4 text-lg font-bold text-foreground">
                                      {category.name}
                                    </h3>
                                    {category.subcategories && category.subcategories.length > 0 ? (
                                      <div className="space-y-2">
                                        {category.subcategories.map((subcategory, idx) => (
                                          <motion.div
                                            key={subcategory.id}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.2, delay: idx * 0.05 }}
                                          >
                                            <Link
                                              to={`/products/category/${category.id}/${subcategory.id}`}
                                              className="group block rounded-lg border-2 border-transparent p-3 transition-all hover:border-primary/30 hover:bg-primary/5 hover:shadow-sm"
                                            >
                                              <div className="font-semibold text-foreground group-hover:text-primary transition-colors">
                                                {subcategory.name}
                                              </div>
                                              <div className="mt-1 text-xs text-muted-foreground">
                                                {subcategory.series}
                                              </div>
                                            </Link>
                                          </motion.div>
                                        ))}
                                      </div>
                                    ) : (
                                      <div className="text-sm text-muted-foreground">
                                        View all products in this category
                                      </div>
                                    )}
                                  </div>
                                )
                              })()}
                            </motion.div>
                          </AnimatePresence>
                        ) : (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="flex h-full min-h-[200px] items-center justify-center"
                          >
                            <div className="text-center">
                              <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-slate-100">
                                <Wrench className="h-8 w-8 text-slate-400" />
                              </div>
                              <p className="text-sm text-muted-foreground">
                                Hover over a category to view products
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </div>
                    </div>

                    {/* Bottom Banner */}
                    <div className="border-t bg-gradient-to-r from-slate-50 to-slate-100/50 px-6 py-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs font-semibold text-foreground">
                            Need Custom Solutions?
                          </p>
                          <p className="text-xs text-muted-foreground">
                            Our engineers can design equipment tailored to your needs
                          </p>
                        </div>
                        <Link
                          to="/products/special-machines"
                          className="rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-white transition-all hover:bg-primary/90 hover:shadow-md"
                        >
                          Learn More
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </nav>
      </div>
    </header>
  )
}
