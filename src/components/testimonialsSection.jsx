import React from "react";
import { P1, P2, P3 } from "../helper/paragraph";
import { H2, H3 } from "../helper/heading";

const TestimonialsSection = () => {
  return (
    <section className="main-section testimonial-conatainer">
      <div className="container">
        <div className="subheading">
          <div class="horizontal-line"></div>
          <P2 text="Our Testimonials" color="light" center />
          <div class="horizontal-line"></div>
        </div>
        <H2 text="What People Say" color="light" center />
        <div className="circle"></div>
        <div>
          <H3 text="Cameron Williamson" color="light" center />
          <P3 text="Founder" color="light" center />
        </div>
        <P1
          color="light"
          center
          text="Sea chub demoiselle whalefish zebra lionfish mud cat pelican eel. Minnow snoek icefish velvet-belly shark, California
      halibut round stingray northern sea robin. Southern grayling trout-perchSharksucker sea
      danio tilefish stingray deepwater stingray Sacramento splittail, Canthigaster rostrata."
        />
      </div>
    </section>
  );
};

export default TestimonialsSection;
