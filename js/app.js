/**
 * Parasuvaikkal Co-operative Service Bank (PCSB)
 * Interactive Client Scripts
 */

document.addEventListener('DOMContentLoaded', () => {
  initLanguageSwitcher();
  initAnnouncementTicker();
  initStickyHeader();
  initMobileMenu();
  initCalculators();
  initBranchSelector();
  initSmoothScroll();
});

/* ==========================================================================
   0. Bilingual Language Switcher System (English <-> Malayalam)
   ========================================================================== */
const I18N_DATA = {
  en: {
    logo_line1: "Parasuvaikkal Service",
    logo_line2: "Co-operative Bank",
    logo_strip: "LTD No: 663",
    ticker_badge: "Notice",
    brand_title: "Parasuvaikkal Service Co-operative Bank",
    brand_sub: "LTD No: 663 • Class-1 Special Grade Bank",
    welcome: "Welcome to Parasuvaikkal Service Co-operative Bank",
    nav_home: "Home",
    nav_about: "About Us",
    nav_services: "Services",
    nav_rates: "Interest Rates",
    nav_calculators: "Calculators",
    nav_branches: "Branches",
    nav_contact: "Contact Us",
    nav_support: "Contact Support",
    ticker: [
      "Attractive Interest Rates: Earn up to 8.50% on Fixed Deposits",
      "Subsidized Agricultural & Kudumbashree SHG Loans with minimal paperwork",
      "Instant Gold Loans (Swarna Panayam) sanctioned within 15 minutes",
      "Neethi Medical Store & Consumer Supermarket offering quality discounts"
    ],
    hero_tag: "ESTABLISHED 1968",
    hero_title: "Over 50 Years of Trust, Powered by Modern Banking",
    hero_desc: "Since 1968, Parasuvaikkal Service Co-operative Bank has been the financial backbone of the Parassala & Neyyattinkara rural community. Enjoy competitive interest rates up to 8.5% on Fixed Deposits and fast, hassle-free loan approvals.",
    hero_btn_explore: "Explore Our Services",
    hero_btn_rates: "View Interest Rates",
    hero_badge_text: "Years of Experience & Trust",
    offer_tag: "WHAT WE OFFER",
    offer_title: "Explore Our Financial Services",
    offer_desc: "Tailored banking and welfare solutions designed to empower families, farmers, small businesses, and senior citizens.",
    srv_dep_tag: "GROW YOUR WEALTH SECURELY",
    srv_dep_title: "Deposit Schemes",
    srv_dep_desc: "From attractive 8.5% fixed deposits to flexible recurring and savings schemes, earn guaranteed returns with special higher rates for senior citizens.",
    srv_loan_tag: "HASSLE-FREE FINANCIAL SUPPORT",
    srv_loan_title: "Loan Offerings",
    srv_loan_desc: "Get quick loan approvals with minimal documentation for Gold loans, agricultural subsidies, housing construction, MSME, and personal credit needs.",
    srv_comm_tag: "COMMUNITY-FIRST INITIATIVES",
    srv_comm_title: "Neethi Store & Services",
    srv_comm_desc: "Explore our subsidized Neethi medical store, consumer supermarket, and organic farming distribution points aimed at uplifting our local village society.",
    heritage_tag: "OUR HERITAGE",
    heritage_title: "Serving Parasuvaikkal Since 1968",
    feat_tag: "WHY CHOOSE US",
    feat_title: "Our Core Banking Features",
    branch_tag: "LOCATE US",
    branch_title: "Our Branch Network"
  },
  ml: {
    logo_line1: "പരശുവയ്ക്കൽ സർവ്വീസ്",
    logo_line2: "സഹകരണ ബാങ്ക്",
    logo_strip: "ക്ലിപ്തം നമ്പർ - 663",
    ticker_badge: "അറിയിപ്പ്",
    brand_title: "പരശുവയ്ക്കൽ സർവ്വീസ് സഹകരണ ബാങ്ക്",
    brand_sub: "ക്ലിപ്തം നമ്പർ: 663 • ക്ലാസ്സ്-1 സ്പെഷ്യൽ ഗ്രേഡ് ബാങ്ക്",
    welcome: "പരശുവയ്ക്കൽ സർവ്വീസ് സഹകരണ ബാങ്കിലേക്ക് സ്വാഗതം",
    nav_home: "ഹോം",
    nav_about: "ഞങ്ങളെക്കുറിച്ച്",
    nav_services: "സേവനങ്ങൾ",
    nav_rates: "പലിശ നിരക്കുകൾ",
    nav_calculators: "കാൽക്കുലേറ്റർ",
    nav_branches: "ശാഖകൾ",
    nav_contact: "ബന്ധപ്പെടുക",
    nav_support: "സഹായത്തിന് വിളിക്കൂ",
    ticker: [
      "ആകർഷകമായ പലിശ നിരക്കുകൾ: സ്ഥിരനിക്ഷേപങ്ങൾക്ക് 8.5% വരെ പലിശ",
      "കർഷകർക്കും കുടുംബശ്രീ സംഘങ്ങൾക്കും ലളിതമായ വായ്പാ വ്യവസ്ഥകൾ",
      "തങ്കപ്പണയ വായ്പ മിനിറ്റുകൾക്കുള്ളിൽ ഏറ്റവും കുറഞ്ഞ പലിശയിൽ ലഭ്യമാണ്",
      "നീതി മെഡിക്കൽ സ്റ്റോർ സേവനങ്ങൾ 20% വരെ വിലക്കുറവിൽ ലഭ്യമാണ്"
    ],
    hero_tag: "സ്ഥാപിതം 1968",
    hero_title: "50-ലധികം വർഷത്തെ വിശ്വാസ്യത, ആധുനിക ബാങ്കിംഗിന്റെ കരുത്തോടെ",
    hero_desc: "1968 മുതൽ പരശുവയ്ക്കൽ സർവ്വീസ് സഹകരണ ബാങ്ക് പാറശ്ശാല, നെയ്യാറ്റിൻകര മേഖലയിലെ ജനങ്ങളുടെ വിശ്വസ്ത സാമ്പത്തിക സ്രോതസ്സാണ്. സ്ഥിരനിക്ഷേപങ്ങൾക്ക് 8.5% വരെ ആകർഷകമായ പലിശയും എളുപ്പത്തിലുള്ള വായ്പകളും നേടൂ.",
    hero_btn_explore: "സേവനങ്ങൾ അറിയാം",
    hero_btn_rates: "പലിശ നിരക്കുകൾ",
    hero_badge_text: "വർഷത്തെ പാരമ്പര്യവും വിശ്വാസ്യതയും",
    offer_tag: "ഞങ്ങളുടെ സേവനങ്ങൾ",
    offer_title: "സാമ്പത്തിക സേവനങ്ങൾ പരിശോധിക്കൂ",
    offer_desc: "കർഷകർക്കും കുടുംബങ്ങൾക്കും മുതിർന്ന പൗരന്മാർക്കും അനുയോജ്യമായ വിവിധ ബാങ്കിംഗ് പദ്ധതികൾ.",
    srv_dep_tag: "നിക്ഷേപങ്ങൾ സുരക്ഷിതമായി വളർത്താം",
    srv_dep_title: "നിക്ഷേപ പദ്ധതികൾ",
    srv_dep_desc: "സ്ഥിര നിക്ഷേപങ്ങൾക്ക് 8.5% വരെ പലിശയും, പ്രതിമാസ നിക്ഷേപങ്ങളും. മുതിർന്ന പൗരന്മാർക്ക് പ്രത്യേക അധിക പലിശ.",
    srv_loan_tag: "ലളിതമായ വായ്പകൾ",
    srv_loan_title: "വായ്പാ പദ്ധതികൾ",
    srv_loan_desc: "സ്വർണ്ണപ്പണയം, കാർഷിക വായ്പ, ഭവന വായ്പ, കച്ചവട വായ്പ എന്നിവ കുറഞ്ഞ രേഖകളോടെ ഉടൻ ലഭ്യമാക്കുന്നു.",
    srv_comm_tag: "സാമൂഹ്യ സേവനങ്ങൾ",
    srv_comm_title: "നീതി സ്റ്റോറും സേവനങ്ങളും",
    srv_comm_desc: "മിതമായ നിരക്കിൽ മരുന്നുകൾ ലഭ്യമാക്കുന്ന നീതി മെഡിക്കൽ സ്റ്റോറും, കൺസ്യൂമർ സൂപ്പർമാർക്കറ്റും.",
    heritage_tag: "ഞങ്ങളുടെ പാരമ്പര്യം",
    heritage_title: "1968 മുതൽ പരശുവയ്ക്കലിന്റെ സേവനത്തിൽ",
    feat_tag: "ഞങ്ങളുടെ സവിശേഷതകൾ",
    feat_title: "പ്രധാന ബാങ്കിംഗ് സേവനങ്ങൾ",
    branch_tag: "ശാഖകൾ",
    branch_title: "ഞങ്ങളുടെ ശാഖാ ശൃംഖല"
  }
};

