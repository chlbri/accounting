---
name: syscohada-guide
description: >
  Comprehensive skill for working with the SYSCOHADA accounting system (Système Comptable OHADA).
  Use this skill whenever you need to implement, validate, or explain accounting entries, account
  codes, financial statement presentation, or consolidation rules under SYSCOHADA.
  Trigger on mentions of: SYSCOHADA, OHADA accounting, plan comptable OHADA, journal entries
  in African accounting context, UEMOA accounting, compte OHADA, bilan SYSCOHADA, états financiers
  OHADA, or any accounting question from an OHADA member state context.
---

# Skill: SYSCOHADA — Guide d'Application

## When to Use This Skill

Activate this skill when the user asks about:
- Specific account codes (e.g. "quel compte pour les amortissements ?")
- Journal entries / écritures comptables under SYSCOHADA
- Financial statement structure (Bilan, Compte de résultat, TFT)
- Specific operations: purchases, sales, payroll, treasury, investments, leases, FX, mergers
- Specific problems: provisions, depreciations, deferred charges/revenues
- Consolidation (groupe de sociétés, comptes consolidés)
- Differences between SYSCOHADA and IFRS/French GAAP
- Implementation of SYSCOHADA-compliant TypeScript/JavaScript accounting types

---

## Step-by-Step Instructions

### 1. Read the Reference Documents First

Before answering any SYSCOHADA question, **always read the relevant section** of one of the two reference documents:

**For account code questions (which account to use):**
→ Read [`plan_comptable_SYSCOHADA.md`](./../docs/plan_comptable_SYSCOHADA.md)

**For how to record an operation (journal entries, rules, examples):**
→ Read [`guide_application_SYSCOHADA.md`](./../docs/guide_application_SYSCOHADA.md)

Use `view_file` to read these files — they are the authoritative source for this codebase.

### 2. Identify the Operation Type

Map the user's question to one of these operation categories:

| Category | Guide Part | Key Accounts |
|---|---|---|
| Achats de biens/services | Part I, Ch.2 | 601-608, 61-63, 401 |
| Stocks | Part I, Ch.2 §2 | 31-37, 603/73 |
| Charges de personnel | Part I, Ch.3 §4 | 661-668, 431-432, 422 |
| TVA et impôts | Part I, Ch.3 §2 | 443-445, 447, 891 |
| Trésorerie | Part I, Ch.4 | 51-58, 521, 57 |
| Immobilisations | Part I, Ch.5 | 20-27, 28x, 481, 404 |
| Amortissements | Part I, Ch.5-6 | 681, 28x, 151 |
| Provisions/Dépréciations | Part I, Ch.6 | 659/686/691, 49x, 19x |
| Régularisations | Part I, Ch.6 | 476, 477, 478, 479, 408, 418 |
| Actifs incorporels | Part II, Ch.2 | 212-215 |
| Crédit-bail | Part II, Ch.8 | 17, 671, 672, 2x |
| Capitaux propres | Part II, Ch.16 | 10x-11x, 1051-1053 |
| Subventions | Part II, Ch.17 | 14, 71, 88, 865 |
| Emprunts obligataires | Part II, Ch.20 | 161, 169, 671 |
| Devises | Part II, Ch.22 | 676, 776, 476, 477 |
| Fusions | Part II, Ch.38 | 1053, 81x, 82x |
| États financiers | Part III | Bilan, CR, TFT |
| Consolidation | Part IV | Goodwill, méthodes |

### 3. Apply the Double-Entry Rules

Every journal entry follows these SYSCOHADA rules:

```
CONVENTION:
  Débit  (Dr) = Augmentation actif / Diminution passif / Charge
  Crédit (Cr) = Diminution actif / Augmentation passif / Produit

BILAN:
  Actif (Dr+) : Classes 2, 3, 4 débiteurs, 5 positive
  Passif (Cr+): Classes 1, 4 créditeurs, 5 négative (56x)

RÉSULTAT:
  Charges (Dr): Classes 6, 81, 83, 85, 87, 89
  Produits (Cr): Classes 7, 82, 84, 86, 88
```

### 4. Validate Account Codes

Always validate that account codes follow the SYSCOHADA codification:

```
Rules:
  - 2 digits  = compte principal (ex: 60 Achats)
  - 3 digits  = subdivision (ex: 601 Marchandises)
  - 4 digits  = sous-subdivision (ex: 6011 Achats de marchandises A)
  - 4+ digits = entité-specific (libre après SYSCOHADA base)

Mnemonics:
  - xX8 = residual "Divers" account
  - x9  = provision/dépréciation (credit balance for assets)
  - 29, 39, 49, 59 = provisions at OPPOSITE sign to class default
```

### 5. TypeScript Implementation Guidelines

When implementing SYSCOHADA in TypeScript:

```typescript
// Account number typing
type AccountCode = string; // 2-9 digits, e.g. "601", "4011"
type ClassNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

// Entry direction
type EntryType = 'debit' | 'credit';

// Operation categories matching SYSCOHADA
type OperationCategory =
  | 'achats'          // Class 6 expenses + Class 4 payables
  | 'ventes'          // Class 7 revenues + Class 4 receivables
  | 'immobilisations' // Class 2 assets + Class 4 investment payables
  | 'stocks'          // Class 3
  | 'tresorerie'      // Class 5
  | 'capitaux'        // Class 1
  | 'hao';            // Class 8

// Journal entry
interface JournalEntry {
  date: Date;
  reference: string;
  description: string;
  lines: JournalLine[];
}

interface JournalLine {
  account: AccountCode;
  label: string;
  debit?: number;
  credit?: number;
}

// Validation: entries must balance
function validateEntry(entry: JournalEntry): boolean {
  const totalDebit = entry.lines.reduce((s, l) => s + (l.debit ?? 0), 0);
  const totalCredit = entry.lines.reduce((s, l) => s + (l.credit ?? 0), 0);
  return Math.abs(totalDebit - totalCredit) < 0.01; // tolerance for rounding
}
```

---

## Key SYSCOHADA Rules to Always Enforce

### Rule 1: Account Code Integrity
Never invent account codes. All codes must be found in the official plan comptable. Use the reference file to verify.

### Rule 2: HAO vs Ordinaire
- Operations that are **exceptional, non-recurring, or related to asset disposals** → Class 8 (HAO)
- All **normal, recurring business** operations → Classes 6/7

### Rule 3: Symmetry of Charges and Provisions
- Every provision **dotation** (Débit 6x/8x) has a matching **provision account** (Crédit 1x/4x/5x)
- Every provision **reprise** (Débit 1x/4x/5x) has a matching **reprise account** (Crédit 7x/8x)

### Rule 4: Asset Disposal (Décomptabilisation)
When an asset is disposed of, ALWAYS:
1. Record the book value in `81x` (charge)
2. Reverse the accumulated depreciation (`28x`)
3. Reverse the gross asset (`2x`)
4. Record the sale proceeds in `82x` (product)

### Rule 5: TVA
- TVA collected (on sales) → `443` (liability)
- TVA deductible on purchases → `4452` (asset, current purchases) or `4451` (asset, investments)
- TVA payable = `443` − `445` → transferred to `444`

### Rule 6: Year-End Regularizations
Always check at year-end for:
- [ ] Accrued charges → `408` / `478`
- [ ] Accrued revenues → `418` / `479`
- [ ] Prepaid charges → `476`
- [ ] Deferred revenues → `477`
- [ ] Stock adjustments → `603` / `73x`
- [ ] Depreciation entries → `681`, `28x`
- [ ] Provisions review → `659/686/691`, `49x/19x`

---

## Common Patterns — Quick Reference

### Purchase with VAT
```
Débit  6011  Achats marchandises         1000
Débit  4452  TVA récupérable sur achats   100
  Crédit 401  Fournisseurs                    1100
```

### Sale with VAT
```
Débit  411   Clients                     1200
  Crédit 701  Ventes de marchandises          1000
  Crédit 443  TVA collectée                    200
```

### Payroll
```
Débit  661   Salaires bruts              1000
  Crédit 431  Sécurité sociale (salarié)       120
  Crédit 432  Retraite (salarié)               70
  Crédit 447  Impôt retenu à la source         50
  Crédit 422  Net à payer                      760
```

### Fixed Asset Purchase
```
Débit  2443  Matériel bureautique         500
Débit  4451  TVA récupérable immo          50
  Crédit 481  Fournisseurs d'investissements   550
```

### Depreciation
```
Débit  681   Dotations aux amortissements  100
  Crédit 284  Amortissements matériel          100
```

### Asset Disposal
```
// Step 1: Record book value
Débit  812   VNC cession immob corporelle  300
  Crédit 284  Amortissements cumulés           200
  Crédit 2443 Matériel (coût d'entrée)         500

// Step 2: Record proceeds
Débit  485   Débiteur sur cession          350
  Crédit 822  Produits des cessions            350

// Result: 822 (350) − 812 (300) = 50 gain
```

### Lease (Crédit-bail preneur)
```
// At inception:
Débit  2443  Matériel (valeur vénale)     5000
  Crédit 17   Dettes location-acquisition     5000

// Each payment:
Débit  671   Intérêts (fraction financière) 100
Débit  17    Remboursement capital          400
  Crédit 401  Fournisseur                      500
```

### FX Receivable (year-end adjustment)
```
// If loss (exchange rate moved against):
Débit  476   Charges constatées d'avance   XX
  Crédit 411  Clients (ajustement cours)       XX

// If gain (conservative approach):
Débit  411   Clients (ajustement cours)     XX
  Crédit 477  Produits constatés d'avance       XX
```

---

## References

- [`plan_comptable_SYSCOHADA.md`](./../docs/plan_comptable_SYSCOHADA.md) — Full chart of accounts summary
- [`guide_application_SYSCOHADA.md`](./../docs/guide_application_SYSCOHADA.md) — Application guide summary
- Original PDF: `Guide_d_application_du_SYSCOHADA_2.pdf` (437 pages)
- Original PDF: `Ohada_syscohada_plan_comptable_1.pdf` (49 pages)
- Official OHADA website: https://www.ohada.com
