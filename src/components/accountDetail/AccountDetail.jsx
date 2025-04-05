
function AccountDetail() {
  return (
    <div className="w-125 h-max self-center flex flex-col justify-start items-start">
              <input className="w-full h-10 outline-0 border-b-2 border-gray-200 focus:border-black" placeholder="First name" />
              <input className="w-full h-10 outline-0 border-b-2 mt-8 border-gray-200 focus:border-black" placeholder="Last name" />
              <input className="w-full h-10 outline-0 border-b-2 mt-8 border-gray-200 focus:border-black" placeholder="Display name" />
              <input className="w-full h-10 outline-0 border-b-2 mt-8 border-gray-200 focus:border-black" placeholder="Email Adderss" />
              <button className="w-full h-10 border-2 border-gray-200 rounded-xl text-center mt-10 cursor-pointer hover:border-black">Save Change</button>
    </div>
  )
}

export default AccountDetail
