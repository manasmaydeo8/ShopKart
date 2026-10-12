// import React from 'react'
// import {useNavigate} from 'react-router-dom'
import "./Product.css";
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
              <label htmlFor=""><input type="checkbox" />Electronics</label>
              <label htmlFor=""><input type="checkbox" />Fasion</label>
              <label htmlFor=""><input type="checkbox" />Home & Kitchen</label>
              <label htmlFor=""><input type="checkbox" />Beauty</label>
              <label htmlFor=""><input type="checkbox" />Sports</label>
              <label htmlFor=""><input type="checkbox" />Books</label>
            </div>
          </aside>
        </section>
      </main>
    </>
  );
}

export default Product;
