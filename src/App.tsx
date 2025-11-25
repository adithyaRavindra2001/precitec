import { SiteFooter } from "@/components/layout/SiteFooter"
import { SiteHeader } from "@/components/layout/SiteHeader"
import { LandingPage } from "@/pages/LandingPage"
import { MachineDetail } from "@/pages/MachineDetail"
import { Products } from "@/pages/Products"
import { ProductDetailPage } from "@/pages/ProductDetailPage"
import { CategoryPage } from "@/pages/CategoryPage"
import { Outlet, Route, Routes } from "react-router-dom"

function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<LandingPage />} />
        {/* New Products Routes */}
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductDetailPage />} />
        <Route path="/products/category/:categoryId" element={<CategoryPage />} />
        <Route path="/products/category/:categoryId/:subcategoryId" element={<CategoryPage />} />
        {/* Legacy Routes - Keep for backward compatibility */}
        <Route path="/machine/:id" element={<MachineDetail />} />
      </Route>
    </Routes>
  )
}

export default App
