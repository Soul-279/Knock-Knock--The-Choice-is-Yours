function FloatingClock({ className = "" }) {
  return (
    <svg
      viewBox="0 0 180 230"
      className={`doodle floating-clock ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >

      {/* Decorative top finial */}

      <circle
        className="doodle-warm-fill"
        cx="90"
        cy="10"
        r="4"
      />

      <path
        className="doodle-warm"
        d="M90 14 L90 24"
        strokeWidth="2"
      />

      <path
        className="clock-case-trim"
        d="M68 37 Q69 20 90 20 Q111 20 112 37
           L105 45 Q90 39 75 45 Z"
        strokeWidth="2"
      />


      {/* Main clock cabinet */}

      <path
        className="pendulum-clock-case"
        d="
          M 47 211
          L 47 58
          C 47 27 66 24 90 24
          C 114 24 133 27 133 58
          L 133 211
          Q 133 220 124 220
          L 56 220
          Q 47 220 47 211 Z
        "
        strokeWidth="2.4"
        strokeLinejoin="round"
      />

      {/* Inner decorative frame */}

      <path
        className="clock-case-trim"
        d="
          M 56 210
          L 56 61
          Q 56 36 90 36
          Q 124 36 124 61
          L 124 210
        "
        strokeWidth="1.5"
      />


      {/* Clock face */}

      <circle
        className="pendulum-clock-face"
        cx="90"
        cy="76"
        r="29"
        strokeWidth="2"
      />

      <circle
        className="pendulum-clock-rim"
        cx="90"
        cy="76"
        r="24"
        strokeWidth="1"
      />

      {/* Clock markings */}

      <path
        className="doodle-secondary"
        d="
          M 90 55 L 90 61
          M 111 76 L 105 76
          M 90 97 L 90 91
          M 69 76 L 75 76
          M 75 61 L 79 65
          M 101 87 L 105 91
          M 105 61 L 101 65
          M 79 87 L 75 91
        "
        strokeWidth="1.7"
        strokeLinecap="round"
      />

      {/* Clock hands */}

      <path
        className="pendulum-hand"
        d="M 90 76 L 90 59"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      <path
        className="pendulum-hand-accent"
        d="M 90 76 L 104 85"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <circle
        className="doodle-warm-fill"
        cx="90"
        cy="76"
        r="3"
      />


      {/* Pendulum glass chamber */}

      <path
        className="pendulum-clock-glass"
        d="
          M 64 110
          Q 90 102 116 110
          L 116 200
          Q 90 207 64 200 Z
        "
        strokeWidth="1.5"
      />

      {/* Glass reflection */}

      <path
        className="doodle-secondary"
        d="M 72 119 L 72 155"
        strokeWidth="1.4"
        strokeLinecap="round"
      />


      {/* Animated pendulum */}

      <g className="clock-pendulum">

        <path
          className="pendulum-hand-accent"
          d="M 90 112 L 90 183"
          strokeWidth="2"
          strokeLinecap="round"
        />

        <circle
          className="pendulum-bob"
          cx="90"
          cy="184"
          r="11"
          strokeWidth="2"
        />

        <path
          className="doodle-primary"
          d="M 85 181 Q 90 176 95 181"
          strokeWidth="1.2"
          strokeLinecap="round"
        />

      </g>


      {/* Decorative cabinet feet */}

      <path
        className="doodle-warm"
        d="
          M 58 220 L 55 226 L 71 226
          M 122 220 L 125 226 L 109 226
        "
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Small decorative stars */}

      <path
        className="doodle-secondary"
        d="M 22 56 L 25 63 L 32 66 L 25 69
           L 22 76 L 19 69 L 12 66 L 19 63 Z"
        strokeWidth="1.4"
      />

      <circle
        className="doodle-warm-fill"
        cx="151"
        cy="51"
        r="3"
      />

    </svg>
  );
}

export default FloatingClock;