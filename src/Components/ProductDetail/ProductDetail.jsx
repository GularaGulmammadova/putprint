// eslint-disable-next-line no-unused-vars
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./ProductDetail.css";
import products from "../../Data/productsData";
import { Link } from "react-router-dom";


const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  const [mainImage, setMainImage] = useState("");
  const [activeImage, setActiveImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState("");
  const [activeSize, setActiveSize] = useState("");
  const [activeThreads, setActiveThreads] = useState("");

  useEffect(() => {
    if (product) {
      setMainImage(product.images.main || "");
      setSelectedColor(
        product.colors && product.colors.length > 0
          ? product.colors[0].color
          : ""
      );
    }
  }, [product]);

  const handleThumbnailClick = (image, index) => {
    setMainImage(image);
    setActiveImage(index);
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
    const colorProduct = products.find(
      (p) => p.name === product.name && p.colors.some((c) => c.color === color)
    );
    setMainImage(colorProduct ? colorProduct.images.main : product.images.main);
  };

  const handleSizeClick = (size) => {
    setActiveSize(size);
  };

  const handleThreadsClick = (threads) => {
    setActiveThreads(threads);
  };

  const images = product
    ? product.images.hover
      ? [product.images.main, product.images.hover]
      : [product.images.main]
    : [];

  if (!product) {
    return <div>Product not found</div>;
  }

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
              <Link to={`/designer/${id}`}><button className="start-design-button">Dizayna başla</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;