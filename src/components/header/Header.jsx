import cartImg from "../../assets/cart.png"
import userImg from "../../assets/user.png"
import searchImg from "../../assets/search.png"
import { Link } from "react-router-dom"

function Header() {
  return (
    <div className="w-full h-11 p-10">
      <div className="w-full h-11 flex  justify-between items-center  top-0  border-b-2 border-gray-200">
        <div><Link to={"/"} className=" text-gray-300 text-2xl cursor-pointer hover:font-black hover:text-black">SHOPE</Link></div>
        <div className="w-1/3 flex justify-between items-center">
          <div className="w-1/2 flex justify-evenly items-center ml-10">
            <Link  to={"/store"} className="mr-7 cursor-pointer">shop</Link>
            <Link className="mr-7 cursor-pointer">blog</Link>
            <Link className="mr-7 cursor-pointer">our story</Link>
            <Link><span className="cursor-none">|</span></Link>
          </div>
          <div className="w-1/3 flex justify-start items-center flex-row-reverse">
            <div className="w-10 h-10 flex justify-center items-center ml-5 cursor-pointer"><img src={userImg}></img></div>
            <Link to={"/shopping"} className="w-6 h-6 flex justify-center items-center ml-5 cursor-pointer"><img src={cartImg}></img></Link>
            <div className="w-10 h-10 flex justify-center items-center ml-5 cursor-pointer"><img src={searchImg}></img></div>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Header
