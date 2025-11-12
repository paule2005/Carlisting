import { Link } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
  const featuredCars = [
    {
      id: 1,
      name: 'Luxury Sedans',
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80',
      description: 'Premium comfort and performance'
    },
    {
      id: 2,
      name: 'Sports Cars',
      image: 'https://images.unsplash.com/photo-1542362567-b07e54358753?w=800&q=80',
      description: 'Unleash the power and speed'
    },
    {
      id: 3,
      name: 'SUVs',
      image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80',
      description: 'Space and versatility combined'
    },
    {
      id: 4,
      name: 'Electric Vehicles',
      image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80',
      description: 'The future of driving'
    }
  ];

  return (
    <div className="landing-page">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Find Your Dream Car</h1>
          <p className="hero-subtitle">Browse through our extensive collection of premium vehicles</p>
          <Link to="/cars" className="btn-primary">Browse Cars</Link>
        </div>
      </section>

      <section className="featured-categories">
        <div className="section-header">
          <h2>Explore Our Collection</h2>
          <p>Discover the perfect vehicle for your lifestyle</p>
        </div>
        <div className="categories-grid">
          {featuredCars.map(car => (
            <Link to="/cars" key={car.id} className="category-card">
              <div className="category-image">
                <img src={car.image} alt={car.name} />
                <div className="category-overlay">
                  <h3>{car.name}</h3>
                  <p>{car.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="features">
        <div className="features-container">
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <img src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=400&q=80" alt="Wide Selection" className="feature-image" />
            </div>
            <h3>Wide Selection</h3>
            <p>Choose from hundreds of quality vehicles across all categories</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <img src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&q=80" alt="Best Prices" className="feature-image" />
            </div>
            <h3>Best Prices</h3>
            <p>Competitive pricing with flexible financing options available</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <img src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&q=80" alt="Quality Assured" className="feature-image" />
            </div>
            <h3>Quality Assured</h3>
            <p>All vehicles thoroughly inspected and certified by experts</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Find Your Perfect Car?</h2>
          <p>Start your journey today and drive home in your dream vehicle</p>
          <Link to="/cars" className="btn-secondary">Get Started</Link>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
