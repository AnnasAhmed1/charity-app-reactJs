import React, { useEffect, useState } from "react";
import PageHead from "../components/pageHead";
import SubHeading from "../components/subHeading";
import { H2, H6 } from "../helper/heading";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import "../styles/pages/faq.css";
import { P3 } from "../helper/paragraph";
import FooterComp from "../components/footerComp";
import { scrollToSection } from "../config/function";

const Faq = () => {
  const [active, setActive] = useState(null);
  const faqs = [
    {
      question: "Make a difference in the life of a child",
      answer:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
    },
    {
      question: "Let's do the right thing now",
      answer:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
    },
    {
      question: "Can I donate anonymously?",
      answer:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
    },
    {
      question: "Join your hand with us for a better life",
      answer:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
    },
    {
      question: "How do I cancel my recurring donation?",
      answer:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
    },
  ];
  const help = [
    {
      icon: "support_icon",
      title: "Call Support",
      text: "We analyse your website’s structure, internal architecture & other key",
    },
    {
      icon: "chat_icon",
      title: "Chat with us",
      text: "We are well known within the industry for our technical capabilities",
    },
    {
      icon: "address_icon",
      title: "Address",
      text: "4517 Washington Ave. Manchester Kentucky 39495",
    },
  ];
  const handleActive = (index) => {
    if (index === active) {
      setActive(null);
    } else {
      setActive(index);
    }
  };
  useEffect(() => {
    scrollToSection();
  }, []);
  return (
    <>
      <main className="faq-main">
        <PageHead page="Frequently Asked Questions" subNav="FAQ" />
        <section
          style={{
            backgroundColor: "#252A3414",
            marginTop: "60px",
          }}
          className="main-section"
        >
          <div className="container">
            <SubHeading text="Have any Question?" />
            <H2 text="Frequently Asked Questions" />
            <div className="faq-container">
              <div className="image-container"></div>
              <ul className="faq">
                {faqs?.map((faq, index) => {
                  return (
                    <li
                      key={index}
                      className={`${active === index ? "faq-active" : null}`}
                    >
                      <h6
                        className="helper-h6 question"
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                        onClick={() => {
                          handleActive(index);
                        }}
                      >
                        {faq.question}
                        {active === index ? <RemoveIcon /> : <AddIcon />}
                      </h6>
                      <p
                        className={`answer ${
                          active === index ? "faq-active" : null
                        }`}
                      >
                        {faq.answer}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </section>
        <section className="main-section container">
          <H2 text="Still need help" />
          <p
            style={{
              color: "#555555",
            }}
            className="helper-p3"
          >
            We enjoy adapting our strategies to offer
            <br />
            every client the best solutions that are
            <br />
            at the forefront of the industry.
          </p>
          <div className="help-container">
            {help?.map((v, i) => {
              return (
                <div key={i}>
                  <div>
                    <img src={require(`../assets/${v.icon}.png`)} alt="" />
                  </div>
                  <H6 text={v.title} />
                  <P3 text={v.text} center />
                </div>
              );
            })}
          </div>
        </section>
      </main>
      <FooterComp />
    </>
  );
};

export default Faq;
