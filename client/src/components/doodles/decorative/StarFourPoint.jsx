function StarFourPoint({ className = "" }) {
  return (
    <svg
      viewBox="0 0 80 80"
      className={`doodle star-four-point ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      aria-hidden="true"
    >

      <path
        className="star-four-outline"
        d="
          M 40 5
          Q 43 34 75 40
          Q 43 44 40 75
          Q 36 44 5 40
          Q 36 34 40 5 Z
        "
        strokeWidth="2"
        strokeLinejoin="round"
      />

    </svg>
  );
}

export default StarFourPoint;