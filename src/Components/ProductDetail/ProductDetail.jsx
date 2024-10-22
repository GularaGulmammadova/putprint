// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./ProductDetail.css"; 
import w_tshirt_front from "./../../site assets/t-shirt oversize/white/mockup/W_F.png";
import w_tshirt_back from "./../../site assets/t-shirt oversize/white/mockup/W_B.png";

const ProductDetail = () => {
  const [mainImage, setMainImage] = useState(w_tshirt_front);
  const [activeImage, setActiveImage] = useState(0);

  const handleThumbnailClick = (image, index) => {
    setMainImage(image);
    setActiveImage(index);
  };

  const images = [w_tshirt_front, w_tshirt_back];

  const Show = () => {
    const modalDesign = document.getElementById('modalDesign');
    modalDesign.style.display = 'block';
  }

  return (
    <div className="container">
      <div className="product-container">
        <div className="product-detail">
          <div className="product-image">
            <img
              src={mainImage}
              alt="T-shirt"
              className="main-image"
            />
            <div className="thumbnail-images">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`t-shirt variant ${index + 1}`}
                  className={activeImage === index ? "active" : ""}
                  onClick={() => handleThumbnailClick(image, index)}
                />
              ))}
            </div>
          </div>
          <div className="product-info">
            <h1>Unisex Oversize Köynək</h1>
            <p>
              Bu unisex t-shirt, gündəlik istifadə üçün mükəmməl bir parça olaraq dizayn edilmişdir. 
              Bu t-shirt, istənilən stil ilə birləşdirə biləcəyiniz sadə və şık bir dizayna malikdir.
              Hər yerdə rahatlıqla geyinmək üçün mükəmməl bir seçimdir. 
              Yüksək keyfiyyətli pambıq materialdan hazırlanmış, nəfəs alan və rahat bir fit təqdim edir.
            </p>
            <div className="color-variants">
              <p>Rəng variantları</p>
              <div className="colors">
                <span className="color-circle" style={{ backgroundColor: "white" }}></span>
                <span className="color-circle" style={{ backgroundColor: "black" }}></span>
              </div>
            </div>
            <div className="size-variants">
              <p>Ölçü</p>
              <div className="sizes">
                <span className="size-box">S</span>
                <span className="size-box">M</span>
                <span className="size-box">L</span>
                <span className="size-box">XL</span>
                <span className="size-box">2XL</span>
              </div>
            </div>

            <div className="product-price">
              <span>30-34₼</span>
              <button onClick={() => Show()} className="start-design-button">Dizayna başla</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
