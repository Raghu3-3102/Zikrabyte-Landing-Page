'use client';   
import Link from 'next/link'
import React, { useState } from 'react'
import './Navbar.css'

export const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const handleMenuClick = () => { 
        console.log('menu clicked');
        setIsMenuOpen(!isMenuOpen);
    }
  return (
    <nav>
        <div className="nav_container flex">

        <div className="logo_container">
            <img className='logo_container__img' src="assets/img/zikrabyte-logo.png" alt="logo" />
        </div>

        <div className={`nav-button relative group ${isMenuOpen ? 'open' : ''}`}>
      <button className="relative group" onClick={()=> handleMenuClick()}>
        <div className="menu-button-box relative flex overflow-hidden items-center justify-center rounded-full px-5 py-10 h-[50px] transform transition-all bg-slate-700 ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
            <span className='menu-text'>Menu</span>
          <div className={`menu-btn-icon  ${isMenuOpen ? 'open' : ''} flex flex-col justify-between w-[30px] h-[25px] transform transition-all duration-300 origin-center overflow-hidden`}>
            <div className="menu-icon-line-1 bg-white h-[2px] w-4/5  transform transition-all duration-300 self-end "></div>
            {/* <div className="bg-white h-[2px]  rounded transform transition-all duration-300 group-focus:-translate-x-10"></div> */}
            <div className="menu-icon-line-2 bg-white h-[2px] w-7 transform transition-all duration-300 origin-left "></div>
          </div>
        </div>
      </button>
        </div>


        <div className={`menuItem_container ${isMenuOpen ? 'open' : ''}`}>
            <ul>
                <Link className="uppercase hover" href=""><li>Home</li></Link>
                <Link className="uppercase" href=""><li>Services</li></Link>
                <Link className="uppercase" href=""><li>Products</li></Link>
                <Link className="uppercase" href=""><li>Careers</li></Link>
                <Link className="uppercase" href=""><li>Projects</li></Link>
                <Link className="uppercase" href=""><li>About Us</li></Link>
            </ul>
        </div>
        </div>
    </nav>
    
  )
}
