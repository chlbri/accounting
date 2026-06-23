/**
 * SYSCOHADA — CLASS 6: Ordinary Activity Expense Accounts
 * (Class 6: Ordinary Activity Expense Accounts)
 *
 * Source: Official SYSCOHADA Chart of Accounts PDF, pages 33–40.
 */
import type { Plan } from './types';

export const class6Accounts = {
  // ────────── 60 PURCHASES AND INVENTORY MOVEMENTS ──────────
  60: {
    name: 'PURCHASES AND INVENTORY MOVEMENTS',
    description: 'Purchases and inventory movements',
  },
  601: {
    name: 'PURCHASES OF MERCHANDISE FOR RESALE',
    description: 'Purchases of merchandise for resale',
  },
  6011: {
    name: 'within the Region',
    description: 'Merchandise purchases within the UEMOA region',
  },
  6012: {
    name: 'outside the Region',
    description: 'Merchandise purchases outside the UEMOA region',
  },
  6013: {
    name: 'to group companies within the Region',
    description: 'Intra-group merchandise purchases within the region',
  },
  6014: {
    name: 'to group companies outside the Region',
    description: 'Intra-group merchandise purchases outside the region',
  },
  6019: {
    name: 'Purchase rebates and discounts on merchandise (unallocated)',
    description:
      'Purchase rebates and discounts on merchandise (unallocated)',
  },
  602: {
    name: 'PURCHASES OF RAW MATERIALS AND RELATED SUPPLIES',
    description: 'Purchases of raw materials and related supplies',
  },
  6021: {
    name: 'within the Region',
    description: 'Raw material purchases within the UEMOA region',
  },
  6022: {
    name: 'outside the Region',
    description: 'Raw material purchases outside the UEMOA region',
  },
  6023: {
    name: 'to group companies within the Region',
    description: 'Intra-group raw material purchases within the region',
  },
  6024: {
    name: 'to group companies outside the Region',
    description: 'Intra-group raw material purchases outside the region',
  },
  6029: {
    name: 'Purchase rebates and discounts on raw materials (unallocated)',
    description:
      'Purchase rebates and discounts on raw materials (unallocated)',
  },
  603: {
    name: 'CHANGE IN INVENTORIES OF PURCHASED GOODS (MERCHANDISE AND RAW MATERIALS)',
    description:
      'Change in inventories of purchased goods (merchandise and raw materials)',
  },
  6031: {
    name: 'Change in merchandise inventory',
    description: 'Change in merchandise inventory',
  },
  6032: {
    name: 'Change in raw material inventory',
    description: 'Change in raw material inventory',
  },
  6033: {
    name: "Change in other supply inventory'autres approvisionnements",
    description: 'Change in other supply inventory',
  },
  604: {
    name: 'PURCHASES OF CONSUMABLE MATERIALS AND SUPPLIES (HELD IN STOCK)',
    description:
      'Purchases of consumable materials and supplies (held in stock)',
  },
  6041: {
    name: 'Consumable materials purchased',
    description: 'Consumable materials purchased',
  },
  6042: {
    name: 'Fuel and combustible materials purchased',
    description: 'Fuel and combustible materials purchased',
  },
  6043: {
    name: "Cleaning and maintenance products purchased'entretien",
    description: 'Cleaning and maintenance products purchased',
  },
  6044: {
    name: "Workshop and factory supplies purchased'atelier et d'usine",
    description: 'Workshop and factory supplies purchased',
  },
  6046: {
    name: 'Store/warehouse supplies purchased',
    description: 'Store/warehouse supplies purchased',
  },
  6047: {
    name: 'Office supplies purchased',
    description: 'Office supplies purchased',
  },
  6049: {
    name: 'Purchase rebates on consumables (unallocated)',
    description: 'Purchase rebates on consumables (unallocated)',
  },
  605: {
    name: 'OTHER PURCHASES (NON-STOCK ITEMS AND SERVICES)',
    description: 'Other purchases (non-stock items and services)',
  },
  6051: {
    name: 'Non-stock supplies',
    description: 'Non-stock supplies — water',
  },
  6052: {
    name: 'Non-stock supplies',
    description: 'Non-stock supplies — electricity',
  },
  6053: {
    name: 'Non-stock supplies',
    description: 'Non-stock supplies — other energy sources',
  },
  6054: {
    name: "Non-stock maintenance supplies'entretien non stockables",
    description: 'Non-stock maintenance supplies',
  },
  6055: {
    name: 'Non-stock office supplies',
    description: 'Non-stock office supplies',
  },
  6056: {
    name: 'Small equipment and tools purchased (expensed)',
    description: 'Small equipment and tools purchased (expensed)',
  },
  6057: {
    name: "Purchases of studies and consulting services'études et prestations de services",
    description: 'Purchases of studies and consulting services',
  },
  6058: {
    name: 'Purchases of works, materials and equipment (expensed)',
    description: 'Purchases of works, materials and equipment (expensed)',
  },
  6059: {
    name: 'Purchase rebates on other purchases (unallocated)',
    description: 'Purchase rebates on other purchases (unallocated)',
  },
  608: {
    name: "PURCHASES OF PACKAGING MATERIALS D'EMBALLAGES",
    description: 'Purchases of packaging materials',
  },
  6081: {
    name: 'Non-returnable packaging purchased',
    description: 'Non-returnable packaging purchased',
  },
  6082: {
    name: 'Returnable non-identifiable packaging purchased',
    description: 'Returnable non-identifiable packaging purchased',
  },
  6083: {
    name: 'Mixed-use packaging purchased',
    description: 'Mixed-use packaging purchased',
  },
  6089: {
    name: 'Purchase rebates on packaging (unallocated)',
    description: 'Purchase rebates on packaging (unallocated)',
  },

  // ────────── 61 TRANSPORT EXPENSES ──────────
  61: { name: 'TRANSPORT EXPENSES', description: 'Transport expenses' },
  611: {
    name: 'INBOUND FREIGHT AND TRANSPORT ON PURCHASES',
    description: 'Inbound freight and transport on purchases',
  },
  612: {
    name: 'OUTBOUND FREIGHT AND TRANSPORT ON SALES',
    description: 'Outbound freight and transport on sales',
  },
  613: {
    name: 'TRANSPORT ON BEHALF OF THIRD PARTIES',
    description: 'Transport on behalf of third parties',
  },
  614: {
    name: 'EMPLOYEE TRANSPORT AND COMMUTING EXPENSES',
    description: 'Employee transport and commuting expenses',
  },
  616: {
    name: 'MAIL AND PARCEL DELIVERY EXPENSES',
    description: 'Mail and parcel delivery expenses',
  },
  618: {
    name: 'OTHER TRANSPORT EXPENSES',
    description: 'Other transport expenses',
  },
  6181: {
    name: 'Business travel and travel expenses',
    description: 'Business travel and travel expenses',
  },
  6182: {
    name: 'Transfers between branches or construction sites',
    description: 'Transfers between branches or construction sites',
  },
  6183: {
    name: 'Administrative transport expenses',
    description: 'Administrative transport expenses',
  },

  // ────────── 62 EXTERNAL SERVICES A ──────────
  62: {
    name: 'EXTERNAL SERVICES A',
    description:
      'External services — group A (facilities and contracted services)',
  },
  621: {
    name: 'GENERAL SUBCONTRACTING EXPENSES',
    description: 'General subcontracting expenses',
  },
  622: {
    name: 'RENT AND OCCUPANCY CHARGES',
    description: 'Rent and occupancy charges',
  },
  6221: {
    name: 'Land rental expenses',
    description: 'Land rental expenses',
  },
  6222: {
    name: 'Building and premises rental expenses',
    description: 'Building and premises rental expenses',
  },
  6223: {
    name: 'Equipment and tool rental expenses',
    description: 'Equipment and tool rental expenses',
  },
  6224: {
    name: 'Losses on packaging (unreturned packaging cost)',
    description: 'Losses on packaging (unreturned packaging cost)',
  },
  6225: {
    name: "Packaging rental charges'emballages",
    description: 'Packaging rental charges',
  },
  6228: {
    name: 'Miscellaneous rental and occupancy charges',
    description: 'Miscellaneous rental and occupancy charges',
  },
  623: {
    name: 'FINANCE LEASE RENTALS AND SIMILAR CONTRACT PAYMENTS',
    description: 'Finance lease rentals and similar contract payments',
  },
  6232: {
    name: 'Real estate finance lease payments',
    description: 'Real estate finance lease payments',
  },
  6233: {
    name: 'Movable asset finance lease payments',
    description: 'Movable asset finance lease payments',
  },
  6235: {
    name: 'Other similar contract payments',
    description: 'Other similar contract payments',
  },
  624: {
    name: 'MAINTENANCE, REPAIRS AND UPKEEP EXPENSES',
    description: 'Maintenance, repairs and upkeep expenses',
  },
  6241: {
    name: 'Real estate maintenance and repairs',
    description: 'Real estate maintenance and repairs',
  },
  6242: {
    name: 'Movable asset maintenance and repairs',
    description: 'Movable asset maintenance and repairs',
  },
  6243: {
    name: 'Maintenance contracts and services',
    description: 'Maintenance contracts and services',
  },
  6248: {
    name: 'Other maintenance and repair costs',
    description: 'Other maintenance and repair costs',
  },
  625: {
    name: "INSURANCE PREMIUMS D'ASSURANCE",
    description: 'Insurance premiums',
  },
  6251: {
    name: 'Multi-risk (comprehensive) insurance premiums',
    description: 'Multi-risk (comprehensive) insurance premiums',
  },
  6252: {
    name: 'Vehicle insurance premiums',
    description: 'Vehicle insurance premiums',
  },
  6253: {
    name: "Business risk insurance premiums'exploitation",
    description: 'Business risk insurance premiums',
  },
  6254: {
    name: 'Product liability insurance premiums',
    description: 'Product liability insurance premiums',
  },
  6255: {
    name: 'Trade credit / bad debt insurance premiums',
    description: 'Trade credit / bad debt insurance premiums',
  },
  6256: {
    name: 'Inbound transport insurance premiums',
    description: 'Inbound transport insurance premiums',
  },
  6257: {
    name: 'Outbound transport insurance premiums',
    description: 'Outbound transport insurance premiums',
  },
  6258: {
    name: "Other insurance premiums'assurances",
    description: 'Other insurance premiums',
  },
  626: {
    name: 'STUDIES, RESEARCH AND DOCUMENTATION EXPENSES',
    description: 'Studies, research and documentation expenses',
  },
  6261: {
    name: 'Research and feasibility study costs',
    description: 'Research and feasibility study costs',
  },
  6265: {
    name: 'General documentation and library costs',
    description: 'General documentation and library costs',
  },
  6266: {
    name: 'Technical documentation costs',
    description: 'Technical documentation costs',
  },
  627: {
    name: 'ADVERTISING, PUBLICATIONS AND PUBLIC RELATIONS',
    description: 'Advertising, publications and public relations',
  },
  6271: {
    name: 'Advertising placements and insertions',
    description: 'Advertising placements and insertions',
  },
  6272: {
    name: 'Catalogues and promotional printed materials',
    description: 'Catalogues and promotional printed materials',
  },
  6273: { name: 'Product samples', description: 'Product samples' },
  6274: {
    name: 'Trade fairs and exhibitions',
    description: 'Trade fairs and exhibitions',
  },
  6275: {
    name: 'Publications expenses',
    description: 'Publications expenses',
  },
  6276: { name: 'Client gifts', description: 'Client gifts' },
  6277: {
    name: 'Conference, seminar and symposium costs',
    description: 'Conference, seminar and symposium costs',
  },
  6278: {
    name: 'Other advertising and PR expenses',
    description: 'Other advertising and PR expenses',
  },
  628: {
    name: 'TELECOMMUNICATIONS EXPENSES',
    description: 'Telecommunications expenses',
  },
  6281: { name: 'Telephone expenses', description: 'Telephone expenses' },
  6282: { name: 'Telex expenses', description: 'Telex expenses' },
  6283: { name: 'Fax expenses', description: 'Fax expenses' },
  6288: {
    name: 'Other telecommunications expenses',
    description: 'Other telecommunications expenses',
  },

  // ────────── 63 EXTERNAL SERVICES B ──────────
  63: {
    name: 'EXTERNAL SERVICES B',
    description:
      'External services — group B (professional and administrative services)',
  },
  631: {
    name: 'BANK CHARGES AND FEES',
    description: 'Bank charges and fees',
  },
  6311: {
    name: 'Securities transaction fees (buy, sell, custody)',
    description: 'Securities transaction fees (buy, sell, custody)',
  },
  6312: {
    name: 'Bill of exchange handling charges',
    description: 'Bill of exchange handling charges',
  },
  6313: {
    name: 'Safe deposit box rental',
    description: 'Safe deposit box rental',
  },
  6315: {
    name: 'Credit card commission charges',
    description: 'Credit card commission charges',
  },
  6316: {
    name: "Bond issuance fees'émission d'emprunts",
    description: 'Bond issuance fees',
  },
  6318: {
    name: 'Other bank charges',
    description: 'Other bank charges',
  },
  632: {
    name: "FEES PAID TO INTERMEDIARIES AND ADVISORS D'INTERMÉDIAIRES ET DE CONSEILS",
    description: 'Fees paid to intermediaries and advisors',
  },
  6321: {
    name: 'Commission and brokerage on purchases',
    description: 'Commission and brokerage on purchases',
  },
  6322: {
    name: 'Commission and brokerage on sales',
    description: 'Commission and brokerage on sales',
  },
  6323: {
    name: 'Freight forwarder and customs agent fees',
    description: 'Freight forwarder and customs agent fees',
  },
  6324: {
    name: 'Professional fees',
    description: 'Professional fees (lawyers, accountants, etc.)',
  },
  6325: {
    name: "Legal document and litigation costs'actes et de contentieux",
    description: 'Legal document and litigation costs',
  },
  6328: {
    name: 'Miscellaneous fees',
    description: 'Miscellaneous intermediary fees',
  },
  633: {
    name: 'STAFF TRAINING AND DEVELOPMENT EXPENSES',
    description: 'Staff training and development expenses',
  },
  634: {
    name: 'ROYALTIES FOR PATENTS, LICENCES, SOFTWARE AND SIMILAR RIGHTS',
    description:
      'Royalties for patents, licences, software and similar rights',
  },
  6342: {
    name: 'Royalties for patents, licences and concessions',
    description: 'Royalties for patents, licences and concessions',
  },
  6343: {
    name: 'Software licence fees and royalties',
    description: 'Software licence fees and royalties',
  },
  6344: {
    name: 'Trademark royalties',
    description: 'Trademark royalties',
  },
  635: {
    name: 'MEMBERSHIP DUES AND PROFESSIONAL CONTRIBUTIONS',
    description: 'Membership dues and professional contributions',
  },
  6351: {
    name: 'Contributions',
    description: 'Professional association membership dues',
  },
  6358: {
    name: 'Various other contributions',
    description: 'Various other contributions',
  },
  637: {
    name: "FEES FOR TEMPORARY AND SECONDED EXTERNAL STAFF L'ENTREPRISE",
    description: 'Fees for temporary and seconded external staff',
  },
  6371: {
    name: 'Temporary staff',
    description: 'Temporary / agency staff costs',
  },
  6372: {
    name: "Seconded or loaned staff costs'entreprise",
    description: 'Seconded or loaned staff costs',
  },
  638: {
    name: 'OTHER EXTERNAL CHARGES',
    description: 'Other external charges',
  },
  6381: {
    name: 'Staff recruitment costs',
    description: 'Staff recruitment costs',
  },
  6382: {
    name: 'Removal and relocation costs',
    description: 'Removal and relocation costs',
  },
  6383: {
    name: 'Receptions',
    description: 'Entertainment and reception expenses',
  },
  6384: {
    name: 'Missions',
    description: 'Business mission and assignment expenses',
  },

  // ────────── 64 TAXES AND DUTIES ──────────
  64: {
    name: 'TAXES AND DUTIES',
    description: 'Taxes, duties and levies (excluding income tax)',
  },
  641: {
    name: 'DIRECT TAXES AND DUTIES',
    description: 'Direct taxes and duties',
  },
  6411: {
    name: 'Property taxes and related levies',
    description: 'Property taxes and related levies',
  },
  6412: {
    name: 'Business licences (patente) and related taxes',
    description: 'Business licences (patente) and related taxes',
  },
  6413: {
    name: 'Payroll and salary taxes',
    description: 'Payroll and salary taxes',
  },
  6414: {
    name: "Apprenticeship levy'apprentissage",
    description: 'Apprenticeship levy',
  },
  6415: {
    name: 'Continuing professional training levy',
    description: 'Continuing professional training levy',
  },
  6418: {
    name: 'Other direct taxes',
    description: 'Other direct taxes',
  },
  645: {
    name: 'INDIRECT TAXES AND DUTIES',
    description: 'Indirect taxes and duties',
  },
  646: {
    name: "REGISTRATION DUTIES AND STAMP TAXES D'ENREGISTREMENT",
    description: 'Registration duties and stamp taxes',
  },
  6461: {
    name: 'Transfer / conveyance duties',
    description: 'Transfer / conveyance duties',
  },
  6462: { name: 'Stamp duties', description: 'Stamp duties' },
  6463: {
    name: 'Company vehicle tax',
    description: 'Company vehicle tax',
  },
  6464: {
    name: 'Road tax stickers',
    description: 'Vehicle registration stickers / road tax',
  },
  6468: {
    name: 'Other registration duties',
    description: 'Other registration duties',
  },
  647: {
    name: 'TAX PENALTIES AND FINES',
    description: 'Tax penalties and fines',
  },
  6471: {
    name: "Assessment penalties'assiette, impôts directs",
    description: 'Assessment penalties — direct taxes',
  },
  6472: {
    name: "Assessment penalties'assiette, impôts indirects",
    description: 'Assessment penalties — indirect taxes',
  },
  6473: {
    name: 'Collection penalties',
    description: 'Collection penalties — direct taxes',
  },
  6474: {
    name: 'Collection penalties',
    description: 'Collection penalties — indirect taxes',
  },
  6478: {
    name: 'Other tax and criminal fines',
    description: 'Other tax and criminal fines',
  },
  648: {
    name: 'OTHER TAXES AND LEVIES',
    description: 'Other taxes and levies',
  },

  // ────────── 65 OTHER OPERATING CHARGES ──────────
  65: { name: 'OTHER CHARGES', description: 'Other operating charges' },
  651: {
    name: 'LOSSES ON WRITE-OFF OF CUSTOMER AND OTHER RECEIVABLES',
    description: 'Losses on write-off of customer and other receivables',
  },
  6511: {
    name: 'Customers',
    description: 'Write-off of irrecoverable customer receivables',
  },
  6515: {
    name: 'Other debtors',
    description: 'Write-off of irrecoverable other receivables',
  },
  652: {
    name: 'SHARE OF RESULT ON JOINT VENTURE TRANSACTIONS',
    description: 'Share of result on joint venture transactions',
  },
  6521: {
    name: 'Share of profits transferred',
    description: 'Share of profits transferred — manager accounting',
  },
  6525: {
    name: 'Losses allocated by transfer',
    description:
      'Losses allocated by transfer — non-managing partners accounting',
  },
  653: {
    name: 'RESULT REVERSAL ON PARTIAL COMPLETION OF MULTI-YEAR CONTRACTS',
    description:
      'Result reversal on partial completion of multi-year contracts',
  },
  654: {
    name: "NET BOOK VALUE OF FIXED ASSETS SOLD IN ORDINARY COURSE OF BUSINESS D'IMMOBILISATIONS",
    description:
      'Net book value of fixed assets sold in ordinary course of business',
  },
  658: {
    name: 'MISCELLANEOUS OTHER CHARGES',
    description: 'Miscellaneous other charges',
  },
  6581: {
    name: "Directors fees and other board remuneration'administrateurs",
    description: 'Directors fees and other board remuneration',
  },
  6582: { name: 'Donations', description: 'Charitable donations' },
  6583: {
    name: 'Sponsorship',
    description: 'Corporate sponsorship and patronage',
  },
  659: {
    name: "SHORT-TERM OPERATING RISK PROVISIONS (CHARGE) D'EXPLOITATION",
    description: 'Short-term operating risk provisions (charge)',
  },
  6591: {
    name: 'Short-term operating risk provisions charged',
    description: 'Short-term operating risk provisions charged',
  },
  6593: {
    name: 'on inventory',
    description: 'Stock impairment provisions charged',
  },
  6594: {
    name: 'on receivables',
    description: 'Receivable impairment provisions charged',
  },
  6598: {
    name: 'Other provisions charged',
    description: 'Other provisions charged',
  },

  // ────────── 66 PERSONNEL EXPENSES ──────────
  66: {
    name: 'PERSONNEL EXPENSES',
    description: 'Employee costs — wages, salaries and related charges',
  },
  661: {
    name: 'DIRECT REMUNERATION PAID TO LOCAL (NATIONAL) STAFF',
    description: 'Direct remuneration paid to local (national) staff',
  },
  6611: {
    name: 'Salaries, wages and commissions',
    description: 'Salaries, wages and commissions — national staff',
  },
  6612: {
    name: 'Bonuses and performance awards',
    description: 'Bonuses and performance awards — national staff',
  },
  6613: {
    name: 'Paid leave',
    description: 'Paid leave — national staff',
  },
  6614: {
    name: "Notice, redundancy and job-search allowances'embauche",
    description:
      'Notice, redundancy and job-search allowances — national staff',
  },
  6615: {
    name: 'Sickness allowances paid',
    description: 'Sickness allowances paid — national staff',
  },
  6616: {
    name: 'Family supplement allowance',
    description: 'Family supplement allowance — national staff',
  },
  6617: {
    name: 'Benefits in kind',
    description: 'Benefits in kind — national staff',
  },
  6618: {
    name: 'Other direct remuneration',
    description: 'Other direct remuneration — national staff',
  },
  662: {
    name: 'DIRECT REMUNERATION PAID TO EXPATRIATE STAFF',
    description: 'Direct remuneration paid to expatriate staff',
  },
  6621: {
    name: 'Salaries, wages and commissions',
    description: 'Salaries, wages and commissions — expatriate staff',
  },
  6622: {
    name: 'Bonuses and performance awards',
    description: 'Bonuses and performance awards — expatriate staff',
  },
  6623: {
    name: 'Paid leave',
    description: 'Paid leave — expatriate staff',
  },
  6624: {
    name: "Notice, redundancy and job-search allowances'embauche",
    description:
      'Notice, redundancy and job-search allowances — expatriate staff',
  },
  6625: {
    name: 'Sickness allowances paid',
    description: 'Sickness allowances paid — expatriate staff',
  },
  6626: {
    name: 'Family supplement allowance',
    description: 'Family supplement allowance — expatriate staff',
  },
  6627: {
    name: 'Benefits in kind',
    description: 'Benefits in kind — expatriate staff',
  },
  6628: {
    name: 'Other direct remuneration',
    description: 'Other direct remuneration — expatriate staff',
  },
  663: {
    name: 'LUMP-SUM ALLOWANCES PAID TO STAFF',
    description: 'Lump-sum allowances paid to staff',
  },
  6631: {
    name: 'Housing allowances',
    description: 'Housing allowances',
  },
  6632: {
    name: 'Representation / entertainment allowances',
    description: 'Representation / entertainment allowances',
  },
  6633: {
    name: "Expatriation allowances'expatriation",
    description: 'Expatriation allowances',
  },
  6638: {
    name: 'Other allowances and benefits',
    description: 'Other allowances and benefits',
  },
  664: {
    name: 'EMPLOYER SOCIAL SECURITY AND SOCIAL CHARGES',
    description: 'Employer social security and social charges',
  },
  6641: {
    name: 'Social charges on national staff remuneration',
    description: 'Social charges on national staff remuneration',
  },
  6642: {
    name: 'Social charges on expatriate staff remuneration',
    description: 'Social charges on expatriate staff remuneration',
  },
  666: {
    name: "SOLE TRADER L'EXPLOITANT INDIVIDUEL",
    description: "Sole trader's own remuneration and social charges",
  },
  6661: {
    name: "Sole trader'exploitant",
    description: "Sole trader's notional labour remuneration",
  },
  6662: {
    name: 'Sole trader',
    description: "Sole trader's social charges",
  },
  667: {
    name: 'COST TRANSFER FOR EXTERNAL STAFF (TEMPORARY AND SECONDED)',
    description:
      'Cost transfer for external staff (temporary and seconded)',
  },
  6671: {
    name: 'Temporary staff',
    description: 'Temporary staff cost transferred',
  },
  6672: {
    name: "Seconded staff cost transferred'entreprise",
    description: 'Seconded staff cost transferred',
  },
  668: {
    name: 'OTHER EMPLOYEE-RELATED SOCIAL EXPENSES',
    description: 'Other employee-related social expenses',
  },
  6681: {
    name: "Payments to trade unions and works councils'entreprise, d'établissement",
    description: 'Payments to trade unions and works councils',
  },
  6682: {
    name: "Payments to health and safety committees'hygiène et de sécurité",
    description: 'Payments to health and safety committees',
  },
  6683: {
    name: 'Payments to other social welfare programs',
    description: 'Payments to other social welfare programs',
  },
  6684: {
    name: 'Occupational health and pharmacy costs',
    description: 'Occupational health and pharmacy costs',
  },

  // ────────── 67 FINANCIAL EXPENSES AND EQUIVALENT ──────────
  67: {
    name: 'FINANCE COSTS AND SIMILAR CHARGES',
    description: 'Finance costs and similar charges',
  },
  671: {
    name: 'INTEREST EXPENSE ON BORROWINGS',
    description: 'Interest expense on borrowings',
  },
  6711: {
    name: 'Interest on bond loans',
    description: 'Interest on bond loans',
  },
  6712: {
    name: 'Interest on bank loans',
    description: 'Interest on bank loans',
  },
  6713: {
    name: 'Interest on participation-related debts',
    description: 'Interest on participation-related debts',
  },
  672: {
    name: 'FINANCE CHARGES WITHIN LEASE RENTALS',
    description: 'Finance charges within lease rentals',
  },
  6721: {
    name: 'Finance charges in real estate lease rentals',
    description: 'Finance charges in real estate lease rentals',
  },
  6722: {
    name: 'Finance charges in movable asset lease rentals',
    description: 'Finance charges in movable asset lease rentals',
  },
  6723: {
    name: 'Finance charges in other lease rentals',
    description: 'Finance charges in other lease rentals',
  },
  673: {
    name: 'SETTLEMENT DISCOUNTS GRANTED TO CUSTOMERS',
    description: 'Settlement discounts granted to customers',
  },
  674: {
    name: 'OTHER INTEREST EXPENSES',
    description: 'Other interest expenses',
  },
  6741: {
    name: 'Interest on advances received and credit deposits',
    description: 'Interest on advances received and credit deposits',
  },
  6742: {
    name: 'Interest on blocked current accounts',
    description: 'Interest on blocked current accounts',
  },
  6743: {
    name: 'Interest on guaranteed/secured debt obligations',
    description: 'Interest on guaranteed/secured debt obligations',
  },
  6744: {
    name: 'Late payment interest on trade payables',
    description: 'Late payment interest on trade payables',
  },
  6745: {
    name: "Bank interest and treasury/discounting charges'escompte",
    description: 'Bank interest and treasury/discounting charges',
  },
  6748: {
    name: 'Interest on miscellaneous debts',
    description: 'Interest on miscellaneous debts',
  },
  675: {
    name: 'BILL DISCOUNTING CHARGES (DISCOUNT ON COMMERCIAL PAPER)',
    description: 'Bill discounting charges (discount on commercial paper)',
  },
  676: {
    name: 'FOREIGN EXCHANGE LOSSES',
    description: 'Foreign exchange losses',
  },
  677: {
    name: 'LOSSES ON DISPOSAL OF SHORT-TERM INVESTMENT SECURITIES',
    description: 'Losses on disposal of short-term investment securities',
  },
  678: {
    name: 'LOSSES ON FINANCIAL RISKS',
    description: 'Losses on financial risks',
  },
  6781: {
    name: 'Losses on life annuity financial risks',
    description: 'Losses on life annuity financial risks',
  },
  6782: {
    name: 'Losses on financial operations',
    description: 'Losses on financial operations',
  },
  6784: {
    name: 'Losses on treasury/derivative instruments',
    description: 'Losses on treasury/derivative instruments',
  },
  679: {
    name: 'FINANCIAL RISK PROVISIONS (CHARGE)',
    description: 'Financial risk provisions (charge)',
  },
  6791: {
    name: 'Provisions for financial risks charged',
    description: 'Provisions for financial risks charged',
  },
  6795: {
    name: 'Provisions for investment securities impairment charged',
    description: 'Provisions for investment securities impairment charged',
  },
  6798: {
    name: 'Other financial provisions charged',
    description: 'Other financial provisions charged',
  },

  // ────────── 68 DEPRECIATION EXPENSES ──────────
  68: {
    name: 'DEPRECIATION AND AMORTISATION CHARGES',
    description: 'Depreciation and amortisation charges',
  },
  681: {
    name: "OPERATING DEPRECIATION AND AMORTISATION CHARGES D'EXPLOITATION",
    description: 'Operating depreciation and amortisation charges',
  },
  6811: {
    name: 'Amortisation of deferred charges',
    description: 'Amortisation of deferred charges',
  },
  6812: {
    name: 'Amortisation of intangible assets',
    description: 'Amortisation of intangible assets',
  },
  6813: {
    name: 'Depreciation of tangible fixed assets',
    description: 'Depreciation of tangible fixed assets',
  },
  687: {
    name: 'FINANCIAL DEPRECIATION CHARGES',
    description: 'Financial depreciation charges',
  },
  6872: {
    name: 'Amortisation of bond redemption premiums',
    description: 'Amortisation of bond redemption premiums',
  },
  6878: {
    name: 'Other financial amortisation charges',
    description: 'Other financial amortisation charges',
  },

  // ────────── 69 PROVISION EXPENSES ──────────
  69: {
    name: 'PROVISIONS CHARGED (INCREASE IN PROVISIONS)',
    description: 'Provisions charged (increase in provisions)',
  },
  691: {
    name: "OPERATING PROVISIONS CHARGED D'EXPLOITATION",
    description: 'Operating provisions charged',
  },
  6911: {
    name: 'Operating provisions for risks and charges',
    description: 'Operating provisions for risks and charges',
  },
  6912: {
    name: 'Provisions for major repairs',
    description: 'Provisions for major repairs',
  },
  6913: {
    name: 'Impairment provisions on intangible assets',
    description: 'Impairment provisions on intangible assets',
  },
  6914: {
    name: 'Impairment provisions on tangible assets',
    description: 'Impairment provisions on tangible assets',
  },
  697: {
    name: 'FINANCIAL PROVISIONS CHARGED',
    description: 'Financial provisions charged',
  },
  6971: {
    name: 'Financial provisions for risks and charges',
    description: 'Financial provisions for risks and charges',
  },
  6972: {
    name: 'Impairment provisions on financial assets',
    description: 'Impairment provisions on financial assets',
  },
} as const satisfies Plan;

export type Class6AccountCode = keyof typeof class6Accounts;
