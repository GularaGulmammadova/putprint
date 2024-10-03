/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./Products.css";
import { CiSearch } from "react-icons/ci";
import white_tshirt from "./../../site assets/t-shirt oversize/white/ui kart/tshirta.png";
import black_tshirt from "./../../site assets/t-shirt oversize/black/ui kart/tshirt.png";
import hoodie from "./../../site assets/hoody/white/ui kart/hoodie_w.png";
import black_hoodie from './../../site assets/hoody/black/ui kart/hoodie_B.png'
import sweater from "./../../site assets/sweater/black/ui kart/sweater_b_ui.png";
import white_sweater from './../../site assets/sweater/white/ui kart/sweater_w_ui.png'
import cap from "./../../site assets/cap/cap.png";
import bag from "./../../site assets/eco bag/ui cardd/eco-bag.png";
import needle from "./../../site assets/logo and icons/needle.png";
import size from "./../../site assets/logo and icons/size.png";

const Products = () => {

  return (
    <div className="product-grid-container">
      <div className="page-title">Məhsulu seçin</div>
      <p className="subtitle">
        Sizin stiliniz, sizin seçiminiz – Köynəklərdən geyim kolleksiyalarına
      </p>
      <div className="search-bar">
       <div className="search-icon">
        <CiSearch />
       </div>
        <input
          type="text"
          placeholder="Məhsulları, markaları və kateqoriyaları axtarın"
        />
      </div>
      <div className="product-cards">
        <div className="product-card">
          <img src={white_tshirt} alt="" />
          <img src={black_tshirt} alt="" className="hover-img" />
          <hr />
          <div className="product-name">Oversize t-shirt</div>
          <div className="detail">
            <div className="colors">
              <div
              data-color="white"
                className="color"
                style={{ backgroundColor: "#DEDEDE" }}
              ></div>
              <div
                className="color"
                data-color="black"
                style={{ backgroundColor: "#000000" }}
              ></div>
            </div>
            <div className="size">
              <span>/</span> <img src={size} alt="" />
              S-2XL
            </div>
          </div>
          <div className="price">
            <span>30-34₼</span>
            <button className="design-button">Dizayn et</button>
          </div>
        </div>
        <div className="product-card">
          <img src={black_tshirt} alt="" />
          <img src={white_tshirt} alt="" className="hover-img" />
          <hr />
          <div className="product-name">T-shirt</div>
          <div className="detail">
            <div className="colors">
              <div
                className="color"
                style={{ backgroundColor: "#DEDEDE" }}
              ></div>
              <div
                className="color"
                style={{ backgroundColor: "#000000" }}
              ></div>
            </div>
            <div className="size">
              <span>/</span> <img src={size} alt="" /> S-2XL
            </div>
          </div>
          <div className="price">
            <span>20-24₼</span>
            <button className="design-button">Dizayn et</button>
          </div>
        </div>
        <div className="product-card">
          <img src={hoodie} alt="" />
          <img src={black_hoodie} alt="" className="hover-img" />
          <hr />
          <div className="product-name">Kapşonlu sviter</div>
          <div className="detail">
            <div className="colors">
              <div
                className="color"
                style={{ backgroundColor: "#DEDEDE" }}
              ></div>
              <div
                className="color"
                style={{ backgroundColor: "#000000" }}
              ></div>
            </div>
            <div className="size">
              <span>/</span> <img src={size} alt="" />
              S-2XL
              <div className="material">
                <span>/</span><img src={needle} alt="" />2-3 iplik
              </div>
            </div>
          </div>
          <div className="price">
            <span>35-44₼</span>
            <button className="design-button">Dizayn et</button>
          </div>
        </div>
        <div className="product-card">
          <img src={sweater} alt="" />
          <img src={white_sweater} alt="" className="hover-img" />
          <hr />
          <div className="product-name">Sviter</div>
          <div className="detail">
            <div className="colors">
              <div
                className="color"
                style={{ backgroundColor: "#DEDEDE" }}
              ></div>
              <div
                className="color"
                style={{ backgroundColor: "#000000" }}
              ></div>
            </div>
            <div className="size">
              <span>/</span> <img src={size} alt="" /> S-2XL
              <div className="material">
                <span>/</span>
                <img src={needle} alt="" />
                2-3 iplik
              </div>
            </div>
          </div>
          <div className="price">
            <span>30-39₼</span>
            <button className="design-button">Dizayn et</button>
          </div>
        </div>
        <div className="product-card">
          <img src={cap} alt="" />
          <hr />
          <div className="product-name">Kepka</div>
          <div className="detail">
            <div className="colors">
              <div
                className="color"
                style={{ backgroundColor: "#DEDEDE" }}
              ></div>
              <div
                className="color"
                style={{ backgroundColor: "#000000" }}
              ></div>
            </div>
            <div className="size">
              <span>/</span>
              <img src={size} alt="" /> S-2XL
              <div className="material">
                <span>/</span>
                <img src={needle} alt="" />
                2-3 iplik
              </div>
            </div>
          </div>
          <div className="price">
            <span>10-16₼</span>
            <button className="design-button">Dizayn et</button>
          </div>
        </div>
        <div className="product-card">
          <img src={bag} alt="" />
          <hr />
          <div className="product-name" style={{marginBottom: '50px'}}>Eko çanta</div>
          {/* <div className="detail">
            <div className="colors">
              <div
                className="color"
                style={{ backgroundColor: "#DEDEDE" }}
              ></div>
              <div
                className="color"
                style={{ backgroundColor: "#000000" }}
              ></div>
            </div>
            <div className="size">
              <span>/</span> <img src={size} alt="" />
              S-2XL
            </div>
          </div> */}
          <div className="price">
            <span>12-16₼</span>
            <button className="design-button">Dizayn et</button>
          </div>
        </div>
      </div>
      {/* <div className="product-cards">
        <div className="product-card">
        <div className="product-img">
          <img src={white_tshirt} alt="" />
        </div>
        <div className="product-name">Oversize t-shirt</div>
        <div className="product-colors">
        <div className="color"
                style={{ backgroundColor: "#DEDEDE" }}
              ></div>
              <div
                className="color"
                style={{ backgroundColor: "#000000" }}
              ></div>
          <div className="product-detail">
            <div className="size">
            <span>/</span><img src={size} alt="" /><p>S-2XL</p>
            </div>
          </div>
          <div className="product-desc">
            <p className="price">30-34</p>
          </div>
          <button className="design-button">Dizayn et</button>
        </div>
      </div>
      <div className="product-card">
        <div className="product-img">
          <img src={white_tshirt} alt="" />
        </div>
        <div className="product-name">Oversize t-shirt</div>
        <div className="product-colors">
        <div className="color"
                style={{ backgroundColor: "#DEDEDE" }}
              ></div>
              <div
                className="color"
                style={{ backgroundColor: "#000000" }}
              ></div>
          <div className="product-detail">
            <div className="size">
            <span>/</span><img src={size} alt="" /><p>S-2XL</p>
            </div>
          </div>
          <div className="product-desc">
            <p className="price">30-34</p>
          </div>
          <button className="design-button">Dizayn et</button>
        </div>
      </div>
      <div className="product-card">
        <div className="product-img">
          <img src={white_tshirt} alt="" />
        </div>
        <div className="product-name">Oversize t-shirt</div>
        <div className="product-colors">
        <div className="color"
                style={{ backgroundColor: "#DEDEDE" }}
              ></div>
              <div
                className="color"
                style={{ backgroundColor: "#000000" }}
              ></div>
          <div className="product-detail">
            <div className="size">
            <span>/</span><img src={size} alt="" /><p>S-2XL</p>
            </div>
          </div>
          <div className="product-desc">
            <p className="price">30-34</p>
          </div>
          <button className="design-button">Dizayn et</button>
        </div>
      </div>
      <div className="product-card">
        <div className="product-img">
          <img src={white_tshirt} alt="" />
        </div>
        <div className="product-name">Oversize t-shirt</div>
        <div className="product-colors">
        <div className="color"
                style={{ backgroundColor: "#DEDEDE" }}
              ></div>
              <div
                className="color"
                style={{ backgroundColor: "#000000" }}
              ></div>
          <div className="product-detail">
            <div className="size">
            <span>/</span><img src={size} alt="" /><p>S-2XL</p>
            </div>
          </div>
          <div className="product-desc">
            <p className="price">30-34</p>
          </div>
          <button className="design-button">Dizayn et</button>
        </div>
      </div>
      <div className="product-card">
        <div className="product-img">
          <img src={white_tshirt} alt="" />
        </div>
        <div className="product-name">Oversize t-shirt</div>
        <div className="product-colors">
        <div className="color"
                style={{ backgroundColor: "#DEDEDE" }}
              ></div>
              <div
                className="color"
                style={{ backgroundColor: "#000000" }}
              ></div>
          <div className="product-detail">
            <div className="size">
            <span>/</span><img src={size} alt="" /><p>S-2XL</p>
            </div>
          </div>
          <div className="product-desc">
            <p className="price">30-34</p>
          </div>
          <button className="design-button">Dizayn et</button>
        </div>
      </div>
      <div className="product-card">
        <div className="product-img">
          <img src={white_tshirt} alt="" />
        </div>
        <div className="product-name">Oversize t-shirt</div>
        <div className="product-colors">
        <div className="color"
                style={{ backgroundColor: "#DEDEDE" }}
              ></div>
              <div
                className="color"
                style={{ backgroundColor: "#000000" }}
              ></div>
          <div className="product-detail">
            <div className="size">
            <span>/</span><img src={size} alt="" /><p>S-2XL</p>
            </div>
            <div className="thread"><span>/</span><img src={needle} alt="" />2-3</div>
          </div>
          <div className="product-desc">
            <p className="price">30-34</p>
          </div>
          <button className="design-button">Dizayn et</button>
        </div>
      </div>
      </div> */}
    </div>
  );
};

export default Products;
