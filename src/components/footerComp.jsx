import React, { useState } from "react";
import { H2, H3, H4 } from "../helper/heading";
import { P3 } from "../helper/paragraph";
import ButtonComp from "../helper/button";

// icons
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Link } from "react-router-dom";
import DoneIcon from "@mui/icons-material/Done";
import { Modal } from "antd";

const FooterComp = () => {
  const [isFooterModalOpen, setIsFooterModalOpen] = useState(false);
  const showModal = () => {
    setIsFooterModalOpen(true);
  };
  const handleCancel = () => {
    setIsFooterModalOpen(false);
  };
  return (
    <>
      <section
        style={{
          backgroundColor: "#ffffff",
        }}
        className="main-section "
      >
        <Modal
          centered
          open={isFooterModalOpen}
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
            <H2 text="THANKS FOR SUBSCRIBING" center />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "var(--primary)",
                borderRadius: "50%",
                // width:"80px",
                // height:"80px",
                padding: "10px",
              }}
            >
              <DoneIcon
                className="helper-h5"
                style={{
                  lineHeight: "0px",
                  color: "#ffffff",
                }}
              />
            </div>
          </div>
        </Modal>
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
        <div className="container/ main-section flex-responsive">
          <div>
            <Link to={"/"}>
              <img
                className="logo"
                src={require("../assets/logo_footer.png")}
                alt=""
              />
            </Link>
            <p className="rating">10k</p>
            <H3 color="light" text="Worldwide Client" />
            <H3 color="light" text="Already Connected" />
          </div>
          <div className="footer-details">
            <div>
              <H4 color="light" text="Quick Link" />
              <Link to={"/"}>
                <P3 color="textLight" text="Home" />
              </Link>
              <Link to={"/about"}>
                <P3 color="textLight" text="About us" />
              </Link>
              <Link to="/blog">
                <P3 color="textLight" text="Blog post" />
              </Link>
              {/* <P3 color="textLight" text="Photo gallery" /> */}
            </div>
            <div>
              <H4 color="light" text="Get In Touch" />
              <Link to={"/contact"}>
                <P3 color="textLight" text="Contact us" />
              </Link>
              {/* <Link>
                <P3 color="textLight" text="Our services" />
              </Link> */}
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
            <form
              onSubmit={(e) => {
                e.preventDefault();
                showModal();
              }}
            >
              <input type="email" placeholder="Enter Your Email" required />
              <ButtonComp text="Subscribe" thin hover={false} />
            </form>
            <P3
              color="textLight"
              text="Your email is safe with us,we don't spam."
            />
            <H4 color="light" text="Follow Me" />
            <div className="contact-icons">
              <Link to={"https://twitter.com/"} target="_blank">
                <TwitterIcon />
              </Link>
              <Link to={"https://www.instagram.com/"} target="_blank">
                <InstagramIcon />
              </Link>
              <Link to={"https://www.pinterest.com/"} target="_blank">
                <PinterestIcon />
              </Link>
              <Link to={"https://youtube.com/"} target="_blank">
                <YouTubeIcon />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterComp;
