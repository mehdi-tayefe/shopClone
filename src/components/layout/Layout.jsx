import PropTypes from "prop-types";
import Footer from "../footer/Footer"
import Header from "../header/Header"


function Layout({children}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
  
    </>
  )
}
Layout.propTypes = {
    children: PropTypes.node.isRequired, 
  };

export default Layout
