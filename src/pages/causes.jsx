import React, { useEffect } from "react";
import PageHead from "../components/pageHead";
import SubHeading from "../components/subHeading";
import { H2 } from "../helper/heading";
import CauseCard from "../components/causeCard";
import "../styles/pages/causes.css";
import FooterComp from "../components/footerComp";
import { scrollToSection } from "../config/function";
const Causes = () => {
  const causeData = [
    {
      subHeading: "Medical",
      heading: "Donate for poor peoples treatment and medicine.",
      percentage: "60%",
      goal: "$1000",
      raised: "$600",
    },
    {
      subHeading: "Homeless",
      heading: "Children we work with",
      percentage: "85%",
      goal: "$1,0000",
      raised: "$8500",
    },
    {
      subHeading: "Education",
      heading: "Help For Education",
      percentage: "90%",
      goal: "$10,000",
      raised: "$9,000",
    },
    {
      subHeading: "Food",
      heading: "Help For Food",
      percentage: "75%",
      goal: "$2,000",
      raised: "$1,500",
    },
    {
      subHeading: "Medical",
      heading: "Donate for poor peoples treatment and medicine.",
      percentage: "60%",
      goal: "$1000",
      raised: "$600",
    },
    {
      subHeading: "Homeless",
      heading: "Children we work with",
      percentage: "85%",
      goal: "$1,0000",
      raised: "$8500",
    },
    {
      subHeading: "Education",
      heading: "Help For Education",
      percentage: "90%",
      goal: "$10,000",
      raised: "$9,000",
    },
    {
      subHeading: "Food",
      heading: "Help For Food",
      percentage: "75%",
      goal: "$2,000",
      raised: "$1,500",
    },
  ];
  useEffect(() => {
    scrollToSection();
  }, []);
  return (
    <>
      <main className="causes-main">
        <PageHead page="Our Causes" />
        <section className="container main-section">
          <SubHeading text="Latest Causes" />
          <H2 text="Find the popular cause" />
          <H2 text="and donate them" />
          <div className="causes">
            {causeData.map((cause, index) => {
              return (
                <CauseCard
                  key={index}
                  subHeading={cause.subHeading}
                  heading={cause.heading}
                  percentage={cause.percentage}
                  goal={cause.goal}
                  raised={cause.raised}
                  imageButton={false}
                />
              );
            })}
          </div>
        </section>
      </main>
      <FooterComp />
    </>
  );
};
export default Causes;
