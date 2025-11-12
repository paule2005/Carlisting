@echo off
echo ========================================
echo   Car Listing Application
echo   Starting Development Servers
echo ========================================
echo.

echo [1/2] Starting Laravel Backend...
start "Laravel Backend" cmd /k "cd laravel-backend && php artisan serve"
timeout /t 3 /nobreak > nul

echo [2/2] Starting React Frontend...
start "React Frontend" cmd /k "cd react-frontend && npm run dev"

echo.
echo ========================================
echo   Servers Started!
echo ========================================
echo.
echo Backend:  http://localhost:8000
echo Frontend: http://localhost:5173
echo.
echo Press any key to open the application...
pause > nul

start http://localhost:5173

echo.
echo To stop servers, close the terminal windows
echo or press Ctrl+C in each window
echo.
pause
