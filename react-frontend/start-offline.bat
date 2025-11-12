@echo off
echo ========================================
echo   CarListing - Offline Mode
echo ========================================
echo.
echo Starting application in offline mode...
echo No backend required!
echo.
echo Opening at: http://localhost:5173
echo.
echo Press Ctrl+C to stop the server
echo ========================================
echo.

cd /d "%~dp0"
npm run dev
