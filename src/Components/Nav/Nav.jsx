/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import './Nav.css';
import logo from './../../site assets/logo and icons/SVG/Asset 13p&p.svg';
// import { FaRegUserCircle } from "react-icons/fa";
// import { IoIosArrowDown } from "react-icons/io";
import { Link, useLocation } from 'react-router-dom';

const Nav = () => {

    const location = useLocation();


    return (
        <header className="header">
            <div className="logo">
                <Link to="/"><img src={logo} alt="" /></Link>
            </div>
            <nav className="nav">
                <Link to="/" className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>Ana səhifə</Link>
                <Link to="/products" className={`nav-item ${location.pathname === '/products' ? 'active' : ''}`}>Məhsullar</Link>
                <Link to="/about" className={`nav-item ${location.pathname === '/about' ? 'active' : ''}`}>Haqqımızda</Link>
                <Link to="/contact" className={`nav-item ${location.pathname === '/contact' ? 'active' : ''}`}>Əlaqə</Link>
            </nav>
            <div className="header-right">
                <div className="language-selector">
                    Az
                </div>
                <Link to="/corporate" className="corporate-order"> 
                    {/* <span className="user-icon"><FaRegUserCircle/></span> */}
                    Korporativ sifariş
                </Link>
            </div>
        </header>
    );
}

export default Nav;
