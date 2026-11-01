import "./Contact.css";

import { motion } from "framer-motion";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedinIn,
  FaGithub,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";

function Contact() {

  const contactDetails = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "yogendrakumar2518@gmail.com",
      link: "mailto:YOUR_EMAIL@gmail.com",
    },

    {
      icon: <FaPhoneAlt />,
      title: "Phone",
      value: "+91 7569055266",
      link: "tel:+917569055266",
    },

    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "India",
      link: "#",
    },
  ];


  return (
    <section className="contact" id="contact">

      <div className="contact-container">

        {/* =====================================
            HEADING
        ====================================== */}

        <motion.div
          className="contact-heading"
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

          <span className="contact-line"></span>

          <h2>
            Get In <span>Touch</span>
          </h2>

          <span className="contact-line"></span>

        </motion.div>


        {/* =====================================
            INTRO
        ====================================== */}

        <motion.p
          className="contact-intro"
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
          I'm always interested in discussing new
          opportunities, projects and ideas.
          Feel free to get in touch with me.
        </motion.p>


        {/* =====================================
            MAIN CONTENT
        ====================================== */}

        <div className="contact-content">


          {/* ==================================
              LEFT
          =================================== */}

          <motion.div
            className="contact-info"
            initial={{
              opacity: 0,
              x: -50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
          >

            <span className="contact-small-title">
              CONTACT ME
            </span>

            <h3>
              Let's build something
              <span> amazing.</span>
            </h3>

            <p>
              Whether you have a project idea, an
              opportunity, or simply want to connect,
              I'd be happy to hear from you.
            </p>


            {/* Contact details */}

            <div className="contact-details">

              {contactDetails.map((item) => (

                <a
                  href={item.link}
                  className="contact-detail"
                  key={item.title}
                >

                  <div className="contact-icon">
                    {item.icon}
                  </div>

                  <div>
                    <span>
                      {item.title}
                    </span>

                    <strong>
                      {item.value}
                    </strong>
                  </div>

                </a>

              ))}

            </div>


            {/* Social links */}

            <div className="contact-socials">

              <a
                href="https://www.linkedin.com/in/yogendra-kumar-1947a6386/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://github.com/YogendraKumar2518"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>

            </div>

          </motion.div>


          {/* ==================================
              RIGHT FORM
          =================================== */}

          <motion.form
            className="contact-form"
            initial={{
              opacity: 0,
              x: 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}

            onSubmit={(e) => {
              e.preventDefault();

              alert(
                "Thank you! Your message has been received."
              );
            }}
          >

            <div className="form-row">

              <div className="form-group">

                <label htmlFor="name">
                  Your Name
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  required
                />

              </div>


              <div className="form-group">

                <label htmlFor="email">
                  Your Email
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                />

              </div>

            </div>


            <div className="form-group">

              <label htmlFor="subject">
                Subject
              </label>

              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="What would you like to discuss?"
                required
              />

            </div>


            <div className="form-group">

              <label htmlFor="message">
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Write your message..."
                required
              ></textarea>

            </div>


            <motion.button
              type="submit"
              className="contact-submit"
              whileHover={{
                y: -3,
              }}
              whileTap={{
                scale: 0.97,
              }}
            >

              Send Message

              <FaArrowRight />

            </motion.button>

          </motion.form>

        </div>

      </div>

    </section>
  );
}

export default Contact;