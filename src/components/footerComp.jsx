import React from "react";
import { H3, H4 } from "../helper/heading";
import { P3 } from "../helper/paragraph";
import ButtonComp from "../helper/button";

// icons
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const FooterComp = () => {
  return (
    <>
      <section
        style={{
          backgroundColor: "#ffffff",
        }}
        className="main-section "
      >
        <div className="logo-container container">
          <div>
            <img src={require("../assets/logotype.png")} alt="" />
          </div>
          <div>
            <img src={require("../assets/renew.png")} alt="" />
          </div>
          <div>
            <img src={require("../assets/globe.png")} alt="" />
          </div>
          <div>
            <img src={require("../assets/charity.png")} alt="" />
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="container/ main-section">
          <div>
            <img
              className="logo"
              src={require("../assets/logo_footer.png")}
              alt=""
            />
            <p className="rating">10k</p>
            <H3 color="light" text="Worldwide Client" />
            <H3 color="light" text="Already Connected" />
          </div>
          <div className="footer-details">
            <div>
              <H4 color="light" text="Quick Link" />
              <P3 color="textLight" text="Home" />
              <P3 color="textLight" text="About us" />
              <P3 color="textLight" text="Blog post" />
              <P3 color="textLight" text="Photo gallery" />
            </div>
            <div>
              <H4 color="light" text="Get In Touch" />
              <P3 color="textLight" text="Contact us" />
              <P3 color="textLight" text="Our services" />
            </div>
            <div>
              <H4 color="light" text="Address" />
              <P3
                color="textLight"
                text="2464 Royal Ln. Mesa, New Jersey 45463"
              />
            </div>
          </div>
          <div className="footer-newsletter">
            <H4 color="light" text="Newsletter" />
            <div>
              <input type="email" placeholder="Enter Your Email" />
              <ButtonComp text="Subscribe" thin />
            </div>
            <P3
              color="textLight"
              text="Your email is safe with us,we don't spam."
            />
            <H4 color="light" text="Follow Me" />
            <div className="contact-icons">
              <TwitterIcon />
              <InstagramIcon />
              <PinterestIcon />
              <YouTubeIcon />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterComp;
