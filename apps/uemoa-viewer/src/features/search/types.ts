export type AccountEntry = {
  code: number;
  name: string;
  description: string;
  classId: number;
};

export type ClassMeta = {
  id: number;
  label: string;
  description: string;
  /** Tailwind color token suffix for accent */
  color: string;
  accounts: AccountEntry[];
};
