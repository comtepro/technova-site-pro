import { useState, useEffect } from "react";
import { 
  FaPaperPlane, 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock,
  FaCheckCircle,
  FaUser,
  FaBuilding,
  FaGlobe,
  FaWhatsapp
} from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
    agreeToTerms: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);

  const services = [
    "Développement Web",
    "Application Web",
    "Site E-commerce",
    "Application Mobile",
    "Refonte de site",
    "Consulting IT",
    "Autre"
  ];

  const budgets = [
    "Moins de 1 000€",
    "1 000€ - 3 000€",
    "3 000€ - 5 000€",
    "5 000€ - 10 000€",
    "Plus de 10 000€",
    "À définir"
  ];

  const contactInfo = [
    {
      icon: <FaPhone />,
      title: "Téléphone",
      details: "+243 976 027 701",
      link: "tel:+243976027701",
      color: "bg-gradient-to-br from-green-500 to-emerald-500"
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      details: "mechackmambwe114@gmail.com",
      link: "mailto:mechackmambwe114@gmail.com",
      color: "bg-gradient-to-br from-blue-500 to-cyan-500"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Localisation",
      details: "Lubumbashi, République Démocratique du Congo",
      link: "https://maps.google.com/?q=Lubumbashi,RDC",
      color: "bg-gradient-to-br from-purple-500 to-pink-500"
    },
    {
      icon: <FaClock />,
      title: "Disponibilité",
      details: "Lun - Ven: 8h - 18h\nWeekend: Sur rendez-vous",
      color: "bg-gradient-to-br from-orange-500 to-yellow-500"
    }
  ];

  // Coordonnées GPS de Lubumbashi
  const lubumbashiCoords = {
    lat: -11.6876026,
    lng: 27.5026174,
    zoom: 13
  };

  useEffect(() => {
    // Chargement dynamique de l'API Google Maps
    if (!window.google) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDm6VBggh0OjtL_ZDbCIPbobB7WnqvUPA8&callback=initMap`;
      script.async = true;
      script.defer = true;
      window.initMap = initMap;
      document.head.appendChild(script);
    } else {
      initMap();
    }

    return () => {
      if (window.initMap) {
        delete window.initMap;
      }
    };
  }, []);

  const initMap = () => {
    if (!mapLoaded) {
      const map = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: lubumbashiCoords.lat, lng: lubumbashiCoords.lng },
        zoom: lubumbashiCoords.zoom,
        styles: [
          {
            "featureType": "all",
            "elementType": "geometry",
            "stylers": [{ "color": "#f5f5f5" }]
          },
          {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{ "color": "#c9c9c9" }]
          },
          {
            "featureType": "poi",
            "elementType": "labels",
            "stylers": [{ "visibility": "off" }]
          }
        ],
        disableDefaultUI: false,
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: true,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: true
      });

      // Marqueur personnalisé
      const marker = new window.google.maps.Marker({
        position: { lat: lubumbashiCoords.lat, lng: lubumbashiCoords.lng },
        map: map,
        title: "TECHNOVA - Lubumbashi",
        animation: window.google.maps.Animation.DROP,
        icon: {
          path: window.google.maps.SymbolPath.CIRCLE,
          scale: 10,
          fillColor: "#38bdf8",
          fillOpacity: 1,
          strokeColor: "#0f172a",
          strokeWeight: 2,
        }
      });

      // InfoWindow avec vos informations
      const infoWindow = new window.google.maps.InfoWindow({
        content: `
          <div style="padding: 10px; max-width: 250px;">
            <h3 style="margin: 0 0 8px 0; color: #0f172a;">TECHNOVA</h3>
            <p style="margin: 0 0 5px 0; color: #334155;">
              <strong>📍 Adresse:</strong><br>
              Lubumbashi, RDC
            </p>
            <p style="margin: 0 0 5px 0; color: #334155;">
              <strong>📞 Téléphone:</strong><br>
              +243 976 027 701
            </p>
            <p style="margin: 0; color: #334155;">
              <strong>✉️ Email:</strong><br>
              mechackmambwe114@gmail.com
            </p>
            <div style="margin-top: 10px;">
              <a href="https://maps.google.com/?q=Lubumbashi,RDC" 
                 target="_blank" 
                 style="color: #38bdf8; text-decoration: none;">
                Voir sur Google Maps →
              </a>
            </div>
          </div>
        `
      });

      marker.addListener('click', () => {
        infoWindow.open(map, marker);
      });

      // Ouvrir l'infowindow au chargement
      setTimeout(() => {
        infoWindow.open(map, marker);
      }, 1000);

      setMapLoaded(true);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulation d'envoi
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Réinitialisation après 5 secondes
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        fullName: "",
        email: "",
        company: "",
        phone: "",
        service: "",
        budget: "",
        message: "",
        agreeToTerms: false
      });
    }, 5000);
  };

  return (
    <section className="contact-section">
      {/* HERO SECTION */}
      <div className="contact-hero">
        <div className="contact-hero-content">
          <span className="badge">Discutons de votre projet</span>
          <h1 className="contact-title">
            Transformons vos <span className="gradient-text">idées</span> en réalité
          </h1>
          <p className="contact-subtitle">
            Un projet digital en tête ? Parlons-en ! Notre équipe est à votre écoute 
            pour concrétiser votre vision et créer des solutions sur mesure.
          </p>
        </div>
      </div>

      <div className="contact-container">
        {/* CONTACT INFO */}
        <div className="contact-info-section">
          <div className="contact-info-header">
            <h2 className="section-title">Comment nous contacter</h2>
            <p className="section-subtitle">
              Plusieurs façons de nous joindre pour discuter de votre projet
            </p>
          </div>

          <div className="contact-info-grid">
            {contactInfo.map((info, index) => (
              <div key={index} className="contact-info-card">
                <div className={`contact-info-icon ${info.color}`}>
                  {info.icon}
                </div>
                <div className="contact-info-content">
                  <h3>{info.title}</h3>
                  {info.link ? (
                    <a 
                      href={info.link} 
                      className="contact-info-details"
                      target={info.title === "Localisation" ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                    >
                      {info.details}
                    </a>
                  ) : (
                    <p className="contact-info-details">
                      {info.details.split('\n').map((line, i) => (
                        <span key={i}>
                          {line}
                          {i < info.details.split('\n').length - 1 && <br />}
                        </span>
                      ))}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* WHATSAPP CTA */}
          <div className="whatsapp-cta">
            <div className="whatsapp-content">
              <FaWhatsapp className="whatsapp-icon" />
              <div className="whatsapp-text">
                <h3>Réponse rapide via WhatsApp</h3>
                <p>Discutons en temps réel de votre projet</p>
              </div>
            </div>
            <a 
              href="https://wa.me/243976027701" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn whatsapp-btn"
            >
              Écrire sur WhatsApp
            </a>
          </div>

          {/* FAQ */}
          <div className="contact-faq">
            <h3>Questions fréquentes</h3>
            <div className="faq-list">
              <div className="faq-item">
                <h4>Quel est le délai moyen de réponse ?</h4>
                <p>Nous répondons sous 24 heures ouvrables à toutes les demandes.</p>
              </div>
              <div className="faq-item">
                <h4>Proposez-vous une consultation gratuite ?</h4>
                <p>Oui, nous offrons une première consultation gratuite de 30 minutes.</p>
              </div>
              <div className="faq-item">
                <h4>Travaillez-vous avec des clients internationaux ?</h4>
                <p>Absolument ! Nous collaborons avec des clients partout dans le monde.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CONTACT FORM */}
        <div className="contact-form-section">
          <div className="form-header">
            <h2 className="section-title">Envoyez-nous un message</h2>
            <p className="section-subtitle">
              Remplissez ce formulaire et nous vous recontacterons rapidement
            </p>
          </div>

          {isSubmitted ? (
            <div className="success-message">
              <FaCheckCircle className="success-icon" />
              <h3>Message envoyé avec succès !</h3>
              <p>
                Merci {formData.fullName}, nous avons bien reçu votre message. 
                Nous vous contacterons dans les plus brefs délais à l'adresse {formData.email}.
              </p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="btn secondary"
              >
                Envoyer un autre message
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="fullName">
                    <FaUser className="input-icon" />
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Votre nom et prénom"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="company">
                    <FaBuilding className="input-icon" />
                    Entreprise
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Nom de votre entreprise"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">
                    <FaEnvelope className="input-icon" />
                    Adresse email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="exemple@entreprise.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">
                    <FaPhone className="input-icon" />
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+243 XXX XXX XXX"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="service">
                    <FaGlobe className="input-icon" />
                    Service souhaité *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Sélectionnez un service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="budget">
                    Budget estimé
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                  >
                    <option value="">Sélectionnez un budget</option>
                    {budgets.map((budget, index) => (
                      <option key={index} value={budget}>{budget}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">
                  Votre message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Décrivez votre projet, vos objectifs et vos besoins spécifiques..."
                  rows="6"
                  required
                />
                <div className="char-counter">
                  {formData.message.length}/2000 caractères
                </div>
              </div>

              <div className="form-checkbox">
                <input
                  type="checkbox"
                  id="agreeToTerms"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="agreeToTerms">
                  J'accepte que mes données soient traitées conformément à la 
                  <a href="/privacy" className="privacy-link"> politique de confidentialité</a> *
                </label>
              </div>

              <div className="form-submit">
                <button 
                  type="submit" 
                  className="btn primary large submit-btn"
                  disabled={isSubmitting || !formData.agreeToTerms}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner"></span>
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="btn-icon" />
                      Envoyer mon message
                    </>
                  )}
                </button>
                <p className="form-note">
                  * Champs obligatoires. Nous vous répondrons sous 24h.
                </p>
              </div>
            </form>
          )}

          {/* PRIVACY NOTE */}
          <div className="privacy-note">
            <p>
              <strong>Protection de vos données :</strong> Vos informations sont sécurisées 
              et ne seront jamais partagées avec des tiers. Consultez notre 
              <a href="/privacy" className="privacy-link"> politique de confidentialité</a> 
              pour en savoir plus.
            </p>
          </div>
        </div>
      </div>

      {/* MAP SECTION */}
      <div className="map-section">
        <div className="map-header">
          <h2 className="section-title">Nous situer</h2>
          <p className="section-subtitle">
            Basés à Lubumbashi, nous travaillons avec des clients dans toute la RDC et à l'international
          </p>
        </div>
        
        {/* Carte Google Maps */}
        <div className="map-container">
          <div id="map" className="google-map"></div>
          {!mapLoaded && (
            <div className="map-loading">
              <div className="spinner"></div>
              <p>Chargement de la carte...</p>
            </div>
          )}
        </div>

        <div className="map-info">
          <div className="info-item">
            <h4>Zone de couverture</h4>
            <p>RDC et international - Travail à distance</p>
          </div>
          <div className="info-item">
            <h4>Déplacements</h4>
            <p>Possibilité de rendez-vous sur place dans le Grand Katanga</p>
          </div>
          <div className="info-item">
            <h4>Fuseau horaire</h4>
            <p>GMT+2 (Heure de Lubumbashi)</p>
          </div>
        </div>
      </div>

      {/* FINAL CTA */}
      <div className="contact-final-cta">
        <div className="cta-content">
          <h2 className="cta-title">
            Prêt à concrétiser votre projet digital ?
          </h2>
          <p className="cta-text">
            Contactez-nous dès aujourd'hui pour une consultation gratuite 
            et découvrez comment nous pouvons vous aider à atteindre vos objectifs.
          </p>
          <div className="cta-buttons">
            <a href="tel:+243976027701" className="btn primary large">
              <FaPhone className="btn-icon" />
              Appeler maintenant
            </a>
            <a 
              href="mailto:mechackmambwe114@gmail.com" 
              className="btn secondary large"
            >
              <FaEnvelope className="btn-icon" />
              Envoyer un email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}