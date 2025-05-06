export default function Footer() {
  return (
    <footer className="footer text-center text-white" style={{ backgroundColor: "#232F3E", padding: "20px 0" }}>
      <div className="container">
        <p>&copy; 2025 Comforty. All rights reserved.</p>
        <div>
          <a href="https://facebook.com" className="text-white mx-2"><i className="bi bi-facebook fs-3"></i></a>
          <a href="https://twitter.com" className="text-white mx-2"><i className="bi bi-twitter-x fs-3"></i></a>
          <a href="https://instagram.com" className="text-white mx-2"><i className="bi bi-instagram fs-3"></i></a>
          <a href="https://linkedin.com" className="text-white mx-2"><i className="bi bi-linkedin fs-3"></i></a>
        </div>
      </div>
    </footer>
  );
}
