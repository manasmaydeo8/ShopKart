// import React from 'react'
// import {useNavigate} from 'react-router-dom'
import "./Product.css";
const product = [
  {
    id: 1,
    Nmae: "Samsung Galaxy M14 5G",
    category: "Electronics",
    originalPrice: "14,599",
    price: "12,999",
    rating: 4.4,
    review: 1890,
    discount: "17%",
    isAvailable: true,
    image: "Images/products/Samsung_phone.png",
  },
  {
    id: 2,
    Nmae: "Samsung Galaxy M14 5G",
    category: "Electronics",
    originalPrice: "14,599",
    price: "12,999",
    rating: 4.4,
    review: 1890,
    discount: "17%",
    isAvailable: true,
    image: "Images/products/Samsung_phone.png",
  },
  {
    id: 3,
    Nmae: "Samsung Galaxy M14 5G",
    category: "Electronics",
    originalPrice: "14,599",
    price: "12,999",
    rating: 4.4,
    review: 1890,
    discount: "17%",
    isAvailable: true,
    image: "Images/products/Samsung_phone.png",
  },
  {
    id: 3,
    Nmae: "Samsung Galaxy M14 5G",
    category: "Electronics",
    originalPrice: "14,599",
    price: "12,999",
    rating: 4.4,
    review: 1890,
    discount: "17%",
    isAvailable: true,
    image: "Images/products/Samsung_phone.png",
  },
  {
    id: 4,
    Nmae: "Samsung Galaxy M14 5G",
    category: "Electronics",
    originalPrice: "14,599",
    price: "12,999",
    rating: 4.4,
    review: 1890,
    discount: "17%",
    isAvailable: true,
    image: "Images/products/Samsung_phone.png",
  },
  {
    id: 5,
    Nmae: "Samsung Galaxy M14 5G",
    category: "Electronics",
    originalPrice: "14,599",
    price: "12,999",
    rating: 4.4,
    review: 1890,
    discount: "17%",
    isAvailable: true,
    image: "Images/products/Samsung_phone.png",
  },
  {
    id: 6,
    Nmae: "Samsung Galaxy M14 5G",
    category: "Electronics",
    originalPrice: "14,599",
    price: "12,999",
    rating: 4.4,
    review: 1890,
    discount: "17%",
    isAvailable: true,
    image: "Images/products/Samsung_phone.png",
  },
  {
    id: 7,
    Nmae: "Samsung Galaxy M14 5G",
    category: "Electronics",
    originalPrice: "14,599",
    price: "12,999",
    rating: 4.4,
    review: 1890,
    discount: "17%",
    isAvailable: true,
    image: "Images/products/Samsung_phone.png",
  },
];
function Product() {
  return (
    <>
      <main className="product-page">
        <section className="product-banner">
          <div className="banner-content">
            <h1>
              All <span>Products</span>
            </h1>
            <p>Explore our wide range of top quility products</p>
          </div>
        </section>

        <section className="product-content">
          <aside className="filter-sidebar">
            <div className="filter-title">
              <h3>Filter</h3>
              <button>Clear All</button>
            </div>
            <div className="filter-group">
              <h4>Categories</h4>
              <label htmlFor="">
                <input type="checkbox" />
                Electronics
              </label>
              <label htmlFor="">
                <input type="checkbox" />
                Fasion
              </label>
              <label htmlFor="">
                <input type="checkbox" />
                Home & Kitchen
              </label>
              <label htmlFor="">
                <input type="checkbox" />
                Beauty
              </label>
              <label htmlFor="">
                <input type="checkbox" />
                Sports
              </label>
              <label htmlFor="">
                <input type="checkbox" />
                Books
              </label>
            </div>
            <div className="filter-group">
              <h4>Price Range</h4>
              <input type="range" min="199" max="20000" />
              <div className="price-range">
                <span>₹199</span>
                <span>₹20000+</span>
              </div>
            </div>
            <div className="filter-group">
              <label htmlFor="">
                <input type="checkbox" />
                ★★★★★ & above
              </label>
              <label htmlFor="">
                <input type="checkbox" />
                ★★★★☆ & above
              </label>
              <label htmlFor="">
                <input type="checkbox" />
                ★★★☆☆ & above
              </label>
            </div>

            <div className="filter-group">
              <h4>Availbality</h4>
              <label htmlFor="">
                <input type="checkbox" />
                In Stock
              </label>
              <label htmlFor="">
                <input type="checkbox" />
                Out of Stock
              </label>
            </div>
          </aside>
          {/* <div className="product-area">
            <div className="product-header">
              <p>Showing all products</p>
            </div>
          </div> */}
          <div className="product-grid">
            {product.map((product) => (
              <div className="product-card" key={product.id}>
                <div className="product-image">
                  {product.discount && (
                    <span className="discount-badge">-{product.discount}</span>
                  )}

                  <button className="wishlist-button"> ♡ </button>
                  <img src={product.image} alt={product.name} />
                </div>

                <div className="product-info">
                  <small>{product.category}</small>
                  <h3>{product.name}</h3>
                  <div className="rating">
                    ⭐ {product.rating}
                    <span> ({product.review})</span>
                  </div>

                  <div className="product-price">
                    ₹{product.price}  
                    <del>  ₹{product.originalPrice} </del>
                  </div>
                  <button className="add-cart-button"> 🛒 Add to Cart </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default Product;
