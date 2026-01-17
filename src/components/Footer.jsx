import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* LOGO / DESCRIPTION */}
        <div className="footer-brand">
          <h2>TECHNOVA_KMR</h2>
          <p>
            Solutions numériques innovantes pour accompagner
            les entreprises dans leur transformation digitale.
            Nous créons des expériences web modernes, rapides
            et centrées sur l'utilisateur.
          </p>
        </div>

        {/* NAVIGATION RAPIDE */}
        <div className="footer-links">
          <h3>Navigation</h3>
          <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/about">À propos</Link></li>
            <li><Link to="/realisations">Réalisations</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* SERVICES */}
        <div className="footer-links">
          <h3>Services</h3>
          <ul>
            <li><a href="/services#web">Développement Web</a></li>
            <li><a href="/services#apps">Applications Web</a></li>
            <li><a href="/services#systems">Systèmes numériques</a></li>
            <li><a href="/services#consulting">Conseil IT</a></li>
          </ul>
        </div>
        
        {/* CONTACT */}
        <div className="footer-contact">
          <h3>Contact</h3>
          <div className="contact-info">
            <p className="email">
              <span className="icon">✉️</span>
              <a href="mailto:mechackmambwe114@gmail.com" className="contact-link">
                mechackmambwe114@gmail.com
              </a>
            </p>
            <p className="phone">
              <span className="icon">📱</span>
              <a href="tel:+243976027701" className="contact-link">
                +243 976 027 701
              </a>
            </p>
            <p className="location">
              <span className="icon">📍</span>
              Lubumbashi, RDC
            </p>
          </div>
          
          {/* RÉSEAUX SOCIAUX */}
          <div className="social-links">
            <a 
              href="https://www.linkedin.com/in/michack-mambwe-3581a327b/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="social-link"
            >
              LinkedIn
            </a>
            <span className="separator">•</span>
            <a 
              href="https://github.com/mechack114" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="social-link"
            >
              GitHub
            </a>
          </div>
        </div>

      </div>

      {/* COPYRIGHT & MENTIONS */}
      <div className="footer-bottom">
        <p>
          © {currentYear} TECHNOVA_KMR — Tous droits réservés
          <span className="separator">•</span>
          <Link to="/privacy" className="legal-link">Politique de confidentialité</Link>
          <span className="separator">•</span>
          <Link to="/terms" className="legal-link">Mentions légales</Link>
        </p>
        
        {/* CREDITS */}
        <p className="credits">
          Développé avec <span className="heart">🛡️</span> par Mechack Mambwe
        </p>
      </div>
    </footer>
  );
}