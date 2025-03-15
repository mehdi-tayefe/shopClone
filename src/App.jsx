import { Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import Store from "./pages/store/Store"
import Layout from "./components/layout/Layout"
import Account from "./pages/account/Account"
import { ShopContextProvider } from "./context/shopContext"
import NotFound from "./pages/404/NotFound"
import PrivacyPolicy from "./pages/privacy policy/PrivacyPolicy"

function App() {

  return (
    <>
      <ShopContextProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/account" element={<Account />} />
            <Route path="/notfound" element={<NotFound />} />
            <Route path="/Privacy" element={<PrivacyPolicy />} />
          </Routes>
        </Layout>
      </ShopContextProvider>
    </>
  )
}

export default App
