/**
 * SYSCOHADA — CLASSE 7 : Comptes de produits des activités ordinaires
 * (Class 7: Ordinary Activity Revenue Accounts)
 *
 * Source: Official SYSCOHADA Chart of Accounts PDF, pages 41–44.
 */
import type { Plan } from './types';

export const class7Accounts = {
  // ────────── 70 VENTES ──────────
  70: {
    name: 'VENTES',
    description: 'Revenue from sales of goods and services',
  },
  701: {
    name: 'VENTES DE MARCHANDISES',
    description: 'Sales of merchandise (goods for resale)',
  },
  7011: {
    name: 'dans la Région',
    description: 'Merchandise sales within the UEMOA region',
  },
  7012: {
    name: 'hors Région',
    description: 'Merchandise sales outside the UEMOA region',
  },
  7013: {
    name: 'aux entreprises du groupe dans la Région',
    description: 'Intra-group merchandise sales within the region',
  },
  7014: {
    name: 'aux entreprises du groupe hors Région',
    description: 'Intra-group merchandise sales outside the region',
  },
  702: {
    name: 'VENTES DE PRODUITS FINIS',
    description: 'Sales of finished manufactured goods',
  },
  7021: {
    name: 'dans la Région',
    description: 'Finished goods sales within the UEMOA region',
  },
  7022: {
    name: 'hors Région',
    description: 'Finished goods sales outside the UEMOA region',
  },
  7023: {
    name: 'aux entreprises du groupe dans la Région',
    description: 'Intra-group finished goods sales within the region',
  },
  7024: {
    name: 'aux entreprises du groupe hors Région',
    description: 'Intra-group finished goods sales outside the region',
  },
  703: {
    name: 'VENTES DE PRODUITS INTERMÉDIAIRES',
    description: 'Sales of semi-finished / intermediate products',
  },
  7031: {
    name: 'dans la Région',
    description: 'Intermediate product sales within the UEMOA region',
  },
  7032: {
    name: 'hors Région',
    description: 'Intermediate product sales outside the UEMOA region',
  },
  7033: {
    name: 'aux entreprises du groupe dans la Région',
    description:
      'Intra-group intermediate product sales within the region',
  },
  7034: {
    name: 'aux entreprises du groupe hors Région',
    description:
      'Intra-group intermediate product sales outside the region',
  },
  704: {
    name: 'VENTES DE PRODUITS RÉSIDUELS',
    description: 'Sales of by-products, waste and scrap',
  },
  7041: {
    name: 'dans la Région',
    description: 'By-product sales within the UEMOA region',
  },
  7042: {
    name: 'hors Région',
    description: 'By-product sales outside the UEMOA region',
  },
  7043: {
    name: 'aux entreprises du groupe dans la Région',
    description: 'Intra-group by-product sales within the region',
  },
  7044: {
    name: 'aux entreprises du groupe hors Région',
    description: 'Intra-group by-product sales outside the region',
  },
  705: {
    name: 'TRAVAUX FACTURÉS',
    description: 'Billed construction and works contracts',
  },
  7051: {
    name: 'dans la Région',
    description: 'Billed works within the UEMOA region',
  },
  7052: {
    name: 'hors Région',
    description: 'Billed works outside the UEMOA region',
  },
  7053: {
    name: 'aux entreprises du groupe dans la Région',
    description: 'Intra-group billed works within the region',
  },
  7054: {
    name: 'aux entreprises du groupe hors Région',
    description: 'Intra-group billed works outside the region',
  },
  706: {
    name: 'SERVICES VENDUS',
    description: 'Services rendered and billed',
  },
  7061: {
    name: 'dans la Région',
    description: 'Services sold within the UEMOA region',
  },
  7062: {
    name: 'hors Région',
    description: 'Services sold outside the UEMOA region',
  },
  7063: {
    name: 'aux entreprises du groupe dans la Région',
    description: 'Intra-group services sold within the region',
  },
  7064: {
    name: 'aux entreprises du groupe hors Région',
    description: 'Intra-group services sold outside the region',
  },
  707: {
    name: 'PRODUITS ACCESSOIRES',
    description: 'Ancillary revenues and incidental income',
  },
  7071: {
    name: 'Ports, emballages perdus et autres frais facturés',
    description:
      'Freight and non-returnable packaging billed to customers',
  },
  7072: {
    name: 'Commissions et courtages',
    description: 'Commissions and brokerage income',
  },
  7073: { name: 'Locations', description: 'Rental income' },
  7074: {
    name: "Bonis sur reprises et cessions d'emballages",
    description: 'Surplus on return and sale of packaging',
  },
  7075: {
    name: 'Mise à disposition de personnel',
    description: 'Staff secondment income',
  },
  7076: {
    name: 'Redevances pour brevets, logiciels, marques et droits similaires',
    description:
      'Royalty income from patents, software, trademarks and similar',
  },
  7077: {
    name: "Services exploités dans l'intérêt du personnel",
    description:
      'Services operated for the benefit of employees (charged back)',
  },
  7078: {
    name: 'Autres produits accessoires',
    description: 'Other ancillary income',
  },

  // ────────── 71 SUBVENTIONS D'EXPLOITATION ──────────
  71: {
    name: "SUBVENTIONS D'EXPLOITATION",
    description: 'Operating grants (to subsidise operations)',
  },
  711: {
    name: "SUR PRODUITS À L'EXPORTATION",
    description: 'Export product subsidies',
  },
  712: {
    name: "SUR PRODUITS À L'IMPORTATION",
    description: 'Import product subsidies',
  },
  713: {
    name: 'SUR PRODUITS DE PÉRÉQUATION',
    description: 'Price equalisation / stabilisation subsidies',
  },
  718: {
    name: "AUTRES SUBVENTIONS D'EXPLOITATION",
    description: 'Other operating grants',
  },
  7181: {
    name: "Versées par l'État et les collectivités publiques",
    description: 'Operating grants from the State and public authorities',
  },
  7182: {
    name: 'Versées par les organismes internationaux',
    description: 'Operating grants from international organisations',
  },
  7183: {
    name: 'Versées par des tiers',
    description: 'Operating grants from other third parties',
  },

  // ────────── 72 PRODUCTION IMMOBILISÉE ──────────
  72: {
    name: 'PRODUCTION IMMOBILISÉE',
    description: 'Own-work capitalised (assets produced for own use)',
  },
  721: {
    name: 'IMMOBILISATIONS INCORPORELLES',
    description: 'Capitalised intangible assets produced internally',
  },
  722: {
    name: 'IMMOBILISATIONS CORPORELLES',
    description: 'Capitalised tangible assets produced internally',
  },
  726: {
    name: 'IMMOBILISATIONS FINANCIÈRES',
    description: 'Capitalised financial assets produced internally',
  },

  // ────────── 73 VARIATIONS DES STOCKS DE BIENS ET DE SERVICES PRODUITS ──────────
  73: {
    name: 'VARIATIONS DES STOCKS DE BIENS ET DE SERVICES PRODUITS',
    description: 'Change in inventories of produced goods and services',
  },
  734: {
    name: 'VARIATIONS DES STOCKS DE PRODUITS EN COURS',
    description: 'Change in work in progress (products)',
  },
  7341: {
    name: 'Produits en cours',
    description: 'Change in manufactured products in progress',
  },
  7342: {
    name: 'Travaux en cours',
    description: 'Change in works in progress',
  },
  735: {
    name: 'VARIATIONS DES EN-COURS DE SERVICES',
    description: 'Change in services in progress',
  },
  7351: {
    name: 'Études en cours',
    description: 'Change in studies in progress',
  },
  7352: {
    name: 'Prestations de services en cours',
    description: 'Change in service contracts in progress',
  },
  736: {
    name: 'VARIATIONS DES STOCKS DE PRODUITS FINIS',
    description: 'Change in finished goods inventory',
  },
  737: {
    name: 'VARIATIONS DES STOCKS DE PRODUITS INTERMÉDIAIRES ET RÉSIDUELS',
    description: 'Change in semi-finished goods and by-products inventory',
  },
  7371: {
    name: 'Produits intermédiaires',
    description: 'Change in intermediate products inventory',
  },
  7372: {
    name: 'Produits résiduels',
    description: 'Change in by-products and waste inventory',
  },

  // ────────── 75 AUTRES PRODUITS ──────────
  75: { name: 'AUTRES PRODUITS', description: 'Other operating income' },
  752: {
    name: 'QUOTE-PART DE RÉSULTAT SUR OPÉRATIONS FAITES EN COMMUN',
    description: 'Share of profit on joint venture transactions',
  },
  7521: {
    name: 'Quote-part transférée de pertes (comptabilité du gérant)',
    description: 'Share of losses transferred — manager accounting',
  },
  7525: {
    name: 'Bénéfices attribués par transfert (comptabilité des associés non gérants)',
    description:
      'Profits allocated by transfer — non-managing partner accounting',
  },
  753: {
    name: 'QUOTE-PART DE RÉSULTAT SUR EXÉCUTION PARTIELLE DE CONTRATS PLURI-EXERCICES',
    description:
      'Portion of profit on partial completion of multi-year contracts',
  },
  754: {
    name: "PRODUITS DES CESSIONS COURANTES D'IMMOBILISATIONS",
    description:
      'Proceeds from disposal of fixed assets in the ordinary course',
  },
  758: {
    name: 'PRODUITS DIVERS',
    description: 'Miscellaneous other income',
  },
  7581: {
    name: "Jetons de présence et autres rémunérations d'administrateurs",
    description: "Directors' fees received (income side)",
  },
  7582: {
    name: "Indemnités d'assurances reçues",
    description: 'Insurance indemnities received',
  },
  759: {
    name: "REPRISES DE CHARGES PROVISIONNÉES D'EXPLOITATION",
    description: 'Reversal of short-term operating risk provisions',
  },
  7591: {
    name: 'sur risques à court terme',
    description: 'Reversal of short-term operating risk provisions',
  },
  7593: {
    name: 'sur stocks',
    description: 'Reversal of stock impairment provisions',
  },
  7594: {
    name: 'sur créances',
    description: 'Reversal of receivable impairment provisions',
  },
  7598: {
    name: 'sur autres charges provisionnées',
    description: 'Reversal of other operating provisions',
  },

  // ────────── 77 REVENUS FINANCIERS ET PRODUITS ASSIMILÉS ──────────
  77: {
    name: 'REVENUS FINANCIERS ET PRODUITS ASSIMILÉS',
    description: 'Financial income and similar revenues',
  },
  771: {
    name: 'INTÉRÊTS DE PRÊTS',
    description: 'Interest income on loans granted',
  },
  772: {
    name: 'REVENUS DE PARTICIPATIONS',
    description: 'Dividend and participation income',
  },
  773: {
    name: 'ESCOMPTES OBTENUS',
    description: 'Settlement discounts received from suppliers',
  },
  774: {
    name: 'REVENUS DE TITRES DE PLACEMENT',
    description: 'Income from short-term investment securities',
  },
  776: { name: 'GAINS DE CHANGE', description: 'Foreign exchange gains' },
  777: {
    name: 'GAINS SUR CESSIONS DE TITRES DE PLACEMENT',
    description: 'Gains on disposal of short-term investment securities',
  },
  778: {
    name: 'GAINS SUR RISQUES FINANCIERS',
    description: 'Gains on financial risks (derivative settlements)',
  },
  7781: {
    name: 'sur rentes viagères',
    description: 'Gains on life annuity financial risks',
  },
  7782: {
    name: 'sur opérations financières',
    description: 'Gains on financial operations',
  },
  7784: {
    name: 'sur instruments de trésorerie',
    description: 'Gains on treasury/derivative instruments',
  },
  779: {
    name: 'REPRISES DE CHARGES PROVISIONNÉES FINANCIÈRES',
    description: 'Reversal of financial risk provisions',
  },
  7791: {
    name: 'sur risques financiers',
    description: 'Reversal of financial risk provisions',
  },
  7795: {
    name: 'sur titres de placement',
    description: 'Reversal of investment security impairment provisions',
  },
  7798: {
    name: 'autres charges provisionnées financières',
    description: 'Reversal of other financial provisions',
  },

  // ────────── 78 TRANSFERTS DE CHARGES ──────────
  78: {
    name: 'TRANSFERTS DE CHARGES',
    description: 'Charge transfers (costs recharged or reclassified)',
  },
  781: {
    name: "TRANSFERTS DE CHARGES D'EXPLOITATION",
    description: 'Operating charge transfers',
  },
  787: {
    name: 'TRANSFERTS DE CHARGES FINANCIÈRES',
    description: 'Financial charge transfers',
  },

  // ────────── 79 REPRISES DE PROVISIONS ──────────
  79: {
    name: 'REPRISES DE PROVISIONS',
    description: 'Reversals of long-term provisions',
  },
  791: {
    name: "REPRISES DE PROVISIONS D'EXPLOITATION",
    description: 'Reversals of operating provisions',
  },
  7911: {
    name: 'pour risques et charges',
    description: 'Reversal of operating provisions for risks and charges',
  },
  7912: {
    name: 'pour grosses réparations',
    description: 'Reversal of major repair provisions',
  },
  7913: {
    name: 'pour dépréciation des immobilisations incorporelles',
    description: 'Reversal of intangible asset impairment provisions',
  },
  7914: {
    name: 'pour dépréciation des immobilisations corporelles',
    description: 'Reversal of tangible asset impairment provisions',
  },
  797: {
    name: 'REPRISES DE PROVISIONS FINANCIÈRES',
    description: 'Reversals of financial provisions',
  },
  7971: {
    name: 'pour risques et charges',
    description: 'Reversal of financial provisions for risks and charges',
  },
  7972: {
    name: 'pour dépréciation des immobilisations financières',
    description: 'Reversal of financial asset impairment provisions',
  },
  798: {
    name: "REPRISES D'AMORTISSEMENTS",
    description:
      'Reversals of amortisation (including investment grant transfers)',
  },
} as const satisfies Plan;

export type Class7AccountCode = keyof typeof class7Accounts;
