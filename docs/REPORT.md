# Soliton-Fermion Bound States as a Composite Prototype

**Existence Tests in 1+1 and 3+1 Dimensions, and a Minimal Route to Electromagnetic Charge**

Technical Feasibility Report — 8 September 2026

*Paraphrased from the LaTeX feasibility report; exact numbers in src/data and calculations/.*

**Existence: YES. Stability evidence: YES (not full proof). Not claiming electron compositeness.**

## Abstract

We report a staged mathematical feasibility study of a speculative composite picture in which a localized scalar field configuration supports a normalizable bound mode of a neutral Dirac fermion (a ``neutrino-like'' excitation). The program deliberately separates **existence** from **experimental identification with the electron**.

In $1{+}1$ dimensions, a real scalar kink with Yukawa coupling admits the Jackiw--Rebbi zero mode; the scalar density of that mode vanishes, so the kink plus zero mode is an exact self-consistent classical solution, with numerical evidence of robustness under quenches.

In $3{+}1$ dimensions, Derrick's theorem blocks a static real-scalar soliton; we instead construct Coleman-type complex-scalar Q-balls with a soft potential, demonstrate finite-energy localized profiles, and find Dirac bound states in an attractive scalar well $M(r)=m_\nu-g|\Phi|$. Weak-coupling backreaction converges, and classical stability indicators $E/(mQ)<1$ and $dQ/d\omega<0$ hold on the scanned branch. Overall mass-unit scaling can place the classical energy at $0.511 \mathrm{MeV}$; this is a scaling statement, not a QED match.

Finally, an all-neutral field content has a hard Noether obstruction to nonzero electric charge. The minimal extension (Mechanism A) assigns $\mathrm{U}(1)_{\mathrm{EM}}$ charge to $\Phi$ so that $Q_{\mathrm{EM}}=q_\Phi Q_{\mathrm{Noether}}$. A thin-branch Q-ball with $Q_{\mathrm{Noether}}\approx 1$ is reached; a neutral fermion remains bound; a Coulomb estimate at $\alpha=1/137$ and $E\to 0.511 \mathrm{MeV}$ gives $E_C/E_{\mathrm{Qball}}\sim 10^{-5}$.

Throughout we claim **Existence: YES** and **evidence for stability: YES**, not a full proof of quantum dynamical stability, and we defer magnetic moment and precision QED constraints.

## Introduction and scope

The working hypothesis under study is not that the Standard Model electron is composite, but whether a mathematically consistent field-theoretic caricature of the schematic object

$$
\bigl[\Phi_{\mathrm{localized}}, \nu_{\mathrm{bound}}\bigr]
$$

can exist at all. Conceptual preference is given to binding via a spatially varying effective mass $m_{\mathrm{eff}}(x)=m_\nu+g\Phi(x)$ (or $|\Phi|$), rather than an unspecified ``force holding a neutrino inside a bag.'' Topology-heavy constructions are deferred; the simplest models that evade known no-go results are preferred.

The study is organized as three successive tests: (i) $1{+}1$ kink $+$ Yukawa; (ii) $3{+}1$ Q-ball $+$ Yukawa; (iii) minimal electromagnetic charge without mixing that question into the prior existence tests.

## One-plus-one dimensions: kink and Yukawa fermion

### Model
The Lagrangian density is

$$
\mathcal{L}
=\tfrac12(\partial_t\Phi)^2-\tfrac12(\partial_x\Phi)^2-V(\Phi)
+\bar\psi\bigl(i\gamma^\mu\partial_\mu-g\Phi\bigr)\psi,
$$

with $V(\Phi)=(\lambda/4)(\Phi^2-v^2)^2$. The classical kink $\Phi_K(x)=v\tanh(\mu x)$, $\mu=v\sqrt{\lambda/2}$, has energy $E_K=(2\sqrt{2}/3)\sqrt{\lambda} v^3$. In the Dirac representation with $H=-i\sigma_3\partial_x+g\Phi(x)\sigma_1$, continuum thresholds lie at $\pm gv$. Bound states require $|E|<gv$ and square-integrability.

