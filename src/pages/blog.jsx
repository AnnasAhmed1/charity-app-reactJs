import React from "react";
import PageHead from "../components/pageHead";
import FooterComp from "../components/footerComp";
import { H2, H6 } from "../helper/heading";
import PersonIcon from "@mui/icons-material/Person";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import "../styles/pages/blog.css";
import { P1, P2, P3, P4 } from "../helper/paragraph";
import TestimonialsSection from "../components/testimonialsSection";

const Blog = () => {
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
  return (
    <>
      <main className="blog-main">
        <PageHead page="Charity, Expectation Vs. Reality" />
        <div className="container">
          <section className="main-section">
            <H2 text="Donating Poor People." />
            <div className="blog-container">
              <section>
                <div className="grey-container"></div>
                <div className="flex-between donate-detail">
                  <p className="helper-p4">
                    <PersonIcon />
                    Esther Howard
                  </p>
                  <p className="helper-p4">
                    <CalendarMonthIcon />
                    12 sep 2021
                  </p>
                  <p className="helper-p4">
                    <AccessTimeIcon />
                    10 min read
                  </p>
                </div>
                <div className="blog-text-container">
                  <H6 text="Back to the future: Quality education through respect, commitment and accountability" />
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
                    text="Asian carps sailback scorpionfish; dragon goby lemon sole triplefin blenny hog sucker. Smelt sleeper
                    shovelnose sturgeon merluccid hake cow shark herring smelt trout-perch barbeled houndshark.
                    Shell-ear Asian carps blackfish Port Jackson shark Atlantic saury. Sacramento blackfish pricklefish,
                    Atlantic cod, “driftwood catfish chimaera ribbonfish, marblefish worm eel smelt mora gray
                    reef shark scabbard fish.”"
                    style={{
                      color: "#666666",
                    }}
                  />
                </div>
                <div className="blog-text-container">
                  <H6 text="Clean water helps keep kids in school, especially girls." />
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
                <section className="main-section/">
                  <TestimonialsSection
                    head={false}
                    text={
                      "Seamlessly network focused bandwidth after magnetic convergence. Energistically iterate seamless opportunities before innovative infrastructures."
                    }
                  />
                </section>
                <div className="blog-text-container">
                  <H6 text="Trouble With The Law Since The Day." />
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
          </section>
        </div>
      </main>
      <FooterComp />
    </>
  );
};

export default Blog;
