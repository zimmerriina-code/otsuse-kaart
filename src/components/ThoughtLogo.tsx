interface Props {
  className?: string;
}

/**
 * Logo: a compact thought-bundle / sphere made of a few intertwined lines.
 * More rounded and clustered, less flat and less like a single loop.
 */
export function ThoughtLogo({ className }: Props) {
  return (
    <svg viewBox="0 0 56 40" fill="none" className={className} aria-hidden="true">
      <g
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      >
        {/* outer upper arc */}
        <path
          d="M10 21 C 12 11, 21 6, 29 7 C 38 8, 45 13, 46 22"
          opacity="0.95"
        />

        {/* outer lower arc */}
        <path
          d="M11 22 C 13 30, 21 34, 29 33 C 38 32, 44 29, 45 21"
          opacity="0.85"
        />

        {/* inner crossing thread */}
        <path
          d="M8 18 C 16 26, 24 28, 31 24 C 37 21, 41 15, 48 18"
          opacity="0.8"
        />

        {/* second crossing thread */}
        <path
          d="M9 25 C 15 17, 22 14, 28 17 C 34 20, 39 27, 47 24"
          opacity="0.72"
        />

        {/* central binding loop */}
        <path
          d="M22 21 C 24 16, 31 16, 33 21 C 34 25, 30 27, 27 24 C 25 22, 24 22, 22 21"
          opacity="0.9"
        />
      </g>
    </svg>
  );
}
