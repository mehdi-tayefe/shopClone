import { useEffect, useRef, useState } from "react";
import close from "../../assets/close.png"
import { getProduct } from "../../services/api";
import { useShopContext } from "../../context/shopContext";

// eslint-disable-next-line react/prop-types
function ShoppingCartItem({ id, qty }) {
    const {handleDecreaseItem ,removeProductItem, handleIncreaseItem} = useShopContext()
    const [product, setProducts] = useState()
    const fetched = useRef(false);
    useEffect(() => {
        if (fetched.current) return;
        fetched.current = true;

        const fetchProducts = async () => {
            try {
                const result = await getProduct(id);                
                setProducts(result);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();

        
    });
    return (
        <div className="w-full h-50 py-10 border-b-2 border-gray-200 flex justify-start items-start hover:border-black ">
            <div className="w-35 h-35 flex justify-items-center">
                <img src={product?.images?.[0]} alt="aaa" className="w-full h-full" />
            </div>
            <div className="w-45 h-max ml-15 flex flex-col justify-start items-start">
                <div className="text-xl">{product?.title}</div>
                <div className="text-sm text-gray-500 mt-5">{product?.category?.name}</div>
                <div className="text-sm text-gray-500 mt-5">$ <span>{product?.price}</span></div>
            </div>
            <div className="w-23 h-13 ml-12 bg-gray-300 grid grid-cols-3">
                <button onClick={() =>handleDecreaseItem(id)} className="text-center cursor-pointer">-</button>
                <div className="flex justify-center items-center ">{qty}</div>
                <button onClick={() =>handleIncreaseItem(id, product.price)} className="text-center cursor-pointer">+</button>
            </div>
            <div className="w-3 h-3 absolute left-186 cursor-pointer">
                <img src={close} onClick={() =>removeProductItem(id)} className="w-full h-full" />
            </div>
        </div>
    )
}

export default ShoppingCartItem
