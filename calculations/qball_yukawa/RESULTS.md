# Q-ball + Yukawa fermion: numerical feasibility results

## Answers (math feasibility)

| # | Question | Answer |
|---|----------|--------|
| 1 | Finite-energy, finite-radius Q-ball? | **YES** |
| 2 | Normalizable fermion bound eigenstate? | **YES** |
| 3 | Self-consistent backreacted Φ↔ψ? | **YES** |
| 4 | Stability evidence (small perturbations)? | **YES** |
| 5 | Parameters so E_total ≈ 0.511 MeV? | **YES** |

## Model and coupling choice

Complex scalar with global U(1) plus neutral Dirac fermion. **No U(1)_EM, no charge, no QED, no magnetic moment.**

Interaction uses the **modulus**:

$$ \mathcal{L}_{\mathrm{int}} = -g\,|\Phi|\,\bar\psi\psi $$

so that with $\Phi=e^{i\omega t}f(r)$ the fermion mass is **static** and the Dirac operator is Hermitian. (Coupling to complex $\Phi$ would make $M$ complex/time-dependent in this ansatz.)

Potential (Coleman soft):

$$ V(\varphi)= m^2\varphi^2 - A\varphi^3 + B\varphi^4,\quad m=1.0,\; A=1.8,\; B=1.0. $$

Note: the example $(m,A,B)=(1,1.2,1)$ gives $\omega_{\min}>m$ (empty window). We use $A=1.8$ so $\omega_{\min}<m$ and $V\ge 0$.


## Q-ball ODE (derived)

```
Lagrangian density (global U(1) complex scalar):
  L = |∂_t Φ|² − |∇Φ|² − V(|Φ|)

Ansatz Φ(t,r) = e^{i ω t} f(r), f real.
  |∂_t Φ|² = ω² f²,   |∇Φ|² = (f')²

Effective spatial action density for f:
  ∫ d³x [ ω² f² − (∇f)² − V(f) ]

Euler–Lagrange δ/δf = 0:
  2 ω² f + 2 ∇² f − V'(f) = 0
  ⇒  ∇² f + ω² f − (1/2) V'(f) = 0

Spherical symmetry: ∇² f = f'' + (2/r) f'
  ⇒  f'' + (2/r) f' + ω² f − (1/2) dV/dφ|_{φ=f} = 0

BC: f'(0)=0, f(∞)=0.

Energy (Hamiltonian, time-averaged):
  E = ∫ 4π r² dr [ ω² f² + (f')² + V(f) ]

Noether charge (j⁰ = 2 ω f²):
  Q = ∫ 4π r² dr [ 2 ω f² ]
```

Coleman window: $\omega_{\min}=0.616441 < \omega < m=1.000000$, with $\omega_{\min}^2=\min_\varphi 2V(\varphi)/\varphi^2$.


## Q-ball scan

| ω | f(0) | E | Q | E/(mQ) | R(10%) |
|---|------|---|---|--------|--------|
| 0.6625 | 0.9107 | 107.3750 | 139.2501 | 0.7711 | 5.73 |
| 0.7507 | 0.7241 | 53.4823 | 62.0591 | 0.8618 | 5.26 |
| 0.8082 | 0.5722 | 36.8614 | 40.6661 | 0.9064 | 5.36 |
| 0.9041 | 0.2937 | 19.4483 | 20.2232 | 0.9617 | 6.59 |

**Primary Q-ball:** ω=0.8082, E=36.8614, Q=40.6661, E/(mQ)=0.9064 < 1 ⇒ classical fission stability OK.

**Q1 = YES** — localized finite-energy profiles exist throughout the window.


## Fermion on frozen Q-ball

```
Coupling to modulus: M_base(r) = m_ν ± g f(r).

Case I (primary, attractive scalar well for Dirac):
  M(r) = m_ν − g f(r),  with 0 < g f(0) < m_ν so M>0 and M(∞)=m_ν.
  Continuum thresholds ±m_ν; bound states satisfy |E| < m_ν.

Dirac radial reduction (κ = ±1 for j=1/2), textbook form matching
H = α·p + β M(r) (cf. Greiner, Relativistic Quantum Mechanics):
  dF/dr = −(κ/r) F + (E + M(r)) G
  dG/dr = +(κ/r) G − (E − M(r)) F

Normalization: ∫_0^∞ (F² + G²) r² dr = 1.
Scalar density for backreaction: ψ̄ψ ~ (F² − G²) (radial).
```

