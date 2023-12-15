import React, { createContext, useContext, useState } from 'react'

const wishListContext = createContext();

const WishList = ({children}) => {
    const [wishList,setWishList] = useState([]);
  return (
    <wishListContext.Provider value={[wishList,setWishList]}>
        {children}
    </wishListContext.Provider>
  )
}
const useWishList = () => useContext(wishListContext);
export  {WishList,useWishList}