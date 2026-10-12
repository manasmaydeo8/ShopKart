import "./Home.css";
import { MoveRight } from "lucide-react";
import { Star } from "lucide-react";
import { ShoppingCartPlus } from "lucide-react";

const products = [
  {
    id: 1,
    name: "boAt Rockerz 450",
    category: "Electroncis",
    price: "1,599",
    rating: 4.5,
    reviews: 1200,
    image: "/Images/products/headphones.png",
  },
  {
    id: 2,
    name: "Noise ColorFit Pro 4",
    category: "Electroncis",
    price: "2,999",
    rating: 4.5,
    reviews: 1200,
    image: "/Images/products/noisefit.png",
  },
  {
    id: 3,
    name: "Red Tape Sneakers",
    category: "Fasion",
    price: "2,099",
    rating: 4.5,
    reviews: 900,
    image: "/Images/products/sneakers.png",
  },
  {
    id: 4,
    name: "Levi's Jeans",
    category: "Fasion",
    price: "2,099",
    rating: 4.5,
    reviews: 1240,
    image: "/Images/products/jeans.png",
  },
  {
    id: 5,
    name: "boAt Airdopes 141",
    category: "Electroncis",
    price: "1,599",
    rating: 4.5,
    reviews: 4200,
    image: "/Images/products/airdopes.png",
  },
  {
    id: 6,
    name: "Iphone 17 pro max",
    category: "Electroncis",
    price: "1,3,599",
    rating: 4.5,
    reviews: 12000,
    image: "/Images/products/iphone.png",
  },
  {
    id: 7,
    name: "Puma Shoes",
    category: "Fasion",
    price: "2,599",
    rating: 4.5,
    reviews: 1000,
    image: "/Images/products/puma_shoes.png",
  },
  {
    id: 8,
    name: "Samsung M14 5G ",
    category: "Electroncis",
    price: "31,599",
    rating: 4.5,
    reviews: 12000,
    image: "/Images/products/Samsung_phone.png",
  },
];

function Home() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-content">
          <h1>
            Good Choices <br />
            <span>Great Prices.</span>
          </h1>
          <p>
            Everything you need,
            <br />
            delivered to your door.
          </p>
          <div className="hero-btn">
            <button className="shop-btn">
              Shop Now <MoveRight />
            </button>
            <button className="deal-btn"> Explore Deals</button>
          </div>

          <div className="hero-benefits">
            <div className="bene-items">
              <img src="/icons/secure.png" alt="" />
              <p>100% Secure Payments</p>
            </div>
            <div className="bene-items">
              <img src="/icons/clock.png" alt="" />
              <p>7 Days Easy Returns</p>
            </div>
            <div className="bene-items">
              <img src="/icons/express-delivery.png" alt="" />
              <p>Fast & Free Delivery</p>
            </div>
          </div>
        </div>
      </section>
      {/* Shop Category */}
      <section className="category">
        <div className="heading">
          <h2>Shop by Category</h2>
          <a href="#">
            View All Category <MoveRight className="arrow" size={"40px"} />
          </a>
        </div>

        <div className="list">
          <div className="card electronics">
            <img src="/Images/category-electronics.png" alt="" />
            <h3>Electronics</h3>
            <p>1200+ Products</p>
          </div>
          <div className="card fashion">
            <img src="/Images/category-fashion.png" alt="" />
            <h3>fashion</h3>
            <p>1500+ Products</p>
          </div>
          <div className="card home">
            <img src="/Images/category-home.png" alt="" />
            <h3>Home & Kitchen</h3>
            <p>1500+ Products</p>
          </div>
          <div className="card beauty">
            <img src="/Images/category-beauty.png" alt="" />
            <h3>beauty</h3>
            <p>1400+ Products</p>
          </div>
          <div className="card sports">
            <img src="/Images/category-fitness.png" alt="" />
            <h3>fitness</h3>
            <p>1000+ Products</p>
          </div>
          <div className="card books">
            <img src="/Images/category-books.png" alt="" />
            <h3>books</h3>
            <p>500+ Products</p>
          </div>
        </div>
      </section>

      <section className="products">
        <div className="sec-heading">
          <div className="trend-heading ">
            <h2 className="title-trend">
              <span className="trending-icons">
                <img src="/icons/trending.png" alt="trending" />
              </span>
              <span>
                Trending <strong>Now</strong>
              </span>
            </h2>
            <div className="heading1">
              <p>Most Populer Choices this week</p>
              <a href="/products" className="">
                View All Products <MoveRight className="arrow" size={"40px"} />
              </a>
            </div>
          </div>
        </div>
        {/* trending Page */}
        <div className="product-grid">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <div className="product-img2">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-details">
                <div className="product-meta">
                  <span className="product-category">{product.category}</span>

                  <span className="product-rating">
                    <Star color="#f2eb07" />
                    {product.rating} ({product.reviews})
                  </span>
                </div>
                <h3>{product.name}</h3>
                <div className="product-price">₹{product.price}</div>
                <div className="product-action">
                  <button className="buynow-btn">Buy Now</button>

                  <button className="cart-btn">
                    <ShoppingCartPlus className="img"/>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
