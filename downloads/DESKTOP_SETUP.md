# FinanFlow Desktop Setup Guide

## 💻 Windows Setup

### Option 1: Web App (Quickest)
1. Extract `finanflow-web-app.zip`
2. Double-click `index.html` to open in browser
3. Or create a shortcut on desktop pointing to `index.html`
4. Right-click shortcut > Properties > Check "Run in full screen"

### Option 2: Local Server
1. Extract `finanflow-web-app.zip`
2. Download and install Python 3 from python.org (if not installed)
3. Hold Shift, right-click in extracted folder
4. Select "Open PowerShell window here"
5. Type: `python -m http.server 8000`
6. Open browser to `http://localhost:8000`

### Option 3: Batch File (Easiest)
1. Extract `finanflow-web-app.zip`
2. Double-click `start-server-windows.bat`
3. Browser will automatically open
4. Keep window open while using app

### Option 4: Desktop Shortcut
1. Extract `finanflow-web-app.zip`
2. Right-click empty space on desktop
3. New > Shortcut
4. Enter path: `C:\path\to\extracted\dist\index.html`
5. Name it "FinanFlow"
6. Click Finish
7. Double-click shortcut to launch

### Performance Tips
- Chrome/Edge: Fastest performance
- Firefox: Good compatibility
- Keep only 1-2 tabs open for better performance
- Disable extensions for faster loading

---

## 🍎 macOS Setup

### Option 1: Web App Browser
1. Extract `finanflow-web-app.zip`
2. Open Finder
3. Navigate to extracted folder
4. Double-click `dist/index.html`
5. Opens in your default browser

### Option 2: Dock Shortcut
1. Open Safari (or Chrome/Firefox)
2. Drag extracted `dist/index.html` to Safari
3. Once loaded, go to Dock menu > Keep in Dock
4. Shortcut stays in dock for quick access

### Option 3: Local Server
1. Extract `finanflow-web-app.zip`
2. Open Terminal (Cmd+Space, type "Terminal")
3. Type: `cd /path/to/extracted/dist`
4. Type: `python3 -m http.server 8000`
5. Open: `http://localhost:8000`

### Option 4: Local Server Script
1. Extract `finanflow-web-app.zip`
2. Make script executable: `chmod +x start-server-macos-linux.sh`
3. Double-click or run: `./start-server-macos-linux.sh`
4. Browser opens automatically

### Performance Tips
- Safari: Native integration, best for Mac
- Chrome: Fastest performance
- Firefox: Good for cross-platform consistency
- M1/M2 Macs: All options work great

---

## 🐧 Linux Setup

### Option 1: Web App Browser
1. Extract `finanflow-web-app.zip`
2. Open file manager
3. Navigate to extracted folder
4. Double-click `dist/index.html`
5. Opens in default browser

### Option 2: Local Server (Terminal)
1. Extract `finanflow-web-app.zip`
2. Open Terminal
3. Navigate: `cd /path/to/extracted/dist`
4. Run: `python3 -m http.server 8000`
5. Open: `http://localhost:8000`

### Option 3: Shell Script
1. Extract `finanflow-web-app.zip`
2. Make script executable: `chmod +x start-server-macos-linux.sh`
3. Run: `./start-server-macos-linux.sh`
4. Browser opens automatically

### Option 4: Systemd Service (Advanced)
Create `/etc/systemd/system/finanflow.service`:
```ini
[Unit]
Description=FinanFlow Web App
After=network.target

[Service]
Type=simple
WorkingDirectory=/path/to/finanflow
ExecStart=/usr/bin/python3 -m http.server 8000
Restart=on-failure

[Install]
WantedBy=multi-user.target
```

Then run:
```bash
sudo systemctl daemon-reload
sudo systemctl start finanflow
sudo systemctl enable finanflow
```

### Linux Distribution Tips
- **Ubuntu/Debian**: Best compatibility
- **Fedora/RHEL**: Works great
- **Arch**: AUR packages recommended
- **Any Linux**: Web version works universally

