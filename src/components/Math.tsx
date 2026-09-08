import katex from "katex";

type Props = { tex: string; display?: boolean; className?: string };

export function Tex({ tex, display = false, className }: Props) {
  const html = katex.renderToString(tex, {
    throwOnError: false,
    displayMode: display,
  });
  if (display) {
    return (
      <div
        className={className}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }
  return (
    <span
      className={className}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
