function ShootingStar({ className = "" }) {
  return (
    <svg
      viewBox="0 0 220 150"
      className={`doodle shooting-star ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      aria-hidden="true"
    >

      {/* Main flowing trail */}

      <path
        className="shooting-trail"
        d="
          M 15 126
          Q 48 106 76 94
          Q 111 78 139 60
        "
        strokeWidth="8"
        strokeLinecap="round"
      />

      {/* Secondary trail */}

      <path
        className="shooting-trail-secondary"
        d="
          M 34 137
          Q 78 115 106 94
          Q 127 80 145 65
        "
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Thin luminous trail */}

      <path
        className="shooting-trail-highlight"
        d="
          M 12 112
          Q 53 93 83 81
          Q 115 65 143 53
        "
        strokeWidth="1.7"
        strokeLinecap="round"
      />


      {/* Shooting star body */}

      <path
        className="shooting-star-body"
        d="
          M 161 10
          L 169 37
          L 197 43
          L 173 57
          L 177 86
          L 155 68
          L 130 82
          L 140 55
          L 119 35
          L 148 36 Z
        "
        strokeWidth="2"
        strokeLinejoin="round"
      />

      {/* Inner star highlight */}

      <path
        className="shooting-star-detail"
        d="M 150 39 Q 160 47 163 60"
        strokeWidth="2"
        strokeLinecap="round"
      />


      {/* Small companion stars */}

      <path
        className="shooting-star-outline"
        d="
          M 53 34 L 57 44 L 67 48
          L 57 52 L 53 62
          L 49 52 L 39 48 L 49 44 Z
        "
        strokeWidth="1.7"
      />

      <circle
        className="shooting-star-dot"
        cx="195"
        cy="115"
        r="4"
      />

      <path
        className="shooting-star-outline"
        d="
          M 89 15 L 92 22 L 99 25
          L 92 28 L 89 35
          L 86 28 L 79 25 L 86 22 Z
        "
        strokeWidth="1.4"
      />

    </svg>
  );
}

export default ShootingStar;