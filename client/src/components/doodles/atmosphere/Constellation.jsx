function Constellation({ className = "" }) {
  return (
    <svg
      viewBox="0 0 280 190"
      className={`doodle constellation ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      aria-hidden="true"
    >

      {/* =================================
          URSA MINOR — LITTLE DIPPER
      ================================= */}

      {/* Connecting lines */}

      <path
        className="constellation-lines"
        d="
          M 39 35
          L 70 55
          L 99 80
          L 133 65
          L 180 83
          L 176 124
          L 137 145
          L 133 65
        "
        strokeWidth="1.7"
        strokeDasharray="3 4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />


      {/* Polaris — North Star */}

      <circle
        className="polaris-glow"
        cx="39"
        cy="35"
        r="15"
      />

      <path
        className="polaris-star"
        d="
          M 39 16
          L 44 30
          L 58 35
          L 44 40
          L 39 54
          L 34 40
          L 20 35
          L 34 30 Z
        "
        strokeWidth="1.8"
        strokeLinejoin="round"
      />

      <circle
        className="polaris-core"
        cx="39"
        cy="35"
        r="3"
      />

      {/* Other Little Dipper stars */}

      <circle className="constellation-star" cx="70" cy="55" r="4" />
      <circle className="constellation-star" cx="99" cy="80" r="3.5" />
      <circle className="constellation-star" cx="133" cy="65" r="4.5" />
      <circle className="constellation-star" cx="180" cy="83" r="4.5" />
      <circle className="constellation-star" cx="176" cy="124" r="4" />
      <circle className="constellation-star" cx="137" cy="145" r="4" />



      {/* =================================
          SECONDARY CONSTELLATION
      ================================= */}

      <path
        className="constellation-secondary-lines"
        d="
          M 219 35
          L 242 56
          L 225 87
          L 251 110
        "
        strokeWidth="1.4"
        strokeDasharray="2 5"
      />

      <circle className="constellation-star-secondary" cx="219" cy="35" r="3" />
      <circle className="constellation-star-secondary" cx="242" cy="56" r="4" />
      <circle className="constellation-star-secondary" cx="225" cy="87" r="3" />
      <circle className="constellation-star-secondary" cx="251" cy="110" r="3.5" />


      {/* Scattered celestial details */}

      <path
        className="doodle-warm"
        d="
          M 219 135 L 222 142 L 229 145
          L 222 148 L 219 155
          L 216 148 L 209 145 L 216 142 Z
        "
        strokeWidth="1.4"
      />

      <circle
        className="doodle-secondary-fill"
        cx="80"
        cy="162"
        r="2.5"
      />

    </svg>
  );
}

export default Constellation;