import React, { useEffect, useState } from "react";
import PageHead from "../components/pageHead";
import FooterComp from "../components/footerComp";
import { H2, H6 } from "../helper/heading";
import PersonIcon from "@mui/icons-material/Person";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
// import PersonIcon from "@mui/icons-material/Person";
import "../styles/pages/blog.css";
import { P1, P2, P3, P4 } from "../helper/paragraph";
import TestimonialsSection from "../components/testimonialsSection";
import ButtonComp from "../helper/button";
import DonateModal from "../components/donateModal";
import { scrollToSection } from "../config/function";

const Donate = () => {
  const [open, setOpen] = useState(false);
  const categories = [
    {
      title: "Education",
      number: 3,
    },
    {
      title: "Food",
      number: 2,
    },
    {
      title: "Medical",
      number: 4,
    },
    {
      title: "Home",
      number: 5,
    },
    {
      title: "Water",
      number: 4,
    },
  ];
  const posts = [
    { title: "Charity, Expectations vs. Reality", category: "Homeless" },
    { title: "This Week’s Top Stories About....", category: "Medical" },
    { title: "Why You Should Focus on Charity", category: "Food" },
  ];

  const tags = [
    { title: "Food" },
    { title: "Medical" },
    { title: "Home" },
    { title: "Lifestyle" },
    { title: "Education" },
    { title: "Water" },
  ];
  useEffect(() => {
    scrollToSection();
  }, []);
  return (
    <>
      <main className="blog-main">
        <PageHead
          page="Donate For Poor Peoples Treatment And Medicine."
          subNav={"Donate"}
        />
        <DonateModal open={open} setOpen={setOpen} />
        <div className="container">
          <section className="main-section">
            <H2 text="Donating Poor People." />
            <div className="blog-container">
              <section>
                <div className="grey-container"></div>
                <div
                  style={{
                    width: "100%",
                    backgroundColor: "#252A3480",
                    display: "flex",
                    padding: "25px 50px",
                  }}
                >
                  <ButtonComp
                    text="Donate Now"
                    thin
                    onClick={() => {
                      setOpen(true);
                    }}
                  />
                </div>
                <div
                  style={{
                    backgroundColor: "#252A3414",
                    margin: "20px 0",
                    padding: "25px",
                  }}
                  className="progress-container"
                >
                  <div>
                    <P4 text="Donatone" />
                    <P4 text={"60%"} />
                  </div>
                  <div className="progressbar">
                    <div
                      style={{
                        width: "60%",
                      }}
                    ></div>
                  </div>
                  <div>
                    <P4 text={`Raised: $600`} />
                    <P4 text={`Goal: $1,000`} />
                  </div>
                </div>
                <div className="blog-text-container">
                  <H6 text="Donate for poor peoples treatment and medicine." />
                  <P3
                    text="Flyingfish Kafue pike cow shark California smoothtongue golden loach temperate ocean-bass gulper
                    Sailbearer kanyu porcupinefish Kafue pike opah sunfish gudgeon boga Asiatic glassfish tadpole fish!
                    Alewife, poacher airbreathing catfish; zebra tilapia northern pearleye naked-back knifefish pupfish
                    dojo loach, “snake mackerel bonytail chub arapaima horsefish weasel shark.”"
                    style={{
                      color: "#666666",
                    }}
                  />
                  <P3
                    text="Less time collecting water means more time in class. Clean water and proper toilets at school means
                    teenage girls don’t have to stay home for a week out of every month."
                    style={{
                      color: "#666666",
                    }}
                  />
                  <P3
                    text="Northern anchovy–bass yellowtail barracuda zander yellowfin grouper gurnard skipjack tuna shark
                    goby eulachon wobbegong. Nase combtail gourami amur pike flabby whalefish; darter, Blind
                    Eagle ray soapfish ocean sunfish filefish, barbel sandfish wolf-herring northern pike roach
                    barbelless catfish, Atlantic saury mackerel shark pike conger. Blind shark longfin smelt pearl 
                    bent-tooth eel stargazer grunion spookfish yellowtail Quillfish slickhead mora. Springfish
                    worm mackerel sockeye salmon banjo catfish toadfish sauger four-eyed fish"
                    style={{
                      color: "#666666",
                    }}
                  />
                </div>
                <div
                  style={{
                    marginBottom: "40px",
                  }}
                  className="grey-container"
                ></div>
                <div className="blog-text-container">
                  <H6 text="Challenge" />
                  <P3
                    text="Best quality only happens when you care enough to do your best. Steer companies away from risky
                    denounce with righteous indignation who are so beguiled and demoralized by pleasure of the"
                    style={{
                      color: "#666666",
                    }}
                  />
                  <P3
                    text="Flyingfish Kafue pike cow shark California smoothtongue golden loach temperate ocean-bass gulper
                    kanyu porcupinefish Kafue pike opah sunfish gudgeon boga Asiatic glassfish tadpole fish! Alewife
                    airbreathing catfish; zebra tilapia northern pearleye naked-back knifefish pupfish dojo loach.
                    mackerel bonytail chub arapaima horsefish weasel shark.”"
                    style={{
                      color: "#666666",
                    }}
                  />
                  <P3
                    text="Asian carps sailback scorpionfish; dragon goby lemon sole triplefin blenny hog sucker. Smelt sleeper
                    sturgeon merluccid hake cow shark herring smelt trout-perch barbeled houndshark. Shell-ear Asian
                    blackfish Port Jackson shark Atlantic saury. Sacramento blackfish pricklefish, Atlantic cod, “driftwood
                    catfish chimaera ribbonfish, marblefish worm eel smelt mora gray reef shark scabbard fish.”"
                    style={{
                      color: "#666666",
                    }}
                  />
                </div>
              </section>
              <section>
                <div className="blog-category-container">
                  <h6 className="helper-h6">
                    Category
                    <span className="half-unnderline-text"></span>
                  </h6>
                  <ul>
                    {categories?.map((category, index) => {
                      return (
                        <li key={index}>
                          <P2 text={category.title} fontWeight="400" />
                          <P3 text={`(${category.number})`} fontWeight="400" />
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="blog-category-container">
                  <h6 className="helper-h6">
                    Recent posts
                    <span className="half-unnderline-text"></span>
                  </h6>
                  <div>
                    {posts?.map((post, index) => {
                      return (
                        <div className="blog-post" key={index}>
                          <div className="grey-container"></div>
                          <div>
                            <P2 text={post.title} fontWeight="500" />
                            <P4 text={`${post.category}`} fontWeight="400" />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="blog-category-container">
                  <h6 className="helper-h6">
                    Popular tags
                    <span className="half-unnderline-text"></span>
                  </h6>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "20px",
                    }}
                  >
                    {tags?.map((tag, index) => {
                      return (
                        <P4
                          key={index}
                          text={`${tag.title}`}
                          fontWeight="400"
                          color="light"
                          style={{
                            backgroundColor: "var(--primary)",
                            padding: "2px 8px",
                          }}
                        />
                      );
                    })}
                  </div>
                </div>
              </section>
            </div>
            <section className="blog-login-section">
              <div>
                <P4 text="0 Comments" />
                <P4 text="themefisher" />
                <P4
                  text="Privacy Policy"
                  style={{
                    flex: 1,
                  }}
                />
                <P4 text="Login" />
              </div>
              <div>
                <p className="helper-p4">
                  <FavoriteBorderIcon style={{ color: "var(--primary)" }} />
                  Favorite
                </p>
                <p
                  className="helper-p4"
                  style={{
                    color: "var(--light)",
                    backgroundColor: "#01ACED",
                  }}
                >
                  <TwitterIcon />
                  Tweet
                </p>
                <p
                  className="helper-p4"
                  style={{
                    color: "var(--light)",
                    backgroundColor: "#3B5998",
                  }}
                >
                  <FacebookIcon />
                  Share
                </p>
                <p
                  style={{
                    flex: 1,
                  }}
                ></p>
                <P4 text="Sort by Best" />
              </div>
              <div
                style={{
                  gap: "10px",
                }}
              >
                <label htmlFor="discussion">
                  <PersonIcon
                    fontSize="large"
                    style={{
                      color: "var(--textLight)",
                      backgroundColor: "#eeeeee",
                    }}
                  />
                </label>
                <input
                  type="text"
                  id="discussion"
                  placeholder="Start the discussion"
                />
              </div>
              <div
                style={{
                  width: "90%",
                  marginLeft: "auto",
                }}
              >
                <P4 text="LOGIN WITH" />
                <P4 text="OR SIGN UP WITH DISQUS?" />
              </div>
              <div className="login-icons">
                <TwitterIcon
                  style={{
                    backgroundColor: "#01ACED",
                  }}
                />
                <FacebookIcon
                  style={{
                    backgroundColor: "#3B5998",
                  }}
                />
                <GoogleIcon
                  style={{
                    backgroundColor: "#E63343",
                  }}
                />
                <input
                  style={{
                    padding: "5px 3px",
                  }}
                  type="text"
                  placeholder="name"
                />
              </div>
            </section>
          </section>
        </div>
      </main>
      <FooterComp />
    </>
  );
};

export default Donate;
