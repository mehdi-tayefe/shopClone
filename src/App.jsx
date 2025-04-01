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
import AccountDetail from "./pages/account/AccountDetail"

function App() {

  return (
    <>
      <ShopContextProvider>
        <Layout>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/account" element={<Account />} />
            <Route path="/*" element={<NotFound />} />
            <Route path="/Privacy" element={<PrivacyPolicy />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/store/:id" element={<Product />} />
            <Route path="/shopping" element={<ShoppingCart />} />
            <Route path="/dashboard" element={<AccountDetail />} />
          </Routes>
        </Layout>
      </ShopContextProvider>
    </>
  )
}

export default App
