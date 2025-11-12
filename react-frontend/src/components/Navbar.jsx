import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import CartModal from './CartModal';
import './Navbar.css';

function Navbar() {
  const { getCartCount } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartCount = getCartCount();

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            🚗 CarListing
          </Link>
          <ul className="navbar-menu">
            <li><Link to="/" className="navbar-link">Home</Link></li>
            <li><Link to="/cars" className="navbar-link">Browse Cars</Link></li>
            <li><Link to="/orders-history" className="navbar-link">Orders</Link></li>
            <li>
              <button className="cart-button" onClick={() => setIsCartOpen(true)}>
                🛒
                {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
              </button>
            </li>
          </ul>
        </div>
      </nav>
      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}

export default Navbar;
