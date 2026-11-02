function StarOutline({ className = "" }) {
  return (
    <svg
      viewBox="0 0 80 80"
      className={`doodle star-outline ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      aria-hidden="true"
    >

      <path
        className="star-outline-path"
        d="
          M 40 7
          L 48 29
          L 70 31
          L 53 46
          L 59 70
          L 39 57
          L 18 71
          L 25 46
          L 8 30
          L 32 28 Z
        "
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

    </svg>
  );
}

export default StarOutline;