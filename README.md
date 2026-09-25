# Parasuvaikkal Service Co-operative Bank (PCSB) Landing Page

A modern, high-performance static website for **Parasuvaikkal Service Co-operative Bank Ltd. No. 663** (പരശുവയ്ക്കൽ സർവ്വീസ് സഹകരണ ബാങ്ക്).

Inspired by the visual identity of **Karakulam SCB** ([karakulamscb.com](https://karakulamscb.com/)), featuring deep cooperative crimson tones (`#8B1519`), bilingual identity (English & Malayalam), responsive architecture, and interactive banking tools.

---

## 🌟 Key Features

1. **Top Notice Marquee Ticker**: Real-time breaking announcements, revised interest rates, and contact helpline.
2. **Bilingual Branding**: Authentic Kerala cooperative visual identity with Malayalam and English typography.
3. **Hero Showcase**: Split banner highlighting 50+ years of trust, deposit returns up to 8.5%, and building photograph with floating milestone badge.
4. **Services Pillar Grid**:
   - **Deposit Schemes**: Fixed Deposits, Recurring Deposits, Senior Citizen bonus rates.
   - **Loan Offerings**: Instant Gold Loans (Swarna Panayam), Agricultural Subsidies, Kudumbashree, Housing, MSME.
   - **Community Initiatives**: Subsidized Neethi Medical Store, Supermarket, and Organic Farming depots.
5. **Interactive Financial Calculators**:
   - **Fixed Deposit (FD) Calculator**: Dynamic quarterly compounding calculator with Senior Citizen rate toggle.
   - **Loan EMI Calculator**: Real-time monthly installment, total interest, and repayment estimator.
6. **Live Interest Rates Schedule**: Tabular view of general and senior citizen term deposits and loan rates.
7. **Interactive Branch Network Locator**: Tabbed switcher between Head Office, Evening Branch, and Extension Counter with Google Maps integration.
8. **Class-1 Special Grade Co-operative Bank Footer**: Complete legal, regulatory, and contact disclaimers.

---

## 🚀 How to Host for Free on GitHub Pages (Step-by-Step)

This website is **100% static** (Semantic HTML5, Modern CSS3, Vanilla JS). It requires **zero build steps** and can be deployed in under 2 minutes:

### Option A: Via GitHub Desktop or Web Interface
1. Create a new GitHub repository (e.g., `parasuvaikkal-scb` or `pscb-landing`).
2. Upload all files from this directory (`index.html`, `.nojekyll`, `css/`, `js/`, `assets/`) to the repository `main` branch.
3. In your GitHub repository, click **Settings** → **Pages** (in the left sidebar).
4. Under **Branch**, select `main` and `/ (root)`, then click **Save**.
5. Within 60 seconds, your site will be live at:
   ```
   https://<your-username>.github.io/parasuvaikkal-scb/
   ```
6. *(Optional)* Add a custom domain (e.g. `www.parasuvaikkalscb.com`) under the Custom Domain field.

### Option B: Via Git Command Line
```bash
git init
git add .
git commit -m "Initial commit for Parasuvaikkal SCB landing page"
git branch -M main
git remote add origin https://github.com/<your-username>/pscb-landing.git
git push -u origin main
```
Then enable GitHub Pages under **Repository Settings** → **Pages**.

---

## 💻 Local Testing & Preview

To preview the website locally on your computer:

### Method 1: Double-click
Double-click `index.html` to open it in any web browser (Chrome, Edge, Firefox, Safari).

### Method 2: Python Local Server
Run in PowerShell / Terminal:
```bash
python -m http.server 8000
```
Then visit: `http://localhost:8000`

### Method 3: Node / npx
```bash
npx serve .
```

---

## 📁 File Structure

```
pscb-landing/
├── index.html            # Main semantic webpage with all sections
├── .nojekyll             # Tells GitHub Pages to skip Jekyll processing
├── README.md             # Documentation and deployment instructions
├── css/
│   └── styles.css        # Responsive stylesheet, CSS variables & design system
├── js/
│   └── app.js            # Interactive FD/EMI calculators, branch switcher, mobile menu
└── assets/
    └── images/
        ├── hero-building.jpg     # High-resolution branch building photo
        ├── deposit-scheme.jpg    # Wealth growth & deposit schemes visual
        ├── loan-offering.jpg     # Loan partnership & agreements visual
        └── community-store.jpg   # Neethi store & cooperative community visual
```
