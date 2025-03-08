import { Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import Store from "./pages/store/Store"
import Layout from "./components/layout/Layout"
import Account from "./pages/account/Account"

function App() {

  return (
    <>

        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/account" element={<Account />} />

          </Routes>
        </Layout>

    </>
  )
}

export default App
