function StarFivePoint({ className = "" }) {
  return (
    <svg
      viewBox="0 0 80 80"
      className={`doodle star-five-point ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      aria-hidden="true"
    >

      <path
        className="star-solid"
        d="
          M 39 5
          L 48 29
          L 73 30
          L 53 46
          L 61 72
          L 39 57
          L 17 72
          L 24 46
          L 6 30
          L 30 28 Z
        "
        strokeWidth="2"
        strokeLinejoin="round"
      />

    </svg>
  );
}

export default StarFivePoint;