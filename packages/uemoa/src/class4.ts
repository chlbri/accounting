/**
 * SYSCOHADA — CLASS 4: Third-Party Accounts
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
  // ────────── 40 SUPPLIERS AND RELATED ACCOUNTS ──────────
  40: {
    name: 'SUPPLIERS AND RELATED ACCOUNTS',
    description: 'Suppliers and related accounts',
  },
  401: {
    name: 'SUPPLIERS',
    description: 'Suppliers — open account trade payables',
  },
  4011: { name: 'Trade suppliers', description: 'Trade suppliers' },
  4012: {
    name: 'Intra-group suppliers',
    description: 'Intra-group suppliers',
  },
  4013: {
    name: 'Subcontractor suppliers',
    description: 'Subcontractor suppliers',
  },
  4017: {
    name: 'Supplier',
    description: 'Supplier — performance bond retentions',
  },
  402: {
    name: 'SUPPLIERS',
    description: 'Suppliers — bills payable (promissory notes / drafts)',
  },
  4021: {
    name: 'Trade supplier bills payable',
    description: 'Trade supplier bills payable',
  },
  4022: {
    name: 'Intra-group supplier bills payable',
    description: 'Intra-group supplier bills payable',
  },
  4023: {
    name: 'Subcontractor bills payable',
    description: 'Subcontractor bills payable',
  },
  408: {
    name: 'SUPPLIERS',
    description:
      'Suppliers — uninvoiced goods and services (accrued payables)',
  },
  4081: {
    name: 'Accrued trade supplier payables',
    description: 'Accrued trade supplier payables',
  },
  4082: {
    name: 'Accrued intra-group supplier payables',
    description: 'Accrued intra-group supplier payables',
  },
  4083: {
    name: 'Accrued subcontractor payables',
    description: 'Accrued subcontractor payables',
  },
  4086: {
    name: 'Accrued interest on supplier payables',
    description: 'Accrued interest on supplier payables',
  },
  409: {
    name: 'SUPPLIERS',
    description: 'Suppliers — debit balances (prepayments and returns)',
  },
  4091: {
    name: 'Advances and deposits paid to suppliers',
    description: 'Advances and deposits paid to suppliers',
  },
  4092: {
    name: 'Advances paid to group suppliers',
    description: 'Advances paid to group suppliers',
  },
  4093: {
    name: 'Advances paid to subcontractors',
    description: 'Advances paid to subcontractors',
  },
  4094: {
    name: 'Claims on suppliers for packaging and equipment to be returned',
    description:
      'Claims on suppliers for packaging and equipment to be returned',
  },
  4098: {
    name: 'Rebates, discounts and other credits to be received from suppliers',
    description:
      'Rebates, discounts and other credits to be received from suppliers',
  },

  // ────────── 41 CUSTOMERS AND RELATED ACCOUNTS ──────────
  41: {
    name: 'CUSTOMERS AND RELATED ACCOUNTS',
    description: 'Customers and related accounts',
  },
  411: {
    name: 'TRADE RECEIVABLES',
    description: 'Trade receivables — customers',
  },
  4111: { name: 'Customers', description: 'Trade customers' },
  4112: {
    name: 'Intra-group customers',
    description: 'Intra-group customers',
  },
  4114: {
    name: 'Public-sector customers (State and local authorities)',
    description: 'Public-sector customers (State and local authorities)',
  },
  4115: {
    name: 'International organisation customers',
    description: 'International organisation customers',
  },
  4117: {
    name: 'Customer',
    description: 'Customer — performance bond retentions receivable',
  },
  4118: {
    name: 'Customers',
    description: 'Customers — VAT rebates receivable',
  },
  412: {
    name: 'CUSTOMERS',
    description:
      'Customers — bills receivable (notes and drafts in portfolio)',
  },
  4121: {
    name: 'Trade customer bills receivable',
    description: 'Trade customer bills receivable',
  },
  4122: {
    name: 'Intra-group customer bills receivable',
    description: 'Intra-group customer bills receivable',
  },
  4124: {
    name: 'Public authority bills receivable',
    description: 'Public authority bills receivable',
  },
  4125: {
    name: 'International organisation bills receivable',
    description: 'International organisation bills receivable',
  },
  414: {
    name: "RECEIVABLES FROM ASSET DISPOSALS D'IMMOBILISATIONS",
    description: 'Receivables from asset disposals',
  },
  4141: {
    name: 'Asset disposal receivables',
    description: 'Asset disposal receivables — open account',
  },
  4142: {
    name: 'Asset disposal receivables',
    description: 'Asset disposal receivables — bills receivable',
  },
  415: {
    name: 'CUSTOMER BILLS DISCOUNTED BUT NOT YET DUE',
    description: 'Customer bills discounted but not yet due',
  },
  416: {
    name: 'DISPUTED OR DOUBTFUL CUSTOMER RECEIVABLES',
    description: 'Disputed or doubtful customer receivables',
  },
  4161: {
    name: 'Disputed customer receivables',
    description: 'Disputed customer receivables',
  },
  4162: {
    name: 'Doubtful / impaired customer receivables',
    description: 'Doubtful / impaired customer receivables',
  },
  418: {
    name: 'CUSTOMERS',
    description: 'Customers — accrued income (invoices to be raised)',
  },
  4181: {
    name: 'Accrued customer revenue',
    description: 'Accrued customer revenue — invoices to be issued',
  },
  4186: {
    name: 'Accrued interest on customer receivables',
    description: 'Accrued interest on customer receivables',
  },
  419: {
    name: 'CUSTOMERS',
    description: 'Customers — credit balances (advances and returns)',
  },
  4191: {
    name: 'Advances and deposits received from customers',
    description: 'Advances and deposits received from customers',
  },
  4192: {
    name: 'Advances received from group customers',
    description: 'Advances received from group customers',
  },
  4194: {
    name: 'Liabilities to customers for consigned packaging and equipment',
    description:
      'Liabilities to customers for consigned packaging and equipment',
  },
  4198: {
    name: 'Rebates and credits to be granted to customers',
    description: 'Rebates and credits to be granted to customers',
  },

  // ────────── 42 PERSONNEL ──────────
  42: {
    name: 'PERSONNEL',
    description:
      'Employee-related accounts (payroll payables and receivables)',
  },
  421: {
    name: 'EMPLOYEE ADVANCES AND SALARY ADVANCES',
    description: 'Employee advances and salary advances',
  },
  4211: {
    name: 'Advances to employees',
    description: 'Advances to employees',
  },
  4212: {
    name: 'Salary advances (partial payments)',
    description: 'Salary advances (partial payments)',
  },
  4213: {
    name: 'Expenses paid and goods supplied to employees',
    description: 'Expenses paid and goods supplied to employees',
  },
  422: {
    name: 'SALARIES AND WAGES PAYABLE',
    description: 'Salaries and wages payable',
  },
  423: {
    name: 'WAGE GARNISHMENTS AND ATTACHMENTS',
    description: 'Wage garnishments and attachments',
  },
  4231: {
    name: 'Wage oppositions / freezes',
    description: 'Wage oppositions / freezes',
  },
  4232: {
    name: 'Wage garnishments',
    description: 'Wage garnishments',
  },
  4233: {
    name: 'Third-party holder notices on wages',
    description: 'Third-party holder notices on wages',
  },
  424: {
    name: 'EMPLOYEE WELFARE BENEFITS (COMPANY-MANAGED)',
    description: 'Employee welfare benefits (company-managed)',
  },
  4241: {
    name: 'Company medical assistance',
    description: 'Company medical assistance',
  },
  4242: {
    name: 'Family allowances',
    description: 'Family allowances',
  },
  4245: {
    name: "Company-affiliated social organisations'entreprise",
    description: 'Company-affiliated social organisations',
  },
  4248: {
    name: 'Other internal employee welfare programs',
    description: 'Other internal employee welfare programs',
  },
  425: {
    name: 'EMPLOYEE REPRESENTATIVES (WORKS COUNCIL, UNIONS)',
    description: 'Employee representatives (works council, unions)',
  },
  4251: {
    name: 'Employee delegates',
    description: 'Employee delegates',
  },
  4252: {
    name: "Trade unions and works councils'entreprise, d'Établissement",
    description: 'Trade unions and works councils',
  },
  4258: {
    name: 'Other employee representatives',
    description: 'Other employee representatives',
  },
  426: {
    name: 'EMPLOYEE PROFIT-SHARING PAYABLE',
    description: 'Employee profit-sharing payable',
  },
  427: {
    name: 'EMPLOYEE DEPOSITS HELD',
    description: 'Employee deposits held',
  },
  428: {
    name: 'EMPLOYEE-RELATED ACCRUED LIABILITIES AND RECEIVABLES',
    description: 'Employee-related accrued liabilities and receivables',
  },
  4281: {
    name: 'Accrued holiday/leave pay liability',
    description: 'Accrued holiday/leave pay liability',
  },
  4286: {
    name: 'Other accrued employee charges',
    description: 'Other accrued employee charges',
  },
  4287: {
    name: 'Accrued income',
    description: 'Employee-related income accruals',
  },

  // ────────── 43 SOCIAL SECURITY ORGANISATIONS ──────────
  43: {
    name: 'SOCIAL SECURITY AND SOCIAL ORGANISATIONS',
    description: 'Social security and social organisations',
  },
  431: {
    name: 'SOCIAL SECURITY CONTRIBUTIONS PAYABLE',
    description: 'Social security contributions payable',
  },
  4311: {
    name: 'Family benefit contributions',
    description: 'Family benefit contributions',
  },
  4312: {
    name: 'Workplace accident contributions',
    description: 'Workplace accident contributions',
  },
  4313: {
    name: 'Mandatory pension fund contributions',
    description: 'Mandatory pension fund contributions',
  },
  4314: {
    name: 'Optional pension fund contributions',
    description: 'Optional pension fund contributions',
  },
  4318: {
    name: 'Other social security contributions',
    description: 'Other social security contributions',
  },
  432: {
    name: 'SUPPLEMENTARY PENSION FUND CONTRIBUTIONS',
    description: 'Supplementary pension fund contributions',
  },
  433: {
    name: 'OTHER SOCIAL ORGANISATIONS',
    description: 'Other social organisations',
  },
  4331: {
    name: 'Mutual insurance fund contributions',
    description: 'Mutual insurance fund contributions',
  },
  438: {
    name: 'ACCRUED SOCIAL CHARGES AND RECEIVABLES',
    description: 'Accrued social charges and receivables',
  },
  4381: {
    name: 'Social charges on accrued bonuses',
    description: 'Social charges on accrued bonuses',
  },
  4382: {
    name: 'Social charges on accrued leave pay',
    description: 'Social charges on accrued leave pay',
  },
  4386: {
    name: 'Other accrued social charges',
    description: 'Other accrued social charges',
  },
  4387: {
    name: 'Accrued income',
    description: 'Social organisation income receivable',
  },

  // ────────── 44 STATE AND PUBLIC AUTHORITIES ──────────
  44: {
    name: 'STATE AND PUBLIC AUTHORITIES',
    description:
      'State and public authorities — tax and other fiscal accounts',
  },
  441: {
    name: 'CORPORATE INCOME TAX PAYABLE / RECOVERABLE',
    description: 'Corporate income tax payable / recoverable',
  },
  442: {
    name: 'STATE',
    description: 'State — other taxes and duties',
  },
  4421: {
    name: "State taxes and duties'Etat",
    description: 'State taxes and duties',
  },
  4422: {
    name: 'Local authority taxes and duties',
    description: 'Local authority taxes and duties',
  },
  4423: {
    name: 'Taxes recoverable on bondholders',
    description: 'Taxes recoverable on bondholders',
  },
  4424: {
    name: 'Taxes recoverable on shareholders',
    description: 'Taxes recoverable on shareholders',
  },
  4426: { name: 'Customs duties', description: 'Customs duties' },
  4428: {
    name: 'Other taxes and duties',
    description: 'Other taxes and duties',
  },
  443: {
    name: 'OUTPUT VAT (BILLED/CHARGED TO CUSTOMERS)',
    description: 'Output VAT (billed/charged to customers)',
  },
  4431: {
    name: 'Output VAT on sales of goods',
    description: 'Output VAT on sales of goods',
  },
  4432: {
    name: 'Output VAT on services rendered',
    description: 'Output VAT on services rendered',
  },
  4433: {
    name: 'Output VAT on construction works',
    description: 'Output VAT on construction works',
  },
  4334: {
    name: 'Output VAT on self-supply',
    description: 'Output VAT on self-supply',
  },
  4335: {
    name: 'Output VAT on accrued revenue (invoices to be issued)',
    description: 'Output VAT on accrued revenue (invoices to be issued)',
  },
  444: {
    name: 'VAT PAYABLE OR VAT CREDIT BALANCE',
    description: 'VAT payable or VAT credit balance',
  },
  4441: {
    name: 'VAT payable to the State (net VAT liability)',
    description: 'VAT payable to the State (net VAT liability)',
  },
  4449: {
    name: 'VAT credit to be carried forward (recoverable)',
    description: 'VAT credit to be carried forward (recoverable)',
  },
  445: {
    name: 'INPUT VAT RECOVERABLE',
    description: 'Input VAT recoverable',
  },
  4451: {
    name: 'Input VAT on fixed asset purchases',
    description: 'Input VAT on fixed asset purchases',
  },
  4452: {
    name: 'Input VAT on stock and supply purchases',
    description: 'Input VAT on stock and supply purchases',
  },
  4453: {
    name: 'Input VAT on transport services',
    description: 'Input VAT on transport services',
  },
  4454: {
    name: 'Input VAT on external services and other charges',
    description: 'Input VAT on external services and other charges',
  },
  4455: {
    name: 'Input VAT on uninvoiced purchases',
    description: 'Input VAT on uninvoiced purchases',
  },
  4456: {
    name: "VAT transferred from other companies'autres entreprises",
    description: 'VAT transferred from other companies',
  },
  446: {
    name: "STATE D'AFFAIRES",
    description: 'State — other turnover taxes',
  },
  447: {
    name: 'STATE',
    description: 'State — taxes withheld at source (withholding taxes)',
  },
  4471: {
    name: 'General income tax withheld',
    description: 'General income tax withheld',
  },
  4472: {
    name: 'Payroll taxes withheld',
    description: 'Payroll taxes withheld',
  },
  4473: {
    name: 'National contribution withheld',
    description: 'National contribution withheld',
  },
  4474: {
    name: 'National solidarity contribution withheld',
    description: 'National solidarity contribution withheld',
  },
  4478: {
    name: 'Other withholding taxes and contributions',
    description: 'Other withholding taxes and contributions',
  },
  448: {
    name: 'STATE',
    description: 'State — accrued tax liabilities and receivables',
  },
  4486: {
    name: 'Accrued tax charges',
    description: 'Accrued tax charges',
  },
  4487: {
    name: 'Accrued income',
    description: 'Tax refunds receivable',
  },
  449: {
    name: 'STATE',
    description: 'State — miscellaneous receivables and payables',
  },
  4491: {
    name: 'State',
    description: 'State — secured tax obligations (guaranteed payments)',
  },
  4492: {
    name: 'Tax advances and prepayments made',
    description: 'Tax advances and prepayments made',
  },
  4493: {
    name: 'State endowment funds receivable',
    description: 'State endowment funds receivable',
  },
  4494: {
    name: "Equipment grants receivable from the State'équipement à recevoir",
    description: 'Equipment grants receivable from the State',
  },
  4495: {
    name: "Operating grants receivable from the State'exploitation à recevoir",
    description: 'Operating grants receivable from the State',
  },
  4496: {
    name: "Balancing grants receivable from the State'équilibre à recevoir",
    description: 'Balancing grants receivable from the State',
  },
  4499: {
    name: 'State',
    description: 'State — regulated fund provisioned',
  },

  // ────────── 45 INTERNATIONAL ORGANISATIONS ──────────
  45: {
    name: 'INTERNATIONAL ORGANISATIONS',
    description: 'International organisations',
  },
  451: {
    name: 'TRANSACTIONS WITH AFRICAN ORGANISATIONS',
    description: 'Transactions with African organisations',
  },
  452: {
    name: 'TRANSACTIONS WITH OTHER INTERNATIONAL ORGANISATIONS',
    description: 'Transactions with other international organisations',
  },
  458: {
    name: 'INTERNATIONAL ORGANISATIONS',
    description:
      'International organisations — endowment funds and grants receivable',
  },
  4581: {
    name: 'Endowment funds receivable from international organisations',
    description:
      'Endowment funds receivable from international organisations',
  },
  4582: {
    name: 'Grants receivable from international organisations',
    description: 'Grants receivable from international organisations',
  },

  // ────────── 46 PARTNERS AND GROUP ──────────
  46: {
    name: 'SHAREHOLDERS, PARTNERS AND GROUP COMPANIES',
    description: 'Shareholders, partners and group companies',
  },
  461: {
    name: 'SHAREHOLDERS',
    description: 'Shareholders — capital transactions',
  },
  4611: {
    name: 'Shareholders',
    description: 'Shareholders — contributions in kind',
  },
  4612: {
    name: 'Shareholders',
    description: 'Shareholders — cash contributions',
  },
  4613: {
    name: 'Shareholders',
    description: 'Shareholders — called but unpaid capital',
  },
  4614: {
    name: 'Partners',
    description: 'Partners — called but unpaid capital',
  },
  4615: {
    name: 'Shareholders',
    description: 'Shareholders — payments received on capital increase',
  },
  4616: {
    name: 'Shareholders',
    description: 'Shareholders — advance payments',
  },
  4617: {
    name: 'Defaulting shareholders',
    description: 'Defaulting shareholders',
  },
  4618: {
    name: 'Partners',
    description: 'Partners — other contributions',
  },
  4619: {
    name: 'Shareholders',
    description: 'Shareholders — capital to be reimbursed',
  },
  462: {
    name: 'SHAREHOLDERS',
    description:
      'Shareholders — current accounts (partners loan accounts)',
  },
  4621: {
    name: 'Partner current account',
    description: 'Partner current account — principal',
  },
  4626: {
    name: 'Accrued interest on partner current accounts',
    description: 'Accrued interest on partner current accounts',
  },
  463: {
    name: 'PARTNERS',
    description: 'Partners — joint venture transactions',
  },
  465: {
    name: 'DIVIDENDS PAYABLE TO SHAREHOLDERS',
    description: 'Dividends payable to shareholders',
  },
  466: {
    name: 'GROUP COMPANIES',
    description: 'Group companies — current accounts',
  },
  467: {
    name: 'SHAREHOLDERS',
    description: 'Shareholders — amount still due on called capital',
  },

  // ────────── 47 SUNDRY DEBTORS AND CREDITORS ──────────
  47: {
    name: 'MISCELLANEOUS DEBTORS AND CREDITORS',
    description: 'Miscellaneous debtors and creditors',
  },
  471: {
    name: "SUSPENSE ACCOUNTS (TEMPORARY HOLDING ACCOUNTS) D'ATTENTE",
    description: 'Suspense accounts (temporary holding accounts)',
  },
  4711: {
    name: 'Miscellaneous debtors',
    description: 'Miscellaneous debtors — suspense',
  },
  4712: {
    name: 'Miscellaneous creditors',
    description: 'Miscellaneous creditors — suspense',
  },
  472: {
    name: 'REMAINING PAYMENTS DUE ON PARTIALLY PAID-UP SECURITIES',
    description: 'Remaining payments due on partially paid-up securities',
  },
  4726: {
    name: 'Unpaid calls on equity investments',
    description: 'Unpaid calls on equity investments',
  },
  4727: {
    name: 'Unpaid calls on long-term securities',
    description: 'Unpaid calls on long-term securities',
  },
  4728: {
    name: 'Unpaid calls on short-term investment securities',
    description: 'Unpaid calls on short-term investment securities',
  },
  474: {
    name: 'PERIODIC ALLOCATION OF INCOME AND EXPENSES (ACCRUALS AND DEFERRALS)',
    description:
      'Periodic allocation of income and expenses (accruals and deferrals)',
  },
  4746: {
    name: 'Periodic expense allocation',
    description: 'Periodic expense allocation',
  },
  4747: {
    name: 'Periodic income allocation',
    description: 'Periodic income allocation',
  },
  475: {
    name: 'RECEIVABLES ON WORK NOT YET BILLABLE (CONTRACT WORK IN PROGRESS)',
    description:
      'Receivables on work not yet billable (contract work in progress)',
  },
  476: {
    name: "PREPAID EXPENSES (DEFERRED CHARGES) D'AVANCE",
    description: 'Prepaid expenses (deferred charges)',
  },
  477: {
    name: "DEFERRED INCOME (DEFERRED REVENUE) D'AVANCE",
    description: 'Deferred income (deferred revenue)',
  },
  478: {
    name: 'TRANSLATION DIFFERENCES',
    description:
      'Translation differences — asset (unrealised exchange losses)',
  },
  4781: {
    name: 'Decrease in foreign-currency receivables due to exchange rate movement',
    description:
      'Decrease in foreign-currency receivables due to exchange rate movement',
  },
  4782: {
    name: 'Increase in foreign-currency payables due to exchange rate movement',
    description:
      'Increase in foreign-currency payables due to exchange rate movement',
  },
  4788: {
    name: 'Translation differences offset by hedging',
    description: 'Translation differences offset by hedging',
  },
  479: {
    name: 'TRANSLATION DIFFERENCES',
    description:
      'Translation differences — liability (unrealised exchange gains)',
  },
  4791: {
    name: 'Increase in foreign-currency receivables due to exchange rate movement',
    description:
      'Increase in foreign-currency receivables due to exchange rate movement',
  },
  4792: {
    name: 'Decrease in foreign-currency payables due to exchange rate movement',
    description:
      'Decrease in foreign-currency payables due to exchange rate movement',
  },
  4798: {
    name: 'Translation gains offset by hedging',
    description: 'Translation gains offset by hedging',
  },

  // ────────── 48 RECEIVABLES AND PAYABLES OUTSIDE ORDINARY ACTIVITIES (HAO) ──────────
  48: {
    name: 'NON-ORDINARY ACTIVITY RECEIVABLES AND PAYABLES (CAPITAL ACCOUNT ITEMS)',
    description:
      'Non-ordinary activity receivables and payables (capital account items)',
  },
  481: {
    name: "SUPPLIERS OF FIXED ASSETS (CAPITAL EXPENDITURE PAYABLES) D'INVESTISSEMENTS",
    description:
      'Suppliers of fixed assets (capital expenditure payables)',
  },
  4811: {
    name: 'Payables for intangible assets purchased',
    description: 'Payables for intangible assets purchased',
  },
  4812: {
    name: 'Payables for tangible assets purchased',
    description: 'Payables for tangible assets purchased',
  },
  4817: {
    name: 'Guarantee retentions',
    description: 'Performance bond retentions — investment suppliers',
  },
  4818: {
    name: 'Uninvoiced capital expenditure payables',
    description: 'Uninvoiced capital expenditure payables',
  },
  482: {
    name: "CAPITAL EXPENDITURE SUPPLIERS D'INVESTISSEMENTS, EFFETS À PAYER",
    description: 'Capital expenditure suppliers — bills payable',
  },
  483: {
    name: 'PAYABLES ON ACQUISITION OF INVESTMENT SECURITIES',
    description: 'Payables on acquisition of investment securities',
  },
  484: {
    name: 'OTHER NON-ORDINARY ACTIVITY PAYABLES',
    description: 'Other non-ordinary activity payables',
  },
  485: {
    name: "RECEIVABLES FROM FIXED ASSET DISPOSALS D'IMMOBILISATIONS",
    description: 'Receivables from fixed asset disposals',
  },
  4851: {
    name: 'Asset disposal receivables',
    description: 'Asset disposal receivables — open account',
  },
  4852: {
    name: 'Asset disposal receivables',
    description: 'Asset disposal receivables — bills receivable',
  },
  4857: {
    name: 'Guarantee retentions',
    description: 'Performance bond retentions on asset disposals',
  },
  4858: {
    name: 'Asset disposal receivables',
    description: 'Asset disposal receivables — invoices to be issued',
  },
  486: {
    name: 'RECEIVABLES FROM DISPOSAL OF INVESTMENT SECURITIES',
    description: 'Receivables from disposal of investment securities',
  },
  488: {
    name: 'OTHER NON-ORDINARY ACTIVITY RECEIVABLES',
    description: 'Other non-ordinary activity receivables',
  },

  // ────────── 49 IMPAIRMENT AND RISK PROVISIONS (THIRD PARTY) ──────────
  49: {
    name: 'IMPAIRMENT PROVISIONS AND PROVISIONED RISKS ON THIRD-PARTY ACCOUNTS (TIERS)',
    description:
      'Impairment provisions and provisioned risks on third-party accounts',
  },
  490: {
    name: 'IMPAIRMENT ON SUPPLIER ACCOUNTS',
    description: 'Impairment on supplier accounts',
  },
  491: {
    name: 'IMPAIRMENT ON CUSTOMER RECEIVABLES',
    description: 'Impairment on customer receivables',
  },
  4911: {
    name: 'Impairment',
    description: 'Impairment — disputed receivables',
  },
  4912: {
    name: 'Impairment',
    description: 'Impairment — doubtful receivables',
  },
  492: {
    name: 'IMPAIRMENT ON EMPLOYEE RECEIVABLES',
    description: 'Impairment on employee receivables',
  },
  493: {
    name: 'IMPAIRMENT ON SOCIAL ORGANISATION RECEIVABLES',
    description: 'Impairment on social organisation receivables',
  },
  494: {
    name: 'IMPAIRMENT ON STATE AND PUBLIC AUTHORITY RECEIVABLES',
    description: 'Impairment on State and public authority receivables',
  },
  495: {
    name: 'IMPAIRMENT ON INTERNATIONAL ORGANISATION RECEIVABLES',
    description: 'Impairment on international organisation receivables',
  },
  496: {
    name: 'IMPAIRMENT ON SHAREHOLDER AND GROUP RECEIVABLES',
    description: 'Impairment on shareholder and group receivables',
  },
  4962: {
    name: 'Impairment on partner current accounts',
    description: 'Impairment on partner current accounts',
  },
  4963: {
    name: 'Impairment on joint venture transactions',
    description: 'Impairment on joint venture transactions',
  },
  4966: {
    name: 'Impairment on group current accounts',
    description: 'Impairment on group current accounts',
  },
  497: {
    name: 'IMPAIRMENT ON MISCELLANEOUS DEBTOR ACCOUNTS',
    description: 'Impairment on miscellaneous debtor accounts',
  },
  498: {
    name: 'IMPAIRMENT ON NON-ORDINARY ACTIVITY RECEIVABLES',
    description: 'Impairment on non-ordinary activity receivables',
  },
  4981: {
    name: "Impairment on asset disposal receivables'immobilisations",
    description: 'Impairment on asset disposal receivables',
  },
  4982: {
    name: 'Impairment on investment security disposal receivables',
    description: 'Impairment on investment security disposal receivables',
  },
  4983: {
    name: 'Impairment on other non-ordinary receivables',
    description: 'Impairment on other non-ordinary receivables',
  },
  499: {
    name: 'SHORT-TERM PROVISIONS FOR RISKS',
    description: 'Short-term provisions for risks',
  },
  4991: {
    name: "Short-term provisions for operating risks'exploitation",
    description: 'Short-term provisions for operating risks',
  },
  4998: {
    name: 'Short-term provisions for non-ordinary activity risks',
    description: 'Short-term provisions for non-ordinary activity risks',
  },
} as const satisfies Plan;

export type Class4AccountCode = keyof typeof class4Accounts;
