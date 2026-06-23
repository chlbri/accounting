/**
 * SYSCOHADA — CLASS 5: Cash and Treasury Accounts
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
  // ────────── 50 SHORT-TERM INVESTMENTS ──────────
  50: {
    name: 'SHORT-TERM INVESTMENTS',
    description:
      'Short-term investment securities (marketable securities)',
  },
  501: {
    name: 'TREASURY BILLS AND SHORT-TERM CERTIFICATES OF DEPOSIT',
    description: 'Treasury bills and short-term certificates of deposit',
  },
  5011: {
    name: 'Short-term Treasury bills',
    description: 'Short-term Treasury bills',
  },
  5012: {
    name: "Financial institution short-term securities'organismes financiers",
    description: 'Financial institution short-term securities',
  },
  5013: {
    name: 'Short-term cash vouchers / certificates',
    description: 'Short-term cash vouchers / certificates',
  },
  502: {
    name: 'SHARES HELD AS SHORT-TERM INVESTMENTS',
    description: 'Shares held as short-term investments',
  },
  5021: {
    name: 'Own shares (treasury shares)',
    description: 'Own shares (treasury shares)',
  },
  5022: {
    name: 'Listed shares held for trading',
    description: 'Listed shares held for trading',
  },
  5023: {
    name: 'Unlisted shares held for trading',
    description: 'Unlisted shares held for trading',
  },
  5024: {
    name: "Split shares'investissement ; droits de vote)",
    description:
      'Split shares — investment certificates and voting rights',
  },
  5025: {
    name: 'Other equity-type securities',
    description: 'Other equity-type securities',
  },
  503: {
    name: 'BONDS HELD AS SHORT-TERM INVESTMENTS',
    description: 'Bonds held as short-term investments',
  },
  5031: {
    name: 'Own bonds repurchased by the company',
    description: 'Own bonds repurchased by the company',
  },
  5032: {
    name: 'Listed bonds held for trading',
    description: 'Listed bonds held for trading',
  },
  5033: {
    name: 'Unlisted bonds held for trading',
    description: 'Unlisted bonds held for trading',
  },
  5035: {
    name: 'Other debt securities held for trading',
    description: 'Other debt securities held for trading',
  },
  504: {
    name: 'SUBSCRIPTION WARRANTS',
    description: 'Subscription warrants',
  },
  5042: {
    name: "Share subscription warrants'actions",
    description: 'Share subscription warrants',
  },
  5043: {
    name: "Bond subscription warrants'obligations",
    description: 'Bond subscription warrants',
  },
  505: {
    name: 'NEGOTIABLE SECURITIES FROM OUTSIDE THE UEMOA REGION',
    description: 'Negotiable securities from outside the UEMOA region',
  },
  506: {
    name: 'ACCRUED INTEREST',
    description: 'Accrued interest on short-term investment securities',
  },
  5061: {
    name: 'Accrued interest on Treasury bills',
    description: 'Accrued interest on Treasury bills',
  },
  5062: {
    name: 'Accrued dividends on shares',
    description: 'Accrued dividends on shares',
  },
  5063: {
    name: 'Accrued interest on bonds',
    description: 'Accrued interest on bonds',
  },
  508: {
    name: 'OTHER EQUIVALENT MARKETABLE VALUES',
    description: 'Other equivalent marketable values',
  },

  // ────────── 51 VALUES PENDING COLLECTION ──────────
  51: {
    name: 'VALUES PENDING COLLECTION',
    description:
      'Values pending collection (bills and cheques not yet cleared)',
  },
  511: {
    name: 'BILLS PENDING COLLECTION',
    description: 'Bills of exchange to collect (held in portfolio)',
  },
  512: {
    name: "BILLS SUBMITTED TO BANK FOR COLLECTION (IN TRANSIT) L'ENCAISSEMENT",
    description: 'Bills submitted to bank for collection (in transit)',
  },
  513: {
    name: 'CHEQUES RECEIVED BUT NOT YET DEPOSITED',
    description: 'Cheques received but not yet deposited',
  },
  514: {
    name: "CHEQUES DEPOSITED BUT NOT YET CLEARED L'ENCAISSEMENT",
    description: 'Cheques deposited but not yet cleared',
  },
  515: {
    name: 'CREDIT CARD RECEIPTS PENDING SETTLEMENT',
    description: 'Credit card receipts pending settlement',
  },
  518: {
    name: "OTHER VALUES PENDING COLLECTION L'ENCAISSEMENT",
    description: 'Other values pending collection',
  },
  5181: {
    name: 'Warrants pending collection',
    description: 'Warrants pending collection',
  },
  5182: {
    name: 'Business purchase notes receivable pending collection',
    description: 'Business purchase notes receivable pending collection',
  },
  5185: {
    name: 'Travellers cheques pending encashment',
    description: 'Travellers cheques pending encashment',
  },
  5186: {
    name: 'Matured coupons pending encashment',
    description: 'Matured coupons pending encashment',
  },
  5187: {
    name: 'Matured bond interest coupons pending encashment',
    description: 'Matured bond interest coupons pending encashment',
  },

  // ────────── 52 BANKS ──────────
  52: {
    name: 'BANKS',
    description: 'Bank accounts (current / demand accounts)',
  },
  521: {
    name: 'LOCAL BANK ACCOUNTS (SAME COUNTRY)',
    description: 'Local bank accounts (same country)',
  },
  5211: {
    name: 'BANK ACCOUNT X',
    description:
      'Bank account — Bank X (placeholder for actual bank name)',
  },
  5212: {
    name: 'BANK ACCOUNT Y',
    description:
      'Bank account — Bank Y (placeholder for actual bank name)',
  },
  522: {
    name: 'BANK ACCOUNTS IN OTHER UEMOA MEMBER STATES',
    description: 'Bank accounts in other UEMOA member states',
  },
  523: {
    name: 'BANK ACCOUNTS IN OTHER CFA FRANC ZONE STATES',
    description: 'Bank accounts in other CFA franc zone states',
  },
  524: {
    name: 'BANK ACCOUNTS OUTSIDE THE MONETARY ZONE',
    description: 'Bank accounts outside the monetary zone',
  },
  526: {
    name: 'ACCRUED INTEREST ON BANK ACCOUNTS',
    description: 'Accrued interest on bank accounts',
  },

  // ────────── 53 FINANCIAL INSTITUTIONS AND EQUIVALENT ──────────
  53: {
    name: 'FINANCIAL INSTITUTIONS AND EQUIVALENTS (NON-BANK)',
    description: 'Financial institutions and equivalents (non-bank)',
  },
  531: {
    name: 'POSTAL CHEQUE ACCOUNTS (CCP)',
    description: 'Postal cheque accounts (CCP)',
  },
  532: {
    name: 'TREASURY',
    description: 'Treasury accounts (government deposits)',
  },
  533: {
    name: "SECURITIES MANAGEMENT AND BROKERAGE FIRMS (SGI) D'INTERMÉDIATION (S.G.I.)",
    description: 'Securities management and brokerage firms (SGI)',
  },
  536: {
    name: 'ACCRUED INTEREST ON FINANCIAL INSTITUTION ACCOUNTS',
    description: 'Accrued interest on financial institution accounts',
  },
  538: {
    name: 'OTHER FINANCIAL ORGANISATIONS',
    description: 'Other financial organisations',
  },

  // ────────── 54 TREASURY INSTRUMENTS ──────────
  54: {
    name: 'TREASURY INSTRUMENTS (DERIVATIVE FINANCIAL INSTRUMENTS)',
    description: 'Treasury instruments (derivative financial instruments)',
  },
  541: {
    name: "INTEREST RATE OPTIONS D'INTÉRÊT",
    description: 'Interest rate options',
  },
  542: {
    name: 'FOREIGN EXCHANGE OPTIONS',
    description: 'Foreign exchange options',
  },
  543: {
    name: 'EQUITY MARKET RATE OPTIONS',
    description: 'Equity market rate options',
  },
  544: {
    name: 'FUTURES AND FORWARD MARKET INSTRUMENTS',
    description: 'Futures and forward market instruments',
  },
  545: {
    name: "GOLD AND PRECIOUS METAL HOLDINGS (TREASURY) D'OR ET AUTRES MÉTAUX PRÉCIEUX",
    description: 'Gold and precious metal holdings (treasury)',
  },

  // ────────── 56 BANKS, OVERDRAFTS AND DISCOUNT FACILITIES ──────────
  56: {
    name: "BANK OVERDRAFTS, SHORT-TERM CREDIT FACILITIES AND DISCOUNTING D'ESCOMPTE",
    description:
      'Bank overdrafts, short-term credit facilities and discounting',
  },
  561: {
    name: 'SHORT-TERM BANK CREDIT FACILITIES (REVOLVING CREDIT)',
    description: 'Short-term bank credit facilities (revolving credit)',
  },
  564: {
    name: 'DISCOUNTING OF SEASONAL / CAMPAIGN CREDIT FACILITIES',
    description: 'Discounting of seasonal / campaign credit facilities',
  },
  565: {
    name: 'ORDINARY BILL DISCOUNTING FACILITIES',
    description: 'Ordinary bill discounting facilities',
  },
  566: {
    name: 'ACCRUED INTEREST ON SHORT-TERM BANK CREDIT AND DISCOUNTING',
    description:
      'Accrued interest on short-term bank credit and discounting',
  },

  // ────────── 57 CASH ON HAND ──────────
  57: { name: 'CASH', description: 'Cash on hand (petty cash)' },
  571: { name: 'HEAD OFFICE CASH', description: 'Head office cash' },
  5711: {
    name: 'in legal currency units',
    description: 'Head office cash — local currency',
  },
  5712: {
    name: 'in foreign currencies',
    description: 'Head office cash — foreign currency',
  },
  572: { name: 'BRANCH A CASH', description: 'Branch A cash' },
  5721: {
    name: 'in legal currency units',
    description: 'Branch A cash — local currency',
  },
  5722: {
    name: 'in foreign currencies',
    description: 'Branch A cash — foreign currency',
  },
  573: { name: 'BRANCH B CASH', description: 'Branch B cash' },
  5731: {
    name: 'in legal currency units',
    description: 'Branch B cash — local currency',
  },
  5732: {
    name: 'in foreign currencies',
    description: 'Branch B cash — foreign currency',
  },

  // ────────── 58 IMPREST ACCOUNTS, LETTERS OF CREDIT AND INTERNAL TRANSFERS ──────────
  58: {
    name: "PETTY CASH ADVANCES, LETTERS OF CREDIT AND INTERNAL TRANSFERS D'AVANCES, ACCRÉDITIFS ET VIREMENTS INTERNES",
    description:
      'Petty cash advances, letters of credit and internal transfers',
  },
  581: {
    name: "IMPREST PETTY CASH FUNDS D'AVANCE",
    description: 'Imprest petty cash funds',
  },
  582: { name: 'LETTERS OF CREDIT', description: 'Letters of credit' },
  585: {
    name: 'INTERNAL FUND TRANSFERS IN TRANSIT',
    description: 'Internal fund transfers in transit',
  },
  588: {
    name: 'OTHER INTERNAL TRANSFERS',
    description: 'Other internal transfers',
  },

  // ────────── 59 IMPAIRMENT AND RISK PROVISIONS ──────────
  59: {
    name: 'IMPAIRMENT PROVISIONS AND PROVISIONED RISKS ON TREASURY ACCOUNTS',
    description:
      'Impairment provisions and provisioned risks on treasury accounts',
  },
  590: {
    name: 'IMPAIRMENT ON SHORT-TERM INVESTMENT SECURITIES',
    description: 'Impairment on short-term investment securities',
  },
  591: {
    name: 'IMPAIRMENT ON BILLS AND VALUES PENDING COLLECTION',
    description: 'Impairment on bills and values pending collection',
  },
  592: {
    name: 'IMPAIRMENT ON BANK ACCOUNTS',
    description: 'Impairment on bank accounts',
  },
  593: {
    name: 'IMPAIRMENT ON FINANCIAL INSTITUTION ACCOUNTS',
    description: 'Impairment on financial institution accounts',
  },
  594: {
    name: "IMPAIRMENT ON TREASURY INSTRUMENT ACCOUNTS D'INSTRUMENTS DE TRÉSORERIE",
    description: 'Impairment on treasury instrument accounts',
  },
  599: {
    name: 'SHORT-TERM PROVISIONS FOR FINANCIAL RISKS',
    description: 'Short-term provisions for financial risks',
  },
} as const satisfies Plan;

export type Class5AccountCode = keyof typeof class5Accounts;
