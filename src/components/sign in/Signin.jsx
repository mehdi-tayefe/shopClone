import { useState } from "react"
import { useShopContext } from "../../context/shopContext"
import { createNewUser } from "../../services/api"


function Signin() {

    const [userName , setUserName] = useState("")
    const [password , setPassword] = useState("")
    const [error , setError] = useState("")

    async function handleSignin(){
      try{
        const data = await createNewUser(userName , password)
        console.log(data);
        setError(null) 
      } 
      // eslint-disable-next-line no-unused-vars
      catch(err){
        setError("signin failed. Please check your credentials.");
      }
    }

    const {handleSigninButton} =useShopContext() 
    return (
      <div className="w-full h-full p-10 flex justify-center items-center">
        <div className="w-125 h-150 flex flex-col justify-start items-center ">
          <div className="w-full h-10 flex justify-center items-center">
              <h2 className="font-light text-xl">My Account</h2>
          </div>
          <div className="w-full  h-15 mt-10 bg-gray-200 flex justify-start items-center p-1 rounded-xl">
              <button className="w-1/2 h-full bg-white rounded-2xl cursor-pointer">sign in</button>
              <button className="w-1/2 h-full rounded-2xl cursor-pointer" onClick={handleSigninButton}>login</button>
          </div>
          <div className="w-full h-11 p-1 mt-15">
            <input placeholder="email" onChange={(e) =>  {setUserName(e.target.value)}} className="w-full h-full outline-none border-b-2 border-b-gray-200 focus:border-black "></input>
          </div>
          <div className="w-full h-11 p-1 mt-5  ">
            <input placeholder="password" onChange={(e) =>  {setPassword(e.target.value)}} className="w-full h-full outline-none border-b-2 border-b-gray-200 focus:border-black"></input>
          </div>
          <div className="w-full h-6 mt-3 flex justify-start items-center">
            <input type="checkbox"></input>
            <span className="ml-3 text-black text-xs">Remember Me</span>
          </div>
          <div className="w-full h-13 mt-15">
            <button onClick={handleSignin} className="w-full h-full bg-black text-center rounded-2xl text-white cursor-pointer">Sign in</button>
          </div>
          <div className="w-full h-max mt-3 flex justify-center items-center">
            <a className="text-xs cursor-pointer">Have you forgotten your password?</a>
          </div>
          {error && <div className="flex justify-center items-center mt-3 text-red-600" >{error}</div>}
        </div>
      </div>
    )
  }
  
  export default Signin
  