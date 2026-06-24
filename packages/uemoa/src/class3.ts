import type { Plan } from './types';

/**
 * SYSCOHADA — CLASS 3: Inventory / Stock Accounts
 * (Class 3: Inventory / Stock Accounts)
 *
 * Source: Official SYSCOHADA Chart of Accounts PDF, pages 20–23.
 */
export const class3Accounts = {
  31: 'MERCHANDISE',
  311: 'MERCHANDISE A',
  3111: 'Merchandise A1',
  3112: 'Merchandise A2',
  312: 'MERCHANDISE B',
  3121: 'Merchandise B1',
  3122: 'Merchandise B2',
  318: 'MERCHANDISE HELD OUTSIDE ORDINARY ACTIVITIES (HAO)',

  32: 'RAW MATERIALS AND RELATED SUPPLIES',
  321: 'RAW MATERIALS A',
  322: 'RAW MATERIALS B',
  323: 'SUPPLIES (A,B)',

  33: 'OTHER SUPPLIES AND CONSUMABLES',
  331: 'CONSUMABLE MATERIALS',
  332: "WORKSHOP AND FACTORY SUPPLIES D'ATELIER ET D'USINE",
  333: 'STORE/WAREHOUSE SUPPLIES',
  334: 'OFFICE SUPPLIES',
  335: 'PACKAGING MATERIALS',
  3351: 'Non-returnable packaging',
  3352: 'Returnable non-individually-identifiable packaging',
  3353: 'Mixed-use packaging',
  3358: 'Other packaging materials',
  338: 'OTHER MATERIALS AND SUPPLIES',

  34: 'WORK IN PROGRESS',
  341: 'PRODUCTS IN PROGRESS',
  3411: 'Products in progress P1',
  3412: 'Products in progress P2',
  342: 'WORK IN PROGRESS',
  3421: 'Works in progress T1',
  3422: 'Works in progress T2',
  343: 'SEMI-FINISHED PRODUCTS IN PROGRESS',
  3431: 'Semi-finished products A in progress',
  3432: 'Semi-finished products B in progress',
  344: 'BY-PRODUCTS AND WASTE IN PROGRESS',
  3441: 'By-products A in progress',
  3442: 'By-products B in progress',

  35: 'SERVICES IN PROGRESS',
  351: 'STUDIES IN PROGRESS',
  3511: 'Studies in progress E1',
  3512: 'Studies in progress E2',
  352: 'SERVICE CONTRACTS IN PROGRESS',
  3521: 'Services in progress S1',
  3522: 'Services in progress S2',

  36: 'FINISHED GOODS',
  361: 'FINISHED GOODS A',
  362: 'FINISHED GOODS B',

  37: 'SEMI-FINISHED GOODS AND BY-PRODUCTS',
  371: 'SEMI-FINISHED / INTERMEDIATE PRODUCTS',
  3711: 'Intermediate products A',
  3712: 'Intermediate products B',
  372: 'BY-PRODUCTS, WASTE AND SCRAP',
  3721: 'Waste materials',
  3722: 'Scrap / rejects',
  3723: 'Recovered / recycled materials',

  38: 'GOODS IN TRANSIT, ON CONSIGNMENT OR IN STORAGE',
  381: 'MERCHANDISE IN TRANSIT',
  382: 'RAW MATERIALS IN TRANSIT',
  383: 'OTHER SUPPLIES IN TRANSIT',
  386: 'FINISHED GOODS IN TRANSIT',
  387: 'STOCK ON CONSIGNMENT OR IN STORAGE',
  3871: 'Stock held on consignment',
  3872: 'Stock held in storage',
  388: "STOCK ARISING FROM DECOMMISSIONED OR SCRAPPED FIXED ASSETS D'IMMOBILISATIONS MISES HORS SERVICE OU AU REBUT",

  39: 'IMPAIRMENT PROVISIONS ON INVENTORIES',
  391: 'IMPAIRMENT',
  392: 'IMPAIRMENT',
  393: "IMPAIRMENT D'AUTRES APPROVISIONNEMENTS",
  394: 'IMPAIRMENT',
  395: 'IMPAIRMENT',
  396: 'IMPAIRMENT',
  397: 'IMPAIRMENT',
  398: 'IMPAIRMENT',
} as const satisfies Plan;

export type Class3AccountCode = keyof typeof class3Accounts;
