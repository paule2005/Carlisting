# 🔗 Backend Connection Guide

## Overview
This guide will help you connect the React frontend with the Laravel backend.

## Prerequisites

### Required Software
- PHP 8.1 or higher
- Composer
- Node.js 18+ and npm
- MySQL or MariaDB
- Git

### Check Installations
```bash
php --version
composer --version
node --version
npm --version
mysql --version
```

## Step-by-Step Setup

### 1. Backend Setup (Laravel)

#### Navigate to Backend Directory
```bash
cd laravel-backend
```

#### Install Dependencies
```bash
composer install
```

#### Configure Environment
```bash
# Copy environment file
cp .env.example .env

# Generate application key
php artisan key:generate
```

#### Configure Database
Edit `.env` file:
```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=carlisting
DB_USERNAME=root
DB_PASSWORD=your_password
```

#### Create Database
```bash
# Login to MySQL
mysql -u root -p

# Create database
CREATE DATABASE carlisting;
exit;
```

#### Run Migrations
```bash
php artisan migrate
```

#### Seed Database
```bash
php artisan db:seed
```

#### Start Laravel Server
```bash
php artisan serve
```

**Backend will run on:** `http://localhost:8000`

---

### 2. Frontend Setup (React)

#### Navigate to Frontend Directory
```bash
cd react-frontend
```

#### Install Dependencies
```bash
npm install
```

#### Start Development Server
```bash
npm run dev
```

**Frontend will run on:** `http://localhost:5173`

---

## API Configuration

### Current Setup

#### Backend (Laravel)
- **Base URL**: `http://localhost:8000`
- **API Prefix**: `/api`
- **CORS**: Configured for `http://localhost:5173`

#### Frontend (React)
- **API Base URL**: `http://localhost:8000/api`
- **Service File**: `react-frontend/src/services/api.js`

### API Endpoints

#### Cars
```
GET  /api/cars          - Get all cars
GET  /api/cars/{id}     - Get single car
```

#### Orders
```
POST /api/orders        - Create new order
```

### Request/Response Examples

#### Get All Cars
```javascript
// Request
GET http://localhost:8000/api/cars

// Response
[
  {
    "id": 1,
    "name": "Tesla Model 3",
    "year": 2023,
    "price": 45000,
    "mileage": 5000,
    "transmission": "Automatic",
    "image": "https://..."
  },
  // ... more cars
]
```

#### Create Order
```javascript
// Request
POST http://localhost:8000/api/orders
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "address": "123 Main St, City, State, ZIP",
  "car_id": 1,
  "message": "Optional message"
}

// Response
{
  "message": "Order created successfully",
  "order": {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+1234567890",
    "address": "123 Main St, City, State, ZIP",
    "car_id": 1,
    "message": "Optional message",
    "created_at": "2025-11-13T10:00:00.000000Z",
    "updated_at": "2025-11-13T10:00:00.000000Z"
  }
}
```

---

## CORS Configuration

### Laravel CORS Settings
File: `laravel-backend/config/cors.php`

```php
'paths' => ['api/*', 'sanctum/csrf-cookie'],
'allowed_methods' => ['*'],
'allowed_origins' => ['http://localhost:5173'],
'allowed_headers' => ['*'],
```

### If Using Different Ports
Update `allowed_origins` in `cors.php`:
```php
'allowed_origins' => [
    'http://localhost:5173',  // Vite default
    'http://localhost:3000',  // Create React App
    'http://localhost:4173',  // Vite preview
],
```

---

## Testing the Connection

### 1. Test Backend API

#### Using Browser
```
http://localhost:8000/api/cars
```

#### Using cURL
```bash
# Get all cars
curl http://localhost:8000/api/cars

# Create order
curl -X POST http://localhost:8000/api/orders \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "+1234567890",
    "address": "Test Address",
    "car_id": 1,
    "message": "Test message"
  }'
```

### 2. Test Frontend Connection

#### Open Browser Console
```javascript
// In browser console at http://localhost:5173
fetch('http://localhost:8000/api/cars')
  .then(res => res.json())
  .then(data => console.log(data));
```

#### Check Network Tab
1. Open DevTools (F12)
2. Go to Network tab
3. Navigate to Cars page
4. Look for API requests to `localhost:8000`

---

## Troubleshooting

### Issue: CORS Error
**Error**: "Access to fetch at 'http://localhost:8000/api/cars' from origin 'http://localhost:5173' has been blocked by CORS policy"

**Solution**:
1. Check `laravel-backend/config/cors.php`
2. Ensure `'http://localhost:5173'` is in `allowed_origins`
3. Clear Laravel cache:
```bash
php artisan config:clear
php artisan cache:clear
```

### Issue: Connection Refused
**Error**: "Failed to fetch" or "Network Error"

