import React from "react";

const Services = ({ theme }) => {
  return (
    <div
      className={`services tab ${
        theme === "light" ? "services-light" : "services-dark"
      }`}
    >
      <div className="h2 text-center" data-aos="zoom-in">
        SERVICES
      </div>
      <section class="card">
        <article data-aos="fade-right">
          <div class="article-wrapper">
            <figure>
              <img src={require("../images/graphic.jpg")} alt="graphic" />
            </figure>
            <div class="article-body">
              <h2 className="text-center">GRAPHIC DESIGN</h2>
              <p>
                <i class="bi bi-arrow-right"></i> Web Design
                <br />
                <i class="bi bi-arrow-right"></i> UI, UX design
                <br />
                <i class="bi bi-arrow-right"></i> Mobile app design
                <br />
                <i class="bi bi-arrow-right"></i> Logo Design
                <br />
                <i class="bi bi-arrow-right"></i> Brand Identity
                <br />
                <i class="bi bi-arrow-right"></i> Banner ad design
                <br />
                <i class="bi bi-arrow-right"></i> Poster design
                <br />
                <i class="bi bi-arrow-right"></i> T-shirt design
              </p>
            </div>
          </div>
        </article>
        <article data-aos="fade-up">
          <div class="article-wrapper">
            <figure>
              <img src={require("../images/web.jpg")} alt="website" />
            </figure>
            <div class="article-body">
              <h2 className="text-center">WEB DEVELOPMENT</h2>
              <p>
                <i class="bi bi-arrow-right"></i> Website development
                <br />
                <i class="bi bi-arrow-right"></i> Corporate website
                <br />
                <i class="bi bi-arrow-right"></i> Startup websites
                <br />
                <i class="bi bi-arrow-right"></i> Landing and promo sites
                <br />
                <i class="bi bi-arrow-right"></i> E-commerce
                <br />
                <i class="bi bi-arrow-right"></i> Wordpress development
                <br />
                <i class="bi bi-arrow-right"></i> Web apps development
                <br />
                <i class="bi bi-arrow-right"></i> Fixed price website
              </p>
            </div>
          </div>
        </article>

        <article data-aos="fade-left">
          <div class="article-wrapper">
            <figure>
              <img src={require("../images/digital.jpg")} alt="digital" />
            </figure>
            <div class="article-body">
              <h2 className="text-center">DIGITAL MARKETING</h2>
              <p>
                <i class="bi bi-arrow-right"></i> Website marketing strategy
                <br />
                <i class="bi bi-arrow-right"></i> Content marketing
                <br />
                <i class="bi bi-arrow-right"></i> PPC services
                <br />
                <i class="bi bi-arrow-right"></i> Social media marketing
                services
                <br />
                <i class="bi bi-arrow-right"></i> Search Engine Optimisation
                <br />
                <i class="bi bi-arrow-right"></i> Content Creation
                <br />
                <i class="bi bi-arrow-right"></i> Content Writing
              </p>
            </div>
          </div>
        </article>
        <article data-aos="fade-right">
          <div class="article-wrapper">
            <figure>
              <img src={require("../images/videographer.jpg")} alt="digital" />
            </figure>
            <div class="article-body">
              <h2 className="text-center">CINEMATOGRAPHY</h2>
              <p>
                <i class="bi bi-arrow-right"></i> Video shooting
                <br />
                <i class="bi bi-arrow-right"></i> Video editing
                <br />
                <i class="bi bi-arrow-right"></i> Photography
                <br />
                <i class="bi bi-arrow-right"></i> Photo editing
                <br />
                <i class="bi bi-arrow-right"></i> 2D/3D Animations
              </p>
            </div>
          </div>
        </article>
        <article data-aos="fade-up">
          <div class="article-wrapper">
            <figure>
              <img src={require("../images/1720.jpg")} alt="digital" />
            </figure>
            <div class="article-body">
              <h2 className="text-center">APP DEVELOPMENT</h2>
              <p>
                <i class="bi bi-arrow-right"></i> IOS App
                <br />
                <i class="bi bi-arrow-right"></i> Android App
                <br />
                <i class="bi bi-arrow-right"></i> Cross Platform App
                <br />
                <i class="bi bi-arrow-right"></i> Ecommerce App
                <br />
                <i class="bi bi-arrow-right"></i> Corporate App
              </p>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Services;
