export default function Smiley() {
  return (
    <svg viewBox="0 0 200 200" className="smiley-illustration">
      <circle cx="100" cy="100" r="90" fill="none" stroke="#f2a93b" strokeWidth="3" />
      <circle cx="75" cy="85" r="8" fill="#1e2a38" />
      <circle cx="125" cy="85" r="8" fill="#1e2a38" />
      <path d="M 70 120 Q 100 135 130 120" fill="none" stroke="#1e2a38" strokeWidth="3" strokeLinecap="round" />
      <text x="100" y="170" textAnchor="middle" fontSize="18" fill="#5f7f66" fontFamily="Caveat">
        joyous
      </text>
    </svg>
  );
}
