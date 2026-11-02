function CuriousMarks({ className = "" }) {
  return (
    <svg
      viewBox="0 0 180 150"
      className={`doodle curious-marks ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      aria-hidden="true"
    >

      {/* Hand-drawn question mark */}

      <path
        className="doodle-warm"
        d="
          M 37 17
          C 57 2 77 20 64 36
          Q 51 49 50 65
        "
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      <circle
        className="doodle-warm-fill"
        cx="49"
        cy="78"
        r="3"
      />


      {/* Hand-drawn arrow */}

      <path
        className="doodle-primary"
        d="
          M 90 29
          Q 111 43 126 31
          L 143 17
          M 131 17 L 143 17 L 141 30
        "
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />


      {/* Speech bubble */}

      <path
        className="doodle-secondary"
        d="
          M 79 83
          Q 79 69 94 69
          L 151 69
          Q 165 69 165 83
          L 165 110
          Q 165 123 151 123
          L 119 123
          L 105 138
          L 108 123
          L 94 123
          Q 79 123 79 110 Z
        "
        strokeWidth="1.8"
        strokeLinejoin="round"
      />


      {/* Three little dots */}

      <circle className="doodle-warm-fill" cx="106" cy="96" r="3" />
      <circle className="doodle-warm-fill" cx="122" cy="96" r="3" />
      <circle className="doodle-warm-fill" cx="138" cy="96" r="3" />


      {/* Little handwritten marks */}

      <path
        className="doodle-primary"
        d="M 19 112 Q 26 119 35 112"
        strokeWidth="1.6"
        strokeLinecap="round"
      />

      <circle
        className="doodle-secondary-fill"
        cx="151"
        cy="36"
        r="2.5"
      />

    </svg>
  );
}

export default CuriousMarks;