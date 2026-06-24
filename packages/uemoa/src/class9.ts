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
  90: 'OFF-BALANCE-SHEET COMMITMENTS',

  // Commitments obtained (901–904)
  901: 'FINANCING COMMITMENTS OBTAINED',
  9011: 'Confirmed credit lines obtained',
  9012: 'Loan drawdowns remaining to be received',
  9013: 'Revolving financing facilities obtained',
  9014: "Note issuance facilities obtained'émission",
  9018: 'Other financing commitments obtained',

  902: 'GUARANTEE COMMITMENTS RECEIVED',
  9021: 'Endorsements received',
  9022: 'Sureties and guarantees received',
  9023: 'Mortgages received as collateral',
  9024: 'Bills endorsed by third parties (in our favour)',
  9028: 'Other guarantees received',

  903: 'RECIPROCAL COMMITMENTS',
  9031: 'Forward purchase commitments for merchandise',
  9032: 'Forward currency purchase commitments',
  9033: 'Firm customer purchase orders received',
  9038: 'Other reciprocal commitments obtained',

  904: 'OTHER COMMITMENTS OBTAINED',
  9041: 'Conditional debt waivers obtained',
  9043: 'Sales with retention of title clause (seller perspective)',
  9048: 'Various other commitments obtained',

  // Commitments granted (905–908)
  905: 'FINANCING COMMITMENTS GIVEN TO THIRD PARTIES',
  9051: 'Credit lines granted but not yet drawn down',
  9058: 'Other financing commitments granted',

  906: 'GUARANTEE COMMITMENTS GIVEN',
  9061: 'Endorsements given',
  9062: 'Sureties and guarantees given',
  9063: 'Mortgages given as collateral',
  9064: "Bills endorsed by the company (in favour of third parties)'entreprise",
  9068: 'Other guarantees given',

  907: 'RECIPROCAL COMMITMENTS',
  9071: 'Forward sale commitments for merchandise',
  9072: 'Forward currency sale commitments',
  9073: 'Firm purchase orders placed with suppliers',
  9078: 'Other reciprocal commitments given',

  908: 'OTHER COMMITMENTS GIVEN',
  9081: 'Conditional debt cancellations granted',
  9082: 'Pension and retirement commitments',
  9083: 'Purchases with retention of title clause (buyer perspective)',
  9088: 'Various other commitments given',

  // ────────── 91 COUNTERPARTS OF COMMITMENTS ──────────
  91: 'COUNTERPART ACCOUNTS FOR OFF-BALANCE-SHEET COMMITMENTS (TO BALANCE ACCOUNTS 90)',
  911: 'COUNTERPART',
  915: 'COUNTERPART',

  // ────────── 92–99 COST AND MANAGEMENT ACCOUNTING ──────────
  92: 'REFLECTED / MIRROR ACCOUNTS',
  93: 'RECLASSIFICATION ACCOUNTS',
  94: 'COST ACCOUNTS',
  95: 'MANAGEMENT ACCOUNTING STOCK ACCOUNTS',
  96: "VARIANCE ACCOUNTS D'ÉCARTS SUR COÛTS PRÉ-ÉTABLIS",
  97: 'ACCOUNTS FOR DIFFERENCES BETWEEN FINANCIAL AND MANAGEMENT ACCOUNTING TREATMENT',
  98: 'MANAGEMENT ACCOUNTING RESULT ACCOUNTS',
  99: 'INTERNAL LIAISON ACCOUNTS',
} as const satisfies Plan;

export type Class9AccountCode = keyof typeof class9Accounts;
