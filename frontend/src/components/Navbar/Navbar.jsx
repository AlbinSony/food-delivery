import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {

  const [menu,SetMenu]=useState("home")
  return (
    <div className='navbar'>
        <img src={assets.logo} alt="" className="logo" />
        <ul className="navbar-menu">
            <li onClick={()=>SetMenu("home")} className={menu==="home"?"active":""}>Home</li>
            <li onClick={()=>SetMenu("menu")}  className={menu==="menu"?"active":""}>Menu</li>
            <li onClick={()=>SetMenu("mobile-app")}  className={menu==="mobile-app"?"active":""}>Mobile-App</li>
            <li onClick={()=>SetMenu("contact-us")}  className={menu==="contact-us"?"active":""}>Contact Us</li>
        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt="" />
            <div className="navbar-search-icon">
                <img src={assets.basket_icon} alt="" />
                <div className="dot"></div>
            </div>
            <button>Sign In</button>
        </div>
    </div>
  )
}

export default Navbar