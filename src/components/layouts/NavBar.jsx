import {NavLink, useLocation} from 'react-router-dom';
import logo from '../../img/logo.png';
import React, { useEffect, useRef, useState } from 'react';
import { useCart } from '../../context/cart';
import { FaSearch } from "react-icons/fa";
import { useSearch } from '../../context/search';
import { IoHomeSharp } from "react-icons/io5";
import { BiSolidCategory } from "react-icons/bi";
import { FaShoppingCart } from "react-icons/fa";
import { RxEnter } from "react-icons/rx";
import { useAuth } from '../../context/auth';
import { FaUser } from "react-icons/fa";

const SearchWrapper = ({className,search,setSearch,handleSearch}) =>{
    const location = useLocation();
    const pagesHaveSearchBar = ['','home','categories','product'];
    console.log(location.pathname.split('/')[1])
    return (
        pagesHaveSearchBar?.includes(location.pathname.split('/')[1])&&<div className={`search-wrapper ${className}`}>
        <input type="search" onChange={e=>setSearch(e.target.value)} value={search}className='searchInput' />
        <FaSearch className='searchIcon' onClick={handleSearch}/>
        </div>
        
    )
}

const NavBar = () => {
    const [open,setOpen] = useState(false);
    const [cart,setCart] = useCart();
    const [search,setSearch] = useSearch();
    const [auth,setAuth] = useAuth();
    const navRef = useRef()
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
    const scrolled = () =>{
        navRef.current?.classList?.toggle('navScroll',window.scrollY>0)
    }
    useEffect(()=>{
        window.addEventListener('scroll',scrolled);
    },[])
  return (
        <>
            <nav className="main-navBar" ref={navRef}>
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
                                <NavLink to="/" activeClassName='active'><IoHomeSharp className='nav-icon'/>home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/categories" activeClassName='active'><BiSolidCategory className='nav-icon' />category</NavLink>
                            </li>
                            <li>
                                <NavLink to="/cart" activeClassName='active'><FaShoppingCart className='nav-icon' />cart({cart?.length})</NavLink>
                            </li>
                            <li>
                                {
                                    auth?.token?(
                                        <NavLink activeClassName='active' to="/profile"><FaUser className='nav-icon' />Profile</NavLink>
                                    ):(
                                        <NavLink activeClassName='active' to="/user/profile"><RxEnter className='nav-icon' />join</NavLink>
                                    )
                                }
                                
                            </li>
                        </ul>
                        <SearchWrapper className="desktop" search={search} setSearch={setSearch} handleSearch={handleSearch} />
                    </div>
                </div>
                {
                    document.body.classList.toggle('overFlowhidden',open)
                }
            </nav>
            <SearchWrapper className="mobile" search={search} setSearch={setSearch} handleSearch={handleSearch} />
        </>
  )
}



export default NavBar;