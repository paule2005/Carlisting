import { useState, useEffect } from 'react';
import './OrdersHistoryPage.css';

function OrdersHistoryPage() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingOrder, setEditingOrder] = useState(null);
  const [editFormData, setEditFormData] = useState({});
  const [deleteConfirm, setDeleteConfirm] = useState(null);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = () => {
    try {
      const savedOrders = localStorage.getItem('orderHistory');
      if (savedOrders) {
        setOrders(JSON.parse(savedOrders));
      }
    } catch (error) {
      console.error('Error fetching orders:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (order) => {
    setEditingOrder(order.id);
    setEditFormData({ ...order });
  };

  const handleCancelEdit = () => {
    setEditingOrder(null);
    setEditFormData({});
  };

  const handleEditChange = (e) => {
    setEditFormData({
      ...editFormData,
      [e.target.name]: e.target.value
    });
  };

  const handleSaveEdit = (orderId) => {
    const updatedOrders = orders.map(order => 
      order.id === orderId ? { ...editFormData, id: orderId } : order
    );
    setOrders(updatedOrders);
    localStorage.setItem('orderHistory', JSON.stringify(updatedOrders));
    setEditingOrder(null);
    setEditFormData({});
  };

  const handleDelete = (orderId) => {
    setDeleteConfirm(orderId);
  };

  const confirmDelete = (orderId) => {
    const updatedOrders = orders.filter(order => order.id !== orderId);
    setOrders(updatedOrders);
    localStorage.setItem('orderHistory', JSON.stringify(updatedOrders));
    setDeleteConfirm(null);
  };

  const cancelDelete = () => {
    setDeleteConfirm(null);
  };

  if (loading) {
    return (
      <div className="orders-history-page">
        <div className="orders-container">
          <h1>Loading orders...</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="orders-history-page">
      <div className="orders-container">
        <div className="orders-header">
          <h1>Order History</h1>
          <p>View all your previous orders</p>
        </div>

        {orders.length === 0 ? (
          <div className="no-orders">
            <h3>No orders yet</h3>
            <p>Your order history will appear here once you place an order.</p>
          </div>
        ) : (
          <div className="orders-list">
            {orders.map((order, index) => (
              <div key={order.id || index} className="order-card">
                {deleteConfirm === order.id ? (
                  <div className="delete-confirmation">
                    <h3>Confirm Delete</h3>
                    <p>Are you sure you want to delete this order?</p>
                    <div className="confirm-actions">
                      <button className="btn-confirm-delete" onClick={() => confirmDelete(order.id)}>
                        Yes, Delete
                      </button>
                      <button className="btn-cancel-delete" onClick={cancelDelete}>
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : editingOrder === order.id ? (
                  <div className="edit-form">
                    <h3>Edit Order</h3>
                    <div className="form-group">
                      <label>Name:</label>
                      <input
                        type="text"
                        name="name"
                        value={editFormData.name || ''}
                        onChange={handleEditChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Email:</label>
                      <input
                        type="email"
                        name="email"
                        value={editFormData.email || ''}
                        onChange={handleEditChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Phone:</label>
                      <input
                        type="tel"
                        name="phone"
                        value={editFormData.phone || ''}
                        onChange={handleEditChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Address:</label>
                      <input
                        type="text"
                        name="address"
                        value={editFormData.address || ''}
                        onChange={handleEditChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Message:</label>
                      <textarea
                        name="message"
                        value={editFormData.message || ''}
                        onChange={handleEditChange}
                        rows="3"
                      />
                    </div>
                    <div className="edit-actions">
                      <button className="btn-save" onClick={() => handleSaveEdit(order.id)}>
                        Save
                      </button>
                      <button className="btn-cancel-edit" onClick={handleCancelEdit}>
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="order-header">
                      <div className="order-id">Order #{index + 1}</div>
                      <div className="order-status">Completed</div>
                    </div>
                    <div className="order-details">
                      {order.cars && order.cars.length > 0 ? (
                        <div className="ordered-cars-section">
                          <h3 className="ordered-cars-title">Ordered Cars ({order.cars.length})</h3>
                          <div className="ordered-cars-list">
                            {order.cars.map((car, carIndex) => (
                              <div key={carIndex} className="order-car-info">
                                {car.image && (
                                  <img src={car.image} alt={car.name} className="order-car-image" />
                                )}
                                <div className="order-car-details">
                                  <h4>{car.name}</h4>
                                  {car.year && <p className="car-year">Year: {car.year}</p>}
                                  {car.price && <p className="car-price">Price: ${car.price.toLocaleString()}</p>}
                                  {car.quantity > 1 && <p className="car-quantity">Quantity: {car.quantity}</p>}
                                </div>
                              </div>
                            ))}
                          </div>
                          {order.total_price && (
                            <div className="order-total">
                              <strong>Total:</strong>
                              <strong className="total-amount">${order.total_price.toLocaleString()}</strong>
                            </div>
                          )}
                        </div>
                      ) : order.car_name && (
                        <div className="order-car-info">
                          {order.car_image && (
                            <img src={order.car_image} alt={order.car_name} className="order-car-image" />
                          )}
                          <div className="order-car-details">
                            <h4>{order.car_name}</h4>
                            {order.car_year && <p className="car-year">Year: {order.car_year}</p>}
                            {order.car_price && <p className="car-price">Price: ${order.car_price.toLocaleString()}</p>}
                          </div>
                        </div>
                      )}
                      <div className="order-info">
                        <p><strong>Name:</strong> {order.name}</p>
                        <p><strong>Email:</strong> {order.email}</p>
                        <p><strong>Phone:</strong> {order.phone}</p>
                        <p><strong>Address:</strong> {order.address}</p>
                      </div>
                      {order.message && (
                        <div className="order-message">
                          <strong>Message:</strong>
                          <p>{order.message}</p>
                        </div>
                      )}
                    </div>
                    <div className="order-footer">
                      <span className="order-date">
                        {order.date ? new Date(order.date).toLocaleDateString() : 'Recent'}
                      </span>
                      <div className="order-actions">
                        <button className="btn-edit" onClick={() => handleEdit(order)}>
                          Edit
                        </button>
                        <button className="btn-delete" onClick={() => handleDelete(order.id)}>
                          Delete
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default OrdersHistoryPage;
