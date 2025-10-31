import "./Home.css";

export const Home = () => {
  return (
    <main className="home">
      {/* HERO */}
      <section className="home-hero">
        <div className="home-hero__overlay" />
        <div className="container home-hero__content">
          <h1 className="home-hero__title">Descubrí el arte de perfumarte</h1>
          <p className="home-hero__subtitle">
            Fragancias únicas para momentos inolvidables
          </p>
        </div>
      </section>

      {/* NOSOTROS */}
      <section className="home-about">
        <div className="container">
          <div className="home-about__text reveal">
            <p className="lead">
              Desde <strong>AURUMA</strong> te acercamos perfumes exclusivos que evocan emociones y recuerdos,
              porque cada fragancia tiene una historia que contar.
            </p>
            <p>
              El nombre <strong>AURUMA</strong> nace de la fusión entre las palabras <em>aura</em> y <em>perfume</em>,
              evocando lo etéreo, lo personal e invisible que nos rodea. También hace eco del latín <em>aurum</em>,
              que significa “oro”, representando la calidad y el valor de cada esencia. Así, AURUMA simboliza la unión
              entre lo intangible de un aroma y la riqueza de una experiencia memorable.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="home-services">
        <div className="home-services__overlay" />
        <div className="container">
          <div className="cards reveal">
            {/* Card 1 */}
            <article className="card servicio-card">
              <div className="card__icon">
                <i className="bi bi-gem"></i>
              </div>
              <h3 className="card__title">Fragancias Personalizadas</h3>
              <p className="card__text">
                Seleccionamos fragancias únicas y te asesoramos para que encuentres el aroma que mejor
                represente tu estilo.
              </p>
              <div className="card__badges">
                <span className="badge">Aroma exclusivo</span>
                <span className="badge">Asesoramiento 1 a 1</span>
              </div>
            </article>
            {/* Card 2 */}
            <article className="card servicio-card">
              <div className="card__icon">
                <i className="bi bi-droplet"></i>
              </div>
              <h3 className="card__title">Experiencia Sensorial</h3>
              <p className="card__text">
                Probá nuestras fragancias antes de elegir y descubrí aromas que se adapten a tu personalidad.
              </p>
              <div className="card__badges">
                <span className="badge">Prueba previa</span>
                <span className="badge">Ajuste personal</span>
              </div>
            </article>
            {/* Card 3 */}
            <article className="card servicio-card">
              <div className="card__icon">
                <i className="bi bi-stars"></i>
              </div>
              <h3 className="card__title">Presentación Premium</h3>
              <p className="card__text">
                Cada producto se entrega con una presentación impecable, ideal para regalar o disfrutar con estilo.
              </p>
              <div className="card__badges">
                <span className="badge">Packaging elegante</span>
                <span className="badge">Listo para regalo</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* VIDEOS */}
      <section className="home-videos">
        <div className="container videos-grid">
          <div className="video">
            <iframe
              src="https://www.youtube.com/embed/9As3CYh7dkU?si=U0anExQFNfB-dv0r"
              title="Fragancias 1"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
          <div className="video">
            <iframe
              src="https://www.youtube.com/embed/MnQ-ghUd4z8?si=uNziwJ-iDtnToxe0"
              title="Fragancias 2"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      </section>
    </main>
  );
};
