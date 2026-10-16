import "./Navbar.css";
import {
  Heart,
  ShoppingCart,
  Search,
  Handbag,
  ChevronDown,
  Menu,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      {/* ================= TOP BAR ================= */}
      <div className="top-bar">
        <div className="top-bar-content">
          <span className="new-badge">NEW</span>

          <span>Free shipping on orders above ₹499 | Easy 7-day returns</span>
        </div>
      </div>

      {/* ================= NAVBAR ================= */}
      <nav className="main-navbar">
        {/* LOGO */}
        <a href="/" className="brand-logo">
          <Handbag className="logo-icon" size={30} />

          <span className="logo-name">
            <span className="shop">Shop</span>
            <span className="kart">Kart</span>
          </span>
        </a>

        {/* ================= CATEGORIES ================= */}
        <div className="category-dropdown">
          <button className="category-button">
            <span>All Categories</span>
            <ChevronDown size={17} />
          </button>

          <div className="category-menu">
            <a href="#">Electronics</a>
            <a href="#">Fashion</a>
            <a href="#">Footwear</a>
            <a href="#">Accessories</a>
            <a href="#">Home & Living</a>
          </div>
        </div>

        {/* ================= NAVIGATION ================= */}
        <div className="nav-links">
          <Link to="/">Home</Link>

          <Link to="/product">Product</Link>

          <a href="#trending">Trending</a>

          <Link to="/About">About Us</Link>

          <Link to="/Contact">Contact</Link>
        </div>

        {/* ================= SEARCH ================= */}
        <form className="search-form" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Search for products..."
            aria-label="Search products"
          />

          <button type="submit" aria-label="Search">
            <Search size={21} />
          </button>
        </form>

        {/* ================= ACTION ICONS ================= */}
        <div className="nav-actions">
          <a href="#" className="nav-icon" aria-label="Wishlist">
            <Heart size={27} />
          </a>

          <a href="#" className="nav-icon cart-icon" aria-label="Cart">
            <ShoppingCart size={29} />

            <span className="cart-count">0</span>
          </a>
        </div>
        <div className="dropdown account-dropdown">
          <button
            className="account-btn"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            aria-label="My Account"
          >
            <img
              src="/icons/profile-icon.png"
              alt="My Account"
              className="profile-icon"
            />
          </button>
          <ul className="dropdown-menu account-menu">
            <li>
              <Link className="dropdown-item" to="/login">Login</Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/register">register</Link>
            </li>
          </ul>
        </div>
        {/* MOBILE MENU */}
        <button className="mobile-menu" aria-label="Open menu">
          <Menu size={28} />
        </button>
      </nav>
    </>
  );
}
