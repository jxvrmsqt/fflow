# FinanFlow - Build Guide for iOS & Desktop

This guide will help you build and deploy FinanFlow to iOS, macOS, Windows, and Linux.

## 📋 Prerequisites

- **Node.js** >= 18 and < 25
- **npm** >= 9 or **pnpm** >= 8
- For **iOS**: macOS with Xcode Command Line Tools
- For **macOS/Windows/Linux**: Electron Builder

## 🚀 Quick Start

### 1. Install Dependencies
```bash
pnpm install
# or npm install
```

### 2. Build Web Version
```bash
pnpm run build
# or npm run build
```

The web build will be in the `dist/` folder, ready for Vercel or any web hosting.

---

## 🍎 iOS Build

### Setup & Build

```bash
# 1. Install Capacitor assets
pnpm exec cap assets generate

# 2. Add iOS platform
pnpm exec cap add ios

# 3. Install iOS dependencies
cd ios
pod install
cd ..

# 4. Open Xcode
pnpm exec cap open ios
```

### In Xcode:
1. Select the **FinanFlow** scheme
2. Choose your target device or simulator
3. Click the **Play** button to build and run
4. For production: Product > Archive > Distribute App

---

## 💻 Desktop Builds (Electron)

### macOS
```bash
pnpm run electron:build:mac
```
Output: `dist_electron/FinanFlow-*.dmg`

### Windows
```bash
pnpm run electron:build:win
```
Output: `dist_electron/FinanFlow Setup *.exe`

### Linux
```bash
pnpm run electron:build:linux
```
Output: `dist_electron/FinanFlow-*.AppImage`

---

## 📦 File Structure

```
dist/                 # Web build (ready to deploy to Vercel)
├── index.html
├── assets/
│   ├── index-*.js
│   ├── index-*.css
│   └── manifest-*.webmanifest
├── logo.svg          # App icon
└── favicon.svg       # Browser favicon

ios/                  # iOS project (after `cap add ios`)
android/              # Android project (optional)

dist_electron/        # Desktop builds
├── FinanFlow-*.dmg   # macOS
├── FinanFlow Setup *.exe  # Windows (NSIS installer)
└── FinanFlow-*.AppImage   # Linux
```

---

## 🔧 Project Icons

The app uses:
- **`public/logo.svg`** - Main app logo (used everywhere)
- **`public/favicon.svg`** - Browser favicon
- These are automatically copied to builds

---

## 🌐 Web Deployment (Vercel)

The `dist/` folder is ready to deploy to Vercel:

```bash
# Push to GitHub, and Vercel will auto-deploy
git push origin main

# Or manually deploy with Vercel CLI
pnpm install -g vercel
vercel deploy dist/
```

**Live URL**: https://fflow-iota.vercel.app/

---

## 📱 Platform-Specific Notes

### iOS
- Requires **M1/M2 Mac** or Intel Mac with Xcode
- Build time: ~5-10 minutes (first time longer)
- App requires iOS 13+

### Android (Optional)
```bash
pnpm exec cap add android
pnpm exec cap open android
```

### macOS
- Supports Intel and Apple Silicon (M1/M2)
- Code signing required for distribution
- ~50-100 MB app size

### Windows
- Creates NSIS installer
- ~150-200 MB total size
- Requires Windows 7+

### Linux
- Creates AppImage (no installation needed)
- Works on Ubuntu, Fedora, etc.
- ~100-150 MB app size

---

## 🛠 Development

### Dev Server (Web)
```bash
pnpm run dev
# Runs at http://localhost:3000
```

### Dev Server (Electron)
```bash
pnpm run electron:dev
# Opens Electron window with hot reload
```

---

## 📊 Build Sizes

- **Web Build**: ~250 KB (gzipped)
- **macOS**: ~100 MB
- **Windows**: ~150 MB
- **Linux**: ~120 MB
- **iOS**: ~60-80 MB

---

## 🔐 Environment Variables

**For Gemini AI Features:**
```bash
# Create .env file with:
VITE_GEMINI_API_KEY=your_actual_api_key_here
```

This is already configured in `.env` for development.

---

## 📲 Deploy to App Stores

### iOS App Store
1. Complete the Xcode build
2. Go to Product > Archive
3. Use Apple's TestFlight or App Store Connect
4. Requires Apple Developer Account ($99/year)

### Google Play (Android)
```bash
pnpm exec cap add android
# See docs at capacitor.ionicframework.com
```

---

## ⚡ Tips & Tricks

- **Faster builds**: Use `pnpm` instead of `npm`
- **Code splitting**: For smaller bundles, configure Vite's `build.rollupOptions`
- **Signing**: For production, set up code signing in Electron Builder config
- **Testing**: Use `pnpm run preview` to test production build locally

---

## 🆘 Troubleshooting

### iOS build fails
```bash
# Clean Xcode build folder
rm -rf ~/Library/Developer/Xcode/DerivedData/*
# Recreate iOS project
rm -rf ios/
pnpm exec cap add ios
```

### Electron icon not showing
- Ensure `public/logo.svg` exists
- Icons are auto-converted during build

### Web app not loading after build
- Check browser console for errors
- Clear cache: Ctrl+Shift+R (Chrome/Firefox)
- Redeploy to Vercel

---

## 📞 Support

For issues with builds:
1. Check the build output logs
2. Ensure all dependencies are installed
3. See specific platform documentation:
   - https://capacitorjs.com/docs/getting-started
   - https://www.electron.build/
   - https://vitejs.dev/

---

**Happy deploying! 🚀**
