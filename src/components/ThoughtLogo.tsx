interface Props {
  className?: string;
}

// One continuous flowing thought-line that loops loosely and clarifies.
// Abstract "mõttelõng" — not a compass, not a flower, not enclosed in a shape.
export function ThoughtLogo({ className }: Props) {
  return (
    <svg viewBox="0 0 48 32" fill="none" className={className} aria-hidden="true">
      <path
        d="M2 22
           C 6 12, 12 8, 17 14
           C 21 19, 16 24, 13 21
           C 10 18, 14 13, 19 14
           C 25 15, 27 23, 33 22
           C 39 21, 42 14, 46 12"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
