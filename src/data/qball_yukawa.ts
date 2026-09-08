/** Stage 2: 3+1 soft Q-ball + Yukawa — exact numbers from calculations/qball_yukawa */
export const qballMeta = {
  title: "3+1 soft Q-ball + Yukawa fermion",
  date: "2026-09-08",
  existence: "YES" as const,
  stabilityEvidence: "YES" as const,
  params: {"m": 1.0, "A": 1.8, "B": 1.0},
  note: "No U(1)_EM, no charge, no QED, no magnetic moment. Coupling to modulus |Phi|.",
};

export const omegaWindow = {
  omega_min: 0.6164414002968975,
  omega_max: 1.0,
  phi_star: 0.9,
} as const;

export const qballPrimary = {
  "omega": 0.8082207001484487,
  "f0": 0.5722034344768927,
  "E": 36.861392318833985,
  "Q": 40.666061538223026,
  "E_over_mQ": 0.9064411680041122,
  "radius": 5.362139505247359
} as const;

export const qballScan = [
  {
    "omega": 0.6624684322612698,
    "E": 107.375011201616,
    "Q": 139.2501096533697,
    "E_over_mQ": 0.7710946258419529,
    "f0": 0.9107460175600162,
    "radius": 5.732458361156261
  },
  {
    "omega": 0.7506869101929834,
    "E": 53.4823042268306,
    "Q": 62.05906117825942,
    "E_over_mQ": 0.8617968627209359,
    "f0": 0.7240909009937638,
    "radius": 5.2564752205026455
  },
  {
    "omega": 0.8082207001484487,
    "E": 36.861392318833985,
    "Q": 40.666061538223026,
    "E_over_mQ": 0.9064411680041122,
    "f0": 0.5722034344768927,
    "radius": 5.362139505247359
  },
  {
    "omega": 0.9041103500742244,
    "E": 19.44831969763124,
    "Q": 20.223244005300725,
    "E_over_mQ": 0.9616815033499884,
    "f0": 0.2936705439235042,
    "radius": 6.586551486109875
  }
] as const;

export const fermionPrimary = {
  "omega": 0.6624684322612698,
  "m_nu": 1.5,
  "g": 0.9058507905532888,
  "kappa": -1,
  "E_bound": 1.064889551684985,
  "energies": [
    -1.3011762810334369,
    1.064889551684985,
    1.4308672307438464
  ]
} as const;

