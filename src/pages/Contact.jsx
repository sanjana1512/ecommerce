// src/pages/Contact.js
export default function Contact() {
    return (
      <section className="py-5">
        <div className="container">
          <h2 className="fw-bold text-center mb-4">Contact Us</h2>
          <p className="text-center mb-5">We’d love to hear from you! Send us a message or connect with us on social media.</p>
          <form className="w-75 mx-auto">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Your Name</label>
              <input type="text" className="form-control" id="name" placeholder="John Doe" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Your Email</label>
              <input type="email" className="form-control" id="email" placeholder="john@example.com" />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Your Message</label>
              <textarea className="form-control" id="message" rows="4" placeholder="Type your message here..."></textarea>
            </div>
            <button type="submit" className="btn btn-warning">Send Message</button>
          </form>
        </div>
      </section>
    );
  }
  