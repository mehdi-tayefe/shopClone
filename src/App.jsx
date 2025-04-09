import { Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import Store from "./pages/store/Store"
import Layout from "./components/layout/Layout"
import Account from "./pages/account/Account"
import { ShopContextProvider } from "./context/shopContext"
import NotFound from "./pages/404/NotFound"
import PrivacyPolicy from "./pages/privacy policy/PrivacyPolicy"
import ContactUs from "./pages/contact us/ContactUs"
import ScrollToTop from "./components/scroll to top/ScrollToTop"
import Product from "./pages/product/Product"
import ShoppingCart from "./pages/shopping cart/ShoppingCart"
import Dashboard from "./pages/account/Dashboard"
import PrivateRoute from "./components/private_route/PrivateRoute"

function App() {

  return (
    <>
      <ShopContextProvider>
        <Layout>
          <ScrollToTop />
          <Routes>
            <Route path="/shopClone/" element={<Home />} />
            <Route path="/shopClone/store" element={<Store />} />
            <Route path="/shopClone/account" element={<Account />} />
            <Route path="/shopClone/*" element={<NotFound />} />
            <Route path="/shopClone/Privacy" element={<PrivacyPolicy />} />
            <Route path="/shopClone/contact" element={<ContactUs />} />
            <Route path="/shopClone/store/:id" element={<Product />} />
            <Route path="/shopClone/shopping" element={<ShoppingCart />} />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
          </Routes>


        </Layout>
      </ShopContextProvider>
    </>
  )
}

export default App
