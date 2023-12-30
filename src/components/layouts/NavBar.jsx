import {NavLink,Link, useLocation} from 'react-router-dom';
import logo from '../../img/logo.png';
import React, { useState } from 'react';
import { useCart } from '../../context/cart';
import { FaSearch } from "react-icons/fa";
import { useSearch } from '../../context/search';
import { IoHomeSharp } from "react-icons/io5";
import { BiSolidCategory } from "react-icons/bi";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { RxEnter } from "react-icons/rx";
import { useAuth } from '../../context/auth';
import { FaUser } from "react-icons/fa";
import { useWishList } from '../../context/wishlist';

const SearchWrapper = ({className,search,setSearch,handleSearch}) =>{
    return (
        <div className={`search-wrapper ${className}`}>
            <input type="search" onChange={e=>setSearch(e.target.value)} value={search}className='searchInput' />
            <FaSearch className='searchIcon' onClick={()=>handleSearch()}/>
        </div>
    )
}

const NavBar = ({activePage}) => {
    const [open,setOpen] = useState(false);
    const [cart,setCart] = useCart();
    const [wishList,setWishList] = useWishList();
    const [search,setSearch] = useSearch();
    const [auth,setAuth] = useAuth();
    const location = useLocation();
    const pagesDontHaveSearchBar = ['/join'];

    const handleSearch = ()=>{
        console.log("first")
    }

    const categories = [
        {
            name:"mens",
            slug:'mens'
        },
        {
            name:"womens",
            slug:'womens'
        },
        {
            name:"kids",
            slug:'kids'
        }
    ];
    if(activePage===undefined || !activePage) activePage='home';
  return (
        <>
            <nav className="main-navBar">
                <div className="nav-wrapper">
                    <div className="logo-wrapper">
                        <NavLink to="">
                            <img src={logo} alt="logo" />
                        </NavLink>
                    </div>
                    <div className={`shadow-wrapper ${open?'active':''}`} style={{zIndex:992}} onClick={()=>setOpen(pre=>!pre)}/>
                    <div
                        className="nav-menu-toggle"
                        onClick={()=>setOpen(pre=>!pre)}
                    >
                        <div />
                        <div />
                        <div />
                    </div>
                    <div className={`nav-links ${open?'right':''}`}>
                        <ul>
                            <li>
                                <Link to="/" className={`${activePage=='home'?'active':''}`}><IoHomeSharp className='nav-icon'/>home</Link>
                            </li>
                            <li>
                                <Link to="/categories" className={`${activePage=='categories'?'active':''}`}><BiSolidCategory className='nav-icon' />category</Link>
                            </li>
                            <li>
                                <Link to="/cart" className={`${activePage=='cart'?'active':''}`}><FaShoppingCart className='nav-icon' />cart({cart?.length})</Link>
                            </li>
                            <li>
                                <Link to="/wishlist" className={`${activePage=='wishlist'?'active':''}`}><FaHeart className='nav-icon'/>wishlist({wishList?.length})</Link>
                            </li>
                            <li>
                                {
                                    auth?.token?(
                                        <Link className={`${activePage=='join'?'active':''}`} to="/profile"><FaUser className='nav-icon' />Profile</Link>
                                    ):(
                                        <Link className={`${activePage=='join'?'active':''}`} to="/join"><RxEnter className='nav-icon' />join</Link>
                                    )
                                }
                                
                            </li>
                        </ul>
                        {
                            !pagesDontHaveSearchBar?.includes(location.pathname)&&<SearchWrapper className="desktop" search={search} setSearch={setSearch} handleSearch={handleSearch} />
                        }
                    </div>
                </div>
                {
                    document.body.classList.toggle('overFlowhidden',open)
                }
            </nav>
            {
                !pagesDontHaveSearchBar?.includes(location.pathname)&&<SearchWrapper className="mobile" search={search} setSearch={setSearch} handleSearch={handleSearch} />
            }
        </>
  )
}



export default NavBar;