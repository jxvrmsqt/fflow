@echo off
REM FinanFlow - Local Web Server Launcher (Windows)
REM This script starts a simple HTTP server to run the web app

cd /d "%~dp0dist" || cd /d "%~dp0"

echo.
echo ============================================
echo   FinanFlow Web App - Local Server
echo ============================================
echo.
echo 🚀 Starting server...
echo 📱 Open your browser to: http://localhost:8000
echo ⚡ Press Ctrl+C to stop the server
echo.

python -m http.server 8000

if %errorlevel% neq 0 (
    echo.
    echo ⚠️  Error: Python not found or failed to start server
    echo Please ensure Python is installed and added to PATH
    echo Download from: https://www.python.org/downloads/
    pause
)
