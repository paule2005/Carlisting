#!/bin/bash

echo "========================================"
echo "  CarListing - Offline Mode"
echo "========================================"
echo ""
echo "Starting application in offline mode..."
echo "No backend required!"
echo ""
echo "Opening at: http://localhost:5173"
echo ""
echo "Press Ctrl+C to stop the server"
echo "========================================"
echo ""

cd "$(dirname "$0")"
npm run dev
