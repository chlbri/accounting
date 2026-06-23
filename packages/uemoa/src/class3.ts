import type { Plan } from './types';

/**
 * SYSCOHADA — CLASS 3: Inventory / Stock Accounts
 * (Class 3: Inventory / Stock Accounts)
 *
 * Source: Official SYSCOHADA Chart of Accounts PDF, pages 20–23.
 */
export const class3Accounts = {
  31: {
    name: 'MERCHANDISE',
    description: 'Merchandise / goods for resale',
  },
  311: { name: 'MERCHANDISE A', description: 'Merchandise — category A' },
  3111: {
    name: 'Merchandise A1',
    description: 'Merchandise A — subcategory 1',
  },
  3112: {
    name: 'Merchandise A2',
    description: 'Merchandise A — subcategory 2',
  },
  312: { name: 'MERCHANDISE B', description: 'Merchandise — category B' },
  3121: {
    name: 'Merchandise B1',
    description: 'Merchandise B — subcategory 1',
  },
  3122: {
    name: 'Merchandise B2',
    description: 'Merchandise B — subcategory 2',
  },
  318: {
    name: 'MERCHANDISE HELD OUTSIDE ORDINARY ACTIVITIES (HAO)',
    description: 'Merchandise held outside ordinary activities (HAO)',
  },

  32: {
    name: 'RAW MATERIALS AND RELATED SUPPLIES',
    description: 'Raw materials and related supplies',
  },
  321: {
    name: 'RAW MATERIALS A',
    description: 'Raw materials — category A',
  },
  322: {
    name: 'RAW MATERIALS B',
    description: 'Raw materials — category B',
  },
  323: {
    name: 'SUPPLIES (A,B)',
    description: 'Supplies — categories A and B',
  },

  33: {
    name: 'OTHER SUPPLIES AND CONSUMABLES',
    description: 'Other supplies and consumables',
  },
  331: {
    name: 'CONSUMABLE MATERIALS',
    description: 'Consumable materials',
  },
  332: {
    name: "WORKSHOP AND FACTORY SUPPLIES D'ATELIER ET D'USINE",
    description: 'Workshop and factory supplies',
  },
  333: {
    name: 'STORE/WAREHOUSE SUPPLIES',
    description: 'Store/warehouse supplies',
  },
  334: { name: 'OFFICE SUPPLIES', description: 'Office supplies' },
  335: { name: 'PACKAGING MATERIALS', description: 'Packaging materials' },
  3351: {
    name: 'Non-returnable packaging',
    description: 'Non-returnable packaging',
  },
  3352: {
    name: 'Returnable non-individually-identifiable packaging',
    description: 'Returnable non-individually-identifiable packaging',
  },
  3353: {
    name: 'Mixed-use packaging',
    description: 'Mixed-use packaging',
  },
  3358: {
    name: 'Other packaging materials',
    description: 'Other packaging materials',
  },
  338: {
    name: 'OTHER MATERIALS AND SUPPLIES',
    description: 'Other materials and supplies',
  },

  34: {
    name: 'WORK IN PROGRESS',
    description: 'Work in progress — manufactured products',
  },
  341: {
    name: 'PRODUCTS IN PROGRESS',
    description: 'Products in progress',
  },
  3411: {
    name: 'Products in progress P1',
    description: 'Products in progress — type P1',
  },
  3412: {
    name: 'Products in progress P2',
    description: 'Products in progress — type P2',
  },
  342: {
    name: 'WORK IN PROGRESS',
    description: 'Work in progress — construction/services',
  },
  3421: {
    name: 'Works in progress T1',
    description: 'Works in progress — type T1',
  },
  3422: {
    name: 'Works in progress T2',
    description: 'Works in progress — type T2',
  },
  343: {
    name: 'SEMI-FINISHED PRODUCTS IN PROGRESS',
    description: 'Semi-finished products in progress',
  },
  3431: {
    name: 'Semi-finished products A in progress',
    description: 'Semi-finished products A in progress',
  },
  3432: {
    name: 'Semi-finished products B in progress',
    description: 'Semi-finished products B in progress',
  },
  344: {
    name: 'BY-PRODUCTS AND WASTE IN PROGRESS',
    description: 'By-products and waste in progress',
  },
  3441: {
    name: 'By-products A in progress',
    description: 'By-products A in progress',
  },
  3442: {
    name: 'By-products B in progress',
    description: 'By-products B in progress',
  },

  35: {
    name: 'SERVICES IN PROGRESS',
    description:
      'Services in progress (work performed but not yet billed)',
  },
  351: {
    name: 'STUDIES IN PROGRESS',
    description: 'Studies / consulting projects in progress',
  },
  3511: {
    name: 'Studies in progress E1',
    description: 'Studies in progress — type E1',
  },
  3512: {
    name: 'Studies in progress E2',
    description: 'Studies in progress — type E2',
  },
  352: {
    name: 'SERVICE CONTRACTS IN PROGRESS',
    description: 'Service contracts in progress',
  },
  3521: {
    name: 'Services in progress S1',
    description: 'Services in progress — type S1',
  },
  3522: {
    name: 'Services in progress S2',
    description: 'Services in progress — type S2',
  },

  36: { name: 'FINISHED GOODS', description: 'Finished goods' },
  361: {
    name: 'FINISHED GOODS A',
    description: 'Finished goods — category A',
  },
  362: {
    name: 'FINISHED GOODS B',
    description: 'Finished goods — category B',
  },

  37: {
    name: 'SEMI-FINISHED GOODS AND BY-PRODUCTS',
    description: 'Semi-finished goods and by-products',
  },
  371: {
    name: 'SEMI-FINISHED / INTERMEDIATE PRODUCTS',
    description: 'Semi-finished / intermediate products',
  },
  3711: {
    name: 'Intermediate products A',
    description: 'Intermediate products — category A',
  },
  3712: {
    name: 'Intermediate products B',
    description: 'Intermediate products — category B',
  },
  372: {
    name: 'BY-PRODUCTS, WASTE AND SCRAP',
    description: 'By-products, waste and scrap',
  },
  3721: { name: 'Waste materials', description: 'Waste materials' },
  3722: { name: 'Scrap / rejects', description: 'Scrap / rejects' },
  3723: {
    name: 'Recovered / recycled materials',
    description: 'Recovered / recycled materials',
  },

  38: {
    name: 'GOODS IN TRANSIT, ON CONSIGNMENT OR IN STORAGE',
    description: 'Goods in transit, on consignment or in storage',
  },
  381: {
    name: 'MERCHANDISE IN TRANSIT',
    description: 'Merchandise in transit',
  },
  382: {
    name: 'RAW MATERIALS IN TRANSIT',
    description: 'Raw materials in transit',
  },
  383: {
    name: 'OTHER SUPPLIES IN TRANSIT',
    description: 'Other supplies in transit',
  },
  386: {
    name: 'FINISHED GOODS IN TRANSIT',
    description: 'Finished goods in transit',
  },
  387: {
    name: 'STOCK ON CONSIGNMENT OR IN STORAGE',
    description: 'Stock on consignment or in storage',
  },
  3871: {
    name: 'Stock held on consignment',
    description: 'Stock held on consignment',
  },
  3872: {
    name: 'Stock held in storage',
    description: 'Stock held in storage',
  },
  388: {
    name: "STOCK ARISING FROM DECOMMISSIONED OR SCRAPPED FIXED ASSETS D'IMMOBILISATIONS MISES HORS SERVICE OU AU REBUT",
    description:
      'Stock arising from decommissioned or scrapped fixed assets',
  },

  39: {
    name: 'IMPAIRMENT PROVISIONS ON INVENTORIES',
    description: 'Impairment provisions on inventories',
  },
  391: {
    name: 'IMPAIRMENT',
    description: 'Impairment — merchandise stocks',
  },
  392: {
    name: 'IMPAIRMENT',
    description: 'Impairment — raw materials and related supplies',
  },
  393: {
    name: "IMPAIRMENT D'AUTRES APPROVISIONNEMENTS",
    description: 'Impairment — other supply stocks',
  },
  394: {
    name: 'IMPAIRMENT',
    description: 'Impairment — work in progress (products)',
  },
  395: {
    name: 'IMPAIRMENT',
    description: 'Impairment — services in progress',
  },
  396: {
    name: 'IMPAIRMENT',
    description: 'Impairment — finished goods',
  },
  397: {
    name: 'IMPAIRMENT',
    description: 'Impairment — semi-finished goods and by-products',
  },
  398: {
    name: 'IMPAIRMENT',
    description:
      'Impairment — stocks in transit, on consignment or in storage',
  },
} as const satisfies Plan;

export type Class3AccountCode = keyof typeof class3Accounts;
