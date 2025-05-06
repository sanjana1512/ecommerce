// src/pages/About.js
export default function About() {
    return (
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="fw-bold text-center mb-4">About Comforty</h2>
          <p className="text-center mb-5">Your trusted furniture brand since 2001, delivering quality and comfort to homes across the globe.</p>
          <div className="row">
            <div className="col-md-6">
              <h4>Our Mission</h4>
              <p>To create beautiful, sustainable, and comfortable living spaces by offering premium-quality furniture at affordable prices.</p>
            </div>
            <div className="col-md-6">
              <h4>Why Choose Us?</h4>
              <ul>
                <li>20+ years of excellence</li>
                <li>Eco-friendly manufacturing</li>
                <li>Exceptional customer service</li>
                <li>Customized design solutions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
  