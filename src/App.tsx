import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SocialFloat } from "@/components/layout/SocialFloat";
import { LandingPage } from "@/pages/LandingPage";
import { Products } from "@/pages/Products";
import { ProductDetailPage } from "@/pages/ProductDetailPage";
import { CategoryPage } from "@/pages/CategoryPage";
import { AboutPage } from "@/pages/AboutPage";
import { ServicesPage } from "@/pages/ServicesPage";
import { ContactPage } from "@/pages/ContactPage";
import { MoreProductsPage } from "@/pages/MoreProductsPage";
import { Outlet, Route, Routes } from "react-router-dom";

function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
      <SocialFloat />
    </div>
  );
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* New Products Routes */}
          <Route path="/products" element={<Products />} />
          <Route path="/products/more" element={<MoreProductsPage />} />
          <Route path="/products/:productId" element={<ProductDetailPage />} />
          <Route
            path="/products/category/:categoryId"
            element={<CategoryPage />}
          />
          <Route
            path="/products/category/:categoryId/:subcategoryId"
            element={<CategoryPage />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
