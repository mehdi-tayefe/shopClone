import ShoppingCartItem from "../../components/shopping cart item/ShoppingCartItem";
import { useShopContext } from "../../context/shopContext"

function ShoppingCart() {
  const {cartItem} = useShopContext()

  
  return (
    <div className="w-full min-h-dvh px-10">
        <div className="w-full h-max flex justify-center items-center text-3xl font-bold mt-20">Shopping Cart</div>
        <div className="w-full h-max flex justify-start items-start mt-15">
            <div className="w-1/2 h-max flex flex-col justify-items-start ">
              {
                cartItem.map((item) =>(
                  <ShoppingCartItem key={item.id} {...item} />
                ))
              }

            </div>
            <div></div>
        </div>
      
    </div>
  )
}

export default ShoppingCart
