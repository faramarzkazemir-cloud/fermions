import { Tex as Math } from "./Math";
import { VerdictChip } from "./VerdictChip";
import {
  frozenSpectrum,
  kinkConclusions,
  kinkMeta,
  kinkEnergyCheck,
} from "../data";

export function Stage1() {
  return (
    <section id="stage1" className="section">
      <div className="section-head">
        <span className="stage-tag">Stage 1</span>
        <h2>1+1 kink + Yukawa</h2>
        <p className="section-sub">{kinkMeta.title}</p>
      </div>

      <div className="grid2">
        <article className="card">
          <h4>Model &amp; conclusions</h4>
          <p>
            Real scalar kink with Yukawa-coupled Dirac fermion. The Jackiw–Rebbi
            zero mode exists whenever <Math tex={`m(x)=g\\Phi_K(x)`} />{" "}
            interpolates between opposite signs. Scalar density of the zero mode
            vanishes, so <Math tex={`\\Phi=\\Phi_K`} /> plus the normalized mode
            is exact.
          </p>
          <div className="chips tight">
            <VerdictChip
              label="Bound (frozen)"
              value={kinkConclusions.normalizable_bound_frozen}
            />
            <VerdictChip
              label="Zero mode"
              value={kinkConclusions.zero_mode_always}
            />
            <VerdictChip
              label="Self-consistent"
              value={kinkConclusions.self_consistent_backreacted}
            />
          </div>
        </article>

        <article className="card">
          <h4>Kink energy check</h4>
          <dl className="kv">
            <div>
              <dt>
                <Math tex={`v`} />
              </dt>
              <dd className="mono">{kinkEnergyCheck.v}</dd>
            </div>
            <div>
              <dt>
                <Math tex={`\\lambda`} />
              </dt>
              <dd className="mono">{kinkEnergyCheck.lambda}</dd>
            </div>
            <div>
              <dt>
                <Math tex={`E_K`} /> analytic
              </dt>
              <dd className="mono">{kinkEnergyCheck.E_K_analytic.toFixed(6)}</dd>
            </div>
            <div>
              <dt>
                <Math tex={`E_K`} /> numeric
              </dt>
              <dd className="mono">{kinkEnergyCheck.E_K_numeric.toFixed(6)}</dd>
            </div>
            <div>
              <dt>Relative error</dt>
              <dd className="mono">
                {kinkEnergyCheck.rel_error.toExponential(3)}
              </dd>
            </div>
          </dl>
        </article>
      </div>

      <article className="card">
        <h4>Frozen spectrum (sets A–G)</h4>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Set</th>
                <th className="num">
                  <Math tex={`\\lambda`} />
                </th>
                <th className="num">
                  <Math tex={`g`} />
                </th>
                <th className="num">
                  <Math tex={`\\alpha`} />
                </th>
                <th className="num">
                  <Math tex={`n_{\\mathrm{bound}}`} />
                </th>
                <th className="num">Gap to continuum</th>
                <th className="num">
                  <Math tex={`E_0`} /> (zero mode)
                </th>
              </tr>
            </thead>
            <tbody>
              {frozenSpectrum.map((r) => (
                <tr key={r.set}>
                  <td>
                    <strong>{r.set}</strong>
                  </td>
                  <td className="num">{r.lambda}</td>
                  <td className="num">{r.g}</td>
                  <td className="num">{r.alpha.toFixed(2)}</td>
                  <td className="num">{r.n_bound}</td>
                  <td className="num">{r.gap_to_continuum.toFixed(4)}</td>
                  <td className="num">{r.zero_mode_E.toExponential(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </article>
    </section>
  );
}
