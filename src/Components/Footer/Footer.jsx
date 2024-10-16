// eslint-disable-next-line no-unused-vars
import React from 'react';
import "./Footer.css";
import logo from '../../site assets/logo and icons/1x/Asset 131x.png';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-column">
                <img src={logo} alt="Logo" className="footer-logo" />
            </div>
            <div className="footer-column">
                <ul>
                    <li><a href="#">Ana səhifə</a></li>
                    <li><a href="#">Dizayn et</a></li>
                    <li><a href="#">Populyar Məhsullar</a></li>
                    <li><a href="#">Brendlər</a></li>
                </ul>
            </div>
            <div className="footer-column">
                <ul>
                    <li><a href="#">Məhsullar</a></li>
                    <li><a href="#">T-shirt</a></li>
                    <li><a href="#">Çantalar</a></li>
                    <li><a href="#">Aksesuarlar</a></li>
                    <li><a href="#">Digər məhsullar</a></li>
                </ul>
            </div>
            <div className="footer-column">
                <ul>
                    <li><a href="#">Haqqımızda</a></li>
                    <li><a href="#">Logo nədir?</a></li>
                    <li><a href="#">Missiyamız</a></li>
                </ul>
            </div>
            <div className="footer-column">
                <ul>
                    <li><a href="#">Şirkət ünvanı</a></li>
                    <li><a href="#">Telefon nömrəsi</a></li>
                    <li><a href="#">E-poçt</a></li>
                </ul>
            </div>
            <div className="footer-column">
                <div className="social-icons">
                    <a href="#"><i className="fab fa-facebook"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>

                    <a href="#"><i className="fab fa-tiktok"></i></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
