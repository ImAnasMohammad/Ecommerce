import { createContext, useContext, useState } from "react";
import cartItems from '../components/dummyData/cart.json'

const cartConext = createContext();

const CartProvider = ({children})=>{
    const [cart,setCart] = useState(cartItems);
    return (
    <cartConext.Provider value={[cart,setCart]}>
        {children}
    </cartConext.Provider>);
}

const useCart = ()=>useContext(cartConext);

export {useCart,CartProvider};