import { useNavigate } from "react-router-dom"
import { useShopContext } from "../../context/shopContext"


function LogOut() {
  const navigate = useNavigate()
  const {setIsLogin} = useShopContext()
  const logout = () => {
     setIsLogin(false) 
     navigate("/")
  }
  return (
    <div className="w-125 h-max self-center flex justify-center items-center">
      <button onClick={logout} className="w-45 h-11 border-2 rounded-2xl text-center mt-10 cursor-pointer hover:bg-red-600">Log Out!</button>
    </div>
  )
}

export default LogOut
