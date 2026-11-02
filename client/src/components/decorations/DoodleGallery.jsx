import MoonFisher from "../doodles/scenes/MoonFisher";
import CuriousUFO from "../doodles/scenes/CuriousUFO";
import SleepyStar from "../doodles/characters/SleepyStar";
import TinyAstronaut from "../doodles/characters/TinyAstronaut";
import CelestialKoi from "../doodles/characters/CelestialKoi";
import {
  FloatingKey,
  FloatingClock,
  PaperPlane,
  CosmicDice,
  MysteriousDoors
} from "../doodles/objects";
import {
  StarFivePoint,
  StarFourPoint,
  StarOutline,
  TinyTwinkle
} from "../doodles/decorative";
import {
  ImpossibleStaircase,
  CuriousEye,
  ShootingStar,
  Constellation,
  CuriousMarks
} from "../doodles/atmosphere";

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

        <article className="doodle-gallery-card">

          <div className="doodle-gallery-art">
            <FloatingKey />
          </div>

          <h3>The key to somewhere</h3>

          <span>
            It must open something.
          </span>

        </article>

        {/* Floating Clock */}

        <article className="doodle-gallery-card">
          <div className="doodle-gallery-art">
            <FloatingClock />
          </div>

          <h3>Out of time?</h3>

          <span>
            Time is behaving strangely.
          </span>
        </article>


        {/* Paper Plane */}

        <article className="doodle-gallery-card">
          <div className="doodle-gallery-art">
            <PaperPlane />
          </div>

          <h3>Letters to nowhere</h3>

          <span>
            A little journey through space.
          </span>
        </article>


        {/* Cosmic Dice */}

        <article className="doodle-gallery-card">
          <div className="doodle-gallery-art">
            <CosmicDice />
          </div>

          <h3>Leave it to chance</h3>

          <span>
            Even the universe rolls dice.
          </span>
        </article>


        {/* Mysterious Doors */}

        <article className="doodle-gallery-card">
          <div className="doodle-gallery-art">
            <MysteriousDoors />
          </div>

          <h3>Which door would you choose?</h3>

          <span>
            One leads to something. Probably.
          </span>
        </article>

        {/* Star Collection */}

        <article className="doodle-gallery-card">

          <div className="doodle-gallery-art star-collection-art">

            <StarFivePoint className="star-sample star-sample-large" />

            <StarFourPoint className="star-sample star-sample-medium" />

            <StarOutline className="star-sample star-sample-outline" />

            <TinyTwinkle className="star-sample star-sample-small" />

          </div>

          <h3>A little stardust</h3>

          <span>
            No two stars need to look alike.
          </span>

        </article>

        {/* Impossible Staircase */}

        <article className="doodle-gallery-card">
          <div className="doodle-gallery-art">
            <ImpossibleStaircase />
          </div>

          <h3>Somewhere above the clouds</h3>

          <span>
            The destination is questionable.
          </span>
        </article>


        {/* Curious Eye */}

        <article className="doodle-gallery-card">
          <div className="doodle-gallery-art">
            <CuriousEye />
          </div>

          <h3>The universe is watching</h3>

          <span>
            Some mysteries look back.
          </span>
        </article>


        {/* Shooting Star */}

        <article className="doodle-gallery-card">
          <div className="doodle-gallery-art">
            <ShootingStar />
          </div>

          <h3>Make a little wish</h3>

          <span>
            You have until it disappears.
          </span>
        </article>


        {/* Constellation */}

        <article className="doodle-gallery-card">
          <div className="doodle-gallery-art">
            <Constellation />
          </div>

          <h3>Finding the North Star</h3>

          <span>
            Somewhere between the stars.
          </span>
        </article>


        {/* Curious Marks */}

        <article className="doodle-gallery-card">
          <div className="doodle-gallery-art">
            <CuriousMarks />
          </div>

          <h3>What if...?</h3>

          <span>
            The beginning of every question.
          </span>
        </article>

      </div>

    </section>
  );
}

export default DoodleGallery;