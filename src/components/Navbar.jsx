import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#232F3E" }}>
      <div className="container">
        <Link className="navbar-brand text-white" to="/">Comforty</Link>
        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link text-white" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link text-white" to="/shop">Shop</Link></li>
            <li className="nav-item"><Link className="nav-link text-white" to="/products">Products</Link></li>
            <li className="nav-item"><Link className="nav-link text-white" to="/about">About</Link></li>
            <li className="nav-item"><Link className="nav-link text-white" to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
