/**
 * SYSCOHADA — CLASSE 6 : Comptes de charges des activités ordinaires
 * (Class 6: Ordinary Activity Expense Accounts)
 *
 * Source: Official SYSCOHADA Chart of Accounts PDF, pages 33–40.
 */
import type { Plan } from './types';

export const class6Accounts = {
  // ────────── 60 ACHATS ET VARIATIONS DE STOCKS ──────────
  60: {
    name: 'ACHATS ET VARIATIONS DE STOCKS',
    description: 'Purchases and inventory movements',
  },
  601: {
    name: 'ACHATS DE MARCHANDISES',
    description: 'Purchases of merchandise for resale',
  },
  6011: {
    name: 'dans la Région',
    description: 'Merchandise purchases within the UEMOA region',
  },
  6012: {
    name: 'hors Région',
    description: 'Merchandise purchases outside the UEMOA region',
  },
  6013: {
    name: 'aux entreprises du groupe dans la Région',
    description: 'Intra-group merchandise purchases within the region',
  },
  6014: {
    name: 'aux entreprises du groupe hors Région',
    description: 'Intra-group merchandise purchases outside the region',
  },
  6019: {
    name: 'Rabais, Remises et Ristournes obtenus (non ventilés)',
    description:
      'Purchase rebates and discounts on merchandise (unallocated)',
  },
  602: {
    name: 'ACHATS DE MATIÈRES PREMIÈRES ET FOURNITURES LIÉES',
    description: 'Purchases of raw materials and related supplies',
  },
  6021: {
    name: 'dans la Région',
    description: 'Raw material purchases within the UEMOA region',
  },
  6022: {
    name: 'hors Région',
    description: 'Raw material purchases outside the UEMOA region',
  },
  6023: {
    name: 'aux entreprises du groupe dans la Région',
    description: 'Intra-group raw material purchases within the region',
  },
  6024: {
    name: 'aux entreprises du groupe hors Région',
    description: 'Intra-group raw material purchases outside the region',
  },
  6029: {
    name: 'Rabais, Remises et Ristournes obtenus (non ventilés)',
    description:
      'Purchase rebates and discounts on raw materials (unallocated)',
  },
  603: {
    name: 'VARIATIONS DES STOCKS DE BIENS ACHETÉS',
    description:
      'Change in inventories of purchased goods (merchandise and raw materials)',
  },
  6031: {
    name: 'Variations des stocks de marchandises',
    description: 'Change in merchandise inventory',
  },
  6032: {
    name: 'Variations des stocks de matières premières et fournitures liées',
    description: 'Change in raw material inventory',
  },
  6033: {
    name: "Variations des stocks d'autres approvisionnements",
    description: 'Change in other supply inventory',
  },
  604: {
    name: 'ACHATS STOCKÉS DE MATIÈRES ET FOURNITURES CONSOMMABLES',
    description:
      'Purchases of consumable materials and supplies (held in stock)',
  },
  6041: {
    name: 'Matières consommables',
    description: 'Consumable materials purchased',
  },
  6042: {
    name: 'Matières combustibles',
    description: 'Fuel and combustible materials purchased',
  },
  6043: {
    name: "Produits d'entretien",
    description: 'Cleaning and maintenance products purchased',
  },
  6044: {
    name: "Fournitures d'atelier et d'usine",
    description: 'Workshop and factory supplies purchased',
  },
  6046: {
    name: 'Fournitures de magasin',
    description: 'Store/warehouse supplies purchased',
  },
  6047: {
    name: 'Fournitures de bureau',
    description: 'Office supplies purchased',
  },
  6049: {
    name: 'Rabais, Remises et Ristournes obtenus (non ventilés)',
    description: 'Purchase rebates on consumables (unallocated)',
  },
  605: {
    name: 'AUTRES ACHATS',
    description: 'Other purchases (non-stock items and services)',
  },
  6051: {
    name: 'Fournitures non stockables — Eau',
    description: 'Non-stock supplies — water',
  },
  6052: {
    name: 'Fournitures non stockables — Électricité',
    description: 'Non-stock supplies — electricity',
  },
  6053: {
    name: 'Fournitures non stockables – Autres énergies',
    description: 'Non-stock supplies — other energy sources',
  },
  6054: {
    name: "Fournitures d'entretien non stockables",
    description: 'Non-stock maintenance supplies',
  },
  6055: {
    name: 'Fournitures de bureau non stockables',
    description: 'Non-stock office supplies',
  },
  6056: {
    name: 'Achats de petit matériel et outillage',
    description: 'Small equipment and tools purchased (expensed)',
  },
  6057: {
    name: "Achats d'études et prestations de services",
    description: 'Purchases of studies and consulting services',
  },
  6058: {
    name: 'Achats de travaux, matériels et équipements',
    description: 'Purchases of works, materials and equipment (expensed)',
  },
  6059: {
    name: 'Rabais, Remises et Ristournes obtenus (non ventilés)',
    description: 'Purchase rebates on other purchases (unallocated)',
  },
  608: {
    name: "ACHATS D'EMBALLAGES",
    description: 'Purchases of packaging materials',
  },
  6081: {
    name: 'Emballages perdus',
    description: 'Non-returnable packaging purchased',
  },
  6082: {
    name: 'Emballages récupérables non identifiables',
    description: 'Returnable non-identifiable packaging purchased',
  },
  6083: {
    name: 'Emballages à usage mixte',
    description: 'Mixed-use packaging purchased',
  },
  6089: {
    name: 'Rabais, Remises et Ristournes obtenus (non ventilés)',
    description: 'Purchase rebates on packaging (unallocated)',
  },

  // ────────── 61 TRANSPORTS ──────────
  61: { name: 'TRANSPORTS', description: 'Transport expenses' },
  611: {
    name: 'TRANSPORTS SUR ACHATS',
    description: 'Inbound freight and transport on purchases',
  },
  612: {
    name: 'TRANSPORTS SUR VENTES',
    description: 'Outbound freight and transport on sales',
  },
  613: {
    name: 'TRANSPORTS POUR LE COMPTE DE TIERS',
    description: 'Transport on behalf of third parties',
  },
  614: {
    name: 'TRANSPORTS DU PERSONNEL',
    description: 'Employee transport and commuting expenses',
  },
  616: {
    name: 'TRANSPORTS DE PLIS',
    description: 'Mail and parcel delivery expenses',
  },
  618: {
    name: 'AUTRES FRAIS DE TRANSPORT',
    description: 'Other transport expenses',
  },
  6181: {
    name: 'Voyages et déplacements',
    description: 'Business travel and travel expenses',
  },
  6182: {
    name: 'Transports entre établissements ou chantiers',
    description: 'Transfers between branches or construction sites',
  },
  6183: {
    name: 'Transports administratifs',
    description: 'Administrative transport expenses',
  },

  // ────────── 62 SERVICES EXTÉRIEURS A ──────────
  62: {
    name: 'SERVICES EXTÉRIEURS A',
    description:
      'External services — group A (facilities and contracted services)',
  },
  621: {
    name: 'SOUS-TRAITANCE GÉNÉRALE',
    description: 'General subcontracting expenses',
  },
  622: {
    name: 'LOCATIONS ET CHARGES LOCATIVES',
    description: 'Rent and occupancy charges',
  },
  6221: {
    name: 'Locations de terrains',
    description: 'Land rental expenses',
  },
  6222: {
    name: 'Locations de bâtiments',
    description: 'Building and premises rental expenses',
  },
  6223: {
    name: 'Locations de matériels et outillages',
    description: 'Equipment and tool rental expenses',
  },
  6224: {
    name: 'Malis sur emballages',
    description: 'Losses on packaging (unreturned packaging cost)',
  },
  6225: {
    name: "Locations d'emballages",
    description: 'Packaging rental charges',
  },
  6228: {
    name: 'Locations et charges locatives diverses',
    description: 'Miscellaneous rental and occupancy charges',
  },
  623: {
    name: 'REDEVANCES DE CRÉDIT-BAIL ET CONTRATS ASSIMILÉS',
    description: 'Finance lease rentals and similar contract payments',
  },
  6232: {
    name: 'Crédit-bail immobilier',
    description: 'Real estate finance lease payments',
  },
  6233: {
    name: 'Crédit-bail mobilier',
    description: 'Movable asset finance lease payments',
  },
  6235: {
    name: 'Contrats assimilés',
    description: 'Other similar contract payments',
  },
  624: {
    name: 'ENTRETIEN, RÉPARATIONS ET MAINTENANCE',
    description: 'Maintenance, repairs and upkeep expenses',
  },
  6241: {
    name: 'Entretien et réparations des biens immobiliers',
    description: 'Real estate maintenance and repairs',
  },
  6242: {
    name: 'Entretien et réparations des biens mobiliers',
    description: 'Movable asset maintenance and repairs',
  },
  6243: {
    name: 'Maintenance',
    description: 'Maintenance contracts and services',
  },
  6248: {
    name: 'Autres entretiens et réparations',
    description: 'Other maintenance and repair costs',
  },
  625: { name: "PRIMES D'ASSURANCE", description: 'Insurance premiums' },
  6251: {
    name: 'Assurances multirisques',
    description: 'Multi-risk (comprehensive) insurance premiums',
  },
  6252: {
    name: 'Assurances matériel de transport',
    description: 'Vehicle insurance premiums',
  },
  6253: {
    name: "Assurances risques d'exploitation",
    description: 'Business risk insurance premiums',
  },
  6254: {
    name: 'Assurances responsabilité du producteur',
    description: 'Product liability insurance premiums',
  },
  6255: {
    name: 'Assurances insolvabilité clients',
    description: 'Trade credit / bad debt insurance premiums',
  },
  6256: {
    name: 'Assurances transport sur achats',
    description: 'Inbound transport insurance premiums',
  },
  6257: {
    name: 'Assurances transport sur ventes',
    description: 'Outbound transport insurance premiums',
  },
  6258: {
    name: "Autres primes d'assurances",
    description: 'Other insurance premiums',
  },
  626: {
    name: 'ÉTUDES, RECHERCHES ET DOCUMENTATION',
    description: 'Studies, research and documentation expenses',
  },
  6261: {
    name: 'Études et recherches',
    description: 'Research and feasibility study costs',
  },
  6265: {
    name: 'Documentation générale',
    description: 'General documentation and library costs',
  },
  6266: {
    name: 'Documentation technique',
    description: 'Technical documentation costs',
  },
  627: {
    name: 'PUBLICITÉ, PUBLICATIONS, RELATIONS PUBLIQUES',
    description: 'Advertising, publications and public relations',
  },
  6271: {
    name: 'Annonces, insertions',
    description: 'Advertising placements and insertions',
  },
  6272: {
    name: 'Catalogues, imprimés publicitaires',
    description: 'Catalogues and promotional printed materials',
  },
  6273: { name: 'Échantillons', description: 'Product samples' },
  6274: {
    name: 'Foires et expositions',
    description: 'Trade fairs and exhibitions',
  },
  6275: { name: 'Publications', description: 'Publications expenses' },
  6276: { name: 'Cadeaux à la clientèle', description: 'Client gifts' },
  6277: {
    name: 'Frais de colloques, séminaires, conférences',
    description: 'Conference, seminar and symposium costs',
  },
  6278: {
    name: 'Autres charges de publicité et relations publiques',
    description: 'Other advertising and PR expenses',
  },
  628: {
    name: 'FRAIS DE TÉLÉCOMMUNICATIONS',
    description: 'Telecommunications expenses',
  },
  6281: { name: 'Frais de téléphone', description: 'Telephone expenses' },
  6282: { name: 'Frais de télex', description: 'Telex expenses' },
  6283: { name: 'Frais de télécopie', description: 'Fax expenses' },
  6288: {
    name: 'Autres frais de télécommunications',
    description: 'Other telecommunications expenses',
  },

  // ────────── 63 SERVICES EXTÉRIEURS B ──────────
  63: {
    name: 'SERVICES EXTÉRIEURS B',
    description:
      'External services — group B (professional and administrative services)',
  },
  631: { name: 'FRAIS BANCAIRES', description: 'Bank charges and fees' },
  6311: {
    name: 'Frais sur titres (achat, vente, garde)',
    description: 'Securities transaction fees (buy, sell, custody)',
  },
  6312: {
    name: 'Frais sur effets',
    description: 'Bill of exchange handling charges',
  },
  6313: {
    name: 'Location de coffres',
    description: 'Safe deposit box rental',
  },
  6315: {
    name: 'Commissions sur cartes de crédit',
    description: 'Credit card commission charges',
  },
  6316: {
    name: "Frais d'émission d'emprunts",
    description: 'Bond issuance fees',
  },
  6318: {
    name: 'Autres frais bancaires',
    description: 'Other bank charges',
  },
  632: {
    name: "RÉMUNÉRATIONS D'INTERMÉDIAIRES ET DE CONSEILS",
    description: 'Fees paid to intermediaries and advisors',
  },
  6321: {
    name: 'Commissions et courtages sur achats',
    description: 'Commission and brokerage on purchases',
  },
  6322: {
    name: 'Commissions et courtages sur ventes',
    description: 'Commission and brokerage on sales',
  },
  6323: {
    name: 'Rémunérations des transitaires',
    description: 'Freight forwarder and customs agent fees',
  },
  6324: {
    name: 'Honoraires',
    description: 'Professional fees (lawyers, accountants, etc.)',
  },
  6325: {
    name: "Frais d'actes et de contentieux",
    description: 'Legal document and litigation costs',
  },
  6328: {
    name: 'Divers frais',
    description: 'Miscellaneous intermediary fees',
  },
  633: {
    name: 'FRAIS DE FORMATION DU PERSONNEL',
    description: 'Staff training and development expenses',
  },
  634: {
    name: 'REDEVANCES POUR BREVETS, LICENCES, LOGICIELS ET DROITS SIMILAIRES',
    description:
      'Royalties for patents, licences, software and similar rights',
  },
  6342: {
    name: 'Redevances pour brevets, licences, concessions et droits similaires',
    description: 'Royalties for patents, licences and concessions',
  },
  6343: {
    name: 'Redevances pour logiciels',
    description: 'Software licence fees and royalties',
  },
  6344: {
    name: 'Redevances pour marques',
    description: 'Trademark royalties',
  },
  635: {
    name: 'COTISATIONS',
    description: 'Membership dues and professional contributions',
  },
  6351: {
    name: 'Cotisations',
    description: 'Professional association membership dues',
  },
  6358: {
    name: 'Concours divers',
    description: 'Various other contributions',
  },
  637: {
    name: "RÉMUNÉRATIONS DE PERSONNEL EXTÉRIEUR À L'ENTREPRISE",
    description: 'Fees for temporary and seconded external staff',
  },
  6371: {
    name: 'Personnel intérimaire',
    description: 'Temporary / agency staff costs',
  },
  6372: {
    name: "Personnel détaché ou prêté à l'entreprise",
    description: 'Seconded or loaned staff costs',
  },
  638: {
    name: 'AUTRES CHARGES EXTERNES',
    description: 'Other external charges',
  },
  6381: {
    name: 'Frais de recrutement du personnel',
    description: 'Staff recruitment costs',
  },
  6382: {
    name: 'Frais de déménagement',
    description: 'Removal and relocation costs',
  },
  6383: {
    name: 'Réceptions',
    description: 'Entertainment and reception expenses',
  },
  6384: {
    name: 'Missions',
    description: 'Business mission and assignment expenses',
  },

  // ────────── 64 IMPÔTS ET TAXES ──────────
  64: {
    name: 'IMPÔTS ET TAXES',
    description: 'Taxes, duties and levies (excluding income tax)',
  },
  641: {
    name: 'IMPÔTS ET TAXES DIRECTS',
    description: 'Direct taxes and duties',
  },
  6411: {
    name: 'Impôts fonciers et taxes annexes',
    description: 'Property taxes and related levies',
  },
  6412: {
    name: 'Patentes, licences et taxes annexes',
    description: 'Business licences (patente) and related taxes',
  },
  6413: {
    name: 'Taxes sur appointements et salaires',
    description: 'Payroll and salary taxes',
  },
  6414: {
    name: "Taxes d'apprentissage",
    description: 'Apprenticeship levy',
  },
  6415: {
    name: 'Formation professionnelle continue',
    description: 'Continuing professional training levy',
  },
  6418: {
    name: 'Autres impôts et taxes directs',
    description: 'Other direct taxes',
  },
  645: {
    name: 'IMPÔTS ET TAXES INDIRECTS',
    description: 'Indirect taxes and duties',
  },
  646: {
    name: "DROITS D'ENREGISTREMENT",
    description: 'Registration duties and stamp taxes',
  },
  6461: {
    name: 'Droits de mutation',
    description: 'Transfer / conveyance duties',
  },
  6462: { name: 'Droits de timbre', description: 'Stamp duties' },
  6463: {
    name: 'Taxes sur les véhicules de société',
    description: 'Company vehicle tax',
  },
  6464: {
    name: 'Vignettes',
    description: 'Vehicle registration stickers / road tax',
  },
  6468: {
    name: 'Autres droits',
    description: 'Other registration duties',
  },
  647: {
    name: 'PÉNALITÉS ET AMENDES FISCALES',
    description: 'Tax penalties and fines',
  },
  6471: {
    name: "Pénalités d'assiette, impôts directs",
    description: 'Assessment penalties — direct taxes',
  },
  6472: {
    name: "Pénalités d'assiette, impôts indirects",
    description: 'Assessment penalties — indirect taxes',
  },
  6473: {
    name: 'Pénalités de recouvrement, impôts directs',
    description: 'Collection penalties — direct taxes',
  },
  6474: {
    name: 'Pénalités de recouvrement, impôts indirects',
    description: 'Collection penalties — indirect taxes',
  },
  6478: {
    name: 'Autres amendes pénales et fiscales',
    description: 'Other tax and criminal fines',
  },
  648: {
    name: 'AUTRES IMPÔTS ET TAXES',
    description: 'Other taxes and levies',
  },

  // ────────── 65 AUTRES CHARGES ──────────
  65: { name: 'AUTRES CHARGES', description: 'Other operating charges' },
  651: {
    name: 'PERTES SUR CRÉANCES CLIENTS ET AUTRES DÉBITEURS',
    description: 'Losses on write-off of customer and other receivables',
  },
  6511: {
    name: 'Clients',
    description: 'Write-off of irrecoverable customer receivables',
  },
  6515: {
    name: 'Autres débiteurs',
    description: 'Write-off of irrecoverable other receivables',
  },
  652: {
    name: 'QUOTE-PART DE RÉSULTAT SUR OPÉRATIONS FAITES EN COMMUN',
    description: 'Share of result on joint venture transactions',
  },
  6521: {
    name: 'Quote-part transférée de bénéfices (comptabilité du gérant)',
    description: 'Share of profits transferred — manager accounting',
  },
  6525: {
    name: 'Pertes imputées par transfert (comptabilité des associés non gérants)',
    description:
      'Losses allocated by transfer — non-managing partners accounting',
  },
  653: {
    name: 'QUOTE-PART DE RÉSULTAT ANNULÉE SUR EXÉCUTION PARTIELLE DE CONTRATS PLURI-EXERCICES',
    description:
      'Result reversal on partial completion of multi-year contracts',
  },
  654: {
    name: "VALEUR COMPTABLE DES CESSIONS COURANTES D'IMMOBILISATIONS",
    description:
      'Net book value of fixed assets sold in ordinary course of business',
  },
  658: {
    name: 'CHARGES DIVERSES',
    description: 'Miscellaneous other charges',
  },
  6581: {
    name: "Jetons de présence et autres rémunérations d'administrateurs",
    description: 'Directors fees and other board remuneration',
  },
  6582: { name: 'Dons', description: 'Charitable donations' },
  6583: {
    name: 'Mécénat',
    description: 'Corporate sponsorship and patronage',
  },
  659: {
    name: "CHARGES PROVISIONNÉES D'EXPLOITATION",
    description: 'Short-term operating risk provisions (charge)',
  },
  6591: {
    name: 'sur risques à court terme',
    description: 'Short-term operating risk provisions charged',
  },
  6593: {
    name: 'sur stocks',
    description: 'Stock impairment provisions charged',
  },
  6594: {
    name: 'sur créances',
    description: 'Receivable impairment provisions charged',
  },
  6598: {
    name: 'Autres charges provisionnées',
    description: 'Other provisions charged',
  },

  // ────────── 66 CHARGES DE PERSONNEL ──────────
  66: {
    name: 'CHARGES DE PERSONNEL',
    description: 'Employee costs — wages, salaries and related charges',
  },
  661: {
    name: 'RÉMUNÉRATIONS DIRECTES VERSÉES AU PERSONNEL NATIONAL',
    description: 'Direct remuneration paid to local (national) staff',
  },
  6611: {
    name: 'Appointements salaires et commissions',
    description: 'Salaries, wages and commissions — national staff',
  },
  6612: {
    name: 'Primes et gratifications',
    description: 'Bonuses and performance awards — national staff',
  },
  6613: {
    name: 'Congés payés',
    description: 'Paid leave — national staff',
  },
  6614: {
    name: "Indemnités de préavis, de licenciement et de recherche d'embauche",
    description:
      'Notice, redundancy and job-search allowances — national staff',
  },
  6615: {
    name: 'Indemnités de maladie versées aux travailleurs',
    description: 'Sickness allowances paid — national staff',
  },
  6616: {
    name: 'Supplément familial',
    description: 'Family supplement allowance — national staff',
  },
  6617: {
    name: 'Avantages en nature',
    description: 'Benefits in kind — national staff',
  },
  6618: {
    name: 'Autres rémunérations directes',
    description: 'Other direct remuneration — national staff',
  },
  662: {
    name: 'RÉMUNÉRATIONS DIRECTES VERSÉES AU PERSONNEL NON NATIONAL',
    description: 'Direct remuneration paid to expatriate staff',
  },
  6621: {
    name: 'Appointements salaires et commissions',
    description: 'Salaries, wages and commissions — expatriate staff',
  },
  6622: {
    name: 'Primes et gratifications',
    description: 'Bonuses and performance awards — expatriate staff',
  },
  6623: {
    name: 'Congés payés',
    description: 'Paid leave — expatriate staff',
  },
  6624: {
    name: "Indemnités de préavis, de licenciement et de recherche d'embauche",
    description:
      'Notice, redundancy and job-search allowances — expatriate staff',
  },
  6625: {
    name: 'Indemnités de maladie versées aux travailleurs',
    description: 'Sickness allowances paid — expatriate staff',
  },
  6626: {
    name: 'Supplément familial',
    description: 'Family supplement allowance — expatriate staff',
  },
  6627: {
    name: 'Avantages en nature',
    description: 'Benefits in kind — expatriate staff',
  },
  6628: {
    name: 'Autres rémunérations directes',
    description: 'Other direct remuneration — expatriate staff',
  },
  663: {
    name: 'INDEMNITÉS FORFAITAIRES VERSÉES AU PERSONNEL',
    description: 'Lump-sum allowances paid to staff',
  },
  6631: {
    name: 'Indemnités de logement',
    description: 'Housing allowances',
  },
  6632: {
    name: 'Indemnités de représentation',
    description: 'Representation / entertainment allowances',
  },
  6633: {
    name: "Indemnités d'expatriation",
    description: 'Expatriation allowances',
  },
  6638: {
    name: 'Autres indemnités et avantages divers',
    description: 'Other allowances and benefits',
  },
  664: {
    name: 'CHARGES SOCIALES',
    description: 'Employer social security and social charges',
  },
  6641: {
    name: 'Charges sociales sur rémunération du personnel national',
    description: 'Social charges on national staff remuneration',
  },
  6642: {
    name: 'Charges sociales sur rémunération du personnel non national',
    description: 'Social charges on expatriate staff remuneration',
  },
  666: {
    name: "RÉMUNÉRATIONS ET CHARGES SOCIALES DE L'EXPLOITANT INDIVIDUEL",
    description: "Sole trader's own remuneration and social charges",
  },
  6661: {
    name: "Rémunération du travail de l'exploitant",
    description: "Sole trader's notional labour remuneration",
  },
  6662: {
    name: 'Charges sociales',
    description: "Sole trader's social charges",
  },
  667: {
    name: 'RÉMUNÉRATION TRANSFÉRÉE DE PERSONNEL EXTÉRIEUR',
    description:
      'Cost transfer for external staff (temporary and seconded)',
  },
  6671: {
    name: 'Personnel intérimaire',
    description: 'Temporary staff cost transferred',
  },
  6672: {
    name: "Personnel détaché ou prêté à l'entreprise",
    description: 'Seconded staff cost transferred',
  },
  668: {
    name: 'AUTRES CHARGES SOCIALES',
    description: 'Other employee-related social expenses',
  },
  6681: {
    name: "Versements aux Syndicats et Comités d'entreprise, d'établissement",
    description: 'Payments to trade unions and works councils',
  },
  6682: {
    name: "Versements aux Comités d'hygiène et de sécurité",
    description: 'Payments to health and safety committees',
  },
  6683: {
    name: 'Versements aux autres oeuvres sociales',
    description: 'Payments to other social welfare programs',
  },
  6684: {
    name: 'Médecine du travail et pharmacie',
    description: 'Occupational health and pharmacy costs',
  },

  // ────────── 67 FRAIS FINANCIERS ET CHARGES ASSIMILÉES ──────────
  67: {
    name: 'FRAIS FINANCIERS ET CHARGES ASSIMILÉES',
    description: 'Finance costs and similar charges',
  },
  671: {
    name: 'INTÉRÊTS DES EMPRUNTS',
    description: 'Interest expense on borrowings',
  },
  6711: {
    name: 'Emprunts obligataires',
    description: 'Interest on bond loans',
  },
  6712: {
    name: 'Emprunts auprès des établissements de crédit',
    description: 'Interest on bank loans',
  },
  6713: {
    name: 'Dettes liées à des participations',
    description: 'Interest on participation-related debts',
  },
  672: {
    name: 'INTÉRÊTS DANS LOYERS DE CRÉDIT-BAIL ET CONTRATS ASSIMILÉS',
    description: 'Finance charges within lease rentals',
  },
  6721: {
    name: 'Intérêts dans loyers de crédit-bail immobilier',
    description: 'Finance charges in real estate lease rentals',
  },
  6722: {
    name: 'Intérêts dans loyers de crédit-bail mobilier',
    description: 'Finance charges in movable asset lease rentals',
  },
  6723: {
    name: 'Intérêts dans loyers des autres contrats',
    description: 'Finance charges in other lease rentals',
  },
  673: {
    name: 'ESCOMPTES ACCORDÉS',
    description: 'Settlement discounts granted to customers',
  },
  674: { name: 'AUTRES INTÉRÊTS', description: 'Other interest expenses' },
  6741: {
    name: 'Avances reçues et dépôts créditeurs',
    description: 'Interest on advances received and credit deposits',
  },
  6742: {
    name: 'Comptes courants bloqués',
    description: 'Interest on blocked current accounts',
  },
  6743: {
    name: 'Intérêts sur obligations cautionnées',
    description: 'Interest on guaranteed/secured debt obligations',
  },
  6744: {
    name: 'Intérêts sur dettes commerciales',
    description: 'Late payment interest on trade payables',
  },
  6745: {
    name: "Intérêts bancaires et sur opérations de trésorerie et d'escompte",
    description: 'Bank interest and treasury/discounting charges',
  },
  6748: {
    name: 'Intérêts sur dettes diverses',
    description: 'Interest on miscellaneous debts',
  },
  675: {
    name: 'ESCOMPTES DES EFFETS DE COMMERCE',
    description: 'Bill discounting charges (discount on commercial paper)',
  },
  676: {
    name: 'PERTES DE CHANGE',
    description: 'Foreign exchange losses',
  },
  677: {
    name: 'PERTES SUR CESSIONS DE TITRES DE PLACEMENT',
    description: 'Losses on disposal of short-term investment securities',
  },
  678: {
    name: 'PERTES SUR RISQUES FINANCIERS',
    description: 'Losses on financial risks',
  },
  6781: {
    name: 'sur rentes viagères',
    description: 'Losses on life annuity financial risks',
  },
  6782: {
    name: 'sur opérations financières',
    description: 'Losses on financial operations',
  },
  6784: {
    name: 'sur instruments de trésorerie',
    description: 'Losses on treasury/derivative instruments',
  },
  679: {
    name: 'CHARGES PROVISIONNÉES FINANCIÈRES',
    description: 'Financial risk provisions (charge)',
  },
  6791: {
    name: 'sur risques financiers',
    description: 'Provisions for financial risks charged',
  },
  6795: {
    name: 'sur titres de placement',
    description: 'Provisions for investment securities impairment charged',
  },
  6798: {
    name: 'Autres charges provisionnées financières',
    description: 'Other financial provisions charged',
  },

  // ────────── 68 DOTATIONS AUX AMORTISSEMENTS ──────────
  68: {
    name: 'DOTATIONS AUX AMORTISSEMENTS',
    description: 'Depreciation and amortisation charges',
  },
  681: {
    name: "DOTATIONS AUX AMORTISSEMENTS D'EXPLOITATION",
    description: 'Operating depreciation and amortisation charges',
  },
  6811: {
    name: 'Dotations aux amortissements des charges immobilisées',
    description: 'Amortisation of deferred charges',
  },
  6812: {
    name: 'Dotations aux amortissements des immobilisations incorporelles',
    description: 'Amortisation of intangible assets',
  },
  6813: {
    name: 'Dotations aux amortissements des immobilisations corporelles',
    description: 'Depreciation of tangible fixed assets',
  },
  687: {
    name: 'DOTATIONS AUX AMORTISSEMENTS À CARACTÈRE FINANCIER',
    description: 'Financial depreciation charges',
  },
  6872: {
    name: 'Dotations aux amortissements des primes de remboursement des obligations',
    description: 'Amortisation of bond redemption premiums',
  },
  6878: {
    name: 'Autres dotations aux amortissements à caractère financier',
    description: 'Other financial amortisation charges',
  },

  // ────────── 69 DOTATIONS AUX PROVISIONS ──────────
  69: {
    name: 'DOTATIONS AUX PROVISIONS',
    description: 'Provisions charged (increase in provisions)',
  },
  691: {
    name: "DOTATIONS AUX PROVISIONS D'EXPLOITATION",
    description: 'Operating provisions charged',
  },
  6911: {
    name: 'pour risques et charges',
    description: 'Operating provisions for risks and charges',
  },
  6912: {
    name: 'pour grosses réparations',
    description: 'Provisions for major repairs',
  },
  6913: {
    name: 'pour dépréciation des immobilisations incorporelles',
    description: 'Impairment provisions on intangible assets',
  },
  6914: {
    name: 'pour dépréciation des immobilisations corporelles',
    description: 'Impairment provisions on tangible assets',
  },
  697: {
    name: 'DOTATIONS AUX PROVISIONS FINANCIÈRES',
    description: 'Financial provisions charged',
  },
  6971: {
    name: 'pour risques et charges',
    description: 'Financial provisions for risks and charges',
  },
  6972: {
    name: 'pour dépréciation des immobilisations financières',
    description: 'Impairment provisions on financial assets',
  },
} as const satisfies Plan;

export type Class6AccountCode = keyof typeof class6Accounts;
