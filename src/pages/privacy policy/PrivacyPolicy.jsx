

function PrivacyPolicy() {
    return (
        <div className="w-full min-h-dvh flex justify-center items-center">
            <div className="w-170 h-125 flex flex-col justify-start items-center" >
                <div className="w-full h-max flex  justify-center items-center text-2xl text-black font-bold mt-10">Privacy Policy</div>
                <div className="w-full h-max flex justify-center items-center text-sm mt-7">
                    <p>Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam, sollicitudin ante a,<br />
                     gravida arcu. Nam fringilla molestie velit, eget pellentesque risus scelerisque a. Nam ac<br />
                      urna maximus, tempor magna et, placerat urna. Curabitur eu magna enim. Proin placerat<br />
                       tortor lacus, ac sodales lectus placerat quis. </p>
                </div>
                <div className="text-xl mt-8 self-start px-17 font-bold">Security</div>
                <div className=" text-sm mt-4 self-start px-17"><p>Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam, sollicitudin ante a,<br /> 
                gravida arcu. Nam fringilla molestie velit, eget pellentesque risus scelerisque</p></div>
                <div className="text-xl mt-8 self-start px-17 font-bold">Cookies</div>
                <div className="text-sm mt-4 self-start px-20">
                    <ul className="list-disc pl-5">
                        <li className="marker:text-2xl">Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam, sollicitudin.</li>
                        <li className="marker:text-2xl"> Nam fringilla molestie velit, eget pellentesque risus scelerisque a</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default PrivacyPolicy
