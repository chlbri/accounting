/**
 * SYSCOHADA — CLASS 9: Off-Balance-Sheet Commitments & Management
 * comptabilité analytique de gestion (CAGE)
 * (Class 9: Off-Balance-Sheet Commitments & Management Accounting — Optional)
 *
 * This class is optional (facultative). It covers:
 *  - Off-balance-sheet commitments obtained and granted (901–908)
 *  - Counterpart accounts for those commitments (91)
 *  - Management accounting / cost accounting (CAGE) accounts (92–99)
 *
 * Source: Official SYSCOHADA Chart of Accounts PDF, pages 46–49.
 */
import type { Plan } from './types';

export const class9Accounts = {
  // ────────── 90 COMMITMENTS RECEIVED AND GIVEN ──────────
  90: {
    name: 'OFF-BALANCE-SHEET COMMITMENTS',
    description: 'Off-balance-sheet commitments — received and given',
  },

  // Commitments obtained (901–904)
  901: {
    name: 'FINANCING COMMITMENTS OBTAINED',
    description:
      'Financing commitments obtained (credit facilities, etc.)',
  },
  9011: {
    name: 'Confirmed credit lines obtained',
    description: 'Confirmed credit lines obtained',
  },
  9012: {
    name: 'Loan drawdowns remaining to be received',
    description: 'Loan drawdowns remaining to be received',
  },
  9013: {
    name: 'Revolving financing facilities obtained',
    description: 'Revolving financing facilities obtained',
  },
  9014: {
    name: "Note issuance facilities obtained'émission",
    description: 'Note issuance facilities obtained',
  },
  9018: {
    name: 'Other financing commitments obtained',
    description: 'Other financing commitments obtained',
  },

  902: {
    name: 'GUARANTEE COMMITMENTS RECEIVED',
    description: 'Guarantee commitments received',
  },
  9021: {
    name: 'Endorsements received',
    description: 'Endorsements received',
  },
  9022: {
    name: 'Sureties and guarantees received',
    description: 'Sureties and guarantees received',
  },
  9023: {
    name: 'Mortgages received as collateral',
    description: 'Mortgages received as collateral',
  },
  9024: {
    name: 'Bills endorsed by third parties (in our favour)',
    description: 'Bills endorsed by third parties (in our favour)',
  },
  9028: {
    name: 'Other guarantees received',
    description: 'Other guarantees received',
  },

  903: {
    name: 'RECIPROCAL COMMITMENTS',
    description: 'Reciprocal/mutual commitments obtained',
  },
  9031: {
    name: 'Forward purchase commitments for merchandise',
    description: 'Forward purchase commitments for merchandise',
  },
  9032: {
    name: 'Forward currency purchase commitments',
    description: 'Forward currency purchase commitments',
  },
  9033: {
    name: 'Firm customer purchase orders received',
    description: 'Firm customer purchase orders received',
  },
  9038: {
    name: 'Other reciprocal commitments obtained',
    description: 'Other reciprocal commitments obtained',
  },

  904: {
    name: 'OTHER COMMITMENTS OBTAINED',
    description: 'Other commitments obtained',
  },
  9041: {
    name: 'Conditional debt waivers obtained',
    description: 'Conditional debt waivers obtained',
  },
  9043: {
    name: 'Sales with retention of title clause (seller perspective)',
    description:
      'Sales with retention of title clause (seller perspective)',
  },
  9048: {
    name: 'Various other commitments obtained',
    description: 'Various other commitments obtained',
  },

  // Commitments granted (905–908)
  905: {
    name: 'FINANCING COMMITMENTS GIVEN TO THIRD PARTIES',
    description: 'Financing commitments given to third parties',
  },
  9051: {
    name: 'Credit lines granted but not yet drawn down',
    description: 'Credit lines granted but not yet drawn down',
  },
  9058: {
    name: 'Other financing commitments granted',
    description: 'Other financing commitments granted',
  },

  906: {
    name: 'GUARANTEE COMMITMENTS GIVEN',
    description: 'Guarantee commitments given',
  },
  9061: { name: 'Endorsements given', description: 'Endorsements given' },
  9062: {
    name: 'Sureties and guarantees given',
    description: 'Sureties and guarantees given',
  },
  9063: {
    name: 'Mortgages given as collateral',
    description: 'Mortgages given as collateral',
  },
  9064: {
    name: "Bills endorsed by the company (in favour of third parties)'entreprise",
    description:
      'Bills endorsed by the company (in favour of third parties)',
  },
  9068: {
    name: 'Other guarantees given',
    description: 'Other guarantees given',
  },

  907: {
    name: 'RECIPROCAL COMMITMENTS',
    description: 'Reciprocal/mutual commitments given',
  },
  9071: {
    name: 'Forward sale commitments for merchandise',
    description: 'Forward sale commitments for merchandise',
  },
  9072: {
    name: 'Forward currency sale commitments',
    description: 'Forward currency sale commitments',
  },
  9073: {
    name: 'Firm purchase orders placed with suppliers',
    description: 'Firm purchase orders placed with suppliers',
  },
  9078: {
    name: 'Other reciprocal commitments given',
    description: 'Other reciprocal commitments given',
  },

  908: {
    name: 'OTHER COMMITMENTS GIVEN',
    description: 'Other commitments given',
  },
  9081: {
    name: 'Conditional debt cancellations granted',
    description: 'Conditional debt cancellations granted',
  },
  9082: {
    name: 'Pension and retirement commitments',
    description: 'Pension and retirement commitments',
  },
  9083: {
    name: 'Purchases with retention of title clause (buyer perspective)',
    description:
      'Purchases with retention of title clause (buyer perspective)',
  },
  9088: {
    name: 'Various other commitments given',
    description: 'Various other commitments given',
  },

  // ────────── 91 COUNTERPARTS OF COMMITMENTS ──────────
  91: {
    name: 'COUNTERPART ACCOUNTS FOR OFF-BALANCE-SHEET COMMITMENTS (TO BALANCE ACCOUNTS 90)',
    description:
      'Counterpart accounts for off-balance-sheet commitments (to balance accounts 90)',
  },
  911: {
    name: 'COUNTERPART',
    description: 'Counterpart — financing commitments obtained (901)',
  },
  915: {
    name: 'COUNTERPART',
    description: 'Counterpart — financing commitments granted (905)',
  },

  // ────────── 92–99 COST AND MANAGEMENT ACCOUNTING ──────────
  92: {
    name: 'REFLECTED / MIRROR ACCOUNTS',
    description:
      'Reflected / mirror accounts — reclassification of general ledger balances into management accounting',
  },
  93: {
    name: 'RECLASSIFICATION ACCOUNTS',
    description:
      'Reclassification accounts — allocation of costs and revenues to cost centres',
  },
  94: {
    name: 'COST ACCOUNTS',
    description:
      'Cost accounts — accumulation of costs by product, activity or cost centre',
  },
  95: {
    name: 'MANAGEMENT ACCOUNTING STOCK ACCOUNTS',
    description:
      'Management accounting stock accounts — valued at standard or actual cost',
  },
  96: {
    name: "VARIANCE ACCOUNTS D'ÉCARTS SUR COÛTS PRÉ-ÉTABLIS",
    description:
      'Variance accounts — differences between standard and actual costs',
  },
  97: {
    name: 'ACCOUNTS FOR DIFFERENCES BETWEEN FINANCIAL AND MANAGEMENT ACCOUNTING TREATMENT',
    description:
      'Accounts for differences between financial and management accounting treatment',
  },
  98: {
    name: 'MANAGEMENT ACCOUNTING RESULT ACCOUNTS',
    description:
      'Management accounting result accounts — analytical profit and loss',
  },
  99: {
    name: 'INTERNAL LIAISON ACCOUNTS',
    description:
      'Internal liaison accounts — transfers between management and financial accounting',
  },
} as const satisfies Plan;

export type Class9AccountCode = keyof typeof class9Accounts;
