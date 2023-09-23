import React, { useState } from "react";
import FooterComp from "../components/footerComp";
import PageHead from "../components/pageHead";
import { H2, H3, H4, H5, H6 } from "../helper/heading";
import { P1, P3 } from "../helper/paragraph";
import ButtonComp from "../helper/button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import "../styles/pages/element.css";
const Element = () => {
  const faqs = [
    {
      question: "Collapse 01",
      answer:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
    },
    {
      question: "Collapse 02",
      answer:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
    },
    {
      question: "Collapse 03",
      answer:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
    },
  ];
  const [active, setActive] = useState(null);
  const handleActive = (index) => {
    if (index === active) {
      setActive(null);
    } else {
      setActive(index);
    }
  };
  return (
    <>
      <main className="element-main faq-main">
        <PageHead page="Element" />
        <div className="container">
          <section className="main-section">
            <H3
              text="This page demonstrate some basic elements and typography which you will use frequently
                within your blog. Make he text bold or make it italic. Why not bold and italic both at a
                time. Here is the link to Ghost website. Do you want to link a long text here how
                it looks in this theme."
              style={{
                color: "#555555",
              }}
            />
          </section>
          <section className="main-section">
            <H2 text="Heading Example" />
            <H5 text="H1 Heading48px" />
            <H2 fontWeight="700" text="H2 Headig39px" />
            <h3 className="heading-32px">H3 Heading32px</h3>
            <H6 fontWeight="700" text="H4 Heading25px" />
            <P1 text="H5 Heading20px" />
            <P3 text="H6 Heading16px" />
          </section>
          <section className="main-section">
            <H2 text="Paragraph" />
            <P3
              text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem"
              style={{
                color: "#555555",
              }}
            />
          </section>
          <section className="main-section">
            <H2 text="Ordered List" />
            <ol>
              <li
                style={{
                  color: "#555555",
                }}
              >
                Distant no me. A english nonsense.
              </li>
              <li
                style={{
                  color: "#555555",
                }}
              >
                Coloring book distillery fanny pack.
              </li>
              <li
                style={{
                  color: "#555555",
                }}
              >
                Poutine drinking vinegar bitters.
              </li>
              <li
                style={{
                  color: "#555555",
                }}
              >
                Indulged over english mars on.
              </li>
              <li
                style={{
                  color: "#555555",
                }}
              >
                We rewritten to as we our this not for on the he world.
              </li>
            </ol>
          </section>
          <section className="main-section">
            <H2 text="Unordered List" />
            <ul>
              <li
                style={{
                  color: "#555555",
                }}
              >
                Poutine drinking vinegar bitters.
              </li>
              <li
                style={{
                  color: "#555555",
                }}
              >
                Literally cred narwhal bitters wayfarers.
              </li>
              <li
                style={{
                  color: "#555555",
                }}
              >
                In see building an the
              </li>
              <li
                style={{
                  color: "#555555",
                }}
              >
                Be the hundreds beginnings, explains
              </li>
              <li
                style={{
                  color: "#555555",
                }}
              >
                Be sounded gentlemen, your eightypercent
              </li>
            </ul>
          </section>
          <section className="main-section">
            <H2 text="Emphasis" />
            <ol className="helper-p3">
              <li
                style={{
                  fontWeight: "700",
                }}
              >
                Bold text.
              </li>
              <li
                style={{
                  fontWeight: "400",
                }}
              >
                Normal weight text.
              </li>
              <li
                style={{
                  fontWeight: "400",
                  fontStyle: "italic",
                }}
              >
                Italic text.
              </li>
              <li
                style={{
                  fontWeight: "400",
                  textDecoration: "underline",
                }}
              >
                This text has a line underneath it.
              </li>
              <li
                style={{
                  fontWeight: "400",
                  textDecoration: "line-through",
                }}
              >
                This text has a line underneath it.
              </li>
            </ol>
          </section>
          <section className="main-section">
            <H2 text="Image" />
            <div className="grey-container"></div>
          </section>
          <section className="main-section">
            <H2 text="Button" />
            <div
              className="flex"
              style={{
                justifyContent: "start",
                gap: "20px",
              }}
            >
              <ButtonComp
                text="Donate now"
                style={{
                  padding: "16px 32px",
                }}
              />
              <ButtonComp
                text="Contact us"
                white
                style={{
                  border: "1px solid var(--primary)",
                }}
              />
              <ButtonComp text="Donate now" thin />
            </div>
          </section>
          <section className="main-section">
            <H2 text="Table" />
            <table>
              <tr>
                <th>First</th>
                <th>Last</th>
                <th>Handle</th>
              </tr>
              <tr>
                <td className="helper-p4">Row:1 Cell:1</td>
                <td className="helper-p4">Row:1 Cell:2</td>
                <td className="helper-p4">Row:1 Cell:3</td>
              </tr>
              <tr>
                <td className="helper-p4">Row:2 Cell:1</td>
                <td className="helper-p4">Row:2 Cell:2</td>
                <td className="helper-p4">Row:2 Cell:3</td>
              </tr>
              <tr>
                <td className="helper-p4">Row:3 Cell:1</td>
                <td className="helper-p4">Row:3 Cell:2</td>
                <td className="helper-p4">Row:3 Cell:3</td>
              </tr>
            </table>
          </section>
          <section
            className="main-section faq-container"
            style={{
              display: "block",
              marginTop: "0px",
            }}
          >
            <H2 text="Collapse" />
            <ul className="faq">
              {faqs?.map((faq, index) => {
                return (
                  <li
                    style={{
                      listStyle: "none",
                    }}
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
          </section>
          <section className="main-section">
            <H2 text="Video" />
            <div className="video-container">
              <div>
                <div>
                  <div>
                    <PlayArrowIcon />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <FooterComp />
    </>
  );
};

export default Element;
