import React, { Children, createContext, useContext, useState } from 'react'

const searchContext = createContext();

const SearchProvider = ({children}) => {
    const [search,setSearch] = useState();
    return(<searchContext.Provider value={[search,setSearch]}>
        {children}
    </searchContext.Provider>)
}

const useSearch = ()=>useContext(searchContext)

export {useSearch,SearchProvider}