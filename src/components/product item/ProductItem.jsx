

// eslint-disable-next-line react/prop-types
function ProductItem({ title, price, images }) {
    return (
        <div className="w-94 h-118 flex-col justify-start items-start cursor-pointer ">
            <div className="w-full h-95 flex justify-center items-center relative overflow-hidden">
                <img className="w-full h-full rounded-2xl" src={images[0]}></img>
            </div>
            <div className="w-full h-7 mt-4 ml-2 flex justify-start items-center"><h3>{title}</h3></div>
            <div className="w-full h-7 mt-4 ml-2 flex justify-start items-center text-gray-400 ">
                <span>$</span> <span>{price}</span>

            </div>
        </div>
    )
}

export default ProductItem
