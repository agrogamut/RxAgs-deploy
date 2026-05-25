export type ProductCategory =
  | "Cardiovascular"
  | "Gastrointestinal"
  | "Respiratory"
  | "Anti-Infective"
  | "Analgesics"
  | "Nutraceuticals"
  | "Other"

export type Product = {
  id: number
  brandName: string
  composition: string
  category: ProductCategory
}

export const products: Product[] = [
  { id: 1,  brandName: "GLYGAM-EL 1000",   composition: "Metformin 1000mg + Empagliflozin 25mg + Linagliptin 5mg",               category: "Cardiovascular" },
  { id: 2,  brandName: "GLICAGAM-MD",       composition: "Gliclazide MR 60mg + Metformin 500mg + Dapagliflozin 10mg",             category: "Cardiovascular" },
  { id: 3,  brandName: "TELGAM-AM-C 6.25",  composition: "Telmisartan 40mg + Amlodipine 5mg + Chlorthalidone 6.25mg",             category: "Cardiovascular" },
  { id: 4,  brandName: "TELGAM-AM-C 12.5",  composition: "Telmisartan 40mg + Amlodipine 5mg + Chlorthalidone 12.5mg",             category: "Cardiovascular" },
  { id: 5,  brandName: "ATORGAM-GOLD",      composition: "Aspirin 75mg + Clopidogrel 75mg + Atorvastatin 10mg",                   category: "Cardiovascular" },
  { id: 6,  brandName: "ROSUGAM-F",         composition: "Rosuvastatin 10mg + Fenofibrate 160mg",                                  category: "Cardiovascular" },
  { id: 7,  brandName: "TELGAM-CIL",        composition: "Telmisartan 40mg + Cilnidipine 10mg",                                   category: "Cardiovascular" },
  { id: 8,  brandName: "TELGAM-H",          composition: "Telmisartan 40mg + Hydrochlorothiazide 12.5mg",                         category: "Cardiovascular" },
  { id: 9,  brandName: "ATORGAM-AS 10",     composition: "Atorvastatin 10mg + Aspirin 75mg",                                      category: "Cardiovascular" },
  { id: 10, brandName: "NITROGAM 2.6 SR",   composition: "Nitroglycerin (Glyceryl Trinitrate) 2.6mg (SR)",                        category: "Cardiovascular" },
  { id: 11, brandName: "NICOGAM 10",        composition: "Nicorandil 10mg",                                                        category: "Cardiovascular" },
  { id: 12, brandName: "TORGAM-E",          composition: "Torsemide 10mg + Eplerenone 25mg",                                      category: "Cardiovascular" },
  { id: 13, brandName: "FRUSEGAM-S",        composition: "Frusemide 40mg + Spironolactone 25mg",                                  category: "Cardiovascular" },
  { id: 14, brandName: "AMLOGAM 5",         composition: "Amlodipine 5mg",                                                         category: "Cardiovascular" },
  { id: 15, brandName: "FEBGAM 40",         composition: "Febuxostat 40mg",                                                        category: "Cardiovascular" },
  { id: 16, brandName: "GAMUTOL 650",       composition: "Paracetamol 650mg",                                                      category: "Analgesics" },
  { id: 17, brandName: "AMOXGAM-CLB",       composition: "Amoxicillin 500mg + Clavulanic Acid 125mg + LB 16 Lakhs",               category: "Anti-Infective" },
  { id: 18, brandName: "ACEGAM-SP",         composition: "Aceclofenac 100mg + Paracetamol 325mg + Serratiopeptidase 15mg",        category: "Analgesics" },
  { id: 19, brandName: "LEVOGAM-M",         composition: "Levocetirizine 5mg + Montelukast 10mg",                                 category: "Respiratory" },
  { id: 20, brandName: "FEXOGAM-M",         composition: "Fexofenadine 120mg + Montelukast 10mg",                                 category: "Respiratory" },
  { id: 21, brandName: "AZIGAM 500",        composition: "Azithromycin 500mg",                                                     category: "Anti-Infective" },
  { id: 22, brandName: "CEFIXGAM-O",        composition: "Cefixime 200mg + Ofloxacin 200mg",                                      category: "Anti-Infective" },
  { id: 23, brandName: "CEFGAM CV 325",     composition: "Cefixime 200mg + Sodium Clavulanate 125mg",                             category: "Anti-Infective" },
  { id: 24, brandName: "GAMCOF-CD",         composition: "Codeine Phosphate 10mg + Chlorpheniramine Maleate 4mg",                 category: "Respiratory" },
  { id: 25, brandName: "GAMCOF-T",          composition: "Codeine Phosphate 10mg + Triprolidine HCl 1.25mg",                      category: "Respiratory" },
  { id: 26, brandName: "GAMCOF-DX",         composition: "Dextromethorphan 10mg + Chlorpheniramine 2mg + Phenylephrine 5mg",      category: "Respiratory" },
  { id: 27, brandName: "TRAMAGAM-P",        composition: "Tramadol 37.5mg + Paracetamol 325mg",                                   category: "Analgesics" },
  { id: 28, brandName: "MUCOGAM 600",       composition: "N-Acetylcysteine 600mg",                                                 category: "Respiratory" },
  { id: 29, brandName: "GAMZOLE-D SR",      composition: "Rabeprazole 20mg + Domperidone 30mg (SR)",                              category: "Gastrointestinal" },
  { id: 30, brandName: "ESOGAM-L",          composition: "Esomeprazole 40mg + Levosulpiride 75mg",                                category: "Gastrointestinal" },
  { id: 31, brandName: "GAMZOLE-ITO",       composition: "Pantoprazole 40mg + Itopride 150mg",                                    category: "Gastrointestinal" },
  { id: 32, brandName: "URSOGAM-S",         composition: "Ursodeoxycholic Acid 300mg + Silymarin 140mg",                          category: "Gastrointestinal" },
  { id: 33, brandName: "LAXAGAM",           composition: "Lactulose Solution 10g/15ml",                                            category: "Gastrointestinal" },
  { id: 34, brandName: "ETOGAM 60",         composition: "Etoricoxib 60mg",                                                        category: "Analgesics" },
  { id: 35, brandName: "ACEGAM-TH",         composition: "Aceclofenac 100mg + Thiocolchicoside 4mg + Paracetamol 325mg",          category: "Analgesics" },
  { id: 36, brandName: "JOINTGAM-C",        composition: "L-Arginine + Collagen + Chondroitin + Hyaluronate + Vitamin C",        category: "Nutraceuticals" },
  { id: 37, brandName: "TADAGAM-FORTE",     composition: "Tadalafil 5mg + L-Arginine 1000mg + CoQ10 100mg + L-Carnitine 500mg + Zinc 10mg", category: "Other" },
  { id: 38, brandName: "TADAGAM-DX",        composition: "Tadalafil 10mg + Dapoxetine 30mg",                                      category: "Other" },
]

export const categories: ProductCategory[] = [
  "Cardiovascular",
  "Gastrointestinal",
  "Respiratory",
  "Anti-Infective",
  "Analgesics",
  "Nutraceuticals",
  "Other",
]

export const categoryColors: Record<ProductCategory, string> = {
  Cardiovascular:   "bg-blue-50 text-blue-700 border-blue-200",
  Gastrointestinal: "bg-amber-50 text-amber-700 border-amber-200",
  Respiratory:      "bg-teal-50 text-teal-700 border-teal-200",
  "Anti-Infective": "bg-indigo-50 text-indigo-700 border-indigo-200",
  Analgesics:       "bg-rose-50 text-rose-700 border-rose-200",
  Nutraceuticals:   "bg-green-50 text-green-700 border-green-200",
  Other:            "bg-slate-50 text-slate-600 border-slate-200",
}
