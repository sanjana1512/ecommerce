// src/pages/Shop.js
export default function Shop() {
    return (
      <section className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Shop Now</h2>
          <p className="mb-4">Discover your perfect furniture today. Shop by category or browse our entire collection.</p>
          <div className="row justify-content-center">
            <div className="col-md-4 mb-4">
              <div className="card p-3">
                <h4>Chairs</h4>
                <p>Comfortable and stylish chairs for every room.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card p-3">
                <h4>Sofas</h4>
                <p>Luxurious sofas for your living space.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card p-3">
                <h4>Tables</h4>
                <p>Functional and elegant tables for dining and work.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  