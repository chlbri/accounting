/**
 * SYSCOHADA / UEMOA — Complete Chart of Accounts
 *
 * This module exports:
 *  - Per-class account maps (class1Accounts … class9Accounts)
 *  - A merged `accountPlan` object spanning all 9 classes
 *  - Strongly typed `AccountCode` union covering every account code
 *
 * Usage:
 * ```ts
 * import { accountPlan } from '@bemedev/accounting-uemoa';
 *
 * const account = accountPlan[6011];
 * // { name: 'within the Region', description: 'Merchandise purchases within the UEMOA region' }
 * ```
 *
 * @see https://www.ohada.com/
 * Source: Official SYSCOHADA Chart of Accounts PDF – www.africa.africa-web.org
 */

import { class1Accounts, type Class1AccountCode } from './class1';
import { class2Accounts, type Class2AccountCode } from './class2';
import { class3Accounts, type Class3AccountCode } from './class3';
import { class4Accounts, type Class4AccountCode } from './class4';
import { class5Accounts, type Class5AccountCode } from './class5';
import { class6Accounts, type Class6AccountCode } from './class6';
import { class7Accounts, type Class7AccountCode } from './class7';
import { class8Accounts, type Class8AccountCode } from './class8';
import { class9Accounts, type Class9AccountCode } from './class9';

export type { Account, Plan } from './types';
export { class1Accounts, Class1AccountCode };
export { class2Accounts, Class2AccountCode };
export { class3Accounts, Class3AccountCode };
export { class4Accounts, Class4AccountCode };
export { class5Accounts, Class5AccountCode };
export { class6Accounts, Class6AccountCode };
export { class7Accounts, Class7AccountCode };
export { class8Accounts, Class8AccountCode };
export { class9Accounts, Class9AccountCode };

/**
 * The complete SYSCOHADA / UEMOA chart of accounts — all 9 classes merged
 * into a single `as const` record.
 *
 * Keys are numeric account codes. Values are `{ name, description }` objects.
 */
export const accountPlan = {
  ...class1Accounts,
  ...class2Accounts,
  ...class3Accounts,
  ...class4Accounts,
  ...class5Accounts,
  ...class6Accounts,
  ...class7Accounts,
  ...class8Accounts,
  ...class9Accounts,
} as const;

/** Union of all valid SYSCOHADA account codes (numeric). */
export type AccountCode =
  | Class1AccountCode
  | Class2AccountCode
  | Class3AccountCode
  | Class4AccountCode
  | Class5AccountCode
  | Class6AccountCode
  | Class7AccountCode
  | Class8AccountCode
  | Class9AccountCode;
