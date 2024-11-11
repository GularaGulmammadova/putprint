// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import "./ProductDetail.css";
import { Link } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [activeImage, setActiveImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState("");
  const [activeSize, setActiveSize] = useState("");
  const [activeThreads, setActiveThreads] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://put-print-ky689.ondigitalocean.app/api/products/${id}/`
        );
        const productData = response.data;
        setProduct(productData);
        setMainImage(productData.images.main || "");
        setSelectedColor(
          productData.colors && productData.colors.length > 0
            ? productData.colors[0].color
            : ""
        );
      } catch (error) {
        setError("Məhsulu yükləyərkən xəta baş verdi.");
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleThumbnailClick = (image, index) => {
    setMainImage(image);
    setActiveImage(index);
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
    if (product) {
      const colorProduct = product.colors.find((c) => c.color === color);
      setMainImage(colorProduct ? colorProduct.image : product.images.main);
    }
  };

  const handleSizeClick = (size) => {
    setActiveSize(size);
  };

  const handleThreadsClick = (threads) => {
    setActiveThreads(threads);
  };

  if (error) {
    return <div>{error}</div>;
  }

  if (!product) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div
          style={{
            width: "50px",
            height: "50px",
            border: "4px solid  rgba(255, 255, 255, 0.3)",
            borderBottom: "4px solid #ae4559",
            borderTop: "4px solid #f15620",
            borderRadius: "50%",
            animation: "spin 1s linear infinite",
          }}
        ></div>

        <style>
          {`
              @keyframes spin {
                  0% { transform: rotate(0deg); }
                  100% { transform: rotate(360deg); }
              }
          `}
        </style>
      </div>
    );
  }

  const images = product.images?.hover
    ? [product.images.main, product.images.hover]
    : [product.images.main];

  return (
    <div className="container">
      <div className="product-container">
        <div className="product-detail">
          <div className="product-image">
            <img src={mainImage} alt={product.name} className="main-image" />
            <div className="thumbnail-images">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Variant ${index + 1}`}
                  className={activeImage === index ? "active" : ""}
                  onClick={() => handleThumbnailClick(image, index)}
                />
              ))}
            </div>
          </div>
          <div className="product-info">
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            {product.colors && product.colors.length > 0 && (
              <div className="color-variants">
                <p>Rəng variantları</p>
                <div className="colors">
                  {product.colors.map((colorOption) => (
                    <span
                      key={colorOption.color}
                      className={`color-circle ${
                        selectedColor === colorOption.color ? "selected" : ""
                      }`}
                      style={{ backgroundColor: colorOption.hex }}
                      onClick={() => handleColorChange(colorOption.color)}
                    ></span>
                  ))}
                </div>
              </div>
            )}
            {product.threads && (
              <div className="threads-variants">
                <p>Material</p>
                <div className="threads">
                  {product.threads.split(",").map((threads) => (
                    <button
                      key={threads}
                      className={`threads-box ${
                        activeThreads === threads ? "active-threads" : ""
                      }`}
                      onClick={() => handleThreadsClick(threads)}
                    >
                      {threads}
                    </button>
                  ))}
                </div>
              </div>
            )}
            {product.sizes && (
              <div className="size-variants">
                <p>Ölçü</p>
                <div className="sizes">
                  {product.sizes.split(",").map((size) => (
                    <button
                      key={size}
                      className={`size-box ${
                        activeSize === size ? "active-size" : ""
                      }`}
                      onClick={() => handleSizeClick(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}
            <div className="product-price">
              <span>{product.price}</span>
              <Link to={`/designer/${id}`}>
                <button className="start-design-button">Dizayna başla</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
