import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import './CarCard.css';

function CarCard({ car, onViewDetails }) {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(car);
    setIsAdded(true);
  };

  return (
    <div className="car-card">
      <div className="car-image">
        <img src={car.image} alt={car.name} />
        <div className="car-badge">Featured</div>
      </div>
      <div className="car-details">
        <div className="car-header">
          <h3 className="car-name">{car.name}</h3>
          <span className="car-year-badge">{car.year}</span>
        </div>
        <p className="car-price">${car.price.toLocaleString()}</p>
        <div className="car-specs">
          <div className="spec-item">
            <span className="spec-label">Mileage:</span>
            <span>{car.mileage?.toLocaleString()} mi</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Transmission:</span>
            <span>{car.transmission}</span>
          </div>
        </div>
        <div className="card-actions">
          <button className="btn-view" onClick={onViewDetails}>View Details</button>
          {!isAdded ? (
            <button className="btn-add-cart" onClick={handleAddToCart}>
              Add to Cart
            </button>
          ) : (
            <button className="btn-continue-shopping" onClick={(e) => { e.stopPropagation(); setIsAdded(false); }}>
              Continue Shopping
            </button>
          )}
          <Link to={`/order?car=${car.id}`} className="btn-order-now">
            Order Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CarCard;
