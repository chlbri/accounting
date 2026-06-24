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
  50: 'SHORT-TERM INVESTMENTS',
  501: 'TREASURY BILLS AND SHORT-TERM CERTIFICATES OF DEPOSIT',
  5011: 'Short-term Treasury bills',
  5012: "Financial institution short-term securities'organismes financiers",
  5013: 'Short-term cash vouchers / certificates',
  502: 'SHARES HELD AS SHORT-TERM INVESTMENTS',
  5021: 'Own shares (treasury shares)',
  5022: 'Listed shares held for trading',
  5023: 'Unlisted shares held for trading',
  5024: "Split shares'investissement ; droits de vote)",
  5025: 'Other equity-type securities',
  503: 'BONDS HELD AS SHORT-TERM INVESTMENTS',
  5031: 'Own bonds repurchased by the company',
  5032: 'Listed bonds held for trading',
  5033: 'Unlisted bonds held for trading',
  5035: 'Other debt securities held for trading',
  504: 'SUBSCRIPTION WARRANTS',
  5042: "Share subscription warrants'actions",
  5043: "Bond subscription warrants'obligations",
  505: 'NEGOTIABLE SECURITIES FROM OUTSIDE THE UEMOA REGION',
  506: 'ACCRUED INTEREST',
  5061: 'Accrued interest on Treasury bills',
  5062: 'Accrued dividends on shares',
  5063: 'Accrued interest on bonds',
  508: 'OTHER EQUIVALENT MARKETABLE VALUES',

  // ────────── 51 VALUES PENDING COLLECTION ──────────
  51: 'VALUES PENDING COLLECTION',
  511: 'BILLS PENDING COLLECTION',
  512: "BILLS SUBMITTED TO BANK FOR COLLECTION (IN TRANSIT) L'ENCAISSEMENT",
  513: 'CHEQUES RECEIVED BUT NOT YET DEPOSITED',
  514: "CHEQUES DEPOSITED BUT NOT YET CLEARED L'ENCAISSEMENT",
  515: 'CREDIT CARD RECEIPTS PENDING SETTLEMENT',
  518: "OTHER VALUES PENDING COLLECTION L'ENCAISSEMENT",
  5181: 'Warrants pending collection',
  5182: 'Business purchase notes receivable pending collection',
  5185: 'Travellers cheques pending encashment',
  5186: 'Matured coupons pending encashment',
  5187: 'Matured bond interest coupons pending encashment',

  // ────────── 52 BANKS ──────────
  52: 'BANKS',
  521: 'LOCAL BANK ACCOUNTS (SAME COUNTRY)',
  5211: 'BANK ACCOUNT X',
  5212: 'BANK ACCOUNT Y',
  522: 'BANK ACCOUNTS IN OTHER UEMOA MEMBER STATES',
  523: 'BANK ACCOUNTS IN OTHER CFA FRANC ZONE STATES',
  524: 'BANK ACCOUNTS OUTSIDE THE MONETARY ZONE',
  526: 'ACCRUED INTEREST ON BANK ACCOUNTS',

  // ────────── 53 FINANCIAL INSTITUTIONS AND EQUIVALENT ──────────
  53: 'FINANCIAL INSTITUTIONS AND EQUIVALENTS (NON-BANK)',
  531: 'POSTAL CHEQUE ACCOUNTS (CCP)',
  532: 'TREASURY',
  533: "SECURITIES MANAGEMENT AND BROKERAGE FIRMS (SGI) D'INTERMÉDIATION (S.G.I.)",
  536: 'ACCRUED INTEREST ON FINANCIAL INSTITUTION ACCOUNTS',
  538: 'OTHER FINANCIAL ORGANISATIONS',

  // ────────── 54 TREASURY INSTRUMENTS ──────────
  54: 'TREASURY INSTRUMENTS (DERIVATIVE FINANCIAL INSTRUMENTS)',
  541: "INTEREST RATE OPTIONS D'INTÉRÊT",
  542: 'FOREIGN EXCHANGE OPTIONS',
  543: 'EQUITY MARKET RATE OPTIONS',
  544: 'FUTURES AND FORWARD MARKET INSTRUMENTS',
  545: "GOLD AND PRECIOUS METAL HOLDINGS (TREASURY) D'OR ET AUTRES MÉTAUX PRÉCIEUX",

  // ────────── 56 BANKS, OVERDRAFTS AND DISCOUNT FACILITIES ──────────
  56: "BANK OVERDRAFTS, SHORT-TERM CREDIT FACILITIES AND DISCOUNTING D'ESCOMPTE",
  561: 'SHORT-TERM BANK CREDIT FACILITIES (REVOLVING CREDIT)',
  564: 'DISCOUNTING OF SEASONAL / CAMPAIGN CREDIT FACILITIES',
  565: 'ORDINARY BILL DISCOUNTING FACILITIES',
  566: 'ACCRUED INTEREST ON SHORT-TERM BANK CREDIT AND DISCOUNTING',

  // ────────── 57 CASH ON HAND ──────────
  57: 'CASH',
  571: 'HEAD OFFICE CASH',
  5711: 'in legal currency units',
  5712: 'in foreign currencies',
  572: 'BRANCH A CASH',
  5721: 'in legal currency units',
  5722: 'in foreign currencies',
  573: 'BRANCH B CASH',
  5731: 'in legal currency units',
  5732: 'in foreign currencies',

  // ────────── 58 IMPREST ACCOUNTS, LETTERS OF CREDIT AND INTERNAL TRANSFERS ──────────
  58: "PETTY CASH ADVANCES, LETTERS OF CREDIT AND INTERNAL TRANSFERS D'AVANCES, ACCRÉDITIFS ET VIREMENTS INTERNES",
  581: "IMPREST PETTY CASH FUNDS D'AVANCE",
  582: 'LETTERS OF CREDIT',
  585: 'INTERNAL FUND TRANSFERS IN TRANSIT',
  588: 'OTHER INTERNAL TRANSFERS',

  // ────────── 59 IMPAIRMENT AND RISK PROVISIONS ──────────
  59: 'IMPAIRMENT PROVISIONS AND PROVISIONED RISKS ON TREASURY ACCOUNTS',
  590: 'IMPAIRMENT ON SHORT-TERM INVESTMENT SECURITIES',
  591: 'IMPAIRMENT ON BILLS AND VALUES PENDING COLLECTION',
  592: 'IMPAIRMENT ON BANK ACCOUNTS',
  593: 'IMPAIRMENT ON FINANCIAL INSTITUTION ACCOUNTS',
  594: "IMPAIRMENT ON TREASURY INSTRUMENT ACCOUNTS D'INSTRUMENTS DE TRÉSORERIE",
  599: 'SHORT-TERM PROVISIONS FOR FINANCIAL RISKS',
} as const satisfies Plan;

export type Class5AccountCode = keyof typeof class5Accounts;
