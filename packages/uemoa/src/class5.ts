/**
 * SYSCOHADA — CLASSE 5 : Comptes de trésorerie
 * (Class 5: Cash and Treasury Accounts)
 *
 * Covers: short-term investments, bills receivable, bank accounts,
 * financial institutions, treasury instruments, bank overdrafts,
 * petty cash, internal transfer accounts, and impairment provisions.
 *
 * Source: Official SYSCOHADA Chart of Accounts PDF, pages 30–32.
 */
import type { Plan } from './types';

export const class5Accounts = {
  // ────────── 50 TITRES DE PLACEMENT ──────────
  50: {
    name: 'TITRES DE PLACEMENT',
    description:
      'Short-term investment securities (marketable securities)',
  },
  501: {
    name: 'TITRES DU TRÉSOR ET BONS DE CAISSE À COURT TERME',
    description: 'Treasury bills and short-term certificates of deposit',
  },
  5011: {
    name: 'Titres du Trésor à court terme',
    description: 'Short-term Treasury bills',
  },
  5012: {
    name: "Titres d'organismes financiers",
    description: 'Financial institution short-term securities',
  },
  5013: {
    name: 'Bons de caisse à court terme',
    description: 'Short-term cash vouchers / certificates',
  },
  502: {
    name: 'ACTIONS',
    description: 'Shares held as short-term investments',
  },
  5021: {
    name: 'Actions propres',
    description: 'Own shares (treasury shares)',
  },
  5022: {
    name: 'Actions cotées',
    description: 'Listed shares held for trading',
  },
  5023: {
    name: 'Actions non cotées',
    description: 'Unlisted shares held for trading',
  },
  5024: {
    name: "Actions démembrées (certificats d'investissement ; droits de vote)",
    description:
      'Split shares — investment certificates and voting rights',
  },
  5025: {
    name: 'Autres titres conférant un droit de propriété',
    description: 'Other equity-type securities',
  },
  503: {
    name: 'OBLIGATIONS',
    description: 'Bonds held as short-term investments',
  },
  5031: {
    name: 'Obligations émises par la société et rachetées par elle',
    description: 'Own bonds repurchased by the company',
  },
  5032: {
    name: 'Obligations cotées',
    description: 'Listed bonds held for trading',
  },
  5033: {
    name: 'Obligations non cotées',
    description: 'Unlisted bonds held for trading',
  },
  5035: {
    name: 'Autres titres conférant un droit de créance',
    description: 'Other debt securities held for trading',
  },
  504: {
    name: 'BONS DE SOUSCRIPTION',
    description: 'Subscription warrants',
  },
  5042: {
    name: "Bons de souscription d'actions",
    description: 'Share subscription warrants',
  },
  5043: {
    name: "Bons de souscription d'obligations",
    description: 'Bond subscription warrants',
  },
  505: {
    name: 'TITRES NÉGOCIABLES HORS RÉGION',
    description: 'Negotiable securities from outside the UEMOA region',
  },
  506: {
    name: 'INTÉRÊTS COURUS',
    description: 'Accrued interest on short-term investment securities',
  },
  5061: {
    name: 'Titres du Trésor et bons de caisse à court terme',
    description: 'Accrued interest on Treasury bills',
  },
  5062: { name: 'Actions', description: 'Accrued dividends on shares' },
  5063: { name: 'Obligations', description: 'Accrued interest on bonds' },
  508: {
    name: 'AUTRES VALEURS ASSIMILÉES',
    description: 'Other equivalent marketable values',
  },

  // ────────── 51 VALEURS À ENCAISSER ──────────
  51: {
    name: 'VALEURS À ENCAISSER',
    description:
      'Values pending collection (bills and cheques not yet cleared)',
  },
  511: {
    name: 'EFFETS À ENCAISSER',
    description: 'Bills of exchange to collect (held in portfolio)',
  },
  512: {
    name: "EFFETS À L'ENCAISSEMENT",
    description: 'Bills submitted to bank for collection (in transit)',
  },
  513: {
    name: 'CHÈQUES À ENCAISSER',
    description: 'Cheques received but not yet deposited',
  },
  514: {
    name: "CHÈQUES À L'ENCAISSEMENT",
    description: 'Cheques deposited but not yet cleared',
  },
  515: {
    name: 'CARTES DE CRÉDIT À ENCAISSER',
    description: 'Credit card receipts pending settlement',
  },
  518: {
    name: "AUTRES VALEURS À L'ENCAISSEMENT",
    description: 'Other values pending collection',
  },
  5181: { name: 'Warrants', description: 'Warrants pending collection' },
  5182: {
    name: 'Billets de fonds',
    description: 'Business purchase notes receivable pending collection',
  },
  5185: {
    name: 'Chèques de voyage',
    description: 'Travellers cheques pending encashment',
  },
  5186: {
    name: 'Coupons échus',
    description: 'Matured coupons pending encashment',
  },
  5187: {
    name: 'Intérêts échus des obligations',
    description: 'Matured bond interest coupons pending encashment',
  },

  // ────────── 52 BANQUES ──────────
  52: {
    name: 'BANQUES',
    description: 'Bank accounts (current / demand accounts)',
  },
  521: {
    name: 'BANQUES LOCALES',
    description: 'Local bank accounts (same country)',
  },
  5211: {
    name: 'BANQUES X',
    description:
      'Bank account — Bank X (placeholder for actual bank name)',
  },
  5212: {
    name: 'BANQUE Y',
    description:
      'Bank account — Bank Y (placeholder for actual bank name)',
  },
  522: {
    name: 'BANQUES AUTRES ÉTATS RÉGION',
    description: 'Bank accounts in other UEMOA member states',
  },
  523: {
    name: 'BANQUES AUTRES ÉTATS ZONE MONÉTAIRE',
    description: 'Bank accounts in other CFA franc zone states',
  },
  524: {
    name: 'BANQUES HORS ZONE MONÉTAIRE',
    description: 'Bank accounts outside the monetary zone',
  },
  526: {
    name: 'BANQUES, INTÉRÊTS COURUS',
    description: 'Accrued interest on bank accounts',
  },

  // ────────── 53 ÉTABLISSEMENTS FINANCIERS ET ASSIMILÉS ──────────
  53: {
    name: 'ÉTABLISSEMENTS FINANCIERS ET ASSIMILÉS',
    description: 'Financial institutions and equivalents (non-bank)',
  },
  531: {
    name: 'CHÈQUES POSTAUX',
    description: 'Postal cheque accounts (CCP)',
  },
  532: {
    name: 'TRÉSOR',
    description: 'Treasury accounts (government deposits)',
  },
  533: {
    name: "SOCIÉTÉS DE GESTION ET D'INTERMÉDIATION (S.G.I.)",
    description: 'Securities management and brokerage firms (SGI)',
  },
  536: {
    name: 'ÉTABLISSEMENTS FINANCIERS, INTÉRÊTS COURUS',
    description: 'Accrued interest on financial institution accounts',
  },
  538: {
    name: 'AUTRES ORGANISMES FINANCIERS',
    description: 'Other financial organisations',
  },

  // ────────── 54 INSTRUMENTS DE TRÉSORERIE ──────────
  54: {
    name: 'INSTRUMENTS DE TRÉSORERIE',
    description: 'Treasury instruments (derivative financial instruments)',
  },
  541: {
    name: "OPTIONS DE TAUX D'INTÉRÊT",
    description: 'Interest rate options',
  },
  542: {
    name: 'OPTIONS DE TAUX DE CHANGE',
    description: 'Foreign exchange options',
  },
  543: {
    name: 'OPTIONS DE TAUX BOURSIERS',
    description: 'Equity market rate options',
  },
  544: {
    name: 'INSTRUMENTS DE MARCHÉS À TERME',
    description: 'Futures and forward market instruments',
  },
  545: {
    name: "AVOIRS D'OR ET AUTRES MÉTAUX PRÉCIEUX",
    description: 'Gold and precious metal holdings (treasury)',
  },

  // ────────── 56 BANQUES, CRÉDITS DE TRÉSORERIE ET D'ESCOMPTE ──────────
  56: {
    name: "BANQUES, CRÉDITS DE TRÉSORERIE ET D'ESCOMPTE",
    description:
      'Bank overdrafts, short-term credit facilities and discounting',
  },
  561: {
    name: 'CRÉDITS DE TRÉSORERIE',
    description: 'Short-term bank credit facilities (revolving credit)',
  },
  564: {
    name: 'ESCOMPTE DE CRÉDITS DE CAMPAGNE',
    description: 'Discounting of seasonal / campaign credit facilities',
  },
  565: {
    name: 'ESCOMPTE DE CRÉDITS ORDINAIRES',
    description: 'Ordinary bill discounting facilities',
  },
  566: {
    name: 'BANQUES, CRÉDITS DE TRÉSORERIE, INTÉRÊTS COURUS',
    description:
      'Accrued interest on short-term bank credit and discounting',
  },

  // ────────── 57 CAISSE ──────────
  57: { name: 'CAISSE', description: 'Cash on hand (petty cash)' },
  571: { name: 'CAISSE SIÈGE SOCIAL', description: 'Head office cash' },
  5711: {
    name: 'en unités monétaires légales',
    description: 'Head office cash — local currency',
  },
  5712: {
    name: 'en devises',
    description: 'Head office cash — foreign currency',
  },
  572: { name: 'CAISSE SUCCURSALE A', description: 'Branch A cash' },
  5721: {
    name: 'en unités monétaires légales',
    description: 'Branch A cash — local currency',
  },
  5722: {
    name: 'en devises',
    description: 'Branch A cash — foreign currency',
  },
  573: { name: 'CAISSE SUCCURSALE B', description: 'Branch B cash' },
  5731: {
    name: 'en unités monétaires légales',
    description: 'Branch B cash — local currency',
  },
  5732: {
    name: 'en devises',
    description: 'Branch B cash — foreign currency',
  },

  // ────────── 58 RÉGIES D'AVANCES, ACCRÉDITIFS ET VIREMENTS INTERNES ──────────
  58: {
    name: "RÉGIES D'AVANCES, ACCRÉDITIFS ET VIREMENTS INTERNES",
    description:
      'Petty cash advances, letters of credit and internal transfers',
  },
  581: {
    name: "RÉGIES D'AVANCE",
    description: 'Imprest petty cash funds',
  },
  582: { name: 'ACCRÉDITIFS', description: 'Letters of credit' },
  585: {
    name: 'VIREMENTS DE FONDS',
    description: 'Internal fund transfers in transit',
  },
  588: {
    name: 'AUTRES VIREMENTS INTERNES',
    description: 'Other internal transfers',
  },

  // ────────── 59 DÉPRÉCIATIONS ET RISQUES PROVISIONNÉS ──────────
  59: {
    name: 'DÉPRÉCIATIONS ET RISQUES PROVISIONNÉS',
    description:
      'Impairment provisions and provisioned risks on treasury accounts',
  },
  590: {
    name: 'DÉPRÉCIATIONS DES TITRES DE PLACEMENT',
    description: 'Impairment on short-term investment securities',
  },
  591: {
    name: 'DÉPRÉCIATIONS DES TITRES ET VALEURS À ENCAISSER',
    description: 'Impairment on bills and values pending collection',
  },
  592: {
    name: 'DÉPRÉCIATIONS DES COMPTES BANQUES',
    description: 'Impairment on bank accounts',
  },
  593: {
    name: 'DÉPRÉCIATIONS DES COMPTES ÉTABLISSEMENTS FINANCIERS ET ASSIMILÉS',
    description: 'Impairment on financial institution accounts',
  },
  594: {
    name: "DÉPRÉCIATIONS DES COMPTES D'INSTRUMENTS DE TRÉSORERIE",
    description: 'Impairment on treasury instrument accounts',
  },
  599: {
    name: 'RISQUES PROVISIONNÉS À CARACTÈRE FINANCIER',
    description: 'Short-term provisions for financial risks',
  },
} as const satisfies Plan;

export type Class5AccountCode = keyof typeof class5Accounts;
