function FloatingKey({ className = "" }) {
  return (
    <svg
      viewBox="0 0 180 140"
      className={`doodle floating-key ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >

      {/* Key handle */}

      <path
        className="doodle-warm"
        d="
          M 57 68
          C 57 43 38 31 23 45
          C 7 60 19 89 43 87
          C 58 86 67 75 65 62
        "
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Star inside the handle */}

      <path
        className="doodle-secondary"
        d="
          M 38 51
          L 43 61
          L 53 65
          L 43 69
          L 38 79
          L 33 69
          L 23 65
          L 33 61 Z
        "
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      {/* Key shaft */}

      <path
        className="doodle-warm"
        d="M 61 66 L 150 66"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* Key teeth */}

      <path
        className="doodle-warm"
        d="
          M 117 66 L 117 84 L 130 84 L 130 66
          M 144 66 L 144 78 L 156 78
        "
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Celestial decorations */}

      <circle
        className="doodle-secondary-fill"
        cx="153"
        cy="40"
        r="3"
      />

      <path
        className="doodle-primary"
        d="
          M 125 24
          L 128 31
          L 135 34
          L 128 37
          L 125 44
          L 122 37
          L 115 34
          L 122 31 Z
        "
        strokeWidth="1.4"
      />

    </svg>
  );
}

export default FloatingKey;