type Props = {
  label: string;
  value: "YES" | "NO" | "HARD NO" | string;
  kind?: "yes" | "no" | "warn";
};

export function VerdictChip({ label, value, kind }: Props) {
  const k =
    kind ??
    (value === "YES"
      ? "yes"
      : value === "NO" || value === "HARD NO"
        ? "no"
        : "warn");
  return (
    <span className={`chip ${k}`}>
      <span className="dot" aria-hidden="true" />
      <span className="chip-label">{label}</span>
      <strong>{value}</strong>
    </span>
  );
}