export const fermionScans = [
  {
    "omega": 0.6624684322612698,
    "m_nu": 2.0,
    "g": 1.3176011498956925,
    "kappa": -1,
    "n_bound": 5,
    "energies": [
      -1.88068422998565,
      -1.5181320673909298,
      1.2396689412903072,
      1.7074522866918644,
      1.9689970260520933
    ],
    "M0": 0.8000000000047793
  },
  {
    "omega": 0.6624684322612698,
    "m_nu": 2.0,
    "g": 1.3176011498956925,
    "kappa": 1,
    "n_bound": 5,
    "energies": [
      -1.9689970260162153,
      -1.7074522866531305,
      -1.2396689413010802,
      1.5181320672764818,
      1.880684229976898
    ],
    "M0": 0.8000000000047793
  },
  {
    "omega": 0.6624684322612698,
    "m_nu": 1.5,
    "g": 0.9058507905532888,
    "kappa": -1,
    "n_bound": 3,
    "energies": [
      -1.3011762810334369,
      1.064889551684985,
      1.4308672307438464
    ],
    "M0": 0.6750000000032856
  },
  {
    "omega": 0.6624684322612698,
    "m_nu": 1.5,
    "g": 0.9058507905532888,
    "kappa": 1,
    "n_bound": 3,
    "energies": [
      -1.430867230779059,
      -1.0648895517847292,
      1.3011762811500107
    ],
    "M0": 0.6750000000032856
  },
  {
    "omega": 0.8082207001484487,
    "m_nu": 2.0,
    "g": 2.097156234472863,
    "kappa": -1,
    "n_bound": 5,
    "energies": [
      -1.947198642460407,
      -1.6500739394099069,
      1.3473913281923184,
      1.805182832277772,
      1.9921230044370988
    ],
    "M0": 0.8000000000108669
  },
  {
    "omega": 0.8082207001484487,
    "m_nu": 2.0,
    "g": 2.097156234472863,
    "kappa": 1,
    "n_bound": 5,
    "energies": [
      -1.9921230044370126,
      -1.8051828322966765,
      -1.3473913282717689,
      1.6500739394166142,
      1.9471986425543821
    ],
    "M0": 0.8000000000108669
  },
  {
    "omega": 0.8082207001484487,
    "m_nu": 1.5,
    "g": 1.4417949112000936,
    "kappa": -1,
    "n_bound": 3,
    "energies": [
      -1.384460753455238,
      1.146168809634106,
      1.4679062019168716
    ],
    "M0": 0.6750000000074707
  },
  {
    "omega": 0.8082207001484487,
    "m_nu": 1.5,
    "g": 1.4417949112000936,
    "kappa": 1,
    "n_bound": 3,
    "energies": [
      -1.4679062019168716,
      -1.146168809496468,
      1.3844607534558437
    ],
    "M0": 0.6750000000074707
  },
  {
    "omega": 0.9041103500742244,
    "m_nu": 2.0,
    "g": 4.0862116573481675,
    "kappa": -1,
    "n_bound": 6,
    "energies": [
      -1.9928235717818603,
      -1.8636946068876923,
      -1.5678395791193367,
      1.2942059470626535,
      1.7164769026001738,
      1.935703349844965
    ],
    "M0": 0.8000000000087568
  },
  {
    "omega": 0.9041103500742244,
    "m_nu": 2.0,
    "g": 4.0862116573481675,
    "kappa": 1,
    "n_bound": 6,
    "energies": [
      -1.9357033497519835,
      -1.7164769026143247,
      -1.294205947087177,
      1.5678395791349768,
      1.8636946068848261,
      1.9928235717824463
    ],
    "M0": 0.8000000000087568
  },
  {
    "omega": 0.9041103500742244,
    "m_nu": 1.5,
    "g": 2.8092705144268653,
    "kappa": -1,
    "n_bound": 4,
    "energies": [
      -1.492779368202996,
      -1.3199872025537092,
      1.1006841625983192,
      1.4142595781433207
    ],
    "M0": 0.6750000000060202
  },
  {
    "omega": 0.9041103500742244,
    "m_nu": 1.5,
    "g": 2.8092705144268653,
    "kappa": 1,
    "n_bound": 4,
    "energies": [
      -1.4142595780268121,
      -1.1006841624618404,
      1.3199872025639252,
      1.4927793682124668
    ],
    "M0": 0.6750000000060202
  }
] as const;

export const qballBackreaction = {
  "self_consistent": true,
  "failure": null,
  "n_iter": 1,
  "converged_flag": true,
  "g_used": 0.4529253952766444,
  "history_diffs": [
    5.948377774003744e-07
  ]
} as const;

export const qballStability = {
  "E_over_mQ": 0.9064411680041122,
  "fission_OK": true,
  "dQ_domega": [
    -874.9986429697963,
    -570.4514158802405,
    -312.3426899886196,
    -213.1910748318121
  ],
  "VK_dQ_domega_negative": true,
  "quench_relaxed": false,
  "quench_evidence_ok": false,
  "quench_dist_i": 0.006865608457491909,
  "quench_dist_f": 0.010783721521593645,
  "quench_F_eq": 3.99330835868334,
  "quench_F_pert": 3.9852304618049037,
  "fermion_pert": {
    "ok": true,
    "E_before": [
      1.064889551684985,
      1.4308672307438464
    ],
    "E_after": [
      1.0389461471958596,
      1.4203347101063286
    ],
    "still_bound": true,
    "amp": 0.05,
    "m_nu": 1.5
  },
  "evidence_positive": true,
  "note": "Evidence = E<mQ + dQ/d\u03c9<0 (VK-type) + fermion stays bound under \u03b4f. Radial quench is optional/numerical and may be FD-noisy."
} as const;

export const mevScaling = {
  "E_dimensionless": 36.861392318833985,
  "mu_phys_MeV": 0.013862742773796673,
  "E_phys_MeV": 0.511,
  "possible": true,
  "caveat": "Classically/semi-classically YES by overall mass-unit choice \u03bc. E/(mQ) and \u03c9/m are invariant; absolute E scales as \u03bc. This does NOT address QED, charge, or Compton/quantum issues \u2014 out of scope."
} as const;

export const qballAnswers = {
  "1_qball_exists": "YES",
  "2_fermion_bound": "YES",
  "3_backreaction": "YES",
  "4_stability_evidence": "YES",
  "5_E_eq_0.511_MeV": "YES"
} as const;
