interface Props {
  className?: string;
  reduced?: boolean;
}

export function FlowingLines({ className, reduced = false }: Props) {
  return (
    <svg
      className={className}
      viewBox="0 0 1600 900"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {/* back soft line */}
      <g className={reduced ? "" : "animate-flow-a"}>
        <path
          d="M -120 610 C 150 420, 360 760, 650 590 S 1110 410, 1720 650"
          stroke="#A59AF4"
          strokeWidth="2.2"
          strokeLinecap="round"
          opacity="0.28"
          fill="none"
        />
      </g>

      {/* strong main line */}
      <g className={reduced ? "" : "animate-flow-b"}>
        <path
          d="M -120 520 C 130 360, 320 690, 600 510 S 1040 330, 1320 590 S 1530 720, 1720 560"
          stroke="#4F46E5"
          strokeWidth="5.2"
          strokeLinecap="round"
          opacity="0.92"
          fill="none"
        />
      </g>

      {/* middle overlapping line */}
      <g className={reduced ? "" : "animate-flow-c"}>
        <path
          d="M -120 470 C 170 310, 390 590, 690 455 S 1140 320, 1720 590"
          stroke="#8B80F1"
          strokeWidth="2.6"
          strokeLinecap="round"
          opacity="0.42"
          fill="none"
        />
      </g>

      {/* lower overlapping line */}
      <g className={reduced ? "" : "animate-flow-d"}>
        <path
          d="M -120 700 C 130 560, 340 820, 650 715 S 1120 530, 1720 720"
          stroke="#8E82F0"
          strokeWidth="2.4"
          strokeLinecap="round"
          opacity="0.3"
          fill="none"
        />
      </g>
    </svg>
  );
}
