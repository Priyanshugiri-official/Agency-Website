import React from "react";

const Pricing = ({ theme }) => {
  return (
    <div
      className={`pricing tab ${
        theme === "light" ? "pricing-light" : "pricing-dark"
      }`}
    >
      <div className="h2 text-center" data-aos="zoom-in">
        PRICING
      </div>
      <section class="card">
        <article data-aos="fade-right">
          <div class="article-wrapper">
            <figure>
              <img src={require("../images/graphic2.jpg")} alt="graphic" />
            </figure>
            <div
              class="article-body"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h2 className="text-center">GRAPHIC DESIGN</h2>
              <div className="h6 text-center">Starting from Rs 3999</div>
              <div
                className="btn"
                style={{ marginTop: "20px" }}
                onClick={(e) => {
                  e.preventDefault();
                  if (window.innerWidth > 900) {
                    window.scrollTo(0, 5860);
                  } else {
                    window.scrollTo(0, 7150);
                  }
                }}
              >
                Get Quote
              </div>
            </div>
          </div>
        </article>
        <article data-aos="fade-up">
          <div class="article-wrapper">
            <figure>
              <img src={require("../images/web2.jpg")} alt="website" />
            </figure>
            <div
              class="article-body"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h2 className="text-center">WEB DEVELOPMENT</h2>
              <div className="h6 text-center">Starting from Rs 8999</div>
              <div
                className="btn"
                style={{ marginTop: "20px" }}
                onClick={(e) => {
                  e.preventDefault();
                  if (window.innerWidth > 900) {
                    window.scrollTo(0, 5860);
                  } else {
                    window.scrollTo(0, 7150);
                  }
                }}
              >
                Get Quote
              </div>
            </div>
          </div>
        </article>

        <article data-aos="fade-left">
          <div class="article-wrapper">
            <figure>
              <img src={require("../images/digital2.jpg")} alt="digital" />
            </figure>
            <div
              class="article-body"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h2 className="text-center">DIGITAL MARKETING</h2>
              <div className="h6 text-center">Starting from Rs 19999</div>
              <div
                className="btn"
                style={{ marginTop: "20px" }}
                onClick={(e) => {
                  e.preventDefault();
                  if (window.innerWidth > 900) {
                    window.scrollTo(0, 5860);
                  } else {
                    window.scrollTo(0, 7150);
                  }
                }}
              >
                Get Quote
              </div>
            </div>
          </div>
        </article>

        <article data-aos="fade-left">
          <div class="article-wrapper">
            <figure>
              <img src={require("../images/20622.jpg")} alt="digital" />
            </figure>
            <div
              class="article-body"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h2 className="text-center">CINEMATOGRAPHY</h2>
              <div className="h6 text-center">Starting from Rs 9999</div>
              <div
                className="btn"
                style={{ marginTop: "20px" }}
                onClick={(e) => {
                  e.preventDefault();
                  if (window.innerWidth > 900) {
                    window.scrollTo(0, 5860);
                  } else {
                    window.scrollTo(0, 7150);
                  }
                }}
              >
                Get Quote
              </div>
            </div>
          </div>
        </article>

        <article data-aos="fade-left">
          <div class="article-wrapper">
            <figure>
              <img src={require("../images/3659166.jpg")} alt="digital" />
            </figure>
            <div
              class="article-body"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h2 className="text-center">APP DEVELOPMENT</h2>
              <div className="h6 text-center">Starting from Rs 14999</div>
              <div
                className="btn"
                style={{ marginTop: "20px" }}
                onClick={(e) => {
                  e.preventDefault();
                  if (window.innerWidth > 900) {
                    window.scrollTo(0, 5860);
                  } else {
                    window.scrollTo(0, 7150);
                  }
                }}
              >
                Get Quote
              </div>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Pricing;
