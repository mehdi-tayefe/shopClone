import pointerImg from "../../assets/pointer.png"
import facebookImg from "../../assets/facebook.png"
import linkdinImg from "../../assets/linkdin.png"
import instagramImg from "../../assets/instagram.png"
import xImg from '../../assets/x.png'

function Footer() {
  return (
    <div className="w-full h-15 px-10 bottom-20 ">
      <div className="w-full h-15 px-10  border-t-2  ">
        <div className="w-full h-max flex justify-between items-center mb-5">
          <div className="w-max flex justify-start items-center">
            <p className="cursor-pointer mr-7">CONTACT</p>
            <p className="cursor-pointer mr-7">TERMS OF SERVICES</p>
            <p className="cursor-pointer mr-7">SHIPPING AND RETURNS</p>
          </div>
          <div className="w-max h-11 flex justify-between items-center border-b-2 mb-5">
            <p className="cursor-pointer mr-11">Give an email, get the newsletter.</p>
            <img src={pointerImg}></img>
          </div>
        </div>
        <div className="w-full flex justify-between items-center">
          <p>© 2021 Shelly. Terms of use and privacy policy.</p>
          <div className="w-max flex justify-start items-center">
            <img className="mr-7 cursor-pointer" src={linkdinImg}></img>
            <img className="mr-7 cursor-pointer" src={facebookImg}></img>
            <img className="mr-7 cursor-pointer" src={instagramImg}></img>
            <img className="mr-7 cursor-pointer" src={xImg}></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
