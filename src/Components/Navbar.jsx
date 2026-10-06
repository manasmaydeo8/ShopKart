import "./Navbar.css";
import { Heart } from "lucide-react";
import { ShoppingCartPlus } from "lucide-react";
import { Search } from "lucide-react";
import { Handbag } from "lucide-react";

export default function Navbar() {
  return (
    <>
      <div className="top-bar">
        <div className="container-fluid">
          <span className="new-badge mx-2">NEW</span>
          Free shipping on orders above ₹499 | Easy 7-day returns
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <nav className="navbar navbar-expand-lg bg-body-tertiary Main-nav">
            <div>
              <a href="/Pages/Home.jsx" className="brand-logo">
                <Handbag color="#a10505" size={30} />
              </a>
              <span className="logo-name">
                <span className="shop">Shop</span>Kart
              </span>

              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex">
                  <li className="nav-item dropdown dropdown-btn">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      All Categories
                    </a>

                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                      </li>

                      <li>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>

                      <li>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-items">
                    <a className="nav-link active" aria-current="page" href="#">
                      Home
                    </a>
                  </li>

                  <li className="nav-items">
                    <a className="nav-link active" aria-current="page" href="#">
                      Product
                    </a>
                  </li>

                  <li className="nav-items">
                    <a className="nav-link active" aria-current="page" href="#">
                      Deals
                    </a>
                  </li>

                  <li className="nav-items">
                    <a className="nav-link active" aria-current="page" href="#">
                      About Us
                    </a>
                  </li>

                  <li className="nav-items">
                    <a className="nav-link active" aria-current="page" href="#">
                      Contact
                    </a>
                  </li>
                </ul>

                <form className="d-flex search-form" role="search">
                  <div className="search-container">
                    <input
                      type="text"
                      className="search-input"
                      placeholder="Search for products..."
                    />

                    <button className="search-button" type="submit">
                      <Search size={20} />
                    </button>
                  </div>
                </form>

                <div className="Icons">
                  <a href="#">
                    <Heart size={30} />
                  </a>
                </div>

                <div className="Icons">
                  <a href="#">
                    <ShoppingCartPlus size={30} />
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
