import type { Plan } from './types';

/**
 * SYSCOHADA — CLASSE 1 : Comptes de ressources durables
 * (Class 1: Durable Funding Resources)
 *
 * Covers: equity (capital, reserves, retained earnings), investment grants,
 * regulated provisions, borrowings, lease liabilities, participation debts,
 * and financial provisions for risks and charges.
 *
 * Source: Official SYSCOHADA Chart of Accounts PDF, pages 7–11.
 */
export const class1Accounts = {
  // ────────── 10 CAPITAL ──────────
  10: {
    name: 'CAPITAL',
    description: 'Capital — overall grouping of all capital accounts',
  },
  101: {
    name: 'CAPITAL SOCIAL',
    description:
      'Share capital — value of contributions made by shareholders',
  },
  1011: {
    name: 'Capital souscrit, non appelé',
    description: 'Subscribed capital, not yet called up',
  },
  1012: {
    name: 'Capital souscrit, appelé, non versé',
    description: 'Subscribed capital, called up but not yet paid in',
  },
  1013: {
    name: 'Capital souscrit, appelé, versé, non amorti',
    description:
      'Subscribed capital, called up, paid in, not yet redeemed',
  },
  1014: {
    name: 'Capital souscrit, appelé, versé, amorti',
    description: 'Subscribed capital, called up, paid in and redeemed',
  },
  1018: {
    name: 'Capital souscrit soumis à des conditions particulières',
    description: 'Subscribed capital subject to special conditions',
  },
  102: {
    name: 'CAPITAL PAR DOTATION',
    description:
      'Endowment capital — funds allocated by a public authority to a public entity',
  },
  1021: { name: 'Dotation initiale', description: 'Initial endowment' },
  1022: {
    name: 'Dotations complémentaires',
    description: 'Supplementary endowments',
  },
  1028: { name: 'Autres dotations', description: 'Other endowments' },
  103: {
    name: 'CAPITAL PERSONNEL',
    description:
      'Sole-trader personal capital — owner equity in an individual enterprise',
  },
  104: {
    name: "COMPTE DE L'EXPLOITANT",
    description:
      "Owner's current account — tracks the sole trader's personal drawings and contributions during the year",
  },
  1041: {
    name: 'Apports temporaires',
    description: 'Temporary contributions by the owner',
  },
  1042: {
    name: 'Opérations courantes',
    description: 'Current operating transactions with the owner',
  },
  1043: {
    name: 'Rémunérations, impôts et autres charges personnelles',
    description:
      "Owner's personal remuneration, taxes and other personal expenses",
  },
  1047: {
    name: "Prélèvements d'autoconsommation",
    description: 'Owner withdrawals of goods for personal consumption',
  },
  1048: {
    name: 'Autres prélèvements',
    description: 'Other owner withdrawals',
  },
  105: {
    name: 'PRIMES LIÉES AUX CAPITAUX PROPRES',
    description:
      'Share premiums — excess of issue/merger/contribution price over nominal value',
  },
  1051: { name: "Primes d'émission", description: 'Share issue premium' },
  1052: { name: "Primes d'apport", description: 'Contribution premium' },
  1053: { name: 'Primes de fusion', description: 'Merger premium' },
  1054: {
    name: 'Primes de conversion',
    description: 'Conversion premium',
  },
  1058: {
    name: 'Autres primes',
    description: 'Other equity-related premiums',
  },
  106: {
    name: 'ÉCARTS DE RÉÉVALUATION',
    description:
      'Revaluation surplus — increase in asset values recognised via revaluation',
  },
  1061: {
    name: 'Écarts de réévaluation légale',
    description: 'Legal revaluation surplus (mandatory revaluation)',
  },
  1062: {
    name: 'Écarts de réévaluation libre',
    description: 'Free revaluation surplus (voluntary revaluation)',
  },
  109: {
    name: 'ACTIONNAIRES, CAPITAL SOUSCRIT, NON APPELÉ',
    description:
      'Shareholders — subscribed capital not yet called (contra to 1011); shown as a deduction from equity',
  },

  // ────────── 11 RÉSERVES ──────────
  11: {
    name: 'RÉSERVES',
    description:
      'Reserves — retained profits left at the disposal of the entity',
  },
  111: {
    name: 'RÉSERVE LÉGALE',
    description:
      'Legal reserve — mandatory appropriation of at least 10% of annual profit',
  },
  112: {
    name: 'RÉSERVES STATUTAIRES OU CONTRACTUELLES',
    description:
      'Statutory or contractual reserves — required by the articles of association',
  },
  113: {
    name: 'RÉSERVES RÉGLEMENTÉES',
    description:
      'Regulated reserves — created under specific legal or tax provisions',
  },
  1131: {
    name: 'Réserves de plus-values nettes à long terme',
    description: 'Reserve for net long-term capital gains',
  },
  1133: {
    name: "Réserves consécutives à l'octroi de subventions d'investissement",
    description: 'Reserve arising from investment grants received',
  },
  1138: {
    name: 'Autres réserves réglementées',
    description: 'Other regulated reserves',
  },
  118: {
    name: 'AUTRES RÉSERVES',
    description: 'Other reserves — freely distributable reserves',
  },
  1181: {
    name: 'Réserves facultatives',
    description: 'Optional (discretionary) reserves',
  },
  1188: {
    name: 'Réserves diverses',
    description: 'Miscellaneous reserves',
  },

  // ────────── 12 REPORT À NOUVEAU ──────────
  12: {
    name: 'REPORT À NOUVEAU',
    description:
      'Retained earnings / accumulated losses — profit or loss carried forward from prior periods',
  },
  121: {
    name: 'REPORT À NOUVEAU CRÉDITEUR',
    description:
      'Retained earnings (credit balance — accumulated profits)',
  },
  129: {
    name: 'REPORT À NOUVEAU DÉBITEUR',
    description: 'Accumulated losses (debit balance — unabsorbed losses)',
  },
  1291: {
    name: 'Perte nette à reporter',
    description: 'Net loss carried forward',
  },
  1292: {
    name: 'Perte - Amortissements réputés différés',
    description: 'Loss — depreciation deemed deferred (tax treatment)',
  },

  // ────────── 13 RÉSULTAT NET DE L'EXERCICE ──────────
  13: {
    name: "RÉSULTAT NET DE L'EXERCICE",
    description: 'Net income/loss for the period — the bottom-line result',
  },
  130: {
    name: "RÉSULTAT EN INSTANCE D'AFFECTATION",
    description:
      'Profit/loss pending appropriation — result awaiting the general assembly decision',
  },
  1301: {
    name: "Résultat en instance d'affectation : Bénéfice",
    description: 'Profit pending appropriation',
  },
  1309: {
    name: "Résultat en instance d'affectation : Perte",
    description: 'Loss pending appropriation',
  },
  131: {
    name: 'RÉSULTAT NET : BÉNÉFICE',
    description: 'Net profit for the period',
  },
  132: {
    name: 'MARGE BRUTE (M.B.)',
    description:
      'Gross margin — difference between net sales and cost of goods sold',
  },
  1321: {
    name: 'Marge brute sur marchandises',
    description: 'Gross margin on merchandise',
  },
  1322: {
    name: 'Marge brute sur matières',
    description: 'Gross margin on raw materials',
  },
  133: {
    name: 'VALEUR AJOUTÉE (V.A.)',
    description: 'Value added — gross margin less other external charges',
  },
  134: {
    name: "EXCÉDENT BRUT D'EXPLOITATION (E.B.E.)",
    description: 'Gross operating surplus (EBITDA equivalent)',
  },
  135: {
    name: "RÉSULTAT D'EXPLOITATION (R.E.)",
    description:
      'Operating result — profit or loss from ordinary operating activities',
  },
  136: {
    name: 'RÉSULTAT FINANCIER (R.F.)',
    description: 'Financial result — net income from financial activities',
  },
  137: {
    name: 'RÉSULTAT DES ACTIVITÉS ORDINAIRES (R.A.O.)',
    description: 'Result from ordinary activities (operating + financial)',
  },
  138: {
    name: 'RÉSULTAT HORS ACTIVITÉS ORDINAIRES (R.H.A.O.)',
    description: 'Result from extraordinary/non-ordinary activities (HAO)',
  },
  139: {
    name: 'RÉSULTAT NET : PERTE',
    description: 'Net loss for the period',
  },

  // ────────── 14 SUBVENTIONS D'INVESTISSEMENT ──────────
  14: {
    name: "SUBVENTIONS D'INVESTISSEMENT",
    description:
      'Investment grants — non-repayable funds received to finance fixed assets or long-term activities',
  },
  141: {
    name: "SUBVENTIONS D'ÉQUIPEMENT A",
    description:
      'Equipment grants — category A (State and local authorities)',
  },
  1411: { name: 'État', description: 'Investment grant from the State' },
  1412: {
    name: 'Régions',
    description: 'Investment grant from regional authorities',
  },
  1413: {
    name: 'Départements',
    description: 'Investment grant from departmental authorities',
  },
  1414: {
    name: 'Communes et collectivités publiques décentralisées',
    description:
      'Investment grant from municipalities and decentralised public bodies',
  },
  1415: {
    name: 'Entreprises publiques ou mixtes',
    description: 'Investment grant from state-owned or mixed enterprises',
  },
  1416: {
    name: 'Entreprises et organismes privés',
    description:
      'Investment grant from private companies and organisations',
  },
  1417: {
    name: 'Organismes internationaux',
    description: 'Investment grant from international organisations',
  },
  1418: { name: 'Autres', description: 'Other investment grants' },
  142: {
    name: "SUBVENTIONS D'ÉQUIPEMENT B",
    description: 'Equipment grants — category B',
  },
  148: {
    name: "AUTRES SUBVENTIONS D'INVESTISSEMENT",
    description: 'Other investment grants',
  },

  // ────────── 15 PROVISIONS RÉGLEMENTÉES ET FONDS ASSIMILÉS ──────────
  15: {
    name: 'PROVISIONS RÉGLEMENTÉES ET FONDS ASSIMILÉS',
    description:
      'Regulated provisions and equivalent funds — fiscal/regulatory appropriations (e.g. accelerated depreciation, reinvestment reserves)',
  },
  151: {
    name: 'AMORTISSEMENTS DÉROGATOIRES',
    description: 'Accelerated (tax-driven) depreciation provisions',
  },
  152: {
    name: 'PLUS-VALUES DE CESSION À RÉINVESTIR',
    description: 'Capital gains to be reinvested — tax deferral provision',
  },
  153: {
    name: 'FONDS RÉGLEMENTÉS',
    description: 'Regulated funds',
  },
  1531: { name: 'Fonds National', description: 'National regulated fund' },
  1532: {
    name: 'Prélèvement pour le Budget',
    description: 'Budget levy provision',
  },
  154: {
    name: 'PROVISION SPÉCIALE DE RÉÉVALUATION',
    description:
      'Special revaluation provision (fiscal neutrality provision)',
  },
  155: {
    name: 'PROVISIONS RÉGLEMENTÉES RELATIVES AUX IMMOBILISATIONS',
    description:
      'Regulated provisions relating to fixed assets (e.g. mining/oil field reconstitution)',
  },
  1551: {
    name: 'Reconstitution des gisements miniers et pétroliers',
    description: 'Provision for reconstitution of mining and oil fields',
  },
  156: {
    name: 'PROVISIONS RÉGLEMENTÉES RELATIVES AUX STOCKS',
    description: 'Regulated provisions relating to inventories',
  },
  1561: {
    name: 'Hausse de prix',
    description: 'Price increase provision (stock)',
  },
  1562: {
    name: 'Fluctuation des cours',
    description: 'Market price fluctuation provision (stock)',
  },
  157: {
    name: 'PROVISIONS POUR INVESTISSEMENT',
    description: 'Investment provisions',
  },
  158: {
    name: 'AUTRES PROVISIONS ET FONDS RÉGLEMENTÉS',
    description: 'Other regulated provisions and funds',
  },

  // ────────── 16 EMPRUNTS ET DETTES ASSIMILÉES ──────────
  16: {
    name: 'EMPRUNTS ET DETTES ASSIMILÉES',
    description:
      'Borrowings and similar liabilities — long-term financial debt (bonds, bank loans, State advances, deposits, etc.)',
  },
  161: { name: 'EMPRUNTS OBLIGATAIRES', description: 'Bond loans' },
  1611: {
    name: 'Emprunts obligataires ordinaires',
    description: 'Ordinary bond loans',
  },
  1612: {
    name: 'Emprunts obligataires convertibles',
    description: 'Convertible bond loans',
  },
  1618: {
    name: 'Autres emprunts obligataires',
    description: 'Other bond loans',
  },
  162: {
    name: 'EMPRUNTS ET DETTES AUPRÈS DES ÉTABLISSEMENTS DE CRÉDIT',
    description: 'Loans and debts from credit institutions (banks)',
  },
  163: {
    name: "AVANCES REÇUES DE L'ÉTAT",
    description: 'Advances received from the State',
  },
  164: {
    name: 'AVANCES REÇUES ET COMPTES COURANTS BLOQUÉS',
    description: 'Advances received and blocked current accounts',
  },
  165: {
    name: 'DÉPÔTS ET CAUTIONNEMENTS REÇUS',
    description: 'Deposits and sureties received',
  },
  1651: { name: 'Dépôts', description: 'Deposits received' },
  1652: {
    name: 'Cautionnements',
    description: 'Sureties (bonds) received',
  },
  166: {
    name: 'INTÉRÊTS COURUS',
    description: 'Accrued interest on long-term borrowings',
  },
  1661: {
    name: 'sur emprunts obligataires',
    description: 'Accrued interest on bond loans',
  },
  1662: {
    name: 'sur emprunts et dettes auprès des établissements de crédit',
    description: 'Accrued interest on bank loans',
  },
  1663: {
    name: "sur avances reçues de l'État",
    description: 'Accrued interest on State advances',
  },
  1664: {
    name: 'sur avances reçues et comptes courants bloqués',
    description:
      'Accrued interest on blocked advances and current accounts',
  },
  1665: {
    name: 'sur dépôts et cautionnements reçus',
    description: 'Accrued interest on deposits and sureties received',
  },
  1667: {
    name: 'sur avances assorties de conditions particulières',
    description: 'Accrued interest on advances with special conditions',
  },
  1668: {
    name: 'sur autres emprunts et dettes',
    description: 'Accrued interest on other borrowings and debts',
  },
  167: {
    name: 'AVANCES ASSORTIES DE CONDITIONS PARTICULIÈRES',
    description:
      'Advances subject to special conditions (conditional grants)',
  },
  1671: {
    name: 'Avances bloquées pour augmentation du capital',
    description: 'Advances blocked pending capital increase',
  },
  1672: {
    name: "Avances conditionnées par l'État",
    description: 'Conditional advances from the State',
  },
  1673: {
    name: 'Avances conditionnées par les autres organismes africains',
    description: 'Conditional advances from other African organisations',
  },
  1674: {
    name: 'Avances conditionnées par les organismes internationaux',
    description: 'Conditional advances from international organisations',
  },
  1676: {
    name: 'Droits du concédant exigibles en nature',
    description: 'Concession rights payable in kind',
  },
  168: {
    name: 'AUTRES EMPRUNTS ET DETTES',
    description: 'Other borrowings and debts',
  },
  1681: {
    name: 'Rentes viagères capitalisées',
    description: 'Capitalised life annuities',
  },
  1682: {
    name: 'Billets de fonds',
    description: 'Business purchase notes payable',
  },
  1683: {
    name: 'Dettes consécutives à des titres empruntés',
    description: 'Debts arising from borrowed securities',
  },
  1684: {
    name: 'Dettes du concédant exigibles en nature',
    description: "Concessionaire's debts payable in kind",
  },
  1685: {
    name: 'Emprunts participatifs',
    description: 'Participating loans',
  },
  1686: {
    name: 'Participation des travailleurs aux bénéfices',
    description: 'Employee profit-sharing liability',
  },

  // ────────── 17 DETTES DE CRÉDIT-BAIL ET CONTRATS ASSIMILÉS ──────────
  17: {
    name: 'DETTES DE CRÉDIT-BAIL ET CONTRATS ASSIMILÉS',
    description:
      'Finance lease liabilities and similar contracts — long-term lease obligations',
  },
  172: {
    name: 'EMPRUNTS ÉQUIVALENTS DE CRÉDIT-BAIL IMMOBILIER',
    description: 'Finance lease liabilities — real estate (property)',
  },
  173: {
    name: 'EMPRUNTS ÉQUIVALENTS DE CRÉDIT-BAIL MOBILIER',
    description: 'Finance lease liabilities — movable assets (equipment)',
  },
  176: {
    name: 'INTÉRÊTS COURUS',
    description: 'Accrued interest on finance lease liabilities',
  },
  1762: {
    name: 'sur emprunts équivalents de crédit-bail immobilier',
    description: 'Accrued interest on real estate finance leases',
  },
  1763: {
    name: 'sur emprunts équivalents de crédit-bail mobilier',
    description: 'Accrued interest on movable asset finance leases',
  },
  1768: {
    name: "sur emprunts équivalents d'autres contrats",
    description: 'Accrued interest on other lease contracts',
  },
  178: {
    name: "EMPRUNTS ÉQUIVALENTS D'AUTRES CONTRATS",
    description: 'Finance lease liabilities — other contract types',
  },

  // ────────── 18 DETTES LIÉES À DES PARTICIPATIONS ──────────
  18: {
    name: 'DETTES LIÉES À DES PARTICIPATIONS ET COMPTES DE LIAISON DES ÉTABLISSEMENTS ET SOCIÉTÉS EN PARTICIPATION',
    description:
      'Debts related to equity investments and inter-branch liaison accounts',
  },
  181: {
    name: 'DETTES LIÉES À DES PARTICIPATIONS',
    description: 'Debts related to equity participations',
  },
  1811: {
    name: 'Dettes liées à des participations (groupe)',
    description: 'Intra-group participation debts',
  },
  1812: {
    name: 'Dettes liées à des participations (hors groupe)',
    description: 'Non-group participation debts',
  },
  182: {
    name: 'DETTES LIÉES À DES SOCIÉTÉS EN PARTICIPATION',
    description:
      'Debts related to joint ventures (sociétés en participation)',
  },
  183: {
    name: 'INTÉRÊTS COURUS SUR DETTES LIÉES À DES PARTICIPATIONS',
    description: 'Accrued interest on participation-related debts',
  },
  184: {
    name: 'COMPTES PERMANENTS BLOQUÉS DES ÉTABLISSEMENTS ET SUCCURSALES',
    description: 'Blocked permanent accounts of branches and subsidiaries',
  },
  185: {
    name: 'COMPTES PERMANENTS NON BLOQUÉS DES ÉTABLISSEMENTS ET SUCCURSALES',
    description:
      'Non-blocked permanent accounts of branches and subsidiaries',
  },
  186: {
    name: 'COMPTES DE LIAISON CHARGES',
    description: 'Inter-branch liaison accounts — expense transfers',
  },
  187: {
    name: 'COMPTES DE LIAISON PRODUITS',
    description: 'Inter-branch liaison accounts — revenue transfers',
  },
  188: {
    name: 'COMPTES DE LIAISON DES SOCIÉTÉS EN PARTICIPATION',
    description: 'Liaison accounts for joint venture entities',
  },

  // ────────── 19 PROVISIONS FINANCIÈRES POUR RISQUES ET CHARGES ──────────
  19: {
    name: 'PROVISIONS FINANCIÈRES POUR RISQUES ET CHARGES',
    description:
      'Financial provisions for risks and charges — long-term contingency provisions (>1 year)',
  },
  191: {
    name: 'PROVISIONS POUR LITIGES',
    description: 'Provisions for litigation and legal disputes',
  },
  192: {
    name: 'PROVISIONS POUR GARANTIES DONNÉES AUX CLIENTS',
    description: 'Provisions for warranties given to customers',
  },
  193: {
    name: 'PROVISIONS POUR PERTES SUR MARCHÉS À ACHÈVEMENT FUTUR',
    description: 'Provisions for losses on long-term contracts',
  },
  194: {
    name: 'PROVISIONS POUR PERTES DE CHANGE',
    description: 'Provisions for foreign exchange losses',
  },
  195: {
    name: 'PROVISIONS POUR IMPÔTS',
    description: 'Provisions for taxes',
  },
  196: {
    name: 'PROVISIONS POUR PENSIONS ET OBLIGATIONS SIMILAIRES',
    description:
      'Provisions for pensions and similar post-employment obligations',
  },
  197: {
    name: 'PROVISIONS POUR CHARGES À RÉPARTIR SUR PLUSIEURS EXERCICES',
    description:
      'Provisions for charges to be spread over several accounting periods',
  },
  1971: {
    name: 'Provisions pour grosses réparations',
    description: 'Provisions for major repairs and overhauls',
  },
  198: {
    name: 'AUTRES PROVISIONS FINANCIÈRES POUR RISQUES ET CHARGES',
    description: 'Other financial provisions for risks and charges',
  },
  1981: {
    name: 'Provisions pour amendes et pénalités',
    description: 'Provisions for fines and penalties',
  },
  1982: {
    name: 'Provisions pour renouvellement des immobilisations (entreprises concessionnaires)',
    description: 'Provisions for asset renewal (concession companies)',
  },
  1983: {
    name: 'Provisions de propre assureur',
    description: 'Self-insurance provisions',
  },
  1988: {
    name: 'Autres provisions financières pour risques et charges',
    description:
      'Other miscellaneous financial provisions for risks and charges',
  },
} as const satisfies Plan;

export type Class1AccountCode = keyof typeof class1Accounts;
