/**
 * SYSCOHADA — CLASS 8: Non-Ordinary Activity Accounts — HAO
 * (Class 8: Non-Ordinary Activity Accounts — HAO)
 *
 * Covers: book value of disposed assets, proceeds from asset disposals,
 * extraordinary charges, extraordinary income, HAO provisions and reversals,
 * employee profit-sharing, balancing grants, and income tax.
 *
 * Source: Official SYSCOHADA Chart of Accounts PDF, pages 44–46.
 */
import type { Plan } from './types';

export const class8Accounts = {
  // ────────── 81 NET BOOK VALUE OF FIXED ASSETS DISPOSED OF ──────────
  81: {
    name: "NET BOOK VALUE OF FIXED ASSETS DISPOSED OF (HAO CHARGE) D'IMMOBILISATIONS",
    description: 'Net book value of fixed assets disposed of (HAO charge)',
  },
  811: {
    name: 'NET BOOK VALUE OF DISPOSED INTANGIBLE ASSETS',
    description: 'Net book value of disposed intangible assets',
  },
  812: {
    name: 'NET BOOK VALUE OF DISPOSED TANGIBLE ASSETS',
    description: 'Net book value of disposed tangible assets',
  },
  816: {
    name: 'NET BOOK VALUE OF DISPOSED FINANCIAL ASSETS',
    description: 'Net book value of disposed financial assets',
  },

  // ────────── 82 PROCEEDS FROM DISPOSAL OF FIXED ASSETS ──────────
  82: {
    name: "PROCEEDS FROM DISPOSAL OF FIXED ASSETS (HAO INCOME) D'IMMOBILISATIONS",
    description: 'Proceeds from disposal of fixed assets (HAO income)',
  },
  821: {
    name: 'PROCEEDS FROM DISPOSAL OF INTANGIBLE ASSETS',
    description: 'Proceeds from disposal of intangible assets',
  },
  822: {
    name: 'PROCEEDS FROM DISPOSAL OF TANGIBLE ASSETS',
    description: 'Proceeds from disposal of tangible assets',
  },
  826: {
    name: 'PROCEEDS FROM DISPOSAL OF FINANCIAL ASSETS',
    description: 'Proceeds from disposal of financial assets',
  },

  // ────────── 83 CHARGES OUTSIDE ORDINARY ACTIVITIES (HAO) ──────────
  83: {
    name: 'EXTRAORDINARY / NON-ORDINARY ACTIVITY CHARGES (HAO EXPENSES)',
    description:
      'Extraordinary / non-ordinary activity charges (HAO expenses)',
  },
  831: {
    name: 'RECOGNISED HAO CHARGES (EXTRAORDINARY EXPENSES)',
    description: 'Recognised HAO charges (extraordinary expenses)',
  },
  834: {
    name: 'LOSSES ON WRITE-OFF OF HAO RECEIVABLES',
    description: 'Losses on write-off of HAO receivables',
  },
  835: {
    name: 'GIFTS AND DONATIONS MADE',
    description: 'Gifts and donations made',
  },
  836: {
    name: 'DEBT WAIVERS AND WRITE-OFFS GRANTED TO THIRD PARTIES',
    description: 'Debt waivers and write-offs granted to third parties',
  },
  839: {
    name: 'HAO PROVISIONS CHARGED (EXTRAORDINARY RISK PROVISIONS)',
    description: 'HAO provisions charged (extraordinary risk provisions)',
  },

  // ────────── 84 INCOME OUTSIDE ORDINARY ACTIVITIES (HAO) ──────────
  84: {
    name: 'EXTRAORDINARY / NON-ORDINARY ACTIVITY INCOME (HAO REVENUES)',
    description:
      'Extraordinary / non-ordinary activity income (HAO revenues)',
  },
  841: {
    name: 'RECOGNISED HAO INCOME (EXTRAORDINARY REVENUES)',
    description: 'Recognised HAO income (extraordinary revenues)',
  },
  845: {
    name: 'GIFTS AND DONATIONS RECEIVED',
    description: 'Gifts and donations received',
  },
  846: {
    name: 'DEBT WAIVERS RECEIVED FROM THIRD PARTIES',
    description: 'Debt waivers received from third parties',
  },
  848: {
    name: 'HAO CHARGE TRANSFERS',
    description: 'HAO charge transfers',
  },
  849: {
    name: 'REVERSALS OF HAO RISK PROVISIONS',
    description: 'Reversals of HAO risk provisions',
  },

  // ────────── 85 PROVISION CHARGES OUTSIDE ORDINARY ACTIVITIES (HAO) ──────────
  85: {
    name: 'HAO DEPRECIATION, AMORTISATION AND PROVISION CHARGES (EXTRAORDINARY)',
    description:
      'HAO depreciation, amortisation and provision charges (extraordinary)',
  },
  851: {
    name: 'REGULATED PROVISION CHARGES (HAO)',
    description: 'Regulated provision charges (HAO)',
  },
  852: {
    name: 'ACCELERATED / EXTRAORDINARY DEPRECIATION CHARGES (HAO)',
    description: 'Accelerated / extraordinary depreciation charges (HAO)',
  },
  853: {
    name: 'HAO IMPAIRMENT PROVISION CHARGES',
    description: 'HAO impairment provision charges',
  },
  854: {
    name: 'HAO RISK AND CHARGE PROVISION CHARGES',
    description: 'HAO risk and charge provision charges',
  },
  858: {
    name: 'OTHER HAO PROVISION CHARGES',
    description: 'Other HAO provision charges',
  },

  // ────────── 86 REVERSAL OF PROVISIONS OUTSIDE ORDINARY ACTIVITIES (HAO) ──────────
  86: {
    name: 'REVERSALS OF HAO PROVISIONS AND AMORTISATION (EXTRAORDINARY)',
    description:
      'Reversals of HAO provisions and amortisation (extraordinary)',
  },
  861: {
    name: 'REVERSALS OF REGULATED PROVISIONS (HAO)',
    description: 'Reversals of regulated provisions (HAO)',
  },
  862: {
    name: "REVERSALS OF EXTRAORDINARY DEPRECIATION (HAO) D'AMORTISSEMENTS",
    description: 'Reversals of extraordinary depreciation (HAO)',
  },
  863: {
    name: 'REVERSALS OF HAO IMPAIRMENT PROVISIONS',
    description: 'Reversals of HAO impairment provisions',
  },
  864: {
    name: 'REVERSALS OF HAO RISK AND CHARGE PROVISIONS',
    description: 'Reversals of HAO risk and charge provisions',
  },
  865: {
    name: "TRANSFER OF INVESTMENT GRANTS TO PROFIT (ANNUAL AMORTISATION) D'INVESTISSEMENT",
    description:
      'Transfer of investment grants to profit (annual amortisation)',
  },
  868: {
    name: 'OTHER HAO PROVISION REVERSALS',
    description: 'Other HAO provision reversals',
  },

  // ────────── 87 EMPLOYEE PROFIT-SHARING ──────────
  87: {
    name: 'EMPLOYEE PROFIT-SHARING CHARGES',
    description: 'Employee profit-sharing charges',
  },
  871: {
    name: 'STATUTORY EMPLOYEE PROFIT-SHARING CHARGE',
    description: 'Statutory employee profit-sharing charge',
  },
  874: {
    name: 'CONTRACTUAL EMPLOYEE PROFIT-SHARING CHARGE',
    description: 'Contractual employee profit-sharing charge',
  },
  878: {
    name: 'OTHER EMPLOYEE PARTICIPATION CHARGES',
    description: 'Other employee participation charges',
  },

  // ────────── 88 BALANCING GRANTS ──────────
  88: {
    name: "EQUIPMENT GRANTS'ÉQUILIBRE",
    description:
      'Balancing grants — grants to compensate operating losses (subsidy)',
  },
  881: {
    name: 'BALANCING GRANT FROM THE STATE',
    description: 'Balancing grant from the State',
  },
  884: {
    name: 'BALANCING GRANT FROM PUBLIC AUTHORITIES',
    description: 'Balancing grant from public authorities',
  },
  886: {
    name: 'BALANCING GRANT FROM THE GROUP',
    description: 'Balancing grant from the group',
  },
  888: {
    name: 'BALANCING GRANT FROM OTHER SOURCES',
    description: 'Balancing grant from other sources',
  },

  // ────────── 89 INCOME TAXES ──────────
  89: {
    name: 'INCOME TAX (CORPORATE TAX ON PROFIT)',
    description: 'Income tax (corporate tax on profit)',
  },
  891: {
    name: "CURRENT YEAR CORPORATE INCOME TAX L'EXERCICE",
    description: 'Current year corporate income tax',
  },
  8911: {
    name: "Income tax on activities in the home State'État",
    description: 'Income tax on activities in the home State',
  },
  8912: {
    name: 'Income tax on activities in other UEMOA member states',
    description: 'Income tax on activities in other UEMOA member states',
  },
  8913: {
    name: 'Income tax on activities outside the UEMOA region',
    description: 'Income tax on activities outside the UEMOA region',
  },
  892: {
    name: "ADDITIONAL TAX ASSESSMENTS ON PRIOR YEAR RESULTS D'IMPÔTS SUR RÉSULTATS ANTÉRIEURS",
    description: 'Additional tax assessments on prior year results',
  },
  895: {
    name: 'MINIMUM FLAT-RATE TAX (IMF)',
    description:
      'Minimum flat-rate tax (IMF — applicable in some OHADA states)',
  },
  899: {
    name: "TAX CREDITS AND CANCELLATIONS RELATING TO PRIOR YEAR TAXES D'IMPÔTS SUR RÉSULTATS ANTÉRIEURS",
    description:
      'Tax credits and cancellations relating to prior year taxes',
  },
  8991: {
    name: 'Tax rebates and reductions on prior year taxes',
    description: 'Tax rebates and reductions on prior year taxes',
  },
  8994: {
    name: 'Tax annulments due to retroactive losses',
    description: 'Tax annulments due to retroactive losses',
  },
} as const satisfies Plan;

export type Class8AccountCode = keyof typeof class8Accounts;
