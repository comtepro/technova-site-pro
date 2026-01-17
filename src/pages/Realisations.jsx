import { useState, useEffect, useCallback, useRef } from "react";
import { 
  FaArrowRight,
  FaExternalLinkAlt, 
  FaGithub, 
  FaShoppingCart, 
  FaChartBar, 
  FaBuilding, 
  FaDatabase,
  FaChevronLeft,
  FaChevronRight,
  FaPlay,
  FaPause,
  FaStar,
  FaEye,
  FaCode,
  FaMobileAlt,
  FaRocket
} from "react-icons/fa";

export default function Realisations() {
  const carouselRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [autoPlay, setAutoPlay] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Images réelles de projets
  const projectImages = {
    1: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
    ],
    2: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
    ],
    3: [
      "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
    ],
    4: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
    ],
    5: [
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
    ],
    6: [
      "https://images.unsplash.com/photo-1497636577773-f1231844b336?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
    ],
    7: [
       "https://i.imgur.com/pSE0xOv.jpeg"
        
    ],
    
  };

  const projects = [
    {
      id: 1,
      title: "Plateforme e-commerce",
      description: "Solution complète avec paiement en ligne sécurisé, gestion des stocks et interface administrateur avancée.",
      tech: ["React", "Node.js", "Stripe", "MongoDB", "Express"],
      category: "E-commerce",
      client: "FashionStore RDC",
      duration: "3 mois",
      results: "+200% de ventes en ligne",
      icon: <FaShoppingCart />,
      color: "from-purple-600 via-pink-500 to-rose-500",
      link: "#",
      github: "#",
      images: projectImages[1],
      rating: 5,
      visits: "15K+"
    },
    {
      id: 2,
      title: "Application de gestion",
      description: "Système de gestion intégré pour PME avec modules stocks, utilisateurs, facturation et rapports analytiques.",
      tech: ["React", "REST API", "PostgreSQL", "Tailwind CSS", "JWT"],
      category: "SaaS",
      client: "Logistique Plus",
      duration: "4 mois",
      results: "-40% de temps de gestion",
      icon: <FaDatabase />,
      color: "from-blue-600 via-cyan-500 to-teal-500",
      link: "#",
      github: "#",
      images: projectImages[2],
      rating: 5,
      visits: "8K+"
    },
    {
      id: 3,
      title: "Site vitrine corporate",
      description: "Présence digitale moderne avec design responsive, animations fluides et intégration CMS headless.",
      tech: ["Next.js", "TypeScript", "GraphQL", "Framer Motion", "Strapi"],
      category: "Corporate",
      client: "TechSolutions Inc.",
      duration: "2 mois",
      results: "+150% de leads générés",
      icon: <FaBuilding />,
      color: "from-emerald-600 via-teal-500 to-green-500",
      link: "#",
      github: "#",
      images: projectImages[3],
      rating: 5,
      visits: "25K+"
    },
    {
      id: 4,
      title: "Dashboard analytique",
      description: "Tableau de bord en temps réel avec visualisation de données, alertes intelligentes et export PDF/Excel.",
      tech: ["React", "D3.js", "Chart.js", "Node.js", "WebSocket"],
      category: "Analytics",
      client: "DataVision Analytics",
      duration: "3.5 mois",
      results: "Décisions 60% plus rapides",
      icon: <FaChartBar />,
      color: "from-orange-600 via-yellow-500 to-amber-500",
      link: "#",
      github: "#",
      images: projectImages[4],
      rating: 5,
      visits: "12K+"
    },
    {
      id: 5,
      title: "Application mobile",
      description: "Application cross-platform avec notifications push, géolocalisation et synchronisation offline.",
      tech: ["React Native", "Firebase", "Redux", "Mapbox", "Push Notifications"],
      category: "Mobile",
      client: "Delivery Express",
      duration: "5 mois",
      results: "+300% d'utilisateurs actifs",
      icon: <FaMobileAlt />,
      color: "from-red-600 via-rose-500 to-pink-500",
      link: "#",
      github: "#",
      images: projectImages[5],
      rating: 5,
      visits: "50K+"
    },
    {
      id: 6,
      title: "Portail étudiant",
      description: "Plateforme éducative avec cours en ligne, évaluations automatiques et suivi de progression.",
      tech: ["Vue.js", "Laravel", "MySQL", "WebRTC", "Docker"],
      category: "Education",
      client: "Université Digitale",
      duration: "6 mois",
      results: "95% de satisfaction étudiants",
      icon: <FaCode />,
      color: "from-indigo-600 via-violet-500 to-purple-500",
      link: "#",
      github: "#",
      images: projectImages[6],
      rating: 5,
      visits: "30K+"
    },
     {
      id: 7,
      title: "Portail étudiant soyez le bienvenue chez TECHNOVA_KMR",
      description: "Plateforme éducative avec cours en ligne,nous fournissons aussi de formation de plusieurs possibilté selon l'innovation.",
      tech: ["Vue.js","cordiale Bienvenue chez nous"],
      category: "Education",
      client: "Université Digitale",
      duration: "6 mois",
      results: "95% de satisfaction étudiants dans plusuers domaines de l'innovations",
      icon: <FaCode />,
      color: "from-indigo-600 via-violet-500 to-purple-500",
      link: "#",
      github: "https://github.com/mechack114",
      images: projectImages[7],
      rating: 5,
      visits: "30K+"
    }
  ];

  const categories = [
    { name: "Tous", icon: <FaRocket />, count: projects.length },
    { name: "E-commerce", icon: <FaShoppingCart />, count: 1 },
    { name: "SaaS", icon: <FaDatabase />, count: 1 },
    { name: "Corporate", icon: <FaBuilding />, count: 1 },
    { name: "Analytics", icon: <FaChartBar />, count: 1 },
    { name: "Mobile", icon: <FaMobileAlt />, count: 1 },
    { name: "Education", icon: <FaCode />, count: 1 }
  ];

  const filteredProjects = selectedCategory === "Tous" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    if (carouselRef.current) {
      setStartX(e.pageX - carouselRef.current.offsetLeft);
      setScrollLeft(carouselRef.current.scrollLeft);
    }
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      nextSlide();
    } else if (touchStart - touchEnd < -75) {
      prevSlide();
    }
  };

  const nextSlide = useCallback(() => {
    setCurrentIndex(prev => (prev + 1) % filteredProjects.length);
  }, [filteredProjects.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex(prev => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  }, [filteredProjects.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay, nextSlide]);

  return (
    <section className="realisations-section section-padding">
      {/* HERO SECTION */}
      <div className="realisations-hero hero">
        <div className="hero-content">
          <span className="badge animate-pulse">Portfolio Premium</span>
          <h1 className="hero-title">
            Nos <span className="gradient-text">Réalisations</span> Brillantes
          </h1>
          <p className="hero-subtitle">
            Découvrez nos projets phares qui ont transformé la présence digitale 
            de nos clients et démontrent notre expertise technique.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 xl:px-8">
        {/* CATEGORY FILTERS */}
        <div className="filters-section mb-12">
          <div className="filters-header">
            <h2 className="section-title">
              Filtrer par <span className="gradient-text">catégorie</span>
            </h2>
            <div className="auto-play-control">
              <button 
                onClick={() => setAutoPlay(!autoPlay)}
                className={`play-btn ${autoPlay ? 'playing' : ''}`}
                aria-label={autoPlay ? "Pause carousel" : "Play carousel"}
              >
                {autoPlay ? <FaPause /> : <FaPlay />}
                <span className="play-text">
                  {autoPlay ? "En lecture" : "En pause"}
                </span>
              </button>
            </div>
          </div>
          
          <div className="categories-scroll-container">
            <div className="categories-wrapper">
              {categories.map((cat) => (
                <button
                  key={cat.name}
                  onClick={() => {
                    setSelectedCategory(cat.name);
                    setCurrentIndex(0);
                  }}
                  className={`category-btn ${selectedCategory === cat.name ? 'active' : ''}`}
                >
                  <div className="category-icon">
                    {cat.icon}
                  </div>
                  <span className="category-name">{cat.name}</span>
                  <span className="category-count">{cat.count}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* MAIN CAROUSEL */}
        <div className="carousel-master">
          {/* PROJECT COUNTER */}
          <div className="project-counter">
            <div className="counter-display">
              <span className="counter-current">{currentIndex + 1}</span>
              <span className="counter-separator">/</span>
              <span className="counter-total">{filteredProjects.length}</span>
            </div>
            <span className="counter-label">
              {selectedCategory !== "Tous" ? `Projets ${selectedCategory}` : "Tous les projets"}
            </span>
          </div>

          {/* CAROUSEL CONTAINER */}
          <div className="carousel-wrapper">
            <button 
              className="carousel-nav-btn"
              onClick={prevSlide}
              aria-label="Projet précédent"
            >
              <FaChevronLeft />
            </button>

            <div 
              ref={carouselRef}
              className="carousel-container"
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div 
                className="carousel-track"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {filteredProjects.map((project) => (
                  <div className="carousel-slide" key={project.id}>
                    <div className="project-card">
                      {/* PROJECT IMAGE GALLERY */}
                      <div className="project-image">
                        <img 
                          src={project.images[0]} 
                          alt={project.title}
                          className="gallery-image"
                          loading="lazy"
                        />
                        <div className="project-overlay">
                          <div className="project-category">
                            <span className="category-icon">{project.icon}</span>
                            {project.category}
                          </div>
                          <span className="project-duration">{project.duration}</span>
                        </div>
                      </div>

                      {/* PROJECT DETAILS */}
                      <div className="project-content">
                        <div className="project-header">
                          <h3 className="project-title">{project.title}</h3>
                          <div className="project-client">
                            <span className="client-label">Client:</span>
                            <span className="client-name">{project.client}</span>
                          </div>
                        </div>
                        
                        <p className="project-description">{project.description}</p>

                        {/* TECH STACK */}
                        <div className="project-tech">
                          {project.tech.map((tech, i) => (
                            <span key={i} className="tech-tag">
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* RESULTS */}
                        <div className="project-results">
                          <div className="result-badge">
                            <span className="result-icon">🚀</span>
                            <span className="result-text">{project.results}</span>
                          </div>
                        </div>

                        {/* ACTION BUTTONS */}
                        <div className="project-links">
                          <a 
                            href={project.link} 
                            className="project-link primary"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaExternalLinkAlt />
                            Voir le projet
                          </a>
                          <a 
                            href={project.github} 
                            className="project-link secondary"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaGithub />
                            Code source
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button 
              className="carousel-nav-btn"
              onClick={nextSlide}
              aria-label="Projet suivant"
            >
              <FaChevronRight />
            </button>
          </div>

          {/* CAROUSEL INDICATORS */}
          <div className="carousel-indicators">
            {filteredProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`carousel-indicator ${index === currentIndex ? 'active' : ''}`}
                aria-label={`Aller au projet ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* PROJECTS GRID VIEW */}
        <div className="projects-grid-section section-padding">
          <div className="section-header">
            <h2 className="section-title">Tous nos projets</h2>
            <p className="section-subtitle">
              Explorez l'ensemble de notre portfolio
            </p>
          </div>
          
          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.id} className="project-card-mini">
                <div className="project-card-header">
                  <div className={`project-mini-icon ${project.color}`}>
                    {project.icon}
                  </div>
                  <span className="project-mini-category">{project.category}</span>
                </div>
                
                <div className="project-mini-image">
                  <img 
                    src={project.images[0]} 
                    alt={project.title}
                    loading="lazy"
                  />
                  <div className="project-mini-overlay">
                    <span className="project-mini-duration">{project.duration}</span>
                  </div>
                </div>
                
                <div className="project-mini-content">
                  <h3 className="project-mini-title">{project.title}</h3>
                  <p className="project-mini-description">{project.description.substring(0, 100)}...</p>
                  
                  <div className="project-mini-tech">
                    {project.tech.slice(0, 3).map((tech, i) => (
                      <span key={i} className="tech-tag-mini">{tech}</span>
                    ))}
                  </div>
                  
                  <div className="project-mini-footer">
                    <span className="project-mini-results">{project.results}</span>
                    <button className="project-mini-link">
                      <FaArrowRight />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* STATS SECTION */}
        <div className="stats-section section-padding">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">50+</div>
              <div className="stat-label">Projets livrés</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">100%</div>
              <div className="stat-label">Satisfaction client</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">15+</div>
              <div className="stat-label">Secteurs d'activité</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support technique</div>
            </div>
          </div>
        </div>

        {/* FINAL CTA */}
        <div className="realisations-cta cta-section">
          <div className="cta-content">
            <div className="cta-icon">
              <FaRocket />
            </div>
            <h2 className="cta-title">Prêt à réaliser votre projet digital ?</h2>
            <p className="cta-text">
              Contactez-nous pour discuter de vos besoins et obtenir un devis personnalisé 
              basé sur des projets similaires réalisés avec succès.
            </p>
            <div className="cta-buttons">
              <a href="/contact" className="btn primary large">
                Discuter de mon projet
                <FaArrowRight className="btn-icon" />
              </a>
              <a href="tel:+243976027701" className="btn secondary large">
                Appeler maintenant
              </a>
            </div>
            <div className="cta-guarantee">
              <FaStar className="guarantee-icon" />
              <span>Devis gratuit • Conseil expert • Support 24/7</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}