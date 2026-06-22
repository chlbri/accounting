import type { Plan } from './types';

/**
 * SYSCOHADA — CLASSE 2 : Comptes de l'actif immobilisé
 * (Class 2: Fixed / Non-Current Assets)
 *
 * Covers: deferred charges, intangible assets, land, buildings,
 * equipment, advances on fixed assets, investments, depreciation,
 * and impairment provisions.
 *
 * Source: Official SYSCOHADA Chart of Accounts PDF, pages 11–20.
 */
export const class2Accounts = {
  // ────────── 20 CHARGES IMMOBILISÉES ──────────
  20: {
    name: 'CHARGES IMMOBILISÉES',
    description:
      'Deferred charges — capitalised start-up, restructuring and similar costs',
  },
  201: {
    name: "FRAIS D'ÉTABLISSEMENT",
    description: 'Start-up / formation costs',
  },
  2011: {
    name: 'Frais de constitution',
    description: 'Incorporation costs',
  },
  2012: {
    name: 'Frais de prospection',
    description: 'Prospecting / survey costs',
  },
  2013: {
    name: 'Frais de publicité et de lancement',
    description: 'Advertising and launch costs',
  },
  2014: {
    name: 'Frais de fonctionnement antérieurs au démarrage',
    description: 'Pre-operating costs incurred before start of business',
  },
  2015: {
    name: 'Frais de modification du capital (fusions, scissions, transformations)',
    description:
      'Capital restructuring costs (mergers, demergers, conversions)',
  },
  2016: {
    name: "Frais d'entrée à la Bourse",
    description: 'Stock exchange listing costs',
  },
  2017: {
    name: 'Frais de restructuration',
    description: 'Restructuring costs',
  },
  2018: {
    name: "Frais divers d'établissement",
    description: 'Miscellaneous formation costs',
  },
  202: {
    name: 'CHARGES À RÉPARTIR SUR PLUSIEURS EXERCICES',
    description: 'Charges to be spread over several accounting periods',
  },
  2021: { name: 'Charges différées', description: 'Deferred charges' },
  2022: {
    name: "Frais d'acquisition d'immobilisations",
    description: 'Fixed asset acquisition costs',
  },
  2026: {
    name: "Frais d'émission des emprunts",
    description: 'Bond issuance costs',
  },
  2028: {
    name: 'Charges à étaler',
    description: 'Charges to be spread (other)',
  },
  206: {
    name: 'PRIMES DE REMBOURSEMENT DES OBLIGATIONS',
    description:
      'Bond redemption premiums — excess of redemption value over issue value',
  },
  2061: {
    name: 'Obligations ordinaires',
    description: 'Redemption premiums — ordinary bonds',
  },
  2062: {
    name: 'Obligations convertibles',
    description: 'Redemption premiums — convertible bonds',
  },
  2068: {
    name: 'Autres emprunts obligataires',
    description: 'Redemption premiums — other bonds',
  },

  // ────────── 21 IMMOBILISATIONS INCORPORELLES ──────────
  21: {
    name: 'IMMOBILISATIONS INCORPORELLES',
    description: 'Intangible assets',
  },
  211: {
    name: 'FRAIS DE RECHERCHE ET DE DÉVELOPPEMENT',
    description: 'Research and development costs (capitalised)',
  },
  212: {
    name: 'BREVETS, LICENCES, CONCESSIONS ET DROITS SIMILAIRES',
    description: 'Patents, licences, concessions and similar rights',
  },
  213: { name: 'LOGICIELS', description: 'Software (computer programs)' },
  214: { name: 'MARQUES', description: 'Trademarks and brand names' },
  215: {
    name: 'FONDS COMMERCIAL',
    description: 'Goodwill (business value / fonds de commerce)',
  },
  216: {
    name: 'DROIT AU BAIL',
    description: 'Leasehold rights (droit au bail)',
  },
  217: {
    name: 'INVESTISSEMENTS DE CRÉATION',
    description: 'Creative / artistic investments',
  },
  218: {
    name: 'AUTRES DROITS ET VALEURS INCORPORELS',
    description: 'Other intangible rights and values',
  },
  219: {
    name: 'IMMOBILISATIONS INCORPORELLES EN COURS',
    description: 'Intangible assets under construction / development',
  },
  2191: {
    name: 'Frais de recherche et de développement',
    description: 'R&D in progress',
  },
  2193: { name: 'Logiciels', description: 'Software under development' },
  2198: {
    name: 'Autres droits et valeurs incorporels',
    description: 'Other intangibles in progress',
  },

  // ────────── 22 TERRAINS ──────────
  22: { name: 'TERRAINS', description: 'Land' },
  221: {
    name: 'TERRAINS AGRICOLES ET FORESTIERS',
    description: 'Agricultural and forestry land',
  },
  2211: {
    name: "Terrains d'exploitation agricole",
    description: 'Agricultural operational land',
  },
  2212: {
    name: "Terrains d'exploitation forestière",
    description: 'Forestry operational land',
  },
  2218: {
    name: 'Autres terrains',
    description: 'Other agricultural/forestry land',
  },
  222: { name: 'TERRAINS NUS', description: 'Bare / undeveloped land' },
  2221: {
    name: 'Terrains à bâtir',
    description: 'Building plots (land for development)',
  },
  2228: {
    name: 'Autres terrains nus',
    description: 'Other undeveloped land',
  },
  223: { name: 'TERRAINS BÂTIS', description: 'Land with buildings' },
  2231: {
    name: 'pour bâtiments industriels et agricoles',
    description: 'Land for industrial and agricultural buildings',
  },
  2232: {
    name: 'pour bâtiments administratifs et commerciaux',
    description: 'Land for administrative and commercial buildings',
  },
  2234: {
    name: 'pour bâtiments affectés aux autres opérations professionnelles',
    description: 'Land for other professional use buildings',
  },
  2235: {
    name: 'pour bâtiments affectés aux autres opérations non professionnelles',
    description: 'Land for non-professional use buildings',
  },
  2238: {
    name: 'Autres terrains bâtis',
    description: 'Other land with buildings',
  },
  224: {
    name: 'TRAVAUX DE MISE EN VALEUR DES TERRAINS',
    description: 'Land development works',
  },
  2241: {
    name: "Plantation d'arbres et d'arbustes",
    description: 'Tree and shrub planting works',
  },
  2248: {
    name: 'Autres travaux',
    description: 'Other land development works',
  },
  225: {
    name: 'TERRAINS DE GISEMENT',
    description: 'Mineral / quarry land (extractive sites)',
  },
  2251: { name: 'Carrières', description: 'Quarries' },
  226: {
    name: 'TERRAINS AMÉNAGÉS',
    description: 'Developed / improved land',
  },
  2261: { name: 'Parkings', description: 'Car park land' },
  227: {
    name: 'TERRAINS MIS EN CONCESSION',
    description: 'Land held under concession',
  },
  228: { name: 'AUTRES TERRAINS', description: 'Other land' },
  2281: {
    name: 'Terrains des immeubles de rapport',
    description: 'Land for rental property buildings',
  },
  2285: {
    name: 'Terrains des logements affectés au personnel',
    description: 'Land for staff accommodation',
  },
  2288: {
    name: 'Autres terrains',
    description: 'Other miscellaneous land',
  },
  229: {
    name: 'AMÉNAGEMENTS DE TERRAINS EN COURS',
    description: 'Land improvements under construction',
  },
  2291: {
    name: 'Terrains agricoles et forestiers',
    description: 'Agricultural/forestry land improvements in progress',
  },
  2292: {
    name: 'Terrains nus',
    description: 'Bare land improvements in progress',
  },
  2295: {
    name: 'Terrains de gisement',
    description: 'Mineral land improvements in progress',
  },
  2298: {
    name: 'Autres terrains',
    description: 'Other land improvements in progress',
  },

  // ────────── 23 BÂTIMENTS, INSTALLATIONS TECHNIQUES ET AGENCEMENTS ──────────
  23: {
    name: 'BÂTIMENTS, INSTALLATIONS TECHNIQUES ET AGENCEMENTS',
    description: 'Buildings, technical installations and fittings',
  },
  231: {
    name: 'BÂTIMENTS INDUSTRIELS, AGRICOLES, ADMINISTRATIFS ET COMMERCIAUX SUR SOL PROPRE',
    description:
      'Industrial, agricultural, administrative and commercial buildings on own land',
  },
  2311: {
    name: 'Bâtiments industriels',
    description: 'Industrial buildings (own land)',
  },
  2312: {
    name: 'Bâtiments agricoles',
    description: 'Agricultural buildings (own land)',
  },
  2313: {
    name: 'Bâtiments administratifs et commerciaux',
    description: 'Administrative and commercial buildings (own land)',
  },
  2314: {
    name: 'Bâtiments affectés au logement du personnel',
    description: 'Staff accommodation buildings (own land)',
  },
  2315: {
    name: 'Immeubles de rapport',
    description: 'Rental investment property buildings (own land)',
  },
  232: {
    name: "BÂTIMENTS INDUSTRIELS, AGRICOLES, ADMINISTRATIFS ET COMMERCIAUX SUR SOL D'AUTRUI",
    description:
      'Industrial, agricultural, administrative and commercial buildings on third-party land',
  },
  2321: {
    name: 'Bâtiments industriels',
    description: 'Industrial buildings (third-party land)',
  },
  2322: {
    name: 'Bâtiments agricoles',
    description: 'Agricultural buildings (third-party land)',
  },
  2323: {
    name: 'Bâtiments administratifs et commerciaux',
    description:
      'Administrative and commercial buildings (third-party land)',
  },
  2324: {
    name: 'Bâtiments affectés au logement du personnel',
    description: 'Staff accommodation buildings (third-party land)',
  },
  2325: {
    name: 'Immeubles de rapport',
    description: 'Rental investment property buildings (third-party land)',
  },
  233: {
    name: "OUVRAGES D'INFRASTRUCTURE",
    description: 'Infrastructure works',
  },
  2331: { name: 'Voies de terre', description: 'Roads and earthworks' },
  2332: { name: 'Voies de fer', description: 'Railway infrastructure' },
  2333: { name: "Voies d'eau", description: 'Waterways' },
  2334: { name: 'Barrages, Digues', description: 'Dams and dikes' },
  2335: {
    name: "Pistes d'aérodrome",
    description: 'Airfield runways and taxiways',
  },
  2338: { name: 'Autres', description: 'Other infrastructure works' },
  234: {
    name: 'INSTALLATIONS TECHNIQUES',
    description: 'Technical installations',
  },
  2341: {
    name: 'Installations complexes spécialisées sur sol propre',
    description: 'Specialised complex installations on own land',
  },
  2342: {
    name: "Installations complexes spécialisées sur sol d'autrui",
    description: 'Specialised complex installations on third-party land',
  },
  2343: {
    name: 'Installations à caractère spécifique sur sol propre',
    description: 'Specific installations on own land',
  },
  2344: {
    name: "Installations à caractère spécifique sur sol d'autrui",
    description: 'Specific installations on third-party land',
  },
  235: {
    name: 'AMÉNAGEMENTS DE BUREAUX',
    description: 'Office fit-outs and fittings',
  },
  2351: {
    name: 'Installations générales',
    description: 'General office installations',
  },
  2358: { name: 'Autres', description: 'Other office fittings' },
  237: {
    name: 'BÂTIMENTS INDUSTRIELS, AGRICOLES ET COMMERCIAUX MIS EN CONCESSION',
    description:
      'Industrial, agricultural and commercial buildings held under concession',
  },
  238: {
    name: 'AUTRES INSTALLATIONS ET AGENCEMENTS',
    description: 'Other installations and fittings',
  },
  239: {
    name: 'BÂTIMENTS ET INSTALLATIONS EN COURS',
    description: 'Buildings and installations under construction',
  },

  // ────────── 24 MATÉRIEL ──────────
  24: { name: 'MATÉRIEL', description: 'Equipment and machinery' },
  241: {
    name: 'MATÉRIEL ET OUTILLAGE INDUSTRIEL ET COMMERCIAL',
    description: 'Industrial and commercial machinery and tools',
  },
  2411: {
    name: 'Matériel industriel',
    description: 'Industrial machinery',
  },
  2412: { name: 'Outillage industriel', description: 'Industrial tools' },
  2413: {
    name: 'Matériel commercial',
    description: 'Commercial equipment',
  },
  2414: { name: 'Outillage commercial', description: 'Commercial tools' },
  242: {
    name: 'MATÉRIEL ET OUTILLAGE AGRICOLE',
    description: 'Agricultural equipment and tools',
  },
  2421: {
    name: 'Matériel agricole',
    description: 'Agricultural machinery',
  },
  2422: { name: 'Outillage agricole', description: 'Agricultural tools' },
  243: {
    name: "MATÉRIEL D'EMBALLAGE RÉCUPÉRABLE ET IDENTIFIABLE",
    description:
      'Returnable and individually identifiable packaging equipment',
  },
  244: {
    name: 'MATÉRIEL ET MOBILIER',
    description: 'Office equipment and furniture',
  },
  2441: { name: 'Matériel de bureau', description: 'Office equipment' },
  2442: {
    name: 'Matériel informatique',
    description: 'Computer hardware and IT equipment',
  },
  2443: {
    name: 'Matériel bureautique',
    description: 'Office machines (printers, copiers, etc.)',
  },
  2444: { name: 'Mobilier de bureau', description: 'Office furniture' },
  2446: {
    name: 'Matériel et mobilier des immeubles de rapport',
    description: 'Equipment and furniture in rental/investment buildings',
  },
  2447: {
    name: 'Matériel et mobilier des logements du personnel',
    description: 'Equipment and furniture in staff accommodation',
  },
  245: {
    name: 'MATÉRIEL DE TRANSPORT',
    description: 'Transport equipment and vehicles',
  },
  2451: { name: 'Matériel automobile', description: 'Motor vehicles' },
  2452: {
    name: 'Matériel ferroviaire',
    description: 'Railway rolling stock',
  },
  2453: {
    name: 'Matériel fluvial, lagunaire',
    description: 'River and lagoon watercraft',
  },
  2454: { name: 'Matériel naval', description: 'Sea-going vessels' },
  2455: { name: 'Matériel aérien', description: 'Aircraft' },
  2456: {
    name: 'Matériel hippomobile',
    description: 'Horse-drawn vehicles',
  },
  2458: {
    name: 'Autres (vélo, mobylette, moto)',
    description: 'Other transport (bicycle, moped, motorcycle)',
  },
  246: {
    name: 'IMMOBILISATIONS ANIMALES ET AGRICOLES',
    description:
      'Biological assets — animals and agricultural plantations',
  },
  2461: {
    name: 'Cheptel, animaux de trait',
    description: 'Draft animals / livestock (working animals)',
  },
  2462: {
    name: 'Cheptel, animaux reproducteurs',
    description: 'Breeding livestock',
  },
  2463: { name: 'Animaux de garde', description: 'Guard animals' },
  2465: {
    name: 'Plantations agricoles',
    description: 'Perennial agricultural plantations',
  },
  2468: { name: 'Autres', description: 'Other biological assets' },
  247: {
    name: 'AGENCEMENTS ET AMÉNAGEMENTS DU MATÉRIEL',
    description: 'Equipment fittings and improvements',
  },
  248: { name: 'AUTRES MATÉRIELS', description: 'Other equipment' },
  2481: {
    name: "Collections et œuvres d'art",
    description: 'Collections and works of art',
  },
  249: {
    name: 'MATÉRIEL EN COURS',
    description: 'Equipment under construction or acquisition',
  },
  2491: {
    name: 'Matériel et outillage industriel et commercial',
    description: 'Industrial and commercial equipment in progress',
  },
  2492: {
    name: 'Matériel et outillage agricole',
    description: 'Agricultural equipment in progress',
  },
  2493: {
    name: "Matériel d'emballage récupérable et identifiable",
    description: 'Returnable packaging equipment in progress',
  },
  2494: {
    name: 'Matériel et mobilier de bureau',
    description: 'Office equipment and furniture in progress',
  },
  2495: {
    name: 'Matériel de transport',
    description: 'Transport equipment in progress',
  },
  2496: {
    name: 'Immobilisations animales et agricoles',
    description: 'Biological assets in progress',
  },
  2497: {
    name: 'Agencements et aménagements du matériel',
    description: 'Equipment fittings in progress',
  },
  2498: {
    name: 'Autres matériels',
    description: 'Other equipment in progress',
  },

  // ────────── 25 AVANCES ET ACOMPTES VERSÉS SUR IMMOBILISATIONS ──────────
  25: {
    name: 'AVANCES ET ACOMPTES VERSÉS SUR IMMOBILISATIONS',
    description:
      'Advances and deposits paid on fixed assets (prepayments to suppliers of non-current assets)',
  },
  251: {
    name: 'AVANCES ET ACOMPTES VERSÉS SUR IMMOBILISATIONS INCORPORELLES',
    description: 'Advances paid on intangible assets',
  },
  252: {
    name: 'AVANCES ET ACOMPTES VERSÉS SUR IMMOBILISATIONS CORPORELLES',
    description: 'Advances paid on tangible assets',
  },

  // ────────── 26 TITRES DE PARTICIPATION ──────────
  26: {
    name: 'TITRES DE PARTICIPATION',
    description:
      'Equity investments (shareholdings) — strategic long-term investments',
  },
  261: {
    name: 'TITRES DE PARTICIPATION DANS DES SOCIÉTÉS SOUS CONTRÔLE EXCLUSIF',
    description: 'Equity investments in subsidiaries (exclusive control)',
  },
  262: {
    name: 'TITRES DE PARTICIPATION DANS DES SOCIÉTÉS SOUS CONTRÔLE CONJOINT',
    description: 'Equity investments in jointly controlled entities',
  },
  263: {
    name: 'TITRES DE PARTICIPATION DANS DES SOCIÉTÉS CONFÉRANT UNE INFLUENCE NOTABLE',
    description:
      'Equity investments in associates (significant influence)',
  },
  265: {
    name: 'PARTICIPATIONS DANS DES ORGANISMES PROFESSIONNELS',
    description: 'Interests in professional organisations',
  },
  266: {
    name: "PARTS DANS DES GROUPEMENTS D'INTÉRÊT ÉCONOMIQUE (G.I.E.)",
    description: 'Interests in Economic Interest Groups (EIG / GIE)',
  },
  268: {
    name: 'AUTRES TITRES DE PARTICIPATION',
    description: 'Other equity investment securities',
  },

  // ────────── 27 AUTRES IMMOBILISATIONS FINANCIÈRES ──────────
  27: {
    name: 'AUTRES IMMOBILISATIONS FINANCIÈRES',
    description: 'Other long-term financial assets',
  },
  271: {
    name: 'PRÊTS ET CRÉANCES NON COMMERCIALES',
    description: 'Long-term loans and non-trade receivables',
  },
  2711: {
    name: 'Prêts participatifs',
    description: 'Participating loans granted',
  },
  2712: {
    name: 'Prêts aux associés',
    description: 'Loans to shareholders/partners',
  },
  2713: {
    name: 'Billets de fonds',
    description: 'Business purchase notes receivable',
  },
  2714: {
    name: 'Titres prêtés',
    description: 'Securities lent to third parties',
  },
  272: { name: 'PRÊTS AU PERSONNEL', description: 'Loans to employees' },
  2721: {
    name: 'Prêts immobiliers',
    description: 'Housing loans to employees',
  },
  2722: {
    name: "Prêts mobiliers et d'installation",
    description: 'Equipment and installation loans to employees',
  },
  2728: {
    name: "Autres prêts (frais d'études…)",
    description: 'Other loans to employees (education, etc.)',
  },
  273: {
    name: "CRÉANCES SUR L'ÉTAT",
    description: 'Long-term receivables from the State',
  },
  2731: {
    name: 'Retenues de garantie',
    description: 'Performance bond retentions receivable from the State',
  },
  2733: {
    name: 'Fonds réglementé',
    description: 'Regulated fund receivable',
  },
  2738: {
    name: 'Autres',
    description: 'Other receivables from the State',
  },
  274: {
    name: 'TITRES IMMOBILISÉS',
    description: 'Long-term investment securities (non-controlling)',
  },
  2741: {
    name: "Titres immobilisés de l'activité de portefeuille (T.I.A.P.)",
    description: 'Portfolio investment securities (TIAP)',
  },
  2742: {
    name: 'Titres participatifs',
    description: 'Participating securities (non-voting bonds)',
  },
  2743: {
    name: "Certificats d'investissement",
    description: 'Investment certificates',
  },
  2744: {
    name: 'Parts de fonds commun de placement (F.C.P.)',
    description: 'Mutual fund units (FCP)',
  },
  2748: {
    name: 'Autres titres immobilisés',
    description: 'Other long-term investment securities',
  },
  275: {
    name: 'DÉPÔTS ET CAUTIONNEMENTS VERSÉS',
    description: 'Deposits and sureties paid (long-term)',
  },
  2751: {
    name: "Dépôts pour loyers d'avance",
    description: 'Rental deposits paid',
  },
  2752: {
    name: "Dépôts pour l'électricité",
    description: 'Electricity deposits paid',
  },
  2753: { name: "Dépôts pour l'eau", description: 'Water deposits paid' },
  2754: { name: 'Dépôts pour le gaz', description: 'Gas deposits paid' },
  2755: {
    name: 'Dépôts pour le téléphone, le télex, la télécopie',
    description: 'Telephone and telecoms deposits paid',
  },
  2756: {
    name: 'Cautionnements sur marchés publics',
    description: 'Public contract sureties paid',
  },
  2757: {
    name: 'Cautionnements sur autres opérations',
    description: 'Other sureties paid',
  },
  2758: {
    name: 'Autres dépôts et cautionnements',
    description: 'Other deposits and sureties paid',
  },
  276: {
    name: 'INTÉRÊTS COURUS',
    description: 'Accrued interest on long-term financial assets',
  },
  2761: {
    name: 'Prêts et créances non commerciales',
    description: 'Accrued interest on non-trade loans',
  },
  2762: {
    name: 'Prêts au personnel',
    description: 'Accrued interest on employee loans',
  },
  2763: {
    name: "Créances sur l'Etat",
    description: 'Accrued interest on State receivables',
  },
  2764: {
    name: 'Titres immobilisés',
    description: 'Accrued interest on long-term securities',
  },
  2765: {
    name: 'Dépôts et cautionnements versés',
    description: 'Accrued interest on deposits paid',
  },
  2767: {
    name: 'Créances rattachées à des participations',
    description: 'Accrued interest on participation-related receivables',
  },
  2768: {
    name: 'Immobilisations financières diverses',
    description: 'Accrued interest on other long-term financial assets',
  },
  277: {
    name: 'CRÉANCES RATTACHÉES À DES PARTICIPATIONS ET AVANCES À DES G.I.E.',
    description:
      'Receivables related to equity investments and advances to GIE',
  },
  2771: {
    name: 'Créances rattachées à des participations (groupe)',
    description: 'Intra-group participation receivables',
  },
  2772: {
    name: 'Créances rattachées à des participations (hors groupe)',
    description: 'Non-group participation receivables',
  },
  2773: {
    name: 'Créances rattachées à des sociétés en participation',
    description: 'Receivables from joint venture entities',
  },
  2774: {
    name: "Avances à des Groupements d'intérêt économique (G.I.E.)",
    description: 'Advances to Economic Interest Groups',
  },
  278: {
    name: 'IMMOBILISATIONS FINANCIÈRES DIVERSES',
    description: 'Miscellaneous long-term financial assets',
  },
  2781: {
    name: 'Créances diverses groupe',
    description: 'Miscellaneous intra-group receivables',
  },
  2782: {
    name: 'Créances divers hors groupe',
    description: 'Miscellaneous non-group receivables',
  },
  2785: {
    name: 'Or et métaux précieux',
    description: 'Gold and precious metals held as financial assets',
  },

  // ────────── 28 AMORTISSEMENTS ──────────
  28: {
    name: 'AMORTISSEMENTS',
    description:
      'Accumulated depreciation on fixed assets (contra account)',
  },
  281: {
    name: 'AMORTISSEMENTS DES IMMOBILISATIONS INCORPORELLES',
    description: 'Accumulated depreciation — intangible assets',
  },
  2811: {
    name: 'Amortissements des frais de recherche et de développement',
    description: 'Depreciation — R&D costs',
  },
  2812: {
    name: 'Amortissements des brevets, licences, concessions et droits similaires',
    description: 'Depreciation — patents, licences and similar rights',
  },
  2813: {
    name: 'Amortissements des logiciels',
    description: 'Depreciation — software',
  },
  2814: {
    name: 'Amortissements des marques',
    description: 'Depreciation — trademarks',
  },
  2815: {
    name: 'Amortissements du fonds commercial',
    description: 'Amortisation — goodwill',
  },
  2816: {
    name: 'Amortissements du droit au bail',
    description: 'Amortisation — leasehold rights',
  },
  2817: {
    name: 'Amortissements des investissements de création',
    description: 'Depreciation — creative investments',
  },
  2818: {
    name: 'Amortissements des autres droits et valeurs incorporels',
    description: 'Depreciation — other intangibles',
  },
  282: {
    name: 'AMORTISSEMENTS DES TERRAINS',
    description:
      'Accumulated depreciation — land (extractive/development sites)',
  },
  2821: {
    name: 'Amortissements des terrains agricoles et forestiers',
    description: 'Depreciation — agricultural/forestry land',
  },
  2824: {
    name: 'Amortissements des travaux de mise en valeur des terrains',
    description: 'Depreciation — land development works',
  },
  2825: {
    name: 'Amortissements des terrains de gisement',
    description: 'Depreciation — mineral/quarry land',
  },
  283: {
    name: 'AMORTISSEMENTS DES BÂTIMENTS, INSTALLATIONS TECHNIQUES ET AGENCEMENTS',
    description:
      'Accumulated depreciation — buildings, installations and fittings',
  },
  2831: {
    name: 'Amortissements des bâtiments industriels, agricoles, administratifs et commerciaux sur sol propre',
    description: 'Depreciation — buildings on own land',
  },
  2832: {
    name: "Amortissements des bâtiments industriels, agricoles, administratifs et commerciaux sur sol d'autrui",
    description: 'Depreciation — buildings on third-party land',
  },
  2833: {
    name: "Amortissements des ouvrages d'infrastructure",
    description: 'Depreciation — infrastructure works',
  },
  2834: {
    name: 'Amortissements des installations techniques',
    description: 'Depreciation — technical installations',
  },
  2835: {
    name: 'Amortissements des aménagements de bureaux',
    description: 'Depreciation — office fittings',
  },
  2837: {
    name: 'Amortissements des bâtiments industriels, agricoles et commerciaux mis en concession',
    description: 'Depreciation — concession buildings',
  },
  2838: {
    name: 'Amortissements des autres installations et agencements',
    description: 'Depreciation — other installations and fittings',
  },
  284: {
    name: 'AMORTISSEMENTS DU MATÉRIEL',
    description: 'Accumulated depreciation — equipment',
  },
  2841: {
    name: 'Amortissements du matériel et outillage industriel et commercial',
    description: 'Depreciation — industrial and commercial equipment',
  },
  2842: {
    name: 'Amortissements du matériel et outillage agricole',
    description: 'Depreciation — agricultural equipment',
  },
  2843: {
    name: "Amortissements du matériel d'emballage récupérable et identifiable",
    description: 'Depreciation — returnable packaging',
  },
  2844: {
    name: 'Amortissements du matériel et mobilier',
    description: 'Depreciation — office equipment and furniture',
  },
  2845: {
    name: 'Amortissements du matériel de transport',
    description: 'Depreciation — vehicles and transport equipment',
  },
  2846: {
    name: 'Amortissements des immobilisations animales et agricoles',
    description: 'Depreciation — biological assets',
  },
  2847: {
    name: 'Amortissements des agencements et aménagements du matériel',
    description: 'Depreciation — equipment fittings',
  },
  2848: {
    name: 'Amortissements des autres matériels',
    description: 'Depreciation — other equipment',
  },

  // ────────── 29 PROVISIONS POUR DÉPRÉCIATION ──────────
  29: {
    name: 'PROVISIONS POUR DÉPRÉCIATION',
    description: 'Impairment provisions on fixed assets (contra account)',
  },
  291: {
    name: 'PROVISIONS POUR DÉPRÉCIATION DES IMMOBILISATIONS INCORPORELLES',
    description: 'Impairment provisions — intangible assets',
  },
  2912: {
    name: 'Provisions pour dépréciation des brevets, licences, concessions et droits similaires',
    description: 'Impairment — patents and licences',
  },
  2913: {
    name: 'Provisions pour dépréciation des logiciels',
    description: 'Impairment — software',
  },
  2914: {
    name: 'Provisions pour dépréciation des marques',
    description: 'Impairment — trademarks',
  },
  2915: {
    name: 'Provisions pour dépréciation du fonds commercial',
    description: 'Impairment — goodwill',
  },
  2916: {
    name: 'Provisions pour dépréciation du droit au bail',
    description: 'Impairment — leasehold rights',
  },
  2917: {
    name: 'Provisions pour dépréciation des investissements de création',
    description: 'Impairment — creative investments',
  },
  2918: {
    name: 'Provisions pour dépréciation des autres droits et valeurs incorporels',
    description: 'Impairment — other intangibles',
  },
  2919: {
    name: 'Provisions pour dépréciation des immobilisations incorporelles en cours',
    description: 'Impairment — intangibles under development',
  },
  292: {
    name: 'PROVISIONS POUR DÉPRÉCIATION DES TERRAINS',
    description: 'Impairment provisions — land',
  },
  2921: {
    name: 'Provisions pour dépréciation des terrains agricoles et forestiers',
    description: 'Impairment — agricultural/forestry land',
  },
  2922: {
    name: 'Provisions pour dépréciation des terrains nus',
    description: 'Impairment — undeveloped land',
  },
  2923: {
    name: 'Provisions pour dépréciation des terrains bâtis',
    description: 'Impairment — land with buildings',
  },
  2924: {
    name: 'Provisions pour dépréciation des travaux de mise en valeur des terrains',
    description: 'Impairment — land development works',
  },
  2925: {
    name: 'Provisions pour dépréciation des terrains de gisement',
    description: 'Impairment — mineral/quarry land',
  },
  2926: {
    name: 'Provisions pour dépréciation des terrains aménagés',
    description: 'Impairment — improved land',
  },
  2927: {
    name: 'Provisions pour dépréciation des terrains mis en concession',
    description: 'Impairment — concession land',
  },
  2928: {
    name: 'Provisions pour dépréciation des autres terrains',
    description: 'Impairment — other land',
  },
  2929: {
    name: 'Provisions pour dépréciation des aménagements de terrains en cours',
    description: 'Impairment — land improvements in progress',
  },
  293: {
    name: 'PROVISIONS POUR DÉPRÉCIATION DES BÂTIMENTS, INSTALLATIONS TECHNIQUES ET AGENCEMENTS',
    description: 'Impairment provisions — buildings and installations',
  },
  2931: {
    name: 'Provisions pour dépréciation des bâtiments industriels, agricoles, administratifs et commerciaux sur sol propre',
    description: 'Impairment — buildings on own land',
  },
  2932: {
    name: "Provisions pour dépréciation des bâtiments industriels, agricoles, administratifs et commerciaux sur sol d'autrui",
    description: 'Impairment — buildings on third-party land',
  },
  2933: {
    name: "Provisions pour dépréciation des ouvrages d'infrastructures",
    description: 'Impairment — infrastructure works',
  },
  2934: {
    name: 'Provisions pour dépréciation des installations techniques',
    description: 'Impairment — technical installations',
  },
  2935: {
    name: 'Provisions pour dépréciation des aménagements de bureaux',
    description: 'Impairment — office fittings',
  },
  2937: {
    name: 'Provisions pour dépréciation des bâtiments industriels, agricoles et commerciaux mis en concession',
    description: 'Impairment — concession buildings',
  },
  2938: {
    name: 'Provisions pour dépréciation des autres installations et agencements',
    description: 'Impairment — other installations',
  },
  2939: {
    name: 'Provisions pour dépréciation des bâtiments et installations en cours',
    description: 'Impairment — buildings under construction',
  },
  294: {
    name: 'PROVISIONS POUR DÉPRÉCIATION DE MATÉRIEL',
    description: 'Impairment provisions — equipment',
  },
  2941: {
    name: 'Provisions pour dépréciation du matériel et outillage industriel et commercial',
    description: 'Impairment — industrial equipment',
  },
  2942: {
    name: 'Provisions pour dépréciation du matériel et outillage agricole',
    description: 'Impairment — agricultural equipment',
  },
  2943: {
    name: "Provisions pour dépréciation du matériel d'emballage récupérable et identifiable",
    description: 'Impairment — returnable packaging',
  },
  2944: {
    name: 'Provisions pour dépréciation du matériel et mobilier',
    description: 'Impairment — office equipment and furniture',
  },
  2945: {
    name: 'Provisions pour dépréciation du matériel de transport',
    description: 'Impairment — transport equipment',
  },
  2946: {
    name: 'Provisions pour dépréciation des immobilisations animales et agricoles',
    description: 'Impairment — biological assets',
  },
  2947: {
    name: 'Provisions pour dépréciation des agencements et aménagements du matériel',
    description: 'Impairment — equipment fittings',
  },
  2948: {
    name: 'Provisions pour dépréciation des autres matériels',
    description: 'Impairment — other equipment',
  },
  2949: {
    name: 'Provisions pour dépréciation de matériel en cours',
    description: 'Impairment — equipment under acquisition',
  },
  295: {
    name: 'PROVISIONS POUR DÉPRÉCIATION DES AVANCES ET ACOMPTES VERSÉS SUR IMMOBILISATIONS',
    description: 'Impairment provisions — advances on fixed assets',
  },
  2951: {
    name: 'Provisions pour dépréciation des avances et acomptes versés sur immobilisations incorporelles',
    description: 'Impairment — advances on intangibles',
  },
  2952: {
    name: 'Provisions pour dépréciation des avances et acomptes versés sur immobilisations corporelles',
    description: 'Impairment — advances on tangibles',
  },
  296: {
    name: 'PROVISIONS POUR DÉPRÉCIATION DES TITRES DE PARTICIPATION',
    description: 'Impairment provisions — equity investments',
  },
  2961: {
    name: 'Provisions pour dépréciation des titres de participation dans des sociétés sous contrôle exclusif',
    description: 'Impairment — subsidiary investments',
  },
  2962: {
    name: 'Provisions pour dépréciation des titres de participation dans les sociétés sous contrôle conjoint',
    description: 'Impairment — joint venture investments',
  },
  2963: {
    name: 'Provisions pour dépréciation des titres de participation dans les sociétés conférant une influence notable',
    description: 'Impairment — associate investments',
  },
  2965: {
    name: 'Provisions pour dépréciation des participations dans des organismes professionnels',
    description: 'Impairment — professional organisation interests',
  },
  2966: {
    name: 'Provisions pour dépréciation des parts dans des GIE',
    description: 'Impairment — GIE interests',
  },
  2968: {
    name: 'Provisions pour dépréciation des autres titres de participation',
    description: 'Impairment — other equity investments',
  },
  297: {
    name: 'PROVISIONS POUR DÉPRÉCIATION DES AUTRES IMMOBILISATIONS FINANCIÈRES',
    description:
      'Impairment provisions — other long-term financial assets',
  },
  2971: {
    name: 'Provisions pour dépréciation des prêts et créances non commerciales',
    description: 'Impairment — non-trade loans',
  },
  2972: {
    name: 'Provisions pour dépréciation des prêts au personnel',
    description: 'Impairment — employee loans',
  },
  2973: {
    name: "Provisions pour dépréciation des créances sur l'Etat",
    description: 'Impairment — State receivables',
  },
  2974: {
    name: 'Provisions pour dépréciation des titres immobilisés',
    description: 'Impairment — long-term securities',
  },
  2975: {
    name: 'Provisions pour dépréciation des dépôts et cautionnements versés',
    description: 'Impairment — deposits paid',
  },
  2977: {
    name: 'Provisions pour dépréciation des créances rattachées à des participations et avances à des GIE',
    description: 'Impairment — participation receivables',
  },
  2978: {
    name: 'Provisions pour dépréciation des créances financières diverses',
    description: 'Impairment — miscellaneous financial receivables',
  },
} as const satisfies Plan;

export type Class2AccountCode = keyof typeof class2Accounts;
