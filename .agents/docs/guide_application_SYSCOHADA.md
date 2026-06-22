# Guide d'Application SYSCOHADA — Résumé Structuré

> **Source** : `Guide_d_application_du_SYSCOHADA_2.pdf` (437 pages, 29 Mo)  
> **Référence légale** : Acte Uniforme OHADA relatif au droit comptable et à l'information financière (AUDCIF)

---

## Structure du guide

Le guide est divisé en **4 parties** :

| Partie | Titre | Chapitres |
|---|---|---|
| **I** | Opérations courantes | 1–6 |
| **II** | Opérations et problèmes spécifiques | 1–41 |
| **III** | Présentation des états financiers annuels | Bilan, CR, TFT, Notes |
| **IV** | Comptes consolidés | 1–7 |

---

## PARTIE I — Opérations Courantes

### Chapitre 1 — Plan de Comptes et Subdivisions

**Logique des classes :**
- Classes 1–5 = comptes de **situation** (bilan)
- Classes 6, 7, 8 = comptes de **gestion** (résultat)
- Bilan vertical : haut = classes 1–2, bas = classes 3–5

**Codification :**
- Chiffre `8` en 3ᵉ/4ᵉ position → compte résiduel « Divers »
- Chiffre `9` en 2ᵉ position → provision/dépréciation (solde opposé)
- Subdivision possible après 4 chiffres selon les besoins de l'entité

**Nomenclatures :** L'entité peut ajouter sa propre codification analytique après les 4 chiffres SYSCOHADA, mais doit respecter les codes et intitulés officiels.

**Exemple de codification étendue :**
```
6047.17.02
│    │  └── Fonction (service comptable = 02)
│    └───── Nomenclature nationale (papier photocopieur = 17)
└────────── Compte SYSCOHADA (Matières consommables)
```

---

### Chapitre 2 — Achats et Ventes de Biens et Services

#### Section 1 — Opérations brutes

**Trois types d'achats :**

| Type | Compte | Description |
|---|---|---|
| Investissements (immobilisations) | 481 / 404 | Biens durables |
| Charges (consommables) | 401 → 60x | Circuit courant |
| Services | 61, 62, 63 | Immédiatement consommés |

**Comptes d'achats (classe 60) :**
```
601  Marchandises (revente sans transformation)
602  Matières premières (transformation)
604  Matières consommables (fabrication sans entrer dans le produit)
604  Fournitures non liées (faible valeur unitaire ex: crayons)
608  Emballages non immobilisés
```
> ⚠️ Les frais accessoires d'achat sont inclus dans le compte d'achat (ex: 6015 = frais sur achats de marchandises)

**TVA récupérable :**
- `4451` → sur immobilisations
- `4452` → sur achats courants

**Contreparties recommandées :**
- Achats courants → `401` Fournisseurs
- Achats d'immobilisations → `481` ou `404`

#### Section 2 — Stocks

**Deux méthodes d'inventaire :**

| Méthode | Description | Écriture clé |
|---|---|---|
| **Inventaire intermittent** | Régularisation en fin d'exercice seulement | 603 Variation de stock (débit/crédit) |
| **Inventaire permanent** | Mise à jour à chaque mouvement | Mouvement en 31x/32x à chaque opération |

**Régularisation de stock (méthode intermittente) :**
```
Fin d'exercice :
  Débit  6031  Variation stocks marchandises  (si stock diminue)
  Crédit 311   Stocks marchandises
Ou :
  Débit  311   Stocks marchandises
  Crédit 6031  Variation stocks marchandises  (si stock augmente)
```

#### Section 3 — Éléments soustractifs de la facture

| Élément | Traitement |
|---|---|
| **Remises commerciales** | Déduites du prix — pas de compte séparé |
| **Escomptes de règlement** | `673` (accordé) / `773` (obtenu) — même si sur la facture |
| **Retours de marchandises** | Compte de charge en négatif ou compte de retour |
| **Avoirs** | Crédit du compte client + débit du compte de produit |

#### Section 4 — Éléments additifs de la facture

- Frais de transport facturés → `611` ou directement dans le compte d'achat
- Emballages consignés → `4196` Clients, dépôts et cautionnements reçus

---

### Chapitre 3 — Autres Opérations d'Exploitation

#### Section 2 — Impôts et Taxes

**TVA — centralisation mensuelle :**
```
État TVA collectée (443)  − TVA récupérable (445) = TVA à payer (444)
```

