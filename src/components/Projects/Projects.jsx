import "./Projects.css";

import restaurant from "../../assets/restaurant.png";
import customer from "../../assets/customer.png";
import delivery from "../../assets/delivery.png";
import admin from "../../assets/admin.png";

import add_product from "../../assets/add_product.png";
import dashboard from "../../assets/dashboard.png";
import price_fetch from "../../assets/price_fetch.png";
import email_notify from "../../assets/email_notify.png";

function Projects() {
  const projects = [
    {
      name: "Food Delivery Application",
      description:
        "A full-stack web application built with Spring Boot and React.js that enables customers to browse restaurants, place orders, and track deliveries while allowing restaurant owners and delivery agents to manage their tasks efficiently.",
      github: "https://github.com/SudhirYadavDev/Food-Delivery-Application",
      images: [delivery, restaurant, customer, admin],
    },
    {
      name: "Product Price Tracker",
      description:
        "A full-stack web application built with React.js and Spring Boot that tracks product prices from online stores using web scraping and sends email notifications when prices change or drop.",
      github: "https://github.com/SudhirYadavDev/price-tracker-app",
      images: [dashboard, email_notify, add_product, price_fetch],
    },
  ];

  return (
    <section id="projects" className="projects">
      <h1 className="project-page">Projects</h1>

      {projects.map((project, index) => (
        <div key={index} className="projects-container">
          <div className="project-card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View on GitHub
            </a>
          </div>

          <div className="projects-stack">
            {project.images.map((img, imgIndex) => (
              <img
                key={imgIndex}
                src={img}
                alt={`${project.name} ${imgIndex + 1}`}
                className={`project-image project-image-${imgIndex}`}
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Projects;
