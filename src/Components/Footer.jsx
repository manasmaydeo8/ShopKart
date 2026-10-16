// import React from 'react'
import "./Footer.css"
export default function Footer() {
  return (
    <>
      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-brand">
            <div className="footer-logo">Shop<span>Kart</span></div>
            <p>Your one-step destiantion for quality <br />products at the best prices.</p>
            <div className="footer-socials">
              <a href="#" aria-label="Facebook">f</a>
              <a href="#" aria-label="Instagram">◎</a>
              <a href="#" aria-label="Twitter">♥</a>
              <a href="#" aria-label="YouTube">▶</a>
            </div>
          </div>

          <div className="footer-column">
            <h3>Shop</h3>
            <a href="/products">All Products</a>
            <a href="/products">Categories</a>
            <a href="/products">New Arrivals</a>
            <a href="/products">Best Sellers</a>
            <a href="/products">Deals of the Day</a>
          </div>

          <div className="footer-column">
            <h3>Customer Service</h3>
            <a href="/contact">Contact Us</a>
            <a href="/contact">FAQs</a>
            <a href="/contact">Shipping Policy</a>
            <a href="/contact">Returns & Refunds</a>
            <a href="/contact">Track Order</a>
          </div>

          <div className="footer-column">
            <h3>Company</h3>
            <a href="/contact">About Us</a>
            <a href="/contact">Careers</a>
            <a href="/contact">privacy Policy</a>
            <a href="/contact">Terms & Conditions</a>
            <a href="/contact">Sell on ShopKart</a>
          </div>

          <div className="footer-payments">
            <h3>We Accept</h3>
            <div className="payment-methods">
              <span className="payment"><img src="/Images/visa.png" alt="Visa" /></span>
              <span className="payment"><img src="/Images/mastercard.png" /></span>
              <span className="payment"><img src="/Images/upi.png" alt="UPI" /></span>
              <span className="payment"><img src="/Images/paytm.png" alt="Paytm" /></span>
            </div>
            <div className="secure-payment">
              <span className="lock-icon"><img src="/Images/footer-secure.png" /></span>
              <span>100% Secure Payments</span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">© 2026 ShopKart. All Rights Reserved</div>
      </footer>
    </>
  );
}


