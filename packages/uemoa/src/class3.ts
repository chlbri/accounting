import type { Plan } from './types';

/**
 * SYSCOHADA — CLASSE 3 : Comptes de stocks
 * (Class 3: Inventory / Stock Accounts)
 *
 * Source: Official SYSCOHADA Chart of Accounts PDF, pages 20–23.
 */
export const class3Accounts = {
  31: {
    name: 'MARCHANDISES',
    description: 'Merchandise / goods for resale',
  },
  311: { name: 'MARCHANDISES A', description: 'Merchandise — category A' },
  3111: {
    name: 'Marchandises A1',
    description: 'Merchandise A — subcategory 1',
  },
  3112: {
    name: 'Marchandises A2',
    description: 'Merchandise A — subcategory 2',
  },
  312: { name: 'MARCHANDISES B', description: 'Merchandise — category B' },
  3121: {
    name: 'Marchandises B1',
    description: 'Merchandise B — subcategory 1',
  },
  3122: {
    name: 'Marchandises B2',
    description: 'Merchandise B — subcategory 2',
  },
  318: {
    name: 'MARCHANDISES HORS ACTIVITÉS ORDINAIRES (H.A.O.)',
    description: 'Merchandise held outside ordinary activities (HAO)',
  },

  32: {
    name: 'MATIÈRES PREMIÈRES ET FOURNITURES LIÉES',
    description: 'Raw materials and related supplies',
  },
  321: { name: 'MATIÈRES A', description: 'Raw materials — category A' },
  322: { name: 'MATIÈRES B', description: 'Raw materials — category B' },
  323: {
    name: 'FOURNITURES (A,B)',
    description: 'Supplies — categories A and B',
  },

  33: {
    name: 'AUTRES APPROVISIONNEMENTS',
    description: 'Other supplies and consumables',
  },
  331: {
    name: 'MATIÈRES CONSOMMABLES',
    description: 'Consumable materials',
  },
  332: {
    name: "FOURNITURES D'ATELIER ET D'USINE",
    description: 'Workshop and factory supplies',
  },
  333: {
    name: 'FOURNITURES DE MAGASIN',
    description: 'Store/warehouse supplies',
  },
  334: { name: 'FOURNITURES DE BUREAU', description: 'Office supplies' },
  335: { name: 'EMBALLAGES', description: 'Packaging materials' },
  3351: {
    name: 'Emballages perdus',
    description: 'Non-returnable packaging',
  },
  3352: {
    name: 'Emballages récupérables non identifiables',
    description: 'Returnable non-individually-identifiable packaging',
  },
  3353: {
    name: 'Emballages à usage mixte',
    description: 'Mixed-use packaging',
  },
  3358: {
    name: 'Autres emballages',
    description: 'Other packaging materials',
  },
  338: {
    name: 'AUTRES MATIÈRES',
    description: 'Other materials and supplies',
  },

  34: {
    name: 'PRODUITS EN COURS',
    description: 'Work in progress — manufactured products',
  },
  341: { name: 'PRODUITS EN COURS', description: 'Products in progress' },
  3411: {
    name: 'Produits en cours P1',
    description: 'Products in progress — type P1',
  },
  3412: {
    name: 'Produits en cours P2',
    description: 'Products in progress — type P2',
  },
  342: {
    name: 'TRAVAUX EN COURS',
    description: 'Work in progress — construction/services',
  },
  3421: {
    name: 'Travaux en cours T1',
    description: 'Works in progress — type T1',
  },
  3422: {
    name: 'Travaux en cours T2',
    description: 'Works in progress — type T2',
  },
  343: {
    name: 'PRODUITS INTERMÉDIAIRES EN COURS',
    description: 'Semi-finished products in progress',
  },
  3431: {
    name: 'Produits intermédiaires A',
    description: 'Semi-finished products A in progress',
  },
  3432: {
    name: 'Produits intermédiaires B',
    description: 'Semi-finished products B in progress',
  },
  344: {
    name: 'PRODUITS RÉSIDUELS EN COURS',
    description: 'By-products and waste in progress',
  },
  3441: {
    name: 'Produits résiduels A',
    description: 'By-products A in progress',
  },
  3442: {
    name: 'Produits résiduels B',
    description: 'By-products B in progress',
  },

  35: {
    name: 'SERVICES EN COURS',
    description:
      'Services in progress (work performed but not yet billed)',
  },
  351: {
    name: 'ÉTUDES EN COURS',
    description: 'Studies / consulting projects in progress',
  },
  3511: {
    name: 'Études en cours E1',
    description: 'Studies in progress — type E1',
  },
  3512: {
    name: 'Études en cours E2',
    description: 'Studies in progress — type E2',
  },
  352: {
    name: 'PRESTATIONS DE SERVICES EN COURS',
    description: 'Service contracts in progress',
  },
  3521: {
    name: 'Prestations de services S1',
    description: 'Services in progress — type S1',
  },
  3522: {
    name: 'Prestations de services S2',
    description: 'Services in progress — type S2',
  },

  36: { name: 'PRODUITS FINIS', description: 'Finished goods' },
  361: {
    name: 'PRODUITS FINIS A',
    description: 'Finished goods — category A',
  },
  362: {
    name: 'PRODUITS FINIS B',
    description: 'Finished goods — category B',
  },

  37: {
    name: 'PRODUITS INTERMÉDIAIRES ET RÉSIDUELS',
    description: 'Semi-finished goods and by-products',
  },
  371: {
    name: 'PRODUITS INTERMÉDIAIRES',
    description: 'Semi-finished / intermediate products',
  },
  3711: {
    name: 'Produits intermédiaires A',
    description: 'Intermediate products — category A',
  },
  3712: {
    name: 'Produits intermédiaires B',
    description: 'Intermediate products — category B',
  },
  372: {
    name: 'PRODUITS RÉSIDUELS',
    description: 'By-products, waste and scrap',
  },
  3721: { name: 'Déchets', description: 'Waste materials' },
  3722: { name: 'Rebuts', description: 'Scrap / rejects' },
  3723: {
    name: 'Matières de Récupération',
    description: 'Recovered / recycled materials',
  },

  38: {
    name: 'STOCKS EN COURS DE ROUTE, EN CONSIGNATION OU EN DÉPÔT',
    description: 'Goods in transit, on consignment or in storage',
  },
  381: {
    name: 'MARCHANDISES EN COURS DE ROUTE',
    description: 'Merchandise in transit',
  },
  382: {
    name: 'MATIÈRES PREMIÈRES ET FOURNITURES LIÉES EN COURS DE ROUTE',
    description: 'Raw materials in transit',
  },
  383: {
    name: 'AUTRES APPROVISIONNEMENTS EN COURS DE ROUTE',
    description: 'Other supplies in transit',
  },
  386: {
    name: 'PRODUITS FINIS EN COURS DE ROUTE',
    description: 'Finished goods in transit',
  },
  387: {
    name: 'STOCK EN CONSIGNATION OU EN DÉPÔT',
    description: 'Stock on consignment or in storage',
  },
  3871: {
    name: 'Stock en consignation',
    description: 'Stock held on consignment',
  },
  3872: { name: 'Stock en dépôt', description: 'Stock held in storage' },
  388: {
    name: "STOCK PROVENANT D'IMMOBILISATIONS MISES HORS SERVICE OU AU REBUT",
    description:
      'Stock arising from decommissioned or scrapped fixed assets',
  },

  39: {
    name: 'DÉPRÉCIATIONS DES STOCKS',
    description: 'Impairment provisions on inventories',
  },
  391: {
    name: 'DÉPRÉCIATIONS DES STOCKS DE MARCHANDISES',
    description: 'Impairment — merchandise stocks',
  },
  392: {
    name: 'DÉPRÉCIATIONS DES STOCKS DE MATIÈRES PREMIÈRES ET FOURNITURES LIÉES',
    description: 'Impairment — raw materials and related supplies',
  },
  393: {
    name: "DÉPRÉCIATIONS DES STOCKS D'AUTRES APPROVISIONNEMENTS",
    description: 'Impairment — other supply stocks',
  },
  394: {
    name: 'DÉPRÉCIATIONS DES PRODUCTIONS EN COURS',
    description: 'Impairment — work in progress (products)',
  },
  395: {
    name: 'DÉPRÉCIATIONS DES SERVICES EN COURS',
    description: 'Impairment — services in progress',
  },
  396: {
    name: 'DÉPRÉCIATIONS DES STOCKS DE PRODUITS FINIS',
    description: 'Impairment — finished goods',
  },
  397: {
    name: 'DÉPRÉCIATIONS DES STOCKS DE PRODUITS INTERMÉDIAIRES ET RÉSIDUELS',
    description: 'Impairment — semi-finished goods and by-products',
  },
  398: {
    name: 'DÉPRÉCIATIONS DES STOCKS EN COURS DE ROUTE, EN CONSIGNATION OU EN DÉPÔT',
    description:
      'Impairment — stocks in transit, on consignment or in storage',
  },
} as const satisfies Plan;

export type Class3AccountCode = keyof typeof class3Accounts;
