function ImpossibleStaircase({ className = "" }) {
    return (
        <svg
            viewBox="0 0 230 190"
            className={`doodle impossible-staircase ${className}`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            aria-hidden="true"
        >


            {/* =================================
          STAIRCASE — STEP ONE
      ================================= */}

            <path
                className="stair-top"
                d="M 22 145 L 34 137 L 62 137 L 50 145 Z"
                strokeWidth="1.7"
                strokeLinejoin="round"
            />

            <path
                className="stair-front"
                d="M 22 145 L 50 145 L 50 164 L 22 164 Z"
                strokeWidth="1.7"
                strokeLinejoin="round"
            />

            <path
                className="stair-side"
                d="M 50 145 L 62 137 L 62 156 L 50 164 Z"
                strokeWidth="1.7"
                strokeLinejoin="round"
            />


            {/* =================================
          STEP TWO
      ================================= */}

            <path
                className="stair-top"
                d="M 50 126 L 62 118 L 90 118 L 78 126 Z"
                strokeWidth="1.7"
                strokeLinejoin="round"
            />

            <path
                className="stair-front"
                d="M 50 126 L 78 126 L 78 145 L 50 145 Z"
                strokeWidth="1.7"
                strokeLinejoin="round"
            />

            <path
                className="stair-side"
                d="M 78 126 L 90 118 L 90 137 L 78 145 Z"
                strokeWidth="1.7"
                strokeLinejoin="round"
            />


            {/* =================================
          STEP THREE
      ================================= */}

            <path
                className="stair-top"
                d="M 78 107 L 90 99 L 118 99 L 106 107 Z"
                strokeWidth="1.7"
                strokeLinejoin="round"
            />

            <path
                className="stair-front"
                d="M 78 107 L 106 107 L 106 126 L 78 126 Z"
                strokeWidth="1.7"
                strokeLinejoin="round"
            />

            <path
                className="stair-side"
                d="M 106 107 L 118 99 L 118 118 L 106 126 Z"
                strokeWidth="1.7"
                strokeLinejoin="round"
            />


            {/* =================================
          STEP FOUR
      ================================= */}

            <path
                className="stair-top"
                d="M 106 88 L 118 80 L 146 80 L 134 88 Z"
                strokeWidth="1.7"
                strokeLinejoin="round"
            />

            <path
                className="stair-front"
                d="M 106 88 L 134 88 L 134 107 L 106 107 Z"
                strokeWidth="1.7"
                strokeLinejoin="round"
            />

            <path
                className="stair-side"
                d="M 134 88 L 146 80 L 146 99 L 134 107 Z"
                strokeWidth="1.7"
                strokeLinejoin="round"
            />


            {/* =================================
          STEP FIVE — DISAPPEARING STEP
      ================================= */}

            <path
                className="stair-top"
                d="M 134 69 L 146 61 L 174 61 L 162 69 Z"
                strokeWidth="1.7"
                strokeLinejoin="round"
            />

            <path
                className="stair-front"
                d="M 134 69 L 162 69 L 162 88 L 134 88 Z"
                strokeWidth="1.7"
                strokeLinejoin="round"
            />

            <path
                className="stair-side"
                d="M 162 69 L 174 61 L 174 80 L 162 88 Z"
                strokeWidth="1.7"
                strokeLinejoin="round"
            />

            {/* =================================
          CLOUD — SHADOW LAYER
      ================================= */}

            <path
                className="stair-cloud-shadow"
                d="
          M 121 70
          C 110 69 106 61 111 53
          C 115 45 124 43 132 46
          C 134 32 146 25 157 30
          C 165 15 184 17 191 32
          C 205 29 215 41 211 52
          C 222 58 218 72 205 74
          L 130 74 Z
        "
            />

            {/* =================================
          CLOUD — MAIN BODY
      ================================= */}

            <path
                className="stair-cloud-body"
                d="
          M 117 63
          C 106 62 102 53 108 45
          C 112 38 121 36 129 39
          C 131 26 143 19 154 24
          C 162 9 182 12 188 27
          C 202 24 212 36 208 47
          C 220 53 216 66 203 68
          L 127 68 Z
        "
                strokeWidth="1.8"
                strokeLinejoin="round"
            />

            {/* Cloud highlights */}

            <path
                className="stair-cloud-highlight"
                d="M 119 43 Q 125 35 136 39"
                strokeWidth="1.5"
                strokeLinecap="round"
            />

            <path
                className="stair-cloud-highlight"
                d="M 151 28 Q 164 17 176 27"
                strokeWidth="1.5"
                strokeLinecap="round"
            />

            <path
                className="stair-cloud-highlight"
                d="M 183 28 Q 193 25 199 34"
                strokeWidth="1.5"
                strokeLinecap="round"
            />

            {/* =================================
          IMPOSSIBLE DESTINATION
      ================================= */}

            <path
                className="doodle-secondary"
                d="M 174 61 Q 184 52 180 40"
                strokeWidth="1.6"
                strokeDasharray="3 4"
                strokeLinecap="round"
            />

            {/* Floating star */}

            <path
                className="doodle-warm"
                d="
          M 37 49
          L 40 57
          L 48 60
          L 40 63
          L 37 71
          L 34 63
          L 26 60
          L 34 57 Z
        "
                strokeWidth="1.5"
            />

            <circle
                className="doodle-secondary-fill"
                cx="185"
                cy="112"
                r="3"
            />

        </svg>
    );
}

export default ImpossibleStaircase;