// src/pages/Home.jsx
import { useEffect, useState } from "react"
import { color, motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { Typewriter } from "react-simple-typewriter"

export default function Home() {
  const navigate = useNavigate()
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768)
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const data = {
    name: "Mulakalapally Shashi Kumar",
    title: "DevOps & Cloud Engineer",
    taglines: [
      "Azure Cloud",
      " DevOps",
      "Docker| Jenkins| Git| Github Actions| Linux| CI/Cd Pipelines",
    ],
    ctaText: "Projects",
    ctaTarget: "/projects",
    avatarURL: "/profile.jpg",
    backgroundURL: "/Background.jpg",
  }

  return (
    <div
      style={{
        ...styles.page,
        backgroundImage: `url(${data.backgroundURL})`,
      }}
    >
      <div style={styles.overlay}>
        <div
          style={{
            ...styles.container,
            flexDirection: isMobile ? "column" : "row",
            textAlign: isMobile ? "center" : "left",
          }}
        >
          {/* Left Side */}
          <motion.div
            style={{
              ...styles.left,
              paddingRight: isMobile ? "0" : "40px",
              paddingBottom: isMobile ? "30px" : "0",
            }}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              style={{
                ...styles.name,
                fontSize: isMobile ? "28px" : "42px",
              }}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Hi, I'm <span style={styles.highlight} >{data.name}</span>
            </motion.h1>

            <motion.h2
              style={{
                ...styles.title,
                fontSize: isMobile ? "20px" : "28px",
              }}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {data.title}
            </motion.h2>

            <motion.p
              style={{
                ...styles.tagline,
                fontSize: isMobile ? "16px" : "18px",
              }}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Typewriter
                words={data.taglines}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={50}
                deleteSpeed={30}
                delaySpeed={2000}
              />
            </motion.p>

            <motion.button
              style={{
                ...styles.button,
                width: isMobile ? "100%" : "auto",
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate(data.ctaTarget)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {data.ctaText}
            </motion.button>
          </motion.div>

          {/* Right Side */}
          <motion.div
            style={styles.right}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.img
              src={data.avatarURL}
              alt="avatar"
              style={{
                ...styles.avatar,
                width: isMobile ? "180px" : "240px",
                height: isMobile ? "180px" : "240px",
              }}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

const styles = {
  page: {
    minHeight: "100vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  overlay: {
    background: "rgba(255, 255, 255, 0.08)",
    backdropFilter: "blur(4px)",
    width: "100%",
    height: "100%",
    padding: "40px 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    display: "flex",
    maxWidth: "1200px",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
  },
  left: {
    flex: "1 1 500px",
  },
  right: {
    flex: "1 1 400px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    fontWeight: "bold",
    marginBottom: "10px",
  },
  highlight: {
    color: "white",
  },
  title: {
    color: "white",
    marginBottom: "16px",
  },
  tagline: {
    color: "#black",
    marginBottom: "28px",
    minHeight: "24px",
  },
  button: {
    backgroundColor: "#0077cc",
    color: "#faebd7",
    padding: "14px 28px",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    transition: "all 0.3s ease",
  },
  avatar: {
    borderRadius: "50%",
    objectFit: "cover",
    boxShadow: "0 8px 30px rgba(0, 0, 0, 0.15)",
  },
}
