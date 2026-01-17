import { useState } from "react";

export default function ProjectsCarousel() {
  const projects = [
    {
      title: "Plateforme e-commerce",
      description:
        "Solution complète avec paiement en ligne et gestion des commandes.",
      tech: "React • Node • Stripe",
    },
    {
      title: "Application de gestion",
      description:
        "Gestion des stocks, utilisateurs et rapports pour PME.",
      tech: "React • API REST",
    },
    {
      title: "Site vitrine corporate",
      description:
        "Présence digitale moderne pour entreprise technologique.",
      tech: "Vite • React • CSS",
    },
    {
      title: "Dashboard analytique",
      description:
        "Visualisation des données en temps réel pour la prise de décision.",
      tech: "React • Charts",
    },
  ];

  const [index, setIndex] = useState(0);

  const next = () => {
    if (index < projects.length - 1) setIndex(index + 1);
  };

  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <div className="carousel-container">
      <button className="carousel-btn left" onClick={prev}>
        ‹
      </button>

      <div
        className="carousel-track"
        style={{ transform: `translateX(-${index * 320}px)` }}
      >
        {projects.map((project, i) => (
          <div className="carousel-card" key={i}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="carousel-tech">{project.tech}</div>
          </div>
        ))}
      </div>

      <button className="carousel-btn right" onClick={next}>
        ›
      </button>
    </div>
  );
}
