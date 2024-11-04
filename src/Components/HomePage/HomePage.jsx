/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import "./HomePage.css";
import black_hoodie1 from "./../../site assets/newproducts/hoodieblack1.png";
import white_hoodie1 from "./../../site assets/newproducts/hoodiewhite1.png";
import black_hoodie2 from "./../../site assets/newproducts/hoodieblack2.png";
import white_hoodie2 from "./../../site assets/newproducts/hoodiewhite2.png";
import black_hoodie3 from "./../../site assets/newproducts/hoodieblack3.png";
import white_hoodie3 from "./../../site assets/newproducts/hoodiewhite3.png";
import black_hoodie4 from "./../../site assets/newproducts/hoodieblack4.png";
import white_hoodie4 from "./../../site assets/newproducts/hoodiewhite4.png";
import black_hoodie5 from "./../../site assets/newproducts/hoodieblack5.png";
import white_hoodie5 from "./../../site assets/newproducts/hoodiewhite5.png";
import black_hoodie6 from "./../../site assets/newproducts/hoodieblack6.png";
import white_hoodie6 from "./../../site assets/newproducts/hoodiewhite6.png";
import black_hoodie7 from "./../../site assets/newproducts/hoodieblack7.png";
import white_hoodie7 from "./../../site assets/newproducts/hoodiewhite7.png";
import black_hoodie8 from "./../../site assets/newproducts/hoodieblack8.png";
import white_hoodie8 from "./../../site assets/newproducts/hoodiewhite8.png";
import size from "./../../site assets/logo and icons/size.png";
import { Link } from "react-router-dom";
import homepageclothing from "./../../site assets/homepageclothing.png";
import homepagelogo from "./../../site assets/homepagelogo.png";
// import ProductCheck from "../ProductCheck/ProductCheck";

