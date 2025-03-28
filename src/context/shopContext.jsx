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
    const [cartItem, setCartItem] = useState(() => {
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
    });


    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartItem));
    }, [cartItem]);

    // cart context 
    const handleIncreaseItem = (id) => {
        setCartItem((currentItem) => {
            const selectedItem = currentItem.find(item => item.id === id);
            let updatedCart;

            if (!selectedItem) {
                updatedCart = [...currentItem, { id: id, qty: 1 }];
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
                .filter(item => item.qty > 0); // حذف آیتم‌هایی که تعدادشون صفر میشه

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
        cartItem
    }}>
        {children}
    </shopContext.Provider>
}

ShopContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};