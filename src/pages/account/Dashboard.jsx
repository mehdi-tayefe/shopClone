import { useState } from "react"
import Orders from "../../components/accountDetail/Orders"
import AccountDetail from "../../components/accountDetail/AccountDetail"
import LogOut from "../../components/accountDetail/LogOut"


function Dashboard() {
  const [component ,setComponent] = useState(<Orders />)
  return (
    <div className="w-full min-h-dvh px-10 flex flex-col justify-start items-start">  
        <div className="w-full h-max self-center flex justify-center items-center text-2xl font-bold mt-15">
          My Account
        </div>
        <div className="w-full h-15 border-b-2 border-gray-300 flex justify-start items-start mt-15 ">
          <div onClick={()=>{setComponent(<Orders />)}} className="w-max h-max  cursor-pointer text-xl text-gray-600 text-center">Orders</div>
          <div onClick={()=>{setComponent(<AccountDetail />)}} className="w-max h-max ml-8 cursor-pointer text-xl text-gray-600 text-center">Account Detail</div>
          <div onClick={()=>{setComponent(<LogOut />)}} className="w-max h-max ml-8 cursor-pointer text-xl text-gray-600 text-center">LogOut</div>
        </div>
        <div className="w-full h-max mt-20 flex flex-col justify-start items-start">
          {component}
        </div>
    </div>
  )
}

export default Dashboard
