import "./App.css";

import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Project from "./Components/Project/Project";
import Contact from "./Components/Contact/Contact";
import Resume from "./Components/Resume/Resume";

import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />

      <Routes>

        {/* =========================
            HOME
        ========================== */}

        <Route
          path="/"
          element={
            <main>

              <Hero />

              <section
                id="about"
                className="portfolio-section"
              >
                <About />
              </section>

              <section
                id="projects"
                className="portfolio-section"
              >
                <Project />
              </section>

              <section
                id="contact"
                className="portfolio-section"
              >
                <Contact />
              </section>

            </main>
          }
        />


        {/* =========================
            RESUME
        ========================== */}

        <Route
          path="/resume"
          element={<Resume />}
        />

      </Routes>
    </>
  );
}

export default App;