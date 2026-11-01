function CuriousUFO({ className = "" }) {
  return (
    <svg
      viewBox="0 0 220 165"
      className={`doodle curious-ufo ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      aria-hidden="true"
    >

      {/* Antenna */}

      <path
        className="doodle-primary"
        d="M 110 23 L 110 9"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <circle
        className="doodle-warm-fill"
        cx="110"
        cy="7"
        r="4"
      />


      {/* UFO glass dome */}

      <path
        className="ufo-glass"
        d="
          M 76 70
          C 79 42 91 30 110 30
          C 131 30 143 46 145 70
          Z
        "
        strokeWidth="2"
      />

      {/* Dome reflection */}

      <path
        className="doodle-primary"
        d="M 91 48 Q 98 38 106 39"
        strokeWidth="2"
        strokeLinecap="round"
      />


      {/* Main flying saucer */}

      <path
        className="doodle-primary"
        d="
          M 27 83
          Q 42 68 110 68
          Q 176 68 193 83
          Q 176 112 110 114
          Q 45 113 27 83 Z
        "
        strokeWidth="2"
        strokeLinejoin="round"
      />

      {/* Lower saucer rim */}

      <path
        className="doodle-secondary"
        d="M 48 101 Q 110 129 172 101"
        strokeWidth="2"
        strokeLinecap="round"
      />


      {/* Little windows */}

      <circle
        className="doodle-warm-fill"
        cx="72"
        cy="85"
        r="5"
      />

      <circle
        className="doodle-warm-fill"
        cx="91"
        cy="90"
        r="5"
      />

      <circle
        className="doodle-warm-fill"
        cx="111"
        cy="91"
        r="5"
      />

      <circle
        className="doodle-warm-fill"
        cx="131"
        cy="90"
        r="5"
      />

      <circle
        className="doodle-warm-fill"
        cx="150"
        cy="85"
        r="5"
      />


      {/* Tractor beam */}

      <path
        className="ufo-beam"
        d="
          M 67 113
          L 47 152
          Q 110 164 173 152
          L 153 113
        "
        strokeWidth="1.5"
        strokeDasharray="4 5"
        strokeLinejoin="round"
      />


      {/* Tiny stars */}

      <path
        className="doodle-warm"
        d="M 22 38 L 25 46 L 33 49 L 25 52 L 22 60 L 19 52 L 11 49 L 19 46 Z"
        strokeWidth="1.5"
      />

      <path
        className="doodle-secondary"
        d="M 190 29 L 192 35 L 198 37 L 192 39 L 190 45 L 188 39 L 182 37 L 188 35 Z"
        strokeWidth="1.5"
      />

      <circle
        className="doodle-secondary-fill"
        cx="200"
        cy="69"
        r="3"
      />

    </svg>
  );
}

export default CuriousUFO;