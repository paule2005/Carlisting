# Quick Setup Guide

## Step 1: Setup Laravel Backend

Open a terminal in the project root and run:

```bash
cd laravel-backend
composer install
php artisan key:generate
php artisan migrate:fresh --seed
php artisan serve
```

Keep this terminal open - Laravel will run on http://localhost:8000

## Step 2: Setup React Frontend

Open a NEW terminal in the project root and run:

```bash
cd react-frontend
npm run dev
```

Keep this terminal open - React will run on http://localhost:5173

## Step 3: Access the Application

Open your browser and go to: http://localhost:5173

## What You'll See

1. **Landing Page** - Hero section with "Find Your Dream Car" and features
2. **Browse Cars** - Grid of 6 cars with images, prices, and details
3. **Order Page** - Form to place an order for a car

## Troubleshooting

### Database Issues
Make sure your MySQL is running in Laragon and the database credentials in `laravel-backend/.env` are correct.

### CORS Issues
If you get CORS errors, make sure:
- Laravel is running on port 8000
- React is running on port 5173
- The CORS config in `laravel-backend/config/cors.php` allows localhost:5173

### Port Already in Use
If port 8000 or 5173 is already in use:
- For Laravel: `php artisan serve --port=8001`
- For React: Update the port in vite.config.js