Analytically, the Jackiw--Rebbi (JR) zero mode exists whenever the fermion mass $m(x)=g\Phi_K(x)$ interpolates between opposite signs at spatial infinity. For this mode, $\bar\psi\psi\equiv 0$, so the scalar equation is sourceless and $\Phi=\Phi_K$ is exactly self-consistent together with the normalized zero mode.

### Numerical spectrum
The Dirac Hamiltonian was discretized on $x\in[-40,40]$ with $N=801$ points. Naive lattice doublers were rejected by localization and smoothness filters. The dimensionless depth/width parameter $\alpha=gv/\mu=g/\sqrt{\lambda/2}$ controls the number of extra $\pm E$ levels; the zero mode is always present for $gv\neq 0$.

*(See interactive tables in the web app / src/data.)*

### Conclusions in $1{+1$}
**Existence: YES.** Normalizable bound states exist; the JR zero mode is universal for the topological kink. **Evidence for stability: YES** at the classical/self-consistent level (exact self-consistency of $\Phi_K+$ JR mode; quench tests did not destroy the configuration). A full proof via the fluctuation spectrum of the coupled quantum system is not claimed.

## Three-plus-one dimensions: Q-ball and bound fermion

### Why not a real scalar soliton?
Derrick's theorem forbids stable, static, finite-energy solitons of a canonical real scalar with non-derivative potential in three spatial dimensions. The minimal evasion used here is a complex scalar Q-ball with a conserved global $\mathrm{U}(1)$ and time-dependent phase, without introducing heavy topology.

### Q-ball model
We take $\Phi(t,r)=e^{i\omega t}f(r)$ with soft potential

$$
V(\varphi)=m^2\varphi^2-A\varphi^3+B\varphi^4,
$$

parameters $(m,A,B)=(1,1.8,1)$. (The trial $A=1.2$ yields an empty Coleman window.) The radial profile obeys

$$
f''+\frac{2}{r}f'+\omega^2 f-\tfrac12 V'(f)=0,  f'(0)=0,  f(\infty)=0.
$$

Energy and Noether charge:

