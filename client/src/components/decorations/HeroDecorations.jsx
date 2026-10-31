import {
  MoonDoodle,
  OrbitDoodle
} from "../doodles/Doodles";

function HeroDecorations() {
  return (
    <div className="hero-doodle-layer" aria-hidden="true">

      <MoonDoodle className="hero-moon" />

      <span className="doodle-note hero-note">
        what if...?
      </span>

      <OrbitDoodle className="hero-orbit" />

    </div>
  );
}

export default HeroDecorations;