/**
 * SYSCOHADA — CLASS 7: Ordinary Activity Revenue Accounts
 * (Class 7: Ordinary Activity Revenue Accounts)
 *
 * Source: Official SYSCOHADA Chart of Accounts PDF, pages 41–44.
 */
import type { Plan } from './types';

export const class7Accounts = {
  // ────────── 70 SALES ──────────
  70: {
    name: 'SALES',
    description: 'Revenue from sales of goods and services',
  },
  701: {
    name: 'SALES OF MERCHANDISE (GOODS FOR RESALE)',
    description: 'Sales of merchandise (goods for resale)',
  },
  7011: {
    name: 'within the Region',
    description: 'Merchandise sales within the UEMOA region',
  },
  7012: {
    name: 'outside the Region',
    description: 'Merchandise sales outside the UEMOA region',
  },
  7013: {
    name: 'to group companies within the Region',
    description: 'Intra-group merchandise sales within the region',
  },
  7014: {
    name: 'to group companies outside the Region',
    description: 'Intra-group merchandise sales outside the region',
  },
  702: {
    name: 'SALES OF FINISHED MANUFACTURED GOODS',
    description: 'Sales of finished manufactured goods',
  },
  7021: {
    name: 'within the Region',
    description: 'Finished goods sales within the UEMOA region',
  },
  7022: {
    name: 'outside the Region',
    description: 'Finished goods sales outside the UEMOA region',
  },
  7023: {
    name: 'to group companies within the Region',
    description: 'Intra-group finished goods sales within the region',
  },
  7024: {
    name: 'to group companies outside the Region',
    description: 'Intra-group finished goods sales outside the region',
  },
  703: {
    name: 'SALES OF SEMI-FINISHED / INTERMEDIATE PRODUCTS',
    description: 'Sales of semi-finished / intermediate products',
  },
  7031: {
    name: 'within the Region',
    description: 'Intermediate product sales within the UEMOA region',
  },
  7032: {
    name: 'outside the Region',
    description: 'Intermediate product sales outside the UEMOA region',
  },
  7033: {
    name: 'to group companies within the Region',
    description:
      'Intra-group intermediate product sales within the region',
  },
  7034: {
    name: 'to group companies outside the Region',
    description:
      'Intra-group intermediate product sales outside the region',
  },
  704: {
    name: 'SALES OF BY-PRODUCTS, WASTE AND SCRAP',
    description: 'Sales of by-products, waste and scrap',
  },
  7041: {
    name: 'within the Region',
    description: 'By-product sales within the UEMOA region',
  },
  7042: {
    name: 'outside the Region',
    description: 'By-product sales outside the UEMOA region',
  },
  7043: {
    name: 'to group companies within the Region',
    description: 'Intra-group by-product sales within the region',
  },
  7044: {
    name: 'to group companies outside the Region',
    description: 'Intra-group by-product sales outside the region',
  },
  705: {
    name: 'BILLED CONSTRUCTION AND WORKS CONTRACTS',
    description: 'Billed construction and works contracts',
  },
  7051: {
    name: 'within the Region',
    description: 'Billed works within the UEMOA region',
  },
  7052: {
    name: 'outside the Region',
    description: 'Billed works outside the UEMOA region',
  },
  7053: {
    name: 'to group companies within the Region',
    description: 'Intra-group billed works within the region',
  },
  7054: {
    name: 'to group companies outside the Region',
    description: 'Intra-group billed works outside the region',
  },
  706: {
    name: 'SERVICES RENDERED AND BILLED',
    description: 'Services rendered and billed',
  },
  7061: {
    name: 'within the Region',
    description: 'Services sold within the UEMOA region',
  },
  7062: {
    name: 'outside the Region',
    description: 'Services sold outside the UEMOA region',
  },
  7063: {
    name: 'to group companies within the Region',
    description: 'Intra-group services sold within the region',
  },
  7064: {
    name: 'to group companies outside the Region',
    description: 'Intra-group services sold outside the region',
  },
  707: {
    name: 'ANCILLARY REVENUES AND INCIDENTAL INCOME',
    description: 'Ancillary revenues and incidental income',
  },
  7071: {
    name: 'Freight and non-returnable packaging billed to customers',
    description:
      'Freight and non-returnable packaging billed to customers',
  },
  7072: {
    name: 'Commissions and brokerage income',
    description: 'Commissions and brokerage income',
  },
  7073: { name: 'Rental income', description: 'Rental income' },
  7074: {
    name: "Surplus on return and sale of packaging'emballages",
    description: 'Surplus on return and sale of packaging',
  },
  7075: {
    name: 'Staff secondment income',
    description: 'Staff secondment income',
  },
  7076: {
    name: 'Royalty income from patents, software, trademarks and similar',
    description:
      'Royalty income from patents, software, trademarks and similar',
  },
  7077: {
    name: "Services operated for the benefit of employees (charged back)'intérêt du personnel",
    description:
      'Services operated for the benefit of employees (charged back)',
  },
  7078: {
    name: 'Other ancillary income',
    description: 'Other ancillary income',
  },

  // ────────── 71 OPERATING GRANTS ──────────
  71: {
    name: "EQUIPMENT GRANTS'EXPLOITATION",
    description: 'Operating grants (to subsidise operations)',
  },
  711: {
    name: "EXPORT PRODUCT SUBSIDIES L'EXPORTATION",
    description: 'Export product subsidies',
  },
  712: {
    name: "IMPORT PRODUCT SUBSIDIES L'IMPORTATION",
    description: 'Import product subsidies',
  },
  713: {
    name: 'PRICE EQUALISATION / STABILISATION SUBSIDIES',
    description: 'Price equalisation / stabilisation subsidies',
  },
  718: {
    name: "OTHER INVESTMENT GRANTS'EXPLOITATION",
    description: 'Other operating grants',
  },
  7181: {
    name: "Operating grants from the State and public authorities'État et les collectivités publiques",
    description: 'Operating grants from the State and public authorities',
  },
  7182: {
    name: 'Operating grants from international organisations',
    description: 'Operating grants from international organisations',
  },
  7183: {
    name: 'Operating grants from other third parties',
    description: 'Operating grants from other third parties',
  },

  // ────────── 72 SELF-CONSTRUCTED ASSETS ──────────
  72: {
    name: 'OWN-WORK CAPITALISED (ASSETS PRODUCED FOR OWN USE)',
    description: 'Own-work capitalised (assets produced for own use)',
  },
  721: {
    name: 'CAPITALISED INTANGIBLE ASSETS PRODUCED INTERNALLY',
    description: 'Capitalised intangible assets produced internally',
  },
  722: {
    name: 'CAPITALISED TANGIBLE ASSETS PRODUCED INTERNALLY',
    description: 'Capitalised tangible assets produced internally',
  },
  726: {
    name: 'CAPITALISED FINANCIAL ASSETS PRODUCED INTERNALLY',
    description: 'Capitalised financial assets produced internally',
  },

  // ────────── 73 CHANGE IN INVENTORIES OF FINISHED & WORK-IN-PROGRESS GOODS ──────────
  73: {
    name: 'CHANGE IN INVENTORIES OF PRODUCED GOODS AND SERVICES',
    description: 'Change in inventories of produced goods and services',
  },
  734: {
    name: 'CHANGE IN WORK IN PROGRESS (PRODUCTS)',
    description: 'Change in work in progress (products)',
  },
  7341: {
    name: 'Change in manufactured products in progress',
    description: 'Change in manufactured products in progress',
  },
  7342: {
    name: 'Change in works in progress',
    description: 'Change in works in progress',
  },
  735: {
    name: 'CHANGE IN SERVICES IN PROGRESS',
    description: 'Change in services in progress',
  },
  7351: {
    name: 'Change in studies in progress',
    description: 'Change in studies in progress',
  },
  7352: {
    name: 'Change in service contracts in progress',
    description: 'Change in service contracts in progress',
  },
  736: {
    name: 'CHANGE IN FINISHED GOODS INVENTORY',
    description: 'Change in finished goods inventory',
  },
  737: {
    name: 'CHANGE IN SEMI-FINISHED GOODS AND BY-PRODUCTS INVENTORY',
    description: 'Change in semi-finished goods and by-products inventory',
  },
  7371: {
    name: 'Change in intermediate products inventory',
    description: 'Change in intermediate products inventory',
  },
  7372: {
    name: 'Change in by-products and waste inventory',
    description: 'Change in by-products and waste inventory',
  },

  // ────────── 75 OTHER OPERATING REVENUES ──────────
  75: {
    name: 'OTHER OPERATING INCOME',
    description: 'Other operating income',
  },
  752: {
    name: 'SHARE OF PROFIT ON JOINT VENTURE TRANSACTIONS',
    description: 'Share of profit on joint venture transactions',
  },
  7521: {
    name: 'Share of losses transferred',
    description: 'Share of losses transferred — manager accounting',
  },
  7525: {
    name: 'Profits allocated by transfer',
    description:
      'Profits allocated by transfer — non-managing partner accounting',
  },
  753: {
    name: 'PORTION OF PROFIT ON PARTIAL COMPLETION OF MULTI-YEAR CONTRACTS',
    description:
      'Portion of profit on partial completion of multi-year contracts',
  },
  754: {
    name: "PROCEEDS FROM DISPOSAL OF FIXED ASSETS IN THE ORDINARY COURSE D'IMMOBILISATIONS",
    description:
      'Proceeds from disposal of fixed assets in the ordinary course',
  },
  758: {
    name: 'MISCELLANEOUS OTHER INCOME',
    description: 'Miscellaneous other income',
  },
  7581: {
    name: "Directors'administrateurs",
    description: "Directors' fees received (income side)",
  },
  7582: {
    name: "Insurance indemnities received'assurances reçues",
    description: 'Insurance indemnities received',
  },
  759: {
    name: "REVERSAL OF SHORT-TERM OPERATING RISK PROVISIONS D'EXPLOITATION",
    description: 'Reversal of short-term operating risk provisions',
  },
  7591: {
    name: 'Reversal of short-term operating risk provisions',
    description: 'Reversal of short-term operating risk provisions',
  },
  7593: {
    name: 'on inventory',
    description: 'Reversal of stock impairment provisions',
  },
  7594: {
    name: 'on receivables',
    description: 'Reversal of receivable impairment provisions',
  },
  7598: {
    name: 'Reversal of other operating provisions',
    description: 'Reversal of other operating provisions',
  },

  // ────────── 77 FINANCIAL INCOME AND EQUIVALENT ──────────
  77: {
    name: 'FINANCIAL INCOME AND SIMILAR REVENUES',
    description: 'Financial income and similar revenues',
  },
  771: {
    name: 'INTEREST INCOME ON LOANS GRANTED',
    description: 'Interest income on loans granted',
  },
  772: {
    name: 'DIVIDEND AND PARTICIPATION INCOME',
    description: 'Dividend and participation income',
  },
  773: {
    name: 'SETTLEMENT DISCOUNTS RECEIVED FROM SUPPLIERS',
    description: 'Settlement discounts received from suppliers',
  },
  774: {
    name: 'INCOME FROM SHORT-TERM INVESTMENT SECURITIES',
    description: 'Income from short-term investment securities',
  },
  776: {
    name: 'FOREIGN EXCHANGE GAINS',
    description: 'Foreign exchange gains',
  },
  777: {
    name: 'GAINS ON DISPOSAL OF SHORT-TERM INVESTMENT SECURITIES',
    description: 'Gains on disposal of short-term investment securities',
  },
  778: {
    name: 'GAINS ON FINANCIAL RISKS (DERIVATIVE SETTLEMENTS)',
    description: 'Gains on financial risks (derivative settlements)',
  },
  7781: {
    name: 'Gains on life annuity financial risks',
    description: 'Gains on life annuity financial risks',
  },
  7782: {
    name: 'Gains on financial operations',
    description: 'Gains on financial operations',
  },
  7784: {
    name: 'Gains on treasury/derivative instruments',
    description: 'Gains on treasury/derivative instruments',
  },
  779: {
    name: 'REVERSAL OF FINANCIAL RISK PROVISIONS',
    description: 'Reversal of financial risk provisions',
  },
  7791: {
    name: 'Reversal of financial risk provisions',
    description: 'Reversal of financial risk provisions',
  },
  7795: {
    name: 'Reversal of investment security impairment provisions',
    description: 'Reversal of investment security impairment provisions',
  },
  7798: {
    name: 'Reversal of other financial provisions',
    description: 'Reversal of other financial provisions',
  },

  // ────────── 78 TRANSFER OF EXPENSES ──────────
  78: {
    name: 'CHARGE TRANSFERS (COSTS RECHARGED OR RECLASSIFIED)',
    description: 'Charge transfers (costs recharged or reclassified)',
  },
  781: {
    name: "OPERATING CHARGE TRANSFERS D'EXPLOITATION",
    description: 'Operating charge transfers',
  },
  787: {
    name: 'FINANCIAL CHARGE TRANSFERS',
    description: 'Financial charge transfers',
  },

  // ────────── 79 REVERSAL OF PROVISIONS ──────────
  79: {
    name: 'REVERSALS OF LONG-TERM PROVISIONS',
    description: 'Reversals of long-term provisions',
  },
  791: {
    name: "REVERSALS OF OPERATING PROVISIONS D'EXPLOITATION",
    description: 'Reversals of operating provisions',
  },
  7911: {
    name: 'Reversal of operating provisions for risks and charges',
    description: 'Reversal of operating provisions for risks and charges',
  },
  7912: {
    name: 'Reversal of major repair provisions',
    description: 'Reversal of major repair provisions',
  },
  7913: {
    name: 'Reversal of intangible asset impairment provisions',
    description: 'Reversal of intangible asset impairment provisions',
  },
  7914: {
    name: 'Reversal of tangible asset impairment provisions',
    description: 'Reversal of tangible asset impairment provisions',
  },
  797: {
    name: 'REVERSALS OF FINANCIAL PROVISIONS',
    description: 'Reversals of financial provisions',
  },
  7971: {
    name: 'Reversal of financial provisions for risks and charges',
    description: 'Reversal of financial provisions for risks and charges',
  },
  7972: {
    name: 'Reversal of financial asset impairment provisions',
    description: 'Reversal of financial asset impairment provisions',
  },
  798: {
    name: "REVERSALS OF AMORTISATION (INCLUDING INVESTMENT GRANT TRANSFERS) D'AMORTISSEMENTS",
    description:
      'Reversals of amortisation (including investment grant transfers)',
  },
} as const satisfies Plan;

export type Class7AccountCode = keyof typeof class7Accounts;
