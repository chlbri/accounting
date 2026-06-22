/**
 * SYSCOHADA — CLASSE 8 : Comptes des autres charges et des autres produits
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
  // ────────── 81 VALEURS COMPTABLES DES CESSIONS D'IMMOBILISATIONS ──────────
  81: {
    name: "VALEURS COMPTABLES DES CESSIONS D'IMMOBILISATIONS",
    description: 'Net book value of fixed assets disposed of (HAO charge)',
  },
  811: {
    name: 'IMMOBILISATIONS INCORPORELLES',
    description: 'Net book value of disposed intangible assets',
  },
  812: {
    name: 'IMMOBILISATIONS CORPORELLES',
    description: 'Net book value of disposed tangible assets',
  },
  816: {
    name: 'IMMOBILISATIONS FINANCIÈRES',
    description: 'Net book value of disposed financial assets',
  },

  // ────────── 82 PRODUITS DES CESSIONS D'IMMOBILISATIONS ──────────
  82: {
    name: "PRODUITS DES CESSIONS D'IMMOBILISATIONS",
    description: 'Proceeds from disposal of fixed assets (HAO income)',
  },
  821: {
    name: 'IMMOBILISATIONS INCORPORELLES',
    description: 'Proceeds from disposal of intangible assets',
  },
  822: {
    name: 'IMMOBILISATIONS CORPORELLES',
    description: 'Proceeds from disposal of tangible assets',
  },
  826: {
    name: 'IMMOBILISATIONS FINANCIÈRES',
    description: 'Proceeds from disposal of financial assets',
  },

  // ────────── 83 CHARGES HORS ACTIVITÉS ORDINAIRES ──────────
  83: {
    name: 'CHARGES HORS ACTIVITÉS ORDINAIRES',
    description:
      'Extraordinary / non-ordinary activity charges (HAO expenses)',
  },
  831: {
    name: 'CHARGES H.A.O. CONSTATÉES',
    description: 'Recognised HAO charges (extraordinary expenses)',
  },
  834: {
    name: 'PERTES SUR CRÉANCES H.A.O.',
    description: 'Losses on write-off of HAO receivables',
  },
  835: {
    name: 'DONS ET LIBÉRALITÉS ACCORDÉS',
    description: 'Gifts and donations made',
  },
  836: {
    name: 'ABANDONS DE CRÉANCES CONSENTIS',
    description: 'Debt waivers and write-offs granted to third parties',
  },
  839: {
    name: 'CHARGES PROVISIONNÉES H.A.O.',
    description: 'HAO provisions charged (extraordinary risk provisions)',
  },

  // ────────── 84 PRODUITS HORS ACTIVITÉS ORDINAIRES ──────────
  84: {
    name: 'PRODUITS HORS ACTIVITÉS ORDINAIRES',
    description:
      'Extraordinary / non-ordinary activity income (HAO revenues)',
  },
  841: {
    name: 'PRODUITS H.A.O. CONSTATÉS',
    description: 'Recognised HAO income (extraordinary revenues)',
  },
  845: {
    name: 'DONS ET LIBÉRALITÉS OBTENUS',
    description: 'Gifts and donations received',
  },
  846: {
    name: 'ABANDONS DE CRÉANCES OBTENUS',
    description: 'Debt waivers received from third parties',
  },
  848: {
    name: 'TRANSFERTS DE CHARGES H.A.O.',
    description: 'HAO charge transfers',
  },
  849: {
    name: 'REPRISES DES CHARGES PROVISIONNÉES H.A.O.',
    description: 'Reversals of HAO risk provisions',
  },

  // ────────── 85 DOTATIONS HORS ACTIVITÉS ORDINAIRES ──────────
  85: {
    name: 'DOTATIONS HORS ACTIVITÉS ORDINAIRES',
    description:
      'HAO depreciation, amortisation and provision charges (extraordinary)',
  },
  851: {
    name: 'DOTATIONS AUX PROVISIONS RÉGLEMENTÉES',
    description: 'Regulated provision charges (HAO)',
  },
  852: {
    name: 'DOTATIONS AUX AMORTISSEMENTS H.A.O.',
    description: 'Accelerated / extraordinary depreciation charges (HAO)',
  },
  853: {
    name: 'DOTATIONS AUX PROVISIONS POUR DÉPRÉCIATION H.A.O.',
    description: 'HAO impairment provision charges',
  },
  854: {
    name: 'DOTATIONS AUX PROVISIONS POUR RISQUES ET CHARGES H.A.O.',
    description: 'HAO risk and charge provision charges',
  },
  858: {
    name: 'AUTRES DOTATIONS H.A.O.',
    description: 'Other HAO provision charges',
  },

  // ────────── 86 REPRISES HORS ACTIVITÉS ORDINAIRES ──────────
  86: {
    name: 'REPRISES HORS ACTIVITÉS ORDINAIRES',
    description:
      'Reversals of HAO provisions and amortisation (extraordinary)',
  },
  861: {
    name: 'REPRISES DE PROVISIONS RÉGLEMENTÉES',
    description: 'Reversals of regulated provisions (HAO)',
  },
  862: {
    name: "REPRISES D'AMORTISSEMENTS",
    description: 'Reversals of extraordinary depreciation (HAO)',
  },
  863: {
    name: 'REPRISES DE PROVISIONS POUR DÉPRÉCIATION H.A.O.',
    description: 'Reversals of HAO impairment provisions',
  },
  864: {
    name: 'REPRISES DE PROVISIONS POUR RISQUES ET CHARGES H.A.O.',
    description: 'Reversals of HAO risk and charge provisions',
  },
  865: {
    name: "REPRISES DE SUBVENTIONS D'INVESTISSEMENT",
    description:
      'Transfer of investment grants to profit (annual amortisation)',
  },
  868: {
    name: 'AUTRES REPRISES H.A.O.',
    description: 'Other HAO provision reversals',
  },

  // ────────── 87 PARTICIPATION DES TRAVAILLEURS ──────────
  87: {
    name: 'PARTICIPATION DES TRAVAILLEURS',
    description: 'Employee profit-sharing charges',
  },
  871: {
    name: 'PARTICIPATION LÉGALE AUX BÉNÉFICES',
    description: 'Statutory employee profit-sharing charge',
  },
  874: {
    name: 'PARTICIPATION CONTRACTUELLE AUX BÉNÉFICES',
    description: 'Contractual employee profit-sharing charge',
  },
  878: {
    name: 'AUTRES PARTICIPATIONS',
    description: 'Other employee participation charges',
  },

  // ────────── 88 SUBVENTIONS D'ÉQUILIBRE ──────────
  88: {
    name: "SUBVENTIONS D'ÉQUILIBRE",
    description:
      'Balancing grants — grants to compensate operating losses (subsidy)',
  },
  881: { name: 'ÉTAT', description: 'Balancing grant from the State' },
  884: {
    name: 'COLLECTIVITÉS PUBLIQUES',
    description: 'Balancing grant from public authorities',
  },
  886: { name: 'GROUPE', description: 'Balancing grant from the group' },
  888: {
    name: 'AUTRES',
    description: 'Balancing grant from other sources',
  },

  // ────────── 89 IMPÔTS SUR LE RÉSULTAT ──────────
  89: {
    name: 'IMPÔTS SUR LE RÉSULTAT',
    description: 'Income tax (corporate tax on profit)',
  },
  891: {
    name: "IMPÔTS SUR LES BÉNÉFICES DE L'EXERCICE",
    description: 'Current year corporate income tax',
  },
  8911: {
    name: "Activités exercées dans l'État",
    description: 'Income tax on activities in the home State',
  },
  8912: {
    name: 'Activités exercées dans les autres États de la Région',
    description: 'Income tax on activities in other UEMOA member states',
  },
  8913: {
    name: 'Activités exercées hors Région',
    description: 'Income tax on activities outside the UEMOA region',
  },
  892: {
    name: "RAPPEL D'IMPÔTS SUR RÉSULTATS ANTÉRIEURS",
    description: 'Additional tax assessments on prior year results',
  },
  895: {
    name: 'IMPÔT MINIMUM FORFAITAIRE (I.M.F.)',
    description:
      'Minimum flat-rate tax (IMF — applicable in some OHADA states)',
  },
  899: {
    name: "DÉGRÈVEMENTS ET ANNULATIONS D'IMPÔTS SUR RÉSULTATS ANTÉRIEURS",
    description:
      'Tax credits and cancellations relating to prior year taxes',
  },
  8991: {
    name: 'Dégrèvements',
    description: 'Tax rebates and reductions on prior year taxes',
  },
  8994: {
    name: 'Annulations pour pertes rétroactives',
    description: 'Tax annulments due to retroactive losses',
  },
} as const satisfies Plan;

export type Class8AccountCode = keyof typeof class8Accounts;
