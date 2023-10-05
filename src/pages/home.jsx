import { HeartOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AboutSection from "../components/aboutSection";
import ArticlesSlider from "../components/articlesSlider";
import CauseCard from "../components/causeCard";
import CharitySection from "../components/charitySection";
import FooterComp from "../components/footerComp";
import Funfacts from "../components/funfacts";
import Navbar from "../components/navbar";
import SubHeading from "../components/subHeading";
import TestimonialsSection from "../components/testimonialsSection";
import { scrollToSection } from "../config/function";
import ButtonComp from "../helper/button";
import { H1, H2 } from "../helper/heading";
import { P1, P2, P3 } from "../helper/paragraph";
import "../styles/global.css";
import "../styles/pages/home.css";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
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
            alt="backgorund_lines"
          />
          <img
            src={require("../assets/patch.png")}
            className="absolute bg-image"
            alt="backgorund_pathc"
          />
          <Navbar home={true} />
          <Modal
            centered
            open={isModalOpen}
            onCancel={handleCancel}
            footer={false}
            className="modal"
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "20px 0px",
                gap: "20px",
              }}
            >
              <H2 text="THANKS FOR DONATE" center />
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "var(--primary)",
                  borderRadius: "50%",
                  padding: "10px",
                }}
              >
                <HeartOutlined
                  className="helper-h5"
                  style={{
                    lineHeight: "0px",
                    color: "var(--light)",
                  }}
                />
              </div>
            </div>
          </Modal>
          <div className="container ">
            <div className="home-head">
              <P1 text="Give Hope For Homeless" center color="light" />
              <H1
                text="Helping Each Other Can Make World Better"
                center
                color="light"
              />
              <H1 text="" center color="light" />
              <P2
                text="We Seek out world changers and difference makers around the globe,and equip them to fulfill their unique purpose."
                center
                color="light"
                fontWeight="400"
              />
              <P2 text="" center color="light" fontWeight="400" />
            </div>
            <div className="home-details flex-responsive">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  showModal();
                }}
              >
                <div>
                  <div>
                    <label htmlFor="name">Full Name</label>
                    <input required type="text" id="name" />
                  </div>
                  <div>
                    <label htmlFor="email">Email</label>
                    <input required type="email" id="email" />
                  </div>
                  <div>
                    <label htmlFor="cause">Select Cause</label>
                    <select required name="cause" id="cause">
                      <option>Educations</option>
                      <option>Educations</option>
                      <option>Educations</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="amount">Amount</label>
                    <select required name="amount" id="amount">
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
                        required
                      />
                      <label htmlFor="html">One Time</label>
                      <input
                        type="radio"
                        id="css"
                        name="fav_language"
                        value="CSS"
                        required
                      />
                      <label htmlFor="css">Monthly</label>
                      <input
                        type="radio"
                        id="javascript"
                        name="fav_language"
                        value="JavaScript"
                        required
                      />
                      <label htmlFor="javascript">Annualy</label>
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
                <Link to="tel:+920000000000">
                  <ButtonComp text="Call Us" />
                </Link>
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
            <Funfacts id="animation-section" />
          </section>
          <section className="main-section articles-section">
            <SubHeading text="Latest News" />
            <H2 text="Articel You May Read" />
            <ArticlesSlider />
          </section>
        </div>
      </main>
      <FooterComp />
    </>
  );
};

export default Home;
