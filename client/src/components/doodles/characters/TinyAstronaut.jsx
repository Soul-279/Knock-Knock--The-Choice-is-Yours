function TinyAstronaut({ className = "" }) {
  return (
    <svg
      viewBox="0 0 180 190"
      className={`doodle tiny-astronaut ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      aria-hidden="true"
    >

      {/* Floating tether */}

      <path
        className="doodle-secondary"
        d="M 108 129 Q 149 145 151 119 Q 154 96 130 103"
        strokeWidth="1.6"
        strokeDasharray="3 4"
        strokeLinecap="round"
      />

      {/* Backpack */}

      <rect
        className="astronaut-suit"
        x="50"
        y="77"
        width="25"
        height="42"
        rx="9"
        strokeWidth="2"
      />

      {/* Backpack detail */}

      <path
        className="doodle-secondary"
        d="M 56 89 L 69 89 M 56 98 L 69 98"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* Spacesuit body */}

      <path
        className="astronaut-suit"
        d="
          M 71 88
          Q 91 80 108 96
          L 119 127
          Q 113 143 91 143
          Q 69 141 60 125
          Z
        "
        strokeWidth="2.2"
        strokeLinejoin="round"
      />

      {/* Helmet side attachments */}

      <rect
        className="astronaut-rim"
        x="50"
        y="48"
        width="13"
        height="24"
        rx="5"
        strokeWidth="1.8"
      />

      <rect
        className="astronaut-rim"
        x="115"
        y="48"
        width="13"
        height="24"
        rx="5"
        strokeWidth="1.8"
      />

      {/* Side attachment details */}

      <circle
        className="doodle-warm-fill"
        cx="56"
        cy="60"
        r="2.5"
      />

      <circle
        className="doodle-warm-fill"
        cx="122"
        cy="60"
        r="2.5"
      />

      {/* Helmet */}

      <circle
        className="astronaut-helmet"
        cx="89"
        cy="59"
        r="36"
        strokeWidth="2.2"
      />

      {/* Visor */}

      <path
        className="astronaut-visor"
        d="
          M 65 58
          Q 66 34 89 31
          Q 111 33 113 59
          Q 110 80 89 83
          Q 67 81 65 58 Z
        "
        strokeWidth="1.8"
      />

        {/* Helmet inner rim */}

<path
        className="astronaut-rim-detail"
        d="M 65 48 Q 89 25 113 48"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Bottom helmet seal */}

      <path
        className="astronaut-rim-detail"
        d="M 62 74 Q 89 91 116 74"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Helmet screws */}

      <circle
        className="doodle-warm-fill"
        cx="66"
        cy="58"
        r="2"
      />

      <circle
        className="doodle-warm-fill"
        cx="112"
        cy="58"
        r="2"
      />

      {/* Visor reflection */}

      <path
        className="astronaut-glint"
        d="M 99 40 Q 108 46 108 55"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <path
        className="astronaut-glint"
        d="M 100 61 L 103 67"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* Tiny reflected star */}

      <path
        className="doodle-warm"
        d="M 80 53 L 82 57 L 86 59 L 82 61 L 80 65 L 78 61 L 74 59 L 78 57 Z"
        strokeWidth="1"
        strokeLinejoin="round"
      />

      {/* Little visor reflection */}

      <path
        className="doodle-primary"
        d="M 76 43 Q 82 35 91 36"
        strokeWidth="1.7"
        strokeLinecap="round"
      />

      {/* Waving arm */}

      <path
        className="doodle-primary"
        d="M 67 96 L 45 79 L 34 57"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Little glove */}

      <circle
        className="astronaut-suit"
        cx="33"
        cy="53"
        r="7"
        strokeWidth="1.8"
      />

      {/* Other arm */}

      <path
        className="doodle-primary"
        d="M 109 101 L 130 114"
        strokeWidth="7"
        strokeLinecap="round"
      />

      <circle
        className="astronaut-suit"
        cx="135"
        cy="117"
        r="7"
        strokeWidth="1.8"
      />

      {/* Legs */}

      <path
        className="doodle-primary"
        d="M 78 137 L 70 158"
        strokeWidth="8"
        strokeLinecap="round"
      />

      <path
        className="doodle-primary"
        d="M 101 139 L 115 157"
        strokeWidth="8"
        strokeLinecap="round"
      />

      {/* Boots */}

      <path
        className="astronaut-suit"
        d="M 61 158 Q 68 153 77 158 L 75 167 L 59 167 Z"
        strokeWidth="1.8"
      />

      <path
        className="astronaut-suit"
        d="M 111 154 Q 119 151 124 159 L 130 166 L 114 169 Z"
        strokeWidth="1.8"
      />

      {/* Chest emblem */}

      <circle
        className="doodle-warm"
        cx="91"
        cy="112"
        r="8"
        strokeWidth="1.6"
      />

      <path
        className="doodle-secondary"
        d="M 91 107 L 94 112 L 91 117 L 88 112 Z"
        strokeWidth="1.4"
      />

      {/* Floating stars */}

      <path
        className="doodle-warm"
        d="M 27 104 L 30 112 L 38 115 L 30 118 L 27 126 L 24 118 L 16 115 L 24 112 Z"
        strokeWidth="1.5"
      />

      <circle
        className="doodle-secondary-fill"
        cx="153"
        cy="49"
        r="3"
      />

      <path
        className="doodle-primary"
        d="M 149 78 L 152 84 L 158 87 L 152 90 L 149 96 L 146 90 L 140 87 L 146 84 Z"
        strokeWidth="1.4"
      />

    </svg>
  );
}

export default TinyAstronaut;