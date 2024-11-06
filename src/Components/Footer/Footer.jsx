// eslint-disable-next-line no-unused-vars
import React from 'react';
import "./Footer.css";
import logo from '../../site assets/logo and icons/1x/Asset 131x.png';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';
function Footer() {
    return (
        <footer className="footer">
            <div className="footer-column">
              <Link to="/"><img src={logo} alt="Logo" className="footer-logo" /></Link>
            </div>
            <div className="footer-column">
                <ul>
                    <li><Link to="/">Ana səhifə</Link></li>
                    <li><Link to="/products">Dizayn et</Link></li>
                    <li><Link to="/" >Populyar Məhsullar</Link></li>
                </ul>
            </div>
            <div className="footer-column">
                <ul>
                    <li><Link to="/products">Məhsullar</Link></li>
                    <li><Link to="/productdetail/2">T-shirt</Link></li>
                    <li><Link to="/productdetail/3">Kapşonlu Sviter</Link></li>
                    <li><Link to="/productdetail/4">Sviter</Link></li>
                    <li><Link to="/productdetail/6">Ekoçanta</Link></li>
                </ul>
            </div>
            <div className="footer-column">
                <ul>
                    <li><Link to="/about">Haqqımızda</Link></li>
                    <li><Link to="/about">Missiyamız</Link></li>
                </ul>
            </div>
            <div className="footer-column" id='contact'>
                <ul >
                    <li><Link to="/contact">Əlaqə</Link></li>
                    <li><span>+994506976357</span></li>
                    <li><span>putandprint@gmail.com</span></li>
                </ul>
            </div>
            <div className="footer-column">
                <div className="social-icons">
                    <Link to="/"><i className="fab fa-facebook"></i></Link>
                    
                    <a href="https://www.instagram.com/putandprint/?igsh=cnJ2aHI1czgzNnRr" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                   <a href="https://www.tiktok.com/@put_and_print?_t=8r2SyccKy4g&_r=1" target="_blank" rel="noopener noreferrer"><i className="fab fa-tiktok"></i></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
