import React from "react";
import SubHeading from "./subHeading";
import { H2 } from "../helper/heading";
import { P1, P3 } from "../helper/paragraph";
import "../styles/component.css";

const CharitySection = () => {
  return (
    <section className="main-section about-section flex-responsive">
      <div className="data-container">
        <SubHeading text="Welcome to Charity" />
        <H2 text="Let Us Come Together To Make a Difference" />
        <P3
          text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy tempor invidunt ut labore et dolore magna aliquyam
                erat, sed diam voluptua. At vero eos et accusam et justo."
        />
        <div className="charity-progress-container">
          <div>
            <P1 text="Donations" />
            <P3 text="75%" fontWeight="700" />
          </div>
          <div className="progress">
            <div
              style={{
                width: "75%",
              }}
            ></div>
          </div>
        </div>
        <div className="charity-progress-container">
          <div>
            <P1 text="Medical Help" />
            <P3 text="90%" fontWeight="700" />
          </div>
          <div className="progress">
            <div
              style={{
                width: "90%",
              }}
            ></div>
          </div>
        </div>
      </div>
      <div className="combined-container">
        <div>
          <div
            className="white-text-container"
            style={{
              backgroundColor: "#ffffff",
            }}
          >
            <ul>
              <li>Together, we're going to make the future</li>
              <li>children where we are able to fulfill all</li>
              <li>their requirements to keep them safe from withered world</li>
              <li>We have already stepped out and start changing the world</li>
              <li>Keeping safe them from war, inhumanity</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CharitySection;
