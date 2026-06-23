import {
  class1Accounts,
  class2Accounts,
  class3Accounts,
  class4Accounts,
  class5Accounts,
  class6Accounts,
  class7Accounts,
  class8Accounts,
  class9Accounts,
} from '@bemedev/accounting-uemoa';
import { toEntries } from './helpers';
import type { AccountEntry, ClassMeta } from './types';

export const CLASS_META: ClassMeta[] = [
  {
    id: 1,
    label: 'Classe 1',
    description: 'Ressources durables',
    color: 'violet',
    accounts: toEntries(class1Accounts, 1),
  },
  {
    id: 2,
    label: 'Classe 2',
    description: 'Actif immobilisé',
    color: 'yellow',
    accounts: toEntries(class2Accounts, 2),
  },
  {
    id: 3,
    label: 'Classe 3',
    description: 'Actif circulant',
    color: 'cyan',
    accounts: toEntries(class3Accounts, 3),
  },
  {
    id: 4,
    label: 'Classe 4',
    description: 'Dettes à court terme',
    color: 'teal',
    accounts: toEntries(class4Accounts, 4),
  },
  {
    id: 5,
    label: 'Classe 5',
    description: 'Trésorerie',
    color: 'emerald',
    accounts: toEntries(class5Accounts, 5),
  },
  {
    id: 6,
    label: 'Classe 6',
    description: 'Charges',
    color: 'amber',
    accounts: toEntries(class6Accounts, 6),
  },
  {
    id: 7,
    label: 'Classe 7',
    description: 'Produits',
    color: 'lime',
    accounts: toEntries(class7Accounts, 7),
  },
  {
    id: 8,
    label: 'Classe 8',
    description: 'Comptes spéciaux',
    color: 'rose',
    accounts: toEntries(class8Accounts, 8),
  },
  {
    id: 9,
    label: 'Classe 9',
    description: 'Comptabilité analytique',
    color: 'fuchsia',
    accounts: toEntries(class9Accounts, 9),
  },
];

/** Flat list of all accounts across all classes */
export const ALL_ACCOUNTS: AccountEntry[] = CLASS_META.flatMap(
  c => c.accounts,
);

export { accountPlan } from '@bemedev/accounting-uemoa';
