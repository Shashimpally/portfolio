// src/pages/Contact.jsx
import { motion } from "framer-motion";

const techBackgroundUrl = "/contact.jpeg";

export default function Contact() {
  return (
    <div style={styles.wrapper}>
      <div style={{ ...styles.backgroundOverlay, backgroundImage: `url(${techBackgroundUrl})` }} />

      <motion.div
        style={styles.container}
        initial={{ opacity: 0, scale: 0.95, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h2
          style={styles.heading}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Let's Connect
        </motion.h2>

        <div style={styles.infoSection}>
          <motion.p
            style={styles.infoText}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            📞 <strong>Phone:</strong>{" "}
            <a href="tel:+919505945617" style={styles.link}>
              +91 9505945617
            </a>
          </motion.p>
          <motion.p
            style={styles.infoText}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            📧 <strong>Email:</strong>{" "}
            <a href="mailto:mulakalapallyshashikumar@gmail.com" style={styles.link}>
              mulakalapallyshashikumar@gmail.com
            </a>
          </motion.p>
        </div>

        <motion.div
          style={styles.social}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {[
            {
              label: "LinkedIn",
              url: "https://www.linkedin.com/in/mulakalapally-shashi-kumar-911529366/",
            },
            {
              label: "GitHub",
              url: "https://github.com/Shashimpally",
            },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.socialLink}
              whileHover={{ scale: 1.1, color: "#005fa3" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {social.label}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

const styles = {
  wrapper: {
    position: "relative",
    padding: "100px 20px",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  backgroundOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    filter: "blur(8px) brightness(0.5)",
    zIndex: 0,
  },
  container: {
    zIndex: 1,
    maxWidth: "600px",
    width: "100%",
    background: "rgba(255, 255, 255, 0.15)",
    borderRadius: "16px",
    padding: "40px",
    boxShadow: "0 8px 40px rgba(0,0,0,0.2)",
    backdropFilter: "blur(16px)",
    WebkitBackdropFilter: "blur(16px)",
    color: "#fff",
    textAlign: "center",
  },
  heading: {
    fontSize: "32px",
    fontWeight: "700",
    marginBottom: "30px",
  },
  infoSection: {
    fontSize: "16px",
    lineHeight: "1.8",
    marginBottom: "30px",
    color: "#f0f0f0",
  },
  infoText: {
    marginBottom: "14px",
    fontSize: "17px",
  },
  link: {
    color: "#00aaff",
    textDecoration: "none",
    fontWeight: "bold",
    transition: "color 0.3s",
  },
  social: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "20px",
    marginTop: "10px",
  },
  socialLink: {
    color: "#ffffff",
    fontSize: "18px",
    textDecoration: "none",
    fontWeight: "600",
    transition: "all 0.3s ease-in-out",
  },
};
