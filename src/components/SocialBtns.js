import React from "react";

const SocialBtns = () => {
  return (
    <div className="social-btns">
      <div
        onClick={() => {
          d;
        }}
      >
        <i class="bi bi-instagram"></i>
      </div>
      <div
        onClick={() => {
          window.location.href = "https://wa.me/9310280167";
        }}
      >
        <i class="bi bi-whatsapp"></i>
      </div>
      <div
        onClick={() => {
          window.location.href = "mailto:contact@fifthwave.in";
        }}
      >
        <i class="bi bi-envelope"></i>
      </div>
      <div
        onClick={() => {
          window.location.href = "tel:9310280167";
        }}
      >
        <i class="bi bi-telephone"></i>
      </div>
    </div>
  );
};

export default SocialBtns;
