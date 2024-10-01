/* eslint-disable no-unused-vars */
import React from 'react'
import './Products.css'
import { CiSearch } from "react-icons/ci";
import white_tshirt from './../../site assets/t-shirt oversize/white/ui kart/tshirta.png'
import black_tshirt from './../../site assets/t-shirt oversize/black/ui kart/tshirt.png'

const Products = () => {    
const products = [
    {
      id: 1,
      name: "Oversize t-shirt",
      priceRange: "30-34 ₼",
      sizes: "S-2XL",
      colors: ["#000", "#fff"],
      img: {white_tshirt},
      thread: "2-3 iplik",
    },
    {
      id: 2,
      name: "T-shirt",
      priceRange: "20-24 ₼",
      sizes: "S-2XL",
      colors: ["#000", "#fff"],
      img: {black_tshirt},
    },
    {
      id: 3,
      name: "Kapşonlu sviter",
      priceRange: "35-44 ₼",
      sizes: "S-2XL",
      colors: ["#000", "#fff"],
      img: "hoodie.png",
      thread: "2-3 iplik",
    },
    {
      id: 4,
      name: "Sviter",
      priceRange: "30-39 ₼",
      sizes: "S-2XL",
      colors: ["#000", "#fff"],
      img: "sweater.png",
      thread: "2-3 iplik",
    },
    {
      id: 5,
      name: "Kepka",
      priceRange: "10-16 ₼",
      sizes: "S-2XL",
      colors: ["#000", "#fff"],
      img: "cap.png",
      thread: "2-3 iplik",
    },
    {
      id: 6,
      name: "Eko çanta",
      priceRange: "12-16 ₼",
      sizes: "S-2XL",
      colors: ["#000", "#fff"],
      img: "bag.png",
    },
  ];

  return (
    <div className="product-grid-container">
    <div className="page-title">Məhsulu seçin</div>
    <p className="subtitle">Sizin stiliniz, sizin seçiminiz – Köynəklərdən geyim kolleksiyalarına</p>
    <div className="search-bar">
    <CiSearch/><input type="text"  placeholder="Məhsulları, markaları və kateqoriyaları axtarın" />
    </div>

    <div className="product-grid">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <img src={product.img} alt={product.name} className="product-image" />
          <h3 className="product-name">{product.name}</h3>
          <div className="product-colors">
            {product.colors.map((color, index) => (
              <span key={index} className="color" style={{ backgroundColor: color }}></span>
            ))}
          </div>
          <div className="product-details">
            <span className="size-range">{product.sizes}</span>
            {product.thread && <span className="thread">{product.thread}</span>}
          </div>
          <div className="product-price">{product.priceRange}</div>
          <button className="design-button">Dizayn et</button>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Products