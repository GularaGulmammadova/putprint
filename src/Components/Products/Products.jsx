// eslint-disable-next-line no-unused-vars 
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Products.css";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://put-print-ky689.ondigitalocean.app/api/products/?ordering=id");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    setTimeout(() => setLoading(false), 1500);
    fetchProducts();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="container">
      <div className="product-grid-container">
        <div className="page-title">Məhsulu seçin</div>
        <p className="subtitle">
          Sənin Stilin, Sənin Seçimin – Köynəklərdən Geniş Geyim Kolleksiyalarına
        </p>
        <div className="search-bar">
          <div className="search-icons">
            <CiSearch />
          </div>
          <input
            type="text"
            placeholder="Məhsulları, markaları və kateqoriyaları axtarın"
          />
        </div>
        <div className="product-cards">
          {products.slice(0, 6).map((product) => ( 
            <Link to={`/productdetail/${product.id}`} key={product.id}>
              <div className="product-card">
                <div className="image">
                  {product.images?.main ? (
                    <img src={product.images.main} alt={product.name} />
                  ) : (
                    <p>No Image Available</p>
                  )}
                  {product.images?.hover && (
                    <img
                      src={product.images.hover}
                      alt={product.name}
                      className="hover-img"
                    />
                  )}
                </div>
                <hr />
                <div className="product-name">{product.name}</div>
                <div className="detail">
                  {product.colors && product.colors.length > 0 && (
                    <div className="colors">
                      {product.colors.map((color) => (
                        <div
                          key={color.color}
                          data-color={color.color}
                          className="color"
                          style={{ backgroundColor: color.hex }}
                        ></div>
                      ))}
                    </div>
                  )}
                  <div className="size">
                    <span>{product.sizeRange}</span>
                  </div>
                  {product.material && (
                    <div className="material">
                      <span>{product.material}</span>
                    </div>
                  )}
                </div>
                <div className="desc">
                  <div className="price">
                    <span>{product.price}₼</span>
                    <Link to="/products">
                      <button className="design-button">Dizayn et</button>
                    </Link>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;