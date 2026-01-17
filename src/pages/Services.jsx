import { useState, useEffect } from "react";
import { 
  FaCode, 
  FaMobileAlt, 
  FaDatabase, 
  FaChartLine, 
  FaShieldAlt, 
  FaCloud, 
  FaRobot,
  FaChevronLeft,
  FaChevronRight,
  FaCheckCircle,
  FaArrowRight,
  FaRocket,
  FaUsers,
  FaLightbulb,
  FaCogs
} from "react-icons/fa";

// Images d'illustration (remplacez par vos vraies images)
const serviceImages = {
  web: [
    "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w-800&q=80",
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  ],
  app: [
    "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  ],
  system: [
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  ],
  consulting: [
    "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  ]
};

export default function Services() {
  const [activeService, setActiveService] = useState(0);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const services = [
    {
      id: 1,
      title: "Développement Web",
      description: "Création de sites web modernes, rapides et sécurisés avec les dernières technologies.",
      longDescription: "Nous concevons et développons des sites web sur mesure qui allient performance, design élégant et expérience utilisateur optimale. Nos solutions sont responsive, SEO-friendly et évolutives.",
      icon: <FaCode />,
      iconColor: "from-blue-500 to-cyan-500",
      features: [
        "Sites vitrine & corporate",
        "E-commerce & marketplaces",
        "Applications web complexes",
        "Intranets & extranets",
        "Refonte & optimisation"
      ],
      technologies: ["React", "Next.js", "Node.js", "TypeScript", "Tailwind CSS", "MongoDB"],
      imageKey: "web",
      projectsCount: 25,
      deliveryTime: "2-6 semaines"
    },
    {
      id: 2,
      title: "Applications Web",
      description: "Développement d'applications web performantes et scalables pour votre entreprise.",
      longDescription: "Nous créons des applications web robustes qui automatisent vos processus métiers et améliorent votre productivité. Solutions sur mesure avec interfaces intuitives.",
      icon: <FaMobileAlt />,
      iconColor: "from-purple-500 to-pink-500",
      features: [
        "Dashboards analytiques",
        "Systèmes de gestion",
        "Applications SaaS",
        "Interfaces administrateur",
        "APIs REST & GraphQL"
      ],
      technologies: ["React", "Vue.js", "Express", "PostgreSQL", "Firebase", "Docker"],
      imageKey: "app",
      projectsCount: 18,
      deliveryTime: "4-12 semaines"
    },
    {
      id: 3,
      title: "Systèmes Numériques",
      description: "Conception d'outils digitaux adaptés à vos besoins spécifiques et à votre croissance.",
      longDescription: "Nous développons des systèmes numériques complets qui transforment vos opérations et accélèrent votre croissance grâce à l'automatisation intelligente.",
      icon: <FaDatabase />,
      iconColor: "from-emerald-500 to-teal-500",
      features: [
        "CRM personnalisés",
        "ERP sur mesure",
        "Gestion de stocks",
        "Suivi de production",
        "Automatisation des tâches"
      ],
      technologies: ["Python", "Django", "React", "MySQL", "Redis", "AWS"],
      imageKey: "system",
      projectsCount: 15,
      deliveryTime: "6-16 semaines"
    },
    {
      id: 4,
      title: "Conseil IT",
      description: "Accompagnement stratégique et technique pour votre transformation digitale.",
      longDescription: "Notre expertise vous guide dans vos choix technologiques et vous aide à optimiser vos processus digitaux pour maximiser votre ROI.",
      icon: <FaChartLine />,
      iconColor: "from-orange-500 to-yellow-500",
      features: [
        "Audit technique",
        "Stratégie digitale",
        "Architecture système",
        "Formation d'équipe",
        "Support technique"
      ],
      technologies: ["Cloud Architecture", "DevOps", "Security", "Scalability", "Performance"],
      imageKey: "consulting",
      projectsCount: 32,
      deliveryTime: "À la demande"
    },
    {
      id: 5,
      title: "Sécurité & Infra",
      description: "Solutions de sécurité et infrastructure cloud pour protéger vos données.",
      longDescription: "Nous sécurisons vos applications et déployons des infrastructures cloud robustes et scalables pour assurer la disponibilité de vos services.",
      icon: <FaShieldAlt />,
      iconColor: "from-red-500 to-rose-500",
      features: [
        "Audit de sécurité",
        "Configuration serveur",
        "Monitoring 24/7",
        "Sauvegarde des données",
        "Plan de reprise"
      ],
      technologies: ["AWS", "Docker", "Kubernetes", "SSL/TLS", "Firewall", "CI/CD"],
      imageKey: "system",
      projectsCount: 12,
      deliveryTime: "2-4 semaines"
    },
    {
      id: 6,
      title: "Intelligence Artificielle",
      description: "Intégration d'IA et machine learning pour des solutions innovantes.",
      longDescription: "Nous intégrons l'intelligence artificielle à vos systèmes existants pour automatiser les décisions et extraire des insights de vos données.",
      icon: <FaRobot />,
      iconColor: "from-indigo-500 to-violet-500",
      features: [
        "Chatbots intelligents",
        "Analyse prédictive",
        "Reconnaissance d'images",
        "Traitement NLP",
        "Recommandations"
      ],
      technologies: ["Python", "TensorFlow", "PyTorch", "OpenAI API", "Computer Vision", "NLP"],
      imageKey: "consulting",
      projectsCount: 8,
      deliveryTime: "8-20 semaines"
    }
  ];

  const currentService = services[activeService];
  const currentImages = serviceImages[currentService.imageKey] || serviceImages.web;

  // Carousel auto-play
  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % currentImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [autoPlay, currentImages.length]);

  const nextImage = () => {
    setCarouselIndex((prev) => (prev + 1) % currentImages.length);
  };

  const prevImage = () => {
    setCarouselIndex((prev) => (prev - 1 + currentImages.length) % currentImages.length);
  };

  const nextService = () => {
    setActiveService((prev) => (prev + 1) % services.length);
    setCarouselIndex(0);
  };

  const prevService = () => {
    setActiveService((prev) => (prev - 1 + services.length) % services.length);
    setCarouselIndex(0);
  };

  const processSteps = [
    {
      step: 1,
      title: "Analyse & Conception",
      description: "Compréhension approfondie de vos besoins et conception de la solution",
      icon: <FaLightbulb />
    },
    {
      step: 2,
      title: "Développement",
      description: "Création itérative avec validation continue et tests rigoureux",
      icon: <FaCode />
    },
    {
      step: 3,
      title: "Qualité & Tests",
      description: "Tests approfondis et optimisation des performances",
      icon: <FaCheckCircle />
    },
    {
      step: 4,
      title: "Déploiement & Support",
      description: "Mise en production et support continu post-livraison",
      icon: <FaRocket />
    }
  ];

  return (
    <section className="services-section">
      {/* HERO SECTION */}
      <div className="services-hero">
        <div className="services-hero-content">
          <span className="badge">Nos Expertises</span>
          <h1 className="services-title">
            Des solutions <span className="gradient-text">digitales</span> sur mesure
          </h1>
          <p className="services-subtitle">
            Nous transformons vos idées en applications performantes grâce à notre expertise technique 
            et notre approche centrée sur vos objectifs business.
          </p>
          <div className="services-stats">
            <div className="stat-item">
              <div className="stat-number">100+</div>
              <div className="stat-label">Projets réalisés</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">15+</div>
              <div className="stat-label">Technologies maîtrisées</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Satisfaction client</div>
            </div>
          </div>
        </div>
      </div>

      {/* SERVICES NAVIGATION */}
      <div className="services-navigation">
        <div className="nav-container">
          <button className="nav-arrow prev" onClick={prevService} aria-label="Service précédent">
            <FaChevronLeft />
          </button>
          
          <div className="services-tabs">
            {services.map((service, index) => (
              <button
                key={service.id}
                className={`service-tab ${activeService === index ? 'active' : ''}`}
                onClick={() => {
                  setActiveService(index);
                  setCarouselIndex(0);
                }}
              >
                <div className="tab-icon">
                  {service.icon}
                </div>
                <span className="tab-title">{service.title}</span>
                <span className="tab-count">{service.projectsCount} projets</span>
              </button>
            ))}
          </div>
          
          <button className="nav-arrow next" onClick={nextService} aria-label="Service suivant">
            <FaChevronRight />
          </button>
        </div>
      </div>

      {/* MAIN SERVICE DETAILS */}
      <div className="service-details-section">
        <div className="service-details-container">
          {/* LEFT COLUMN - SERVICE INFO */}
          <div className="service-info">
            <div className="service-header">
              <div className={`service-icon ${currentService.iconColor}`}>
                {currentService.icon}
              </div>
              <div className="service-header-content">
                <h2 className="service-title">{currentService.title}</h2>
                <div className="service-meta">
                  <span className="meta-item">
                    <FaCogs className="meta-icon" />
                    {currentService.deliveryTime}
                  </span>
                  <span className="meta-item">
                    <FaCheckCircle className="meta-icon" />
                    {currentService.projectsCount} projets réalisés
                  </span>
                </div>
              </div>
            </div>

            <div className="service-description">
              <h3>Description détaillée</h3>
              <p>{currentService.longDescription}</p>
            </div>

            <div className="service-features">
              <h3>Ce que nous offrons</h3>
              <ul className="features-list">
                {currentService.features.map((feature, index) => (
                  <li key={index}>
                    <FaCheckCircle className="feature-icon" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="service-technologies">
              <h3>Technologies utilisées</h3>
              <div className="tech-tags">
                {currentService.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>

            <div className="service-cta">
              <a href="/contact" className="btn primary large">
                Discuter de ce service
                <FaArrowRight className="btn-icon" />
              </a>
              <a href="/realisations" className="btn secondary">
                Voir des exemples
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN - IMAGE CAROUSEL */}
          <div className="service-carousel">
            <div className="carousel-header">
              <h3>Projets réalisés</h3>
              <div className="carousel-controls">
                <button 
                  className="carousel-toggle"
                  onClick={() => setAutoPlay(!autoPlay)}
                  aria-label={autoPlay ? "Arrêter le carousel" : "Démarrer le carousel"}
                >
                  {autoPlay ? "⏸️" : "▶️"}
                </button>
                <span className="carousel-counter">
                  {carouselIndex + 1} / {currentImages.length}
                </span>
              </div>
            </div>

            <div className="carousel-container">
              <div className="carousel-track">
                {currentImages.map((image, index) => (
                  <div 
                    key={index}
                    className={`carousel-slide ${index === carouselIndex ? 'active' : ''}`}
                    style={{ backgroundImage: `url(${image})` }}
                  >
                    <div className="slide-overlay">
                      <span className="slide-label">
                        {currentService.title} - Projet {index + 1}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <button 
                className="carousel-btn prev"
                onClick={prevImage}
                aria-label="Image précédente"
              >
                <FaChevronLeft />
              </button>
              <button 
                className="carousel-btn next"
                onClick={nextImage}
                aria-label="Image suivante"
              >
                <FaChevronRight />
              </button>

              <div className="carousel-indicators">
                {currentImages.map((_, index) => (
                  <button
                    key={index}
                    className={`indicator ${index === carouselIndex ? 'active' : ''}`}
                    onClick={() => setCarouselIndex(index)}
                    aria-label={`Aller à l'image ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            <div className="carousel-caption">
              <p>
                Découvrez nos réalisations dans le domaine {currentService.title.toLowerCase()}. 
                Chaque projet est unique et adapté aux besoins spécifiques du client.
              </p>
              <a href="/realisations" className="view-all-link">
                Voir tous les projets
                <FaArrowRight />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* PROCESS SECTION */}
      <div className="process-section">
        <div className="section-header">
          <h2 className="section-title">Notre Processus</h2>
          <p className="section-subtitle">
            Une méthodologie éprouvée pour garantir la réussite de votre projet
          </p>
        </div>

        <div className="process-steps">
          {processSteps.map((step) => (
            <div key={step.step} className="process-step">
              <div className="step-number">{step.step}</div>
              <div className="step-icon">{step.icon}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
              <div className="step-line"></div>
            </div>
          ))}
        </div>
      </div>

      {/* ALL SERVICES GRID */}
      <div className="all-services-section">
        <div className="section-header">
          <h2 className="section-title">Tous nos services</h2>
          <p className="section-subtitle">
            Découvrez l'ensemble de notre offre pour répondre à tous vos besoins digitaux
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card-enhanced">
              <div className={`card-icon ${service.iconColor}`}>
                {service.icon}
              </div>
              <h3 className="card-title">{service.title}</h3>
              <p className="card-description">{service.description}</p>
              <div className="card-features">
                {service.features.slice(0, 3).map((feature, index) => (
                  <span key={index} className="card-feature">
                    <FaCheckCircle /> {feature}
                  </span>
                ))}
              </div>
              <div className="card-footer">
                <span className="project-count">
                  {service.projectsCount} projets
                </span>
                <a href={`/services#${service.id}`} className="card-link">
                  En savoir plus
                  <FaArrowRight />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA SECTION */}
      <div className="services-cta">
        <div className="cta-content">
          <div className="cta-icon">
            <FaUsers />
          </div>
          <h2 className="cta-title">Un projet en tête ? Parlons-en !</h2>
          <p className="cta-text">
            Notre équipe d'experts est à votre écoute pour analyser vos besoins 
            et vous proposer la solution la plus adaptée à vos objectifs.
          </p>
          <div className="cta-buttons">
            <a href="/contact" className="btn primary large">
              Obtenir un devis gratuit
              <FaArrowRight className="btn-icon" />
            </a>
            <a href="tel:+243976027701" className="btn secondary large">
              Nous appeler
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}