function initLanguageSwitcher() {
  const wrapper = document.querySelector('.lang-custom-wrapper');
  const toggleBtn = document.getElementById('lang-toggle-btn');
  const currentText = document.getElementById('current-lang-text');
  const menuItems = document.querySelectorAll('.lang-menu-item');
  const langBtns = document.querySelectorAll('.lang-btn');
  
  // Clean up any stale localStorage so English is always the primary default
  try {
    localStorage.removeItem('pscb_lang');
  } catch (e) {}

  // Check URL query param first, then sessionStorage, defaulting strictly to 'en'
  const urlParams = new URLSearchParams(window.location.search);
  let currentLang = urlParams.get('lang') || sessionStorage.getItem('pscb_lang') || 'en';

  function applyLanguage(lang) {
    const data = I18N_DATA[lang];
    if (!data) return;

    document.documentElement.lang = lang;

    // Update active label on custom dropdown button
    if (currentText) {
      currentText.textContent = lang === 'ml' ? 'മലയാളം' : 'English';
    }

    // Update active class on dropdown items
    menuItems.forEach(item => {
      if (item.getAttribute('data-lang') === lang) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });

    // Toggle active state on legacy buttons (if present)
    langBtns.forEach(btn => {
      if (btn.getAttribute('data-lang') === lang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Update Official Logo Signboard text dynamically
    const logoLine1 = document.getElementById('logo-line1');
    const logoLine2 = document.getElementById('logo-line2');
    const logoRegStrip = document.getElementById('logo-reg-strip');

    if (logoLine1 && logoLine2) {
      if (lang === 'ml') {
        logoLine1.textContent = 'പരശുവയ്ക്കൽ സർവ്വീസ്';
        logoLine2.textContent = 'സഹകരണ ബാങ്ക്';
        logoLine1.style.fontFamily = 'var(--font-malayalam)';
        logoLine2.style.fontFamily = 'var(--font-malayalam)';
      } else {
        logoLine1.textContent = 'Parasuvaikkal Service';
        logoLine2.textContent = 'Co-operative Bank';
        logoLine1.style.fontFamily = 'var(--font-body)';
        logoLine2.style.fontFamily = 'var(--font-body)';
      }
    }
    if (logoRegStrip) {
      logoRegStrip.textContent = lang === 'ml' ? 'ക്ലിപ്തം നമ്പർ - 663' : 'LTD No: 663';
      logoRegStrip.style.fontFamily = lang === 'ml' ? 'var(--font-malayalam)' : 'var(--font-body)';
    }

    // Compatibility for any legacy selectors
    const logoBankName = document.getElementById('logo-bank-name');
    const logoRegNo = document.getElementById('logo-reg-no');
    if (logoBankName) {
      logoBankName.innerHTML = lang === 'ml' ? 'പരശുവയ്ക്കൽ സർവ്വീസ്<br>സഹകരണ ബാങ്ക്' : 'Parasuvaikkal Service<br>Co-operative Bank';
      logoBankName.style.fontFamily = lang === 'ml' ? 'var(--font-malayalam)' : 'var(--font-heading)';
    }
    if (logoRegNo) {
      logoRegNo.textContent = lang === 'ml' ? 'ക്ലിപ്തം നമ്പർ - 663' : 'LTD No: 663';
      logoRegNo.style.fontFamily = lang === 'ml' ? 'var(--font-malayalam)' : 'var(--font-body)';
    }

    // Update Announcement Ticker badge and current text
    const tickerBadgeText = document.getElementById('ticker-badge-text');
    if (tickerBadgeText && data.ticker_badge) {
      tickerBadgeText.textContent = data.ticker_badge;
    }
    if (window.updateTickerLanguage) {
      window.updateTickerLanguage();
    }

    // Update all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (data[key]) {
        el.textContent = data[key];
      }
    });

    try {
      sessionStorage.setItem('pscb_lang', lang);
    } catch (e) {}
  }

  // Toggle dropdown on button click
  if (toggleBtn && wrapper) {
    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = wrapper.classList.toggle('open');
      toggleBtn.setAttribute('aria-expanded', isOpen);
    });

    // Close when clicking anywhere outside
    document.addEventListener('click', (e) => {
      if (!wrapper.contains(e.target)) {
        wrapper.classList.remove('open');
        toggleBtn.setAttribute('aria-expanded', 'false');
      }
    });

    // Close on ESC key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && wrapper.classList.contains('open')) {
        wrapper.classList.remove('open');
        toggleBtn.setAttribute('aria-expanded', 'false');
        toggleBtn.focus();
      }
    });
  }

  // Attach click listener to each language menu option
  menuItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.stopPropagation();
      const lang = item.getAttribute('data-lang');
      applyLanguage(lang);
      if (wrapper && toggleBtn) {
        wrapper.classList.remove('open');
        toggleBtn.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // Legacy buttons
  langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const selected = btn.getAttribute('data-lang');
      applyLanguage(selected);
    });
  });

  // Initial apply defaulting to English
  applyLanguage(currentLang);
}

