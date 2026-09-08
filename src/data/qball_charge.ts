/** Stage 3: EM charge / Mechanism A — exact numbers from calculations/qball_charge */
export const chargeMeta = {
  title: "Electromagnetic charge (Mechanism A)",
  date: "2026-09-08",
  mechanism: "A",
  answer: "YES" as const,
  allNeutralObstruction: "HARD NO" as const,
  chargeCarrier: "scalar cloud (Phi), not the neutrino",
};

export const chargeParams = {
  "m": 1.0,
  "A": 1.8,
  "B": 1.0,
  "alpha": 0.007297352573756914
} as const;

export const chargeOmegaWindow = {
  omega_min: 0.6164414002968975,
  omega_max: 1.0,
} as const;

export const chargeQballScan = [
  {
    "omega": 0.7,
    "f0": 0.8405424917368233,
    "E": 77.53127586717187,
    "Q": 95.33079611122274,
    "E_over_mQ": 0.8132867764653501,
    "radius": 5.419168526116342
  },
  {
    "omega": 0.8,
    "f0": 0.5948374932509732,
    "E": 38.816241081909645,
    "Q": 43.097268455492234,
    "E_over_mQ": 0.900665923224259,
    "radius": 5.322495883682367
  },
  {
    "omega": 0.9,
    "f0": 0.3060133206519963,
    "E": 20.071783501202955,
    "Q": 20.91440664541661,
    "E_over_mQ": 0.9597108749724766,
    "radius": 6.484180788632793
  },
  {
    "omega": 0.95,
    "f0": 0.15430157434697075,
    "E": 12.594171345513969,
    "Q": 12.82866592145411,
    "E_over_mQ": 0.9817210474280118,
    "radius": 8.643262966840222
  },
  {
    "omega": 0.97,
    "f0": 0.09282924489058436,
    "E": 9.345766824564294,
    "Q": 9.445546444337504,
    "E_over_mQ": 0.9894363316763927,
    "radius": 10.898899993744175
  },
  {
    "omega": 0.98,
    "f0": 0.06196152643680625,
    "E": 7.4756680727875615,
    "Q": 7.527711620529008,
    "E_over_mQ": 0.9930864052231335,
    "radius": 13.209301487336553
  },
  {
    "omega": 0.985,
    "f0": 0.04649812318643312,
    "E": 6.409354199852199,
    "Q": 6.442454921561118,
    "E_over_mQ": 0.9948620949448728,
    "radius": 15.198143098473084
  },
  {
    "omega": 0.99,
    "f0": 0.031016188976364937,
    "E": 5.181582824440325,
    "Q": 5.199229992734887,
    "E_over_mQ": 0.9966058111837288,
    "radius": 18.520936378185493
  },
  {
    "omega": 0.995,
    "f0": 0.015516550742280713,
    "E": 3.6282730942302766,
    "Q": 3.63438530500162,
    "E_over_mQ": 0.9983182270842522,
    "radius": 26.058051940114538
  },
  {
    "omega": 0.997,
    "f0": 0.009311916774309769,
    "E": 2.7995790054668004,
    "Q": 2.802396599126844,
    "E_over_mQ": 0.9989945771198404,
    "radius": 33.59921039293117
  },
  {
    "omega": 0.998,
    "f0": 0.006208600565527276,
    "E": 2.2814401340029873,
    "Q": 2.282967606974889,
    "E_over_mQ": 0.9993309265680183,
    "radius": 41.03753305880539,
    "note": "recomputed with r_max=500 (prior scan had tail artifact)"
  },
  {
    "omega": 0.999,
    "f0": 0.0031046263046263915,
    "E": 1.610120272138943,
    "Q": 1.610658125932584,
    "E_over_mQ": 0.9996660658242855,
    "radius": 57.98671778290438
  },
  {
    "omega": 0.9995,
    "f0": 0.001552394284351949,
    "E": 1.1374342031386595,
    "Q": 1.1376239778975357,
    "E_over_mQ": 0.9998331832287617,
    "radius": 81.93639625325065
  },
  {
    "omega": 0.9996,
    "f0": 0.0012419283846163876,
    "E": 1.0171719098859127,
    "Q": 1.01730764113521,
    "E_over_mQ": 0.9998665779712951,
    "radius": 91.69834852170433
  },
  {
    "omega": 0.9997,
    "f0": 0.0009314560005298134,
    "E": 0.8807147126293804,
    "Q": 0.8808028404965758,
    "E_over_mQ": 0.9998999459775292,
    "radius": 105.7811649089818
  },
  {
    "omega": 0.9998,
    "f0": 0.0006209771377545421,
    "E": 0.7189626455654184,
    "Q": 0.7190105968662028,
    "E_over_mQ": 0.9999333093267424,
    "radius": 129.62593356471294
  }
] as const;

export const minQOnGrid = {
  min_Q: 0.7190105968662028,
  omega: 0.9998,
} as const;

export const qballQ1 = {
  "omega": 0.9996,
  "f0": 0.0012419283846163876,
  "E": 1.0171719098859127,
  "Q": 1.01730764113521,
  "E_over_mQ": 0.9998665779712951,
  "radius": 91.69834852170433
} as const;

