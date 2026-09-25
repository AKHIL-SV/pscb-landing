# 🏦 Parasuvaikkal Service Co-operative Bank (Ltd. No. 663)
### പരശുവയ്ക്കൽ സർവ്വീസ് സഹകരണ ബാങ്ക്

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-success?style=for-the-badge&logo=github)](https://akhil-sv.github.io/pscb-landing/)
[![Status](https://img.shields.io/badge/Status-Active-brightgreen?style=for-the-badge)]()
[![Bilingual](https://img.shields.io/badge/Language-English%20%7C%20%E0%B4%AE%E0%B4%B2%E0%B4%AF%E0%B4%BE%E0%B4%B3%E0%B4%82-red?style=for-the-badge)]()
[![Responsive](https://img.shields.io/badge/Responsive-Mobile%20%7C%20Tablet%20%7C%20Desktop-blue?style=for-the-badge)]()

> Official modern, high-performance static landing page for **Parasuvaikkal Service Co-operative Bank Ltd. No. 663**, a Class-1 Special Grade Co-operative Bank serving the Parassala & Neyyattinkara rural community in Thiruvananthapuram, Kerala since 1968.

---

## 🔗 Live Website
🌐 **[https://akhil-sv.github.io/pscb-landing/](https://akhil-sv.github.io/pscb-landing/)**

---

## ✨ Key Features & Highlights

### 🌐 1. Instant Bilingual Experience (English & Malayalam)
* **1-Click Language Switcher**: Industry-standard custom dropdown in the top-right navigation bar with active checkmarks.
* **Full UI Localization**: Seamlessly updates everything in real time without page reload — including the official red signboard logo, navigation links, announcement ticker, hero banner, services, calculators, branch info, and footer.
* **Optimized Kerala Typography**: Automatically selects *Plus Jakarta Sans* / *Merriweather* for English and *Noto Sans Malayalam* for Malayalam, preventing text wrapping or layout breaks.

### 📢 2. Live Rotating Announcement Ticker
* **Pulsing Live Badge**: `[ 🟢 Notice ]` / `[ 🟢 അറിയിപ്പ് ]` indicator.
* **Smooth In-Place Rotation**: Clean vertical fade-and-slide every 4.5 seconds across 4 bilingual bank announcements:
  1. *Attractive Interest Rates: Up to 8.50% on Fixed Deposits*
  2. *Subsidized Agri & Kudumbashree SHG Loans with minimal paperwork*
  3. *Instant Gold Loans (Swarna Panayam) sanctioned in 15 minutes*
  4. *Neethi Medical Store & Consumer Supermarket discounts*
* **Pause-on-Hover Accessibility**: Automatically pauses when hovered, allowing visitors to read notices at their own pace.

### 🧮 3. Interactive Financial Calculators
* **Fixed Deposit (FD) Calculator**:
  * Real-time sliders for Deposit Amount (₹10,000 to ₹25,00,000) and Duration (1 to 10 Years).
  * Category toggle for **Regular Citizens (8.00% – 8.50%)** and **Senior Citizens (+0.50% Extra: up to 9.00%)**.
  * Instant quarterly compounded maturity value and total interest calculation.
* **Loan EMI Calculator**:
  * Sliders for Loan Amount, Interest Rate (8.0% – 15.0%), and Tenure (1 to 15 Years).
  * Computes Exact Monthly EMI, Total Interest Payable, and Total Repayment Amount.
* **Zero-Overflow Mobile Design**: Fully constrained with `min-width: 0` and responsive auto-stacking on all screen sizes down to 320px.

### 🏛️ 4. Official Cooperative Signboard Header
* Designed after authentic Kerala primary cooperative bank signboards with official bank emblem, dual-line title, and registration strip (`LTD No: 663` / `ക്ലിപ്തം നമ്പർ - 663`).
* Compact, sticky with subtle scroll shadow.
* Modern slide-down mobile hamburger drawer on tablets and smartphones (≤ 1080px).

### 📊 5. Transparent Interest Rates Schedule
* Clear, tabular side-by-side comparison of **Deposit Schemes** (Savings, FD, Recurring, Senior Citizen rates) and **Loan Products** (Gold Loans, Agri Subsidies, Kudumbashree, Housing, MSME).
* Mobile horizontal scroll containment (`overflow-x: auto`) prevents viewport overflow.

### 📍 6. Interactive Multi-Branch Network Locator
* Tabbed switcher for **Head Office (Parasuvaikkal)**, **Evening Branch**, and **Extension Counter**.
* Live address, phone numbers, banking hours, and interactive embedded Google Map.

### 🛡️ 7. Full Regulatory & Social Trust Footer
* Complete registration details under the *Kerala Co-operative Societies Act 1969*.
* Class-1 Special Grade Bank badge, quick links, contact info, and copyright disclaimers.

---

## 🛠️ Technology Stack

* **Core Structure**: Semantic HTML5 with accessibility attributes (`aria-label`, `role`, `aria-live`).
* **Styling**: Vanilla CSS3 with CSS Custom Properties (Design Tokens), Flexbox, and CSS Grid.
* **Interactivity**: Lightweight Vanilla JavaScript (ES6+) with zero external dependencies.
* **Typography**: Google Fonts (*Merriweather*, *Plus Jakarta Sans*, *Noto Sans Malayalam*).
* **Hosting**: GitHub Pages (100% static, automated SSL, global CDN).

---

## 📁 Repository Structure

```
pscb-landing/
├── index.html            # Main semantic webpage with all sections
├── .nojekyll             # Bypasses Jekyll processing on GitHub Pages
├── README.md             # Comprehensive project documentation
├── server.js             # Local Node.js development server (no-cache headers)
├── css/
│   └── styles.css        # Responsive stylesheet & design system (v10)
├── js/
│   └── app.js            # Bilingual engine, calculators, ticker & mobile drawer (v5)
└── assets/
    ├── logo/
    │   └── app_logo.png  # Official bank emblem (used as header logo & favicon)
    └── images/
        ├── hero-building.jpg    # Bank head office visual
        ├── deposit-scheme.jpg   # Wealth growth visual
        ├── loan-offering.jpg    # Loan partnership visual
        └── community-store.jpg  # Neethi medical store visual
```

---

## 💻 Local Development & Preview

To run and preview the website locally:

### Option 1: Using the included Node.js server
```powershell
node server.js
```
Then open your browser at **`http://localhost:8085/`**.

### Option 2: Using Python HTTP server
```powershell
python -m http.server 8080
```
Then open your browser at **`http://localhost:8080/`**.

### Option 3: Direct File
Double-click `index.html` to open directly in any modern browser.

---

## 🚀 Deployment & Updates

This repository is configured for **automatic GitHub Pages deployment**:

1. Make your changes locally.
2. Commit and push to `main`:
   ```powershell
   git add .
   git commit -m "Update site content"
   git push origin main
   ```
3. GitHub Pages will build and deploy the update live within 1–2 minutes.

---

## 📞 Bank Contact & Location

* **Bank Name**: Parasuvaikkal Service Co-operative Bank Ltd. No. 663
* **Address**: Parasuvaikkal P.O., Near Parassala, Thiruvananthapuram, Kerala - 695508
* **Phone**: 0471-2223456 / 2223457
* **Email**: info@parasuvaikkalscb.com
* **Working Hours**: Mon – Sat: 9:00 AM – 4:30 PM (Evening Branch: up to 7:00 PM)

---

© 2026 Parasuvaikkal Service Co-operative Bank Ltd. No. 663. Registered under Kerala Co-operative Societies Act 1969.
