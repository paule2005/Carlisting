import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import CartModal from './CartModal';
import './BottomNav.css';

function BottomNav() {
  const location = useLocation();
  const { getCartCount } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartCount = getCartCount();

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <nav className="bottom-nav">
        <Link to="/" className={`nav-item ${isActive('/') ? 'active' : ''}`}>
          <span className="nav-icon">🏠</span>
          <span className="nav-label">Home</span>
        </Link>
        
        <Link to="/cars" className={`nav-item ${isActive('/cars') ? 'active' : ''}`}>
          <span className="nav-icon">🚗</span>
          <span className="nav-label">Browse</span>
        </Link>
        
        <button className="nav-item" onClick={() => setIsCartOpen(true)}>
          <span className="nav-icon">
            🛒
            {cartCount > 0 && <span className="bottom-cart-badge">{cartCount}</span>}
          </span>
          <span className="nav-label">Cart</span>
        </button>
        
        <button className="nav-item">
          <span className="nav-icon">❤️</span>
          <span className="nav-label">Favorites</span>
        </button>
        
        <Link to="/order" className={`nav-item ${isActive('/order') ? 'active' : ''}`}>
          <span className="nav-icon">📝</span>
          <span className="nav-label">Order</span>
        </Link>
      </nav>
      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}

export default BottomNav;
