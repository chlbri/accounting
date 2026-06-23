import type { Plan } from './types';

/**
 * SYSCOHADA — CLASS 1: Durable Funding Resources
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
    name: 'SHARE CAPITAL',
    description:
      'Share capital — value of contributions made by shareholders',
  },
  1011: {
    name: 'Subscribed capital, not yet called up',
    description: 'Subscribed capital, not yet called up',
  },
  1012: {
    name: 'Subscribed capital, called up but not yet paid in',
    description: 'Subscribed capital, called up but not yet paid in',
  },
  1013: {
    name: 'Subscribed capital, called up, paid in, not yet redeemed',
    description:
      'Subscribed capital, called up, paid in, not yet redeemed',
  },
  1014: {
    name: 'Subscribed capital, called up, paid in and redeemed',
    description: 'Subscribed capital, called up, paid in and redeemed',
  },
  1018: {
    name: 'Subscribed capital subject to special conditions',
    description: 'Subscribed capital subject to special conditions',
  },
  102: {
    name: 'ENDOWMENT CAPITAL',
    description:
      'Endowment capital — funds allocated by a public authority to a public entity',
  },
  1021: { name: 'Initial endowment', description: 'Initial endowment' },
  1022: {
    name: 'Supplementary endowments',
    description: 'Supplementary endowments',
  },
  1028: { name: 'Other endowments', description: 'Other endowments' },
  103: {
    name: 'SOLE-TRADER PERSONAL CAPITAL',
    description:
      'Sole-trader personal capital — owner equity in an individual enterprise',
  },
  104: {
    name: "OWNER L'EXPLOITANT",
    description:
      "Owner's current account — tracks the sole trader's personal drawings and contributions during the year",
  },
  1041: {
    name: 'Temporary contributions by the owner',
    description: 'Temporary contributions by the owner',
  },
  1042: {
    name: 'Current operating transactions with the owner',
    description: 'Current operating transactions with the owner',
  },
  1043: {
    name: 'Owner',
    description:
      "Owner's personal remuneration, taxes and other personal expenses",
  },
  1047: {
    name: "Owner withdrawals of goods for personal consumption'autoconsommation",
    description: 'Owner withdrawals of goods for personal consumption',
  },
  1048: {
    name: 'Other owner withdrawals',
    description: 'Other owner withdrawals',
  },
  105: {
    name: 'SHARE PREMIUMS',
    description:
      'Share premiums — excess of issue/merger/contribution price over nominal value',
  },
  1051: {
    name: "Share issue premium'émission",
    description: 'Share issue premium',
  },
  1052: {
    name: "Contribution premium'apport",
    description: 'Contribution premium',
  },
  1053: { name: 'Merger premium', description: 'Merger premium' },
  1054: {
    name: 'Conversion premium',
    description: 'Conversion premium',
  },
  1058: {
    name: 'Other equity-related premiums',
    description: 'Other equity-related premiums',
  },
  106: {
    name: 'REVALUATION SURPLUS',
    description:
      'Revaluation surplus — increase in asset values recognised via revaluation',
  },
  1061: {
    name: 'Legal revaluation surplus (mandatory revaluation)',
    description: 'Legal revaluation surplus (mandatory revaluation)',
  },
  1062: {
    name: 'Free revaluation surplus (voluntary revaluation)',
    description: 'Free revaluation surplus (voluntary revaluation)',
  },
  109: {
    name: 'SHAREHOLDERS',
    description:
      'Shareholders — subscribed capital not yet called (contra to 1011); shown as a deduction from equity',
  },

  // ────────── 11 RESERVES ──────────
  11: {
    name: 'RESERVES',
    description:
      'Reserves — retained profits left at the disposal of the entity',
  },
  111: {
    name: 'LEGAL RESERVE',
    description:
      'Legal reserve — mandatory appropriation of at least 10% of annual profit',
  },
  112: {
    name: 'STATUTORY OR CONTRACTUAL RESERVES',
    description:
      'Statutory or contractual reserves — required by the articles of association',
  },
  113: {
    name: 'REGULATED RESERVES',
    description:
      'Regulated reserves — created under specific legal or tax provisions',
  },
  1131: {
    name: 'Reserve for net long-term capital gains',
    description: 'Reserve for net long-term capital gains',
  },
  1133: {
    name: "Reserve arising from investment grants received'octroi de subventions d'investissement",
    description: 'Reserve arising from investment grants received',
  },
  1138: {
    name: 'Other regulated reserves',
    description: 'Other regulated reserves',
  },
  118: {
    name: 'OTHER RESERVES',
    description: 'Other reserves — freely distributable reserves',
  },
  1181: {
    name: 'Optional (discretionary) reserves',
    description: 'Optional (discretionary) reserves',
  },
  1188: {
    name: 'Miscellaneous reserves',
    description: 'Miscellaneous reserves',
  },

  // ────────── 12 RETAINED EARNINGS ──────────
  12: {
    name: 'RETAINED EARNINGS',
    description:
      'Retained earnings / accumulated losses — profit or loss carried forward from prior periods',
  },
  121: {
    name: 'RETAINED EARNINGS (CREDIT BALANCE)',
    description:
      'Retained earnings (credit balance — accumulated profits)',
  },
  129: {
    name: 'ACCUMULATED LOSSES (DEBIT BALANCE)',
    description: 'Accumulated losses (debit balance — unabsorbed losses)',
  },
  1291: {
    name: 'Net loss carried forward',
    description: 'Net loss carried forward',
  },
  1292: {
    name: 'Loss',
    description: 'Loss — depreciation deemed deferred (tax treatment)',
  },

  // ────────── 13 NET INCOME / LOSS ──────────
  13: {
    name: "NET INCOME/LOSS FOR THE PERIOD L'EXERCICE",
    description: 'Net income/loss for the period — the bottom-line result',
  },
  130: {
    name: "PROFIT/LOSS PENDING APPROPRIATION D'AFFECTATION",
    description:
      'Profit/loss pending appropriation — result awaiting the general assembly decision',
  },
  1301: {
    name: "Profit pending appropriation'affectation : Bénéfice",
    description: 'Profit pending appropriation',
  },
  1309: {
    name: "Loss pending appropriation'affectation : Perte",
    description: 'Loss pending appropriation',
  },
  131: {
    name: 'NET PROFIT FOR THE PERIOD',
    description: 'Net profit for the period',
  },
  132: {
    name: 'GROSS MARGIN',
    description:
      'Gross margin — difference between net sales and cost of goods sold',
  },
  1321: {
    name: 'Gross margin on merchandise',
    description: 'Gross margin on merchandise',
  },
  1322: {
    name: 'Gross margin on raw materials',
    description: 'Gross margin on raw materials',
  },
  133: {
    name: 'VALUE ADDED',
    description: 'Value added — gross margin less other external charges',
  },
  134: {
    name: "GROSS OPERATING SURPLUS (EBITDA EQUIVALENT) D'EXPLOITATION (E.B.E.)",
    description: 'Gross operating surplus (EBITDA equivalent)',
  },
  135: {
    name: "OPERATING RESULT D'EXPLOITATION (R.E.)",
    description:
      'Operating result — profit or loss from ordinary operating activities',
  },
  136: {
    name: 'FINANCIAL RESULT',
    description: 'Financial result — net income from financial activities',
  },
  137: {
    name: 'RESULT FROM ORDINARY ACTIVITIES (OPERATING + FINANCIAL)',
    description: 'Result from ordinary activities (operating + financial)',
  },
  138: {
    name: 'RESULT FROM EXTRAORDINARY/NON-ORDINARY ACTIVITIES (HAO)',
    description: 'Result from extraordinary/non-ordinary activities (HAO)',
  },
  139: {
    name: 'NET LOSS FOR THE PERIOD',
    description: 'Net loss for the period',
  },

  // ────────── 14 INVESTMENT GRANTS ──────────
  14: {
    name: "EQUIPMENT GRANTS'INVESTISSEMENT",
    description:
      'Investment grants — non-repayable funds received to finance fixed assets or long-term activities',
  },
  141: {
    name: "EQUIPMENT GRANTS'ÉQUIPEMENT A",
    description:
      'Equipment grants — category A (State and local authorities)',
  },
  1411: { name: 'State', description: 'Investment grant from the State' },
  1412: {
    name: 'Regions',
    description: 'Investment grant from regional authorities',
  },
  1413: {
    name: 'Departments',
    description: 'Investment grant from departmental authorities',
  },
  1414: {
    name: 'Investment grant from municipalities and decentralised public bodies',
    description:
      'Investment grant from municipalities and decentralised public bodies',
  },
  1415: {
    name: 'Investment grant from state-owned or mixed enterprises',
    description: 'Investment grant from state-owned or mixed enterprises',
  },
  1416: {
    name: 'Investment grant from private companies and organisations',
    description:
      'Investment grant from private companies and organisations',
  },
  1417: {
    name: 'Investment grant from international organisations',
    description: 'Investment grant from international organisations',
  },
  1418: { name: 'Other', description: 'Other investment grants' },
  142: {
    name: "EQUIPMENT GRANTS'ÉQUIPEMENT B",
    description: 'Equipment grants — category B',
  },
  148: {
    name: "OTHER INVESTMENT GRANTS'INVESTISSEMENT",
    description: 'Other investment grants',
  },

  // ────────── 15 REGULATED PROVISIONS AND EQUIVALENT FUNDS ──────────
  15: {
    name: 'REGULATED PROVISIONS AND EQUIVALENT FUNDS',
    description:
      'Regulated provisions and equivalent funds — fiscal/regulatory appropriations (e.g. accelerated depreciation, reinvestment reserves)',
  },
  151: {
    name: 'ACCELERATED (TAX-DRIVEN) DEPRECIATION PROVISIONS',
    description: 'Accelerated (tax-driven) depreciation provisions',
  },
  152: {
    name: 'CAPITAL GAINS TO BE REINVESTED',
    description: 'Capital gains to be reinvested — tax deferral provision',
  },
  153: {
    name: 'REGULATED FUNDS',
    description: 'Regulated funds',
  },
  1531: {
    name: 'National regulated fund',
    description: 'National regulated fund',
  },
  1532: {
    name: 'Budget levy provision',
    description: 'Budget levy provision',
  },
  154: {
    name: 'SPECIAL REVALUATION PROVISION (FISCAL NEUTRALITY PROVISION)',
    description:
      'Special revaluation provision (fiscal neutrality provision)',
  },
  155: {
    name: 'REGULATED PROVISIONS RELATING TO FIXED ASSETS (E.G. MINING/OIL FIELD RECONSTITUTION)',
    description:
      'Regulated provisions relating to fixed assets (e.g. mining/oil field reconstitution)',
  },
  1551: {
    name: 'Provision for reconstitution of mining and oil fields',
    description: 'Provision for reconstitution of mining and oil fields',
  },
  156: {
    name: 'REGULATED PROVISIONS RELATING TO INVENTORIES',
    description: 'Regulated provisions relating to inventories',
  },
  1561: {
    name: 'Price increase provision (stock)',
    description: 'Price increase provision (stock)',
  },
  1562: {
    name: 'Market price fluctuation provision (stock)',
    description: 'Market price fluctuation provision (stock)',
  },
  157: {
    name: 'INVESTMENT PROVISIONS',
    description: 'Investment provisions',
  },
  158: {
    name: 'OTHER REGULATED PROVISIONS AND FUNDS',
    description: 'Other regulated provisions and funds',
  },

  // ────────── 16 BORROWINGS AND SIMILAR LIABILITIES ──────────
  16: {
    name: 'BORROWINGS AND SIMILAR LIABILITIES',
    description:
      'Borrowings and similar liabilities — long-term financial debt (bonds, bank loans, State advances, deposits, etc.)',
  },
  161: { name: 'BOND LOANS', description: 'Bond loans' },
  1611: {
    name: 'Ordinary bond loans',
    description: 'Ordinary bond loans',
  },
  1612: {
    name: 'Convertible bond loans',
    description: 'Convertible bond loans',
  },
  1618: {
    name: 'Other bond loans',
    description: 'Other bond loans',
  },
  162: {
    name: 'LOANS AND DEBTS FROM CREDIT INSTITUTIONS (BANKS)',
    description: 'Loans and debts from credit institutions (banks)',
  },
  163: {
    name: "ADVANCES RECEIVED FROM THE STATE L'ÉTAT",
    description: 'Advances received from the State',
  },
  164: {
    name: 'ADVANCES RECEIVED AND BLOCKED CURRENT ACCOUNTS',
    description: 'Advances received and blocked current accounts',
  },
  165: {
    name: 'DEPOSITS AND SURETIES RECEIVED',
    description: 'Deposits and sureties received',
  },
  1651: { name: 'Deposits', description: 'Deposits received' },
  1652: {
    name: 'Sureties (bonds) received',
    description: 'Sureties (bonds) received',
  },
  166: {
    name: 'ACCRUED INTEREST',
    description: 'Accrued interest on long-term borrowings',
  },
  1661: {
    name: 'on bond loans',
    description: 'Accrued interest on bond loans',
  },
  1662: {
    name: 'on bank loans',
    description: 'Accrued interest on bank loans',
  },
  1663: {
    name: "on State advances'État",
    description: 'Accrued interest on State advances',
  },
  1664: {
    name: 'on blocked advances and current accounts',
    description:
      'Accrued interest on blocked advances and current accounts',
  },
  1665: {
    name: 'on deposits and sureties received',
    description: 'Accrued interest on deposits and sureties received',
  },
  1667: {
    name: 'on advances with special conditions',
    description: 'Accrued interest on advances with special conditions',
  },
  1668: {
    name: 'on other borrowings and debts',
    description: 'Accrued interest on other borrowings and debts',
  },
  167: {
    name: 'ADVANCES SUBJECT TO SPECIAL CONDITIONS (CONDITIONAL GRANTS)',
    description:
      'Advances subject to special conditions (conditional grants)',
  },
  1671: {
    name: 'Advances blocked pending capital increase',
    description: 'Advances blocked pending capital increase',
  },
  1672: {
    name: "Conditional advances from the State'État",
    description: 'Conditional advances from the State',
  },
  1673: {
    name: 'Conditional advances from other African organisations',
    description: 'Conditional advances from other African organisations',
  },
  1674: {
    name: 'Conditional advances from international organisations',
    description: 'Conditional advances from international organisations',
  },
  1676: {
    name: 'Concession rights payable in kind',
    description: 'Concession rights payable in kind',
  },
  168: {
    name: 'OTHER BORROWINGS AND DEBTS',
    description: 'Other borrowings and debts',
  },
  1681: {
    name: 'Capitalised life annuities',
    description: 'Capitalised life annuities',
  },
  1682: {
    name: 'Business purchase notes payable',
    description: 'Business purchase notes payable',
  },
  1683: {
    name: 'Debts arising from borrowed securities',
    description: 'Debts arising from borrowed securities',
  },
  1684: {
    name: 'Concessionaire',
    description: "Concessionaire's debts payable in kind",
  },
  1685: {
    name: 'Participating loans',
    description: 'Participating loans',
  },
  1686: {
    name: 'Employee profit-sharing liability',
    description: 'Employee profit-sharing liability',
  },

  // ────────── 17 LEASE LIABILITIES AND SIMILAR CONTRACTS ──────────
  17: {
    name: 'FINANCE LEASE LIABILITIES AND SIMILAR CONTRACTS',
    description:
      'Finance lease liabilities and similar contracts — long-term lease obligations',
  },
  172: {
    name: 'FINANCE LEASE LIABILITIES',
    description: 'Finance lease liabilities — real estate (property)',
  },
  173: {
    name: 'FINANCE LEASE LIABILITIES',
    description: 'Finance lease liabilities — movable assets (equipment)',
  },
  176: {
    name: 'ACCRUED INTEREST',
    description: 'Accrued interest on finance lease liabilities',
  },
  1762: {
    name: 'on real estate finance leases',
    description: 'Accrued interest on real estate finance leases',
  },
  1763: {
    name: 'on movable asset finance leases',
    description: 'Accrued interest on movable asset finance leases',
  },
  1768: {
    name: "on other lease contracts'autres contrats",
    description: 'Accrued interest on other lease contracts',
  },
  178: {
    name: "FINANCE LEASE LIABILITIES D'AUTRES CONTRATS",
    description: 'Finance lease liabilities — other contract types',
  },

  // ────────── 18 DEBTS RELATED TO EQUITY PARTICIPATIONS ──────────
  18: {
    name: 'DEBTS RELATED TO EQUITY INVESTMENTS AND INTER-BRANCH LIAISON ACCOUNTS',
    description:
      'Debts related to equity investments and inter-branch liaison accounts',
  },
  181: {
    name: 'DEBTS RELATED TO EQUITY PARTICIPATIONS',
    description: 'Debts related to equity participations',
  },
  1811: {
    name: 'Intra-group participation debts',
    description: 'Intra-group participation debts',
  },
  1812: {
    name: 'Non-group participation debts',
    description: 'Non-group participation debts',
  },
  182: {
    name: 'DEBTS RELATED TO JOINT VENTURES (SOCIÉTÉS EN PARTICIPATION)',
    description:
      'Debts related to joint ventures (sociétés en participation)',
  },
  183: {
    name: 'ACCRUED INTEREST ON PARTICIPATION-RELATED DEBTS',
    description: 'Accrued interest on participation-related debts',
  },
  184: {
    name: 'BLOCKED PERMANENT ACCOUNTS OF BRANCHES AND SUBSIDIARIES',
    description: 'Blocked permanent accounts of branches and subsidiaries',
  },
  185: {
    name: 'NON-BLOCKED PERMANENT ACCOUNTS OF BRANCHES AND SUBSIDIARIES',
    description:
      'Non-blocked permanent accounts of branches and subsidiaries',
  },
  186: {
    name: 'INTER-BRANCH LIAISON ACCOUNTS',
    description: 'Inter-branch liaison accounts — expense transfers',
  },
  187: {
    name: 'INTER-BRANCH LIAISON ACCOUNTS',
    description: 'Inter-branch liaison accounts — revenue transfers',
  },
  188: {
    name: 'LIAISON ACCOUNTS FOR JOINT VENTURE ENTITIES',
    description: 'Liaison accounts for joint venture entities',
  },

  // ────────── 19 FINANCIAL PROVISIONS FOR RISKS AND CHARGES ──────────
  19: {
    name: 'FINANCIAL PROVISIONS FOR RISKS AND CHARGES',
    description:
      'Financial provisions for risks and charges — long-term contingency provisions (>1 year)',
  },
  191: {
    name: 'PROVISIONS FOR LITIGATION AND LEGAL DISPUTES',
    description: 'Provisions for litigation and legal disputes',
  },
  192: {
    name: 'PROVISIONS FOR WARRANTIES GIVEN TO CUSTOMERS',
    description: 'Provisions for warranties given to customers',
  },
  193: {
    name: 'PROVISIONS FOR LOSSES ON LONG-TERM CONTRACTS',
    description: 'Provisions for losses on long-term contracts',
  },
  194: {
    name: 'PROVISIONS FOR FOREIGN EXCHANGE LOSSES',
    description: 'Provisions for foreign exchange losses',
  },
  195: {
    name: 'PROVISIONS FOR TAXES',
    description: 'Provisions for taxes',
  },
  196: {
    name: 'PROVISIONS FOR PENSIONS AND SIMILAR POST-EMPLOYMENT OBLIGATIONS',
    description:
      'Provisions for pensions and similar post-employment obligations',
  },
  197: {
    name: 'PROVISIONS FOR CHARGES TO BE SPREAD OVER SEVERAL ACCOUNTING PERIODS',
    description:
      'Provisions for charges to be spread over several accounting periods',
  },
  1971: {
    name: 'Provisions for major repairs and overhauls',
    description: 'Provisions for major repairs and overhauls',
  },
  198: {
    name: 'OTHER FINANCIAL PROVISIONS FOR RISKS AND CHARGES',
    description: 'Other financial provisions for risks and charges',
  },
  1981: {
    name: 'Provisions for fines and penalties',
    description: 'Provisions for fines and penalties',
  },
  1982: {
    name: 'Provisions for asset renewal (concession companies)',
    description: 'Provisions for asset renewal (concession companies)',
  },
  1983: {
    name: 'Self-insurance provisions',
    description: 'Self-insurance provisions',
  },
  1988: {
    name: 'Other miscellaneous financial provisions for risks and charges',
    description:
      'Other miscellaneous financial provisions for risks and charges',
  },
} as const satisfies Plan;

export type Class1AccountCode = keyof typeof class1Accounts;
