// src/App.js
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
        <Link className="navbar-brand" to="/">Comforty</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/shop">Shop</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/products">Products</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
          </ul>
        </div>
      </nav>

      <main className="py-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <footer className="bg-dark text-white text-center py-3">
        <p>&copy; {new Date().getFullYear()} Comforty Furniture. All rights reserved.</p>
      </footer>
    </Router>
  );
}

export default App;
