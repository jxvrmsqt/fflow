# FinanFlow - Quick Start Guide

**Version**: 1.0.0  
**Last Updated**: May 6, 2026  
**License**: MIT

---

## 🎯 Choose Your Installation Method

### 📱 Mobile (Easiest)
👉 [See MOBILE_SETUP.md](MOBILE_SETUP.md) for detailed instructions

**iPhone/iPad**: Safari App Install (2 minutes)  
**Android**: Chrome/Firefox App Install (2 minutes)

### 💻 Desktop
👉 [See DESKTOP_SETUP.md](DESKTOP_SETUP.md) for detailed instructions

**Windows**: Run `start-server-windows.bat` (1 minute)  
**macOS**: Run `start-server-macos-linux.sh` (1 minute)  
**Linux**: Run `start-server-macos-linux.sh` (1 minute)

### 🌐 Online (No Installation)
Simply visit: **https://fflow-phi.vercel.app/**

Works on any device with internet browser!

---

## ⚡ Super Quick Start (5 Minutes)

### Desktop Users:
1. **Extract** `finanflow-web-app.zip`
2. **Windows**: Double-click `start-server-windows.bat`
   **Mac/Linux**: Double-click `start-server-macos-linux.sh`
3. Browser opens automatically
4. **Create account** and start managing finances!

### Mobile Users:
1. **Open Safari** (iPhone) or **Chrome** (Android)
2. Go to: `https://fflow-phi.vercel.app/`
3. **Tap Share** → **Add to Home Screen**
4. **Tap your new app** and start using!

### Online Users:
1. Visit: https://fflow-phi.vercel.app/
2. No installation needed
3. Works in browser on any device

---

## 📦 What's Included

```
downloads/
├── README.md                          # This guide
├── QUICK_START.md                     # Quick start (you are here)
├── DESKTOP_SETUP.md                   # Desktop detailed setup
├── MOBILE_SETUP.md                    # Mobile detailed setup
├── finanflow-web-app.zip              # Complete web app (125 KB)
├── start-server-windows.bat           # Windows launcher
└── start-server-macos-linux.sh        # macOS/Linux launcher
```

---

## 🚀 Installation Methods

### Method 1: Automatic Server (Recommended)

**Windows:**
```
1. Extract finanflow-web-app.zip
2. Double-click start-server-windows.bat
3. Wait for browser to open
4. Done!
```

**Mac/Linux:**
```
1. Extract finanflow-web-app.zip
2. Right-click start-server-macos-linux.sh
3. Select "Open"
4. Browser opens automatically
```

### Method 2: Manual Server

**All Platforms:**
```bash
# Navigate to extracted folder
cd path/to/finanflow-web-app/dist

# Start server
python3 -m http.server 8000

# Open browser to:
http://localhost:8000
```

### Method 3: Direct Browser Open

**All Platforms:**
```
1. Extract finanflow-web-app.zip
2. Right-click dist/index.html
3. Open with browser
4. Done!
```

### Method 4: Create Desktop Shortcut

**Windows:**
```
1. Extract finanflow-web-app.zip
2. Right-click dist/index.html
3. Create Shortcut
4. Move to Desktop
5. Double-click anytime to launch
```

**Mac/Linux:**
```bash
# Create symbolic link
ln -s /path/to/finanflow-web-app/dist/index.html ~/Desktop/FinanFlow.html

# Or create .desktop file (Linux)
```

---

## 🌐 Online Version

No installation needed! Access directly:
- **Web App**: https://fflow-phi.vercel.app/
- **Status**: 🟢 Online (always updated)
- **Works on**: Windows, Mac, Linux, iPhone, Android

---

## 📱 Progressive Web App (PWA)

Best mobile experience - works offline!

### iPhone/iPad:
1. Open Safari
2. Visit: https://fflow-phi.vercel.app/
3. Tap Share menu (⬆️ arrow)
4. Tap "Add to Home Screen"
5. Tap "Add"
6. App appears on home screen!

### Android:
1. Open Chrome
2. Visit: https://fflow-phi.vercel.app/
3. Tap ⋮ (menu)
4. Tap "Install app"
5. App appears on home screen!

### Benefits:
✅ Offline support (works without internet!)  
✅ Faster loading  
✅ App-like experience  
✅ All data stored locally on device  
✅ Automatic updates  

---

## 💾 Data & Settings

### Where Data is Stored
- **Local Storage**: On your device only
- **No cloud sync by default**: Your data stays private
- **Optional Google Sheets backup**: Connect in Settings if desired

### Your First Login
1. Choose a display name
2. Enter monthly income
3. (Optional) Add family member
4. Start tracking finances

### Account Features
- Create account on first use
- No email/password required
- Data persists in browser storage
- Works offline

---

## 💰 Key Features

### Dashboard
- Financial health overview
- Progress toward financial goals
- Monthly budget status
- Debt reduction progress

