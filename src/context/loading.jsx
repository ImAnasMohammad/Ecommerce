import React, { createContext, useContext, useState } from 'react'

const loadingContext = createContext();

const Loading = ({children}) => {
    const [loading,setLoading] = useState(1);
  return (
    <loadingContext.Provider value={[loading,setLoading]}>
        {children}
    </loadingContext.Provider>
  );
}

const useLoading =()=> useContext(loadingContext);

export {useLoading,Loading}