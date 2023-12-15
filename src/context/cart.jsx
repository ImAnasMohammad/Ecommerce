import { createContext, useContext, useState } from "react";

const cartConext = createContext();

const CartProvider = ({children})=>{
    const [cart,setCart] = useState([]);
    return (
    <cartConext.Provider value={[cart,setCart]}>
        {children}
    </cartConext.Provider>);
}

const useCart = ()=>useContext(cartConext);

export {useCart,CartProvider};