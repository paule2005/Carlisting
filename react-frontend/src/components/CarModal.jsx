import { useState } from 'react';
import { useCart } from '../context/CartContext';
import ContactModal from './ContactModal';
import './CarModal.css';

function CarModal({ car, isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('details');
  const { addToCart } = useCart();
  const [addedToCart, setAddedToCart] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);

  const handleAddToCart = () => {
    addToCart(car);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const handleContactDealer = () => {
    setShowContactModal(true);
  };

  if (!isOpen || !car) return null;

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="car-modal">
        <button className="modal-close-btn" onClick={onClose}>×</button>
        
        <div className="modal-image-section">
          <img src={car.image} alt={car.name} />
          <div className="modal-price-badge">
            ${car.price?.toLocaleString() || 'N/A'}
          </div>
        </div>

        <div className="modal-content">
          <div className="modal-header">
            <h2>{car.name}</h2>
            <div className="modal-year-badge">{car.year}</div>
          </div>

          <div className="modal-tabs">
            <button
              className={`tab-btn ${activeTab === 'details' ? 'active' : ''}`}
              onClick={() => setActiveTab('details')}
            >
              Details
            </button>
            <button
              className={`tab-btn ${activeTab === 'specs' ? 'active' : ''}`}
              onClick={() => setActiveTab('specs')}
            >
              Specifications
            </button>
            <button
              className={`tab-btn ${activeTab === 'features' ? 'active' : ''}`}
              onClick={() => setActiveTab('features')}
            >
              Features
            </button>
          </div>

          <div className="modal-tab-content">
            {activeTab === 'details' && (
              <div className="tab-panel">
                <div className="detail-grid">
                  <div className="detail-item">
                    <div>
                      <div className="detail-label">Year</div>
                      <div className="detail-value">{car.year}</div>
                    </div>
                  </div>
                  <div className="detail-item">
                    <div>
                      <div className="detail-label">Mileage</div>
                      <div className="detail-value">{car.mileage?.toLocaleString()} miles</div>
                    </div>
                  </div>
                  <div className="detail-item">
                    <div>
                      <div className="detail-label">Transmission</div>
                      <div className="detail-value">{car.transmission}</div>
                    </div>
                  </div>
                  <div className="detail-item">
                    <div>
                      <div className="detail-label">Color</div>
                      <div className="detail-value">{car.color || 'Various'}</div>
                    </div>
                  </div>
                </div>
                <div className="description">
                  <h3>Description</h3>
                  <p>{car.description || 'This premium vehicle offers exceptional performance, comfort, and style. Perfect for those who demand the best in automotive excellence.'}</p>
                </div>
              </div>
            )}

            {activeTab === 'specs' && (
              <div className="tab-panel">
                <div className="specs-list">
                  <div className="spec-row">
                    <span className="spec-label">Engine</span>
                    <span className="spec-value">{car.engine || '2.0L Turbocharged'}</span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-label">Horsepower</span>
                    <span className="spec-value">{car.horsepower || '250 HP'}</span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-label">Fuel Type</span>
                    <span className="spec-value">{car.fuel_type || 'Gasoline'}</span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-label">Drive Type</span>
                    <span className="spec-value">{car.drive_type || 'AWD'}</span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-label">Seating</span>
                    <span className="spec-value">{car.seating || '5 Passengers'}</span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-label">MPG</span>
                    <span className="spec-value">{car.mpg || '28 City / 35 Highway'}</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'features' && (
              <div className="tab-panel">
                <div className="features-grid">
                  <div className="feature-item">Leather Seats</div>
                  <div className="feature-item">Sunroof</div>
                  <div className="feature-item">Navigation System</div>
                  <div className="feature-item">Backup Camera</div>
                  <div className="feature-item">Bluetooth</div>
                  <div className="feature-item">Heated Seats</div>
                  <div className="feature-item">Keyless Entry</div>
                  <div className="feature-item">Cruise Control</div>
                  <div className="feature-item">Premium Sound</div>
                  <div className="feature-item">Alloy Wheels</div>
                </div>
              </div>
            )}
          </div>

          <div className="modal-actions">
            <button className="contact-btn" onClick={handleContactDealer}>
              Contact Dealer
            </button>
            <button 
              className={`add-cart-btn ${addedToCart ? 'added' : ''}`}
              onClick={handleAddToCart}
            >
              {addedToCart ? 'Added to Cart!' : 'Add to Cart'}
            </button>
          </div>
        </div>
      </div>
      
      <ContactModal 
        isOpen={showContactModal}
        onClose={() => setShowContactModal(false)}
        carName={car?.name}
      />
    </div>
  );
}

export default CarModal;
