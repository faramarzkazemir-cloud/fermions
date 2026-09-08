/** Stage 1: 1+1 kink + Yukawa — exact numbers from calculations/kink_yukawa */
export const kinkMeta = {
  title: "1+1 kink + Yukawa (Jackiw–Rebbi)",
  date: "2026-09-08",
  existence: "YES" as const,
  stabilityEvidence: "YES" as const,
  units: "hbar = c = 1",
};

export const kinkEnergyCheck = {
  "v": 1.0,
  "lambda": 2.0,
  "E_K_analytic": 1.3333333333333335,
  "E_K_numeric": 1.331562301061375,
  "rel_error": 0.0013282742039688043
} as const;

export const kinkGrid = {
  "L": 40.0,
  "N": 801,
  "wilson_r": 0.0,
  "doubler_filter": "smoothness+normalizability"
} as const;

export const frozenSpectrum = [
  {
    "set": "A",
    "lambda": 2.0,
    "g": 1.0,
    "mu": 1.0,
    "gv": 1.0,
    "kappa": 0.7071067811865475,
    "alpha": 1.0,
    "n_bound": 1,
    "bound_energies": [
      3.4746140671861307e-15
    ],
    "zero_mode_E": 3.4746140671861307e-15,
    "zero_mode_dens_fidelity": 0.9999995643270859,
    "gap_to_continuum": 0.9999999999999966,
    "analytic_nonneg_E": [
      0.0
    ]
  },
  {
    "set": "B",
    "lambda": 2.0,
    "g": 2.0,
    "mu": 1.0,
    "gv": 2.0,
    "kappa": 1.414213562373095,
    "alpha": 2.0,
    "n_bound": 3,
    "bound_energies": [
      -1.7306874225497022,
      -2.223246026839618e-15,
      1.7306874225497106
    ],
    "zero_mode_E": -2.223246026839618e-15,
    "zero_mode_dens_fidelity": 0.9999980575871037,
    "gap_to_continuum": 0.26931257745028936,
    "analytic_nonneg_E": [
      0.0,
      1.7320508075688772
    ]
  },
  {
    "set": "C",
    "lambda": 8.0,
    "g": 1.0,
    "mu": 2.0,
    "gv": 1.0,
    "kappa": 0.35355339059327373,
    "alpha": 0.5,
    "n_bound": 1,
    "bound_energies": [
      3.554314733492772e-15
    ],
    "zero_mode_E": 3.554314733492772e-15,
    "zero_mode_dens_fidelity": 0.9999985429085452,
    "gap_to_continuum": 0.9999999999999964,
    "analytic_nonneg_E": [
      0.0
    ]
  },
  {
    "set": "D",
    "lambda": 2.0,
    "g": 0.5,
    "mu": 1.0,
    "gv": 0.5,
    "kappa": 0.35355339059327373,
    "alpha": 0.5,
    "n_bound": 1,
    "bound_energies": [
      3.3623728764784174e-15
    ],
    "zero_mode_E": 3.3623728764784174e-15,
    "zero_mode_dens_fidelity": 0.9999999104534684,
    "gap_to_continuum": 0.4999999999999966,
    "analytic_nonneg_E": [
      0.0
    ]
  },
  {
    "set": "E",
    "lambda": 0.5,
    "g": 1.0,
    "mu": 0.5,
    "gv": 1.0,
    "kappa": 1.414213562373095,
    "alpha": 2.0,
    "n_bound": 3,
    "bound_energies": [
      -0.8658565097474957,
      4.514348333603432e-15,
      0.8658565097475016
    ],
    "zero_mode_E": 4.514348333603432e-15,
    "zero_mode_dens_fidelity": 0.9999998800690322,
    "gap_to_continuum": 0.1341434902524984,
    "analytic_nonneg_E": [
      0.0,
      0.8660254037844386
    ]
  },
  {
    "set": "F",
    "lambda": 2.0,
    "g": 3.0,
    "mu": 1.0,
    "gv": 3.0,
    "kappa": 2.1213203435596424,
    "alpha": 3.0,
    "n_bound": 5,
    "bound_energies": [
      -2.822980907129351,
      -2.2317386914514055,
      4.4340512096538046e-15,
      2.231738691451424,
      2.8229809071293572
    ],
    "zero_mode_E": 4.4340512096538046e-15,
    "zero_mode_dens_fidelity": 0.9999954533525082,
    "gap_to_continuum": 0.17701909287064277,
    "analytic_nonneg_E": [
      0.0,
      2.23606797749979,
      2.82842712474619
    ]
  },
  {
    "set": "G",
    "lambda": 0.5,
    "g": 2.0,
    "mu": 0.5,
    "gv": 2.0,
    "kappa": 2.82842712474619,
    "alpha": 4.0,
    "n_bound": 7,
    "bound_energies": [
      -1.935094529831612,
      -1.7302481442124813,
      -1.3218467475440727,
      3.1518786499616413e-15,
      1.3218467475440752,
      1.7302481442124793,
      1.9350945298316056
    ],
    "zero_mode_E": 3.1518786499616413e-15,
    "zero_mode_dens_fidelity": 0.9999994951546383,
    "gap_to_continuum": 0.06490547016838799,
    "analytic_nonneg_E": [
      0.0,
      1.3228756555322954,
      1.7320508075688772,
      1.9364916731037085
    ]
  }
] as const;

export const kinkBackreaction = {
  "A": {
    "converged": true,
    "n_iter": 4,
    "E_bound": -2.8391682278453996e-13,
    "E_K_analytic": 1.3333333333333335,
    "E_K_numeric": 1.331562301061375,
    "E_bos_final": 1.3315646499601312,
    "E_tot_final": 1.3315646499598472,
    "delta_Phi_from_kink": 0.0009612135555204793,
    "max_psibarpsi": 0.0,
    "stable_heuristic": true,
    "quench": {
      "max_drift": 0.013855395319170571,
      "final_drift": 0.013548198088380592
    }
  },
  "B": {
    "converged": true,
    "n_iter": 4,
    "E_bound": -4.066398143371783e-12,
    "E_K_analytic": 1.3333333333333335,
    "E_K_numeric": 1.331562301061375,
    "E_bos_final": 1.3315646499601312,
    "E_tot_final": 1.331564649956065,
    "delta_Phi_from_kink": 0.0009612135555204793,
    "max_psibarpsi": 0.0,
    "stable_heuristic": true,
    "quench": {
      "max_drift": 0.013855395319170571,
      "final_drift": 0.013548198088380592
    }
  },
  "E": {
    "converged": true,
    "n_iter": 4,
    "E_bound": 3.8638644179803823e-13,
    "E_K_analytic": 0.6666666666666667,
    "E_K_numeric": 0.6664446558732202,
    "E_bos_final": 0.6664445533805301,
    "E_tot_final": 0.6664445533809165,
    "delta_Phi_from_kink": 6.035334148352112e-05,
    "max_psibarpsi": 0.0,
    "stable_heuristic": true,
    "quench": {
      "max_drift": 0.012857775484154677,
      "final_drift": 0.012833102315976896
    }
  }
} as const;

export const kinkConclusions = {
  "normalizable_bound_frozen": "YES",
  "zero_mode_always": "YES",
  "self_consistent_backreacted": "YES"
} as const;
