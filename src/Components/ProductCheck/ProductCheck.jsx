// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./ProductCheck.css";
import tshirt_oversize from "./../../site assets/t-shirt oversize/white/ui kart/tshirta.png";

const ProductCheck = () => {

    const [quantity, setQuantity] = useState(1);
  
    const handleQuantityChange = (e) => {
      setQuantity(e.target.value);
    };
  
    const price = 35; 

  return (
    <div className="container" style={{ width: "100%", maxWidth: "800px" }}>
      <div className="product-check-box">
        <div className="check-box-heading">Məhsullar</div>
        <hr style={{ border: "1px solid #DEDEDE" }} />
        <div className="check-boxes">
          <div className="product-check-item-image">
            <img src={tshirt_oversize} alt="tshirt" />
          </div>
          <div className="check-boxes-desc">
            <div className="check-box-title">
              Oversize T-shirt 
            </div>
            <div className="check-boxes-options">
              <div className="check-boxes-option">
                <label>Rəng</label>
                <select>
                  <option>Ağ</option>
                  <option>Qara</option>
                </select>
              </div>
              <div className="check-boxes-option">
                <label>Ölçü</label>
                <select>
                  <option>S</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                  <option>2XL</option>
                </select>
              </div>
            </div>
            <div className="check-box-info">
              <div className="prices-title">Qiyməti</div>
              <div className="product-prices">
                {price} ₼ ×
                <input
                  type="number"
                  value={quantity}
                  onChange={handleQuantityChange}
                  className="check-quantity-input"
                  min="1"
                  defaultValue="1"
                />
                <div className="product-totally-price">{price * quantity} ₼</div>
              </div>
            </div>
          </div>
        </div>
        <button className="checkout-btn">
          <p className="checkout-text">Ödənişə keç</p>
        </button>
      </div>
    </div>
  );
};

export default ProductCheck;