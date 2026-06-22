/**
 * SYSCOHADA — CLASSE 4 : Comptes de tiers
 * (Class 4: Third-Party Accounts — Receivables & Payables)
 *
 * Covers: suppliers, customers, employees, social organisations,
 * State/public authorities, international organisations, shareholders,
 * miscellaneous debtors/creditors, HAO receivables/payables,
 * and impairment provisions.
 *
 * Source: Official SYSCOHADA Chart of Accounts PDF, pages 23–30.
 */
import type { Plan } from './types';

export const class4Accounts = {
  // ────────── 40 FOURNISSEURS ET COMPTES RATTACHÉS ──────────
  40: {
    name: 'FOURNISSEURS ET COMPTES RATTACHÉS',
    description: 'Suppliers and related accounts',
  },
  401: {
    name: 'FOURNISSEURS, DETTES EN COMPTE',
    description: 'Suppliers — open account trade payables',
  },
  4011: { name: 'Fournisseurs', description: 'Trade suppliers' },
  4012: {
    name: 'Fournisseurs Groupe',
    description: 'Intra-group suppliers',
  },
  4013: {
    name: 'Fournisseurs sous-traitants',
    description: 'Subcontractor suppliers',
  },
  4017: {
    name: 'Fournisseur, retenues de garantie',
    description: 'Supplier — performance bond retentions',
  },
  402: {
    name: 'FOURNISSEURS, EFFETS À PAYER',
    description: 'Suppliers — bills payable (promissory notes / drafts)',
  },
  4021: {
    name: 'Fournisseurs, Effets à payer',
    description: 'Trade supplier bills payable',
  },
  4022: {
    name: 'Fournisseurs - Groupe, Effets à payer',
    description: 'Intra-group supplier bills payable',
  },
  4023: {
    name: 'Fournisseurs sous-traitants, Effets à payer',
    description: 'Subcontractor bills payable',
  },
  408: {
    name: 'FOURNISSEURS, FACTURES NON PARVENUES',
    description:
      'Suppliers — uninvoiced goods and services (accrued payables)',
  },
  4081: {
    name: 'Fournisseurs',
    description: 'Accrued trade supplier payables',
  },
  4082: {
    name: 'Fournisseurs - Groupe',
    description: 'Accrued intra-group supplier payables',
  },
  4083: {
    name: 'Fournisseurs sous-traitants',
    description: 'Accrued subcontractor payables',
  },
  4086: {
    name: 'Fournisseurs, intérêts courus',
    description: 'Accrued interest on supplier payables',
  },
  409: {
    name: 'FOURNISSEURS DÉBITEURS',
    description: 'Suppliers — debit balances (prepayments and returns)',
  },
  4091: {
    name: 'Fournisseurs avances et acomptes versés',
    description: 'Advances and deposits paid to suppliers',
  },
  4092: {
    name: 'Fournisseurs - Groupe avances et acomptes versés',
    description: 'Advances paid to group suppliers',
  },
  4093: {
    name: 'Fournisseurs sous-traitants avances et acomptes versés',
    description: 'Advances paid to subcontractors',
  },
  4094: {
    name: 'Fournisseurs créances pour emballages et matériels à rendre',
    description:
      'Claims on suppliers for packaging and equipment to be returned',
  },
  4098: {
    name: 'Rabais, Remises, Ristournes et autres avoirs à obtenir',
    description:
      'Rebates, discounts and other credits to be received from suppliers',
  },

  // ────────── 41 CLIENTS ET COMPTES RATTACHÉS ──────────
  41: {
    name: 'CLIENTS ET COMPTES RATTACHÉS',
    description: 'Customers and related accounts',
  },
  411: { name: 'CLIENTS', description: 'Trade receivables — customers' },
  4111: { name: 'Clients', description: 'Trade customers' },
  4112: { name: 'Clients - Groupe', description: 'Intra-group customers' },
  4114: {
    name: 'Clients, État et Collectivités publiques',
    description: 'Public-sector customers (State and local authorities)',
  },
  4115: {
    name: 'Clients, organismes internationaux',
    description: 'International organisation customers',
  },
  4117: {
    name: 'Client, retenues de garantie',
    description: 'Customer — performance bond retentions receivable',
  },
  4118: {
    name: 'Clients, dégrèvement de Taxes sur la Valeur Ajoutée (T.V.A.)',
    description: 'Customers — VAT rebates receivable',
  },
  412: {
    name: 'CLIENTS, EFFETS À RECEVOIR EN PORTEFEUILLE',
    description:
      'Customers — bills receivable (notes and drafts in portfolio)',
  },
  4121: {
    name: 'Clients, Effets à recevoir',
    description: 'Trade customer bills receivable',
  },
  4122: {
    name: 'Clients - Groupe, Effets à recevoir',
    description: 'Intra-group customer bills receivable',
  },
  4124: {
    name: 'État et Collectivités publiques, Effets à recevoir',
    description: 'Public authority bills receivable',
  },
  4125: {
    name: 'Organismes Internationaux, Effets à recevoir',
    description: 'International organisation bills receivable',
  },
  414: {
    name: "CRÉANCES SUR CESSIONS D'IMMOBILISATIONS",
    description: 'Receivables from asset disposals',
  },
  4141: {
    name: 'Créances en compte',
    description: 'Asset disposal receivables — open account',
  },
  4142: {
    name: 'Effets à recevoir',
    description: 'Asset disposal receivables — bills receivable',
  },
  415: {
    name: 'CLIENTS, EFFETS ESCOMPTÉS NON ÉCHUS',
    description: 'Customer bills discounted but not yet due',
  },
  416: {
    name: 'CRÉANCES CLIENTS LITIGIEUSES OU DOUTEUSES',
    description: 'Disputed or doubtful customer receivables',
  },
  4161: {
    name: 'Créances litigieuses',
    description: 'Disputed customer receivables',
  },
  4162: {
    name: 'Créances douteuses',
    description: 'Doubtful / impaired customer receivables',
  },
  418: {
    name: 'CLIENTS, PRODUITS À RECEVOIR',
    description: 'Customers — accrued income (invoices to be raised)',
  },
  4181: {
    name: 'Clients, factures à établir',
    description: 'Accrued customer revenue — invoices to be issued',
  },
  4186: {
    name: 'Clients, intérêts courus',
    description: 'Accrued interest on customer receivables',
  },
  419: {
    name: 'CLIENTS CRÉDITEURS',
    description: 'Customers — credit balances (advances and returns)',
  },
  4191: {
    name: 'Clients, avances et acomptes reçus',
    description: 'Advances and deposits received from customers',
  },
  4192: {
    name: 'Clients - Groupe, avances et acomptes reçus',
    description: 'Advances received from group customers',
  },
  4194: {
    name: 'Clients, dettes pour emballages et matériels consignés',
    description:
      'Liabilities to customers for consigned packaging and equipment',
  },
  4198: {
    name: 'Rabais, Remises, Ristournes et autres avoirs à accorder',
    description: 'Rebates and credits to be granted to customers',
  },

  // ────────── 42 PERSONNEL ──────────
  42: {
    name: 'PERSONNEL',
    description:
      'Employee-related accounts (payroll payables and receivables)',
  },
  421: {
    name: 'PERSONNEL, AVANCES ET ACOMPTES',
    description: 'Employee advances and salary advances',
  },
  4211: {
    name: 'Personnel, avances',
    description: 'Advances to employees',
  },
  4212: {
    name: 'Personnel, acomptes',
    description: 'Salary advances (partial payments)',
  },
  4213: {
    name: 'Frais avancés et fournitures au personnel',
    description: 'Expenses paid and goods supplied to employees',
  },
  422: {
    name: 'PERSONNEL, RÉMUNÉRATIONS DUES',
    description: 'Salaries and wages payable',
  },
  423: {
    name: 'PERSONNEL, OPPOSITIONS, SAISIES-ARRÊTS',
    description: 'Wage garnishments and attachments',
  },
  4231: {
    name: 'Personnel, oppositions',
    description: 'Wage oppositions / freezes',
  },
  4232: {
    name: 'Personnel, saisies-arrêts',
    description: 'Wage garnishments',
  },
  4233: {
    name: 'Personnel, avis à tiers détenteur',
    description: 'Third-party holder notices on wages',
  },
  424: {
    name: 'PERSONNEL, OEUVRES SOCIALES INTERNES',
    description: 'Employee welfare benefits (company-managed)',
  },
  4241: {
    name: 'Assistance médicale',
    description: 'Company medical assistance',
  },
  4242: {
    name: 'Allocations familiales',
    description: 'Family allowances',
  },
  4245: {
    name: "Organismes sociaux rattachés à l'entreprise",
    description: 'Company-affiliated social organisations',
  },
  4248: {
    name: 'Autres oeuvres sociales internes',
    description: 'Other internal employee welfare programs',
  },
  425: {
    name: 'REPRÉSENTANTS DU PERSONNEL',
    description: 'Employee representatives (works council, unions)',
  },
  4251: {
    name: 'Délégués du personnel',
    description: 'Employee delegates',
  },
  4252: {
    name: "Syndicats et Comités d'entreprise, d'Établissement",
    description: 'Trade unions and works councils',
  },
  4258: {
    name: 'Autres représentants du personnel',
    description: 'Other employee representatives',
  },
  426: {
    name: 'PERSONNEL, PARTICIPATION AUX BÉNÉFICES',
    description: 'Employee profit-sharing payable',
  },
  427: {
    name: 'PERSONNEL – DÉPÔTS',
    description: 'Employee deposits held',
  },
  428: {
    name: 'PERSONNEL, CHARGES À PAYER ET PRODUITS À RECEVOIR',
    description: 'Employee-related accrued liabilities and receivables',
  },
  4281: {
    name: 'Dettes provisionnées pour congés à payer',
    description: 'Accrued holiday/leave pay liability',
  },
  4286: {
    name: 'Autres Charges à payer',
    description: 'Other accrued employee charges',
  },
  4287: {
    name: 'Produits à recevoir',
    description: 'Employee-related income accruals',
  },

  // ────────── 43 ORGANISMES SOCIAUX ──────────
  43: {
    name: 'ORGANISMES SOCIAUX',
    description: 'Social security and social organisations',
  },
  431: {
    name: 'SÉCURITÉ SOCIALE',
    description: 'Social security contributions payable',
  },
  4311: {
    name: 'Prestations familiales',
    description: 'Family benefit contributions',
  },
  4312: {
    name: 'Accidents de travail',
    description: 'Workplace accident contributions',
  },
  4313: {
    name: 'Caisse de retraite obligatoire',
    description: 'Mandatory pension fund contributions',
  },
  4314: {
    name: 'Caisse de retraite facultative',
    description: 'Optional pension fund contributions',
  },
  4318: {
    name: 'Autres cotisations sociales',
    description: 'Other social security contributions',
  },
  432: {
    name: 'CAISSES DE RETRAITE COMPLÉMENTAIRE',
    description: 'Supplementary pension fund contributions',
  },
  433: {
    name: 'AUTRES ORGANISMES SOCIAUX',
    description: 'Other social organisations',
  },
  4331: {
    name: 'Mutuelle',
    description: 'Mutual insurance fund contributions',
  },
  438: {
    name: 'ORGANISMES SOCIAUX, CHARGES À PAYER ET PRODUITS À RECEVOIR',
    description: 'Accrued social charges and receivables',
  },
  4381: {
    name: 'Charges sociales sur gratifications à payer',
    description: 'Social charges on accrued bonuses',
  },
  4382: {
    name: 'Charges sociales sur congés à payer',
    description: 'Social charges on accrued leave pay',
  },
  4386: {
    name: 'Autres charges à payer',
    description: 'Other accrued social charges',
  },
  4387: {
    name: 'Produits à recevoir',
    description: 'Social organisation income receivable',
  },

  // ────────── 44 ÉTAT ET COLLECTIVITÉS PUBLIQUES ──────────
  44: {
    name: 'ÉTAT ET COLLECTIVITÉS PUBLIQUES',
    description:
      'State and public authorities — tax and other fiscal accounts',
  },
  441: {
    name: 'ÉTAT, IMPÔT SUR LES BÉNÉFICES',
    description: 'Corporate income tax payable / recoverable',
  },
  442: {
    name: 'ÉTAT, AUTRES IMPÔTS ET TAXES',
    description: 'State — other taxes and duties',
  },
  4421: {
    name: "Impôts et taxes d'Etat",
    description: 'State taxes and duties',
  },
  4422: {
    name: 'Impôts et taxes pour les collectivités publiques',
    description: 'Local authority taxes and duties',
  },
  4423: {
    name: 'Impôts et taxes recouvrables sur des obligataires',
    description: 'Taxes recoverable on bondholders',
  },
  4424: {
    name: 'Impôts et taxes recouvrables sur des associés',
    description: 'Taxes recoverable on shareholders',
  },
  4426: { name: 'Droits de douane', description: 'Customs duties' },
  4428: {
    name: 'Autres impôts et taxes',
    description: 'Other taxes and duties',
  },
  443: {
    name: 'ÉTAT, T.V.A. FACTURÉE',
    description: 'Output VAT (billed/charged to customers)',
  },
  4431: {
    name: 'T.V.A. facturée sur ventes',
    description: 'Output VAT on sales of goods',
  },
  4432: {
    name: 'T.V.A. facturée sur prestations de services',
    description: 'Output VAT on services rendered',
  },
  4433: {
    name: 'T.V.A. facturée sur travaux',
    description: 'Output VAT on construction works',
  },
  4334: {
    name: 'T.V.A. facturée sur production livrée à soi-même',
    description: 'Output VAT on self-supply',
  },
  4335: {
    name: 'T.V.A. sur factures à établir',
    description: 'Output VAT on accrued revenue (invoices to be issued)',
  },
  444: {
    name: 'ÉTAT, T.V.A. DUE OU CRÉDIT DE T.V.A.',
    description: 'VAT payable or VAT credit balance',
  },
  4441: {
    name: 'État, T.V.A. due',
    description: 'VAT payable to the State (net VAT liability)',
  },
  4449: {
    name: 'État, crédit de T.V.A. à reporter',
    description: 'VAT credit to be carried forward (recoverable)',
  },
  445: {
    name: 'ÉTAT, T.V.A. RÉCUPÉRABLE',
    description: 'Input VAT recoverable',
  },
  4451: {
    name: 'T.V.A. récupérable sur immobilisations',
    description: 'Input VAT on fixed asset purchases',
  },
  4452: {
    name: 'T.V.A. récupérable sur achats',
    description: 'Input VAT on stock and supply purchases',
  },
  4453: {
    name: 'T.V.A. récupérable sur transport',
    description: 'Input VAT on transport services',
  },
  4454: {
    name: 'T.V.A. récupérable sur services extérieurs et autres charges',
    description: 'Input VAT on external services and other charges',
  },
  4455: {
    name: 'T.V.A. récupérable sur factures non parvenues',
    description: 'Input VAT on uninvoiced purchases',
  },
  4456: {
    name: "T.V.A. transférée par d'autres entreprises",
    description: 'VAT transferred from other companies',
  },
  446: {
    name: "ÉTAT, AUTRES TAXES SUR LE CHIFFRE D'AFFAIRES",
    description: 'State — other turnover taxes',
  },
  447: {
    name: 'ÉTAT, IMPÔTS RETENUS À LA SOURCE',
    description: 'State — taxes withheld at source (withholding taxes)',
  },
  4471: {
    name: 'Impôt Général sur le revenu',
    description: 'General income tax withheld',
  },
  4472: {
    name: 'Impôts sur salaires',
    description: 'Payroll taxes withheld',
  },
  4473: {
    name: 'Contribution nationale',
    description: 'National contribution withheld',
  },
  4474: {
    name: 'Contribution nationale de solidarité',
    description: 'National solidarity contribution withheld',
  },
  4478: {
    name: 'Autres impôts et contributions',
    description: 'Other withholding taxes and contributions',
  },
  448: {
    name: 'ÉTAT, CHARGES À PAYER ET PRODUITS À RECEVOIR',
    description: 'State — accrued tax liabilities and receivables',
  },
  4486: { name: 'Charges à payer', description: 'Accrued tax charges' },
  4487: {
    name: 'Produits à recevoir',
    description: 'Tax refunds receivable',
  },
  449: {
    name: 'ÉTAT, CRÉANCES ET DETTES DIVERSES',
    description: 'State — miscellaneous receivables and payables',
  },
  4491: {
    name: 'État, obligations cautionnées',
    description: 'State — secured tax obligations (guaranteed payments)',
  },
  4492: {
    name: 'État, avances et acomptes versés sur impôts',
    description: 'Tax advances and prepayments made',
  },
  4493: {
    name: 'État, fonds de dotation à recevoir',
    description: 'State endowment funds receivable',
  },
  4494: {
    name: "État, subventions d'équipement à recevoir",
    description: 'Equipment grants receivable from the State',
  },
  4495: {
    name: "État, subventions d'exploitation à recevoir",
    description: 'Operating grants receivable from the State',
  },
  4496: {
    name: "État, subventions d'équilibre à recevoir",
    description: 'Balancing grants receivable from the State',
  },
  4499: {
    name: 'État, fonds réglementé provisionné',
    description: 'State — regulated fund provisioned',
  },

  // ────────── 45 ORGANISMES INTERNATIONAUX ──────────
  45: {
    name: 'ORGANISMES INTERNATIONAUX',
    description: 'International organisations',
  },
  451: {
    name: 'OPÉRATIONS AVEC LES ORGANISMES AFRICAINS',
    description: 'Transactions with African organisations',
  },
  452: {
    name: 'OPÉRATIONS AVEC LES AUTRES ORGANISMES INTERNATIONAUX',
    description: 'Transactions with other international organisations',
  },
  458: {
    name: 'ORGANISMES INTERNATIONAUX, FONDS DE DOTATION ET SUBVENTIONS À RECEVOIR',
    description:
      'International organisations — endowment funds and grants receivable',
  },
  4581: {
    name: 'Organismes internationaux, fonds de dotation à recevoir',
    description:
      'Endowment funds receivable from international organisations',
  },
  4582: {
    name: 'Organismes internationaux, subventions à recevoir',
    description: 'Grants receivable from international organisations',
  },

  // ────────── 46 ASSOCIÉS ET GROUPE ──────────
  46: {
    name: 'ASSOCIÉS ET GROUPE',
    description: 'Shareholders, partners and group companies',
  },
  461: {
    name: 'ASSOCIÉS, OPÉRATIONS SUR LE CAPITAL',
    description: 'Shareholders — capital transactions',
  },
  4611: {
    name: 'Associés apports en nature',
    description: 'Shareholders — contributions in kind',
  },
  4612: {
    name: 'Associés apports en numéraire',
    description: 'Shareholders — cash contributions',
  },
  4613: {
    name: 'Actionnaires, capital souscrit appelé non versé',
    description: 'Shareholders — called but unpaid capital',
  },
  4614: {
    name: 'Associés, capital appelé non versé',
    description: 'Partners — called but unpaid capital',
  },
  4615: {
    name: 'Associés, versements reçus sur augmentation de capital',
    description: 'Shareholders — payments received on capital increase',
  },
  4616: {
    name: 'Associés, versements anticipés',
    description: 'Shareholders — advance payments',
  },
  4617: {
    name: 'Actionnaires défaillants',
    description: 'Defaulting shareholders',
  },
  4618: {
    name: 'Associés, autres apports',
    description: 'Partners — other contributions',
  },
  4619: {
    name: 'Associés, capital à rembourser',
    description: 'Shareholders — capital to be reimbursed',
  },
  462: {
    name: 'ASSOCIÉS, COMPTES COURANTS',
    description:
      'Shareholders — current accounts (partners loan accounts)',
  },
  4621: {
    name: 'Principal',
    description: 'Partner current account — principal',
  },
  4626: {
    name: 'Intérêts courus',
    description: 'Accrued interest on partner current accounts',
  },
  463: {
    name: 'ASSOCIÉS, OPÉRATIONS FAITES EN COMMUN',
    description: 'Partners — joint venture transactions',
  },
  465: {
    name: 'ASSOCIÉS, DIVIDENDES À PAYER',
    description: 'Dividends payable to shareholders',
  },
  466: {
    name: 'GROUPE, COMPTES COURANTS',
    description: 'Group companies — current accounts',
  },
  467: {
    name: 'ACTIONNAIRES, RESTANT DÛ SUR CAPITAL APPELÉ',
    description: 'Shareholders — amount still due on called capital',
  },

  // ────────── 47 DÉBITEURS ET CRÉDITEURS DIVERS ──────────
  47: {
    name: 'DÉBITEURS ET CRÉDITEURS DIVERS',
    description: 'Miscellaneous debtors and creditors',
  },
  471: {
    name: "COMPTES D'ATTENTE",
    description: 'Suspense accounts (temporary holding accounts)',
  },
  4711: {
    name: 'Débiteurs divers',
    description: 'Miscellaneous debtors — suspense',
  },
  4712: {
    name: 'Créditeurs divers',
    description: 'Miscellaneous creditors — suspense',
  },
  472: {
    name: 'VERSEMENTS RESTANT À EFFECTUER SUR TITRES NON LIBÉRÉS',
    description: 'Remaining payments due on partially paid-up securities',
  },
  4726: {
    name: 'Titres de participation',
    description: 'Unpaid calls on equity investments',
  },
  4727: {
    name: 'Titres immobilisés',
    description: 'Unpaid calls on long-term securities',
  },
  4728: {
    name: 'Titres de placement',
    description: 'Unpaid calls on short-term investment securities',
  },
  474: {
    name: 'RÉPARTITION PÉRIODIQUE DES CHARGES ET DES PRODUITS',
    description:
      'Periodic allocation of income and expenses (accruals and deferrals)',
  },
  4746: { name: 'Charges', description: 'Periodic expense allocation' },
  4747: { name: 'Produits', description: 'Periodic income allocation' },
  475: {
    name: 'CRÉANCES SUR TRAVAUX NON ENCORE FACTURABLES',
    description:
      'Receivables on work not yet billable (contract work in progress)',
  },
  476: {
    name: "CHARGES CONSTATÉES D'AVANCE",
    description: 'Prepaid expenses (deferred charges)',
  },
  477: {
    name: "PRODUITS CONSTATÉS D'AVANCE",
    description: 'Deferred income (deferred revenue)',
  },
  478: {
    name: 'ÉCARTS DE CONVERSION - ACTIF',
    description:
      'Translation differences — asset (unrealised exchange losses)',
  },
  4781: {
    name: 'Diminution des créances',
    description:
      'Decrease in foreign-currency receivables due to exchange rate movement',
  },
  4782: {
    name: 'Augmentation des dettes',
    description:
      'Increase in foreign-currency payables due to exchange rate movement',
  },
  4788: {
    name: 'Différences compensées par couverture de change',
    description: 'Translation differences offset by hedging',
  },
  479: {
    name: 'ÉCARTS DE CONVERSION - PASSIF',
    description:
      'Translation differences — liability (unrealised exchange gains)',
  },
  4791: {
    name: 'Augmentation des créances',
    description:
      'Increase in foreign-currency receivables due to exchange rate movement',
  },
  4792: {
    name: 'Diminution des dettes',
    description:
      'Decrease in foreign-currency payables due to exchange rate movement',
  },
  4798: {
    name: 'Différences compensées par couverture de change',
    description: 'Translation gains offset by hedging',
  },

  // ────────── 48 CRÉANCES ET DETTES HORS ACTIVITÉS ORDINAIRES (H.A.O.) ──────────
  48: {
    name: 'CRÉANCES ET DETTES HORS ACTIVITÉS ORDINAIRES (H.A.O.)',
    description:
      'Non-ordinary activity receivables and payables (capital account items)',
  },
  481: {
    name: "FOURNISSEURS D'INVESTISSEMENTS",
    description:
      'Suppliers of fixed assets (capital expenditure payables)',
  },
  4811: {
    name: 'Immobilisations incorporelles',
    description: 'Payables for intangible assets purchased',
  },
  4812: {
    name: 'Immobilisations corporelles',
    description: 'Payables for tangible assets purchased',
  },
  4817: {
    name: 'Retenues de garantie',
    description: 'Performance bond retentions — investment suppliers',
  },
  4818: {
    name: 'Factures non parvenues',
    description: 'Uninvoiced capital expenditure payables',
  },
  482: {
    name: "FOURNISSEURS D'INVESTISSEMENTS, EFFETS À PAYER",
    description: 'Capital expenditure suppliers — bills payable',
  },
  483: {
    name: 'DETTES SUR ACQUISITION DE TITRES DE PLACEMENT',
    description: 'Payables on acquisition of investment securities',
  },
  484: {
    name: 'AUTRES DETTES HORS ACTIVITÉS ORDINAIRES (H.A.O.)',
    description: 'Other non-ordinary activity payables',
  },
  485: {
    name: "CRÉANCES SUR CESSIONS D'IMMOBILISATIONS",
    description: 'Receivables from fixed asset disposals',
  },
  4851: {
    name: 'En compte',
    description: 'Asset disposal receivables — open account',
  },
  4852: {
    name: 'Effets à recevoir',
    description: 'Asset disposal receivables — bills receivable',
  },
  4857: {
    name: 'Retenues de garantie',
    description: 'Performance bond retentions on asset disposals',
  },
  4858: {
    name: 'Factures à établir',
    description: 'Asset disposal receivables — invoices to be issued',
  },
  486: {
    name: 'CRÉANCES SUR CESSIONS DE TITRES DE PLACEMENT',
    description: 'Receivables from disposal of investment securities',
  },
  488: {
    name: 'AUTRES CRÉANCES HORS ACTIVITÉS ORDINAIRES (H.A.O.)',
    description: 'Other non-ordinary activity receivables',
  },

  // ────────── 49 DÉPRÉCIATIONS ET RISQUES PROVISIONNÉS (TIERS) ──────────
  49: {
    name: 'DÉPRÉCIATIONS ET RISQUES PROVISIONNÉS (TIERS)',
    description:
      'Impairment provisions and provisioned risks on third-party accounts',
  },
  490: {
    name: 'DÉPRÉCIATIONS DES COMPTES FOURNISSEURS',
    description: 'Impairment on supplier accounts',
  },
  491: {
    name: 'DÉPRÉCIATIONS DES COMPTES CLIENTS',
    description: 'Impairment on customer receivables',
  },
  4911: {
    name: 'Créances litigieuses',
    description: 'Impairment — disputed receivables',
  },
  4912: {
    name: 'Créances douteuses',
    description: 'Impairment — doubtful receivables',
  },
  492: {
    name: 'DÉPRÉCIATIONS DES COMPTES PERSONNEL',
    description: 'Impairment on employee receivables',
  },
  493: {
    name: 'DÉPRÉCIATIONS DES COMPTES ORGANISMES SOCIAUX',
    description: 'Impairment on social organisation receivables',
  },
  494: {
    name: 'DÉPRÉCIATIONS DES COMPTES ÉTAT ET COLLECTIVITÉS PUBLIQUES',
    description: 'Impairment on State and public authority receivables',
  },
  495: {
    name: 'DÉPRÉCIATIONS DES COMPTES ORGANISMES INTERNATIONAUX',
    description: 'Impairment on international organisation receivables',
  },
  496: {
    name: 'DÉPRÉCIATIONS DES COMPTES ASSOCIÉS ET GROUPE',
    description: 'Impairment on shareholder and group receivables',
  },
  4962: {
    name: 'Associés, comptes courants',
    description: 'Impairment on partner current accounts',
  },
  4963: {
    name: 'Associés, opérations faites en commun',
    description: 'Impairment on joint venture transactions',
  },
  4966: {
    name: 'Groupe, comptes courants',
    description: 'Impairment on group current accounts',
  },
  497: {
    name: 'DÉPRÉCIATIONS DES COMPTES DÉBITEURS DIVERS',
    description: 'Impairment on miscellaneous debtor accounts',
  },
  498: {
    name: 'DÉPRÉCIATIONS DES COMPTES DE CRÉANCES H.A.O.',
    description: 'Impairment on non-ordinary activity receivables',
  },
  4981: {
    name: "Créances sur cessions d'immobilisations",
    description: 'Impairment on asset disposal receivables',
  },
  4982: {
    name: 'Créances sur cessions de titres de placement',
    description: 'Impairment on investment security disposal receivables',
  },
  4983: {
    name: 'Autres créances H.A.O.',
    description: 'Impairment on other non-ordinary receivables',
  },
  499: {
    name: 'RISQUES PROVISIONNÉS',
    description: 'Short-term provisions for risks',
  },
  4991: {
    name: "Sur opérations d'exploitation",
    description: 'Short-term provisions for operating risks',
  },
  4998: {
    name: 'Sur opérations H.A.O.',
    description: 'Short-term provisions for non-ordinary activity risks',
  },
} as const satisfies Plan;

export type Class4AccountCode = keyof typeof class4Accounts;
