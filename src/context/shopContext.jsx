import PropTypes from "prop-types";
import { createContext, useContext, useState } from "react";







// eslint-disable-next-line react-refresh/only-export-components
export const shopContext = createContext({})


// eslint-disable-next-line react-refresh/only-export-components
export const useShopContext =() => {
    return useContext(shopContext)
}


export function ShopContextProvider({children}) {

    const [isWantSignin,setIsWantSignin] = useState(false)
    const [cartItem , setCartItem] = useState([])


    // cart context 
    const handleIncreaseItem = (id) => {
        setCartItem((currentItem)=>{
            const  selecctedItem = currentItem.find(item =>item.id == id )
            if(selecctedItem == null){
                return [...currentItem , {id : id , qty : 1}]
            } else {
               return currentItem.map(item =>{
                  if(item.id == id){
                    return {...item , qty : item.qty + 1}
                  }else{
                    return item
                  }
                })
            }
        })
    }

    const handleDecreaseItem = (id) => {
        setCartItem(currentItems =>{
            const selecctedItem = currentItems.find(item => item.id == id)
            if (selecctedItem?.qty == 1){
                return currentItems.filter(item => item.id !== id)
            } else{
                return currentItems.map(item => {
                    if(item.id == id){
                        return {...item , qty : item.qty - 1}
                    }else{
                        return item
                    }
                })
            }
        })
    }
    const getProductQty = (id) =>{
        return cartItem.find(item => item.id == id)?.qty || 0
     }
 
     const removeProductItem = (id) => {
        setCartItem(currentItem => currentItem.filter(item => item.id != id))
    }
    const totalQty = cartItem.reduce((total , item) =>  total + item.qty , 0)
    // login context
    const handleLoginButton =() =>{
        setIsWantSignin(true)
  
    }

    
    const handleSigninButton = () =>{
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
        totalQty
    }}>
        {children}
    </shopContext.Provider>
} 

ShopContextProvider.propTypes = {
    children: PropTypes.node.isRequired, 
  };