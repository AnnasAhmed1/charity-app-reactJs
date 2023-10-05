import React, { useEffect } from "react";
import PageHead from "../components/pageHead";
import FooterComp from "../components/footerComp";
import SubHeading from "../components/subHeading";
import { H2 } from "../helper/heading";
import ButtonComp from "../helper/button";
import "../styles/pages/contact.css";
import { P4 } from "../helper/paragraph";
import { scrollToSection } from "../config/function";

const Contact = () => {
  useEffect(() => {
    scrollToSection();
  }, []);
  return (
    <>
      <main className="contact-main">
        <PageHead page="Contact Us" />
        <section className="container main-section">
          <SubHeading text="Get in Touch" />
          <H2 text="Send Me a Message" />
          <div className="contact-container flex-responsive">
            <form action="">
              <div>
                <div>
                  <label className="helper-p3" htmlFor="fname">
                    First name
                  </label>
                  <input type="text" id="fname" placeholder="Your" />
                </div>
                <div>
                  <label className="helper-p3" htmlFor="lname">
                    Last name
                  </label>
                  <input type="text" id="lname" placeholder="Name" />
                </div>
                <div>
                  <label className="helper-p3" htmlFor="mail">
                    Mail
                  </label>
                  <input type="email" id="mail" placeholder="Your Email" />
                </div>
                <div>
                  <label className="helper-p3" htmlFor="phone">
                    Phone
                  </label>
                  <input type="text" id="phone" placeholder="+880" />
                </div>
              </div>
              <label className="helper-p3" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                rows={8}
                placeholder="Type your massage here..."
                style={{
                  resize: "none",
                }}
              />
              <ButtonComp text="Send Massage" />
            </form>
            <div>
              <H2 text="Address" />
              <P4
                style={{
                  color: "var(--customDarkGrey)",
                }}
                text="Quam elementum pulvinar etiam non quam lacus
            suspendisse.A scelerisque purus semper eget duis at
            Lobortisscelerisque fermentum dui faucibus in ornare...."
              />
              <p className="helper-p3">
                <b>Location</b> : 4517 Washington Ave. Manchester, Kentucky
                39495
              </p>
              <p className="helper-p3">
                <b>Phone</b> : +88544767456
              </p>
              <p className="helper-p3">
                <b>Email</b> : givelifecharity@gmail.com
              </p>
            </div>
          </div>
        </section>
      </main>
      <FooterComp />
    </>
  );
};

export default Contact;
