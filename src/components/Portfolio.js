import React from "react";
const Portfolio = () => {
  return (
    <div className="portfolio tab" style={{ paddingTop: "15px" }}>
      <div className="h2 text-center">PORTFOLIO</div>
      <div className="portfolio-content">
        <div
          class="card2"
          data-aos="fade-right"
          // onClick={() => {
          //   window.open("https://divyankaskitchen.netlify.app", "_blank");
          // }}
        >
          <img src={require("../images/work3.png")} alt="portfolio" />
        </div>
        <div
          class="card2"
          data-aos="fade-left"
          // onClick={() => {
          //   window.open("https://0001cars.netlify.app", "_blank");
          // }}
        >
          <img src={require("../images/work1.png")} alt="portfolio" />
        </div>
        <div
          class="card2"
          data-aos="fade-right"
          // onClick={() => {
          //   window.open("https://flikeykart.netlify.app", "_blank");
          // }}
        >
          <img src={require("../images/work2.png")} alt="portfolio" />
        </div>
        <div class="card2" data-aos="fade-left">
          <img src={require("../images/work4.png")} alt="portfolio" />
        </div>
      </div>
      <div className="h5 text-center">and many more....</div>
    </div>
  );
};

export default Portfolio;
