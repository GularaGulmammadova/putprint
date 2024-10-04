/* eslint-disable no-unused-vars */
import React, { useRef } from 'react'
import './Nav.css'
import logo from './../../site assets/logo and icons/SVG/Asset 13p&p.svg'
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from 'react-router-dom';

const Nav = () => {

    const menu = useRef();
    const navbar = useRef();

    const menuHandler = () => {
        menu.current.classList.toggle('showNav')
    }

    window.addEventListener('scroll', function(){
        if (window.scrollY > 100) {
            navbar.current.classList.add('navbarScroll')
            } else {
                navbar.current.classList.remove('navbarScroll')
                }
    })

  return (
    <header className="header">
    <div className="logo">
      <img src={logo} alt="" />
    </div>
    <nav className="nav">
      <Link to="/" className="nav-item">Ana səhifə</Link>
      <Link to="/products" className="nav-item active">Məhsullar</Link>
      <Link to="/about" className="nav-item">Haqqımızda</Link>
      <Link to="/contact" className="nav-item">Əlaqə</Link>
    </nav>
    <div className="header-right">
      <div className="language-selector">
        Az <span className="arrow"><IoIosArrowDown/></span>
      </div>
      <div className="corporate-order">        
      <span className="user-icon"><FaRegUserCircle/></span>
        Korporativ sifariş
      </div>
    </div>
  </header>
  )
}

export default Nav