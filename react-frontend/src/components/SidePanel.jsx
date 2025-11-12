import { useState } from 'react';
import './SidePanel.css';

function SidePanel({ isOpen, onClose, onApplyFilters }) {
  const [filters, setFilters] = useState({
    priceRange: [0, 100000],
    yearRange: [2015, 2024],
    transmission: 'all',
    mileageMax: 100000,
    sortBy: 'price-asc'
  });

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const handleApply = () => {
    onApplyFilters(filters);
    onClose();
  };

  const handleReset = () => {
    const defaultFilters = {
      priceRange: [0, 100000],
      yearRange: [2015, 2024],
      transmission: 'all',
      mileageMax: 100000,
      sortBy: 'price-asc'
    };
    setFilters(defaultFilters);
    onApplyFilters(defaultFilters);
  };

  return (
    <>
      <div className={`side-panel-overlay ${isOpen ? 'active' : ''}`} onClick={onClose}></div>
      <div className={`side-panel ${isOpen ? 'open' : ''}`}>
        <div className="side-panel-header">
          <h2>Filters</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>

        <div className="side-panel-content">
          <div className="filter-section">
            <label className="filter-label">Price Range</label>
            <div className="range-inputs">
              <input
                type="number"
                value={filters.priceRange[0]}
                onChange={(e) => handleFilterChange('priceRange', [+e.target.value, filters.priceRange[1]])}
                placeholder="Min"
              />
              <span>-</span>
              <input
                type="number"
                value={filters.priceRange[1]}
                onChange={(e) => handleFilterChange('priceRange', [filters.priceRange[0], +e.target.value])}
                placeholder="Max"
              />
            </div>
            <input
              type="range"
              min="0"
              max="100000"
              step="5000"
              value={filters.priceRange[1]}
              onChange={(e) => handleFilterChange('priceRange', [filters.priceRange[0], +e.target.value])}
              className="range-slider"
            />
          </div>

          <div className="filter-section">
            <label className="filter-label">Year Range</label>
            <div className="range-inputs">
              <input
                type="number"
                value={filters.yearRange[0]}
                onChange={(e) => handleFilterChange('yearRange', [+e.target.value, filters.yearRange[1]])}
                placeholder="From"
              />
              <span>-</span>
              <input
                type="number"
                value={filters.yearRange[1]}
                onChange={(e) => handleFilterChange('yearRange', [filters.yearRange[0], +e.target.value])}
                placeholder="To"
              />
            </div>
          </div>

          <div className="filter-section">
            <label className="filter-label">Transmission</label>
            <select
              value={filters.transmission}
              onChange={(e) => handleFilterChange('transmission', e.target.value)}
              className="filter-select"
            >
              <option value="all">All Types</option>
              <option value="automatic">Automatic</option>
              <option value="manual">Manual</option>
            </select>
          </div>

          <div className="filter-section">
            <label className="filter-label">Max Mileage: {filters.mileageMax.toLocaleString()} miles</label>
            <input
              type="range"
              min="0"
              max="200000"
              step="10000"
              value={filters.mileageMax}
              onChange={(e) => handleFilterChange('mileageMax', +e.target.value)}
              className="range-slider"
            />
          </div>

          <div className="filter-section">
            <label className="filter-label">Sort By</label>
            <select
              value={filters.sortBy}
              onChange={(e) => handleFilterChange('sortBy', e.target.value)}
              className="filter-select"
            >
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="year-desc">Year: Newest First</option>
              <option value="year-asc">Year: Oldest First</option>
              <option value="mileage-asc">Mileage: Low to High</option>
            </select>
          </div>
        </div>

        <div className="side-panel-footer">
          <button className="reset-btn" onClick={handleReset}>Reset</button>
          <button className="apply-btn" onClick={handleApply}>Apply Filters</button>
        </div>
      </div>
    </>
  );
}

export default SidePanel;