$$
E=\int 4\pi r^2 dr\bigl[\omega^2 f^2+(f')^2+V(f)\bigr], 
Q=\int 4\pi r^2 dr\bigl[2\omega f^2\bigr].
$$

Coleman window: $\omega\in(\omega_{\min},m)$ with $\omega_{\min}\approx 0.616$. Localized finite-energy solutions exist throughout the window.

*(See interactive tables in the web app / src/data.)*

### Fermion bound states
Coupling to the complex rotating phase would render the fermion mass time-dependent. For a static Hermitian test we couple to the modulus:

$$
M(r)=m_\nu-g f(r),  0<g f(0)<m_\nu,
$$

an attractive scalar well with continuum thresholds $\pm m_\nu$. Radial Dirac equations for $\kappa=\pm 1$ ($j=1/2$) admit multiple normalizable eigenvalues with $|E|<m_\nu$. Example: $\omega\approx 0.662$, $m_\nu=1.5$, $g\approx 0.91$, $\kappa=-1$ gives $E_{\mathrm{bound}}\approx 1.065$.

### Backreaction, stability evidence, and the $0.511 \mathrm{MeV$ scale}
Iterating the sourced profile equation with a single normalized fermion yields a self-consistent fixed point at weak coupling; the deformation $\delta f$ is tiny for $Q\gg 1$, as expected. Classical indicators: $E/(mQ)\in[0.77,0.96]<1$ on the scan, and $dQ/d\omega<0$ (Vakhitov--Kolokolov-type). The fermion remains bound under $\mathcal{O}(5\%)$ profile perturbations. A noisy radial quench is not used as primary evidence.

Dimensionless primary energy $E\approx 36.86$ can be scaled by an overall mass unit $\mu_{\mathrm{phys}}\approx 0.0139 \mathrm{MeV}$ so that $E_{\mathrm{phys}}=0.511 \mathrm{MeV}$. Ratios such as $E/(mQ)$ and $\omega/m$ are invariant. This does not address Compton-size or QED constraints.

**$3{+**1$ composite (neutral): Existence YES; evidence for stability YES} (not a complete quantum stability proof).

## Electromagnetic charge: what is missing, and Mechanism A

### Hard obstruction in the all-neutral theory
If $\Phi$ and the fermion are both electrically neutral and no additional charged fields are introduced, the electromagnetic Noether current vanishes identically. Consequently $Q_{\mathrm{EM}}\equiv 0$ for every configuration. This is a symmetry/current-absence statement in that field content, not an appeal to Standard Model elementarity.

### Classification of minimal extensions

*(See interactive tables in the web app / src/data.)*

### Numerical results for Mechanism A
On the thin branch $\omega\to m^-$, $Q_{\mathrm{Noether}}$ decreases toward $\mathcal{O}(1)$. At $\omega=0.9996$ we obtain $Q\approx 1.017$, $E\approx 1.017$, with a spatially extended profile ($R_{10\%}\sim 90$ in dimensionless units). Taking $q_\Phi=-1$ yields $Q_{\mathrm{EM}}\approx -1$. A mid-branch alternative sets $q_\Phi=-1/Q$ for exact $Q_{\mathrm{EM}}=-1$ on a larger-$Q$ soliton (fractional charge per quantum classically; quantum Q-balls prefer integer $Q$ with $q_\Phi=-1$).

A neutral Dirac fermion with $M(r)=m_\nu-g f(r)$ remains bound on these profiles. Electromagnetic charge resides in the **scalar cloud**; the bound fermion stays electrically neutral in this mechanism.

With $\alpha=1/137$ and $E$ scaled to $0.511 \mathrm{MeV}$, the electrostatic self-energy estimate satisfies $E_C/E_{\mathrm{Qball}}\sim 6\times 10^{-5}$ for $|Q_{\mathrm{EM}}|=1$ on the $Q\approx 1$ configuration. In this estimate Coulomb does not destroy localization. A full gauged Maxwell--scalar BVP was not solved (numerically stiff); a frozen-source probe finds $A_0/\omega\sim 10^{-3}$.

## Synthesis

*(See interactive tables in the web app / src/data.)*

The conceptual chain supported by the numerics is

$$
\Phi_{\mathrm{localized}}\to M_{\mathrm{eff}}(r)\to\nu_{\mathrm{bound}}
 \bigl(+\; q_\Phi\text{ on }\Phi\to Q_{\mathrm{EM}}\bigr).
$$

What this report does **not** establish: identification with the laboratory electron; a proof of full quantum dynamical stability; a completed gauged QED soliton; $g-2$ or high-energy form-factor constraints; or a unique microphysical origin of $q_\Phi$.

## Numerical caveats

- $1{+}1$ Dirac discretization produces doublers; filtering by localization/smoothness was used (Wilson mass can destroy fragile zero modes at small $gv$).

- Q-ball and fermion radial grids require large outer radius for thin-branch tails.

- Backreaction of one fermion on a large-$Q$ Q-ball is parametrically small.

- Coulomb and $A_0$ results are estimates, not a fully solved gauged BVP.

- Scaling to $0.511 \mathrm{MeV}$ enlarges the physical radius proportionally; phenomenology of size is deferred.

## Outlook
Natural next steps, if pursued later, include: (i) a fully gauged Maxwell--scalar Q-ball BVP; (ii) controlled fluctuation analysis about the self-consistent background; (iii) only then, confrontation with hard electron constraints (effective size, magnetic moment). Those steps were intentionally not mixed into the existence tests reported here.

---\\[0.5em]
{ *Technical feasibility report of calculations performed on 8 September 2026.
Compiled with `pdflatex*.`}
