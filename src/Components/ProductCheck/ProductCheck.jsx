// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import "./ProductCheck.css";
// import tshirt_oversize from "./../../site assets/t-shirt oversize/white/ui kart/tshirta.png";
import { useParams } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductCheck = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const [data, setdata] = useState();
  const getOrdering = async (id) => {
    try {
      const response = await axios.get(
        `https://put-print-ky689.ondigitalocean.app/api/products/${id}/`
      );
      setdata(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOrdering(id);
  }, [id]);

  return (
    <div className="container" style={{ width: "100%", maxWidth: "800px" }}>
      <div className="product-check-box">
        <div className="check-box-heading">Məhsullar</div>
        <hr style={{ border: "1px solid #DEDEDE" }} />
        <div className="check-boxes">
          <div className="product-check-item-image">
            <img src={data && data.images.main} alt="tshirt" />
          </div>
          <div className="check-boxes-desc">
            <div className="check-box-title">{data && data.name}</div>
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
                {data && data.price} ₼ ×
                <input
                  type="number"
                  value={quantity}
                  onChange={handleQuantityChange}
                  className="check-quantity-input"
                  min="1"
                  defaultValue="1"
                />
                <div className="product-totally-price">
                  {data && data.price * quantity} ₼
                </div>
              </div>
            </div>
          </div>
        </div>
        <Link
          to=""
          onClick={(e) => {
            e.preventDefault();
            window.open(
              "https://api.whatsapp.com/send?phone=994506976357&text=Salam%0AM%C9%99hsulun%20%C3%B6d%C9%99ni%C5%9Fini%20etm%C9%99k%20%C3%BC%C3%A7%C3%BCn%20yaz%C4%B1rd%C4%B1m%20%F0%9F%98%8A",
              "_blank",
              "noopener,noreferrer"
            );
          }}
        >
          <button className="checkout-btn">
            <p className="checkout-text">Ödənişə keç</p>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCheck;