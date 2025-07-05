// src/pages/Projects.jsx
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A fully animated personal site built with React and Framer Motion.",
      tech: ["React", "Framer Motion", "JSX"],
      link: "https://yourportfolio.com",
    },
    {
      title: "E-commerce Store",
      description: "Responsive store with cart & product pages.",
      tech: ["React", "Redux", "Firebase"],
      link: "https://mystore.com",
    },
  ];

  return (
    <div style={styles.wrapper}>
      <div style={styles.overlay} />
      <motion.div
        style={styles.container}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          style={styles.heading}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          My Projects
        </motion.h2>

        <motion.div
          style={styles.grid}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              style={styles.card}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.03, rotate: 0.3 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <h3 style={styles.title}>{project.title}</h3>
              <p style={styles.description}>{project.description}</p>
              <div style={styles.techList}>
                {project.tech.map((tech, i) => (
                  <motion.span
                    key={i}
                    style={styles.tech}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 250 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
              <motion.a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                style={styles.link}
                whileHover={{ x: 4 }}
              >
                View Project →
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

const styles = {
  wrapper: {
    position: "relative",
    minHeight: "100vh",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1950&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    padding: "80px 20px",
    display: "flex",
    justifyContent: "center",
  },
  overlay: {
    position: "absolute",
    inset: 0,
    backgroundColor: "rgba(10, 10, 10, 0.75)",
    zIndex: 1,
  },
  container: {
    position: "relative",
    zIndex: 2,
    width: "100%",
    maxWidth: "1100px",
    textAlign: "center",
  },
  heading: {
    fontSize: "36px",
    fontWeight: "700",
    color: "white",
    marginBottom: "48px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "30px",
  },
  card: {
    background: "rgba(255, 255, 255, 0.08)",
    borderRadius: "20px",
    padding: "28px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.25)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    color: "white",
    textAlign: "left",
    transition: "all 0.3s ease",
  },
  title: {
    fontSize: "22px",
    fontWeight: "600",
    marginBottom: "12px",
  },
  description: {
    fontSize: "15px",
    marginBottom: "18px",
    color: "#ddd",
  },
  techList: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    marginBottom: "16px",
  },
  tech: {
    backgroundColor: "#00aaff",
    padding: "6px 14px",
    borderRadius: "20px",
    fontSize: "12px",
    fontWeight: "500",
    color: "#fff",
  },
  link: {
    fontSize: "14px",
    color: "#00ccff",
    fontWeight: "600",
    textDecoration: "none",
    display: "inline-block",
    transition: "all 0.3s ease",
  },
};
