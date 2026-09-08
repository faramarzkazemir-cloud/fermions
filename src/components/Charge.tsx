import { Tex as Math } from "./Math";
import { VerdictChip } from "./VerdictChip";
import {
  chargeMeta,
  qballQ1,
  emAssignment,
  coulombQ1,
  obstructionAllNeutral,
  mechanisms,
  fermionQ1,
} from "../data";

export function Charge() {
  return (
    <section id="charge" className="section">
      <div className="section-head">
        <span className="stage-tag">Charge</span>
        <h2>Mechanism A — electromagnetic charge</h2>
        <p className="section-sub">{chargeMeta.title}</p>
      </div>

      <article className="card warn-card">
        <h4>All-neutral obstruction</h4>
        <p>{obstructionAllNeutral}</p>
        <div className="chips tight">
          <VerdictChip
            label="All-neutral EM"
            value={chargeMeta.allNeutralObstruction}
          />
          <VerdictChip label="Mechanism A" value={chargeMeta.answer} />
        </div>
        <p className="muted small">
          Charge carrier: {chargeMeta.chargeCarrier}.
        </p>
      </article>

      <div className="grid2">
        <article className="card">
          <h4>Thin-branch Q ≈ 1</h4>
          <dl className="kv">
            <div>
              <dt>
                <Math tex={`\\omega`} />
              </dt>
              <dd className="mono">{qballQ1.omega}</dd>
            </div>
            <div>
              <dt>
                <Math tex={`Q`} />
              </dt>
              <dd className="mono">{qballQ1.Q.toFixed(6)}</dd>
            </div>
            <div>
              <dt>
                <Math tex={`E`} />
              </dt>
              <dd className="mono">{qballQ1.E.toFixed(6)}</dd>
            </div>
            <div>
              <dt>
                <Math tex={`f(0)`} />
              </dt>
              <dd className="mono">{qballQ1.f0.toExponential(3)}</dd>
            </div>
            <div>
              <dt>Radius</dt>
              <dd className="mono">{qballQ1.radius.toFixed(2)}</dd>
            </div>
            <div>
              <dt>
                <Math tex={`q_\\Phi`} />
              </dt>
              <dd className="mono">{emAssignment.q_phi_Q1}</dd>
            </div>
            <div>
              <dt>
                <Math tex={`Q_{\\mathrm{EM}}`} />
              </dt>
              <dd className="mono">{emAssignment.Q_EM_Q1.toFixed(6)}</dd>
            </div>
          </dl>
        </article>

        <article className="card">
          <h4>Coulomb estimate (α = 1/137)</h4>
          <dl className="kv">
            <div>
              <dt>
                <Math tex={`E_{\\mathrm{Qball}}`} /> (MeV)
              </dt>
              <dd className="mono">{coulombQ1.E_qball_MeV}</dd>
            </div>
            <div>
              <dt>
                <Math tex={`E_C`} /> integral (MeV)
              </dt>
              <dd className="mono">
                {coulombQ1.E_coulomb_integral_MeV.toExponential(3)}
              </dd>
            </div>
            <div>
              <dt>
                <Math tex={`E_C/E`} />
              </dt>
              <dd className="mono">
                {coulombQ1.E_coulomb_over_E_qball.toExponential(3)}
              </dd>
            </div>
            <div>
              <dt>Coulomb dominates?</dt>
              <dd className="mono">{String(coulombQ1.coulomb_dominates)}</dd>
            </div>
            <div>
              <dt>Bound levels (Q1)</dt>
              <dd className="mono">{fermionQ1.n_bound}</dd>
            </div>
            <div>
              <dt>
                <Math tex={`M(0)`} />
              </dt>
              <dd className="mono">{fermionQ1.M0.toFixed(3)}</dd>
            </div>
          </dl>
        </article>
      </div>

      <article className="card">
        <h4>Minimal extension catalogue</h4>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Mechanism</th>
                <th>Verdict</th>
              </tr>
            </thead>
            <tbody>
              {mechanisms.map((m) => (
                <tr key={m.id}>
                  <td>
                    <strong>{m.id}</strong>
                  </td>
                  <td>{m.name}</td>
                  <td>
                    <span
                      className={
                        m.verdict.includes("HARD NO")
                          ? "badge no"
                          : m.verdict.includes("Minimal")
                            ? "badge yes"
                            : "badge"
                      }
                    >
                      {m.verdict}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </article>
    </section>
  );
}
