# ✅ Setup Checklist

## Initial Setup (One Time Only)

### Prerequisites
- [ ] PHP 8.1+ installed
- [ ] Composer installed
- [ ] Node.js 18+ installed
- [ ] MySQL/MariaDB installed
- [ ] Git installed

### Backend Setup
- [ ] Navigate to `laravel-backend` directory
- [ ] Run `composer install`
- [ ] Copy `.env.example` to `.env`
- [ ] Run `php artisan key:generate`
- [ ] Configure database in `.env`
- [ ] Create database: `CREATE DATABASE carlisting;`
- [ ] Run `php artisan migrate`
- [ ] Run `php artisan db:seed`
- [ ] Test: `php artisan serve`

### Frontend Setup
- [ ] Navigate to `react-frontend` directory
- [ ] Run `npm install`
- [ ] Test: `npm run dev`

### Verify Connection
- [ ] Backend accessible at `http://localhost:8000`
- [ ] Frontend accessible at `http://localhost:5173`
- [ ] API returns data: `http://localhost:8000/api/cars`
- [ ] Cars load on frontend
- [ ] No CORS errors in console

---

## Daily Development

### Start Servers
- [ ] Start backend: `cd laravel-backend && php artisan serve`
- [ ] Start frontend: `cd react-frontend && npm run dev`
- [ ] Or use: `./start-dev.sh` (Mac/Linux) or `start-dev.bat` (Windows)

### Verify Running
- [ ] Backend: `http://localhost:8000/api/cars`
- [ ] Frontend: `http://localhost:5173`

---

## Testing Features

### Browse Cars
- [ ] Navigate to "Browse Cars"
- [ ] Cars load from backend
- [ ] Images display correctly
- [ ] Prices show correctly
- [ ] Filter panel works

### Car Details
- [ ] Click "View Details" on a car
- [ ] Modal opens with car information
- [ ] Tabs work (Details, Specs, Features)
- [ ] Add to cart works

### Shopping Cart
- [ ] Click cart icon in navbar
- [ ] Cart modal opens
- [ ] Items display correctly
- [ ] Quantity controls work
- [ ] Total calculates correctly
- [ ] Remove items works
- [ ] Clear cart works

### Order System
- [ ] Navigate to Order page
- [ ] Cart summary displays (if items in cart)
- [ ] Form fields work
- [ ] Validation works
- [ ] Submit order succeeds
- [ ] Success message displays
- [ ] Cart clears after order

---

## Troubleshooting

### Backend Issues
- [ ] Check if Laravel server is running
- [ ] Check database connection in `.env`
- [ ] Run `php artisan config:clear`
- [ ] Check `laravel-backend/storage/logs/laravel.log`

### Frontend Issues
- [ ] Check if React server is running
- [ ] Check browser console for errors
- [ ] Check Network tab for API calls
- [ ] Verify API URL in `src/services/api.js`

### CORS Issues
- [ ] Check `laravel-backend/config/cors.php`
- [ ] Verify `allowed_origins` includes `http://localhost:5173`
- [ ] Run `php artisan config:clear`
- [ ] Restart Laravel server

### Database Issues
- [ ] Check MySQL is running
- [ ] Verify database exists: `SHOW DATABASES;`
- [ ] Check credentials in `.env`
- [ ] Run migrations: `php artisan migrate`
- [ ] Seed data: `php artisan db:seed`

---

## Common Commands

### Laravel
```bash
php artisan serve              # Start server
php artisan migrate           # Run migrations
php artisan db:seed           # Seed database
php artisan route:list        # List routes
php artisan config:clear      # Clear config cache
php artisan cache:clear       # Clear application cache
php artisan tinker            # Interactive shell
```

### React
```bash
npm run dev                   # Start dev server
npm run build                 # Build for production
npm run preview               # Preview production build
npm install                   # Install dependencies
```

### Database
```bash
mysql -u root -p              # Login to MySQL
CREATE DATABASE carlisting;   # Create database
SHOW DATABASES;               # List databases
USE carlisting;               # Select database
SHOW TABLES;                  # List tables
```

---

## File Locations

### Configuration Files
- Backend API: `laravel-backend/routes/api.php`
- CORS Config: `laravel-backend/config/cors.php`
- Database Config: `laravel-backend/.env`
- Frontend API: `react-frontend/src/services/api.js`

### Controllers
- Car Controller: `laravel-backend/app/Http/Controllers/CarController.php`
- Order Controller: `laravel-backend/app/Http/Controllers/OrderController.php`

### Models
- Car Model: `laravel-backend/app/Models/Car.php`
- Order Model: `laravel-backend/app/Models/Order.php`

### Migrations
- Cars Table: `laravel-backend/database/migrations/*_create_cars_table.php`
- Orders Table: `laravel-backend/database/migrations/*_create_orders_table.php`

### Seeders
- Car Seeder: `laravel-backend/database/seeders/CarSeeder.php`

---

## Quick Reference

### URLs
- **Frontend**: http://localhost:5173
- **Backend**: http://localhost:8000
- **API Base**: http://localhost:8000/api
- **Cars API**: http://localhost:8000/api/cars
- **Orders API**: http://localhost:8000/api/orders

### Ports
- **Laravel**: 8000
- **React (Vite)**: 5173
- **MySQL**: 3306

### Default Credentials
- **Database User**: root
- **Database Password**: (set in .env)
- **Database Name**: carlisting

---

## Status Indicators

### ✅ Everything Working
- Backend server running
- Frontend server running
- Database connected
- Cars loading
- Orders submitting
- No console errors

### ⚠️ Needs Attention
- CORS errors
- API connection failed
- Database connection error
- Missing dependencies

### ❌ Not Working
- Servers not starting
- Database not accessible
- API returning errors
- Frontend not loading

---

## Next Steps

After setup is complete:
1. ✅ Browse the application
2. ✅ Test all features
3. ✅ Add more cars (optional)
4. ✅ Customize styling
5. ✅ Deploy to production

---

## Support Resources

### Documentation
- [BACKEND_CONNECTION_GUIDE.md](./BACKEND_CONNECTION_GUIDE.md)
- [START_SERVERS.md](./START_SERVERS.md)
- [README.md](./README.md)

### Quick Start
- Windows: Run `start-dev.bat`
- Mac/Linux: Run `./start-dev.sh`

---

**Last Updated**: November 2025
**Status**: ✅ Ready to Use
