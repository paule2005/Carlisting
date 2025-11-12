#!/bin/bash

echo "========================================"
echo "  Car Listing Application"
echo "  Starting Development Servers"
echo "========================================"
echo ""

echo "[1/2] Starting Laravel Backend..."
cd laravel-backend
php artisan serve &
BACKEND_PID=$!
cd ..

sleep 3

echo "[2/2] Starting React Frontend..."
cd react-frontend
npm run dev &
FRONTEND_PID=$!
cd ..

echo ""
echo "========================================"
echo "  Servers Started!"
echo "========================================"
echo ""
echo "Backend:  http://localhost:8000"
echo "Frontend: http://localhost:5173"
echo ""
echo "Backend PID:  $BACKEND_PID"
echo "Frontend PID: $FRONTEND_PID"
echo ""
echo "Press Ctrl+C to stop all servers"
echo ""

# Function to cleanup on exit
cleanup() {
    echo ""
    echo "Stopping servers..."
    kill $BACKEND_PID 2>/dev/null
    kill $FRONTEND_PID 2>/dev/null
    echo "Servers stopped."
    exit 0
}

# Trap Ctrl+C
trap cleanup INT

# Wait for user interrupt
wait