**Impôt sur le bénéfice :**
- Acomptes provisionnels → `447` (à régulariser en fin d'exercice)
- Solde IS → `89` Impôts sur le résultat

#### Section 3 — Subventions

| Type | Compte | Traitement |
|---|---|---|
| Subvention d'exploitation | 71 | Produit immédiat |
| Subvention d'investissement | 14 | Reprise progressive (86) au rythme des amortissements |
| Subvention d'équilibre | 88 | Compensation d'un déficit d'exploitation |

#### Section 4 — Charges de Personnel

**Structure du bulletin de paie :**
```
Salaire brut
  − Cotisations salariales   → 431 (sécurité sociale), 432 (retraite)
  − Impôt à la source        → 447
  − Saisies-arrêts           → 4232
  − Acomptes versés          → 4212
= Net à payer                → 521/57
```

**Charges patronales :** `664` / `665` (selon national/étranger)

**Traitements spéciaux :**
- Remboursements de frais → débités par nature (60–63), pas en charges de personnel
- Avantages en nature → comptabilisés par nature (622, 624…) puis transférés en `6617` fin d'exercice via `781`
- Personnel extérieur → `637`, transféré en `667` en fin d'exercice
- Rémunération de l'exploitant → `6661` (facultatif), charges sociales → `6662` (obligatoire)

#### Section 5 — Frais Financiers

| Opération | Compte |
|---|---|
| Intérêts d'emprunts | 671 |
| Fraction intérêt du crédit-bail | 672 |
| Escomptes accordés | 673 |
| Agios bancaires (découverts) | 6745 |
| Commissions bancaires (services) | 631 |
| Pertes de change | 676 |
| Pertes sur cessions de titres de placement | 677 |

#### Section 6 — Revenus Financiers

| Opération | Compte |
|---|---|
| Intérêts sur prêts | 771 |
| Dividendes (titres de participation) | 772 |
| Dividendes (titres de placement) | 774 |
| Escomptes obtenus | 773 |
| Gains de change | 776 |
| Gains sur cessions de titres de placement | 777 |

---

### Chapitre 4 — Opérations de Trésorerie

#### Modes de règlement

| Mode | Compte | Notes |
|---|---|---|
| Chèque | 511 (à encaisser) → 521 | Délai d'encaissement |
| Virement | 521 directement | |
| Effet de commerce | 412 (à recevoir) → 514 (escompte) | |
| Monnaie électronique | 54 | Mobile money, cartes prépayées |

**Effets de commerce :**
```
Émission lettre de change :
  Débit  412   Clients effets à recevoir
  Crédit 411   Clients

Remise à l'escompte :
  Débit  521   Banque (montant net)
  Débit  6745  Intérêts bancaires (agios)
  Crédit 514   Effets à l'escompte

Paiement à l'échéance :
  Débit  514   Effets à l'escompte
  Crédit 412   Clients effets à recevoir
```

**Chèques impayés :** `511` → réinscription en `411` + frais en `631`

---

### Chapitre 5 — Opérations d'Investissement et de Désinvestissement

#### Section 1 — Notion d'immobilisation

Une immobilisation est un actif :
- **Identifiable** (séparable ou contractuellement défini)
- **Contrôlé** par l'entité
- **Générateur d'avantages économiques futurs**
- **Dont le coût peut être mesuré de façon fiable**

> ⚠️ Seuil de significativité : déterminé par l'entité. En dessous → charge directe.

#### Section 2 — Entrée de l'immobilisation

**Coût d'entrée = coût d'acquisition :**
```
Prix d'achat HT
+ Droits de douane
+ TVA non récupérable
+ Frais de transport, d'installation, de montage
+ Coûts de démantèlement (si obligation)
− Remises, rabais, escomptes obtenus
```

**Par production interne (immobilisation produite) :**
```
Débit  2x   Immobilisation
Crédit 72   Production immobilisée
```

#### Section 3 — Amortissements

**Méthodes :**

| Méthode | Description |
|---|---|
| **Linéaire** | Annuité constante = Coût / Durée |
| **Dégressif à taux décroissant** | Taux fixe × VNC début d'exercice |
| **Par unités d'œuvre** | Annuité = (Coût − Résiduel) × Unités produites / Total unités |

**Écriture type :**
```
Débit  681   Dotations aux amortissements
Crédit 281/282/283/284  Amortissements (compte correcteur)
```

**Amortissements dérogatoires** (différence entre amortissement fiscal et comptable) :
```
Débit  85    Dotations HAO (amortissement dérogatoire)
Crédit 151   Amortissements dérogatoires
```

#### Section 4 — Décomptabilisation (Cession)

```
1. Sortie de l'immobilisation :
   Débit  81x   Valeur comptable nette des cessions
   Crédit 28x   Amortissements cumulés
   Crédit 2x    Coût d'entrée (annulation)

2. Constatation du produit :
   Débit  485   Débiteur sur cession d'immobilisation
   Crédit 82x   Produits des cessions d'immobilisations

3. Résultat = 82x − 81x  (plus-value ou moins-value)
```

---

### Chapitre 6 — Régularisations Périodiques

#### Charges/Produits constatés d'avance
```
Charges constatées d'avance :
  Débit  476   Charges constatées d'avance
  Crédit 6xx   Compte de charge concerné

Produits constatés d'avance :
  Débit  7xx   Compte de produit concerné
  Crédit 477   Produits constatés d'avance
```

#### Charges/Produits à payer et à recevoir
```
Charges à payer (ex: facture non parvenue) :
  Débit  6xx
  Crédit 408  Fournisseurs, factures non parvenues

Produits à recevoir :
  Débit  418  Clients, produits à facturer
  Crédit 7xx
```

#### Dépréciations
```
Constatation :
  Débit  686   Dotations pour dépréciation
  Crédit 49x   Dépréciation (compte correcteur)

Reprise (si la dépréciation n'est plus justifiée) :
  Débit  49x
  Crédit 759   Reprises de charges provisionnées
```

#### Provisions pour risques et charges
```
Constitution :
  Débit  659/691  Dotations aux provisions
  Crédit 199/499  Provisions pour risques

Utilisation (le risque se réalise) :
  Débit  199/499
  Crédit 6xx   (charge réelle)

Reprise sans objet :
  Débit  199/499
  Crédit 759/779  Reprises de provisions
```

---

## PARTIE II — Opérations Spécifiques (Sélection des chapitres clés)

### Chapitre 2 — Actifs Incorporels (Brevets, Marques, Logiciels, Sites Internet)

| Actif | Compte | Amortissement |
|---|---|---|
| Brevets acquis | 212 | Durée de protection ou durée d'utilisation |
| Marques acquises | 214 | Durée de protection (si limitée) ou test dépréciation |
| Logiciels créés en interne | 213 | Durée d'utilisation prévue |
| Sites internet | 213 | Durée estimée d'utilisation |
| Fonds commercial | 215 | Non amorti (test dépréciation annuel) |

> ⚠️ Les frais de **recherche** sont toujours des **charges** (`211` ou `626`).  
> Les frais de **développement** peuvent être immobilisés si les 6 critères IAS38/SYSCOHADA sont remplis.

### Chapitre 8 — Contrats de Location

**Location-acquisition (Crédit-bail / Leasing) — vue preneur :**
```
À la mise en service :
  Débit  2x    Immobilisation (valeur vénale)
  Crédit 17    Dettes de location-acquisition (valeur vénale)

Redevances périodiques :
  Débit  671   Intérêts (fraction financière)
  Débit  17    Remboursement capital
  Crédit 401/521  Fournisseur/Banque

Dotation amortissement :
  Débit  681   Dotations
  Crédit 284   Amortissements (comme si propriétaire)
```

### Chapitre 16 — Capitaux Propres

**Augmentation de capital en numéraire :**
```
Souscription :
  Débit  109   Actionnaires, capital souscrit non appelé
  Crédit 101   Capital social (fraction appelée)

Libération :
  Débit  521   Banque
  Débit  1012  Capital appelé non versé (solde)
  Crédit 109   Actionnaires

Prime d'émission :
  Débit  521   Banque (excédent sur valeur nominale)
  Crédit 1051  Prime d'émission
```

**Affectation du résultat :**
```
Débit  131   Résultat net : Bénéfice
Crédit 111   Réserve légale (5% minimum)
Crédit 112   Réserves statutaires
Crédit 121   Report à nouveau créditeur
Crédit 463   Dividendes à distribuer
```

### Chapitre 17 — Subventions et Aides Publiques

**Subvention d'investissement :**
```
Réception :
  Débit  521   Banque
  Crédit 141   Subventions d'équipement

Reprise annuelle (au rythme de l'amortissement) :
  Débit  865   Reprises de subventions d'investissement
  Crédit 781   Transferts de charges d'exploitation
```

### Chapitre 20 — Emprunts Obligataires

**Avec prime de remboursement :**
```
Émission :
  Débit  521   Banque (prix d'émission × nb titres)
  Débit  169   Prime de remboursement (différence)
  Crédit 161   Emprunts obligataires (valeur de remboursement)
```
> La prime de remboursement (`169`) est amortie sur la durée de l'emprunt (compte `6794` ou via `671`).

### Chapitre 22 — Opérations en Devises

**Créances/Dettes en devises :**
- Comptabilisées au cours du jour de la transaction
- En fin d'exercice : ajustement au cours de clôture
  - Écart défavorable → `476` Charges constatées d'avance (option) ou `679` provisions
  - Écart favorable → `477` Produits constatés d'avance (prudence) ou `779` reprises

**Différences de change réalisées :**
- Perte → `676`
- Gain → `776`

### Chapitre 38 — Fusions et Opérations Assimilées

**Fusion simple (société absorbante reçoit l'actif net de l'absorbée) :**
```
Valeur d'apport = Actif net réel de l'absorbée (valeur vénale)

Chez l'absorbante :
  Débit  Actifs reçus (valeur réelle)
  Crédit Passifs pris en charge
  Crédit Capital (augmentation)
  Crédit 1053 Prime de fusion (différence)
```

---

## PARTIE III — États Financiers Annuels

### Documents obligatoires (Système Normal)

| Document | Contenu |
|---|---|
| **Bilan** | Actif (2, 3, 4, 5) vs Passif (1, 4, 5) |
| **Compte de Résultat** | Charges (6, 8 impairs) vs Produits (7, 8 pairs) |
| **Tableau des Flux de Trésorerie (TFT)** | Activités, Investissement, Financement |
| **Notes Annexes** | Méthodes comptables, détails des postes, engagements |

### Bilan — Structure

**ACTIF :**
```
Actif immobilisé (Brut − Amortissements/Dépréciations = Net)
  Charges immobilisées (20)
  Immobilisations incorporelles (21)
  Immobilisations corporelles (22-25)
  Immobilisations financières (26-27)

Actif circulant
  Stocks (3)
  Créances (4 débiteurs)
  Trésorerie active (5)
```

**PASSIF :**
```
Capitaux propres et ressources assimilées (1)
Dettes financières (16-17)
Passif circulant
  Dettes fournisseurs, fiscales, sociales (4 créditeurs)
  Trésorerie passive (56)
```

### Tableau des Flux de Trésorerie (Méthode indirecte)

```
Résultat net
+ Dotations aux amortissements et provisions
− Reprises sur amortissements et provisions
± Variations BFR (stocks, créances, dettes)
= Flux d'activité

− Acquisitions d'immobilisations
+ Cessions d'immobilisations
= Flux d'investissement

+ Emprunts nouveaux
− Remboursements d'emprunts
+ Augmentations de capital en numéraire
− Dividendes versés
= Flux de financement

Variation de trésorerie = Flux activité + Flux investissement + Flux financement
```

---

## PARTIE IV — Comptes Consolidés

> Applicable aux groupes de sociétés. Nécessite le contrôle exclusif, conjoint ou influence notable.

### Méthodes de consolidation

| Méthode | Condition | Description |
|---|---|---|
| **Intégration globale** | Contrôle exclusif (> 50% droits de vote) | 100% des comptes, part des minoritaires isolée |
| **Intégration proportionnelle** | Contrôle conjoint | Quote-part des actifs/passifs/charges/produits |
| **Mise en équivalence** | Influence notable (20–50%) | Remplacement du titre par la quote-part d'actif net |

### Écart d'acquisition (Goodwill)

```
Goodwill = Prix d'acquisition − Quote-part de l'actif net réévalué

Positif (survaleur) → Actif incorporel, test de dépréciation annuel (non amorti)
Négatif (badwill)  → Produit HAO immédiat après vérification
```

---

## Glossaire des abréviations SYSCOHADA

| Abréviation | Signification |
|---|---|
| **HAO** | Hors Activités Ordinaires |
| **MB** | Marge Brute |
| **VA** | Valeur Ajoutée |
| **EBE** | Excédent Brut d'Exploitation |
| **RE** | Résultat d'Exploitation |
| **RF** | Résultat Financier |
| **RAO** | Résultat des Activités Ordinaires |
| **RHAO** | Résultat Hors Activités Ordinaires |
| **RRR** | Rabais, Remises, Ristournes |
| **TVA** | Taxe sur la Valeur Ajoutée |
| **IMF** | Impôt Minimum Forfaitaire |
| **CAGE** | Comptabilité Analytique de Gestion |
| **NBS** | Nomenclature des Biens et Services |
| **GIE** | Groupement d'Intérêt Économique |
| **TFT** | Tableau des Flux de Trésorerie |
| **SMT** | Système Minimal de Trésorerie |
