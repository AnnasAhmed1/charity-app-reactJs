import React from "react";
import { P2, P3 } from "../helper/paragraph";
import { H2, H3 } from "../helper/heading";
const TestimonialCard = ({ text, head = true }) => {
  return (
    <div className="container/ testimonial-card">
      {head ? (
        <>
          <div className="subheading">
            <div className="horizontal-line"></div>
            <P2 text="Our Testimonials" color="light" center />
            <div className="horizontal-line"></div>
          </div>
          <H2 text="What People Say" color="light" center />
        </>
      ) : null}
      <div className="circle"></div>
      <div>
        <H3 text="Cameron Williamson" color="light" center />
        <P3 text="Founder" color="light" center />
      </div>
      <P2
        color="light"
        center
        fontWeight="500"
        text={
          text
            ? text
            : "Sea chub demoiselle whalefish zebra lionfish mud cat pelican eel. Minnow snoek icefish velvet-belly shark, California halibut round stingray northern sea robin. Southern grayling trout-perchSharksucker sea danio tilefish stingray deepwater stingray Sacramento splittail, Canthigaster rostrata."
        }
        style={{
          padding: "0 2%",
        }}
      />
    </div>
  );
};

export default TestimonialCard;
