import React, { useEffect } from "react";
import "../styles/pages/home.css";
import "../styles/global.css";
import Navbar from "../components/navbar";
import { P1, P2, P3 } from "../helper/paragraph";
import { H1, H2, H3 } from "../helper/heading";
import ButtonComp from "../helper/button";
import SubHeading from "../components/subHeading";
import CauseCard from "../components/causeCard";
import FactsCard from "../components/factsCard";
import FooterComp from "../components/footerComp";
import ArticlesCard from "../components/articlesCard";
import CharitySection from "../components/charitySection";
import AboutSection from "../components/aboutSection";
import Funfacts from "../components/funfacts";
import TestimonialsSection from "../components/testimonialsSection";
import { scrollToSection } from "../config/function";

// 861
// 1059
// 1920

const Home = () => {
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
  ];

  const articlesData = [
    {
      name: "Esther Howard",
      date: "12 sep 2021",
      heading: "Charity, Expectations vs. Reality",
    },
    {
      name: "Jacob Jones",
      date: "22 Aug 2021 ",
      heading: "This Week's Top Stories About Charity",
    },
    {
      name: "Floyd Miles",
      date: "30 Jul 2021",
      heading: "Why You Should Focus on Charity",
    },
  ];
  useEffect(() => {
    scrollToSection();
  }, []);
  return (
    <>
      <main className="home-main">
        <section className="bgGray relative section1" id="top">
          <div className="trapezium absolute"></div>
          <img
            src={require("../assets/home_lines.png")}
            className="absolute bg-image"
            alt=""
          />
          <img
            src={require("../assets/patch.png")}
            className="absolute bg-image"
            alt=""
          />
          <Navbar home={true} />
          <div className="container ">
            <div className="home-head">
              <P1 text="Give Hope For Homeless" center color="light" />
              <H1 text="Helping Each Other" center color="light" />
              <H1 text="Can Make World Better" center color="light" />
              <P2
                text="We Seek out world changers and difference makers around the"
                center
                color="light"
                fontWeight="400"
              />
              <P2
                text="globe,and equip them to fulfill their unique purpose."
                center
                color="light"
                fontWeight="400"
              />
            </div>
            <div className="home-details">
              <form>
                <div>
                  <div>
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id="name" />
                  </div>
                  <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" />
                  </div>
                  <div>
                    <label for="cause">Select Cause</label>
                    <select name="cause" id="cause">
                      <option>Educations</option>
                      <option>Educations</option>
                      <option>Educations</option>
                    </select>
                  </div>
                  <div>
                    <label for="amount">Amount</label>
                    <select name="amount" id="amount">
                      <option>$ 5</option>
                      <option>$ 5</option>
                      <option>$ 5</option>
                    </select>
                  </div>
                  <div>
                    <p>Payment Type</p>

                    <div className="payment-radio-buttons">
                      <input
                        type="radio"
                        id="html"
                        name="fav_language"
                        value="HTML"
                      />
                      <label for="html">One Time</label>
                      <input
                        type="radio"
                        id="css"
                        name="fav_language"
                        value="CSS"
                      />
                      <label for="css">Monthly</label>
                      <input
                        type="radio"
                        id="javascript"
                        name="fav_language"
                        value="JavaScript"
                      />
                      <label for="javascript">Annualy</label>
                    </div>
                  </div>
                </div>
                <ButtonComp full text="Send Donation" />
              </form>
              <div>
                <H2 text="Need Help" color="light" />
                <P3
                  text="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
                  color="light"
                />
                <br />
                <ButtonComp text="Call Us" />
              </div>
            </div>
          </div>
        </section>
        <div className="container">
          <section className="main-section">
            <SubHeading text="Latest Causes" />
            <H2 text="Find The Popular Cause" />
            <H2 text="And Donate Them" />
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
                  />
                );
              })}
            </div>
          </section>
          <AboutSection />
          <CharitySection />
        </div>
        <TestimonialsSection />
        <div className="container">
          <section className="main-section facts-section">
            <SubHeading text="Our Fun Facts" />
            <H2 text="We Believe that We can Save" />
            <H2 text="More Lifes with you" />
            <Funfacts />
          </section>
          <section className="main-section articles-section">
            <SubHeading text="Latest News" />
            <H2 text="Articel You May Read" />
            <div className="articles-container">
              {articlesData?.map((article, index) => {
                return (
                  <ArticlesCard
                    key={index}
                    name={article.name}
                    date={article.date}
                    heading={article.heading}
                  />
                );
              })}
            </div>
          </section>
        </div>
      </main>
      <FooterComp />
    </>
  );
};

export default Home;
