function PaperPlane({ className = "" }) {
  return (
    <svg
      viewBox="0 0 210 155"
      className={`doodle paper-plane ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >

      {/* Dotted flight trail */}

      <path
        className="doodle-secondary"
        d="
          M 13 121
          C 43 144 60 107 78 111
          C 93 115 102 132 119 117
        "
        strokeWidth="1.6"
        strokeDasharray="3 5"
        strokeLinecap="round"
      />

      {/* Plane body */}

      <path
        className="plane-body"
        d="
          M 35 43
          L 191 14
          L 116 127
          L 99 82 Z
        "
        strokeWidth="2.2"
        strokeLinejoin="round"
      />

      {/* Main fold */}

      <path
        className="doodle-secondary"
        d="M 35 43 L 99 82 L 191 14"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />

      {/* Lower wing */}

      <path
        className="doodle-warm"
        d="M 99 82 L 116 127 L 123 62"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />

      {/* Tiny star */}

      <circle
        className="doodle-secondary-fill"
        cx="35"
        cy="21"
        r="3"
      />

      <path
        className="doodle-warm"
        d="
          M 150 128 L 153 135 L 160 138
          L 153 141 L 150 148
          L 147 141 L 140 138 L 147 135 Z
        "
        strokeWidth="1.5"
      />

    </svg>
  );
}

export default PaperPlane;