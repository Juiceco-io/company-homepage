interface LogoProps {
  size?: number;
  className?: string;
}

export default function Logo({ size = 40, className = "" }: LogoProps) {
  const cx = size / 2;
  const cy = size / 2;
  const r = size / 2 - 2;
  const innerR = r * 0.35;

  // Generate 8 segment lines radiating from center to edge
  const segments = Array.from({ length: 8 }, (_, i) => {
    const angle = (i * 360) / 8;
    const rad = (angle * Math.PI) / 180;
    const x2 = cx + r * Math.cos(rad);
    const y2 = cy + r * Math.sin(rad);
    return { x1: cx, y1: cy, x2, y2 };
  });

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Juiceco logo"
    >
      {/* Outer circle fill */}
      <circle cx={cx} cy={cy} r={r} fill="#F97316" stroke="#EA580C" strokeWidth="2" />

      {/* Segment lines */}
      {segments.map((seg, i) => (
        <line
          key={i}
          x1={seg.x1}
          y1={seg.y1}
          x2={seg.x2}
          y2={seg.y2}
          stroke="#FB923C"
          strokeWidth="1.2"
          opacity="0.7"
        />
      ))}

      {/* Inner circle */}
      <circle cx={cx} cy={cy} r={innerR} fill="#FB923C" />

      {/* Center dot */}
      <circle cx={cx} cy={cy} r={innerR * 0.3} fill="#EA580C" />
    </svg>
  );
}
