import "./Resume.css";
import resume from "../../assets/Resume.pdf";

import { motion } from "framer-motion";
import {
  FaFilePdf,
  FaDownload,
  FaArrowRight,
} from "react-icons/fa";

function Resume() {
  return (
    <section className="resume" id="resume">

      <div className="resume-container">

        {/* =========================
            HEADING
        ========================== */}

        <motion.div
          className="resume-heading"
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
        >

          <span className="resume-line"></span>

          <h2>
            My <span>Resume</span>
          </h2>

          <span className="resume-line"></span>

        </motion.div>


        {/* =========================
            RESUME CONTENT
        ========================== */}

        <motion.div
          className="resume-content"
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
        >

          {/* PDF ICON */}

          <div className="resume-icon">
            <FaFilePdf />
          </div>


          {/* TEXT */}

          <div className="resume-text">

            <span className="resume-label">
              MY PROFESSIONAL RESUME
            </span>

            <h3>
              Want to know more about me?
            </h3>

            <p>
              Explore my resume to learn more about my
              education, technical skills, projects and
              professional experience.
            </p>

          </div>


          {/* BUTTONS */}

          <div className="resume-buttons">

            {/* VIEW RESUME */}

            <motion.a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="resume-view"
              whileHover={{
                y: -3,
              }}
              whileTap={{
                scale: 0.97,
              }}
            >

              View Resume

              <FaArrowRight />

            </motion.a>


            {/* DOWNLOAD RESUME */}

            <motion.a
              href={resume}
              download="Yogendra-Kumar-Resume.pdf"
              className="resume-download"
              whileHover={{
                y: -3,
              }}
              whileTap={{
                scale: 0.97,
              }}
            >

              <FaDownload />

              Download

            </motion.a>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default Resume;