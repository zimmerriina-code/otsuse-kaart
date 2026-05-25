interface Props {
  className?: string;
  reduced?: boolean;
}

export function FlowingLines({ className }: Props) {
  return (
    <svg
      className={className}
      viewBox="0 0 1600 800"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M 0 430 C 180 330, 280 540, 450 430 S 760 300, 930 430 S 1250 560, 1600 430"
        stroke="#4F46E5"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
        opacity="1"
      />

      <path
        d="M 0 500 C 260 360, 420 620, 700 500 S 1040 340, 1600 500"
        stroke="#7C6EE6"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        opacity="0.8"
      />

      return (
  <path
    d={d}
    stroke="#5B50D6"
    strokeWidth={l.w * 1.8}
    strokeLinecap="round"
    fill="none"
    opacity={0.65}
    className="animate-breathe"
    style={{ animationDuration: `${8 + (l.phase % 3) * 2}s` }}
  />
  );
}
