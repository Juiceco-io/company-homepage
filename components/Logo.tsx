interface LogoProps {
  size?: number;
  className?: string;
}

export default function Logo({ size = 40, className = "" }: LogoProps) {
  const cx = size / 2;
  const cy = size / 2;
  const rOuter = size / 2 - 1;
  const rFlesh = rOuter * 0.79;
  const rPip = rOuter * 0.16;
  const n = 8;
  const rotate = -Math.PI / 2;

  const pt = (r: number, angle: number): [number, number] => [
    cx + r * Math.cos(angle),
    cy + r * Math.sin(angle),
  ];

  const segments = Array.from({ length: n }, (_, i) => {
    const a1 = rotate + (i * 2 * Math.PI) / n;
    const a2 = rotate + ((i + 1) * 2 * Math.PI) / n;
    const [ox1, oy1] = pt(rFlesh, a1);
    const [ox2, oy2] = pt(rFlesh, a2);
    const [ix1, iy1] = pt(rPip, a1);
    const [ix2, iy2] = pt(rPip, a2);

    return [
      `M ${ix1.toFixed(3)} ${iy1.toFixed(3)}`,
      `L ${ox1.toFixed(3)} ${oy1.toFixed(3)}`,
      `A ${rFlesh.toFixed(3)} ${rFlesh.toFixed(3)} 0 0 1 ${ox2.toFixed(3)} ${oy2.toFixed(3)}`,
      `L ${ix2.toFixed(3)} ${iy2.toFixed(3)}`,
      `A ${rPip.toFixed(3)} ${rPip.toFixed(3)} 0 0 0 ${ix1.toFixed(3)} ${iy1.toFixed(3)}`,
      "Z",
    ].join(" ");
  });

  const dividers = Array.from({ length: n }, (_, i) => {
    const a = rotate + (i * 2 * Math.PI) / n;
    const [x1, y1] = pt(rPip, a);
    const [x2, y2] = pt(rFlesh, a);
    return { x1, y1, x2, y2 };
  });

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Juice Technology Solutions logo"
    >
      <circle cx={cx} cy={cy} r={rOuter} fill="#FF7A00" />

      {segments.map((d, i) => (
        <path key={i} d={d} fill="#FFFFFF" />
      ))}

      {dividers.map((div, i) => (
        <line
          key={i}
          x1={div.x1}
          y1={div.y1}
          x2={div.x2}
          y2={div.y2}
          stroke="#FFFFFF"
          strokeWidth={size * 0.05}
          strokeLinecap="round"
        />
      ))}

      <circle cx={cx} cy={cy} r={rFlesh} fill="none" stroke="#FFFFFF" strokeWidth={size * 0.045} />
      <circle cx={cx} cy={cy} r={rPip} fill="#FFFFFF" />
    </svg>
  );
}