/* ==========================================================================
   0.5. Modern Vertical Rotating Announcement Ticker
   ========================================================================== */
function initAnnouncementTicker() {
  const tickerContainer = document.getElementById('sub-header-ticker');
  const tickerText = document.getElementById('ticker-text');
  if (!tickerText) return;

  let currentIndex = 0;
  let tickerTimer = null;
  let isPaused = false;

  function getTickerItems() {
    const currentLang = document.documentElement.lang || 'en';
    const data = I18N_DATA[currentLang] || I18N_DATA.en;
    return data.ticker || [];
  }

  function showNext() {
    if (isPaused) return;
    const items = getTickerItems();
    if (!items || items.length === 0) return;

    currentIndex = (currentIndex + 1) % items.length;

    tickerText.classList.add('fade-out');

    setTimeout(() => {
      tickerText.textContent = items[currentIndex];
      tickerText.classList.remove('fade-out');
      tickerText.classList.add('fade-in');

      void tickerText.offsetWidth; // Force reflow

      tickerText.classList.remove('fade-in');
    }, 350);
  }

  function start() {
    if (tickerTimer) clearInterval(tickerTimer);
    tickerTimer = setInterval(showNext, 4500);
  }

  // Auto-pause on hover for optimal readability
  if (tickerContainer) {
    tickerContainer.addEventListener('mouseenter', () => { isPaused = true; });
    tickerContainer.addEventListener('mouseleave', () => { isPaused = false; });
  }

  // Update ticker language immediately on switch
  window.updateTickerLanguage = function() {
    const items = getTickerItems();
    if (items && items.length > 0) {
      currentIndex = currentIndex % items.length;
      tickerText.textContent = items[currentIndex];
    }
  };

  start();
}