### Performance
- Firefox: Fastest on Linux
- Chromium: Good performance
- Lightweight: Works on older systems

---

## 🖥️ Launch at Startup

### Windows
1. Create shortcut to `start-server-windows.bat`
2. Press Win+R, type: `shell:startup`
3. Paste shortcut into startup folder
4. Restarts PC, app launches automatically

### macOS
1. Go to System Preferences > General > Login Items
2. Click + button
3. Select `start-server-macos-linux.sh`
4. App launches at login

### Linux
1. Create symbolic link in `~/.config/autostart/`
2. Or add to `~/.bashrc`: `alias finanflow='python3 -m http.server 8000 -d /path/to/dist'`
3. Source bashrc and run: `finanflow`

---

## 🌐 Network Access (LAN)

Use app from other computers on same network:

1. Find your computer's IP:
   - Windows: `ipconfig` (IPv4 Address)
   - Mac/Linux: `ifconfig` (inet)

2. From another computer on same WiFi:
   - Open browser
   - Type: `http://YOUR_IP:8000`
   - App works as if local!

### Firewall
- Allow port 8000 through firewall if needed
- Or set router to forward port 8000

---

## 🔒 Security Notes

- App runs locally in browser (no data sent to servers)
- Set strong password for sync (if using Google Sheets)
- Use HTTPS when accessing over internet
- Don't share your app URL publicly with sensitive data

---

## ⚙️ Advanced Configuration

### Custom Port
Instead of 8000, use different port:
```bash
python3 -m http.server 9000
# Access at http://localhost:9000
```

### Reverse Proxy (Nginx)
```nginx
server {
    listen 80;
    server_name finanflow.local;
    
    location / {
        proxy_pass http://localhost:8000;
    }
}
```

### Docker Container
```dockerfile
FROM python:3.11-slim
WORKDIR /app
COPY dist .
CMD python -m http.server 8000
```

Build and run:
```bash
docker build -t finanflow .
docker run -p 8000:8000 finanflow
```

---

## 🐛 Troubleshooting

### Port 8000 already in use
```bash
# Windows: netstat -ano | findstr :8000
# Mac/Linux: lsof -i :8000
# Use different port: python3 -m http.server 9000
```

### "Cannot find Python"
- Install Python 3 from python.org
- Add to PATH during installation
- Restart terminal/computer

### Blank page loads
- Clear browser cache (Ctrl+Shift+Delete)
- Disable browser extensions
- Try different browser

### Data not saving
- Check browser's localStorage enabled
- Allow website to store data
- Check available disk space

### Slow performance
- Update browser to latest version
- Close unused tabs
- Disable extensions
- Lower graphics settings

---

## 🚀 Performance Optimization

### Browser Settings
- Disable unnecessary extensions
- Enable hardware acceleration
- Use latest browser version
- Clear cache regularly

### System
- Sufficient RAM (2GB minimum)
- SSD recommended for fast loading
- Close background apps
- Stable internet connection

### Network
- Use 5GHz WiFi if available
- Wired connection if possible
- Disable VPN for local access
- Check internet speeds

---

## 📊 System Requirements

| Component | Minimum | Recommended |
|-----------|---------|-------------|
| CPU | Intel i3 / AMD Ryzen 3 | i5 / Ryzen 5+ |
| RAM | 2 GB | 8 GB+ |
| Storage | 100 MB free | 500 MB free |
| Browser | Chrome 90+ | Latest version |
| OS | Windows 10 / macOS 10.13 / Ubuntu 18.04 | Latest version |

---

## 📱 Sync Between Desktop & Mobile

1. **Desktop**: Go to Settings
2. Set up Google Sheets sync URL
3. **Mobile**: Install as PWA (see MOBILE_SETUP.md)
4. Configure same sync URL
5. Data syncs automatically across all devices

---

## 📞 Support & Updates

- **Online Version**: https://fflow-phi.vercel.app/
- **GitHub**: https://github.com/jxvrmsqt/fflow
- **Updates**: Check GitHub releases for latest

---

**Ready to manage your finances! 💰**
