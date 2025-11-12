import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import BottomNav from './components/BottomNav';
import LandingPage from './pages/LandingPage';
import CarListingPage from './pages/CarListingPage';
import OrderPage from './pages/OrderPage';
import OrdersHistoryPage from './pages/OrdersHistoryPage';
import './App.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="app">
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/cars" element={<CarListingPage />} />
            <Route path="/order" element={<OrderPage />} />
            <Route path="/orders-history" element={<OrdersHistoryPage />} />
          </Routes>
          <BottomNav />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
