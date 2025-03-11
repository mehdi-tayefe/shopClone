import { useShopContext } from "../../context/shopContext"


function Login() {



    const { handleLoginButton} = useShopContext()
    return (
      <div className="w-full h-full p-10 flex justify-center items-center">
        <div className="w-125 h-150 flex flex-col justify-start items-center ">
          <div className="w-full h-10 flex justify-center items-center">
              <h2 className="font-light text-xl">My Account</h2>
          </div>
          <div className="w-full  h-15 mt-10 bg-gray-200 flex justify-start items-center p-1 rounded-xl">
              <button className="w-1/2 h-full rounded-2xl cursor-pointer" onClick={handleLoginButton}>sign in</button>
              <button className="w-1/2 h-full  bg-white rounded-2xl cursor-pointer">login</button>
          </div>
          <div className="w-full h-11 p-1 mt-15 ">
            <input placeholder="username" className="w-full h-full outline-none border-b-2 border-b-gray-200 focus:border-black "></input>
          </div>
          <div className="w-full h-11 p-1 mt-5">
            <input placeholder="password" className="w-full h-full outline-none border-b-2 border-b-gray-200 focus:border-black "></input>
          </div>
          <div className="w-full h-6 mt-3 flex justify-start items-center">
            <input type="checkbox"></input>
            <span className="ml-3 text-black text-xs">Remember Me</span>
          </div>
          <div className="w-full h-13 mt-15">
            <button className="w-full h-full bg-black text-center rounded-2xl text-white cursor-pointer">Login</button>
          </div>
          <div className="w-full h-max mt-3 flex justify-center items-center">
            <a className="text-xs cursor-pointer">No account yet? Create one now!</a>
          </div>
        </div>
      </div>
    )
  }
  
  export default Login
  