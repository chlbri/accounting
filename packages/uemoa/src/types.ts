/**
 * SYSCOHADA / UEMOA Accounting System — Core Types
 *
 * The SYSCOHADA (Système Comptable OHADA) is the unified accounting
 * framework for the 17 OHADA member states, including all UEMOA countries.
 * Source: Official PDF "SYSCOHADA: Plan de Comptes" – www.africa.africa-web.org
 *
 * @see https://www.ohada.com/
 */

/**
 * A single account entry in the SYSCOHADA chart of accounts.
 */
export type Account = {
  /** The French name of the account (as defined in the official plan) */
  name: string;
  /** English description / translation of the account */
  description: string;
};

export type Plan = Record<number, Account>;
