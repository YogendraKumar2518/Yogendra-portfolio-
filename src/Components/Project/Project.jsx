import "./Project.css";

import { motion } from "framer-motion";

import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

function Projects() {

  const projects = [
    {
      number: "01",
      title: "Filpkart E-Commerce",
      category: "Full Stack E-Commerce Application",
      description:
        "A full-stack e-commerce application built with a modern frontend and Spring Boot backend, focusing on product management, user authentication, categories, cart and order functionality.",

      technologies: [
        "React",
        "Java",
        "Spring Boot",
        "Spring Data JPA",
        "MySQL",
        "REST API",
      ],

      github: "#",
      live: "#",
    },

    {
      number: "02",
      title: "Myntra E-Commerce",
      category: "E-Commerce Application",
      description:
        "An e-commerce application developed with a Spring Boot backend and database integration, designed around product and shopping-related functionality.",

      technologies: [
        "Java",
        "Spring Boot",
        "Spring Data JPA",
        "MySQL",
        "REST API",
      ],

      github: "#",
      live: "#",
    },

    {
      number: "03",
      title: "Portfolio Website",
      category: "Frontend Development",
      description:
        "A personal developer portfolio designed to showcase projects, technical skills and development experience through a responsive and animated user interface.",

      technologies: [
        "React",
        "JavaScript",
        "CSS",
        "Framer Motion",
        "Vite",
      ],

      github: "#",
      live: "#",
    },
  ];


  return (
    <section className="projects" id="projects">

      <div className="projects-container">

        {/* ============================
            HEADING
        ============================= */}

        <motion.div
          className="projects-heading"
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

          <span className="projects-line"></span>

          <h2>
            My <span>Projects</span>
          </h2>

          <span className="projects-line"></span>

        </motion.div>


        {/* ============================
            INTRO
        ============================= */}

        <motion.p
          className="projects-intro"
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          Here are some of the projects I've worked on,
          applying my skills in frontend and backend
          development.
        </motion.p>


        {/* ============================
            PROJECT LIST
        ============================= */}

        <div className="projects-list">

          {projects.map((project, index) => (

            <motion.article
              className="project-card"
              key={project.number}

              initial={{
                opacity: 0,
                y: 50,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              viewport={{
                once: true,
                amount: 0.2,
              }}

              transition={{
                duration: 0.7,
                delay: index * 0.12,
              }}
            >

              {/* NUMBER */}

              <div className="project-number">
                {project.number}
              </div>


              {/* CONTENT */}

              <div className="project-content">

                <span className="project-category">
                  {project.category}
                </span>

                <h3>
                  {project.title}
                </h3>

                <p>
                  {project.description}
                </p>


                {/* TECHNOLOGIES */}

                <div className="project-technologies">

                  {project.technologies.map((technology) => (

                    <span
                      key={technology}
                      className="technology"
                    >
                      {technology}
                    </span>

                  ))}

                </div>


                {/* LINKS */}

                <div className="project-links">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>

                </div>

              </div>


              {/* ARROW */}

              <div className="project-arrow">
                ↗
              </div>

            </motion.article>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;