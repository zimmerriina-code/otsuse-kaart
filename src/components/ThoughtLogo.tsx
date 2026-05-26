interface Props {
  className?: string;
}

/**
 * Logo: multiple intertwined thought-threads coming together.
 * Three flowing lines that overlap and weave — a bundle, not a single loop.
 */
export function ThoughtLogo({ className }: Props) {
  return (
    <svg viewBox="0 0 56 32" fill="none" className={className} aria-hidden="true">
      <g
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      >
        {/* thread 1 — top, broad arc */}
        <path d="M2 20 C 8 8, 18 6, 24 14 C 28 20, 36 22, 44 16 C 49 12, 52 10, 54 12" opacity="0.95" />
        {/* thread 2 — middle, crosses thread 1 */}
        <path d="M3 14 C 10 22, 20 24, 26 18 C 32 12, 40 10, 46 18 C 50 23, 52 22, 54 20" opacity="0.85" />
        {/* thread 3 — short binding loop in the middle, ties the bundle */}
        <path d="M18 18 C 22 12, 30 12, 32 18 C 33 22, 28 22, 26 18" opacity="0.75" />
      </g>
    </svg>
  );
}
