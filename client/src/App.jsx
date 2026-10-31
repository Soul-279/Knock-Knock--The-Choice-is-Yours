import { useState } from "react";
import "./App.css";
import PollCard from "./components/PollCard";
import HeroDecorations from "./components/decorations/HeroDecorations";
import SectionDecorations from "./components/decorations/SectionDecorations";

const demoPolls = [
  {
    id: 1,
    category: "COSMIC QUESTIONS",
    question: "Which discovery would change humanity more?",
    options: [
      "A confirmed signal from intelligent life",
      "Evidence of life beneath Europa's ice"
    ],
    votes: 2408
  },

  {
    id: 2,
    category: "IMPOSSIBLE CHOICES",
    question: "Which ability would you rather possess?",
    options: [
      "Travel anywhere instantly",
      "Travel to any point in time"
    ],
    votes: 1872
  },

  {
    id: 3,
    category: "THOUGHT EXPERIMENTS",
    question: "What would you rather discover?",
    options: [
      "The origin of the universe",
      "The ultimate fate of the universe"
    ],
    votes: 964
  }
];

function App() {
  const [theme, setTheme] = useState("twilight");

  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === "twilight" ? "dawn" : "twilight"
    );
  };
  return (
    <div className="app-shell" data-theme={theme}>

      <header className="site-header">

        <a href="#" className="brand">
          <span className="brand-mark">K.</span>

          <span className="brand-name">
            KNOCK KNOCK
            <small>THE CHOICE IS YOURS</small>
          </span>
        </a>

        <nav className="navigation">
          <a href="#discover">Discover</a>
          <a href="#about">About</a>
        </nav>

        <button
          className="theme-toggle"
          type="button"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === "twilight" ? "dawn" : "twilight"} theme`}
          aria-pressed={theme === "dawn"}
        >
          <span aria-hidden="true">
            {theme === "twilight" ? "☼" : "☾"}
          </span>

          <span>
            {theme === "twilight" ? "Dawn" : "Twilight"}
          </span>
        </button>

        <a href="#create" className="header-button">
          Create a dilemma ↗
        </a>

      </header>


      <main>

        <section className="hero">

          <HeroDecorations />

          <div className="hero-content">

            <p className="eyebrow">
              A PLAYGROUND FOR IMPOSSIBLE CHOICES
            </p>

            <h1>
              Two options.
              <br />
              <span>Endless possibilities.</span>
            </h1>

            <p className="hero-description">
              A place for curious minds, impossible dilemmas
              and opinions that refuse to agree.
            </p>

            <div className="hero-actions">

              <a href="#discover" className="primary-button">
                Explore dilemmas ↘
              </a>

              <a href="#create" className="secondary-link">
                Ask your own question ↗
              </a>

            </div>

          </div>


          <div className="hero-decoration">

            <div className="decoration-label">
              THE DAILY DILEMMA / 001
            </div>

            <div className="door-container">

              <div className="door door-one">
                <span>01</span>
              </div>

              <div className="door door-two">
                <span>02</span>
              </div>

            </div>

            <p>
              One question.
              <br />
              Two possibilities.
              <br />
              What's your answer?
            </p>

          </div>

        </section>


        <section className="discover-section" id="discover">

          <SectionDecorations />

          <div className="section-heading">

            <div>
              <p className="eyebrow">
                THE COMMUNITY IS DECIDING
              </p>

              <h2>Pick your side.</h2>
            </div>

            <span className="section-note">
              EXPLORE THE POSSIBILITIES ↘
            </span>

          </div>


          <div className="poll-grid">

            {demoPolls.map((poll) => (
              <PollCard
                key={poll.id}
                poll={poll}
              />
            ))}

          </div>

        </section>


        <section className="create-section" id="create">

          <p className="eyebrow">
            YOUR QUESTION. YOUR RULES.
          </p>

          <h2>
            Got a dilemma
            <br />
            worth debating?
          </h2>

          <p>
            Put two possibilities against each other
            and let the world decide.
          </p>

          <button className="primary-button" disabled>
            Create your first dilemma — coming soon
          </button>

        </section>

      </main>


      <footer className="site-footer" id="about">

        <span>KNOCK KNOCK © 2026</span>

        <span>THE CHOICE IS YOURS.</span>

      </footer>

    </div>
  );
}

export default App;