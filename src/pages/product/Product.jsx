import pic from "../../assets/product/Imgproduct.png"
import like from "../../assets/imgLike.png"
import email from "../../assets/email.png"
import x from "../../assets/x.png"
import faceBook from "../../assets/facebook.png"
import instagram from "../../assets/instagram.png"



function Product() {
    const isInCart = false
    return (
        <div className="w-full min-h-dvh px-10 mt-15">
            <div className="w-full h-150 flex justify-start items-start mb-15">
                <div className="w-1/2 h-full  flex justify-start items-start">
                    <div className="w-30 h-full mx-15 flex flex-col justify-start items-center">
                        <img className="w-full h-30 rounded-xl cursor-pointer" src={pic} />
                        <img className="w-full h-30 mt-10 rounded-xl cursor-pointer" src={pic} />
                        <img className="w-full h-30 mt-10 rounded-xl cursor-pointer" src={pic} />
                        <img className="w-full h-30 mt-10 rounded-xl cursor-pointer" src={pic} />
                    </div>
                    <div className="w-135 h-full  flex justify-center items-center">
                        <img className="w-full h-full" src={pic} />
                    </div>
                </div>
                <div className="w-120 h-full ml-30 flex flex-col justify-start items-start">
                    <div className="text-xl font-bold">Lira Earrings</div>
                    <div className="text-sm mt-5 "><span>$</span>20.00</div>
                    <div className="w-full h-max mt-20 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. </div>
                    <div className="w-full h-max flex justify-start items-center mt-15">
                        { isInCart && <div className="w-25 h-15 bg-gray-200 grid grid-cols-3 mr-5"><div className ="flex justify-center items-center cursor-pointer">-</div><div className ="flex justify-center items-center">1</div><div className ="flex justify-center items-center cursor-pointer">+</div></div>}
                        <button className="w-90 h-15 text-center border-2 rounded-sm cursor-pointer">add to cart</button>
                    </div>
                    <div className="w-full h-10 mt-10 flex justify-start items-center">
                        <img src={like} alt="" className="w-6 h-6 flex justify-center items-center mr-8 cursor-pointer" />
                        <span className="mr-4">|</span>
                        <img src={email} alt="" className="w-6 h-6 flex justify-center items-center mr-6 cursor-pointer" />
                        <img src={faceBook} alt="" className="w-6 h-6 flex justify-center items-center mr-6 cursor-pointer" />
                        <img src={instagram} alt="" className="w-6 h-6 flex justify-center items-center mr-6 cursor-pointer" />
                        <img src={x} alt="" className="w-6 h-6 flex justify-center items-center mr-6 cursor-pointer" />
                    </div>
                    <div className="w-full h-max flex jstify-start items-center mt-15">
                        <p>sku :</p>
                        <span className="text-gray-400 ml-6">12</span>
                    </div>
                    <div className="w-full h-max flex jstify-start items-center mt-10">
                        <p>Categories :</p>
                        <span className="text-gray-400 ml-6">Fashion, Style</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
