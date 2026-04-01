interface LogoProps {
  size?: number;
  className?: string;
}

/**
 * Logo.revised.tsx — citrus-slice redesign (preview only, not live)
 *
 * Design changes vs Logo.tsx:
 *  - Segments are filled wedge paths (annular sectors), not spoke-lines from center
 *  - Alternating light (#FED7AA) / medium (#FDBA74) orange flesh fills
 *  - Thick outer rind ring in brand orange (#F97316)
 *  - Divider lines from pip ring to rind edge (not full-length spokes)
 *  - Visible inner rind boundary circle
 *  - Small solid center pip replaces the translucent inner-circle treatment
 */
export default function LogoRevised({ size = 40, className = "" }: LogoProps) {
  const cx = size / 2;
  const cy = size / 2;
  const rOuter = size / 2 - 1;    // outer rind radius
  const rFlesh = rOuter * 0.79;   // inner edge of rind / outer edge of flesh
  const rPip = rOuter * 0.16;     // center pip radius
  const n = 8;
  const rotate = -Math.PI / 2;    // start segment at 12 o'clock

  const pt = (r: number, angle: number): [number, number] => [
    cx + r * Math.cos(angle),
    cy + r * Math.sin(angle),
  ];

  // Build annular sector paths for each segment
  const segments = Array.from({ length: n }, (_, i) => {
    const a1 = rotate + (i * 2 * Math.PI) / n;
    const a2 = rotate + ((i + 1) * 2 * Math.PI) / n;
    const [ox1, oy1] = pt(rFlesh, a1);
    const [ox2, oy2] = pt(rFlesh, a2);
    const [ix1, iy1] = pt(rPip, a1);
    const [ix2, iy2] = pt(rPip, a2);
    const d = [
      `M ${ix1.toFixed(3)} ${iy1.toFixed(3)}`,
      `L ${ox1.toFixed(3)} ${oy1.toFixed(3)}`,
      `A ${rFlesh.toFixed(3)} ${rFlesh.toFixed(3)} 0 0 1 ${ox2.toFixed(3)} ${oy2.toFixed(3)}`,
      `L ${ix2.toFixed(3)} ${iy2.toFixed(3)}`,
      `A ${rPip.toFixed(3)} ${rPip.toFixed(3)} 0 0 0 ${ix1.toFixed(3)} ${iy1.toFixed(3)}`,
      "Z",
    ].join(" ");
    return d;
  });

  // Divider lines from pip edge to flesh outer edge
  const dividers = Array.from({ length: n }, (_, i) => {
    const a = rotate + (i * 2 * Math.PI) / n;
    const [x1, y1] = pt(rPip, a);
    const [x2, y2] = pt(rFlesh, a);
    return { x1, y1, x2, y2 };
  });

  const fleshColors = ["#FED7AA", "#FDBA74"]; // orange-200 / orange-300

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
      {/* Rind */}
      <circle cx={cx} cy={cy} r={rOuter} fill="#F97316" stroke="#C2410C" strokeWidth={size * 0.025} />

      {/* Flesh segments */}
      {segments.map((d, i) => (
        <path key={i} d={d} fill={fleshColors[i % 2]} />
      ))}

      {/* Segment dividers */}
      {dividers.map((div, i) => (
        <line
          key={i}
          x1={div.x1}
          y1={div.y1}
          x2={div.x2}
          y2={div.y2}
          stroke="#EA580C"
          strokeWidth={size * 0.03}
        />
      ))}

      {/* Rind inner boundary */}
      <circle cx={cx} cy={cy} r={rFlesh} fill="none" stroke="#EA580C" strokeWidth={size * 0.025} />

      {/* Center pip */}
      <circle cx={cx} cy={cy} r={rPip} fill="#F97316" />
    </svg>
  );
}
