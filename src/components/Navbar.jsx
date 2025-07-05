import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
]

export default function Navbar() {
  const { pathname } = useLocation()
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)
  const [menuOpen, setMenuOpen] = useState(false)

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768)
    if (window.innerWidth > 768) setMenuOpen(false)
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const toggleMenu = () => setMenuOpen(prev => !prev)

  return (
    <nav style={styles.navbar}>
      {/* Logo and Title */}
      <div style={styles.logoContainer}>
        <img
          src="/Shashi.svg"
          alt="Shashikumar Logo"
          style={styles.logoImage}
        />
        <h1 style={styles.logoText}>Portfolio</h1>
      </div>

      {/* Hamburger Icon for Mobile */}
      {isMobile && (
        <div style={styles.hamburger} onClick={toggleMenu}>
          <div style={styles.bar}></div>
          <div style={styles.bar}></div>
          <div style={styles.bar}></div>
        </div>
      )}

      {/* Links */}
      <div
        style={{
          ...styles.linkGroup,
          ...(isMobile
            ? {
                ...styles.mobileMenu,
                display: menuOpen ? "flex" : "none",
              }
            : {}),
        }}
      >
        {links.map(link => (
          <Link
            key={link.to}
            to={link.to}
            style={{
              ...styles.link,
              ...(pathname === link.to ? styles.activeLink : {}),
            }}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  )
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 24px",
    backgroundColor: "#f2f2f2",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    position: "sticky",
    top: 0,
    zIndex: 999,
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  logoImage: {
    height: "40px",
    width: "40px",
  },
  logoText: {
    fontSize: "22px",
    fontWeight: "bold",
    margin: 0,
    color: "#333",
  },
  linkGroup: {
    display: "flex",
    gap: "16px",
  },
  link: {
    textDecoration: "none",
    color: "#555",
    fontWeight: "normal",
    padding: "8px 12px",
  },
  activeLink: {
    color: "#0077cc",
    fontWeight: "bold",
  },
  hamburger: {
    display: "flex",
    flexDirection: "column",
    cursor: "pointer",
    gap: "4px",
  },
  bar: {
    width: "24px",
    height: "3px",
    backgroundColor: "#333",
  },
  mobileMenu: {
    position: "absolute",
    top: "60px",
    right: "24px",
    backgroundColor: "#f2f2f2",
    flexDirection: "column",
    gap: "10px",
    padding: "12px",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
  },
}
