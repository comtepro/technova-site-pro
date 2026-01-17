import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  FaRocket, 
  FaHome,
  FaBriefcase,
  FaUserTie,
  FaProjectDiagram,
  FaPhone,
} from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Detect scroll for navbar effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navItems = [
    { path: "/", label: "Accueil", icon: <FaHome /> },
    { path: "/services", label: "Services", icon: <FaBriefcase /> },
    { path: "/about", label: "À propos", icon: <FaUserTie /> },
    { path: "/realisations", label: "Réalisations", icon: <FaProjectDiagram /> },
    { path: "/contact", label: "Contact", icon: <FaPhone /> },
  ];

  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        {/* Logo */}
        <Link to="/" className="logo">
          <div className="logo-icon">
            <FaRocket />
          </div>
          <span className="logo-text">TECHNOVA</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          {navItems.map((item) => (
            <Link 
              key={item.path}
              to={item.path}
              className={`nav-link ${isActive(item.path) ? 'active' : ''}`}
              aria-current={isActive(item.path) ? 'page' : undefined}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
              {isActive(item.path) && <span className="active-indicator" />}
            </Link>
          ))}
        </nav>
      </div>

    </header>
  );
}
