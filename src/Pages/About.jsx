import { Link } from "react-router-dom";
import "./About.css";

const brands = [
  { id: 1, name: "Samsung", Images: "/Images/brands/samsung.png" },
  { id: 2, name: "boAt", Images: "/Images/brands/boat.png" },
  { id: 3, name: "Puma", Images: "/Images/brands/puma.png" },
  { id: 4, name: "LG", Images: "/Images/brands/lg.png" },
  { id: 5, name: "Philips", Images: "/Images/brands/philips.png" },
  { id: 6, name: "The Ordinary", Images: "/Images/brands/ordinary.png" },
  { id: 7, name: "Nivea", Images: "/Images/brands/nivea.png" },
  { id: 8, name: "Himalaya", Images: "/Images/brands/himalaya.png" },
  { id: 9, name: "Apple", Images: "/Images/brands/apple.png" },
  { id: 10, name: "Fastrack", Images: "/Images/brands/fastrack.png" },
  { id: 11, name: "Amazon", Images: "/Images/brands/amazon.png" },
  { id: 12, name: "Levi's", Images: "/Images/brands/levis.png" },
  { id: 13, name: "Nike", Images: "/Images/brands/nike.png" },
  { id: 14, name: "Adidas", Images: "/Images/brands/adidas.png" },
  { id: 15, name: "Zara", Images: "/Images/brands/zara.png" },
  { id: 16, name: "H&M", Images: "/Images/brands/hm.png" },
  { id: 17, name: "Canon", Images: "/Images/brands/canon.png" },
  { id: 18, name: "Dyson", Images: "/Images/brands/dyson.png" },
  { id: 19, name: "Intel", Images: "/Images/brands/intel.png" },
  { id: 20, name: "Ray-Ban", Images: "/Images/brands/rayban.png" }
];

function About() {
  return (
    <>
      <main className="about-page">
        <section className="about-hero">
          <div className="about-content">
            <div className="about-label">
              <span></span>
              ABOUT US
            </div>

            <h1>About <span>us</span></h1>

            <h2>
              Making everyday shopping simpler,
              <br />
              faster and more enjoyable.
            </h2>

            <p>
              At ShopKart, we believe great products should be accessible
              to everyone. We are an online shopping destination offering
              a wide range of high-quality products at great prices,
              delivered right to your doorstep.
            </p>

            <p>
              From fashion and electronics to home essentials and more —
              we're here to make shopping easier, better, and more
              delightful for you.
            </p>

            <div className="about-buttons">
              <Link to="/products" className="shop-btn">
                Shop now <span>→</span>
              </Link>

              <a href="#brands" className="learn-btn">Learn more</a>
            </div>

            <div className="about-tagline">
              Shop Smarter, Live Better
              <span></span>
            </div>
          </div>
        </section>

        <section className="brands-section" id="brands">
          <div className="brands-heading">
            <h2>Trusted by leading brands</h2>

            <p>
              We're proud to partner with some of the world's most trusted
              brands to bring you the best products and shopping experience.
            </p>
          </div>

          <div className="brands-grid">
            {brands.map((brand) => (
              <div className="brand-item" key={brand.id}>
                <img src={brand.Images} alt={brand.name} />
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default About;