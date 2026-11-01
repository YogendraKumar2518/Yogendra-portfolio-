import "./Navbar.css";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    {
      name: "Home",
      id: "home",
    },
    {
      name: "About",
      id: "about",
    },
    {
      name: "Projects",
      id: "projects",
    },
    {
      name: "Contact",
      id: "contact",
    },
  ];

  const handleNavigation = (id) => {
    setActiveSection(id);
    setMenuOpen(false);

    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

const navigate = useNavigate();

const handleResume = () => {
  navigate("/resume");
  setMenuOpen(false);
  
};

  return (
    <motion.header
      className="navbar"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
    >
      <div className="navbar-container">

        {/* =========================
            LOGO
        ========================== */}

        <button
          className="navbar-logo"
          onClick={() => handleNavigation("home")}
        >
          <span>Yogendra Kumar</span>
          <span className="logo-dot">.</span>
        </button>


        {/* =========================
            DESKTOP NAVIGATION
        ========================== */}

        <nav className="desktop-nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nav-link ${
                activeSection === item.id ? "active" : ""
              }`}
              onClick={() => handleNavigation(item.id)}
            >
              {item.name}

              {activeSection === item.id && (
                <motion.span
                  className="nav-active-line"
                  layoutId="nav-active-line"
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                  }}
                />
              )}
            </button>
          ))}

          {/* Resume Button */}

          <button
            className="resume-button"
            onClick={handleResume}
          >
            My Resume
          </button>
        </nav>


        {/* =========================
            MOBILE MENU BUTTON
        ========================== */}

        <button
          className="mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>


      {/* =========================
          MOBILE NAVIGATION
      ========================== */}

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.3,
            }}
          >
            <nav className="mobile-nav">

              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  className={`mobile-nav-link ${
                    activeSection === item.id ? "active" : ""
                  }`}
                  onClick={() => handleNavigation(item.id)}
                  initial={{
                    opacity: 0,
                    x: -20,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: index * 0.08,
                  }}
                >
                  {item.name}
                </motion.button>
              ))}

              <motion.button
                className="mobile-resume-button"
                onClick={handleResume}
                initial={{
                  opacity: 0,
                  x: -20,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: navItems.length * 0.08,
                }}
              >
                My Resume
              </motion.button>

            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Navbar;