import cartImg from "../../assets/cart.png"
import userImg from "../../assets/user.png"
import searchImg from "../../assets/search.png"

function Header() {
  return (
    <div className="w-full h-11 p-10">
      <div className="w-full h-11 flex  justify-between items-center  top-0  border-b-2">
        <div><h1 className=" text-gray-300 text-2xl cursor-pointer hover:font-black hover:text-black">SHOPPE</h1></div>
        <div className="w-1/3 flex justify-between items-center">
          <div className="w-1/2 flex justify-evenly items-center ml-10">
            <p className="mr-7 cursor-pointer">shop</p>
            <p className="mr-7 cursor-pointer">blog</p>
            <p className="mr-7 cursor-pointer">our story</p>
            <p><span className="cursor-none">|</span></p>
          </div>
          <div className="w-1/3 flex justify-start items-center flex-row-reverse">
            <div className="w-10 h-10 flex justify-center items-center ml-5 cursor-pointer"><img src={userImg}></img></div>
            <div className="w-6 h-6 flex justify-center items-center ml-5 cursor-pointer"><img src={cartImg}></img></div>
            <div className="w-10 h-10 flex justify-center items-center ml-5 cursor-pointer"><img src={searchImg}></img></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
