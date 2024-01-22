import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";




const AdminNav = ({name}) => {
  const [isActive,setIsActive] = useState(true);
  const handleClick = (e)=>{
    e.stopPropagation();
    setIsActive(pre=>!pre)
  }
  return (
    <div className='profile-navBar'>
        <div className="username" onClick={handleClick}>
          <span className="username-wrapper">Hello {name??"Admin"}</span>
          <span className={`profile-nav-toggle ${!isActive&&'rotate'}`} onClick={handleClick}><IoIosArrowDown/></span>
        </div>
        <ul className={`${!isActive&&'inactive'}`}>
          <li>
            <NavLink to="/admin/dashboard" activeClassName='active'>Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/admin/products" activeClassName='active'>Manage Products</NavLink>
          </li>
          <li>
            <NavLink to="/admin/categories" activeClassName='active'>Manage categories</NavLink>
          </li>
          <li>
            <NavLink to="/admin/sub-categories" activeClassName='active'>Manage Sub categories</NavLink>
          </li>
          <li>
            <NavLink to="/admin/orders" activeClassName='active'>Manage Orders</NavLink>
          </li>
          <li>
            <NavLink to="/admin/users" activeClassName='active'>Manage Users</NavLink>
          </li>
          <li>
            <NavLink to="/admin/settings" activeClassName='active'>Manage Website</NavLink>
          </li>
          <li>
            <NavLink to="/user/logout" activeClassName='active'>logout</NavLink>
          </li>
        </ul>
    </div>
  )
}

export default AdminNav