**Solution**:
1. Ensure Laravel server is running:
```bash
cd laravel-backend
php artisan serve
```
2. Check if port 8000 is available
3. Try different port:
```bash
php artisan serve --port=8001
```
Then update `react-frontend/src/services/api.js`:
```javascript
const API_BASE_URL = 'http://localhost:8001/api';
```

### Issue: 404 Not Found
**Error**: "404 Not Found" for API endpoints

**Solution**:
1. Check routes in `laravel-backend/routes/api.php`
2. Clear route cache:
```bash
php artisan route:clear
php artisan route:cache
```

### Issue: Database Connection Error
**Error**: "SQLSTATE[HY000] [1045] Access denied"

**Solution**:
1. Check `.env` database credentials
2. Ensure MySQL is running
3. Create database if not exists:
```bash
mysql -u root -p
CREATE DATABASE carlisting;
```

### Issue: Empty Response
**Error**: API returns empty array `[]`

**Solution**:
1. Seed the database:
```bash
php artisan db:seed
```
2. Check if data exists:
```bash
php artisan tinker
>>> App\Models\Car::count();
```

---

## Environment Variables

### Laravel (.env)
```env
APP_NAME=CarListing
APP_ENV=local
APP_KEY=base64:...
APP_DEBUG=true
APP_URL=http://localhost:8000

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=carlisting
DB_USERNAME=root
DB_PASSWORD=

CORS_ALLOWED_ORIGINS=http://localhost:5173
```

### React (.env)
Create `react-frontend/.env`:
```env
VITE_API_BASE_URL=http://localhost:8000/api
```

Update `api.js`:
```javascript
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api';
```

---

## Production Deployment

### Backend (Laravel)

#### Update .env
```env
APP_ENV=production
APP_DEBUG=false
APP_URL=https://your-domain.com

CORS_ALLOWED_ORIGINS=https://your-frontend-domain.com
```

#### Optimize
```bash
composer install --optimize-autoloader --no-dev
php artisan config:cache
php artisan route:cache
php artisan view:cache
```

### Frontend (React)

#### Update API URL
```javascript
const API_BASE_URL = 'https://your-backend-domain.com/api';
```

#### Build
```bash
npm run build
```

---

## Quick Start Commands

### Start Both Servers

#### Terminal 1 (Backend)
```bash
cd laravel-backend
php artisan serve
```

#### Terminal 2 (Frontend)
```bash
cd react-frontend
npm run dev
```

### One-Line Setup (After Initial Configuration)
```bash
# Backend
cd laravel-backend && php artisan serve &

# Frontend
cd react-frontend && npm run dev
```

---

## Verification Checklist

### Backend
- [ ] Laravel server running on port 8000
- [ ] Database connected and migrated
- [ ] Sample data seeded
- [ ] API endpoints accessible
- [ ] CORS configured correctly

### Frontend
- [ ] React app running on port 5173
- [ ] API service configured
- [ ] Cars loading from backend
- [ ] Order submission working
- [ ] No CORS errors in console

### Integration
- [ ] Cars display on listing page
- [ ] Car details load correctly
- [ ] Order form submits successfully
- [ ] Cart functionality works
- [ ] No console errors

---

## Additional Resources

### Laravel Documentation
- [Laravel Installation](https://laravel.com/docs/installation)
- [Laravel Database](https://laravel.com/docs/database)
- [Laravel API Resources](https://laravel.com/docs/eloquent-resources)

### React Documentation
- [Vite Guide](https://vitejs.dev/guide/)
- [Axios Documentation](https://axios-http.com/docs/intro)
- [React Router](https://reactrouter.com/)

### Tools
- [Postman](https://www.postman.com/) - API testing
- [TablePlus](https://tableplus.com/) - Database management
- [Laravel Debugbar](https://github.com/barryvdh/laravel-debugbar) - Debugging

---

## Support

### Common Commands

#### Laravel
```bash
php artisan serve              # Start server
php artisan migrate           # Run migrations
php artisan db:seed           # Seed database
php artisan route:list        # List all routes
php artisan tinker            # Interactive shell
php artisan config:clear      # Clear config cache
```

#### React
```bash
npm run dev                   # Start dev server
npm run build                 # Build for production
npm run preview               # Preview production build
```

---

## Summary

Your application is now connected:
✅ Laravel backend on `http://localhost:8000`
✅ React frontend on `http://localhost:5173`
✅ API endpoints configured
✅ CORS enabled
✅ Database connected
✅ Sample data available

**Next Steps:**
1. Start both servers
2. Open `http://localhost:5173`
3. Browse cars and test ordering
4. Check console for any errors

---

**Last Updated**: November 2025
**Status**: ✅ Ready to Use
