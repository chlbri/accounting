/**
 * SYSCOHADA — CLASS 7: Ordinary Activity Revenue Accounts
 * (Class 7: Ordinary Activity Revenue Accounts)
 *
 * Source: Official SYSCOHADA Chart of Accounts PDF, pages 41–44.
 */
import type { Plan } from './types';

export const class7Accounts = {
  // ────────── 70 SALES ──────────
  70: 'SALES',
  701: 'SALES OF MERCHANDISE (GOODS FOR RESALE)',
  7011: 'within the Region',
  7012: 'outside the Region',
  7013: 'to group companies within the Region',
  7014: 'to group companies outside the Region',
  702: 'SALES OF FINISHED MANUFACTURED GOODS',
  7021: 'within the Region',
  7022: 'outside the Region',
  7023: 'to group companies within the Region',
  7024: 'to group companies outside the Region',
  703: 'SALES OF SEMI-FINISHED / INTERMEDIATE PRODUCTS',
  7031: 'within the Region',
  7032: 'outside the Region',
  7033: 'to group companies within the Region',
  7034: 'to group companies outside the Region',
  704: 'SALES OF BY-PRODUCTS, WASTE AND SCRAP',
  7041: 'within the Region',
  7042: 'outside the Region',
  7043: 'to group companies within the Region',
  7044: 'to group companies outside the Region',
  705: 'BILLED CONSTRUCTION AND WORKS CONTRACTS',
  7051: 'within the Region',
  7052: 'outside the Region',
  7053: 'to group companies within the Region',
  7054: 'to group companies outside the Region',
  706: 'SERVICES RENDERED AND BILLED',
  7061: 'within the Region',
  7062: 'outside the Region',
  7063: 'to group companies within the Region',
  7064: 'to group companies outside the Region',
  707: 'ANCILLARY REVENUES AND INCIDENTAL INCOME',
  7071: 'Freight and non-returnable packaging billed to customers',
  7072: 'Commissions and brokerage income',
  7073: 'Rental income',
  7074: "Surplus on return and sale of packaging'emballages",
  7075: 'Staff secondment income',
  7076: 'Royalty income from patents, software, trademarks and similar',
  7077: "Services operated for the benefit of employees (charged back)'intérêt du personnel",
  7078: 'Other ancillary income',

  // ────────── 71 OPERATING GRANTS ──────────
  71: "EQUIPMENT GRANTS'EXPLOITATION",
  711: "EXPORT PRODUCT SUBSIDIES L'EXPORTATION",
  712: "IMPORT PRODUCT SUBSIDIES L'IMPORTATION",
  713: 'PRICE EQUALISATION / STABILISATION SUBSIDIES',
  718: "OTHER INVESTMENT GRANTS'EXPLOITATION",
  7181: "Operating grants from the State and public authorities'État et les collectivités publiques",
  7182: 'Operating grants from international organisations',
  7183: 'Operating grants from other third parties',

  // ────────── 72 SELF-CONSTRUCTED ASSETS ──────────
  72: 'OWN-WORK CAPITALISED (ASSETS PRODUCED FOR OWN USE)',
  721: 'CAPITALISED INTANGIBLE ASSETS PRODUCED INTERNALLY',
  722: 'CAPITALISED TANGIBLE ASSETS PRODUCED INTERNALLY',
  726: 'CAPITALISED FINANCIAL ASSETS PRODUCED INTERNALLY',

  // ────────── 73 CHANGE IN INVENTORIES OF FINISHED & WORK-IN-PROGRESS GOODS ──────────
  73: 'CHANGE IN INVENTORIES OF PRODUCED GOODS AND SERVICES',
  734: 'CHANGE IN WORK IN PROGRESS (PRODUCTS)',
  7341: 'Change in manufactured products in progress',
  7342: 'Change in works in progress',
  735: 'CHANGE IN SERVICES IN PROGRESS',
  7351: 'Change in studies in progress',
  7352: 'Change in service contracts in progress',
  736: 'CHANGE IN FINISHED GOODS INVENTORY',
  737: 'CHANGE IN SEMI-FINISHED GOODS AND BY-PRODUCTS INVENTORY',
  7371: 'Change in intermediate products inventory',
  7372: 'Change in by-products and waste inventory',

  // ────────── 75 OTHER OPERATING REVENUES ──────────
  75: 'OTHER OPERATING INCOME',
  752: 'SHARE OF PROFIT ON JOINT VENTURE TRANSACTIONS',
  7521: 'Share of losses transferred',
  7525: 'Profits allocated by transfer',
  753: 'PORTION OF PROFIT ON PARTIAL COMPLETION OF MULTI-YEAR CONTRACTS',
  754: "PROCEEDS FROM DISPOSAL OF FIXED ASSETS IN THE ORDINARY COURSE D'IMMOBILISATIONS",
  758: 'MISCELLANEOUS OTHER INCOME',
  7581: "Directors'administrateurs",
  7582: "Insurance indemnities received'assurances reçues",
  759: "REVERSAL OF SHORT-TERM OPERATING RISK PROVISIONS D'EXPLOITATION",
  7591: 'Reversal of short-term operating risk provisions',
  7593: 'on inventory',
  7594: 'on receivables',
  7598: 'Reversal of other operating provisions',

  // ────────── 77 FINANCIAL INCOME AND EQUIVALENT ──────────
  77: 'FINANCIAL INCOME AND SIMILAR REVENUES',
  771: 'INTEREST INCOME ON LOANS GRANTED',
  772: 'DIVIDEND AND PARTICIPATION INCOME',
  773: 'SETTLEMENT DISCOUNTS RECEIVED FROM SUPPLIERS',
  774: 'INCOME FROM SHORT-TERM INVESTMENT SECURITIES',
  776: 'FOREIGN EXCHANGE GAINS',
  777: 'GAINS ON DISPOSAL OF SHORT-TERM INVESTMENT SECURITIES',
  778: 'GAINS ON FINANCIAL RISKS (DERIVATIVE SETTLEMENTS)',
  7781: 'Gains on life annuity financial risks',
  7782: 'Gains on financial operations',
  7784: 'Gains on treasury/derivative instruments',
  779: 'REVERSAL OF FINANCIAL RISK PROVISIONS',
  7791: 'Reversal of financial risk provisions',
  7795: 'Reversal of investment security impairment provisions',
  7798: 'Reversal of other financial provisions',

  // ────────── 78 TRANSFER OF EXPENSES ──────────
  78: 'CHARGE TRANSFERS (COSTS RECHARGED OR RECLASSIFIED)',
  781: "OPERATING CHARGE TRANSFERS D'EXPLOITATION",
  787: 'FINANCIAL CHARGE TRANSFERS',

  // ────────── 79 REVERSAL OF PROVISIONS ──────────
  79: 'REVERSALS OF LONG-TERM PROVISIONS',
  791: "REVERSALS OF OPERATING PROVISIONS D'EXPLOITATION",
  7911: 'Reversal of operating provisions for risks and charges',
  7912: 'Reversal of major repair provisions',
  7913: 'Reversal of intangible asset impairment provisions',
  7914: 'Reversal of tangible asset impairment provisions',
  797: 'REVERSALS OF FINANCIAL PROVISIONS',
  7971: 'Reversal of financial provisions for risks and charges',
  7972: 'Reversal of financial asset impairment provisions',
  798: "REVERSALS OF AMORTISATION (INCLUDING INVESTMENT GRANT TRANSFERS) D'AMORTISSEMENTS",
} as const satisfies Plan;

export type Class7AccountCode = keyof typeof class7Accounts;
