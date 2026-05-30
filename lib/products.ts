export type ProductCategory =
  | "Cardio-Diabetic"
  | "General Division"
  | "Respiratory & Immunology"
  | "Gastroenterology & Hepatology"
  | "Ortho & Pain Management"
  | "ED & Men's Health"
  | "Derma & Cosmetology"
  | "Metabolic Wellness & Fitness"
  | "Gynae & Obstetrics"

export type Product = {
  id: number
  brandName: string
  composition: string
  category: ProductCategory
}

export const products: Product[] = [
  // ── Cardio-Diabetic ──────────────────────────────────────────────────────────
  { id: 1,  brandName: "GLYGAM-EL 1000",   composition: "Metformin 1000mg + Empagliflozin 25mg + Linagliptin 5mg",                                    category: "Cardio-Diabetic" },
  { id: 2,  brandName: "GLICAGAM-MD",       composition: "Gliclazide MR 60mg + Metformin 500mg + Dapagliflozin 10mg",                                  category: "Cardio-Diabetic" },
  { id: 3,  brandName: "TELGAM-AM-C 6.25",  composition: "Telmisartan 40mg + Amlodipine 5mg + Chlorthalidone 6.25mg",                                  category: "Cardio-Diabetic" },
  { id: 4,  brandName: "TELGAM-AM-C 12.5",  composition: "Telmisartan 40mg + Amlodipine 5mg + Chlorthalidone 12.5mg",                                  category: "Cardio-Diabetic" },
  { id: 5,  brandName: "ATORGAM-GOLD",      composition: "Aspirin 75mg + Clopidogrel 75mg + Atorvastatin 10mg",                                        category: "Cardio-Diabetic" },
  { id: 6,  brandName: "ROSUGAM-F",         composition: "Rosuvastatin 10mg + Fenofibrate 160mg",                                                       category: "Cardio-Diabetic" },
  { id: 7,  brandName: "TELGAM-CIL",        composition: "Telmisartan 40mg + Cilnidipine 10mg",                                                         category: "Cardio-Diabetic" },
  { id: 8,  brandName: "TELGAM-H",          composition: "Telmisartan 40mg + Hydrochlorothiazide 12.5mg",                                               category: "Cardio-Diabetic" },
  { id: 9,  brandName: "ATORGAM-AS 10",     composition: "Atorvastatin 10mg + Aspirin 75mg",                                                            category: "Cardio-Diabetic" },
  { id: 10, brandName: "NITROGAM 2.6 SR",   composition: "Nitroglycerin (Glyceryl Trinitrate) 2.6mg (SR)",                                              category: "Cardio-Diabetic" },
  { id: 11, brandName: "NICOGAM 10",        composition: "Nicorandil 10mg",                                                                              category: "Cardio-Diabetic" },
  { id: 12, brandName: "TORGAM-E",          composition: "Torsemide 10mg + Eplerenone 25mg",                                                            category: "Cardio-Diabetic" },
  { id: 13, brandName: "FRUSEGAM-S",        composition: "Frusemide 40mg + Spironolactone 25mg",                                                        category: "Cardio-Diabetic" },
  { id: 14, brandName: "AMLOGAM 5",         composition: "Amlodipine 5mg",                                                                               category: "Cardio-Diabetic" },

  // ── General Division ─────────────────────────────────────────────────────────
  { id: 15, brandName: "FEBGAM 40 mg",      composition: "Febuxostat 40mg",                                                                              category: "General Division" },
  { id: 16, brandName: "GAMUTOL 650",       composition: "Paracetamol 650mg",                                                                            category: "General Division" },
  { id: 17, brandName: "AMOXGAM-CLB",       composition: "Amoxicillin 500mg + Clavulanic Acid 125mg + LB 16 Lakhs",                                     category: "General Division" },
  { id: 18, brandName: "ACEGAM-SP",         composition: "Aceclofenac 100mg + Paracetamol 325mg + Serratiopeptidase 15mg",                              category: "General Division" },

  // ── Respiratory & Immunology ─────────────────────────────────────────────────
  { id: 19, brandName: "LEVOGAM-M",         composition: "Levocetirizine 5mg + Montelukast 10mg",                                                        category: "Respiratory & Immunology" },
  { id: 20, brandName: "FEXOGAM-M",         composition: "Fexofenadine 120mg + Montelukast 10mg",                                                        category: "Respiratory & Immunology" },

  // ── General Division (anti-infectives per Final RSM list) ────────────────────
  { id: 21, brandName: "AZIGAM 500",        composition: "Azithromycin 500mg",                                                                           category: "General Division" },
  { id: 22, brandName: "CEFIXGAM-O",        composition: "Cefixime 200mg + Ofloxacin 200mg",                                                            category: "General Division" },
  { id: 23, brandName: "CEFGAM CV 325",     composition: "Cefixime 200mg + Sodium Clavulanate 125mg",                                                   category: "General Division" },

  // ── Respiratory & Immunology (cough range) ───────────────────────────────────
  { id: 24, brandName: "GAMCOF-T",          composition: "Codeine Phosphate 10mg + Triprolidine HCl 1.25mg",                                            category: "Respiratory & Immunology" },
  { id: 25, brandName: "GAMCOF-DX",         composition: "Dextromethorphan 10mg + Chlorpheniramine 2mg + Phenylephrine 5mg",                            category: "Respiratory & Immunology" },

  // ── General Division ─────────────────────────────────────────────────────────
  { id: 26, brandName: "TRAMAGAM-P",        composition: "Tramadol 37.5mg + Paracetamol 325mg",                                                          category: "General Division" },

  // ── Respiratory & Immunology ─────────────────────────────────────────────────
  { id: 27, brandName: "MUCOGAM 600",       composition: "N-Acetylcysteine 600mg",                                                                       category: "Respiratory & Immunology" },

  // ── Gastroenterology & Hepatology ────────────────────────────────────────────
  { id: 28, brandName: "GAMZOLE-D SR",      composition: "Rabeprazole 20mg + Domperidone 30mg (SR)",                                                    category: "Gastroenterology & Hepatology" },
  { id: 29, brandName: "ESOGAM-L",          composition: "Esomeprazole 40mg + Levosulpiride 75mg",                                                      category: "Gastroenterology & Hepatology" },
  { id: 30, brandName: "GAMZOLE-ITO",       composition: "Pantoprazole 40mg + Itopride 150mg",                                                          category: "Gastroenterology & Hepatology" },
  { id: 31, brandName: "URSOGAM-S",         composition: "Ursodeoxycholic Acid 300mg + Silymarin 140mg",                                                category: "Gastroenterology & Hepatology" },
  { id: 32, brandName: "LAXAGAM",           composition: "Lactulose Solution 10g/15ml",                                                                  category: "Gastroenterology & Hepatology" },

  // ── General Division ─────────────────────────────────────────────────────────
  { id: 33, brandName: "ETOGAM 60",         composition: "Etoricoxib 60mg",                                                                              category: "General Division" },
  { id: 34, brandName: "ACEGAM-TH",         composition: "Aceclofenac 100mg + Thiocolchicoside 4mg + Paracetamol 325mg",                                category: "General Division" },

  // ── Ortho & Pain Management ──────────────────────────────────────────────────
  { id: 35, brandName: "JOINTGAM-C",        composition: "L-Arginine + Collagen + Chondroitin + Hyaluronate + Vitamin C",                               category: "Ortho & Pain Management" },

  // ── ED & Men's Health ────────────────────────────────────────────────────────
  { id: 36, brandName: "TADAGAM-FORTE",     composition: "Tadalafil 5mg + L-Arginine 1000mg + Coenzyme Q10 100mg + L-Carnitine 500mg + Zinc 10mg",     category: "ED & Men's Health" },
  { id: 37, brandName: "TADAGAM-DX",        composition: "Tadalafil 10mg + Dapoxetine 30mg",                                                             category: "ED & Men's Health" },

  // ── Derma & Cosmetology ──────────────────────────────────────────────────────
  { id: 38, brandName: "FOLLIGAM-3X",       composition: "Bhringraj (CO₂ Extract & cold-pressed), Amla, Brahmi, Hibiscus, Onion Black Seed, Argan, Jojoba, Pumpkin Seed Oil, Redensyl (3%), Baicapil (2.5%), Anagain (2%), Caffeine (1%), Liposomal Biotin (0.5%), Saw Palmetto, Niacinamide", category: "Derma & Cosmetology" },

  // ── ED & Men's Health ────────────────────────────────────────────────────────
  { id: 39, brandName: "NITROGAM-C",        composition: "L-Arginine (1000mg), Citrulline Malate (500mg), Taurine (250mg), Korean Red Ginseng (200mg), Maca Root (200mg), Caffeine (60mg), Zinc (10mg), Yohimbe Extract (5mg)", category: "ED & Men's Health" },
  { id: 40, brandName: "SHILAGAM-66",       composition: "Ashwagandha KSM-66 (300mg), Tribulus Terrestris (250mg), Tongkat Ali (200mg), Maca Root (200mg), Fenugreek (200mg), L-Citrulline (300mg), Korean Red Ginseng (150mg), Shilajit (100mg), Safed Musli (150mg), Zinc, Magnesium, Vitamin D3 & B12", category: "ED & Men's Health" },

  // ── Gastroenterology & Hepatology ────────────────────────────────────────────
  { id: 41, brandName: "HEPA-GAMUT",        composition: "N-Acetyl Cysteine (300mg), Dihydromyricetin (200mg), Milk Thistle Extract (150mg), Taurine (100mg), Korean Red Ginseng (100mg), Amla (100mg), Curcumin C3 (75mg), Electrolyte Mineral Blend (75mg), L-Theanine, Ginger Extract, Alpha Lipoic Acid", category: "Gastroenterology & Hepatology" },
  { id: 42, brandName: "ISABGAM-S",         composition: "Isabgol, Sanay, Sakkara, Harad, Saunf, Amaltas, Mulethi, Kala Namak",                        category: "Gastroenterology & Hepatology" },

  // ── Gynae & Obstetrics ───────────────────────────────────────────────────────
  { id: 43, brandName: "ISO-GAMUT-F",       composition: "Shatavari Extract (150mg), Ashwagandha KSM-66 (125mg), Maca Root (100mg), Evening Primrose Oil Powder (100mg), Soy Isoflavones 40% (60mg), Black Cohosh Extract (40mg), Hyaluronic Acid (50mg), L-Theanine (50mg), Marine Pine Bark (25mg), Calcium Citrate, Magnesium Glycinate, Zinc, Biotin, Vitamins D3 & K2 MK-7", category: "Gynae & Obstetrics" },

  // ── Metabolic Wellness & Fitness ─────────────────────────────────────────────
  { id: 44, brandName: "LIPOGAMUT",         composition: "L-Carnitine Tartrate (1000mg), Garcinia Cambogia (1000mg), Green Tea Extract (500mg), Inulin Fiber (500mg), Green Coffee Bean (400mg), Apple Cider Vinegar (300mg), Rhodiola Rosea (200mg), Ashwagandha (200mg), Natural Caffeine (120mg), Guarana (100mg), Cayenne Pepper (50mg), Chromium Picolinate, Black Pepper Extract", category: "Metabolic Wellness & Fitness" },
  { id: 45, brandName: "GUTGAM-PRO",        composition: "Inulin Fiber (1500mg), Apple Cider Vinegar Extract (500mg), Electrolyte Blend (400mg), Magnesium Citrate (250mg), Vitamin C (250mg), Digestive Enzyme Blend (150mg), Green Tea Extract (200mg), L-Theanine (100mg), Ginger Extract (100mg), Dandelion Extract (100mg), Probiotic Blend (2 Billion CFU), Chromium Picolinate", category: "Metabolic Wellness & Fitness" },

  // ── General Division ─────────────────────────────────────────────────────────
  { id: 46, brandName: "VITAGAM-FORTE",     composition: "Vitamin B-Complex + Zinc + Ginseng + Lycopene + Omega-3",                                     category: "General Division" },

  // ── Ortho & Pain Management ──────────────────────────────────────────────────
  { id: 47, brandName: "GAMCAL-60K",        composition: "Cholecalciferol (Vitamin D3) 60,000 IU",                                                       category: "Ortho & Pain Management" },

  // ── Respiratory & Immunology ─────────────────────────────────────────────────
  { id: 48, brandName: "VEDAGAM-RESPI",     composition: "Mulethi, Tulsi, Vasa, Somlata, Kanta Kari, Karkatshringi",                                    category: "Respiratory & Immunology" },

  // ── Gastroenterology & Hepatology ────────────────────────────────────────────
  { id: 49, brandName: "KALEGEN",           composition: "Methi, Radhuni, Kulekhara, Kalmegh, Seena, Ajwain",                                           category: "Gastroenterology & Hepatology" },
  { id: 50, brandName: "VEDAGAM-LIV-F",    composition: "Bhringraj, Bhui Amla, Kasni, Punarnava, Guduchi (24-Herb Liver Formula)",                     category: "Gastroenterology & Hepatology" },

  // ── General Division ─────────────────────────────────────────────────────────
  { id: 51, brandName: "ISO-GAMUT-PM",      composition: "Soya Isoflavone 100mg + 21 Multivitamins & Minerals",                                         category: "General Division" },
  { id: 52, brandName: "CALGAM-ISO-PM",     composition: "Calcium Carbonate 500mg + Soya Isoflavones 50mg + Magnesium + Vitamin D3",                   category: "General Division" },

  // ── Gynae & Obstetrics ───────────────────────────────────────────────────────
  { id: 53, brandName: "MYOGAM-D",          composition: "L-Methylfolate + Methylcobalamin + Myo-Inositol + D-Chiro Inositol",                          category: "Gynae & Obstetrics" },

  // ── General Division ─────────────────────────────────────────────────────────
  { id: 54, brandName: "FERROGAM-XT",       composition: "Ferrous Ascorbate 100mg + Folic Acid 1.5mg",                                                   category: "General Division" },

  // ── Gynae & Obstetrics ───────────────────────────────────────────────────────
  { id: 55, brandName: "VITAGAM-MAX",       composition: "L-Arginine + Maca + Ginseng + Ginkgo Biloba + Vitamin E + Zinc",                              category: "Gynae & Obstetrics" },
]

export const categories: ProductCategory[] = [
  "Cardio-Diabetic",
  "General Division",
  "Respiratory & Immunology",
  "Gastroenterology & Hepatology",
  "Ortho & Pain Management",
  "ED & Men's Health",
  "Derma & Cosmetology",
  "Metabolic Wellness & Fitness",
  "Gynae & Obstetrics",
]

export const categoryColors: Record<ProductCategory, string> = {
  "Cardio-Diabetic":               "bg-red-50 text-red-700 border-red-200",
  "General Division":              "bg-slate-50 text-slate-600 border-slate-200",
  "Respiratory & Immunology":      "bg-teal-50 text-teal-700 border-teal-200",
  "Gastroenterology & Hepatology": "bg-amber-50 text-amber-700 border-amber-200",
  "Ortho & Pain Management":       "bg-indigo-50 text-indigo-700 border-indigo-200",
  "ED & Men's Health":             "bg-blue-50 text-blue-700 border-blue-200",
  "Derma & Cosmetology":           "bg-pink-50 text-pink-700 border-pink-200",
  "Metabolic Wellness & Fitness":  "bg-green-50 text-green-700 border-green-200",
  "Gynae & Obstetrics":            "bg-purple-50 text-purple-700 border-purple-200",
}
