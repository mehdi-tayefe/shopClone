import {  useNavigate } from "react-router-dom"


function NotFound() {
  const navigate = useNavigate()
  return (
    <div className="w-full h-dvh flex justify-center items-center">
      <div className="w-110 h-65 flex flex-col justify-start items-center mt-20">
        <h2 className="text-black text-3xl font-bold">404 ERROR</h2>
        <div className="flex justify-center items-center mt-8">
          <p className="text-center text-gray-500">This page not found;<br />
            back to home and start again</p>
        </div>
        <button className="w-45 h-11 border-2 rounded-2xl text-center mt-10 cursor-pointer" onClick={()=>navigate("/")} >HOMEPAGE</button>
      </div>

    </div>
  )
}

export default NotFound
