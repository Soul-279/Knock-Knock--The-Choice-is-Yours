// =====================================
// KNOCK KNOCK — CELESTIAL DOODLE LIBRARY
// =====================================

// 1. Crescent Moon

export function MoonDoodle({ className = "" }) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={`doodle ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Crescent outline */}

      <path
        className="doodle-primary"
        d="
          M 76 18
          C 53 19, 38 39, 41 62
          C 44 85, 64 99, 86 91
          C 69 82, 62 67, 64 51
          C 66 37, 72 26, 84 19
          C 81 18, 78 18, 76 18
        "
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Little celestial star */}

      <path
        className="doodle-warm"
        d="M 23 31 L 26 39 L 34 42 L 26 45 L 23 53 L 20 45 L 12 42 L 20 39 Z"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />

      {/* Tiny floating star */}

      <circle
        className="doodle-secondary-fill"
        cx="94"
        cy="69"
        r="3"
      />

      <path
        className="doodle-secondary"
        d="M 99 20 L 101 26 L 107 28 L 101 30 L 99 36 L 97 30 L 91 28 L 97 26 Z"
        strokeWidth="1.5"
      />

    </svg>
  );
}


// 2. Orbital Planet

export function OrbitDoodle({ className = "" }) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={`doodle ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >

      {/* Planet */}

      <circle
        className="doodle-primary"
        cx="59"
        cy="58"
        r="24"
        strokeWidth="2.2"
      />

      {/* Planet's orbital ring */}

      <ellipse
        className="doodle-secondary"
        cx="59"
        cy="58"
        rx="49"
        ry="17"
        transform="rotate(-27 59 58)"
        strokeWidth="2"
      />

      {/* Small orbiting body */}

      <circle
        className="doodle-warm-fill"
        cx="103"
        cy="39"
        r="5"
      />

      {/* Planet detail */}

      <path
        className="doodle-primary"
        d="M 45 53 C 52 47, 65 47, 73 53"
        strokeWidth="1.7"
        strokeLinecap="round"
      />

      <path
        className="doodle-primary"
        d="M 47 65 C 55 69, 64 69, 71 64"
        strokeWidth="1.7"
        strokeLinecap="round"
      />

    </svg>
  );
}


// 3. Hand-drawn Sparkle

export function SparkleDoodle({ className = "" }) {
  return (
    <svg
      viewBox="0 0 80 80"
      className={`doodle ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >

      {/* Main sparkle */}

      <path
        className="doodle-warm"
        d="
          M 39 5
          C 42 26, 48 34, 69 39
          C 48 42, 42 49, 39 71
          C 35 49, 28 42, 7 39
          C 28 34, 35 26, 39 5
        "
        strokeWidth="2"
        strokeLinejoin="round"
      />

      {/* Small companion sparkle */}

      <path
        className="doodle-secondary"
        d="M 69 7 L 71 15 L 78 18 L 71 20 L 69 28 L 67 20 L 60 18 L 67 15 Z"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

    </svg>
  );
}