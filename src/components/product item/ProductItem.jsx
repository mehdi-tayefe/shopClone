import imgLike from "../../assets/imgLike.png"
import imgwatch from "../../assets/watch.png"
import imgCart from "../../assets/cart2.png"

// eslint-disable-next-line react/prop-types
function ProductItem({ title, price, images }) {
    return (
        <div className="w-94 h-118 flex-col justify-start items-start cursor-pointer group">
            <div className="w-full h-95 flex justify-center items-center relative overflow-hidden">
                <img className="w-full h-full rounded-2xl" src={images[0]}></img>
                <div className="absolute inset-0 flex  bg-gray-200/30 justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl">
                    <img className="mr-4" src={imgCart}></img>
                    <img className="mr-4" src={imgwatch}></img>
                    <img className="mr-4" src={imgLike}></img>
                </div>
                <div className="absolute bottom-0 w-full h-1/5 bg-gray-200/30 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl">
                    <span className="text-gray-900 font-bold"> add to cart </span>
                </div>
            </div>
            <div className="w-full h-7 mt-4 ml-2 flex justify-start items-center"><h3>{title}</h3></div>
            <div className="w-full h-7 mt-4 ml-2 flex justify-start items-center text-gray-400 ">
                <span>$</span> <span>{price}</span>

            </div>
        </div>
    )
}

export default ProductItem
