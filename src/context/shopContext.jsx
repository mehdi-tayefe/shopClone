import PropTypes from "prop-types";
import { createContext, useContext, useEffect, useState } from "react";







// eslint-disable-next-line react-refresh/only-export-components
export const shopContext = createContext({})


// eslint-disable-next-line react-refresh/only-export-components
export const useShopContext = () => {
    return useContext(shopContext)
}


export function ShopContextProvider({ children }) {

    const [isWantSignin, setIsWantSignin] = useState(false)
    const [isLogin , setIsLogin] = useState(false)
    const [cartItem, setCartItem] = useState(() => {
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
    });


    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartItem));
    }, [cartItem]);

    // cart context 
    const handleIncreaseItem = (id,price) => {
        setCartItem((currentItem) => {
            const selectedItem = currentItem.find(item => item.id === id);
            let updatedCart;

            if (!selectedItem) {
                updatedCart = [...currentItem, { id: id, qty: 1 , price: price }];
            } else {
                updatedCart = currentItem.map(item =>
                    item.id === id ? { ...item, qty: item.qty + 1 } : item
                );
            }

            localStorage.setItem("cart", JSON.stringify(updatedCart));
            return updatedCart;
        });
    };

    const handleDecreaseItem = (id) => {
        setCartItem((currentItem) => {
            let updatedCart = currentItem
                .map(item => item.id === id ? { ...item, qty: item.qty - 1 } : item)
                .filter(item => item.qty > 0);
            localStorage.setItem("cart", JSON.stringify(updatedCart));
            return updatedCart;
        });
    };



    const getProductQty = (id) => {
        return cartItem.find(item => item.id == id)?.qty || 0
    }




    const removeProductItem = (id) => {
        setCartItem((currentItem) => {
            const updatedCart = currentItem.filter(item => item.id !== id);
            localStorage.setItem("cart", JSON.stringify(updatedCart));
            return updatedCart;
        });
    };


    const totalQty = cartItem.reduce((total, item) => total + item.qty, 0)


    const getTotalPrice = () => {
        return cartItem.reduce((total, item) => {
          const qty = Number(item.qty);
          const price = Number(item.price);
          if (isNaN(qty) || isNaN(price)) {
            return total;
          }
          return total + (qty * price);
        }, 0);
      };
    // login context
    const handleLoginButton = () => {
        setIsWantSignin(true)

    }


    const handleSigninButton = () => {
        setIsWantSignin(false)
    }

    

    return <shopContext.Provider value={{
        handleLoginButton,
        handleSigninButton,
        isWantSignin,
        handleIncreaseItem,
        handleDecreaseItem,
        getProductQty,
        removeProductItem,
        totalQty,
        cartItem,
        getTotalPrice,
        isLogin,
        setIsLogin
    }}>
        {children}
    </shopContext.Provider>
}

ShopContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};