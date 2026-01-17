import { FaRocket, FaUsers, FaAward, FaHandshake, FaLightbulb, FaChartLine } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function About() {
  const teamMembers = [
    {
      name: "Kanyembo Mambwe Mechack",
      role: "Fondateur & Lead Developer",
      expertise: "Full-Stack • React • Node.js • Cloud",
      bio: "Plus de 5 ans d'expérience dans le développement web et la stratégie digitale.",
      imageColor: "bg-gradient-to-br from-blue-500 to-cyan-400",
      linkedin: "https://www.linkedin.com/in/mechack-mambwe-3581a327b/",
      github: "https://github.com/mechackmambwe114@gmail.com"
    },
    {
      name: "Kipata kasongo Jonathan",
      role: "UX/UI Designer",
      expertise: "Figma • Adobe Suite • Design System",
      bio: "Spécialiste en expérience utilisateur et design d'interfaces modernes.",
      imageColor: "bg-gradient-to-br from-purple-500 to-pink-400",
      linkedin: "#",
      github: "#"
    },
    {
      name: "Francis tshibanda",
      role: "DevOps Engineer",
      expertise: "AWS • Docker • CI/CD • Sécurité",
      bio: "Expert en infrastructure cloud et automatisation des déploiements.",
      imageColor: "bg-gradient-to-br from-emerald-500 to-teal-400",
      linkedin: "#",
      github: "#"
    }
  ];

  const values = [
    {
      icon: <FaRocket />,
      title: "Innovation",
      description: "Nous adoptons les dernières technologies pour créer des solutions avant-gardistes."
    },
    {
      icon: <FaHandshake />,
      title: "Confiance",
      description: "Transparence et fiabilité dans toutes nos relations clients et partenaires."
    },
    {
      icon: <FaLightbulb />,
      title: "Excellence",
      description: "Recherche constante de la perfection technique et de la qualité optimale."
    },
    {
      icon: <FaChartLine />,
      title: "Croissance",
      description: "Nous accompagnons nos clients dans leur croissance digitale à long terme."
    }
  ];

  const stats = [
    { number: "50+", label: "Projets réalisés", suffix: "" },
    { number: "3", label: "Années d'expérience", suffix: "+" },
    { number: "95", label: "Taux de satisfaction", suffix: "%" },
    { number: "24/7", label: "Support technique", suffix: "" }
  ];

  return (
    <section className="about-section">
      {/* HERO SECTION */}
      <div className="about-hero">
        <div className="about-hero-content">
          <span className="badge">Notre Histoire</span>
          <h1 className="about-title">
            Donner vie à vos <span className="gradient-text">ambitions digitales</span>
          </h1>
          <p className="about-subtitle">
            TECHNOVA est bien plus qu'une agence web. Nous sommes votre partenaire 
            stratégique dans la transformation digitale, alliant expertise technique 
            et vision innovante pour propulser votre entreprise vers l'avenir.
          </p>
          <div className="about-hero-stats">
            {stats.map((stat, index) => (
              <div key={index} className="hero-stat">
                <div className="hero-stat-number">
                  {stat.number}<span className="stat-suffix">{stat.suffix}</span>
                </div>
                <div className="hero-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="about-hero-visual">
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
        </div>
      </div>

      {/* MISSION SECTION */}
      <div className="mission-section">
        <div className="mission-content">
          <div className="mission-header">
            <FaRocket className="mission-icon" />
            <h2 className="mission-title">Notre Mission</h2>
          </div>
          <p className="mission-text">
            Transformer les défis numériques des entreprises en opportunités de croissance 
            grâce à des solutions technologiques sur mesure. Nous croyons que chaque entreprise 
            mérite une présence digitale exceptionnelle qui reflète son potentiel.
          </p>
          <div className="mission-highlights">
            <div className="highlight-item">
              <div className="highlight-icon">🚀</div>
              <h4>Accélérer l'innovation</h4>
              <p>Mettre la technologie au service de votre croissance</p>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon">🛡️</div>
              <h4>Garantir la sécurité</h4>
              <p>Protéger vos données et votre réputation en ligne</p>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon">📈</div>
              <h4>Optimiser les performances</h4>
              <p>Maximiser le ROI de vos investissements digitaux</p>
            </div>
          </div>
        </div>
      </div>

      {/* VALUES SECTION */}
      <div className="values-section">
        <div className="section-header">
          <h2 className="section-title">Nos Valeurs</h2>
          <p className="section-subtitle">
            Ces principes guident chacune de nos décisions et actions au quotidien
          </p>
        </div>
        <div className="values-grid">
          {values.map((value, index) => (
            <div key={index} className="value-card">
              <div className="value-icon-wrapper">
                <div className="value-icon">
                  {value.icon}
                </div>
              </div>
              <h3 className="value-title">{value.title}</h3>
              <p className="value-description">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* TEAM SECTION */}
      <div className="team-section">
        <div className="section-header">
          <h2 className="section-title">Notre Équipe</h2>
          <p className="section-subtitle">
            Des passionnés de technologie dévoués à l'excellence et à l'innovation
          </p>
        </div>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <div className={`team-member-image ${member.imageColor}`}>
                <div className="team-member-initials">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
              </div>
              <div className="team-member-info">
                <h3 className="team-member-name">{member.name}</h3>
                <p className="team-member-role">{member.role}</p>
                <p className="team-member-expertise">{member.expertise}</p>
                <p className="team-member-bio">{member.bio}</p>
                <div className="team-member-social">
                  <a 
                    href={member.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link linkedin"
                    aria-label={`LinkedIn de ${member.name}`}
                  >
                    LinkedIn
                  </a>
                  <a 
                    href={member.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link github"
                    aria-label={`GitHub de ${member.name}`}
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="team-cta">
          <p className="team-cta-text">
            Vous souhaitez rejoindre notre équipe de passionnés ?
          </p>
          <Link to="/contact" className="btn secondary">
            Postuler maintenant
            <FaUsers className="btn-icon" />
          </Link>
        </div>
      </div>

      {/* TIMELINE */}
      <div className="timeline-section">
        <h2 className="section-title">Notre Parcours</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-year">2021</div>
            <div className="timeline-content">
              <h3>Fondation de TECHNOVA_KMR</h3>
              <p>Début de notre aventure avec une vision claire : démocratiser l'excellence technique.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-year">2022</div>
            <div className="timeline-content">
              <h3>Premiers projets majeurs</h3>
              <p>Réalisation de 20+ projets pour des startups et PME en RDC et à l'international.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-year">2023</div>
            <div className="timeline-content">
              <h3>Expansion de l'équipe</h3>
              <p>Création d'une équipe pluridisciplinaire et diversification de nos services.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-year">2024</div>
            <div className="timeline-content">
              <h3>Innovation & Reconnaissance</h3>
              <p>Lancement de nouvelles solutions et reconnaissance par nos partenaires.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA SECTION */}
      <div className="about-cta">
        <div className="about-cta-content">
          <FaAward className="cta-icon" />
          <h2 className="cta-title">Prêt à écrire le prochain chapitre avec nous ?</h2>
          <p className="cta-text">
            Que vous soyez une startup ambitieuse ou une entreprise établie, 
            nous avons les compétences et la passion pour transformer vos idées en réalité.
          </p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn primary large">
              Discuter de votre projet
              <FaHandshake className="btn-icon" />
            </Link>
            <Link to="/realisations" className="btn secondary large">
              Voir nos réalisations
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}