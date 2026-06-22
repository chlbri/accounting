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
 * // { name: 'dans la Région', description: 'Merchandise purchases within the UEMOA region' }
 * ```
 *
 * @see https://www.ohada.com/
 * Source: Official SYSCOHADA Chart of Accounts PDF – www.africa.africa-web.org
 */
export type { Account, Plan } from './types';

export { class1Accounts } from './class1';
export type { Class1AccountCode } from './class1';

export { class2Accounts } from './class2';
export type { Class2AccountCode } from './class2';

export { class3Accounts } from './class3';
export type { Class3AccountCode } from './class3';

export { class4Accounts } from './class4';
export type { Class4AccountCode } from './class4';

export { class5Accounts } from './class5';
export type { Class5AccountCode } from './class5';

export { class6Accounts } from './class6';
export type { Class6AccountCode } from './class6';

export { class7Accounts } from './class7';
export type { Class7AccountCode } from './class7';

export { class8Accounts } from './class8';
export type { Class8AccountCode } from './class8';

export { class9Accounts } from './class9';
export type { Class9AccountCode } from './class9';

import { class1Accounts } from './class1';
import { class2Accounts } from './class2';
import { class3Accounts } from './class3';
import { class4Accounts } from './class4';
import { class5Accounts } from './class5';
import { class6Accounts } from './class6';
import { class7Accounts } from './class7';
import { class8Accounts } from './class8';
import { class9Accounts } from './class9';

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
export type AccountCode = keyof typeof accountPlan;