const HomePage = () => {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}, [])

  return (
    <div className="container">
      <div className="home-row">
        <div className="home-row-text">
          <p>
          Öz  tərzini yarat
          </p>
          <p>Etdiyin dizaynlarla fərqini göstər!
          </p>
        <Link to="/products"><button className="home-page-btn">Dizayna Başla</button></Link>
        </div>
        <div className="home-row-images">
          <img src={homepageclothing} alt="" />
        </div>
      </div>
      <div className="home-page-part2" >
        <p>AtlazWear – dan kolleksiyalar</p>
        <div className="home-product-cards">
        <Link to="/productcheck">
            <div className="home-product-card">
              <div className="image">
              <img src={black_hoodie1} alt="" className="hover-img" />
              <img src={white_hoodie1} alt="" />
              </div>
              <hr />
              <div className="home-product-name">Kapşonlu Sviter</div>
              <div className="home-detail">
                <div className="home-colors">
                  <div
                    className="color"
                    style={{ backgroundColor: "#DEDEDE" }}
                  ></div>
                  <div
                    className="color"
                    style={{ backgroundColor: "#000000" }}
                  ></div>
                </div>
                <div className="home-size">
                  <span>/</span> <img src={size} alt="" /> S-2XL
                </div>
              </div>
              <div className="home-desc">
                <div className="home-price">
                  <span>48₼</span>
                  <button className="home-design-button">Sifariş et</button>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/productcheck">
            <div className="home-product-card">
              <div className="image">
              <img src={black_hoodie2} alt="" className="hover-img" />
              <img src={white_hoodie2} alt="" />
              </div>
              <hr />
              <div className="home-product-name">Kapşonlu Sviter</div>
              <div className="home-detail">
                <div className="home-colors">
                  <div
                    className="color"
                    style={{ backgroundColor: "#DEDEDE" }}
                  ></div>
                  <div
                    className="color"
                    style={{ backgroundColor: "#000000" }}
                  ></div>
                </div>
                <div className="home-size">
                  <span>/</span> <img src={size} alt="" /> S-2XL
                </div>
              </div>
              <div className="home-desc">
                <div className="home-price">
                  <span>48₼</span>
                  <button className="home-design-button">Sifariş et</button>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/productcheck">
            <div className="home-product-card">
              <div className="image">
              <img src={black_hoodie3} alt="" className="hover-img" />
              <img src={white_hoodie3} alt="" />
              </div>
              <hr />
              <div className="home-product-name">Kapşonlu Sviter</div>
              <div className="home-detail">
                <div className="home-colors">
                  <div
                    className="color"
                    style={{ backgroundColor: "#DEDEDE" }}
                  ></div>
                  <div
                    className="color"
                    style={{ backgroundColor: "#000000" }}
                  ></div>
                </div>
                <div className="home-size">
                  <span>/</span> <img src={size} alt="" /> S-2XL
                </div>
              </div>
              <div className="home-desc">
                <div className="home-price">
                  <span>48₼</span>
                  <button className="home-design-button">Sifariş et</button>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/productcheck">
            <div className="home-product-card">
              <div className="image">
                <img src={black_hoodie4} alt="" className="hover-img" />
                <img src={white_hoodie4} alt="" />
              </div>
              <hr />
              <div className="home-product-name">Kapşonlu Sviter</div>
              <div className="home-detail">
                <div className="home-colors">
                  <div
                    className="color"
                    style={{ backgroundColor: "#DEDEDE" }}
                  ></div>
                  <div
                    className="color"
                    style={{ backgroundColor: "#000000" }}
                  ></div>
                </div>
                <div className="home-size">
                  <span>/</span> <img src={size} alt="" /> S-2XL
                </div>
              </div>
              <div className="home-desc">
                <div className="home-price">
                  <span>48₼</span>
                  <button className="home-design-button">Sifariş et</button>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/productcheck">
          <div className="home-product-card">
            <div className="image">
            <img src={black_hoodie5} alt="" className="hover-img" />
            <img src={white_hoodie5} alt="" />
            </div>
            <hr />
            <div className="home-product-name">Kapşonlu Sviter</div>
            <div className="home-detail">
              <div className="home-colors">
                <div
                  className="color"
                  style={{ backgroundColor: "#DEDEDE" }}
                ></div>
                <div
                  className="color"
                  style={{ backgroundColor: "#000000" }}
                ></div>
              </div>
              <div className="home-size">
                <span>/</span>
                <img src={size} alt="" /> S-2XL
              </div>
            </div>
            <div className="home-desc">
              <div className="home-price">
                <span>48₼</span>
                <button className="home-design-button">Sifariş et</button>
              </div>
            </div>
          </div>
          </Link>
          <Link to="/productcheck">
            <div className="home-product-card">
              <div className="image">
              <img src={black_hoodie6} alt="" className="hover-img" />
              <img src={white_hoodie6} alt="" />
              </div>
              <hr />
              <div className="home-product-name">Kapşonlu Sviter</div>
              <div className="home-detail">
                <div className="home-colors">
                  <div
                    className="color"
                    style={{ backgroundColor: "#DEDEDE" }}
                  ></div>
                  <div
                    className="color"
                    style={{ backgroundColor: "#000000" }}
                  ></div>
                </div>
                <div className="home-size">
                  <span>/</span> <img src={size} alt="" /> S-2XL
                </div>
              </div>
              <div className="home-desc">
                <div className="home-price">
                  <span>48₼</span>
                  <button className="home-design-button">Sifariş et</button>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/productcheck">
            <div className="home-product-card">
              <div className="image">
                <img src={black_hoodie7} alt="" className="hover-img" />
                <img src={white_hoodie7} alt="" />
              </div>
              <hr />
              <div className="home-product-name">Kapüşonlu Sviter</div>
              <div className="home-detail">
                <div className="home-colors">
                  <div
                    className="color"
                    style={{ backgroundColor: "#DEDEDE" }}
                  ></div>
                  <div
                    className="color"
                    style={{ backgroundColor: "#000000" }}
                  ></div>
                </div>
                <div className="home-size">
                  <span>/</span> <img src={size} alt="" /> S-2XL
                </div>
              </div>
              <div className="home-desc">
                <div className="home-price">
                  <span>48₼</span>
                  <button className="home-design-button">Sifariş et</button>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/productcheck">
            <div className="home-product-card">
              <div className="image">
              <img src={black_hoodie8} alt="" className="hover-img" />
              <img src={white_hoodie8} alt="" />
              </div>
              <hr />
              <div className="home-product-name">Kapşonlu Sviter</div>
              <div className="home-detail">
                <div className="home-colors">
                  <div
                    className="color"
                    style={{ backgroundColor: "#DEDEDE" }}
                  ></div>
                  <div
                    className="color"
                    style={{ backgroundColor: "#000000" }}
                  ></div>
                </div>
                <div className="home-size">
                  <span>/</span> <img src={size} alt="" /> S-2XL
                </div>
              </div>
              <div className="home-desc">
                <div className="home-price">
                  <span>48₼</span>
                  <button className="home-design-button">Sifariş et</button>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="home-page-part3">
        <p>Bizə güvənən brendlər</p>
        <Link 
  to="/about" 
  onClick={(e) => {
    e.preventDefault(); 
    window.open("https://www.instagram.com/atlaz.wear?igsh=MWU5bnV1ejVjbWVkbw%3D%3D&utm_source=qr", "_blank"); 
  }}
>
  <div className="home-page-logos">
          <img src={homepagelogo} alt="" />
          <img src={homepagelogo} alt="" />
          <img src={homepagelogo} alt="" />
          <img src={homepagelogo} alt="" />
          <img src={homepagelogo} alt="" />
        </div></Link>
      </div>
    </div>
  );
};

export default HomePage;