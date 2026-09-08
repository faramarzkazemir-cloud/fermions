export function Disclaimer() {
  return (
    <section id="disclaimer" className="section">
      <div className="section-head">
        <span className="stage-tag">Scope</span>
        <h2>Disclaimer</h2>
      </div>
      <article className="card disclaimer-card">
        <p>
          This demo reports{" "}
          <strong>mathematical and numerical feasibility only</strong>. It does{" "}
          <strong>not</strong> claim that the laboratory electron is composite,
          does not constitute a full proof of quantum dynamical stability, and
          does not address magnetic-moment or precision-QED constraints.
        </p>
        <p className="muted">
          All displayed numbers are imported from <code>src/data</code>{" "}
          (sourced from <code>calculations/</code>). Full narrative:{" "}
          <code>docs/REPORT.md</code>.
        </p>
      </article>
    </section>
  );
}
