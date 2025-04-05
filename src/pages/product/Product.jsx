
import like from "../../assets/imgLike.png"
import email from "../../assets/email.png"
import x from "../../assets/x.png"
import faceBook from "../../assets/facebook.png"
import instagram from "../../assets/instagram.png"
import { useEffect, useRef, useState } from "react"
import { getProduct } from "../../services/api"
import { useParams } from "react-router-dom"
import { useShopContext } from "../../context/shopContext"
import Loading from "../../components/loading/Loading"





function Product() {
    const { handleDecreaseItem, handleIncreaseItem, getProductQty } = useShopContext()
    const [isLoading, setIsLoading] = useState(true);
    const fetched = useRef(false);
    let { id } = useParams()
    const [product, setProducts] = useState({})


    useEffect(() => {
        if (fetched.current) return;
        fetched.current = true;

        const fetchProducts = async () => {
            try {
                const result = await getProduct(id);
                setProducts(result);
                setIsLoading(false);

            } catch (error) {
                console.error("Error fetching products:", error);
                setIsLoading(false);
            }
        };

        fetchProducts();
    }, [id]);

    if (isLoading) {
        <Loading />
    }
    else {
        return (
            <div className="w-full min-h-dvh px-10 mt-15">
                <div className="w-full h-150 flex justify-start items-start mb-15">
                    <div className="w-1/2 h-full  flex justify-start items-start">
                        <div className="w-30 h-full mx-15 flex flex-col justify-start items-center">
                            <img className="w-full h-30 rounded-xl cursor-pointer" src={product.images?.[1]} />
                            <img className="w-full h-30 mt-10 rounded-xl cursor-pointer" src={product.images?.[2]} />
                            <img className="w-full h-30 mt-10 rounded-xl cursor-pointer" src={product.images?.[1]} />
                            <img className="w-full h-30 mt-10 rounded-xl cursor-pointer" src={product.images?.[2]} />
                        </div>
                        <div className="w-135 h-full  flex justify-center items-center">
                            <img className="w-full h-full" src={product.images?.[0]} />
                        </div>
                    </div>
                    <div className="w-120 h-full ml-30 flex flex-col justify-start items-start">
                        <div className="text-xl font-bold">{product.title}</div>
                        <div className="text-sm mt-5 "><span>$</span>{product.price}</div>
                        <div className="w-full h-max mt-20 text-sm">{product.description}</div>
                        <div className="w-full h-max flex justify-start items-center mt-15">
                            {getProductQty(id) > 0 && <div className="w-25 h-15 bg-gray-200 grid grid-cols-3 mr-5">
                                <button onClick={() => {handleDecreaseItem(id) }} className="flex justify-center items-center cursor-pointer">-</button>
                                <span className="flex justify-center items-center">{getProductQty(id)}</span>
                                <button onClick={() => { handleIncreaseItem(id, product.price) }} className="flex justify-center items-center cursor-pointer">+</button>
                            </div>}

                            {getProductQty(id) === 0 && (
                                <button
                                    onClick={() => {
                            
                                        handleIncreaseItem(id, product.price);
                                    }}
                                    className="w-90 h-15 text-center border-2 rounded-sm cursor-pointer"
                                >
                                    add to cart
                                </button>
                            )}
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
                            <span className="text-gray-400 ml-6">{product.category?.name}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Product
