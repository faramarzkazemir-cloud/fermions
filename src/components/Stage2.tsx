import { Tex as Math } from "./Math";
import { VerdictChip } from "./VerdictChip";
import {
  qballMeta,
  qballPrimary,
  qballScan,
  qballAnswers,
  fermionPrimary,
  qballStability,
  mevScaling,
  omegaWindow,
} from "../data";

const answerLabels: Record<string, string> = {
  "1_qball_exists": "Q-ball exists",
  "2_fermion_bound": "Fermion bound",
  "3_backreaction": "Backreaction converges",
  "4_stability_evidence": "Stability evidence",
  "5_E_eq_0.511_MeV": "E → 0.511 MeV by scaling",
};

export function Stage2() {
  return (
    <section id="stage2" className="section">
      <div className="section-head">
        <span className="stage-tag">Stage 2</span>
        <h2>3+1 soft Q-ball + Yukawa</h2>
        <p className="section-sub">{qballMeta.title}</p>
      </div>

      <div className="grid2">
        <article className="card">
          <h4>Primary Q-ball</h4>
          <dl className="kv">
            <div>
              <dt>
                <Math tex={`\\omega`} />
              </dt>
              <dd className="mono">{qballPrimary.omega.toFixed(4)}</dd>
            </div>
            <div>
              <dt>
                <Math tex={`E`} />
              </dt>
              <dd className="mono">{qballPrimary.E.toFixed(4)}</dd>
            </div>
            <div>
              <dt>
                <Math tex={`Q`} />
              </dt>
              <dd className="mono">{qballPrimary.Q.toFixed(4)}</dd>
            </div>
            <div>
              <dt>
                <Math tex={`E/(mQ)`} />
              </dt>
              <dd className="mono">{qballPrimary.E_over_mQ.toFixed(4)}</dd>
            </div>
            <div>
              <dt>Radius</dt>
              <dd className="mono">{qballPrimary.radius.toFixed(3)}</dd>
            </div>
            <div>
              <dt>
                <Math tex={`f(0)`} />
              </dt>
              <dd className="mono">{qballPrimary.f0.toFixed(4)}</dd>
            </div>
          </dl>
          <p className="muted small">
            Coleman window{" "}
            <Math
              tex={`\\omega\\in(${omegaWindow.omega_min.toFixed(3)},${omegaWindow.omega_max})`}
            />
            . {qballMeta.note}
          </p>
        </article>

        <article className="card">
          <h4>Fermion &amp; stability</h4>
          <p>
            Attractive well <Math tex={`M(r)=m_\\nu-g|\\Phi|`} /> with{" "}
            <Math
              tex={`m_\\nu=${fermionPrimary.m_nu},\\ g\\approx${fermionPrimary.g.toFixed(3)}`}
            />
            , <Math tex={`\\kappa=${fermionPrimary.kappa}`} /> gives{" "}
            <Math
              tex={`E_{\\mathrm{bound}}\\approx${fermionPrimary.E_bound.toFixed(3)}`}
            />
            .
          </p>
          <dl className="kv">
            <div>
              <dt>
                <Math tex={`E/(mQ)`} />
              </dt>
              <dd className="mono">{qballStability.E_over_mQ.toFixed(4)}</dd>
            </div>
            <div>
              <dt>
                <Math tex={`dQ/d\\omega<0`} />
              </dt>
              <dd className="mono">
                {String(qballStability.VK_dQ_domega_negative)}
              </dd>
            </div>
            <div>
              <dt>Fermion still bound</dt>
              <dd className="mono">
                {String(qballStability.fermion_pert.still_bound)}
              </dd>
            </div>
            <div>
              <dt>
                <Math tex={`\\mu_{\\mathrm{phys}}`} /> (MeV)
              </dt>
              <dd className="mono">
                {mevScaling.mu_phys_MeV.toExponential(3)}
              </dd>
            </div>
            <div>
              <dt>
                <Math tex={`E_{\\mathrm{phys}}`} /> (MeV)
              </dt>
              <dd className="mono">{mevScaling.E_phys_MeV}</dd>
            </div>
          </dl>
          <p className="muted small">{mevScaling.caveat}</p>
        </article>
      </div>

      <article className="card">
        <h4>Stage-2 answers</h4>
        <div className="chips tight">
          {Object.entries(qballAnswers).map(([k, v]) => (
            <VerdictChip key={k} label={answerLabels[k] ?? k} value={v} />
          ))}
        </div>
      </article>

      <article className="card">
        <h4>Q-ball scan</h4>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th className="num">
                  <Math tex={`\\omega`} />
                </th>
                <th className="num">
                  <Math tex={`E`} />
                </th>
                <th className="num">
                  <Math tex={`Q`} />
                </th>
                <th className="num">
                  <Math tex={`E/(mQ)`} />
                </th>
                <th className="num">
                  <Math tex={`f(0)`} />
                </th>
                <th className="num">Radius</th>
              </tr>
            </thead>
            <tbody>
              {qballScan.map((r) => (
                <tr key={r.omega}>
                  <td className="num">{r.omega.toFixed(4)}</td>
                  <td className="num">{r.E.toFixed(3)}</td>
                  <td className="num">{r.Q.toFixed(3)}</td>
                  <td className="num">{r.E_over_mQ.toFixed(4)}</td>
                  <td className="num">{r.f0.toFixed(4)}</td>
                  <td className="num">{r.radius.toFixed(3)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </article>
    </section>
  );
}
