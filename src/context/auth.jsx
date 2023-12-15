import React, { createContext, useContext, useState } from 'react'

const authContext = createContext();

const Auth = ({children}) => {
    const [auth,setAuth] = useState(null);
  return (
    <authContext.Provider value={[auth,setAuth]}>
        {children}
    </authContext.Provider>
  );
}

const useAuth =()=> useContext(authContext);

export {useAuth,Auth}