function MysteriousDoors({ className = "" }) {
  return (
    <svg
      viewBox="0 0 300 200"
      className={`doodle mysterious-doors ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >

      {/* =================================
          MOON CARD
      ================================= */}

      <g transform="rotate(-8 80 100)">

        {/* Card background */}

        <rect
          className="mystery-card mystery-card-moon"
          x="25"
          y="25"
          width="110"
          height="150"
          rx="18"
          strokeWidth="2"
        />

        {/* Card decoration */}

        <circle
          className="doodle-warm-fill"
          cx="43"
          cy="43"
          r="3"
        />

        <path
          className="doodle-secondary"
          d="M 112 39 L 116 47 L 124 51"
          strokeWidth="1.3"
          strokeLinecap="round"
        />

        {/* Moon doorway */}

        <path
          className="mystery-door-shape"
          d="
            M 49 149
            L 49 90
            C 49 70 61 58 80 58
            C 99 58 111 70 111 90
            L 111 149 Z
          "
          strokeWidth="1.8"
        />

        {/* Door frame */}

        <path
          className="mystery-card-detail"
          d="M 57 149 L 57 91
             C 57 76 65 66 80 66
             C 95 66 103 76 103 91
             L 103 149"
          strokeWidth="1.2"
        />

        {/* Crescent engraving */}

        <path
          className="doodle-primary"
          d="
            M 84 80
            C 67 80 62 99 70 109
            C 78 120 94 116 100 104
            C 85 112 73 98 84 80 Z
          "
          strokeWidth="1.8"
        />

        {/* Moon door handle */}

        <circle
          className="doodle-warm-fill"
          cx="98"
          cy="125"
          r="3"
        />

        {/* Tiny label */}

        <text
          className="mystery-card-label"
          x="79"
          y="161"
          textAnchor="middle"
        >
          MOON
        </text>

      </g>


      {/* =================================
          SUN CARD
      ================================= */}

      <g transform="rotate(8 220 100)">

        {/* Card background */}

        <rect
          className="mystery-card mystery-card-sun"
          x="165"
          y="25"
          width="110"
          height="150"
          rx="18"
          strokeWidth="2"
        />

        {/* Card decoration */}

        <circle
          className="doodle-secondary-fill"
          cx="255"
          cy="43"
          r="3"
        />

        <path
          className="doodle-warm"
          d="M 177 39 L 181 47 L 189 50"
          strokeWidth="1.3"
          strokeLinecap="round"
        />

        {/* Sun doorway */}

        <path
          className="mystery-door-shape"
          d="
            M 189 149
            L 189 90
            C 189 70 201 58 220 58
            C 239 58 251 70 251 90
            L 251 149 Z
          "
          strokeWidth="1.8"
        />

        {/* Door frame */}

        <path
          className="mystery-card-detail"
          d="M 197 149 L 197 91
             C 197 76 205 66 220 66
             C 235 66 243 76 243 91
             L 243 149"
          strokeWidth="1.2"
        />

        {/* Sun engraving */}

        <circle
          className="doodle-warm"
          cx="220"
          cy="96"
          r="15"
          strokeWidth="1.8"
        />

        {/* Sun rays */}

        <path
          className="doodle-warm"
          d="
            M 220 72 L 220 78
            M 220 114 L 220 120
            M 196 96 L 202 96
            M 238 96 L 244 96
            M 203 79 L 207 83
            M 233 109 L 237 113
            M 237 79 L 233 83
            M 207 109 L 203 113
          "
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        {/* Sun door handle */}

        <circle
          className="doodle-secondary-fill"
          cx="238"
          cy="125"
          r="3"
        />

        {/* Tiny label */}

        <text
          className="mystery-card-label"
          x="220"
          y="161"
          textAnchor="middle"
        >
          SUN
        </text>

      </g>


      {/* Connecting celestial sparkle */}

      <path
        className="doodle-warm"
        d="M 150 12 L 153 20 L 161 23
           L 153 26 L 150 34 L 147 26
           L 139 23 L 147 20 Z"
        strokeWidth="1.4"
      />

    </svg>
  );
}

export default MysteriousDoors;