import React, { useEffect, useState } from "react";
import { P3 } from "../helper/paragraph";

const FactsCard = ({
  image,
  number = "",
  bottomText = "",
  bgColor = "rgba(37, 42, 52, 0.08)",
  percentage = "",
  animatedRef,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.bottom >= 0 &&
        rect.top <=
          (window.innerHeight || document.documentElement.clientHeight)
      );
    }

    function handleScroll() {
      const factCard = document.getElementById("fact-card"); // Replace with your card's ID
      if (isElementInViewport(factCard)) {
        if (!isVisible) {
          setIsVisible(true);
        }
      } else {
        if (isVisible) {
          setIsVisible(false); // Reset the animation when the section becomes inactive
        }
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isVisible]); // Add isVisible to the dependency array to watch for changes

  const divStyle = {
    animation: isVisible ? "fill-3 1s ease-in-out" : "none",
    transform: isVisible ? `rotate(${(percentage / 100) * 180}deg)` : "none",
  };
  const keyframesStyle = `
  @keyframes fill-3 {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(${(percentage / 100) * 180}deg);
    }
  }
`;
  return (
    <div
      style={{
        backgroundColor: bgColor,
      }}
      className="fact-card"
      id="fact-card"
    >
      <div className="circle-wrap">
        <div className="circle">
          <div style={divStyle} className="mask full-3">
            <style>{keyframesStyle}</style>
            <div style={divStyle} className="fill-3">
              <style>{keyframesStyle}</style>
            </div>
          </div>
          <div className="mask half">
            <div style={divStyle} className="fill-3">
              <style>{keyframesStyle}</style>
            </div>
          </div>
          <div
            style={{
              padding: "25px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className="inside-circle"
          >
            <img
              style={{
                width: "100%",

                // position:"absolute",
                // top:"0px",
                // bottom:"0px",
              }}
              src={require(`../assets/${image}.png`)}
              alt=""
            />
          </div>
        </div>
      </div>
      <h1>{number}</h1>
      <P3 text={bottomText} center />
    </div>
  );
};

export default FactsCard;
