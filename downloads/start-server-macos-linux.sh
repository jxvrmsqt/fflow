#!/bin/bash
# FinanFlow - Local Web Server Launcher (macOS/Linux)
# This script starts a simple HTTP server to run the web app

cd "$(dirname "$0")"/dist || cd "$(dirname "$0")" || exit

# Check if Python 3 is available
if command -v python3 &> /dev/null; then
    echo "🚀 Starting FinanFlow..."
    echo "📱 Open your browser to: http://localhost:8000"
    echo "⚡ Press Ctrl+C to stop the server"
    python3 -m http.server 8000
elif command -v python &> /dev/null; then
    echo "🚀 Starting FinanFlow..."
    echo "📱 Open your browser to: http://localhost:8000"
    echo "⚡ Press Ctrl+C to stop the server"
    python -m SimpleHTTPServer 8000
else
    echo "❌ Python not found. Please install Python 3"
    echo "On macOS: brew install python3"
    echo "On Linux: sudo apt install python3"
    exit 1
fi