/* ==========================================================================
   1. Sticky Header with Dynamic Shadow
   ========================================================================== */
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

/* ==========================================================================
   2. Mobile Drawer Navigation
   ========================================================================== */
function initMobileMenu() {
  const toggleBtn = document.querySelector('.mobile-menu-toggle');
  const nav = document.querySelector('.main-navigation');

  if (!toggleBtn || !nav) return;

  toggleBtn.addEventListener('click', () => {
    nav.classList.toggle('open');
    const isExpanded = nav.classList.contains('open');
    toggleBtn.setAttribute('aria-expanded', isExpanded);
  });

  // Close mobile menu when a nav link is clicked
  const navLinks = nav.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
    });
  });
}

/* ==========================================================================
   3. Interactive Banking Calculators (FD & EMI)
   ========================================================================== */
function initCalculators() {
  // Tab Switching
  const tabBtns = document.querySelectorAll('.calc-tab-btn');
  const calcContents = document.querySelectorAll('.calc-content');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      calcContents.forEach(c => c.classList.remove('active'));

      btn.classList.add('active');
      const targetId = btn.getAttribute('data-tab');
      const targetPane = document.getElementById(targetId);
      if (targetPane) targetPane.classList.add('active');
    });
  });

  // --- Fixed Deposit Calculator ---
  const fdAmountSlider = document.getElementById('fd-amount');
  const fdAmountBadge = document.getElementById('fd-amount-val');
  const fdTenureSlider = document.getElementById('fd-tenure');
  const fdTenureBadge = document.getElementById('fd-tenure-val');
  const fdCitizenSelect = document.getElementById('fd-citizen-type');

  const fdMaturityEl = document.getElementById('fd-maturity-amount');
  const fdInterestEl = document.getElementById('fd-interest-earned');
  const fdRateDisplay = document.getElementById('fd-rate-applied');

  function calculateFD() {
    if (!fdAmountSlider || !fdTenureSlider) return;

    const principal = parseFloat(fdAmountSlider.value);
    const years = parseFloat(fdTenureSlider.value);
    const isSenior = fdCitizenSelect ? fdCitizenSelect.value === 'senior' : false;

    // Rates schedule based on tenure
    let baseRate = 7.5;
    if (years >= 1 && years < 2) baseRate = 8.0;
    else if (years >= 2 && years < 3) baseRate = 8.25;
    else if (years >= 3) baseRate = 8.5;

    const rate = isSenior ? baseRate + 0.5 : baseRate;

    // Quarterly Compounding Formula: A = P * (1 + r/400)^(4*t)
    const quarterlyRate = rate / 400;
    const quarters = years * 4;
    const maturityAmount = Math.round(principal * Math.pow(1 + quarterlyRate, quarters));
    const totalInterest = maturityAmount - principal;

    // Update UI elements
    if (fdAmountBadge) fdAmountBadge.textContent = '₹ ' + formatINR(principal);
    if (fdTenureBadge) fdTenureBadge.textContent = years + (years === 1 ? ' Year' : ' Years');
    if (fdRateDisplay) fdRateDisplay.textContent = rate.toFixed(2) + '% p.a.';
    if (fdMaturityEl) fdMaturityEl.textContent = '₹ ' + formatINR(maturityAmount);
    if (fdInterestEl) fdInterestEl.textContent = '₹ ' + formatINR(totalInterest);
  }

  if (fdAmountSlider && fdTenureSlider) {
    fdAmountSlider.addEventListener('input', calculateFD);
    fdTenureSlider.addEventListener('input', calculateFD);
    if (fdCitizenSelect) fdCitizenSelect.addEventListener('change', calculateFD);
    calculateFD();
  }

  // --- Loan EMI Calculator ---
  const emiAmountSlider = document.getElementById('emi-amount');
  const emiAmountBadge = document.getElementById('emi-amount-val');
  const emiRateSlider = document.getElementById('emi-rate');
  const emiRateBadge = document.getElementById('emi-rate-val');
  const emiTenureSlider = document.getElementById('emi-tenure');
  const emiTenureBadge = document.getElementById('emi-tenure-val');

  const emiMonthlyEl = document.getElementById('emi-monthly-val');
  const emiTotalInterestEl = document.getElementById('emi-total-interest');
  const emiTotalPaymentEl = document.getElementById('emi-total-payment');

  function calculateEMI() {
    if (!emiAmountSlider || !emiRateSlider || !emiTenureSlider) return;

    const principal = parseFloat(emiAmountSlider.value);
    const annualRate = parseFloat(emiRateSlider.value);
    const years = parseFloat(emiTenureSlider.value);

    const monthlyRate = annualRate / (12 * 100);
    const months = years * 12;

    // Monthly EMI formula: P * r * (1 + r)^n / ((1 + r)^n - 1)
    const factor = Math.pow(1 + monthlyRate, months);
    const monthlyEMI = Math.round((principal * monthlyRate * factor) / (factor - 1));
    const totalPayment = monthlyEMI * months;
    const totalInterest = totalPayment - principal;

    if (emiAmountBadge) emiAmountBadge.textContent = '₹ ' + formatINR(principal);
    if (emiRateBadge) emiRateBadge.textContent = annualRate.toFixed(1) + '%';
    if (emiTenureBadge) emiTenureBadge.textContent = years + (years === 1 ? ' Year' : ' Years');

    if (emiMonthlyEl) emiMonthlyEl.textContent = '₹ ' + formatINR(monthlyEMI);
    if (emiTotalInterestEl) emiTotalInterestEl.textContent = '₹ ' + formatINR(totalInterest);
    if (emiTotalPaymentEl) emiTotalPaymentEl.textContent = '₹ ' + formatINR(totalPayment);
  }

  if (emiAmountSlider && emiRateSlider && emiTenureSlider) {
    emiAmountSlider.addEventListener('input', calculateEMI);
    emiRateSlider.addEventListener('input', calculateEMI);
    emiTenureSlider.addEventListener('input', calculateEMI);
    calculateEMI();
  }
}

