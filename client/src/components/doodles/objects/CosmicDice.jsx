function CosmicDice({ className = "" }) {
  return (
    <svg
      viewBox="0 0 240 180"
      className={`doodle cosmic-dice ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >

      {/* =================================
          FIRST DIE
      ================================= */}

      <g transform="rotate(-5 65 85)">

        {/* Top face */}

        <path
          className="die-top"
          d="M 18 52 L 66 34 L 114 51 L 65 72 Z"
          strokeWidth="2"
          strokeLinejoin="round"
        />

        {/* Left face */}

        <path
          className="die-left"
          d="M 18 52 L 65 72 L 65 136 L 18 115 Z"
          strokeWidth="2"
          strokeLinejoin="round"
        />

        {/* Right face */}

        <path
          className="die-right"
          d="M 65 72 L 114 51 L 114 115 L 65 136 Z"
          strokeWidth="2"
          strokeLinejoin="round"
        />

        {/* Top celestial symbol */}

        <path
          className="doodle-warm"
          d="
            M 66 43 L 69 49 L 75 52
            L 69 55 L 66 61
            L 63 55 L 57 52 L 63 49 Z
          "
          strokeWidth="1.5"
        />

        {/* Left face pips */}

        <circle className="die-pip" cx="39" cy="78" r="4" />
        <circle className="die-pip" cx="49" cy="102" r="4" />

        {/* Right face pips */}

        <circle className="die-pip" cx="83" cy="92" r="4" />
        <circle className="die-pip" cx="99" cy="108" r="4" />

      </g>


      {/* =================================
          SECOND DIE
      ================================= */}

      <g transform="rotate(6 174 82)">

        {/* Top face */}

        <path
          className="die-top"
          d="M 128 48 L 169 30 L 218 45 L 174 67 Z"
          strokeWidth="2"
          strokeLinejoin="round"
        />

        {/* Left face */}

        <path
          className="die-left"
          d="M 128 48 L 174 67 L 174 127 L 128 108 Z"
          strokeWidth="2"
          strokeLinejoin="round"
        />

        {/* Right face */}

        <path
          className="die-right"
          d="M 174 67 L 218 45 L 218 105 L 174 127 Z"
          strokeWidth="2"
          strokeLinejoin="round"
        />

        {/* Crescent on the top */}

        <path
          className="doodle-warm"
          d="
            M 171 42
            C 159 43 159 58 170 61
            C 178 64 184 56 184 50
            C 176 57 168 53 171 42 Z
          "
          strokeWidth="1.5"
        />

        {/* Left face pips */}

        <circle className="die-pip" cx="145" cy="75" r="4" />
        <circle className="die-pip" cx="155" cy="99" r="4" />

        {/* Right face markings */}

        <path
          className="doodle-secondary"
          d="M 189 82 L 194 90 L 203 93 L 194 96 L 189 104"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

      </g>


      {/* Floating celestial sparkle */}

      <path
        className="doodle-warm"
        d="M 22 18 L 25 26 L 33 29
           L 25 32 L 22 40 L 19 32
           L 11 29 L 19 26 Z"
        strokeWidth="1.5"
      />

      <circle
        className="doodle-secondary-fill"
        cx="224"
        cy="146"
        r="3"
      />

    </svg>
  );
}

export default CosmicDice;