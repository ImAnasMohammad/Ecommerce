import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { CiViewList,CiLogout } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { PiAddressBookLight } from "react-icons/pi";
import { MdPayment } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";




const ProfileNavBar = ({name}) => {
  const [isActive,setIsActive] = useState(true);
  return (
    <div className='profile-navBar'>
        <div className="username">
          <span className="username-wrapper">Hello {name??"User"}</span>
          <span className={`profile-nav-toggle ${!isActive&&'rotate'}`} onClick={()=>setIsActive(pre=>!pre)}><IoIosArrowDown/></span>
        </div>
        <ul className={`${!isActive&&'inactive'}`}>
          <li>
            <NavLink to="/user/profile" activeClassName='active'><CiViewList/>personal information</NavLink>
          </li>
          <li>
            <NavLink to="/user/payment" activeClassName='active'><MdPayment/>payment information</NavLink>
          </li>
          <li>
            <NavLink to="/user/address" activeClassName='active'><PiAddressBookLight/>address information</NavLink>
          </li>
          <li>
            <NavLink to="/user/orders" activeClassName='active'><IoCartOutline/>my Orders</NavLink>
          </li>
          <li>
            <NavLink to="/user/logout" activeClassName='active'><CiLogout/>logout</NavLink>
          </li>
        </ul>
    </div>
  )
}

export default ProfileNavBar