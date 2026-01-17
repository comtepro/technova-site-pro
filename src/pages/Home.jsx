import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  FaArrowRight, 
  FaChartLine, 
  FaRocket, 
  FaShieldAlt, 
  FaCode,
  FaUsers,
  FaLightbulb,
  FaChevronLeft,
  FaChevronRight,
  FaCheckCircle,
  FaStar,
  FaPlay,
  FaPause
} from "react-icons/fa";
import { SiReact, SiNodedotjs, SiMongodb, SiTypescript } from "react-icons/si";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  // Images de fond pour le carousel
  const backgroundImages = [
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
  ];

  // Carousel testimonials
  const testimonials = [
    {
      id: 1,
      name: "David Mulongo",
      company: "Logistique Plus",
      role: "Directeur Technique",
      content: "TECHNOVA_KMR a transformé notre système de gestion en une solution moderne et efficace. Leur expertise technique est exceptionnelle.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
     
    },
    {
      id: 2,
      name: "Marc Kibwe",
      company: "DataVision Analytics",
      role: "CTO",
      content: "Le dashboard analytique développé par leur équipe nous permet de prendre des décisions en temps réel. Excellente collaboration.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    },
    

  ];

  // Technologies stack
  const technologies = [
    { icon: <SiReact />, name: "React", color: "text-cyan-400" },
    { icon: <SiNodedotjs />, name: "Node.js", color: "text-green-500" },
    { icon: <SiMongodb />, name: "MongoDB", color: "text-green-600" },
    { icon: <SiTypescript />, name: "TypeScript", color: "text-blue-500" },
    { icon: <FaCode />, name: "Next.js", color: "text-white" },
    { icon: <FaRocket />, name: "Express", color: "text-gray-300" }
  ];

  // Auto-play du carousel
  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay, backgroundImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + backgroundImages.length) % backgroundImages.length);
  };

  return (
    <div className="home-container">
      {/* HERO CAROUSEL AVEC BACKGROUND */}
      <section className="hero-carousel">
        {/* Background images */}
        {backgroundImages.map((image, index) => (
          <div 
            key={index}
            className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.9)), url(${image})` }}
          />
        ))}

        {/* Overlay content */}
        <div className="hero-content">
          <div className="hero-badge animate-pulse">
            <FaRocket className="badge-icon" />
            <span>Innovation & Performance</span>
          </div>
          
          <h1 className="hero-title animate-fade-up">
            <span className="gradient-text">Solutions digitales</span>
            <br />
            pour entreprises modernes
          </h1>
          
          <p className="hero-subtitle animate-fade-up delay-200">
            TECHNOVA_KMR accompagne les startups et entreprises dans leur 
            <span className="highlight"> transformation numérique</span>. 
            Nous créons des expériences digitales qui transforment vos idées en réalité.
          </p>
          <marquee><h3 className="hero-title animate-fade-up">
            <span className="gradient-text">Bienvenue<h2 className="hero-title animate-fade-up">
          </h2></span>
          </h3></marquee>
          
          <div className="hero-stats animate-fade-up delay-400">
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Projets réalisés</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">95%</span>
              <span className="stat-label">Satisfaction clients</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Support technique</span>
            </div>
          </div>
          
          <div className="hero-buttons animate-fade-up delay-600">
            <Link to="/contact" className="btn primary animate-pulse-hover">
              Demander un devis gratuit
              <FaArrowRight className="btn-icon" />
            </Link>
            <Link to="/services" className="btn secondary">
              Découvrir nos services
            </Link>
          </div>
 <span className="scroll-text">MKR</span>
          {/* Scroll indicator */}
          <div className="scroll-indicator animate-bounce">
            <span className="arrow-down">↓</span>
           
          </div>
        </div>

        {/* Carousel controls */}
        <div className="carousel-controls">
          <button className="control-btn prev" onClick={prevSlide} aria-label="Slide précédent">
            <FaChevronLeft />
          </button>
          
          <div className="carousel-indicators">
            {backgroundImages.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Aller au slide ${index + 1}`}
              />
            ))}
          </div>
          
          <button className="control-btn play-pause" onClick={() => setAutoPlay(!autoPlay)} aria-label={autoPlay ? "Pause carousel" : "Play carousel"}>
            {autoPlay ? <FaPause /> : <FaPlay />}
          </button>
          
          <button className="control-btn next" onClick={nextSlide} aria-label="Slide suivant">
            <FaChevronRight />
          </button>
        </div>
      </section>

      {/* TECHNOLOGIES SECTION */}
      <section className="technologies-section">
        <div className="section-header">
          <h2 className="section-title">
            Technologies <span className="accent">de pointe</span>
          </h2>
          <p className="section-subtitle">
            Nous maîtrisons les technologies modernes pour créer des solutions performantes et évolutives
          </p>
        </div>
        
        <div className="tech-grid">
          {technologies.map((tech, index) => (
            <div key={index} className="tech-card animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
              <div className={`tech-icon ${tech.color}`}>
                {tech.icon}
              </div>
              <h3 className="tech-name">{tech.name}</h3>
              <p className="tech-description">
                Développement d'applications modernes et performantes
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section id="features" className="features-section">
        <div className="features-header">
          <h2 className="section-title">
            Pourquoi choisir <span className="accent">TECHNOVA_KMR</span> ?
          </h2>
          <p className="section-subtitle">
            Une approche unique qui combine expertise technique 
            et vision stratégique pour vos projets digitaux.
          </p>
        </div>
        
        <div className="features-grid">
          <div className="feature-card animate-fade-up">
            <div className="feature-icon">
              <div className="icon-wrapper">
                <FaRocket />
              </div>
            </div>
            <h3>Développement rapide</h3>
            <p>
              Temps de mise sur marché optimisé grâce à nos 
              méthodologies agiles et technologies modernes.
            </p>
            <Link to="/services#development" className="feature-link">
              Voir nos solutions
              <FaArrowRight />
            </Link>
          </div>
          
          <div className="feature-card animate-fade-up delay-200">
            <div className="feature-icon">
              <div className="icon-wrapper">
                <FaShieldAlt />
              </div>
            </div>
            <h3>Sécurité renforcée</h3>
            <p>
              Applications sécurisées avec les dernières 
              normes de protection des données et certifications.
            </p>
            <Link to="/services#security" className="feature-link">
              Protéger votre entreprise
              <FaArrowRight />
            </Link>
          </div>
          
          <div className="feature-card animate-fade-up delay-400">
            <div className="feature-icon">
              <div className="icon-wrapper">
                <FaChartLine />
              </div>
            </div>
            <h3>Performance optimale</h3>
            <p>
              Sites web ultra-rapides et optimisés pour 
              améliorer l'expérience utilisateur et le SEO.
            </p>
            <Link to="/realisations" className="feature-link">
              Voir nos réalisations
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS CAROUSEL */}
      <section className="testimonials-section">
        <div className="section-header">
          <h2 className="section-title">
            Ils nous <span className="accent">font confiance</span>
          </h2>
          <h2 className="section-title">
            Découvrez <span className="accent">  les retours de nos clients satisfaits</span>
          </h2>
          <p className="section-subtitle">
           
          </p>
        </div>

        <div className="testimonials-carousel">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-header">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="testimonial-avatar"
                  loading="lazy"
                />
                <div className="testimonial-info">
                  <h3 className="testimonial-name">{testimonial.name}</h3>
                  <p className="testimonial-company">{testimonial.company}</p>
                  <p className="testimonial-role">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="star-icon" />
                ))}
              </div>
              
              <p className="testimonial-content">"{testimonial.content}"</p>
              
              <div className="testimonial-quote">
                <FaLightbulb className="quote-icon" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="process-section">
        <div className="process-bg"></div>
        <div className="section-header">
          <h2 className="section-title">
            Notre <span className="accent">Processus</span>
          </h2>
          <p className="section-subtitle">
            Une méthodologie éprouvée pour la réussite de votre projet
          </p>
        </div>

        <div className="process-steps">
          <div className="process-step">
            <div className="step-number">01</div>
            <div className="step-icon">
              <FaLightbulb />
            </div>
            <h3 className="step-title">Analyse & Conception</h3>
            <p className="step-description">
              Étude approfondie de vos besoins et conception de la solution
            </p>
          </div>

          <div className="process-step">
            <div className="step-number">02</div>
            <div className="step-icon">
              <FaCode />
            </div>
            <h3 className="step-title">Développement</h3>
            <p className="step-description">
              Création itérative avec validation continue et tests rigoureux
            </p>
          </div>

          <div className="process-step">
            <div className="step-number">03</div>
            <div className="step-icon">
              <FaCheckCircle />
            </div>
            <h3 className="step-title">Qualité & Tests</h3>
            <p className="step-description">
              Tests approfondis et optimisation des performances
            </p>
          </div>

          <div className="process-step">
            <div className="step-number">04</div>
            <div className="step-icon">
              <FaRocket />
            </div>
            <h3 className="step-title">Déploiement & Support</h3>
            <p className="step-description">
              Mise en production et support continu post-livraison
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta">
        <div className="cta-bg"></div>
        <div className="cta-content">
          <h2 className="cta-title">
            Prêt à transformer votre vision digitale ?
          </h2>
          <p className="cta-text">
            Contactez-nous pour une consultation gratuite et découvrez 
            comment nous pouvons faire passer votre projet au niveau supérieur.
          </p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn primary large glow-effect">
              Commencer mon projet
              <FaArrowRight className="btn-icon" />
            </Link>
            <a href="tel:+243976027701" className="btn secondary large">
              Appeler maintenant
            </a>
          </div>
          
          <div className="cta-stats">
            <div className="cta-stat">
              <span className="stat-number">24h</span>
              <span className="stat-label">Réponse garantie</span>
            </div>
            <div className="cta-stat">
              <span className="stat-number">100%</span>
              <span className="stat-label">Satisfaction</span>
            </div>
            <div className="cta-stat">
              <span className="stat-number">Gratuit</span>
              <span className="stat-label">Premier devis</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}