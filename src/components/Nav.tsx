const links = [
  { href: "#intro", label: "Intro" },
  { href: "#stage1", label: "Stage 1 · 1+1" },
  { href: "#stage2", label: "Stage 2 · Q-ball" },
  { href: "#charge", label: "Charge" },
  { href: "#disclaimer", label: "Disclaimer" },
];

export function Nav() {
  return (
    <nav className="nav" aria-label="Demo sections">
      <a className="brand" href="#intro">
        <span className="brand-mark" aria-hidden="true" />
        Fermions
      </a>
      <div className="nav-links">
        {links.map((l) => (
          <a key={l.href} href={l.href}>
            {l.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