/* ==========================================================================
   4. Interactive Branch Switcher
   ========================================================================== */
function initBranchSelector() {
  const branchItems = document.querySelectorAll('.branch-nav-item');
  if (!branchItems.length) return;

  const branchData = {
    'head-office': {
      tag: 'Head Office & Main Branch',
      title: 'Parasuvaikkal Main Branch',
      address: 'Parasuvaikkal P.O., Near Parassala, Thiruvananthapuram, Kerala - 695508',
      phone: '0471 - 2223456 / 2223457',
      hours: 'Mon - Sat: 9:30 AM to 4:30 PM (2nd & 4th Sat Holidays)',
      manager: 'Branch Manager: 94471 23456',
      mapsUrl: 'https://maps.google.com/?q=Parasuvaikkal+Kerala'
    },
    'evening-branch': {
      tag: 'Extended Hours Branch',
      title: 'Parassala Junction Evening Branch',
      address: 'Co-operative Bank Complex, Near KSRTC Bus Stand, Parassala, Kerala - 695502',
      phone: '0471 - 2228899',
      hours: 'Mon - Sat: 1:00 PM to 7:00 PM',
      manager: 'Branch Manager: 94471 98765',
      mapsUrl: 'https://maps.google.com/?q=Parassala+Junction+Kerala'
    },
    'extension-counter': {
      tag: 'Rural Extension & Store',
      title: 'Kudayal Extension Counter & Neethi Store',
      address: 'Kudayal Junction, Parasuvaikkal Service Co-op Bank Building, Kerala - 695508',
      phone: '0471 - 2229911',
      hours: 'Mon - Sat: 9:00 AM to 5:00 PM (Neethi Medical Store 8 AM - 8 PM)',
      manager: 'Officer in Charge: 94471 45678',
      mapsUrl: 'https://maps.google.com/?q=Kudayal+Kerala'
    }
  };

  const branchTag = document.getElementById('branch-info-tag');
  const branchTitle = document.getElementById('branch-info-title');
  const branchAddress = document.getElementById('branch-address-text');
  const branchPhone = document.getElementById('branch-phone-text');
  const branchHours = document.getElementById('branch-hours-text');
  const branchManager = document.getElementById('branch-manager-text');
  const branchMapBtn = document.getElementById('branch-map-link');

  branchItems.forEach(item => {
    item.addEventListener('click', () => {
      branchItems.forEach(b => b.classList.remove('active'));
      item.classList.add('active');

      const branchKey = item.getAttribute('data-branch');
      const data = branchData[branchKey];
      if (!data) return;

      if (branchTag) branchTag.textContent = data.tag;
      if (branchTitle) branchTitle.textContent = data.title;
      if (branchAddress) branchAddress.textContent = data.address;
      if (branchPhone) branchPhone.textContent = data.phone;
      if (branchHours) branchHours.textContent = data.hours;
      if (branchManager) branchManager.textContent = data.manager;
      if (branchMapBtn) branchMapBtn.setAttribute('href', data.mapsUrl);
    });
  });
}

/* ==========================================================================
   5. Smooth Scroll Navigation
   ========================================================================== */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

/* Helper to format Indian currency with commas */
function formatINR(number) {
  return Number(number).toLocaleString('en-IN');
}
