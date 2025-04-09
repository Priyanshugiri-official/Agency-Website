import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const [sent, setSent] = useState(false);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    setSent(true);
    emailjs
      .sendForm("service_htdbque", "template_omqjxue", form.current, {
        publicKey: "Pp9D-54oLxjicbBJi",
      })
      .then(
        () => {
          if (
            window.confirm(
              "Thank you for contacting us . We will get back to you as soon as possible"
            ) === true
          ) {
            window.location.href = "/";
          } else {
            window.location.href = "/";
          }
        },
        (error) => {
          if (
            window.confirm(
              "Some error occured , sorry for the inconvenience caused ."
            ) === true
          ) {
            window.location.href = "/";
          } else {
            window.location.href = "/";
          }
        }
      );
  };
  return (
    <div className="contact tab" style={{ paddingTop: "15px" }}>
      <div className="h2 text-center">CONTACT US</div>
      <div className="contact-card" data-aos="fade-up">
        <form ref={form} onSubmit={sendEmail}>
          <div className="form-group">
            <label for="name">Full Name *</label>
            <div className="input">
              <i class="bi bi-person"></i>
              <input type="text" placeholder="Your Name" name="name" required />
            </div>
          </div>
          <div className="form-group">
            <label for="email">Email Address *</label>
            <div className="input">
              <i class="bi bi-envelope"></i>
              <input
                type="email"
                placeholder="Your Email"
                name="email"
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label for="phone">Phone Number *</label>
            <div className="input">
              <i class="bi bi-telephone"></i>
              <input
                type="tel"
                placeholder="Your Phone Number"
                name="phone"
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label for="message">Message *</label>
            <div className="input" style={{ alignItems: "baseline" }}>
              <i class="bi bi-chat-left-text"></i>
              <textarea
                placeholder="Your Message"
                rows="8"
                name="message"
              ></textarea>
            </div>
          </div>
          {sent === false ? (
            <button type="submit" className="btn">
              Submit
            </button>
          ) : (
            <img
              src={require("../images/loader.gif")}
              alt="load"
              width="40px"
              height="40px"
            />
          )}
          <div className="extra" data-aos="fade-right">
            <div className="h6 text-center" style={{ marginTop: "30px" }}>
              or
            </div>
            <br />
            <div className="h6 text-center">Email :- contact@fifthwave.in</div>
            <div className="h6 text-center">Contact :- +91 9310280167</div>
            <div
              className="h6 text-center"
              style={{
                marginTop: "30px",
                display: window.innerWidth > 900 ? "block" : "none",
              }}
            >
              or
            </div>
            <br />
            <span
              className="text-center social-img"
              style={{
                display: window.innerWidth > 900 ? "flex" : "none",
                justifyContent: "center",
                gap: "20px",
              }}
            >
              <div>
                <a href="https://www.instagram.com/fifthwave.in/">
                  <img
                    src={require("../images/instagram.png")}
                    alt="ig"
                    width="30px"
                  />
                </a>
              </div>
              <div>
                <a href="https://wa.me/9310280167">
                  <img
                    src={require("../images/whatsapp.png")}
                    alt="wp"
                    width="30px"
                  />
                </a>
              </div>
              <div>
                <a href="mailto:contact@fifthwave.in">
                  <img
                    src={require("../images/gmail.png")}
                    alt="gmail"
                    width="30px"
                  />
                </a>
              </div>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
