# 🚀 Quick Start Guide

## Start Both Servers

### Option 1: Two Terminals (Recommended)

#### Terminal 1 - Backend (Laravel)
```bash
cd laravel-backend
php artisan serve
```
**Output**: Server running on `http://localhost:8000`

#### Terminal 2 - Frontend (React)
```bash
cd react-frontend
npm run dev
```
**Output**: Server running on `http://localhost:5173`

---

### Option 2: One Terminal (Background Process)

#### Windows (PowerShell)
```powershell
# Start backend in background
Start-Process powershell -ArgumentList "cd laravel-backend; php artisan serve"

# Start frontend
cd react-frontend
npm run dev
```

#### macOS/Linux (Bash)
```bash
# Start backend in background
cd laravel-backend && php artisan serve &

# Start frontend
cd react-frontend && npm run dev
```

---

## Access the Application

### Frontend (React)
```
http://localhost:5173
```

### Backend API (Laravel)
```
http://localhost:8000/api/cars
```

---

## First Time Setup

### 1. Backend Setup
```bash
cd laravel-backend

# Install dependencies
composer install

# Setup environment
cp .env.example .env
php artisan key:generate

# Configure database in .env
# DB_DATABASE=carlisting
# DB_USERNAME=root
# DB_PASSWORD=your_password

# Create database
mysql -u root -p
CREATE DATABASE carlisting;
exit;

# Run migrations and seed
php artisan migrate
php artisan db:seed

# Start server
php artisan serve
```

### 2. Frontend Setup
```bash
cd react-frontend

# Install dependencies
npm install

# Start server
npm run dev
```

---

## Verify Connection

### 1. Check Backend
Open browser: `http://localhost:8000/api/cars`

Should see JSON response with car data.

### 2. Check Frontend
Open browser: `http://localhost:5173`

Should see the car listing application.

### 3. Test Integration
1. Navigate to "Browse Cars"
2. Cars should load from backend
3. Try adding to cart
4. Try submitting an order

---

## Stop Servers

### Stop Frontend
Press `Ctrl + C` in the terminal running React

### Stop Backend
Press `Ctrl + C` in the terminal running Laravel

---

## Troubleshooting

### Port Already in Use

#### Backend (Port 8000)
```bash
# Use different port
php artisan serve --port=8001

# Update frontend API URL in:
# react-frontend/src/services/api.js
# const API_BASE_URL = 'http://localhost:8001/api';
```

#### Frontend (Port 5173)
```bash
# Vite will automatically try next available port
# Usually 5174, 5175, etc.
```

### CORS Error
```bash
cd laravel-backend
php artisan config:clear
php artisan cache:clear
```

### Database Connection Error
Check `.env` file in `laravel-backend`:
```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=carlisting
DB_USERNAME=root
DB_PASSWORD=your_password
```

---

## Quick Commands Reference

### Laravel
```bash
php artisan serve              # Start server
php artisan migrate           # Run migrations
php artisan db:seed           # Seed database
php artisan route:list        # List routes
php artisan config:clear      # Clear cache
```

### React
```bash
npm run dev                   # Start dev server
npm run build                 # Build for production
npm install                   # Install dependencies
```

---

## Development Workflow

### Daily Workflow
1. Start backend: `cd laravel-backend && php artisan serve`
2. Start frontend: `cd react-frontend && npm run dev`
3. Open browser: `http://localhost:5173`
4. Start coding!

### After Pulling Changes
```bash
# Backend
cd laravel-backend
composer install
php artisan migrate
php artisan config:clear

# Frontend
cd react-frontend
npm install
```

---

## Status Check

### Backend Running?
```bash
curl http://localhost:8000/api/cars
```

### Frontend Running?
Open: `http://localhost:5173`

### Database Connected?
```bash
cd laravel-backend
php artisan tinker
>>> App\Models\Car::count();
```

---

## Summary

✅ Backend: `http://localhost:8000`
✅ Frontend: `http://localhost:5173`
✅ API: `http://localhost:8000/api`

**Ready to develop!** 🎉
