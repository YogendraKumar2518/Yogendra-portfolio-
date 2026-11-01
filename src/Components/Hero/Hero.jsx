import "./Hero.css";
import { useNavigate } from "react-router-dom";

import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

import profileImage from "../../assets/profile.jpg";

function Hero() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");

    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
   const navigate = useNavigate();
  const openResume = () => {
    navigate("/resume");
    
  };

  return (
    <section className="hero" id="home">

      {/* =================================
          DECORATIVE ELEMENTS
      ================================== */}

      <div className="hero-decoration hero-decoration-left">
        &lt;
      </div>

      <div className="hero-decoration hero-decoration-right">
        &gt;
      </div>


      <div className="hero-container">

        {/* =================================
            LEFT CONTENT
        ================================== */}

        <motion.div
          className="hero-content"
          initial={{
            opacity: 0,
            x: -60,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >

          <motion.h1
            className="hero-greeting"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2,
              duration: 0.6,
            }}
          >
            Hello<span>.</span>
          </motion.h1>


          <motion.div
            className="hero-name"
            initial={{
              opacity: 0,
              x: -30,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0.35,
              duration: 0.6,
            }}
          >
            <span className="name-line"></span>

            <span>
              I'm <strong>Yogendra Kumar</strong>
            </span>
          </motion.div>


          <motion.h2
            className="hero-title"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.5,
              duration: 0.6,
            }}
          >
            <span>Java Full Stack</span> Developer
          </motion.h2>


          {/* =================================
              BUTTONS
          ================================== */}

          <motion.div
            className="hero-buttons"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.7,
              duration: 0.6,
            }}
          >

            <button
              className="primary-button"
              onClick={scrollToContact}
            >
              Got a project?

              <FaArrowRight className="button-arrow" />
            </button>


            <button
              className="secondary-button"
              onClick={openResume}
            >
              My Resume
            </button>

          </motion.div>

        </motion.div>


        {/* =================================
            RIGHT IMAGE
        ================================== */}

        <motion.div
          className="hero-image-container"
          initial={{
            opacity: 0,
            x: 60,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: "easeOut",
          }}
        >

          {/* Glow */}

          <div className="image-glow"></div>


          {/* Coral Ring */}

          <motion.div
            className="image-ring"
            initial={{
              scale: 0.7,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.4,
            }}
          ></motion.div>


          {/* Person */}

          <motion.img
            src={profileImage}
            alt="Yogi - Frontend Developer"
            className="profile-image"
            initial={{
              y: 30,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.8,
              delay: 0.5,
            }}
          />

        </motion.div>

      </div>

    </section>
  );
}

export default Hero;