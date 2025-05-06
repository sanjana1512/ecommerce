// src/pages/Products.js
import chair1 from '../assets/chair1.webp';
import chair2 from '../assets/chair2.avif';

export default function Products() {
  return (
    <section className="py-5">
      <div className="container">
        <h2 className="fw-bold text-center mb-5">Featured Products</h2>
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="card h-100">
              <img src={chair1} className="card-img-top" alt="Chair 1" />
              <div className="card-body">
                <h5 className="card-title">Classic Wooden Chair</h5>
                <p className="card-text">Elegant, ergonomic, and made from premium oak.</p>
                <button className="btn btn-outline-dark">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card h-100">
              <img src={chair2} className="card-img-top" alt="Chair 2" />
              <div className="card-body">
                <h5 className="card-title">Modern Recliner</h5>
                <p className="card-text">Luxury recliner with leather finishing and adjustable headrest.</p>
                <button className="btn btn-outline-dark">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
