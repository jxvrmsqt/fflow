# FinanFlow Mobile Setup Guide

## 📱 iPhone/iPad Setup

### Step 1: Open Safari
1. Launch Safari browser on your iOS device
2. Navigate to your web app:
   - **Online**: https://fflow-phi.vercel.app/
   - **Local**: Open the extracted `dist/index.html` from your computer (share via AirDrop or access via local network)

### Step 2: Install as App
1. Tap the **Share** button (box with arrow at bottom)
2. Scroll down and tap **Add to Home Screen**
3. Enter name: "FinanFlow"
4. Tap **Add** in the top-right corner
5. App appears on your home screen!

### Step 3: First Launch
1. Tap the FinanFlow icon on home screen
2. Create account or login
3. Grant location permission if prompted (optional)

### Features on iPhone
- ✅ Works offline (data cached locally)
- ✅ Full-screen app experience
- ✅ Push notifications (if configured)
- ✅ Syncs with iCloud (optional)
- ✅ FaceID/TouchID support via browser

### Troubleshooting
- **App won't install**: Try refreshing Safari, ensure cookies enabled
- **App shows blank**: Try force-quitting Safari and reopening
- **Data not saving**: Check Safari Settings > Advanced > JavaScript enabled

---

## 🤖 Android Setup

### Method 1: Chrome App (Recommended)

#### Step 1: Open Chrome
1. Launch Chrome browser on Android
2. Navigate to web app:
   - **Online**: https://fflow-phi.vercel.app/
   - **Local**: Access from your computer via local network

#### Step 2: Install App
1. Tap the **⋮ (menu)** button (3 dots top-right)
2. Tap **"Install app"** or **"Add to Home screen"**
3. Confirm app name as "FinanFlow"
4. Tap **Install**
5. App appears on home screen/app drawer

#### Step 3: Grant Permissions
1. First launch may ask for permissions
2. Grant as needed for notifications/storage
3. App is ready to use!

### Method 2: Firefox Browser

#### Step 1: Open Firefox
1. Launch Firefox on Android
2. Navigate to: https://fflow-phi.vercel.app/

#### Step 2: Install App
1. Tap the **⋮ (menu)** button (top-right)
2. Tap **"Install"**
3. App is added to home screen

### Method 3: Samsung Internet

#### For Samsung devices:
1. Open Samsung Internet browser
2. Navigate to app URL
3. Tap **⋮** > **Add to Home screen**
4. Name as "FinanFlow"
5. Tap **Add**

### Method 4: Local Network (Offline Setup)

If you want to use the app from your local computer:

**On Computer:**
1. Extract `finanflow-web-app.zip`
2. Open Terminal/Command Prompt in extracted folder
3. Run: `python3 -m http.server 8000`
4. Note your computer's IP address

**On Mobile:**
1. Open Chrome/Firefox
2. Type: `http://YOUR_COMPUTER_IP:8000`
3. Tap install from menu
4. Works offline once cached!

---

## 🔄 Syncing Data Between Devices

### Automatic Sync with Google Sheets
1. Set up Google Sheets integration in app Settings
2. Data syncs automatically when connected
3. Access from any device logged into same account

### Manual Backup
1. Go to Settings in app
2. Export your data (if feature available)
3. Import on another device

### Using Cloud Storage
1. Export data from app
2. Save to Google Drive, OneDrive, or Dropbox
3. Access from any device

---

## 🔐 Data Privacy on Mobile

- **Local Storage**: All data stored on device only
- **No Tracking**: App doesn't track your activity
- **No Ads**: Completely ad-free
- **Optional Sync**: Only syncs if you enable it
- **Offine Mode**: Works completely without internet

---

## 📊 Tips for Mobile Use

1. **Homescreen Organization**
   - Create folder "Finance Apps"
   - Add FinanFlow and other finance apps together

2. **Quick Access**
   - Pin app to dock (bottom favorites)
   - Add widget if available

3. **Notifications**
   - Enable notifications in Settings for bill reminders

4. **Battery Optimization**
   - App uses minimal battery (web-based)
   - Optimized for mobile connection

5. **Storage**
   - App only takes ~2-5 MB of storage
   - Very lightweight compared to native apps

---

## 🛠️ Troubleshooting Mobile

### App won't install
- **Solution**: Clear browser cache, try different browser

### App shows blank screen
- **Solution**: Refresh page, check internet connection

### Data not loading
- **Solution**: Check app has permission to storage

### Slow performance
- **Solution**: Close other apps, restart browser

### Sync not working
- **Solution**: Check Google Sheets URL in settings, verify internet

### Can't access offline
- **Solution**: Ensure you visited app while online first (to cache)

---

## 📱 Recommended Setup for Different Devices

### iPhone (Premium Experience)
- Install via Safari "Add to Home Screen"
- Set as home screen icon
- Use FaceID for authentication
- Sync with iCloud for backup

### Android (Most Compatible)
- Install via Chrome for best compatibility
- Add to home screen
- Enable notifications for reminders
- Use Google account for sync

### Tablet (Productivity)
- Install app in full-screen mode
- Use split-screen with other finance apps
- Enable auto-rotate for landscape view

---

## 🔗 Web App vs Native App vs PWA

| Feature | Web App | PWA | Native |
|---------|---------|-----|--------|
| Installation | Link in browser | One-click install | App store |
| Offline | Limited | Yes | Yes |
| Performance | Good | Excellent | Excellent |
| Size | Tiny (2-5MB) | Small | Large |
| Features | Limited | Good | Complete |
| Updates | Automatic | Automatic | Manual |
| **Recommendation** | ⭐ Best | ⭐⭐⭐ Best | ⭐⭐ |

**We recommend installing as PWA for best experience!**

---

## 📲 Devices Tested

✅ iPhone 12+ (iOS 14+)
✅ iPad (iOS 14+)
✅ Samsung Galaxy (Android 8+)
✅ Google Pixel (Android 8+)
✅ OnePlus (Android 8+)

---

## 💬 Need Help?

- Check app Settings for configuration options
- Review app FAQs in-app help
- Check GitHub issues for known problems
- Contact support via in-app menu

---

**Enjoy managing your finances anywhere! 💰📱**
