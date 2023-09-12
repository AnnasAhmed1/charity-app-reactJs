import React from "react";
import SubHeading from "./subHeading";
import { H2 } from "../helper/heading";
import { P3 } from "../helper/paragraph";
import "../styles/component.css";
import ButtonComp from "../helper/button";

const AboutSection = () => {
  return (
    <section className="main-section about-section">
      <div className="combined-container">
        <div>
          <div>
            <img src={require("../assets/patch.png")} alt="" />
          </div>
        </div>
      </div>
      <div className="data-container">
        <SubHeading text="About us" />
        <H2 text="Your Support is Really Powerful​." />
        <P3
          text="The secret to happiness lies in helping others. Never
      underestimate the difference YOU can make in the
      lives of the poor, the abused and the helpless."
        />
        <ButtonComp text="Read More" />
      </div>
    </section>
  );
};

export default AboutSection;