### Debt Management
- Track all debts
- Smart prioritization
- Payment planning
- Progress visualization

### Monthly Planning
- Fixed expense tracking
- Monthly budget
- Surplus calculation
- Automated payment allocation

### Analytics
- Financial history
- Spending trends
- Progress charts
- Goal tracking

### AI Advisor
- AI-powered financial advice
- Personalized recommendations
- Debt reduction strategies
- (Requires API key in settings)

### Sync & Backup
- Google Sheets integration (optional)
- Family sharing
- Cross-device sync
- Data portability

---

## ⚙️ Initial Setup

### Step 1: First Login
```
1. Open the app
2. Click "Entrar com Google" or create account
3. Enter your name
4. Enter monthly income
5. Choose if adding family member
6. Done!
```

### Step 2: Add Your First Debt
```
Navigate to "Dívidas" tab:
- Click "+ Adicionar Dívida"
- Enter debt details:
  - Name: e.g., "Cartão Nubank"
  - Total balance
  - Monthly payment
  - Interest rate
  - Type: Cartão/Financiamento/Acordo
- Save
```

### Step 3: View Dashboard
```
Go to "Dashboard":
- See your progress
- View monthly summary
- Check financial status
- Set goals
```

### Step 4: Set Up Sync (Optional)
```
Go to Settings:
- Enter Google Sheets URL
- Click "Sincronizar Agora"
- Data backs up automatically
```

---

## 🔒 Privacy & Security

✅ All data stored **locally on your device**  
✅ No tracking or analytics  
✅ No ads  
✅ Open source (can audit code)  
✅ No accounts required  
✅ HTTPS for online version  
✅ Works completely offline  

---

## 🐛 Troubleshooting

### "App won't open"
- **Solution**: Check Python is installed (see DESKTOP_SETUP.md)
- Try different browser
- Clear browser cache

### "Port 8000 already in use"
- **Solution**: Use different port: `python3 -m http.server 9000`
- Open: `http://localhost:9000`

### "Data not saving"
- **Solution**: Enable browser storage permission
- Check available disk space
- Try different browser

### "Sync not working"
- **Solution**: Verify Google Sheets URL is correct
- Check internet connection
- See troubleshooting in DESKTOP_SETUP.md

### "App is slow"
- **Solution**: Close other browser tabs
- Disable extensions
- Restart browser
- Use faster internet connection

---

## 📚 Advanced Setup

### Custom Domain
```bash
# Use with Nginx/Apache
# Point to your local server
# Access app from custom URL
```

### Docker (Linux/Mac)
```bash
docker run -p 8000:8000 \
  -v $(pwd)/finanflow-web-app/dist:/app \
  python:3.11 \
  python -m http.server 8000 -d /app
```

### Cloud Deployment
```
Deploy dist/ folder to:
- Vercel (recommended)
- Netlify
- GitHub Pages
- AWS S3
- Azure Static Web Apps
```

---

## 📖 Documentation

- **README.md**: Full documentation
- **DESKTOP_SETUP.md**: Desktop installation details
- **MOBILE_SETUP.md**: Mobile installation details
- **EXEMPLO_IMPORTACAO.md**: Data import guide

---

## 🆘 Getting Help

### Issues/Bugs
1. Check troubleshooting sections above
2. Review detailed setup guides
3. Check browser console for errors (F12)
4. Report on GitHub issues

### Feature Requests
- Open GitHub discussion
- Describe desired feature
- Suggest implementation approach

---

## 🔄 Updates & Versions

**Current Version**: 1.0.0

### Web Version
- Always up-to-date
- Auto-updates on each visit
- Latest features immediately available

### Offline Version
- Download latest from releases
- Manual updates available
- Check GitHub for new versions

---

## 📞 Support Channels

- **GitHub**: https://github.com/jxvrmsqt/fflow
- **Issues**: Report bugs on GitHub
- **Discussions**: Ask questions on GitHub
- **In-app Help**: Check app menu for guides

---

## 🎉 Next Steps

1. **Install** the app (choose your method above)
2. **Set up** your account and income
3. **Add** your first debts or expenses
4. **Configure** Google Sheets sync (optional)
5. **Start tracking** your financial progress!

---

## 💡 Tips for Best Experience

✨ **Mobile**: Install as PWA for offline access  
✨ **Desktop**: Use Chrome/Firefox for best performance  
✨ **Sync**: Set up Google Sheets for cloud backup  
✨ **Organization**: Clean up debts monthly  
✨ **Planning**: Review monthly reports  
✨ **Goals**: Set targets in dashboard  

---

**Ready to take control of your finances? Let's go! 💪💰**

For detailed platform-specific instructions, see:
- 📱 [MOBILE_SETUP.md](MOBILE_SETUP.md)
- 💻 [DESKTOP_SETUP.md](DESKTOP_SETUP.md)
