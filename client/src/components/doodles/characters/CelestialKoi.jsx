function CelestialKoi({ className = "" }) {
  return (
    <svg
      viewBox="0 0 280 190"
      className={`doodle celestial-koi ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      aria-hidden="true"
    >

      {/* =================================
          FLOWING FORKED TAIL
      ================================= */}

      <path
        className="koi-fin"
        d="
          M 70 85
          C 52 67 32 52 17 54
          C 20 74 37 88 62 96
          C 41 101 25 116 18 133
          C 40 129 59 114 75 102
          Q 85 95 70 85 Z
        "
        strokeWidth="2"
        strokeLinejoin="round"
      />

      {/* Tail flowing lines */}

      <path
        className="koi-fin-detail"
        d="M 72 91 Q 45 69 22 57"
        strokeWidth="1.4"
        strokeLinecap="round"
      />

      <path
        className="koi-fin-detail"
        d="M 74 98 Q 43 106 22 129"
        strokeWidth="1.4"
        strokeLinecap="round"
      />

      <path
        className="koi-fin-detail"
        d="M 70 95 Q 45 91 29 83"
        strokeWidth="1.2"
        strokeLinecap="round"
      />


      {/* =================================
          DORSAL FIN
      ================================= */}

      <path
        className="koi-fin"
        d="
          M 94 65
          C 100 54 111 43 123 42
          C 120 50 124 57 136 63
          C 144 55 153 52 161 57
          C 156 66 146 70 138 73
        "
        strokeWidth="1.8"
        strokeLinejoin="round"
      />

      {/* Dorsal fin rays */}

      <path
        className="koi-fin-detail"
        d="M 111 61 Q 116 51 122 46"
        strokeWidth="1.2"
      />

      <path
        className="koi-fin-detail"
        d="M 130 66 Q 139 59 150 57"
        strokeWidth="1.2"
      />


      {/* =================================
          PECTORAL FIN
      ================================= */}

      <path
        className="koi-fin"
        d="
          M 145 104
          C 132 112 123 126 126 143
          C 140 138 153 124 158 108
          Q 155 104 145 104 Z
        "
        strokeWidth="1.8"
        strokeLinejoin="round"
      />

      <path
        className="koi-fin-detail"
        d="M 145 107 Q 138 124 131 137"
        strokeWidth="1.2"
      />

      <path
        className="koi-fin-detail"
        d="M 150 109 Q 146 125 141 133"
        strokeWidth="1.2"
      />


      {/* =================================
          PELVIC FIN
      ================================= */}

      <path
        className="koi-fin"
        d="
          M 109 116
          C 102 126 99 137 106 147
          C 116 139 122 127 119 116
        "
        strokeWidth="1.7"
        strokeLinejoin="round"
      />


      {/* =================================
          MAIN BODY
      ================================= */}

      <path
        className="koi-body"
        d="
          M 65 94
          C 78 73 107 62 143 62
          C 178 61 204 75 224 89
          Q 234 94 224 101
          C 203 115 177 125 143 123
          C 109 123 80 113 65 94 Z
        "
        strokeWidth="2.2"
        strokeLinejoin="round"
      />


      {/* =================================
          ORNAMENTAL COLOUR PATCHES
      ================================= */}

      {/* Upper head marking */}

      <path
        className="koi-marking"
        d="
          M 181 70
          C 190 67 201 72 207 81
          Q 213 89 202 93
          C 191 96 183 88 181 81
          Q 178 76 181 70 Z
        "
      />

      {/* Secondary marking */}

      <path
        className="koi-marking"
        d="
          M 116 66
          Q 128 59 139 64
          Q 145 68 136 77
          Q 124 82 117 75
          Q 111 71 116 66 Z
        "
      />


      {/* =================================
          BODY SCALES
      ================================= */}

      <path
        className="koi-scale"
        d="M 88 88 Q 93 82 99 88"
        strokeWidth="1.2"
      />

      <path
        className="koi-scale"
        d="M 105 96 Q 111 90 117 96"
        strokeWidth="1.2"
      />

      <path
        className="koi-scale"
        d="M 122 87 Q 128 81 134 87"
        strokeWidth="1.2"
      />

      <path
        className="koi-scale"
        d="M 142 96 Q 148 90 154 96"
        strokeWidth="1.2"
      />


      {/* =================================
          GILLS
      ================================= */}

      <path
        className="koi-marking-stroke"
        d="M 185 79 Q 178 94 186 107"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      <path
        className="koi-marking-stroke"
        d="M 179 86 Q 173 94 178 101"
        strokeWidth="1.2"
        strokeLinecap="round"
      />


      {/* =================================
          EYES AND FACE
      ================================= */}

      {/* Eye outline */}

      <circle
        className="koi-eye-outline"
        cx="211"
        cy="87"
        r="5"
      />

      {/* Pupil */}

      <circle
        className="koi-pupil"
        cx="212"
        cy="87"
        r="2.3"
      />

      {/* Tiny eye highlight */}

      <circle
        fill="#FFFFFF"
        cx="213"
        cy="86"
        r="0.9"
      />


      {/* Mouth */}

      <path
        className="koi-marking-stroke"
        d="M 223 96 Q 230 100 236 95"
        strokeWidth="1.5"
        strokeLinecap="round"
      />


      {/* Whiskers */}

      <path
        className="koi-marking-stroke"
        d="M 224 99 Q 235 107 239 114"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      <path
        className="koi-marking-stroke"
        d="M 220 100 Q 224 110 231 116"
        strokeWidth="1.2"
        strokeLinecap="round"
      />


      {/* =================================
          FLOWING FIN DETAILS
      ================================= */}

      <path
        className="koi-fin-detail"
        d="M 128 119 Q 145 128 153 140"
        strokeWidth="1.2"
        strokeLinecap="round"
      />


      {/* =================================
          CELESTIAL DETAILS
      ================================= */}

      <path
        className="doodle-warm"
        d="
          M 53 34
          L 56 41
          L 63 44
          L 56 47
          L 53 54
          L 50 47
          L 43 44
          L 50 41 Z
        "
        strokeWidth="1.4"
        strokeLinejoin="round"
      />

      <circle
        className="doodle-secondary-fill"
        cx="190"
        cy="35"
        r="3"
      />

      <circle
        className="doodle-primary-fill"
        cx="34"
        cy="145"
        r="2.5"
      />

      <path
        className="doodle-primary"
        d="M 239 48 L 241 54 L 247 56 L 241 58 L 239 64 L 237 58 L 231 56 L 237 54 Z"
        strokeWidth="1.3"
      />

    </svg>
  );
}

export default CelestialKoi;