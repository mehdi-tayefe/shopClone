import pointerImg from "../../assets/pointer.png"
import facebookImg from "../../assets/facebook.png"
import linkdinImg from "../../assets/linkdin.png"
import instagramImg from "../../assets/instagram.png"
import xImg from '../../assets/x.png'
import { Link } from "react-router-dom"
 // hello
function Footer() {
  return (
    <div className="w-full h-40 px-10 flex flex-col justify-start items-start border-t-2 border-gray-200">
      <div className="w-full h-max flex justify-between items-center mb-5">
        <div className="w-max h-full flex justify-start items-center">
          <Link to={"/contact"} className="cursor-pointer mr-7">CONTACT us</Link>
          <Link to={"/Privacy"} className="cursor-pointer mr-7">TERMS OF SERVICES</Link>
          <p className="cursor-pointer mr-7">SHIPPING AND RETURNS</p>
        </div>
        <div className="w-max h-11 flex justify-between items-center border-b-2 mb-5">
          <p className="cursor-pointer mr-11">Give an email, get the newsletter.</p>
          <img src={pointerImg}></img>
        </div>
      </div>
      <div className="w-full h-max flex justify-between items-center mb-5">
        <p>© 2021 Shelly. Terms of use and privacy policy.</p>
        <div className="w-max flex justify-start items-center">
          <img className="mr-7 cursor-pointer" src={linkdinImg} />
          <img className="mr-7 cursor-pointer" src={facebookImg} />
          <img className="mr-7 cursor-pointer" src={instagramImg} />
          <img className="mr-7 cursor-pointer" src={xImg} />
        </div>
      </div>
    </div>
  )
}

export default Footer
