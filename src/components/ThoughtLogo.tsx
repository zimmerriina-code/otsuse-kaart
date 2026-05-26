interface Props {
  className?: string;
}

/**
 * Compact thought-bundle logo:
 * a few intertwined lines forming a rounded mental knot.
 */
export function ThoughtLogo({ className }: Props) {
  return (
    <svg viewBox="0 0 56 38" fill="none" className={className} aria-hidden="true">
      <g
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      >
        {/* upper arc */}
        <path
          d="M10 20 C 12 11, 19 7, 27 8 C 35 9, 42 13, 45 20"
          opacity="0.95"
        />

        {/* lower arc */}
        <path
          d="M11 21 C 14 29, 21 32, 28 31 C 36 30, 42 27, 45 20"
          opacity="0.82"
        />

        {/* crossing thread 1 */}
        <path
          d="M8 18 C 15 25, 23 27, 29 22 C 34 18, 39 14, 48 17"
          opacity="0.84"
        />

        {/* crossing thread 2 */}
        <path
          d="M9 24 C 15 17, 21 14, 27 16 C 33 18, 39 25, 47 23"
          opacity="0.74"
        />

        {/* small binding loop */}
        <path
          d="M22 20 C 24 16, 30 16, 32 20 C 33 24, 29 26, 26 24 C 24 22, 23 21, 22 20"
          opacity="0.9"
        />
      </g>
    </svg>
  );
}
