function CuriousEye({ className = "" }) {
  return (
    <svg
      viewBox="0 0 210 160"
      className={`doodle curious-eye ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      aria-hidden="true"
    >

      {/* Outer eye silhouette */}

      <path
        className="eye-shell"
        d="
          M 15 80
          Q 51 27 105 27
          Q 160 27 195 80
          Q 158 134 105 134
          Q 51 134 15 80 Z
        "
        strokeWidth="2.4"
        strokeLinejoin="round"
      />

      {/* Inner decorative boundary */}

      <path
        className="eye-boundary"
        d="
          M 31 80
          Q 62 42 105 42
          Q 149 42 179 80
          Q 149 118 105 118
          Q 62 118 31 80 Z
        "
        strokeWidth="1.4"
      />


      {/* Crimson iris */}

      <circle
        className="eye-iris"
        cx="105"
        cy="80"
        r="34"
        strokeWidth="2"
      />

      <circle
        className="eye-iris-inner"
        cx="105"
        cy="80"
        r="25"
        strokeWidth="1.5"
      />


      {/* Swirling ornamental pattern */}

      <path
        className="eye-swirl"
        d="
          M 105 49
          C 134 50 142 85 120 101
          C 99 116 72 94 85 74
          C 95 59 118 64 120 79
          C 122 91 106 97 98 87
          C 92 80 99 71 107 75
        "
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Second spiral */}

      <path
        className="eye-swirl-secondary"
        d="
          M 105 53
          C 122 56 132 72 126 86
        "
        strokeWidth="1.7"
        strokeLinecap="round"
      />


      {/* Central pupil */}

      <circle
        className="eye-pupil"
        cx="105"
        cy="80"
        r="8"
      />

      <circle
        className="eye-pupil-highlight"
        cx="102"
        cy="77"
        r="2"
      />


      {/* Outer orbital markings */}

      <path
        className="eye-decoration"
        d="
          M 27 54 Q 17 44 19 34
          M 183 54 Q 193 44 191 34
          M 27 106 Q 17 116 19 126
          M 183 106 Q 193 116 191 126
        "
        strokeWidth="1.6"
        strokeLinecap="round"
      />

      {/* Tiny crimson stars */}

      <circle className="eye-star" cx="51" cy="80" r="2.5" />
      <circle className="eye-star" cx="159" cy="80" r="2.5" />

      <path
        className="eye-swirl"
        d="
          M 105 8 L 108 17 L 117 20
          L 108 23 L 105 32
          L 102 23 L 93 20 L 102 17 Z
        "
        strokeWidth="1.5"
      />

    </svg>
  );
}

export default CuriousEye;