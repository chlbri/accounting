/**
 * SYSCOHADA — CLASSE 9 : Comptes des engagements hors bilan et de la
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
  // ────────── 90 ENGAGEMENTS OBTENUS ET ACCORDÉS ──────────
  90: {
    name: 'ENGAGEMENTS OBTENUS ET ENGAGEMENTS ACCORDÉS',
    description: 'Off-balance-sheet commitments — received and given',
  },

  // Commitments obtained (901–904)
  901: {
    name: 'ENGAGEMENTS DE FINANCEMENT OBTENUS',
    description:
      'Financing commitments obtained (credit facilities, etc.)',
  },
  9011: {
    name: 'Crédits confirmés obtenus',
    description: 'Confirmed credit lines obtained',
  },
  9012: {
    name: 'Emprunts restant à encaisser',
    description: 'Loan drawdowns remaining to be received',
  },
  9013: {
    name: 'Facilités de financement renouvelables',
    description: 'Revolving financing facilities obtained',
  },
  9014: {
    name: "Facilités d'émission",
    description: 'Note issuance facilities obtained',
  },
  9018: {
    name: 'Autres engagements de financement obtenus',
    description: 'Other financing commitments obtained',
  },

  902: {
    name: 'ENGAGEMENTS DE GARANTIE OBTENUS',
    description: 'Guarantee commitments received',
  },
  9021: { name: 'Avals obtenus', description: 'Endorsements received' },
  9022: {
    name: 'Cautions, garanties obtenues',
    description: 'Sureties and guarantees received',
  },
  9023: {
    name: 'Hypothèques obtenues',
    description: 'Mortgages received as collateral',
  },
  9024: {
    name: 'Effets endossés par des tiers',
    description: 'Bills endorsed by third parties (in our favour)',
  },
  9028: {
    name: 'Autres garanties obtenues',
    description: 'Other guarantees received',
  },

  903: {
    name: 'ENGAGEMENTS RÉCIPROQUES',
    description: 'Reciprocal/mutual commitments obtained',
  },
  9031: {
    name: 'Achats de marchandises à terme',
    description: 'Forward purchase commitments for merchandise',
  },
  9032: {
    name: 'Achats à terme de devises',
    description: 'Forward currency purchase commitments',
  },
  9033: {
    name: 'Commandes fermes des clients',
    description: 'Firm customer purchase orders received',
  },
  9038: {
    name: 'Autres engagements réciproques',
    description: 'Other reciprocal commitments obtained',
  },

  904: {
    name: 'AUTRES ENGAGEMENTS OBTENUS',
    description: 'Other commitments obtained',
  },
  9041: {
    name: 'Abandons de créances conditionnels',
    description: 'Conditional debt waivers obtained',
  },
  9043: {
    name: 'Ventes avec clause de réserve de propriété',
    description:
      'Sales with retention of title clause (seller perspective)',
  },
  9048: {
    name: 'Divers engagements obtenus',
    description: 'Various other commitments obtained',
  },

  // Commitments granted (905–908)
  905: {
    name: 'ENGAGEMENTS DE FINANCEMENT ACCORDÉS',
    description: 'Financing commitments given to third parties',
  },
  9051: {
    name: 'Crédits accordés non décaissés',
    description: 'Credit lines granted but not yet drawn down',
  },
  9058: {
    name: 'Autres engagements de financement accordés',
    description: 'Other financing commitments granted',
  },

  906: {
    name: 'ENGAGEMENTS DE GARANTIE ACCORDÉS',
    description: 'Guarantee commitments given',
  },
  9061: { name: 'Avals accordés', description: 'Endorsements given' },
  9062: {
    name: 'Cautions, garanties accordées',
    description: 'Sureties and guarantees given',
  },
  9063: {
    name: 'Hypothèques accordées',
    description: 'Mortgages given as collateral',
  },
  9064: {
    name: "Effets endossés par l'entreprise",
    description:
      'Bills endorsed by the company (in favour of third parties)',
  },
  9068: {
    name: 'Autres garanties accordées',
    description: 'Other guarantees given',
  },

  907: {
    name: 'ENGAGEMENTS RÉCIPROQUES',
    description: 'Reciprocal/mutual commitments given',
  },
  9071: {
    name: 'Ventes de marchandises à terme',
    description: 'Forward sale commitments for merchandise',
  },
  9072: {
    name: 'Ventes à terme de devises',
    description: 'Forward currency sale commitments',
  },
  9073: {
    name: 'Commandes fermes aux fournisseurs',
    description: 'Firm purchase orders placed with suppliers',
  },
  9078: {
    name: 'Autres engagements réciproques',
    description: 'Other reciprocal commitments given',
  },

  908: {
    name: 'AUTRES ENGAGEMENTS ACCORDÉS',
    description: 'Other commitments given',
  },
  9081: {
    name: 'Annulations conditionnelles de dettes',
    description: 'Conditional debt cancellations granted',
  },
  9082: {
    name: 'Engagements de retraite',
    description: 'Pension and retirement commitments',
  },
  9083: {
    name: 'Achats avec clause de réserve de propriété',
    description:
      'Purchases with retention of title clause (buyer perspective)',
  },
  9088: {
    name: 'Divers engagements accordés',
    description: 'Various other commitments given',
  },

  // ────────── 91 CONTREPARTIES DES ENGAGEMENTS ──────────
  91: {
    name: 'CONTREPARTIES DES ENGAGEMENTS',
    description:
      'Counterpart accounts for off-balance-sheet commitments (to balance accounts 90)',
  },
  911: {
    name: 'CONTREPARTIE DES ENGAGEMENTS OBTENUS 901',
    description: 'Counterpart — financing commitments obtained (901)',
  },
  915: {
    name: 'CONTREPARTIE DES ENGAGEMENTS ACCORDÉS 905',
    description: 'Counterpart — financing commitments granted (905)',
  },

  // ────────── 92–99 COMPTABILITÉ ANALYTIQUE DE GESTION (CAGE) ──────────
  92: {
    name: 'COMPTES REFLÉTÉS',
    description:
      'Reflected / mirror accounts — reclassification of general ledger balances into management accounting',
  },
  93: {
    name: 'COMPTES DE RECLASSEMENTS',
    description:
      'Reclassification accounts — allocation of costs and revenues to cost centres',
  },
  94: {
    name: 'COMPTES DE COÛTS',
    description:
      'Cost accounts — accumulation of costs by product, activity or cost centre',
  },
  95: {
    name: 'COMPTES DE STOCKS',
    description:
      'Management accounting stock accounts — valued at standard or actual cost',
  },
  96: {
    name: "COMPTES D'ÉCARTS SUR COÛTS PRÉ-ÉTABLIS",
    description:
      'Variance accounts — differences between standard and actual costs',
  },
  97: {
    name: 'COMPTES DE DIFFÉRENCES DE TRAITEMENT COMPTABLE',
    description:
      'Accounts for differences between financial and management accounting treatment',
  },
  98: {
    name: 'COMPTES DE RÉSULTATS',
    description:
      'Management accounting result accounts — analytical profit and loss',
  },
  99: {
    name: 'COMPTES DE LIAISONS INTERNES',
    description:
      'Internal liaison accounts — transfers between management and financial accounting',
  },
} as const satisfies Plan;

export type Class9AccountCode = keyof typeof class9Accounts;
