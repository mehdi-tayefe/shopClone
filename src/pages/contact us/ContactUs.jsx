

function ContactUs() {
    return (
        <div className="w-full min-h-dvh flex justify-center items-center">
            <div className="w-230 h-190 flex flex-col justify-start items-center">
                <h2 className="text-3xl mt-20" >Contact Us</h2>
                <div className="w-140 h-13 text-xl text-gray-500 text-center mt-10">Say Hello send us your thoughts about our products or share
                    your ideas with our Team!</div>
                <div className="w-full h-max items-start grid grid-cols-2 grid-rows-3 gap-20 mt-20">
                    <input className="w-100 h-10 outline-0 border-b-2 border-gray-200 focus:border-black" placeholder="First name" />
                    <input className="w-100 h-10 outline-0 border-b-2 border-gray-200 focus:border-black" placeholder="Last name" />
                    <input className="w-100 h-10 outline-0 border-b-2 border-gray-200 focus:border-black" placeholder="Email" />
                    <input className="w-100 h-10 outline-0 border-b-2 border-gray-200 focus:border-black" placeholder="Subject" />
                    <input className="w-full h-10 outline-0 border-b-2 border-gray-200 col-span-2  focus:border-black" placeholder="Message" />
                </div>
                <div className="w-125 h-13 bg-black text-white text-sm border-2 rounded-xl cursor-pointer flex justify-center items-center mt-10">
                    <button>Send</button>
                </div>
            </div>
        </div>
    )
}

export default ContactUs
