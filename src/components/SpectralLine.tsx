const PATH =
  "M0,40 L60,40 L80,40 C90,40 92,10 100,10 C108,10 110,40 120,40 L220,40 C232,40 236,25 244,25 C252,25 254,40 268,40 L340,40 C352,40 356,4 368,4 C380,4 382,40 396,40 L520,40 C534,40 538,32 548,32 C558,32 560,40 576,40 L700,40";

export function SpectralLine({ animated = false, className = "" }: { animated?: boolean; className?: string }) {
  return (
    <svg
      viewBox="0 0 700 44"
      preserveAspectRatio="none"
      className={`w-full ${className}`}
      aria-hidden="true"
    >
      <path
        d={PATH}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={animated ? "spectral-draw" : ""}
        pathLength={1}
      />
    </svg>
  );
}
