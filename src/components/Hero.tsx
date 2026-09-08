import { Tex as Math } from "./Math";
import { VerdictChip } from "./VerdictChip";
import {
  kinkConclusions,
  qballPrimary,
  qballAnswers,
  qballMeta,
  mevScaling,
  chargeMeta,
} from "../data";

export function Hero() {
  return (
    <header className="hero" id="intro">
      <p className="eyebrow">Scientific feasibility demo · 8 Sep 2026</p>
      <h1>Fermions on solitons</h1>
      <p className="fa" lang="fa" dir="rtl">
        فرمیون‌ها روی سالیتون — وجود و شواهد پایداری
      </p>
      <p className="lede">
        Interactive report of staged existence tests: Jackiw–Rebbi zero modes on
        a kink, Dirac bound states on soft Q-balls, and electromagnetic charge
        via Mechanism A. Primary neutral Q-ball{" "}
        <Math
          tex={`E=${qballPrimary.E.toFixed(2)},\\ Q=${qballPrimary.Q.toFixed(2)}`}
        />
        ; MeV scaling possible: {String(mevScaling.possible)}.
      </p>

      <div className="chips" role="list" aria-label="Verdict summary">
        <VerdictChip label="Existence" value="YES" />
        <VerdictChip label="Stability evidence" value="YES" />
        <VerdictChip
          label="1+1 zero mode"
          value={kinkConclusions.zero_mode_always}
        />
        <VerdictChip
          label="Q-ball exists"
          value={qballAnswers["1_qball_exists"]}
        />
        <VerdictChip
          label="All-neutral EM"
          value={chargeMeta.allNeutralObstruction}
        />
        <VerdictChip label="Mechanism A" value={chargeMeta.answer} />
      </div>

      <div className="hero-cards">
        <article className="mini-card">
          <h3>Stage 1</h3>
          <p>1+1 kink + Yukawa · JR zero mode always present</p>
        </article>
        <article className="mini-card">
          <h3>Stage 2</h3>
          <p>
            Soft Q-ball{" "}
            <Math
              tex={`(m,A,B)=(${qballMeta.params.m},${qballMeta.params.A},${qballMeta.params.B})`}
            />
          </p>
        </article>
        <article className="mini-card">
          <h3>Charge</h3>
          <p>Mechanism A · charge on Φ, neutral bound fermion</p>
        </article>
      </div>
    </header>
  );
}
