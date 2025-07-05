// src/App.jsx
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"

export default function App() {
  return (
    <div style={styles.appContainer}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

const styles = {
  appContainer: {
    minHeight: "100vh",
    backgroundColor: "#fff",
    color: "#333",
    fontFamily: "Arial, sans-serif",
  },
}