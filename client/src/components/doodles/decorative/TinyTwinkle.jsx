function TinyTwinkle({ className = "" }) {
  return (
    <svg
      viewBox="0 0 60 60"
      className={`doodle tiny-twinkle ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      aria-hidden="true"
    >

      <path
        className="twinkle-stroke"
        d="
          M 30 7
          Q 32 27 53 30
          Q 32 33 30 53
          Q 27 33 7 30
          Q 27 27 30 7
        "
        strokeWidth="2"
        strokeLinecap="round"
      />

      <circle
        className="doodle-warm-fill"
        cx="30"
        cy="30"
        r="2"
      />

    </svg>
  );
}

export default TinyTwinkle;