// src/pages/Home.js
import heroImage from '../assets/bed.jpg'; // Replace with your image path

export default function Home() {
  return (
    <section className="hero-section bg-white text-center py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1 className="fw-bold">Best Furniture Collection For Your Interior</h1>
            <h3 className="text-muted">Style, Comfort, and Quality at the Best Prices</h3>
            <p className="lead">Transform your home with our handpicked, high-quality furniture that combines elegance with functionality.</p>
            <ul className="list-unstyled text-start">
              <li>✔ Premium quality materials</li>
              <li>✔ Modern & classic designs</li>
              <li>✔ Affordable pricing</li>
              <li>✔ Fast & reliable delivery</li>
            </ul>
            <button className="btn btn-warning btn-lg mt-3" onClick={() => navigate('/shop')}>Explore Our Collection</button>
          </div>
          <div className="col-md-6">
            <img src={heroImage} alt="Featured Chair" className="img-fluid rounded" />
          </div>
        </div>
      </div>
    </section>
  );
}
