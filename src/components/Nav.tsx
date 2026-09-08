const links = [
  { href: "#intro", label: "Intro" },
  { href: "#stage1", label: "1+1" },
  { href: "#stage2", label: "3+1" },
  { href: "#charge", label: "Charge" },
  { href: "#synthesis", label: "Synthesis" },
  { href: "#data", label: "Data" },
  { href: "#caveats", label: "Caveats" },
  { href: "#figures", label: "Figures" },
];

export function Nav() {
  return (
    <nav className="nav" aria-label="Report sections">
      <span className="brand">Fermions</span>
      {links.map((l) => (
        <a key={l.href} href={l.href}>
          {l.label}
        </a>
      ))}
    </nav>
  );
}
