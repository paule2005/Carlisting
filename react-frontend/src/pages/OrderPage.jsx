import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import SuccessModal from '../components/SuccessModal';
import './OrderPage.css';

function OrderPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const carId = searchParams.get('car');
  const { cartItems, clearCart, getCartTotal } = useCart();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    carId: carId || (cartItems.length > 0 ? cartItems[0].id.toString() : ''),
    message: ''
  });

  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectedCar, setSelectedCar] = useState(null);

  useEffect(() => {
    // Fetch car details if carId is provided
    const fetchCarDetails = async () => {
      if (carId) {
        try {
          const { carService } = await import('../services/api');
          const car = await carService.getCarById(carId);
          setSelectedCar(car);
        } catch (error) {
          console.error('Error fetching car:', error);
          // Use mock data if API fails
          const mockCars = [
            { id: 1, name: 'Tesla Model 3', year: 2023, price: 45000, image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=500' },
            { id: 2, name: 'BMW 3 Series', year: 2022, price: 42000, image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=500' },
            { id: 3, name: 'Mercedes-Benz C-Class', year: 2023, price: 48000, image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=500' }
          ];
          const car = mockCars.find(c => c.id === parseInt(carId));
          if (car) setSelectedCar(car);
        }
      }
    };

    fetchCarDetails();
  }, [carId]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleCancel = () => {
    // Clear form
    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      carId: '',
      message: ''
    });
    setError('');
    // Navigate back to cars page
    navigate('/cars');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Prepare order data with ALL car information
      let orderedCars = [];
      let totalPrice = 0;
      
      if (selectedCar) {
        // Single car order
        orderedCars = [{
          id: selectedCar.id,
          name: selectedCar.name,
          year: selectedCar.year,
          price: selectedCar.price,
          image: selectedCar.image,
          quantity: 1
        }];
        totalPrice = selectedCar.price;
      } else if (cartItems.length > 0) {
        // Multiple cars from cart
        orderedCars = cartItems.map(item => ({
          id: item.id,
          name: item.name,
          year: item.year,
          price: item.price,
          image: item.image,
          quantity: item.quantity || 1
        }));
        totalPrice = getCartTotal();
      }

      const orderData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        cars: orderedCars, // Array of all ordered cars
        total_price: totalPrice,
        message: formData.message
      };

      // Try to submit to API (optional - works even if backend is down)
      try {
        const { orderService } = await import('../services/api');
        await orderService.createOrder(orderData);
        console.log('Order submitted to backend successfully');
      } catch (apiError) {
        console.warn('Backend not available, saving locally only:', apiError);
        // Continue anyway - we'll save locally
      }
      
      // Always save to order history (works offline)
      const orderHistory = JSON.parse(localStorage.getItem('orderHistory') || '[]');
      orderHistory.push({
        ...orderData,
        date: new Date().toISOString(),
        id: Date.now() // Generate unique ID
      });
      localStorage.setItem('orderHistory', JSON.stringify(orderHistory));
      
      // Show success modal
      setShowSuccessModal(true);
      
      // Clear cart if ordering from cart
      if (cartItems.length > 0) {
        clearCart();
      }

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        carId: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting order:', error);
      setError('Failed to submit order. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="order-page">
      <SuccessModal 
        isOpen={showSuccessModal} 
        onClose={() => setShowSuccessModal(false)} 
      />
      
      <div className="order-container">
        <h1>Place Your Order</h1>
        <p className="order-subtitle">Fill out the form below to order your car</p>

        {error && (
          <div className="error-message">
            ✗ {error}
          </div>
        )}

        {selectedCar && (
          <div className="selected-car-display">
            <h3>🚗 Selected Car</h3>
            <div className="selected-car-card">
              <img src={selectedCar.image} alt={selectedCar.name} className="selected-car-image" />
              <div className="selected-car-info">
                <h4>{selectedCar.name}</h4>
                <p className="selected-car-year">Year: {selectedCar.year}</p>
                <p className="selected-car-price">Price: ${selectedCar.price?.toLocaleString()}</p>
                {selectedCar.mileage && <p className="selected-car-mileage">Mileage: {selectedCar.mileage?.toLocaleString()} mi</p>}
                {selectedCar.transmission && <p className="selected-car-transmission">Transmission: {selectedCar.transmission}</p>}
              </div>
            </div>
          </div>
        )}

        {cartItems.length > 0 && !selectedCar && (
          <div className="order-summary">
            <h3>🛒 Order Summary</h3>
            <div className="summary-items">
              {cartItems.map(item => (
                <div key={item.id} className="summary-item">
                  <img src={item.image} alt={item.name} className="summary-image" />
                  <div className="summary-details">
                    <h4>{item.name}</h4>
                    <p className="summary-year">{item.year}</p>
                    <p className="summary-price">${item.price.toLocaleString()}</p>
                    {item.quantity > 1 && <p className="summary-qty">Qty: {item.quantity}</p>}
                  </div>
                </div>
              ))}
            </div>
            <div className="summary-total">
              <strong>Total:</strong>
              <strong className="total-price">${getCartTotal().toLocaleString()}</strong>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="order-form">
          <div className="form-group">
            <label htmlFor="name">Full Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={loading}
              placeholder="John Doe"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={loading}
              placeholder="john@example.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              disabled={loading}
              placeholder="+1 (555) 123-4567"
            />
          </div>

          <div className="form-group">
            <label htmlFor="address">Delivery Address *</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              disabled={loading}
              placeholder="123 Main St, City, State, ZIP"
            />
          </div>

          <div className="form-group">
            <label htmlFor="carId">Car ID</label>
            <input
              type="text"
              id="carId"
              name="carId"
              value={formData.carId}
              onChange={handleChange}
              disabled={loading}
              placeholder="Auto-filled from cart or URL"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Additional Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              disabled={loading}
              placeholder="Any special requests or questions?"
            />
          </div>

          <div className="form-actions">
            <button type="button" className="btn-cancel" onClick={handleCancel} disabled={loading}>
              ✕ Cancel
            </button>
            <button type="submit" className="btn-submit" disabled={loading}>
              {loading ? '⏳ Submitting...' : '✓ Submit Order'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default OrderPage;
