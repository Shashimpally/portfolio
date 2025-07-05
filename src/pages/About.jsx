// src/pages/About.jsx
import { motion } from "framer-motion"

export default function About() {
  const data = {
    intro:
      "Hi, I'm Mulakalapally Shashikumar. I'm a fresher with a strong interest in DevOps and cloud technologies. I've been learning and working with tools like Azure Cloud, Docker, Jenkins, Git, GitHub, and Linux. I'm really passionate about how DevOps helps teams work faster and more efficiently by automating processes and improving collaboration. I'm excited to start my career in this field, contribute to real-world projects, and keep growing my skills as I learn from experienced professionals.",
    skills: [
      "Azure Cloud",
      "DevOps",
      "Jenkins",
      "Docker",
      "Github Actions",
      "Git",
      "Linux",
      "CI/CD Pipelines",
    ],
    timeline: [
      {
        year: "2024",
        event:
          "Graduated with Bachelor's of Computer Science & Engineering from Scient Institute of Technology",
      },
      {
        year: "2025",
        event: "DevOps Internship , Azure Cloud",
      },
    ],
  }

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
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2 }}
        >
          About Me
        </motion.h2>

        <motion.p
          style={styles.intro}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {data.intro}
        </motion.p>

        {/* Resume Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{ textAlign: "center", marginBottom: "40px" }}
        >
          <a
            href="/Resume.pdf"
            download
            style={styles.resumeButton}
          >
            Download Resume
          </a>
        </motion.div>

        <motion.div
          style={styles.skills}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {data.skills.map((skill, index) => (
            <motion.div
              key={index}
              style={styles.skillItem}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>

        <div style={styles.timeline}>
          {data.timeline.map((item, index) => (
            <motion.div
              key={index}
              style={styles.timelineItem}
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 + index * 0.2 }}
            >
              <span style={styles.year}>{item.year}</span>
              <p>{item.event}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

const styles = {
  wrapper: {
    position: "relative",
    padding: "60px 20px",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    backgroundImage: 'url("/About.bgm.jpeg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    color: "#fff",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    zIndex: 0,
  },
  container: {
    maxWidth: "900px",
    width: "100%",
    position: "relative",
    zIndex: 1,
  },
  heading: {
    fontSize: "32px",
    fontWeight: "bold",
    marginBottom: "20px",
    textAlign: "center",
  },
  intro: {
    fontSize: "20px",
    lineHeight: "1.6",
    color: "#eee",
    marginBottom: "20px",
    textAlign: "center",
  },
  resumeButton: {
    display: "inline-block",
    padding: "10px 20px",
    backgroundColor: "#0077cc",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "6px",
    fontSize: "16px",
    fontWeight: "bold",
    transition: "background-color 0.3s",
  },
  skills: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "12px",
    marginBottom: "50px",
  },
  skillItem: {
    backgroundColor: "#444",
    color: "#fff",
    padding: "10px 18px",
    borderRadius: "20px",
    fontSize: "18px",
    fontWeight: "500",
    cursor: "default",
    boxShadow: "0 8px 20px rgba(243, 236, 236, 0.2)",
  },
  timeline: {
    borderLeft: "2px solid rgba(91, 88, 88, 0.3)",
    paddingLeft: "28px",
  },
  timelineItem: {
    marginBottom: "20px",
    color: "#ddd",
  },
  year: {
    fontWeight: "bold",
    marginRight: "10px",
    color: "var(--primary)",
  },
}