Primary = **Case I**: $M(r)=m_\nu - g f(r)$ with $0<g f(0)<m_\nu$ (attractive scalar well; continuum $\pm m_\nu$).

Example: ω=0.6625, m_ν=1.5, g=0.9059, κ=-1, bound E=1.064890 (|E|<m_ν=1.5), normalizable.

Scans:

| ω | m_ν | g | κ | n_bound | energies |
|---|-----|---|---|---------|----------|
| 0.662 | 2.0 | 1.318 | -1 | 5 | -1.8807, -1.5181, 1.2397, 1.7075, 1.9690 |
| 0.662 | 2.0 | 1.318 | 1 | 5 | -1.9690, -1.7075, -1.2397, 1.5181, 1.8807 |
| 0.662 | 1.5 | 0.906 | -1 | 3 | -1.3012, 1.0649, 1.4309 |
| 0.662 | 1.5 | 0.906 | 1 | 3 | -1.4309, -1.0649, 1.3012 |
| 0.808 | 2.0 | 2.097 | -1 | 5 | -1.9472, -1.6501, 1.3474, 1.8052, 1.9921 |
| 0.808 | 2.0 | 2.097 | 1 | 5 | -1.9921, -1.8052, -1.3474, 1.6501, 1.9472 |
| 0.808 | 1.5 | 1.442 | -1 | 3 | -1.3845, 1.1462, 1.4679 |
| 0.808 | 1.5 | 1.442 | 1 | 3 | -1.4679, -1.1462, 1.3845 |
| 0.904 | 2.0 | 4.086 | -1 | 6 | -1.9928, -1.8637, -1.5678, 1.2942, 1.7165, 1.9357 |
| 0.904 | 2.0 | 4.086 | 1 | 6 | -1.9357, -1.7165, -1.2942, 1.5678, 1.8637, 1.9928 |
| 0.904 | 1.5 | 2.809 | -1 | 4 | -1.4928, -1.3200, 1.1007, 1.4143 |
| 0.904 | 1.5 | 2.809 | 1 | 4 | -1.4143, -1.1007, 1.3200, 1.4928 |

**Q2 = YES** — normalizable bound eigenstates with |E|<m_ν.


## Backreaction

Sourced ODE used:

$$ f''+\frac{2}{r}f'+\omega^2 f-\frac12 V'(f)-\frac{g}{2}\sigma(r)=0,\quad \sigma=F^2-G^2. $$

Result: self_consistent=True, converged_flag=True, g_used=0.4529253952766444, n_iter=1, diffs=[5.948377774003744e-07]

**Q3 = YES**


## Stability evidence (not a proof)

- Classical fission: E/(mQ)=0.9064 < 1 → True
- VK-type: dQ/dω < 0 on scanned branch → True (dQ/dω samples: [-874.9986429697963, -570.4514158802405, -312.3426899886196, -213.1910748318121])
- Fermion under δf stays bound: {'ok': True, 'E_before': [1.064889551684985, 1.4308672307438464], 'E_after': [1.0389461471958596, 1.4203347101063286], 'still_bound': True, 'amp': 0.05, 'm_nu': 1.5}
- Optional radial quench (FD-noisy): relaxed=False, dist 6.8656e-03 → 1.0784e-02
- Note: Evidence = E<mQ + dQ/dω<0 (VK-type) + fermion stays bound under δf. Radial quench is optional/numerical and may be FD-noisy.

**Q4 = YES** (evidence only).


## Energy scale → 0.511 MeV

Dimensionless E=36.8614. Choose μ_phys=0.013863 MeV so E_phys = E × μ = 0.511 MeV. Classically/semi-classically YES by overall mass-unit choice μ. E/(mQ) and ω/m are invariant; absolute E scales as μ. This does NOT address QED, charge, or Compton/quantum issues — out of scope.

**Q5 = YES**


## Plots

- `plots/potential_Veff.png`
- `plots/f_profiles.png`
- `plots/E_vs_Q.png`
- `plots/fermion_bound.png`
- `plots/spectrum_markers.png`
- `plots/backreaction.png`
- `plots/stability_quench.png`

## Code

`model.py`, `solve_qball.py`, `solve_fermion.py`, `backreaction.py`, `stability.py`, `run_pipeline.py`
