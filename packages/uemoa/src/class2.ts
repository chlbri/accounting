import type { Plan } from './types';

/**
 * SYSCOHADA — CLASS 2: Fixed / Non-Current Assets
 * (Class 2: Fixed / Non-Current Assets)
 *
 * Covers: deferred charges, intangible assets, land, buildings,
 * equipment, advances on fixed assets, investments, depreciation,
 * and impairment provisions.
 *
 * Source: Official SYSCOHADA Chart of Accounts PDF, pages 11–20.
 */
export const class2Accounts = {
  // ────────── 20 DEFERRED CHARGES ──────────
  20: {
    name: 'DEFERRED CHARGES',
    description:
      'Deferred charges — capitalised start-up, restructuring and similar costs',
  },
  201: {
    name: "START-UP / FORMATION COSTS D'ÉTABLISSEMENT",
    description: 'Start-up / formation costs',
  },
  2011: {
    name: 'Incorporation costs',
    description: 'Incorporation costs',
  },
  2012: {
    name: 'Prospecting / survey costs',
    description: 'Prospecting / survey costs',
  },
  2013: {
    name: 'Advertising and launch costs',
    description: 'Advertising and launch costs',
  },
  2014: {
    name: 'Pre-operating costs incurred before start of business',
    description: 'Pre-operating costs incurred before start of business',
  },
  2015: {
    name: 'Capital restructuring costs (mergers, demergers, conversions)',
    description:
      'Capital restructuring costs (mergers, demergers, conversions)',
  },
  2016: {
    name: "Stock exchange listing costs'entrée à la Bourse",
    description: 'Stock exchange listing costs',
  },
  2017: {
    name: 'Restructuring costs',
    description: 'Restructuring costs',
  },
  2018: {
    name: "Miscellaneous formation costs'établissement",
    description: 'Miscellaneous formation costs',
  },
  202: {
    name: 'CHARGES TO BE SPREAD OVER SEVERAL ACCOUNTING PERIODS',
    description: 'Charges to be spread over several accounting periods',
  },
  2021: { name: 'Deferred charges', description: 'Deferred charges' },
  2022: {
    name: "Fixed asset acquisition costs'acquisition d'immobilisations",
    description: 'Fixed asset acquisition costs',
  },
  2026: {
    name: "Bond issuance costs'émission des emprunts",
    description: 'Bond issuance costs',
  },
  2028: {
    name: 'Charges to be spread (other)',
    description: 'Charges to be spread (other)',
  },
  206: {
    name: 'BOND REDEMPTION PREMIUMS',
    description:
      'Bond redemption premiums — excess of redemption value over issue value',
  },
  2061: {
    name: 'Redemption premiums',
    description: 'Redemption premiums — ordinary bonds',
  },
  2062: {
    name: 'Redemption premiums',
    description: 'Redemption premiums — convertible bonds',
  },
  2068: {
    name: 'Redemption premiums',
    description: 'Redemption premiums — other bonds',
  },

  // ────────── 21 INTANGIBLE ASSETS ──────────
  21: {
    name: 'INTANGIBLE ASSETS',
    description: 'Intangible assets',
  },
  211: {
    name: 'RESEARCH AND DEVELOPMENT COSTS (CAPITALISED)',
    description: 'Research and development costs (capitalised)',
  },
  212: {
    name: 'PATENTS, LICENCES, CONCESSIONS AND SIMILAR RIGHTS',
    description: 'Patents, licences, concessions and similar rights',
  },
  213: {
    name: 'SOFTWARE (COMPUTER PROGRAMS)',
    description: 'Software (computer programs)',
  },
  214: {
    name: 'TRADEMARKS AND BRAND NAMES',
    description: 'Trademarks and brand names',
  },
  215: {
    name: 'GOODWILL (BUSINESS VALUE / FONDS DE COMMERCE)',
    description: 'Goodwill (business value / fonds de commerce)',
  },
  216: {
    name: 'LEASEHOLD RIGHTS (DROIT AU BAIL)',
    description: 'Leasehold rights (droit au bail)',
  },
  217: {
    name: 'CREATIVE / ARTISTIC INVESTMENTS',
    description: 'Creative / artistic investments',
  },
  218: {
    name: 'OTHER INTANGIBLE RIGHTS AND VALUES',
    description: 'Other intangible rights and values',
  },
  219: {
    name: 'INTANGIBLE ASSETS UNDER CONSTRUCTION / DEVELOPMENT',
    description: 'Intangible assets under construction / development',
  },
  2191: {
    name: 'R&D in progress',
    description: 'R&D in progress',
  },
  2193: {
    name: 'Software under development',
    description: 'Software under development',
  },
  2198: {
    name: 'Other intangibles in progress',
    description: 'Other intangibles in progress',
  },

  // ────────── 22 LAND ──────────
  22: { name: 'LAND', description: 'Land' },
  221: {
    name: 'AGRICULTURAL AND FORESTRY LAND',
    description: 'Agricultural and forestry land',
  },
  2211: {
    name: "Agricultural operational land'exploitation agricole",
    description: 'Agricultural operational land',
  },
  2212: {
    name: "Forestry operational land'exploitation forestière",
    description: 'Forestry operational land',
  },
  2218: {
    name: 'Other land',
    description: 'Other agricultural/forestry land',
  },
  222: {
    name: 'BARE / UNDEVELOPED LAND',
    description: 'Bare / undeveloped land',
  },
  2221: {
    name: 'Building plots (land for development)',
    description: 'Building plots (land for development)',
  },
  2228: {
    name: 'Other undeveloped land',
    description: 'Other undeveloped land',
  },
  223: { name: 'LAND WITH BUILDINGS', description: 'Land with buildings' },
  2231: {
    name: 'Land for industrial and agricultural buildings',
    description: 'Land for industrial and agricultural buildings',
  },
  2232: {
    name: 'Land for administrative and commercial buildings',
    description: 'Land for administrative and commercial buildings',
  },
  2234: {
    name: 'Land for other professional use buildings',
    description: 'Land for other professional use buildings',
  },
  2235: {
    name: 'Land for non-professional use buildings',
    description: 'Land for non-professional use buildings',
  },
  2238: {
    name: 'Other land with buildings',
    description: 'Other land with buildings',
  },
  224: {
    name: 'LAND DEVELOPMENT WORKS',
    description: 'Land development works',
  },
  2241: {
    name: "Tree and shrub planting works'arbres et d'arbustes",
    description: 'Tree and shrub planting works',
  },
  2248: {
    name: 'Other land development works',
    description: 'Other land development works',
  },
  225: {
    name: 'MINERAL / QUARRY LAND (EXTRACTIVE SITES)',
    description: 'Mineral / quarry land (extractive sites)',
  },
  2251: { name: 'Quarries', description: 'Quarries' },
  226: {
    name: 'DEVELOPED / IMPROVED LAND',
    description: 'Developed / improved land',
  },
  2261: { name: 'Car park land', description: 'Car park land' },
  227: {
    name: 'LAND HELD UNDER CONCESSION',
    description: 'Land held under concession',
  },
  228: { name: 'OTHER LAND', description: 'Other land' },
  2281: {
    name: 'Land for rental property buildings',
    description: 'Land for rental property buildings',
  },
  2285: {
    name: 'Land for staff accommodation',
    description: 'Land for staff accommodation',
  },
  2288: {
    name: 'Other land',
    description: 'Other miscellaneous land',
  },
  229: {
    name: 'LAND IMPROVEMENTS UNDER CONSTRUCTION',
    description: 'Land improvements under construction',
  },
  2291: {
    name: 'Agricultural/forestry land improvements in progress',
    description: 'Agricultural/forestry land improvements in progress',
  },
  2292: {
    name: 'Bare land improvements in progress',
    description: 'Bare land improvements in progress',
  },
  2295: {
    name: 'Mineral land improvements in progress',
    description: 'Mineral land improvements in progress',
  },
  2298: {
    name: 'Other land',
    description: 'Other land improvements in progress',
  },

  // ────────── 23 BUILDINGS, TECHNICAL INSTALLATIONS AND FIXTURES ──────────
  23: {
    name: 'BUILDINGS, TECHNICAL INSTALLATIONS AND FITTINGS',
    description: 'Buildings, technical installations and fittings',
  },
  231: {
    name: 'INDUSTRIAL, AGRICULTURAL, ADMINISTRATIVE AND COMMERCIAL BUILDINGS ON OWN LAND',
    description:
      'Industrial, agricultural, administrative and commercial buildings on own land',
  },
  2311: {
    name: 'Industrial buildings (own land)',
    description: 'Industrial buildings (own land)',
  },
  2312: {
    name: 'Agricultural buildings (own land)',
    description: 'Agricultural buildings (own land)',
  },
  2313: {
    name: 'Administrative and commercial buildings (own land)',
    description: 'Administrative and commercial buildings (own land)',
  },
  2314: {
    name: 'Staff accommodation buildings (own land)',
    description: 'Staff accommodation buildings (own land)',
  },
  2315: {
    name: 'Rental investment property buildings (own land)',
    description: 'Rental investment property buildings (own land)',
  },
  232: {
    name: "INDUSTRIAL, AGRICULTURAL, ADMINISTRATIVE AND COMMERCIAL BUILDINGS ON THIRD-PARTY LAND D'AUTRUI",
    description:
      'Industrial, agricultural, administrative and commercial buildings on third-party land',
  },
  2321: {
    name: 'Industrial buildings (third-party land)',
    description: 'Industrial buildings (third-party land)',
  },
  2322: {
    name: 'Agricultural buildings (third-party land)',
    description: 'Agricultural buildings (third-party land)',
  },
  2323: {
    name: 'Administrative and commercial buildings (third-party land)',
    description:
      'Administrative and commercial buildings (third-party land)',
  },
  2324: {
    name: 'Staff accommodation buildings (third-party land)',
    description: 'Staff accommodation buildings (third-party land)',
  },
  2325: {
    name: 'Rental investment property buildings (third-party land)',
    description: 'Rental investment property buildings (third-party land)',
  },
  233: {
    name: "INFRASTRUCTURE WORKS D'INFRASTRUCTURE",
    description: 'Infrastructure works',
  },
  2331: {
    name: 'Roads and earthworks',
    description: 'Roads and earthworks',
  },
  2332: {
    name: 'Railway infrastructure',
    description: 'Railway infrastructure',
  },
  2333: { name: "Waterways'eau", description: 'Waterways' },
  2334: { name: 'Dams and dikes', description: 'Dams and dikes' },
  2335: {
    name: "Airfield runways and taxiways'aérodrome",
    description: 'Airfield runways and taxiways',
  },
  2338: { name: 'Other', description: 'Other infrastructure works' },
  234: {
    name: 'TECHNICAL INSTALLATIONS',
    description: 'Technical installations',
  },
  2341: {
    name: 'Specialised complex installations on own land',
    description: 'Specialised complex installations on own land',
  },
  2342: {
    name: "Specialised complex installations on third-party land'autrui",
    description: 'Specialised complex installations on third-party land',
  },
  2343: {
    name: 'Specific installations on own land',
    description: 'Specific installations on own land',
  },
  2344: {
    name: "Specific installations on third-party land'autrui",
    description: 'Specific installations on third-party land',
  },
  235: {
    name: 'OFFICE FIT-OUTS AND FITTINGS',
    description: 'Office fit-outs and fittings',
  },
  2351: {
    name: 'General office installations',
    description: 'General office installations',
  },
  2358: { name: 'Other', description: 'Other office fittings' },
  237: {
    name: 'INDUSTRIAL, AGRICULTURAL AND COMMERCIAL BUILDINGS HELD UNDER CONCESSION',
    description:
      'Industrial, agricultural and commercial buildings held under concession',
  },
  238: {
    name: 'OTHER INSTALLATIONS AND FITTINGS',
    description: 'Other installations and fittings',
  },
  239: {
    name: 'BUILDINGS AND INSTALLATIONS UNDER CONSTRUCTION',
    description: 'Buildings and installations under construction',
  },

  // ────────── 24 EQUIPMENT AND MACHINERY ──────────
  24: {
    name: 'EQUIPMENT AND MACHINERY',
    description: 'Equipment and machinery',
  },
  241: {
    name: 'INDUSTRIAL AND COMMERCIAL MACHINERY AND TOOLS',
    description: 'Industrial and commercial machinery and tools',
  },
  2411: {
    name: 'Industrial machinery',
    description: 'Industrial machinery',
  },
  2412: { name: 'Industrial tools', description: 'Industrial tools' },
  2413: {
    name: 'Commercial equipment',
    description: 'Commercial equipment',
  },
  2414: { name: 'Commercial tools', description: 'Commercial tools' },
  242: {
    name: 'AGRICULTURAL EQUIPMENT AND TOOLS',
    description: 'Agricultural equipment and tools',
  },
  2421: {
    name: 'Agricultural machinery',
    description: 'Agricultural machinery',
  },
  2422: { name: 'Agricultural tools', description: 'Agricultural tools' },
  243: {
    name: "RETURNABLE AND INDIVIDUALLY IDENTIFIABLE PACKAGING EQUIPMENT D'EMBALLAGE RÉCUPÉRABLE ET IDENTIFIABLE",
    description:
      'Returnable and individually identifiable packaging equipment',
  },
  244: {
    name: 'OFFICE EQUIPMENT AND FURNITURE',
    description: 'Office equipment and furniture',
  },
  2441: { name: 'Office equipment', description: 'Office equipment' },
  2442: {
    name: 'Computer hardware and IT equipment',
    description: 'Computer hardware and IT equipment',
  },
  2443: {
    name: 'Office machines (printers, copiers, etc.)',
    description: 'Office machines (printers, copiers, etc.)',
  },
  2444: { name: 'Office furniture', description: 'Office furniture' },
  2446: {
    name: 'Equipment and furniture in rental/investment buildings',
    description: 'Equipment and furniture in rental/investment buildings',
  },
  2447: {
    name: 'Equipment and furniture in staff accommodation',
    description: 'Equipment and furniture in staff accommodation',
  },
  245: {
    name: 'TRANSPORT EQUIPMENT AND VEHICLES',
    description: 'Transport equipment and vehicles',
  },
  2451: { name: 'Motor vehicles', description: 'Motor vehicles' },
  2452: {
    name: 'Railway rolling stock',
    description: 'Railway rolling stock',
  },
  2453: {
    name: 'River and lagoon watercraft',
    description: 'River and lagoon watercraft',
  },
  2454: { name: 'Sea-going vessels', description: 'Sea-going vessels' },
  2455: { name: 'Aircraft', description: 'Aircraft' },
  2456: {
    name: 'Horse-drawn vehicles',
    description: 'Horse-drawn vehicles',
  },
  2458: {
    name: 'Other transport (bicycle, moped, motorcycle)',
    description: 'Other transport (bicycle, moped, motorcycle)',
  },
  246: {
    name: 'BIOLOGICAL ASSETS',
    description:
      'Biological assets — animals and agricultural plantations',
  },
  2461: {
    name: 'Draft animals / livestock (working animals)',
    description: 'Draft animals / livestock (working animals)',
  },
  2462: {
    name: 'Breeding livestock',
    description: 'Breeding livestock',
  },
  2463: { name: 'Guard animals', description: 'Guard animals' },
  2465: {
    name: 'Perennial agricultural plantations',
    description: 'Perennial agricultural plantations',
  },
  2468: { name: 'Other', description: 'Other biological assets' },
  247: {
    name: 'EQUIPMENT FITTINGS AND IMPROVEMENTS',
    description: 'Equipment fittings and improvements',
  },
  248: { name: 'OTHER EQUIPMENT', description: 'Other equipment' },
  2481: {
    name: "Collections and works of art'art",
    description: 'Collections and works of art',
  },
  249: {
    name: 'EQUIPMENT UNDER CONSTRUCTION',
    description: 'Equipment under construction or acquisition',
  },
  2491: {
    name: 'Industrial and commercial equipment in progress',
    description: 'Industrial and commercial equipment in progress',
  },
  2492: {
    name: 'Agricultural equipment in progress',
    description: 'Agricultural equipment in progress',
  },
  2493: {
    name: "Returnable packaging equipment in progress'emballage récupérable et identifiable",
    description: 'Returnable packaging equipment in progress',
  },
  2494: {
    name: 'Office equipment and furniture in progress',
    description: 'Office equipment and furniture in progress',
  },
  2495: {
    name: 'Transport equipment in progress',
    description: 'Transport equipment in progress',
  },
  2496: {
    name: 'Biological assets in progress',
    description: 'Biological assets in progress',
  },
  2497: {
    name: 'Equipment fittings in progress',
    description: 'Equipment fittings in progress',
  },
  2498: {
    name: 'Other equipment in progress',
    description: 'Other equipment in progress',
  },

  // ────────── 25 ADVANCES AND PAYMENTS ON ACCOUNT ON FIXED ASSETS ──────────
  25: {
    name: 'ADVANCES AND DEPOSITS PAID ON FIXED ASSETS (PREPAYMENTS TO SUPPLIERS OF NON-CURRENT ASSETS)',
    description:
      'Advances and deposits paid on fixed assets (prepayments to suppliers of non-current assets)',
  },
  251: {
    name: 'ADVANCES PAID ON INTANGIBLE ASSETS',
    description: 'Advances paid on intangible assets',
  },
  252: {
    name: 'ADVANCES PAID ON TANGIBLE ASSETS',
    description: 'Advances paid on tangible assets',
  },

  // ────────── 26 EQUITY PARTICIPATIONS ──────────
  26: {
    name: 'EQUITY INVESTMENTS (SHAREHOLDINGS)',
    description:
      'Equity investments (shareholdings) — strategic long-term investments',
  },
  261: {
    name: 'EQUITY INVESTMENTS IN SUBSIDIARIES (EXCLUSIVE CONTROL)',
    description: 'Equity investments in subsidiaries (exclusive control)',
  },
  262: {
    name: 'EQUITY INVESTMENTS IN JOINTLY CONTROLLED ENTITIES',
    description: 'Equity investments in jointly controlled entities',
  },
  263: {
    name: 'EQUITY INVESTMENTS IN ASSOCIATES (SIGNIFICANT INFLUENCE)',
    description:
      'Equity investments in associates (significant influence)',
  },
  265: {
    name: 'INTERESTS IN PROFESSIONAL ORGANISATIONS',
    description: 'Interests in professional organisations',
  },
  266: {
    name: "INTERESTS IN ECONOMIC INTEREST GROUPS (EIG / GIE) D'INTÉRÊT ÉCONOMIQUE (G.I.E.)",
    description: 'Interests in Economic Interest Groups (EIG / GIE)',
  },
  268: {
    name: 'OTHER EQUITY INVESTMENT SECURITIES',
    description: 'Other equity investment securities',
  },

  // ────────── 27 OTHER FINANCIAL ASSETS ──────────
  27: {
    name: 'OTHER LONG-TERM FINANCIAL ASSETS',
    description: 'Other long-term financial assets',
  },
  271: {
    name: 'LONG-TERM LOANS AND NON-TRADE RECEIVABLES',
    description: 'Long-term loans and non-trade receivables',
  },
  2711: {
    name: 'Participating loans granted',
    description: 'Participating loans granted',
  },
  2712: {
    name: 'Loans to shareholders/partners',
    description: 'Loans to shareholders/partners',
  },
  2713: {
    name: 'Business purchase notes receivable',
    description: 'Business purchase notes receivable',
  },
  2714: {
    name: 'Securities lent to third parties',
    description: 'Securities lent to third parties',
  },
  272: { name: 'LOANS TO EMPLOYEES', description: 'Loans to employees' },
  2721: {
    name: 'Housing loans to employees',
    description: 'Housing loans to employees',
  },
  2722: {
    name: "Equipment and installation loans to employees'installation",
    description: 'Equipment and installation loans to employees',
  },
  2728: {
    name: "Other loans to employees (education, etc.)'études…)",
    description: 'Other loans to employees (education, etc.)',
  },
  273: {
    name: "LONG-TERM RECEIVABLES FROM THE STATE L'ÉTAT",
    description: 'Long-term receivables from the State',
  },
  2731: {
    name: 'Guarantee retentions',
    description: 'Performance bond retentions receivable from the State',
  },
  2733: {
    name: 'Regulated fund receivable',
    description: 'Regulated fund receivable',
  },
  2738: {
    name: 'Other',
    description: 'Other receivables from the State',
  },
  274: {
    name: 'LONG-TERM INVESTMENT SECURITIES',
    description: 'Long-term investment securities (non-controlling)',
  },
  2741: {
    name: "Portfolio investment securities (TIAP)'activité de portefeuille (T.I.A.P.)",
    description: 'Portfolio investment securities (TIAP)',
  },
  2742: {
    name: 'Participating securities (non-voting bonds)',
    description: 'Participating securities (non-voting bonds)',
  },
  2743: {
    name: "Investment certificates'investissement",
    description: 'Investment certificates',
  },
  2744: {
    name: 'Mutual fund units (FCP)',
    description: 'Mutual fund units (FCP)',
  },
  2748: {
    name: 'Other long-term investment securities',
    description: 'Other long-term investment securities',
  },
  275: {
    name: 'DEPOSITS AND SURETIES PAID (LONG-TERM)',
    description: 'Deposits and sureties paid (long-term)',
  },
  2751: {
    name: "Rental deposits paid'avance",
    description: 'Rental deposits paid',
  },
  2752: {
    name: "Electricity deposits paid'électricité",
    description: 'Electricity deposits paid',
  },
  2753: {
    name: "Water deposits paid'eau",
    description: 'Water deposits paid',
  },
  2754: { name: 'Gas deposits paid', description: 'Gas deposits paid' },
  2755: {
    name: 'Telephone and telecoms deposits paid',
    description: 'Telephone and telecoms deposits paid',
  },
  2756: {
    name: 'Public contract sureties paid',
    description: 'Public contract sureties paid',
  },
  2757: {
    name: 'Other sureties paid',
    description: 'Other sureties paid',
  },
  2758: {
    name: 'Other deposits and sureties paid',
    description: 'Other deposits and sureties paid',
  },
  276: {
    name: 'ACCRUED INTEREST',
    description: 'Accrued interest on long-term financial assets',
  },
  2761: {
    name: 'Accrued interest on non-trade loans',
    description: 'Accrued interest on non-trade loans',
  },
  2762: {
    name: 'Accrued interest on employee loans',
    description: 'Accrued interest on employee loans',
  },
  2763: {
    name: "Accrued interest on State receivables'Etat",
    description: 'Accrued interest on State receivables',
  },
  2764: {
    name: 'Accrued interest on long-term securities',
    description: 'Accrued interest on long-term securities',
  },
  2765: {
    name: 'Accrued interest on deposits paid',
    description: 'Accrued interest on deposits paid',
  },
  2767: {
    name: 'Accrued interest on participation-related receivables',
    description: 'Accrued interest on participation-related receivables',
  },
  2768: {
    name: 'Accrued interest on other long-term financial assets',
    description: 'Accrued interest on other long-term financial assets',
  },
  277: {
    name: 'RECEIVABLES RELATED TO EQUITY INVESTMENTS AND ADVANCES TO GIE',
    description:
      'Receivables related to equity investments and advances to GIE',
  },
  2771: {
    name: 'Intra-group participation receivables',
    description: 'Intra-group participation receivables',
  },
  2772: {
    name: 'Non-group participation receivables',
    description: 'Non-group participation receivables',
  },
  2773: {
    name: 'Receivables from joint venture entities',
    description: 'Receivables from joint venture entities',
  },
  2774: {
    name: "Advances to Economic Interest Groups'intérêt économique (G.I.E.)",
    description: 'Advances to Economic Interest Groups',
  },
  278: {
    name: 'MISCELLANEOUS LONG-TERM FINANCIAL ASSETS',
    description: 'Miscellaneous long-term financial assets',
  },
  2781: {
    name: 'Miscellaneous intra-group receivables',
    description: 'Miscellaneous intra-group receivables',
  },
  2782: {
    name: 'Miscellaneous non-group receivables',
    description: 'Miscellaneous non-group receivables',
  },
  2785: {
    name: 'Gold and precious metals held as financial assets',
    description: 'Gold and precious metals held as financial assets',
  },

  // ────────── 28 DEPRECIATION ──────────
  28: {
    name: 'DEPRECIATION',
    description:
      'Accumulated depreciation on fixed assets (contra account)',
  },
  281: {
    name: 'ACCUMULATED DEPRECIATION',
    description: 'Accumulated depreciation — intangible assets',
  },
  2811: {
    name: 'Depreciation',
    description: 'Depreciation — R&D costs',
  },
  2812: {
    name: 'Depreciation',
    description: 'Depreciation — patents, licences and similar rights',
  },
  2813: {
    name: 'Depreciation',
    description: 'Depreciation — software',
  },
  2814: {
    name: 'Depreciation',
    description: 'Depreciation — trademarks',
  },
  2815: {
    name: 'Amortisation',
    description: 'Amortisation — goodwill',
  },
  2816: {
    name: 'Amortisation',
    description: 'Amortisation — leasehold rights',
  },
  2817: {
    name: 'Depreciation',
    description: 'Depreciation — creative investments',
  },
  2818: {
    name: 'Depreciation',
    description: 'Depreciation — other intangibles',
  },
  282: {
    name: 'ACCUMULATED DEPRECIATION',
    description:
      'Accumulated depreciation — land (extractive/development sites)',
  },
  2821: {
    name: 'Depreciation',
    description: 'Depreciation — agricultural/forestry land',
  },
  2824: {
    name: 'Depreciation',
    description: 'Depreciation — land development works',
  },
  2825: {
    name: 'Depreciation',
    description: 'Depreciation — mineral/quarry land',
  },
  283: {
    name: 'ACCUMULATED DEPRECIATION',
    description:
      'Accumulated depreciation — buildings, installations and fittings',
  },
  2831: {
    name: 'Depreciation',
    description: 'Depreciation — buildings on own land',
  },
  2832: {
    name: "Depreciation'autrui",
    description: 'Depreciation — buildings on third-party land',
  },
  2833: {
    name: "Depreciation'infrastructure",
    description: 'Depreciation — infrastructure works',
  },
  2834: {
    name: 'Depreciation',
    description: 'Depreciation — technical installations',
  },
  2835: {
    name: 'Depreciation',
    description: 'Depreciation — office fittings',
  },
  2837: {
    name: 'Depreciation',
    description: 'Depreciation — concession buildings',
  },
  2838: {
    name: 'Depreciation',
    description: 'Depreciation — other installations and fittings',
  },
  284: {
    name: 'ACCUMULATED DEPRECIATION',
    description: 'Accumulated depreciation — equipment',
  },
  2841: {
    name: 'Depreciation',
    description: 'Depreciation — industrial and commercial equipment',
  },
  2842: {
    name: 'Depreciation',
    description: 'Depreciation — agricultural equipment',
  },
  2843: {
    name: "Depreciation'emballage récupérable et identifiable",
    description: 'Depreciation — returnable packaging',
  },
  2844: {
    name: 'Depreciation',
    description: 'Depreciation — office equipment and furniture',
  },
  2845: {
    name: 'Depreciation',
    description: 'Depreciation — vehicles and transport equipment',
  },
  2846: {
    name: 'Depreciation',
    description: 'Depreciation — biological assets',
  },
  2847: {
    name: 'Depreciation',
    description: 'Depreciation — equipment fittings',
  },
  2848: {
    name: 'Depreciation',
    description: 'Depreciation — other equipment',
  },

  // ────────── 29 IMPAIRMENT OF FIXED ASSETS ──────────
  29: {
    name: 'IMPAIRMENT PROVISIONS ON FIXED ASSETS (CONTRA ACCOUNT)',
    description: 'Impairment provisions on fixed assets (contra account)',
  },
  291: {
    name: 'IMPAIRMENT PROVISIONS',
    description: 'Impairment provisions — intangible assets',
  },
  2912: {
    name: 'Impairment',
    description: 'Impairment — patents and licences',
  },
  2913: {
    name: 'Impairment',
    description: 'Impairment — software',
  },
  2914: {
    name: 'Impairment',
    description: 'Impairment — trademarks',
  },
  2915: {
    name: 'Impairment',
    description: 'Impairment — goodwill',
  },
  2916: {
    name: 'Impairment',
    description: 'Impairment — leasehold rights',
  },
  2917: {
    name: 'Impairment',
    description: 'Impairment — creative investments',
  },
  2918: {
    name: 'Impairment',
    description: 'Impairment — other intangibles',
  },
  2919: {
    name: 'Impairment',
    description: 'Impairment — intangibles under development',
  },
  292: {
    name: 'IMPAIRMENT PROVISIONS',
    description: 'Impairment provisions — land',
  },
  2921: {
    name: 'Impairment',
    description: 'Impairment — agricultural/forestry land',
  },
  2922: {
    name: 'Impairment',
    description: 'Impairment — undeveloped land',
  },
  2923: {
    name: 'Impairment',
    description: 'Impairment — land with buildings',
  },
  2924: {
    name: 'Impairment',
    description: 'Impairment — land development works',
  },
  2925: {
    name: 'Impairment',
    description: 'Impairment — mineral/quarry land',
  },
  2926: {
    name: 'Impairment',
    description: 'Impairment — improved land',
  },
  2927: {
    name: 'Impairment',
    description: 'Impairment — concession land',
  },
  2928: {
    name: 'Impairment',
    description: 'Impairment — other land',
  },
  2929: {
    name: 'Impairment',
    description: 'Impairment — land improvements in progress',
  },
  293: {
    name: 'IMPAIRMENT PROVISIONS',
    description: 'Impairment provisions — buildings and installations',
  },
  2931: {
    name: 'Impairment',
    description: 'Impairment — buildings on own land',
  },
  2932: {
    name: "Impairment'autrui",
    description: 'Impairment — buildings on third-party land',
  },
  2933: {
    name: "Impairment'infrastructures",
    description: 'Impairment — infrastructure works',
  },
  2934: {
    name: 'Impairment',
    description: 'Impairment — technical installations',
  },
  2935: {
    name: 'Impairment',
    description: 'Impairment — office fittings',
  },
  2937: {
    name: 'Impairment',
    description: 'Impairment — concession buildings',
  },
  2938: {
    name: 'Impairment',
    description: 'Impairment — other installations',
  },
  2939: {
    name: 'Impairment',
    description: 'Impairment — buildings under construction',
  },
  294: {
    name: 'IMPAIRMENT PROVISIONS',
    description: 'Impairment provisions — equipment',
  },
  2941: {
    name: 'Impairment',
    description: 'Impairment — industrial equipment',
  },
  2942: {
    name: 'Impairment',
    description: 'Impairment — agricultural equipment',
  },
  2943: {
    name: "Impairment'emballage récupérable et identifiable",
    description: 'Impairment — returnable packaging',
  },
  2944: {
    name: 'Impairment',
    description: 'Impairment — office equipment and furniture',
  },
  2945: {
    name: 'Impairment',
    description: 'Impairment — transport equipment',
  },
  2946: {
    name: 'Impairment',
    description: 'Impairment — biological assets',
  },
  2947: {
    name: 'Impairment',
    description: 'Impairment — equipment fittings',
  },
  2948: {
    name: 'Impairment',
    description: 'Impairment — other equipment',
  },
  2949: {
    name: 'Impairment',
    description: 'Impairment — equipment under acquisition',
  },
  295: {
    name: 'IMPAIRMENT PROVISIONS',
    description: 'Impairment provisions — advances on fixed assets',
  },
  2951: {
    name: 'Impairment',
    description: 'Impairment — advances on intangibles',
  },
  2952: {
    name: 'Impairment',
    description: 'Impairment — advances on tangibles',
  },
  296: {
    name: 'IMPAIRMENT PROVISIONS',
    description: 'Impairment provisions — equity investments',
  },
  2961: {
    name: 'Impairment',
    description: 'Impairment — subsidiary investments',
  },
  2962: {
    name: 'Impairment',
    description: 'Impairment — joint venture investments',
  },
  2963: {
    name: 'Impairment',
    description: 'Impairment — associate investments',
  },
  2965: {
    name: 'Impairment',
    description: 'Impairment — professional organisation interests',
  },
  2966: {
    name: 'Impairment',
    description: 'Impairment — GIE interests',
  },
  2968: {
    name: 'Impairment',
    description: 'Impairment — other equity investments',
  },
  297: {
    name: 'IMPAIRMENT PROVISIONS',
    description:
      'Impairment provisions — other long-term financial assets',
  },
  2971: {
    name: 'Impairment',
    description: 'Impairment — non-trade loans',
  },
  2972: {
    name: 'Impairment',
    description: 'Impairment — employee loans',
  },
  2973: {
    name: "Impairment'Etat",
    description: 'Impairment — State receivables',
  },
  2974: {
    name: 'Impairment',
    description: 'Impairment — long-term securities',
  },
  2975: {
    name: 'Impairment',
    description: 'Impairment — deposits paid',
  },
  2977: {
    name: 'Impairment',
    description: 'Impairment — participation receivables',
  },
  2978: {
    name: 'Impairment',
    description: 'Impairment — miscellaneous financial receivables',
  },
} as const satisfies Plan;

export type Class2AccountCode = keyof typeof class2Accounts;
