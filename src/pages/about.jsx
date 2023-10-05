import React, { useEffect } from "react";
import AboutSection from "../components/aboutSection";
import CharitySection from "../components/charitySection";
import FeatureCard from "../components/featureCard";
import FooterComp from "../components/footerComp";
import Funfacts from "../components/funfacts";
import PageHead from "../components/pageHead";
import SubHeading from "../components/subHeading";
import TestimonialsSection from "../components/testimonialsSection";
import { scrollToSection } from "../config/function";
import { H2 } from "../helper/heading";
import "../styles/pages/about.css";

const About = () => {
  const featureData = [
    {
      image: "home",
      heading: "Food & Homeless charity",
      itemsCount: 2,
      coloured: true,
    },
    {
      image: "donation",
      heading: "Make a donation",
      itemsCount: 3,
    },
    {
      image: "donation",
      heading: "Non profit NGO",
      itemsCount: 4,
    },
  ];
  useEffect(() => {
    scrollToSection();
  }, []);
  return (
    <>
      <main className="about-main">
        <PageHead page="About Us" />
        <div className="container">
          <AboutSection />
          <CharitySection />
          <section className="main-section feature-section">
            <SubHeading text="About" />
            <H2 text="Our Features" />
            <div className="feature-container">
              {featureData?.map((feature, index) => {
                return (
                  <FeatureCard
                    key={index}
                    image={feature.image}
                    heading={feature.heading}
                    itemsCount={feature.itemsCount}
                    coloured={feature.coloured}
                  />
                );
              })}
            </div>
          </section>
          <Funfacts bgColor="rgba(195, 44, 62, 0.08)" />
          <section className="main-section gallery-section">
            <H2 text="Our Gallery" />
            <div>
              <div className="grey-container"></div>
              <div className="grey-container"></div>
              <div className="grey-container"></div>
            </div>
            <div>
              <div className="grey-container"></div>
              <div className="grey-container"></div>
              <div className="grey-container"></div>
              <div className="grey-container"></div>
            </div>
          </section>
        </div>
        <TestimonialsSection />
      </main>
      <FooterComp />
    </>
  );
};

export default About;
