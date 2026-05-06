# FinanFlow - Download Packages

**FinanFlow** - Gerenciamento Financeiro Inteligente  
Smart Financial Management for Desktop & Mobile

---

## 📦 Available Packages

### 1. **Web App** (Browser)
- **File**: `finanflow-web-app.zip`
- **Size**: ~2.5 MB
- **Platforms**: Windows, macOS, Linux, iPhone, Android
- **How to Use**: 
  - Extract the ZIP file
  - Open `index.html` in your browser
  - Or use as a PWA (see instructions below)

### 2. **Desktop App** (Electron)
- **Linux**: Coming soon (requires native build environment)
- **Windows**: Requires Windows 10+
- **macOS**: Requires macOS 10.13+
- **How to Build**: See "Build from Source" section

### 3. **Mobile App** (Web-based)
- **Android**: Web app or APK (see Mobile Setup)
- **iPhone**: Web app via Safari
- **How to Install**: See "Mobile Setup" section

---

## 🚀 Quick Start

### Option 1: Web App (Easiest - All Devices)
1. Download `finanflow-web-app.zip`
2. Extract to a folder
3. Open `index.html` in any browser
4. Done! Book like any website

### Option 2: Progressive Web App (PWA) - Recommended
1. Open `index.html` in Chrome, Edge, or Safari
2. Click the app icon in the address bar
3. Select "Install app" or "Add to Home Screen"
4. App will be installed like any native app
5. Works offline with cached data!

### Option 3: Desktop Application
See "Desktop Setup" section below

---

## 💻 Desktop Setup

### Windows
1. Download `finanflow-windows-latest.exe` (when available)
2. Double-click to install
3. Launch from Start Menu

**Or** use web app approach:
1. Extract `finanflow-web-app.zip`
2. Create a shortcut to `index.html` on your desktop
3. Pin to Start Menu for quick access

### macOS
1. Download `finanflow-mac-latest.dmg` (when available)
2. Double-click DMG file
3. Drag app to Applications folder
4. Launch from Launchpad

**Or** use web app approach:
1. Open `index.html` in Safari
2. Go to **Share** > **Add to Dock**
3. App appears in your dock

### Linux
1. Download `finanflow-linux-x64` (when available)
2. Make executable: `chmod +x finanflow-linux-x64`
3. Run: `./finanflow-linux-x64`

**Or** use web app approach:
1. Extract `finanflow-web-app.zip` to `~/.local/share/applications/`
2. Run: `python3 -m http.server 8000`
3. Open `http://localhost:8000` in browser

---

## 📱 Mobile Setup

### iPhone/iPad
1. Open Safari browser
2. Go to: https://fflow-phi.vercel.app/ (or use extracted web app)
3. Tap **Share** button (bottom)
4. Select **Add to Home Screen**
5. Name it "FinanFlow" and tap **Add**
6. App is now on your home screen!

**Data Storage**: 
- All data saves locally on your device
- Auto-syncs to Google Sheets if configured

### Android

#### Method 1: Chrome Web App (Easiest)
1. Open Chrome browser
2. Go to: https://fflow-phi.vercel.app/ (or use extracted web app)
3. Tap **≡** (menu) > **Install app** or **Add to Home Screen**
4. App appears on home screen

#### Method 2: Firefox
1. Open Firefox browser
2. Go to: https://fflow-phi.vercel.app/
3. Tap **≡** (menu) > **Install**
4. App appears on home screen

#### Method 3: APK Installation (Coming Soon)
We're preparing native Android APK builds. Check back for updates!

---

## 🔒 Data & Privacy

### Local Storage
- All financial data is stored **locally on your device**
- Nothing is sent to servers by default
- Works completely offline!

### Google Sheets Sync (Optional)
- Connect your own Google Sheets for backup
- Data stays under your control
- See app Settings for configuration

### Security
- No accounts required
- No ads or tracking
- Open source (available on GitHub)

---

## 📋 System Requirements

### Desktop (Web App)
- Modern browser (Chrome, Firefox, Safari, Edge)
- 50 MB disk space
- Internet (for first load and sync)

### Mobile
- **iOS**: iOS 14+ (Safari browser installed)
- **Android**: Android 8+ (Chrome or Firefox installed)
- 100 MB disk space

### Desktop (Electron App)
- **Windows**: Windows 10 or later
- **macOS**: macOS 10.13 or later
- **Linux**: Ubuntu 16.04+ or equivalent
- 200 MB disk space

---

## 🛠️ Build from Source

### Prerequisites
```bash
Node.js 18.x or higher
pnpm (npm install -g pnpm)
```

### Clone & Install
```bash
git clone https://github.com/jxvrmsqt/fflow.git
cd fflow
pnpm install
```

### Development
```bash
# Web app
pnpm run dev

# With Electron (desktop)
pnpm run electron:dev
```

### Build

#### Web App
```bash
pnpm run build
# Output in: ./dist/
```

#### Desktop (Linux)
```bash
pnpm run electron:build:linux
# Output in: ./dist_electron/
```

#### Desktop (Windows - requires Windows machine)
```bash
pnpm run electron:build:win
```

#### Desktop (macOS - requires macOS machine)
```bash
pnpm run electron:build:mac
```

---

## 🔧 Configuration

### Google Sheets Integration
To backup your data to Google Sheets:

1. Create a Google Sheet
2. Copy the Sheet ID from the URL
3. Deploy a Google Apps Script web app (see EXEMPLO_IMPORTACAO.md)
4. In FinanFlow Settings, paste your App Script URL
5. Click "Sincronizar Agora"

---

## 📞 Support

- **Issues**: GitHub Issues (coming soon)
- **Docs**: Check `README.md` in project root
- **Examples**: See `EXEMPLO_IMPORTACAO.md`

---

## 📜 License

MIT License - Free to use and modify

---

## 🎯 Features

✅ Track debts with smart prioritization  
✅ Monitor monthly expenses  
✅ View financial progress  
✅ Get AI-powered financial advice  
✅ Budget projections  
✅ Family financial management  
✅ Offline support  
✅ Cross-device sync  
✅ No ads or tracking  

---

## 🔄 Updates

Check https://fflow-phi.vercel.app/ for latest web version  
Latest builds always available in downloads folder

---

**Made with ❤️ for your financial freedom** 💰