export const qballMid = {
  "omega": 0.8082207001484487,
  "f0": 0.5722034344768927,
  "E": 36.861392318833985,
  "Q": 40.666061538223026,
  "E_over_mQ": 0.9064411680041122,
  "radius": 5.362139505247359
} as const;

export const emAssignment = {
  q_phi_Q1: -1.0,
  Q_EM_Q1: -1.01730764113521,
  q_phi_mid: -0.02459052984661609,
  Q_EM_mid: -0.9999999999999999,
} as const;

export const fermionQ1 = {
  "m_nu": 1.5,
  "g": 664.2895115525239,
  "kappa": -1,
  "depth_frac": 0.55,
  "f0": 0.0012419283846163349,
  "M0": 0.6749999999999999,
  "n_bound": 33,
  "energies": [
    -1.4460492207645217,
    -1.4354013015327958,
    -1.3299824215265792,
    -1.2664595237463585,
    -1.2425146842046657,
    -1.2170825323093548,
    -1.1900893898154676,
    -1.161451055798647,
    -1.1310706697154291,
    -1.0988359726911727,
    -1.0646157455402816,
    -1.028255088231639,
    -0.9895690407486346,
    -0.9483337602670907,
    -0.9042739893640814,
    -0.8570446850261284,
    -0.8062030573199501,
    -0.7511639960306921,
    0.7211378666273118,
    0.7786627224790175,
    0.8315967649828516,
    0.8806301750376919,
    0.9262750165940786,
    0.9689241928128165,
    1.00888728432439,
    1.0464135105430001,
    1.0817070773674078,
    1.1149377973521837,
    1.1462486597161954,
    1.1757613622466496,
    1.2035804410259978,
    1.2777251183925993,
    1.2995682295868234
  ]
} as const;

export const fermionMid = {
  "m_nu": 1.5,
  "g": 1.4417949112131498,
  "kappa": -1,
  "depth_frac": 0.55,
  "f0": 0.5722034344717111,
  "M0": 0.6749999999999999,
  "n_bound": 3,
  "energies": [
    -1.3844607533874689,
    1.1461688096295664,
    1.467906201909367
  ]
} as const;

export const coulombQ1 = {
  "q_phi": -1.0,
  "Q_EM": -1.01730764113521,
  "Q_noether": 1.01730764113521,
  "E_qball_dimless": 1.0171719098859127,
  "E_coulomb_integral_dimless": 6.545429230537591e-05,
  "E_coulomb_crude_dimless": 4.1179250057663886e-05,
  "alpha": 0.007297352573756914,
  "R_eff_dimless": 91.69834852170433,
  "mu_MeV": 0.5023722096860838,
  "E_qball_MeV": 0.5109989,
  "E_coulomb_integral_MeV": 3.288241745889052e-05,
  "E_coulomb_crude_MeV": 2.0687310844684398e-05,
  "R_eff_fm": 36018.230850710126,
  "E_coulomb_over_E_qball": 6.434929206088413e-05,
  "coulomb_dominates": false,
  "Q_enc_total": -1.0173076411352107,
  "target_MeV": 0.5109989
} as const;

export const coulombMid = {
  "q_phi": -0.02459052984661609,
  "Q_EM": -0.9999999999999999,
  "Q_noether": 40.666061538223026,
  "E_qball_dimless": 36.861392318833985,
  "E_coulomb_integral_dimless": 0.0011353917618073218,
  "E_coulomb_crude_dimless": 0.000680451577827821,
  "alpha": 0.007297352573756914,
  "R_eff_dimless": 5.362139505247359,
  "mu_MeV": 0.013862712932276025,
  "E_qball_MeV": 0.5109989,
  "E_coulomb_integral_MeV": 1.573961005960602e-05,
  "E_coulomb_crude_MeV": 9.43290488774136e-06,
  "R_eff_fm": 76326.67589837265,
  "E_coulomb_over_E_qball": 3.080165154877245e-05,
  "coulomb_dominates": false,
  "Q_enc_total": -1.0000000000000004,
  "target_MeV": 0.5109989
} as const;

export const gaugedProbe = {
  "mean_A0": -0.0022707835236146414,
  "omega": 0.8082207001484487,
  "relative_shift": 0.00280960822111777,
  "A0_center": -0.003298709542693196,
  "note": "Probe Maxwell on frozen global profile; not a self-consistent gauged Q-ball."
} as const;

export const obstructionAllNeutral = "HARD NO: no EM Noether current if \u03a6 and \u03bd are both electrically neutral and no extra charged fields (Mechanism E)." as const;

export const mechanisms = [
  { id: "A", name: "Assign U(1)_EM charge q_Phi to Phi; Q_EM = q_Phi Q_Noether", verdict: "Minimal working" },
  { id: "B", name: "Keep Phi neutral; trap second charged scalar chi", verdict: "Possible, less minimal" },
  { id: "C", name: "Bind a charged fermion instead of/in addition to nu", verdict: "Changes nu-only cartoon" },
  { id: "D", name: "Topology / monopole / dyon", verdict: "Heavy" },
  { id: "E", name: "All fields neutral", verdict: "HARD NO" },
] as const;
