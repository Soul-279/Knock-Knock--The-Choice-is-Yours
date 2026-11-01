function MoonFisher({ className = "" }) {
  return (
    <svg
      viewBox="0 0 320 230"
      className={`doodle moon-fisher ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      aria-hidden="true"
    >

      {/* =================================
          LITTLE CLOUDS — BEHIND THE MOON
      ================================= */}

      {/* Left cloud */}

      <path
        className="moon-fisher-cloud"
        d="
          M 17 137
          C 17 130 23 126 30 128
          C 33 118 45 116 52 125
          C 61 121 70 127 71 136
          C 79 134 85 140 83 147
          C 82 153 75 155 68 154
          L 30 154
          C 21 154 16 147 17 140 Z
        "
        strokeWidth="1.7"
        strokeLinejoin="round"
      />

      {/* Upper-right cloud */}

      <path
        className="moon-fisher-cloud"
        d="
          M 239 75
          C 239 68 245 64 251 67
          C 255 58 268 58 273 67
          C 282 65 289 72 287 80
          C 294 81 297 89 292 94
          C 289 98 283 98 278 97
          L 250 97
          C 242 97 237 91 239 84 Z
        "
        strokeWidth="1.7"
        strokeLinejoin="round"
      />

      {/* Small lower-right cloud */}

      <path
        className="moon-fisher-cloud"
        d="
          M 242 187
          C 244 180 253 179 258 185
          C 265 178 276 182 278 190
          C 286 191 290 198 285 204
          L 251 204
          C 242 204 238 196 242 187 Z
        "
        strokeWidth="1.5"
        strokeLinejoin="round"
      />


      {/* =================================
          FULL MOON
      ================================= */}

      <circle
        className="moon-fisher-body"
        cx="157"
        cy="130"
        r="72"
        strokeWidth="2.3"
      />


      {/* Large irregular lunar surface patches */}

      <path
        className="moon-maria"
        d="
          M 112 85
          C 120 74 135 72 145 79
          C 153 83 154 94 146 101
          C 138 108 124 104 116 100
          C 108 96 106 91 112 85 Z
        "
      />

      <path
        className="moon-maria"
        d="
          M 164 133
          C 174 124 189 127 193 137
          C 197 147 188 157 179 160
          C 169 163 158 155 159 145
          C 159 140 161 136 164 133 Z
        "
      />

      <path
        className="moon-maria"
        d="
          M 116 145
          C 121 138 133 137 139 143
          C 145 149 141 159 134 162
          C 126 166 116 160 114 153
          C 113 150 114 147 116 145 Z
        "
      />


      {/* =================================
          NATURAL-LOOKING CRATERS
      ================================= */}

      {/* Large upper-left crater */}

      <ellipse
        className="moon-crater"
        cx="107"
        cy="119"
        rx="12"
        ry="8"
        transform="rotate(-24 107 119)"
        strokeWidth="1.4"
      />

      <path
        className="moon-crater-highlight"
        d="M 97 116 Q 103 108 113 112"
        strokeWidth="1.5"
        strokeLinecap="round"
      />


      {/* Upper-right crater */}

      <ellipse
        className="moon-crater"
        cx="183"
        cy="101"
        rx="9"
        ry="6"
        transform="rotate(18 183 101)"
        strokeWidth="1.3"
      />

      <path
        className="moon-crater-highlight"
        d="M 176 98 Q 182 93 190 98"
        strokeWidth="1.2"
        strokeLinecap="round"
      />


      {/* Lower crater */}

      <ellipse
        className="moon-crater"
        cx="184"
        cy="171"
        rx="12"
        ry="7"
        transform="rotate(-15 184 171)"
        strokeWidth="1.4"
      />

      <path
        className="moon-crater-highlight"
        d="M 174 168 Q 182 162 193 167"
        strokeWidth="1.4"
        strokeLinecap="round"
      />


      {/* Small craters */}

      <circle
        className="moon-crater"
        cx="125"
        cy="166"
        r="4"
        strokeWidth="1.2"
      />

      <circle
        className="moon-crater"
        cx="208"
        cy="137"
        r="3.5"
        strokeWidth="1.2"
      />

      <ellipse
        className="moon-crater"
        cx="148"
        cy="109"
        rx="4"
        ry="6"
        transform="rotate(35 148 109)"
        strokeWidth="1.2"
      />


      {/* =================================
          THE LITTLE FISHERMAN
      ================================= */}

      {/* Head */}

      <circle
        className="doodle-warm-fill"
        cx="149"
        cy="13"
        r="6.5"
      />

      {/* Tiny face */}

      <circle
        className="doodle-primary"
        cx="146.5"
        cy="12"
        r="0.8"
      />

      <circle
        className="doodle-primary"
        cx="151.5"
        cy="12"
        r="0.8"
      />


      {/* Body — seated upright */}

      <path
        className="doodle-primary"
        d="M 149 20 L 148 49"
        strokeWidth="2.2"
        strokeLinecap="round"
      />


      {/* Left arm */}

      <path
        className="doodle-primary"
        d="M 148 29 L 138 39 L 144 45"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />


      {/* Right arm holding fishing rod */}

      <path
        className="doodle-primary"
        d="M 149 29 L 158 32 L 165 25"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />


      {/* Sitting position / thighs */}

      <path
        className="doodle-primary"
        d="
          M 148 49
          Q 157 53 164 58
        "
        strokeWidth="2.2"
        strokeLinecap="round"
      />


      {/* Dangling legs */}

      <path
        className="doodle-primary"
        d="
          M 164 58
          Q 170 64 168 74

          M 148 49
          Q 151 59 155 72
        "
        strokeWidth="2.2"
        strokeLinecap="round"
      />


      {/* Tiny feet */}

      <path
        className="doodle-primary"
        d="
          M 168 74 L 173 76
          M 155 72 L 160 74
        "
        strokeWidth="2"
        strokeLinecap="round"
      />


      {/* =================================
          FISHING ROD AND LINE
      ================================= */}

      {/* Rod */}

      <path
        className="doodle-warm"
        d="M 165 25 Q 179 9 194 5"
        strokeWidth="2.2"
        strokeLinecap="round"
      />

      {/* Fishing line */}

      <path
        className="doodle-secondary"
        d="M 194 5 Q 212 48 207 102 L 207 116"
        strokeWidth="1.4"
        strokeDasharray="3 4"
        strokeLinecap="round"
      />


      {/* Star caught on the line */}

      <path
        className="doodle-warm-fill"
        d="
          M 207 117
          L 211 126
          L 221 130
          L 211 134
          L 207 144
          L 203 134
          L 193 130
          L 203 126 Z
        "
        strokeWidth="1.5"
        strokeLinejoin="round"
      />


      {/* =================================
          LITTLE CELESTIAL DETAILS
      ================================= */}

      <circle
        className="doodle-secondary-fill"
        cx="30"
        cy="85"
        r="3"
      />

      <path
        className="doodle-warm"
        d="M 264 122 L 267 130 L 275 133 L 267 136 L 264 144 L 261 136 L 253 133 L 261 130 Z"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      <circle
        className="doodle-primary-fill"
        cx="218"
        cy="43"
        r="2.5"
      />

    </svg>
  );
}

export default MoonFisher;