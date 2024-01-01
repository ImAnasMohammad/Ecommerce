import React, { useEffect } from 'react'
import { useAuth } from '../../context/auth'
import { Outlet, useNavigate } from 'react-router-dom';

const UserPrivateRoute = () => {
    const [auth] = useAuth();

  return auth?<Outlet/>:<Redirect/>
}
const Redirect =  ()=>{
  
  const navigate = useNavigate();
  useEffect(()=>{
    navigate('/join')
  },[navigate])
  return<></>
}
export default UserPrivateRoute