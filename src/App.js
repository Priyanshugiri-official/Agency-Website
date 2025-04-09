import React, { useEffect, useState } from "react";
import "./App.css";
import "./responsive.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import AOS from "aos";
import "aos/dist/aos.css";
import Portfolio from "./components/Portfolio";
// import Marquee from "./components/Marquee";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// import Theme from "./components/Theme";
import MobileNav from "./components/MobileNav";
import SocialBtns from "./components/SocialBtns";
// import Testimonials from "./components/Testimonials";
// import FounderCorner from "./components/FounderCorner";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
    AOS.refresh();
  }, []);
  const [theme, setTheme] = useState("light");
  const [mobile, setNav] = useState(false);
  const changeTheme = (i) => {
    setTheme(i);
  };
  const changeMob = (i) => {
    setNav(i);
  };
  if (theme === "dark") {
    document.body.style.backgroundColor = "#1c1c1c";
    document.body.style.color = "white";
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  }
  if (mobile === true) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
  return (
    <>
      <MobileNav mobile={mobile} theme={theme} changeMob={changeMob} />
      <Navbar
        theme={theme}
        changeMob={changeMob}
        mobile={mobile}
        changeTheme={changeTheme}
      />
      <div style={{ boxSizing: "border-box" }}>
        <SocialBtns changeTheme={changeTheme} theme={theme} />
      </div>
      <div id="home">
        <Hero theme={theme} />
      </div>
      <div id="service">
        <Services theme={theme} />
      </div>
      {/* <Marquee /> */}
      <div id="portfolio">
        <Portfolio />
      </div>
      <div id="pricing">
        <Pricing theme={theme} />
      </div>
      {/* <Testimonials /> */}
      {/* <Marquee /> */}
      {/* <FounderCorner /> */}
      <div id="contact">
        <Contact />
      </div>
      <Footer theme={theme} />

      {/* <Theme changeTheme={changeTheme} theme={theme} /> */}
    </>
  );
}

export default App;
