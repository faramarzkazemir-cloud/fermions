import { Nav } from "./components/Nav";
import { Tex as Math } from "./components/Math";
import { VerdictChip } from "./components/VerdictChip";
import {
  frozenSpectrum,
  kinkConclusions,
  qballPrimary,
  qballAnswers,
  mevScaling,
  qballQ1,
  emAssignment,
  coulombQ1,
  obstructionAllNeutral,
  mechanisms,
} from "./data";

export default function App() {
  return (
    <div className="app">
      <Nav />
      <header className="hero" id="intro">
        <h1>Fermions on solitons</h1>
        <p className="fa">فرمیون‌ها روی سالیتون — وجود و شواهد پایداری</p>
        <p>
          Compact report UI: kink zero-modes, Q-ball bound states, and EM charge
          via Mechanism A. Primary Q-ball:{" "}
          <Math tex={`E=${qballPrimary.E.toFixed(2)},\\ Q=${qballPrimary.Q.toFixed(2)}`} />
          ; MeV scale possible: {String(mevScaling.possible)}.
        </p>
        <div className="chips">
          <VerdictChip label="Existence" value="YES" />
          <VerdictChip label="Stability evidence" value="YES" />
          <VerdictChip label="1+1 zero mode" value={kinkConclusions.zero_mode_always} />
          <VerdictChip label="Q-ball exists" value={qballAnswers["1_qball_exists"]} />
        </div>
      </header>

      <section id="stage1">
        <h2>Stage 1 — frozen spectrum</h2>
        <table>
          <thead>
            <tr>
              <th>Set</th><th>λ</th><th>g</th><th>n_bound</th><th>gap</th>
            </tr>
          </thead>
          <tbody>
            {frozenSpectrum.map((r) => (
              <tr key={r.set}>
                <td>{r.set}</td>
                <td>{r.lambda}</td>
                <td>{r.g}</td>
                <td>{r.n_bound}</td>
                <td>{r.gap_to_continuum.toFixed(4)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section id="stage2">
        <h2>Stage 2 — answers</h2>
        <table>
          <thead>
            <tr><th>Question</th><th>Answer</th></tr>
          </thead>
          <tbody>
            {Object.entries(qballAnswers).map(([k, v]) => (
              <tr key={k}><td>{k}</td><td>{v}</td></tr>
            ))}
          </tbody>
        </table>
      </section>

      <section id="charge">
        <h2>Charge — Mechanism A</h2>
        <p>{obstructionAllNeutral}</p>
        <table>
          <thead>
            <tr>
              <th>qty</th><th>Q1</th><th>value</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>q_φ</td><td>Q1</td><td>{emAssignment.q_phi_Q1}</td></tr>
            <tr><td>Q_EM</td><td>Q1</td><td>{emAssignment.Q_EM_Q1.toFixed(6)}</td></tr>
            <tr><td>E_qball (MeV)</td><td>Q1</td><td>{coulombQ1.E_qball_MeV}</td></tr>
            <tr><td>E_Coulomb (MeV)</td><td>Q1</td><td>{coulombQ1.E_coulomb_integral_MeV}</td></tr>
            <tr><td>ω / f0 / R</td><td>Q1</td><td>{qballQ1.omega} / {qballQ1.f0.toExponential(2)} / {qballQ1.radius.toFixed(1)}</td></tr>
          </tbody>
        </table>
        <ul>
          {mechanisms.map((m) => (
            <li key={m.id}><strong>{m.id}</strong> {m.name} — {m.verdict}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
