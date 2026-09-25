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
    nav_home: "Home",
    nav_about: "About Us",
    nav_services: "Services",
    nav_rates: "Interest Rates",
    nav_calculators: "Calculators",
    nav_community: "Welfare & Neethi",
    nav_governance: "Governance",
    nav_branches: "Branches",
    nav_contact: "Contact Us",
    nav_support: "Contact Support",
    ticker: [
      "Special Agricultural Gold Loans up to ₹3 Lakhs at just 7.00% Interest Rate",
      "Women's SHG Group Loans: ₹5 Lakhs for 10-member groups with simple terms",
      "Instant Gold Loans (Swarna Panayam) at 79 paise/₹100/mo (75% market value)",
      "Neethi Medical Store: 14% to 65% medicine discounts + Free Home Delivery",
      "MDS (Chitty) Schemes from ₹50,000 to ₹10 Lakhs with 1st-month auctions"
    ],
    hero_tag: "ESTABLISHED 1968 • CLASS-1 SPECIAL GRADE",
    hero_title: "Over 50 Years of Trust, Empowering Our Community",
    hero_desc: "Since 1968, Parasuvaikkal Service Co-operative Bank Ltd. No. 663 has been the financial backbone of the Parassala & Neyyattinkara community. Enjoy 7.00% Agricultural Gold Loans, Fixed Deposits up to 8.50%, and Government-guaranteed safe banking.",
    hero_btn_explore: "Explore Our Services",
    hero_btn_rates: "View Interest Rates",
    hero_badge_text: "Years of Heritage & Trust",
    offer_tag: "WHAT WE OFFER",
    offer_title: "Explore Our Financial & Social Services",
    offer_desc: "Comprehensive cooperative banking, agricultural subsidies, micro-credit for women, and community welfare amenities.",
    srv_dep_tag: "DEPOSITS & CHITS (MDS)",
    srv_dep_title: "Deposit Schemes & MDS Chitties",
    srv_dep_desc: "Attractive 8.50% Fixed Deposits (+0.50% for Senior Citizens), Savings schemes, and Monthly Deposit Schemes (MDS) from ₹50,000 to ₹10 Lakhs with auctions from 1st month.",
    srv_loan_tag: "LOW-INTEREST CREDIT",
    srv_loan_title: "Specialized Loan Schemes",
    srv_loan_desc: "7.00% Agricultural Gold Loans up to ₹3 Lakhs, Gold loans at 79 paise/₹100/mo (75% valuation), ₹5 Lakh Women's SHG Loans, and Short-Term rolling credit.",
    srv_comm_tag: "COMMUNITY WELFARE HUB",
    srv_comm_title: "Neethi Stores & Amenities",
    srv_comm_desc: "Subsidized Neethi Medical Store (14%–65% off + home delivery), Neethi Supermarket, Bhaskaran Nair Mini Auditorium, Fertilizer (Valam) & Ration depots.",
    heritage_tag: "OUR HERITAGE",
    heritage_title: "Serving Parasuvaikkal Since 1968",
    feat_tag: "WHY CHOOSE US",
    feat_title: "Our Core Banking Advantages",
    comm_section_tag: "COMMUNITY INITIATIVES",
    comm_section_title: "Social Welfare & Public Services",
    comm_section_desc: "Beyond banking, our cooperative operates essential community utilities to uplift every household in Parasuvaikkal.",
    rates_tag: "CURRENT SCHEDULE",
    rates_title: "Latest Interest Rates & Chits",
    calc_tag: "PLAN YOUR FINANCES",
    calc_title: "Interactive Financial Calculators",
    branch_tag: "LOCATE US",
    branch_title: "Our Branch Network",
    branch_desc: "Visit any of our 3 service branches across Parasuvaikkal and surrounding areas.",
    branch_ho_nav_title: "Head Office & Main Branch",
    branch_ned_nav_title: "Nediyamcode Branch",
    branch_idi_nav_title: "Idichakkaplamoodu Branch",
    branch_get_directions: "Get Directions on Map",
    mds_table_title: "Monthly Deposit Scheme (MDS Chitties)",
    mds_th_monthly: "Monthly Installment",
    mds_th_duration: "Duration",
    mds_th_sala: "Chitty Sala (Total Value)",
    mds_th_auction: "Auction Privilege",
    mds_badge_auction: "1st Month Auction",
    mds_note_text: "Official Assurance: All MDS Chitty schemes feature auctions starting from the 1st month itself. Regulated and protected under the Kerala Co-operative Societies Act.",
    loan_cat_agri: "Agricultural Gold Loan",
    loan_cat_gold: "Gold Loan (Swarna Panayam)",
    loan_cat_shg: "Women's SHG Group Loan",
    loan_cat_st: "Short Term (ST) Loan",
    loan_cat_locker: "Safe Deposit Locker",
    loan_cat_business: "Business & Mortgage Credit",
    comm_med_title: "Neethi Medical Store",
    comm_med_badge: "14% to 65% Price Discount",
    comm_med_desc: "Providing top-quality Allopathic, Ayurvedic, and Veterinary medicines at subsidized cooperative rates. Enjoy free doorstep home delivery across the panchayat.",
    comm_super_title: "Neethi Sahakarana Supermarket",
    comm_super_badge: "Sahakarana Samriddhi Scheme",
    comm_super_desc: "Quality provisions, household commodities, and festival goods at fair market rates. Join our popular ₹100 × 50 weeks festive savings scheme.",
    comm_hall_title: "Bhaskaran Nair Memorial Auditorium",
    comm_hall_badge: "Air-Conditioned & Affordable",
    comm_hall_desc: "Fully furnished reception hall with modern amenities located at Head Office. Available at subsidized rental rates for weddings, celebrations, and cultural meets.",
    comm_depot_title: "Fertilizer & Ration Depots",
    comm_depot_badge: "Farmer Support & Fair Price",
    comm_depot_desc: "Direct distribution of agricultural fertilizers, organic manures, and subsidized inputs to local farmers, alongside public ration retail services.",
    gov_tag: "LEADERSHIP & GOVERNANCE",
    gov_title: "Elected Managing Committee & Leadership",
    gov_desc: "Dedicated to serving the members and residents of Parasuvaikkal with complete accountability, democratic cooperation, and financial security.",
    stat_year: "Year Established",
    stat_year_sub: "50+ Years of Service",
    stat_branches: "Service Branches",
    stat_branches_sub: "HO, Nediyamcode, Idichakkaplamoodu",
    stat_grade: "Special Grade Bank",
    stat_grade_sub: "Society Reg No: 663",
    stat_fund: "Deposit Guarantee",
    stat_fund_sub: "Kerala Co-op Guarantee Fund Board",
    gov_pres_badge: "PRESIDENT",
    gov_pres_name: "P. Chandramohan",
    gov_pres_role: "President, Parasuvaikkal SCB Ltd. No. 663",
    gov_pres_desc: "Leading the strategic expansion, agricultural credit programs, and social welfare amenities for the Parasuvaikkal and Parassala rural community.",
    gov_sec_badge: "SECRETARY / CHIEF EXECUTIVE",
    gov_sec_name: "Rakesh S",
    gov_sec_role: "Secretary, Parasuvaikkal SCB Ltd. No. 663",
    gov_sec_desc: "Overseeing institutional management, loan sanctions, regulatory compliance under the Kerala Co-operative Societies Act, and branch operations.",
    gov_board_badge: "MANAGING COMMITTEE",
    gov_board_name: "Elected Board of Directors",
    gov_board_role: "Governing Council, Parasuvaikkal SCB",
    gov_board_desc: "Democratically elected member representatives guiding policy, financial governance, community schemes, and inclusive economic growth."
  },
  ml: {
    logo_line1: "പരശുവയ്ക്കൽ സർവ്വീസ്",
    logo_line2: "സഹകരണ ബാങ്ക്",
    logo_strip: "ക്ലിപ്തം നമ്പർ - 663",
    ticker_badge: "അറിയിപ്പ്",
    brand_title: "പരശുവയ്ക്കൽ സർവ്വീസ് സഹകരണ ബാങ്ക്",
    brand_sub: "ക്ലിപ്തം നമ്പർ: 663 • ക്ലാസ്സ്-1 സ്പെഷ്യൽ ഗ്രേഡ് ബാങ്ക്",
    nav_home: "ഹോം",
    nav_about: "ഞങ്ങളെക്കുറിച്ച്",
    nav_services: "സേവനങ്ങൾ",
    nav_rates: "പലിശ നിരക്കുകൾ",
    nav_calculators: "കാൽക്കുലേറ്റർ",
    nav_community: "നീതി സേവനങ്ങൾ",
    nav_governance: "ഭരണസമിതി",
    nav_branches: "ശാഖകൾ",
    nav_contact: "ബന്ധപ്പെടുക",
    nav_support: "സഹായത്തിന് വിളിക്കൂ",
    ticker: [
      "പ്രത്യേക കാർഷിക സ്വർണ്ണപ്പണയ വായ്പ: 3 ലക്ഷം രൂപ വരെ 7% പലിശ നിരക്കിൽ",
      "സ്ത്രീകൾക്ക് കൈത്താങ്ങ്: 10 പേരടങ്ങുന്ന ഗ്രൂപ്പുകൾക്ക് 5 ലക്ഷം രൂപ വരെ SHG വായ്പ",
      "തങ്കപ്പണയ വായ്പ: വിപണിവിലയുടെ 75% വരെ, 100 രൂപയ്ക്ക് 79 പൈസ പലിശയിൽ",
      "നീതി മെഡിക്കൽ സ്റ്റോർ: മരുന്നുകൾക്ക് 14% മുതൽ 65% വരെ വിലക്കുറവും ഡോർസ്റ്റെപ്പ് ഡെലിവറിയും",
      "എം.ഡി.എസ് (ചിട്ടി): 50,000 മുതൽ 10 ലക്ഷം രൂപ വരെ, ഒന്നാം മാസം മുതൽ ലേലം"
    ],
    hero_tag: "സ്ഥാപിതം 1968 • ക്ലാസ്സ്-1 സ്പെഷ്യൽ ഗ്രേഡ്",
    hero_title: "50-ലധികം വർഷത്തെ വിശ്വാസ്യത, നാടിന്റെ സാമ്പത്തിക കരുത്ത്",
    hero_desc: "1968 മുതൽ പരശുവയ്ക്കൽ സർവ്വീസ് സഹകരണ ബാങ്ക് ക്ലിപ്തം നമ്പർ 663 പാറശ്ശാല, നെയ്യാറ്റിൻകര മേഖലയിലെ ജനങ്ങളുടെ വിശ്വസ്ത സ്രോതസ്സാണ്. 7% കാർഷിക സ്വർണ്ണ വായ്പകളും സ്ഥിരനിക്ഷേപങ്ങൾക്ക് 8.5% വരെ പലിശയും നേടൂ.",
    hero_btn_explore: "സേവനങ്ങൾ അറിയാം",
    hero_btn_rates: "പലിശ നിരക്കുകൾ",
    hero_badge_text: "വർഷത്തെ പാരമ്പര്യവും വിശ്വാസ്യതയും",
    offer_tag: "ഞങ്ങളുടെ സേവനങ്ങൾ",
    offer_title: "ബാങ്കിംഗ് & സാമൂഹ്യ സേവനങ്ങൾ",
    offer_desc: "കർഷകർക്കും വനിതാ കൂട്ടായ്മകൾക്കും സാധാരണക്കാർക്കും അനുയോജ്യമായ വിവിധ വായ്പാ, നിക്ഷേപ പദ്ധതികൾ.",
    srv_dep_tag: "നിക്ഷേപങ്ങളും ചിട്ടികളും",
    srv_dep_title: "നിക്ഷേപ പദ്ധതികളും എം.ഡി.എസ്സും",
    srv_dep_desc: "സ്ഥിര നിക്ഷേപങ്ങൾക്ക് 8.5% വരെ പലിശ (മുതിർന്ന പൗരന്മാർക്ക് 9%), 50,000 രൂപ മുതൽ 10 ലക്ഷം രൂപ വരെയുള്ള പ്രതിമാസ നിക്ഷേപ പദ്ധതികൾ (എം.ഡി.എസ്).",
    srv_loan_tag: "ലളിതമായ വായ്പകൾ",
    srv_loan_title: "പ്രത്യേക വായ്പാ പദ്ധതികൾ",
    srv_loan_desc: "7% പലിശയിൽ 3 ലക്ഷം രൂപ വരെ കാർഷിക സ്വർണ്ണപ്പണയം, 100 രൂപയ്ക്ക് 79 പൈസയിൽ തങ്കപ്പണയം, 5 ലക്ഷം രൂപ SHG വനിതാ ഗ്രൂപ്പ് വായ്പകൾ.",
    srv_comm_tag: "നാടിനൊപ്പം സാമൂഹ്യ സേവനങ്ങൾ",
    srv_comm_title: "നീതി സ്റ്റോറും മറ്റ് സംരംഭങ്ങളും",
    srv_comm_desc: "14% മുതൽ 65% വരെ വിലക്കുറവിൽ നീതി മെഡിക്കൽ സ്റ്റോർ, നീതി സൂപ്പർമാർക്കറ്റ്, ഭാസ്കരൻനായർ മിനി ഓഡിറ്റോറിയം, വളം-റേഷൻ ഡിപ്പോകൾ.",
    heritage_tag: "ഞങ്ങളുടെ പാരമ്പര്യം",
    heritage_title: "1968 മുതൽ പരശുവയ്ക്കലിന്റെ സേവനത്തിൽ",
    feat_tag: "ഞങ്ങളുടെ സവിശേഷതകൾ",
    feat_title: "പ്രധാന ബാങ്കിംഗ് നേട്ടങ്ങൾ",
    comm_section_tag: "സാമൂഹ്യ സേവനങ്ങൾ",
    comm_section_title: "നീതി സ്റ്റോറുകളും പൊതു സംരംഭങ്ങളും",
    comm_section_desc: "ബാങ്കിംഗിനപ്പുറം പരശുവയ്ക്കലിലെ ഓരോ കുടുംബത്തിന്റെയും നിത്യജീവിതത്തിന് തണലായി ഞങ്ങളുടെ സേവനങ്ങൾ.",
    rates_tag: "പലിശ വിവരങ്ങൾ",
    rates_title: "നിക്ഷേപ, വായ്പാ പലിശ നിരക്കുകൾ",
    calc_tag: "സാമ്പത്തിക കാൽക്കുലേറ്റർ",
    calc_title: "നിക്ഷേപ, വായ്പാ കാൽക്കുലേറ്റർ",
    branch_tag: "ശാഖകൾ",
    branch_title: "ഞങ്ങളുടെ ശാഖാ ശൃംഖല",
    branch_desc: "പരശുവയ്ക്കലിലും പരിസരപ്രദേശങ്ങളിലുമുള്ള ഞങ്ങളുടെ 3 ശാഖകൾ സന്ദർശിക്കൂ.",
    branch_ho_nav_title: "ഹെഡ് ഓഫീസ് & പ്രധാന ശാഖ",
    branch_ned_nav_title: "നെടിയാംകോട് ശാഖ",
    branch_idi_nav_title: "ഇടിച്ചക്കപ്ലാമൂട് ശാഖ",
    branch_get_directions: "മാപ്പിൽ വഴി കാണുക",
    mds_table_title: "പ്രതിമാസ നിക്ഷേപ പദ്ധതി (എം.ഡി.എസ് ചിട്ടി വിവരങ്ങൾ)",
    mds_th_monthly: "പ്രതിമാസ അടവ്",
    mds_th_duration: "കാലാവധി",
    mds_th_sala: "ചിട്ടിത്തുക (ആകെ തുക)",
    mds_th_auction: "ലേല വ്യവസ്ഥ",
    mds_badge_auction: "ഒന്നാം മാസം ലേലം",
    mds_note_text: "ഉറപ്പ്: എല്ലാ എം.ഡി.എസ് ചിട്ടികളിലും ഒന്നാം മാസം മുതൽ ലേലത്തിൽ പങ്കെടുക്കാം. കേരള സഹകരണ വകുപ്പിന്റെ നിയമപ്രകാരം പൂർണ്ണ സുരക്ഷിതം.",
    loan_cat_agri: "കാർഷിക സ്വർണ്ണപ്പണയ വായ്പ",
    loan_cat_gold: "തങ്കപ്പണയ വായ്പ (സ്വർണ്ണപ്പണയം)",
    loan_cat_shg: "വനിതാ സ്വയംസഹായ സംഘ വായ്പ (കൈത്താങ്ങ്)",
    loan_cat_st: "ഹ്രസ്വകാല വായ്പ (ST Loan)",
    loan_cat_locker: "സേഫ് ഡെപ്പോസിറ്റ് ലോക്കർ",
    loan_cat_business: "വ്യാപാര & മോർട്ട്ഗേജ് വായ്പ",
    comm_med_title: "നീതി മെഡിക്കൽ സ്റ്റോർ",
    comm_med_badge: "14% മുതൽ 65% വരെ വിലക്കുറവ്",
    comm_med_desc: "ഗുണനിലവാരമുള്ള അലോപ്പതി, ആയുർവേദ, വെറ്ററിനറി മരുന്നുകൾ വൻവിലക്കുറവിൽ. പഞ്ചായത്തിലുടനീളം സൗജന്യ ഡോർസ്റ്റെപ്പ് ഡെലിവറി.",
    comm_super_title: "നീതി സഹകരണ സൂപ്പർമാർക്കറ്റ്",
    comm_super_badge: "സഹകരണ സമൃദ്ധി പദ്ധതി",
    comm_super_desc: "ഗുണമേന്മയുള്ള നിത്യോപയോഗ സാധനങ്ങളും പലചരക്കുകളും. ₹100 × 50 ആഴ്ചത്തെ ഉത്സവകാല സമ്പാദ്യ പദ്ധതിയിൽ പങ്കാളിയാകൂ.",
    comm_hall_title: "ഭാസ്കരൻ നായർ മെമ്മോറിയൽ ഓഡിറ്റോറിയം",
    comm_hall_badge: "എയർ കണ്ടീഷൻഡ് മിനി ഹാൾ",
    comm_hall_desc: "വിവാഹങ്ങൾ, സ്വീകരണങ്ങൾ, യോഗങ്ങൾ എന്നിവയ്ക്ക് ഹെഡ് ഓഫീസ് കാമ്പസിലെ അത്യാധുനിക എയർ കണ്ടീഷൻഡ് ഹാൾ കുറഞ്ഞ വാടകയിൽ ലഭ്യമാണ്.",
    comm_depot_title: "വളം & റേഷൻ ഡിപ്പോകൾ",
    comm_depot_badge: "കർഷക ക്ഷേമം & ന്യായവില",
    comm_depot_desc: "കർഷകർക്ക് ആവശ്യമായ രാസ-ജൈവ വളങ്ങൾ, കാർഷിക ഉപകരണങ്ങൾ, പൊതുവിതരണ റേഷൻ സേവനങ്ങൾ എന്നിവ ലഭ്യമാക്കുന്നു.",
    gov_tag: "ഭരണസമിതി & നേതൃത്വം",
    gov_title: "ഭരണസമിതിയും കാര്യനിർവ്വഹണവും",
    gov_desc: "സഹകരണ ജനാധിപത്യ മൂല്യങ്ങളിലൂന്നി, പരശുവയ്ക്കലിലെ ജനങ്ങളുടെ സമഗ്ര സാമ്പത്തിക-സാമൂഹിക പുരോഗതിക്കായി പ്രതിജ്ഞാബദ്ധമായ നേതൃത്വം.",
    stat_year: "സ്ഥാപിത വർഷം",
    stat_year_sub: "50-ലധികം വർഷത്തെ സേവന പാരമ്പര്യം",
    stat_branches: "സേവന ശാഖകൾ",
    stat_branches_sub: "ഹെഡ് ഓഫീസ്, നെടിയാംകോട്, ഇടിച്ചക്കപ്ലാമൂട്",
    stat_grade: "സ്പെഷ്യൽ ഗ്രേഡ് ബാങ്ക്",
    stat_grade_sub: "ക്ലിപ്തം നമ്പർ: 663",
    stat_fund: "നിക്ഷേപ സുരക്ഷാ ഗ്യാരണ്ടി",
    stat_fund_sub: "കേരള കോ-ഓപ്പറേറ്റീവ് ഡെപ്പോസിറ്റ് ഗ്യാരന്റി ബോർഡ്",
    gov_pres_badge: "പ്രസിഡന്റ്",
    gov_pres_name: "പി. ചന്ദ്രമോഹൻ",
    gov_pres_role: "പ്രസിഡന്റ്, പരശുവയ്ക്കൽ സർവ്വീസ് സഹകരണ ബാങ്ക്",
    gov_pres_desc: "ബാങ്കിന്റെ സമഗ്ര വികസനം, കർഷക ക്ഷേമം, പൊതുജന സേവനങ്ങൾ എന്നിവയ്ക്ക് നേതൃത്വം നൽകുന്നു.",
    gov_sec_badge: "സെക്രട്ടറി / ചീഫ് എക്സിക്യൂട്ടീവ്",
    gov_sec_name: "രാകേഷ് എസ്",
    gov_sec_role: "സെക്രട്ടറി, പരശുവയ്ക്കൽ സർവ്വീസ് സഹകരണ ബാങ്ക്",
    gov_sec_desc: "ദൈനംദിന ബാങ്കിംഗ് പ്രവർത്തനങ്ങൾ, വായ്പാ വിതരണം, നിയമാനുസൃത ഭരണനിർവ്വഹണം എന്നിവയ്ക്ക് മേൽനോട്ടം വഹിക്കുന്നു.",
    gov_board_badge: "ഭരണസമിതി",
    gov_board_name: "തിരഞ്ഞെടുക്കപ്പെട്ട ഭരണസമിതി",
    gov_board_role: "ഭരണസമിതി അംഗങ്ങൾ, പരശുവയ്ക്കൽ SCB",
    gov_board_desc: "അംഗങ്ങളുടെ ജനാധിപത്യപരമായ പ്രാതിനിധ്യം ഉറപ്പാക്കി ബാങ്കിന്റെ നയരൂപീകരണത്തിനും സാമൂഹിക പുരോഗതിക്കും നേതൃത്വം നൽകുന്നു."
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

    // Update active branch display
    if (window.updateActiveBranchLanguage) {
      window.updateActiveBranchLanguage();
    }

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
   4. Interactive Branch Switcher (Bilingual & Bracket-Free)
   ========================================================================== */
function initBranchSelector() {
  const branchItems = document.querySelectorAll('.branch-nav-item');
  if (!branchItems.length) return;

  let activeBranchKey = 'head-office';

  const branchData = {
    'head-office': {
      en: {
        tag: 'Head Office & Main Branch',
        title: 'Parasuvaikkal Head Office',
        address: 'Parasuvaikkal P.O., Near Parassala, Thiruvananthapuram District, Kerala - 695508',
        phone: '0471 - 2202024',
        hours: 'Mon - Sat: 9:00 AM to 4:30 PM (2nd & 4th Sat Holidays)',
        manager: 'President: P. Chandramohan (9995363550) | Secretary: Rakesh S (9447494989)'
      },
      ml: {
        tag: 'ഹെഡ് ഓഫീസ് & പ്രധാന ശാഖ',
        title: 'പരശുവയ്ക്കൽ ഹെഡ് ഓഫീസ്',
        address: 'പരശുവയ്ക്കൽ പി.ഒ., പാറശ്ശാലയ്ക്ക് സമീപം, തിരുവനന്തപുരം - 695508',
        phone: '0471 - 2202024',
        hours: 'തിങ്കൾ - ശനി: 9:00 AM മുതൽ 4:30 PM വരെ (രണ്ടാം, നാലാം ശനി അവധി)',
        manager: 'പ്രസിഡന്റ്: പി. ചന്ദ്രമോഹൻ (9995363550) | സെക്രട്ടറി: രാകേഷ് എസ് (9447494989)'
      },
      mapsUrl: 'https://maps.google.com/?q=Parasuvaikkal+Kerala'
    },
    'nediyamcode': {
      en: {
        tag: 'Service Branch',
        title: 'Nediyamcode Branch',
        address: 'Nediyamcode, Parasuvaikkal P.O., Thiruvananthapuram, Kerala - 695508',
        phone: '0471 - 2232024',
        hours: 'Mon - Sat: 9:00 AM to 4:30 PM',
        manager: 'Branch Phone: 0471-2232024 / Secretary: 9447494989'
      },
      ml: {
        tag: 'സർവ്വീസ് ശാഖ',
        title: 'നെടിയാംകോട് ശാഖ',
        address: 'നെടിയാംകോട്, പരശുവയ്ക്കൽ പി.ഒ., തിരുവനന്തപുരം - 695508',
        phone: '0471 - 2232024',
        hours: 'തിങ്കൾ - ശനി: 9:00 AM മുതൽ 4:30 PM വരെ',
        manager: 'ശാഖാ ഫോൺ: 0471-2232024 / സെക്രട്ടറി: 9447494989'
      },
      mapsUrl: 'https://maps.google.com/?q=Nediyamcode+Parasuvaikkal+Kerala'
    },
    'idichakkaplamoodu': {
      en: {
        tag: 'Service Branch',
        title: 'Idichakkaplamoodu Branch',
        address: 'Idichakkaplamoodu, Parasuvaikkal P.O., Thiruvananthapuram, Kerala - 695508',
        phone: '0471 - 2202020',
        hours: 'Mon - Sat: 9:00 AM to 4:30 PM',
        manager: 'Branch Phone: 0471-2202020 / President: 9995363550'
      },
      ml: {
        tag: 'സർവ്വീസ് ശാഖ',
        title: 'ഇടിച്ചക്കപ്ലാമൂട് ശാഖ',
        address: 'ഇടിച്ചക്കപ്ലാമൂട്, പരശുവയ്ക്കൽ പി.ഒ., തിരുവനന്തപുരം - 695508',
        phone: '0471 - 2202020',
        hours: 'തിങ്കൾ - ശനി: 9:00 AM മുതൽ 4:30 PM വരെ',
        manager: 'ശാഖാ ഫോൺ: 0471-2202020 / പ്രസിഡന്റ്: 9995363550'
      },
      mapsUrl: 'https://maps.google.com/?q=Idichakkaplamoodu+Parasuvaikkal+Kerala'
    }
  };

  const branchTag = document.getElementById('branch-info-tag');
  const branchTitle = document.getElementById('branch-info-title');
  const branchAddress = document.getElementById('branch-address-text');
  const branchPhone = document.getElementById('branch-phone-text');
  const branchHours = document.getElementById('branch-hours-text');
  const branchManager = document.getElementById('branch-manager-text');
  const branchMapBtn = document.getElementById('branch-map-link');

  function updateDisplay() {
    const currentLang = document.documentElement.lang || 'en';
    const branchEntry = branchData[activeBranchKey];
    if (!branchEntry) return;

    const data = branchEntry[currentLang] || branchEntry.en;

    if (branchTag) branchTag.textContent = data.tag;
    if (branchTitle) branchTitle.textContent = data.title;
    if (branchAddress) branchAddress.textContent = data.address;
    if (branchPhone) branchPhone.textContent = data.phone;
    if (branchHours) branchHours.textContent = data.hours;
    if (branchManager) branchManager.textContent = data.manager;
    if (branchMapBtn) branchMapBtn.setAttribute('href', branchEntry.mapsUrl);
  }

  branchItems.forEach(item => {
    item.addEventListener('click', () => {
      branchItems.forEach(b => b.classList.remove('active'));
      item.classList.add('active');

      activeBranchKey = item.getAttribute('data-branch') || 'head-office';
      updateDisplay();
    });
  });

  window.updateActiveBranchLanguage = function() {
    updateDisplay();
  };

  updateDisplay();
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
