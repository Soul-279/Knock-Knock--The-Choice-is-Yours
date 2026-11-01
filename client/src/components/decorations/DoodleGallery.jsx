import MoonFisher from "../doodles/scenes/MoonFisher";
import CuriousUFO from "../doodles/scenes/CuriousUFO";
import SleepyStar from "../doodles/characters/SleepyStar";
import TinyAstronaut from "../doodles/characters/TinyAstronaut";
import CelestialKoi from "../doodles/characters/CelestialKoi";

function DoodleGallery() {
  return (
    <section className="doodle-gallery">

      <div className="doodle-gallery-heading">

        <p className="eyebrow">
          THE LITTLE THINGS IN OUR UNIVERSE
        </p>

        <h2>Our doodle cabinet.</h2>

        <p>
          A collection of curious little things,
          wandering through the universe.
        </p>

      </div>


      <div className="doodle-gallery-grid">

        <article className="doodle-gallery-card">

          <div className="doodle-gallery-art">
            <MoonFisher />
          </div>

          <h3>Fishing for stars</h3>

          <span>
            A very patient fisherman.
          </span>

        </article>


        <article className="doodle-gallery-card">

          <div className="doodle-gallery-art">
            <CuriousUFO />
          </div>

          <h3>Definitely not lost</h3>

          <span>
            An unexpected visitor.
          </span>

        </article>

        <article className="doodle-gallery-card">

          <div className="doodle-gallery-art">
            <SleepyStar />
          </div>

          <h3>Just five more minutes...</h3>

          <span>
            Our little dreamer.
          </span>

        </article>


        <article className="doodle-gallery-card">

          <div className="doodle-gallery-art">
            <TinyAstronaut />
          </div>

          <h3>Lost in orbit</h3>

          <span>
            An explorer without directions.
          </span>

        </article>


        <article className="doodle-gallery-card">

          <div className="doodle-gallery-art">
            <CelestialKoi />
          </div>

          <h3>The wandering spirit</h3>

          <span>
            A little koi swimming between worlds.
          </span>

        </article>

      </div>

    </section>
  );
}

export default DoodleGallery;