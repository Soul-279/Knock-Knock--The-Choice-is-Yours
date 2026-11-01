function SleepyStar({ className = "" }) {
    return (
        <svg
            viewBox="0 0 150 150"
            className={`doodle sleepy-star ${className}`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            aria-hidden="true"
        >

            {/* Star body */}

            <path
                className="sleepy-star-body"
                d="
          M 74 17
          Q 79 15 82 25
          L 96 51
          L 125 54
          Q 136 57 127 68
          L 105 87
          L 110 116
          Q 111 129 99 123
          L 74 109
          L 49 123
          Q 37 129 39 116
          L 44 87
          L 22 68
          Q 13 58 25 54
          L 53 51
          L 67 25
          Q 70 17 74 17 Z
        "
                strokeWidth="2.2"
                strokeLinejoin="round"
            />

            {/* Oversized floppy nightcap */}

            <path
                className="star-hat-body"
                d="
    M 47 36
    C 51 27 59 24 64 17
    C 68 7 79 4 88 11
    C 96 16 99 25 98 31
    Q 104 32 107 36
    Q 78 45 47 36 Z
  "
                strokeWidth="2"
                strokeLinejoin="round"
            />

            {/* Folded hat brim */}

            <path
                className="star-hat-band"
                d="M 49 35 Q 77 44 105 36"
                strokeWidth="2.5"
                strokeLinecap="round"
            />

            {/* Fabric fold */}

            <path
                className="doodle-secondary"
                d="M 65 17 Q 78 23 94 15"
                strokeWidth="1.5"
                strokeLinecap="round"
            />

            {/* Big pom-pom */}

            <circle
                className="doodle-warm-fill"
                cx="99"
                cy="12"
                r="7"
            />

            {/* Closed eyes */}

            <path
                className="doodle-primary"
                d="M 53 75 Q 59 82 65 75"
                strokeWidth="2.2"
                strokeLinecap="round"
            />

            <path
                className="doodle-primary"
                d="M 82 75 Q 88 82 94 75"
                strokeWidth="2.2"
                strokeLinecap="round"
            />

            {/* Blush */}

            <ellipse
                className="doodle-secondary-fill"
                cx="48"
                cy="87"
                rx="6"
                ry="3"
                opacity="0.7"
            />

            <ellipse
                className="doodle-secondary-fill"
                cx="99"
                cy="87"
                rx="6"
                ry="3"
                opacity="0.7"
            />

            {/* Sleepy smile */}

            <path
                className="doodle-primary"
                d="M 70 88 Q 75 94 80 88"
                strokeWidth="1.8"
                strokeLinecap="round"
            />

            {/* Little Z symbols */}

            <path
                className="doodle-warm"
                d="M 112 37 L 122 37 L 113 47 L 123 47"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
            />

            <path
                className="doodle-secondary"
                d="M 127 26 L 133 26 L 128 32 L 134 32"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
            />

        </svg>
    );
}

export default SleepyStar;