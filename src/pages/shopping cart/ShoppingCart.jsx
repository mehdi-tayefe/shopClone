import ShoppingCartItem from "../../components/shopping cart item/ShoppingCartItem";
import { useShopContext } from "../../context/shopContext"

function ShoppingCart() {
  const { cartItem ,getTotalPrice } = useShopContext()
  console.log(cartItem);
  

  return (
    <div className="w-full min-h-dvh px-10">
      <div className="w-full h-max flex justify-center items-center text-3xl font-bold mt-20">Shopping Cart</div>
      <div className="w-full h-max flex justify-start items-start mt-15">
        <div className="w-1/2 h-max flex flex-col justify-items-start ">
          {
            cartItem.map((item) => (
              <ShoppingCartItem key={item.id} {...item} />
            ))
          }
          {cartItem.length > 0 && (<> <div className="w-full h-22 flex justify-between items-center">
            <div>Total : $<span>{getTotalPrice()}</span></div>
            <button className="w-40 h-13 cursor-pointer border-2 mr-10 rounded-xl">pay</button>
          </div>
          <div className="w-full h-22 flex justify-between items-center">
            <input className="w-100 h-13 outline-0 border-b-2 border-gray-200 focus:border-black" placeholder="Coupon Code" />
            <button className="w-40 h-13 cursor-pointer border-2 mr-10 bg-black text-white rounded-xl">APPLY COUPON</button>
          </div> </>)}
        </div>
        <div></div>
      </div>

    </div>
  )
}

export default ShoppingCart
