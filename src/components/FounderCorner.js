import React from "react";

const FounderCorner = () => {
  return (
    <>
      <div className="founder">
        <div className="h2 text-center" style={{ paddingTop: "15px" }}>
          Founder
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <img
            src={require("../images/portrait-322470_640.jpg")}
            width="300px"
            height="400px"
          />
        </div>
      </div>
    </>
  );
};
export default FounderCorner;
