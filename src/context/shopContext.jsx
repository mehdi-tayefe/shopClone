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


    const handleLoginButton =() =>{
        setIsWantSignin(true)
  
    }

    
    const handleSigninButton = () =>{
        setIsWantSignin(false)
    }



    return <shopContext.Provider value={{
        handleLoginButton,
        handleSigninButton,
        isWantSignin
    }}>
        {children}
    </shopContext.Provider>
} 

ShopContextProvider.propTypes = {
    children: PropTypes.node.isRequired, 
  };