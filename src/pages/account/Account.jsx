import Login from "../../components/login/Login"
import Signin from "../../components/sign in/Signin"
import { useShopContext } from "../../context/shopContext"


function Account() {
  const {isWantSignin} =useShopContext()
  return (
    <>
      {isWantSignin ? <Signin />:  <Login />}
    </>
  )
}

export default Account
