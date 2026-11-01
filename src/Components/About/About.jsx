import "./About.css";

import { motion } from "framer-motion";

import {
  FaCode,
  FaServer,
  FaDatabase,
  FaLaptopCode,
} from "react-icons/fa";

function About() {
  const skills = [
    {
      icon: <FaCode />,
      title: "Frontend",
      skills: "HTML, CSS, JavaScript, React",
    },
    {
      icon: <FaServer />,
      title: "Backend",
      skills: "Java, Spring Boot, REST APIs",
    },
    {
      icon: <FaDatabase />,
      title: "Database",
      skills: "MySQL, JPA, Hibernate",
    },
    {
      icon: <FaLaptopCode />,
      title: "Development",
      skills: "Git, GitHub, Responsive Design",
    },
  ];

  return (
    <section className="about" id="about">

      <div className="about-container">

        {/* =====================================
            SECTION HEADING
        ====================================== */}

        <motion.div
          className="about-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-line"></span>

          <h2>
            About <span>Me</span>
          </h2>

          <span className="section-line"></span>
        </motion.div>


        {/* =====================================
            ABOUT CONTENT
        ====================================== */}

        <div className="about-content">

          {/* LEFT */}

          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <p className="about-intro">
              I'm <strong>Yogendra Kumar</strong>, a
              passionate <span>Java Full Stack Developer </span>
              who enjoys building modern, responsive and
              user-friendly web applications.
            </p>

            <p>
              I have a strong interest in both frontend and
              backend development. I enjoy turning ideas into
              functional applications and continuously
              improving my technical skills through practical
              projects.
            </p>

            <p>
              My goal is to build scalable applications with
              clean code, intuitive user experiences and
              reliable backend systems.
            </p>


            {/* Resume Button */}

            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="about-resume"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
            >
              Download Resume
            </motion.a>

          </motion.div>


          {/* RIGHT */}

          <motion.div
            className="about-skills"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <div className="skills-grid">

              {skills.map((skill, index) => (

                <motion.div
                  className="skill-card"
                  key={skill.title}
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  whileHover={{
                    y: -6,
                  }}
                >

                  <div className="skill-icon">
                    {skill.icon}
                  </div>

                  <div>
                    <h3>{skill.title}</h3>

                    <p>{skill.skills}</p>
                  </div>

                </motion.div>

              ))}

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default About;