// import React from "react";
import Navbar from "../Components/Navbar";
import { ShieldCheck } from "lucide-react";
import { Clock } from "lucide-react";
import { Truck } from "lucide-react";

import "./Home.css";

function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>
            Good Choices. <br /> <span>Great Prices.</span>
          </h1>

          <p>
            Everything you need, <br /> delivered to your door.
          </p>

          <div className="hero-buttons">
            <button className="shop-btn">Shop Now →</button>
            <button className="deal-btn">Explore Deals</button>
          </div><br />
          {/* Hero Benefits */}
          <div className="hero-benefits">
            <div className="benefit-item">
              <ShieldCheck color="#22927a" size={"40"} />
              <span>100% Secure Payments</span>
            </div><br />
            <div className="benefit-item">
              <Clock color="#22927a" size={"40"} /> <span>7 Days Easy Returns</span>
            </div><br />
            <div className="benefit-item">
              <Truck color="#22927a" size={"40"} /> <span>Fast & Free Delivery</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Home;
