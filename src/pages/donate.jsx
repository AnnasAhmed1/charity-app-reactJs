import React, { useEffect, useState } from "react";
import FooterComp from "../components/footerComp";
import PageHead from "../components/pageHead";
import { H2, H6 } from "../helper/heading";
// import PersonIcon from "@mui/icons-material/Person";
import BlogLoginComp from "../components/blogLoginComp";
import DonateModal from "../components/donateModal";
import { scrollToSection } from "../config/function";
import ButtonComp from "../helper/button";
import { P2, P3, P4 } from "../helper/paragraph";
import "../styles/pages/blog.css";

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
      <main className="blog-main donate-main">
        <PageHead
          page="Donate For Poor Peoples Treatment And Medicine."
          subNav={"Donate"}
        />
        <DonateModal className="donate-modal" open={open} setOpen={setOpen} />
        <div className="container">
          <section className="main-section ">
            <H2 text="Donating Poor People." />
            <div className="blog-container flex-responsive">
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
                    backgroundColor: "var(--textPrimaryWithOpacity)",
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
                      color: "var(--customDarkGrey)",
                    }}
                  />
                  <P3
                    text="Less time collecting water means more time in class. Clean water and proper toilets at school means
                    teenage girls don’t have to stay home for a week out of every month."
                    style={{
                      color: "var(--customDarkGrey)",
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
                      color: "var(--customDarkGrey)",
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
                      color: "var(--customDarkGrey)",
                    }}
                  />
                  <P3
                    text="Flyingfish Kafue pike cow shark California smoothtongue golden loach temperate ocean-bass gulper
                    kanyu porcupinefish Kafue pike opah sunfish gudgeon boga Asiatic glassfish tadpole fish! Alewife
                    airbreathing catfish; zebra tilapia northern pearleye naked-back knifefish pupfish dojo loach.
                    mackerel bonytail chub arapaima horsefish weasel shark.”"
                    style={{
                      color: "var(--customDarkGrey)",
                    }}
                  />
                  <P3
                    text="Asian carps sailback scorpionfish; dragon goby lemon sole triplefin blenny hog sucker. Smelt sleeper
                    sturgeon merluccid hake cow shark herring smelt trout-perch barbeled houndshark. Shell-ear Asian
                    blackfish Port Jackson shark Atlantic saury. Sacramento blackfish pricklefish, Atlantic cod, “driftwood
                    catfish chimaera ribbonfish, marblefish worm eel smelt mora gray reef shark scabbard fish.”"
                    style={{
                      color: "var(--customDarkGrey)",
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
            <BlogLoginComp />
          </section>
        </div>
      </main>
      <FooterComp />
    </>
  );
};

export default Donate;
