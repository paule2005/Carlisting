import { useState, useEffect } from 'react';
import CarCard from '../components/CarCard';
import SidePanel from '../components/SidePanel';
import CarModal from '../components/CarModal';
import { carService } from '../services/api';
import './CarListingPage.css';

function CarListingPage() {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const data = await carService.getAllCars();
        setCars(data);
        setFilteredCars(data);
      } catch (error) {
        console.error('Error fetching cars:', error);
        // Fallback to mock data if API fails
        const mockCars = [
          {
            id: 1,
            name: 'Tesla Model 3',
            year: 2023,
            price: 45000,
            mileage: 5000,
            transmission: 'Automatic',
            image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=500'
          },
          {
            id: 2,
            name: 'BMW 3 Series',
            year: 2022,
            price: 42000,
            mileage: 12000,
            transmission: 'Automatic',
            image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=500'
          },
          {
            id: 3,
            name: 'Mercedes-Benz C-Class',
            year: 2023,
            price: 48000,
            mileage: 8000,
            transmission: 'Automatic',
            image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=500'
          },
          {
            id: 4,
            name: 'Audi A4',
            year: 2022,
            price: 40000,
            mileage: 15000,
            transmission: 'Automatic',
            image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=500'
          },
          {
            id: 5,
            name: 'Toyota Camry',
            year: 2023,
            price: 28000,
            mileage: 3000,
            transmission: 'Automatic',
            image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=500'
          },
          {
            id: 6,
            name: 'Honda Accord',
            year: 2022,
            price: 26000,
            mileage: 10000,
            transmission: 'Automatic',
            image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?w=500'
          }
        ];
        setCars(mockCars);
        setFilteredCars(mockCars);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  const handleApplyFilters = (filters) => {
    let filtered = [...cars];

    // Apply price filter
    filtered = filtered.filter(car => 
      car.price >= filters.priceRange[0] && car.price <= filters.priceRange[1]
    );

    // Apply year filter
    filtered = filtered.filter(car => 
      car.year >= filters.yearRange[0] && car.year <= filters.yearRange[1]
    );

    // Apply transmission filter
    if (filters.transmission !== 'all') {
      filtered = filtered.filter(car => 
        car.transmission.toLowerCase() === filters.transmission
      );
    }

    // Apply mileage filter
    filtered = filtered.filter(car => car.mileage <= filters.mileageMax);

    // Apply sorting
    switch (filters.sortBy) {
      case 'price-asc':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'year-desc':
        filtered.sort((a, b) => b.year - a.year);
        break;
      case 'year-asc':
        filtered.sort((a, b) => a.year - b.year);
        break;
      case 'mileage-asc':
        filtered.sort((a, b) => a.mileage - b.mileage);
        break;
      default:
        break;
    }

    setFilteredCars(filtered);
  };

  const handleCarClick = (car) => {
    setSelectedCar(car);
    setIsModalOpen(true);
  };

  if (loading) {
    return (
      <div className="car-listing-page">
        <div className="listing-header">
          <h1>Loading...</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="car-listing-page">
      <div className="listing-header">
        <div className="header-content">
          <div>
            <h1>Browse Our Collection</h1>
            <p>Find the perfect car for you</p>
          </div>
          <button className="filter-btn" onClick={() => setIsPanelOpen(true)}>
            Filters
          </button>
        </div>
        <div className="results-info">
          Showing {filteredCars.length} of {cars.length} cars
        </div>
      </div>
      <div className="cars-grid">
        {filteredCars.map(car => (
          <CarCard 
            key={car.id} 
            car={car} 
            onViewDetails={() => handleCarClick(car)}
          />
        ))}
      </div>
      
      <SidePanel 
        isOpen={isPanelOpen}
        onClose={() => setIsPanelOpen(false)}
        onApplyFilters={handleApplyFilters}
      />
      
      <CarModal 
        car={selectedCar}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

export default CarListingPage;
