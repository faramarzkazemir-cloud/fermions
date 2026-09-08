# Kink + Yukawa fermion in 1+1D — Results

## Model and equations

Units ħ = c = 1.

```
L = ½(∂_t Φ)² − ½(∂_x Φ)² − V(Φ) + ψ̄(i γ^μ ∂_μ − g Φ)ψ
V(Φ) = (λ/4)(Φ² − v²)²
```

Classical kink: `Φ_K(x) = v tanh(μ x)`, `μ = v √(λ/2)`.

Kink energy (v=1, λ=2): analytic `E_K=(2√2/3)√λ v³` = **1.333333**; numeric = **1.331562** (rel err 1.33e-03).

### Dirac representation

```
γ⁰ = σ₁ = [[0,1],[1,0]],  γ¹ = i σ₂ = [[0,1],[-1,0]]
H = −i σ₃ ∂_x + g Φ(x) σ₁
```
ODEs for `ψ=(u,w)ᵀ` on frozen Φ:

```
−i ∂_x u + g Φ w = E u
+i ∂_x w + g Φ u = E w
```
Continuum thresholds `±gv`. Bound states: `|E|<gv`, square-integrable.

### Jackiw–Rebbi zero mode

```
ψ₀ ∝ (f, −i f)ᵀ,  f=[cosh(μx)]^(−α),  α=g/√(λ/2)=gv/μ
ψ̄ψ = 2 Re(u* w) = 0  for this mode
```

### Numerics

Grid `x∈[−40.0,40.0]`, N=801. Central-difference ∂_x (Hermitian). Naive doublers rejected by normalizability (`edge/peak<0.08`) and smoothness (keep lowest second-difference in each energy cluster). Dense Hermitian `eigh`.

## Bound-state table (frozen kink)

| Set | λ | g | μ | gv | κ | α | n | bound E | JR E | dens fid | analytic E≥0 | gap |
|-----|---|---|---|----|---|---|---|---------|-----|----------|--------------|-----|
| A | 2.0 | 1.0 | 1 | 1 | 0.7071 | 1 | 1 | 3.47461e-15 | 3.475e-15 | 1.0000 | 0.0000 | 1.0000 |
| B | 2.0 | 2.0 | 1 | 2 | 1.414 | 2 | 3 | -1.73069, -2.22325e-15, 1.73069 | -2.223e-15 | 1.0000 | 0.0000, 1.7321 | 0.2693 |
| C | 8.0 | 1.0 | 2 | 1 | 0.3536 | 0.5 | 1 | 3.55431e-15 | 3.554e-15 | 1.0000 | 0.0000 | 1.0000 |
| D | 2.0 | 0.5 | 1 | 0.5 | 0.3536 | 0.5 | 1 | 3.36237e-15 | 3.362e-15 | 1.0000 | 0.0000 | 0.5000 |
| E | 0.5 | 1.0 | 0.5 | 1 | 1.414 | 2 | 3 | -0.865857, 4.51435e-15 | 0.865857 | 4.514e-15 | 1.0000 | 0.0000, 0.8660 | 0.1341 |
| F | 2.0 | 3.0 | 1 | 3 | 2.121 | 3 | 5 | -2.82298, -2.23174, 4.43405e-15, 2.23174, 2.82298 | 4.434e-15 | 1.0000 | 0.0000, 2.2361, 2.8284 | 0.1770 |
| G | 0.5 | 2.0 | 0.5 | 2 | 2.828 | 4 | 7 | -1.93509, -1.73025, -1.32185, 3.15188e-15, 1.32185, 1.73025, 1.93509 | 3.152e-15 | 1.0000 | 0.0000, 1.3229, 1.7321, 1.9365 | 0.0649 |


## Conditions for bound states

- **Zero mode always** for a topological kink with `m(+∞)=−m(−∞)≠0` (Jackiw–Rebbi), independent of the values of g, λ, v (as long as gv≠0).
- **Extra ±E levels** for `m(x)=gv tanh(μx)` when `α=gv/μ > n` (n=1,2,…): `|E_n|=gv√(1−((α−n)/α)²)`. Count ≈ `1+2⌊α−ε⌋`. Thick kink (small λ) or large g → larger α → more states. See `bound_count_vs_alpha.png`.

## Backreaction / self-consistency

```
−Φ'' + V'(Φ) = −g ψ̄ψ,   H[Φ]ψ = Eψ
ψ̄ψ = ψ† γ⁰ ψ = 2 Re(u* w)   (γ⁰=σ₁)
```

### Set A

- Converged: **True** (iters=4)

- Bound E: `-2.8391682278453996e-13`

- E_K analytic/numeric: `1.333333` / `1.331562`

- Final E_bos / E_tot: `1.3315646499601312` / `1.3315646499598472`

- max|Φ−Φ_K|: `0.0009612135555204793`

- max|ψ̄ψ|: `0.0`

- Stable heuristic: **True**

- Quench max/final drift: `0.013855395319170571` / `0.013548198088380592`

### Set B

- Converged: **True** (iters=4)

- Bound E: `-4.066398143371783e-12`

- E_K analytic/numeric: `1.333333` / `1.331562`

- Final E_bos / E_tot: `1.3315646499601312` / `1.331564649956065`

- max|Φ−Φ_K|: `0.0009612135555204793`

- max|ψ̄ψ|: `0.0`

- Stable heuristic: **True**

- Quench max/final drift: `0.013855395319170571` / `0.013548198088380592`

### Set E

- Converged: **True** (iters=4)

- Bound E: `3.8638644179803823e-13`

- E_K analytic/numeric: `0.666667` / `0.666445`

- Final E_bos / E_tot: `0.6664445533805301` / `0.6664445533809165`

- max|Φ−Φ_K|: `6.035334148352112e-05`

- max|ψ̄ψ|: `0.0`

- Stable heuristic: **True**

- Quench max/final drift: `0.012857775484154677` / `0.012833102315976896`


### Backreaction conclusions

For the JR zero mode, **ψ̄ψ≡0**, so the scalar equation is sourceless and **Φ=Φ_K is an exact self-consistent solution** together with the normalized zero mode. Iteration remains at Φ_K; E_bos≃E_K; quench with frozen ψ̄ψ≈0 is stable. Occupying a nonzero-E bound state would source a Φ deformation; that is not the topologically selected ground sector studied here.

## Final YES/NO

| Question | Answer |
|----------|--------|
| Normalizable bound state on frozen kink? | **YES** |
| Stable self-consistent backreacted solution? | **YES** (Φ_K + JR zero mode; ψ̄ψ=0) |


## Files

- `kink_yukawa.py` — runnable numerics
- `RESULTS.md`, `summary.json`
- `spectrum_set*.png`, `backreaction_set*.png`, `bound_count_vs_alpha.png`

## Numerical caveats

- Central differences ⇒ fermion doublers; filtered by localization+smoothness (not a Wilson mass, which can destroy weakly bound zero modes at small gv).
- Finite box: need L ≫ 1/(gv) for small-α zero-mode tails.
- Near-threshold levels can be confused with discretized continuum; margin `~0.025 gv` applied.
- Excited |E| agree with tanh-well analytics at the ~0.1% level on this grid.
