import React from "react";
import "../styles/pages/searchNotFound.css";
import Navbar from "../components/navbar";
import FooterComp from "../components/footerComp";
import { H1, H5 } from "../helper/heading";
import { P3 } from "../helper/paragraph";
import ButtonComp from "../helper/button";
import SearchIcon from "@mui/icons-material/Search";
const SerachNotFound = () => {
  return (
    <>
      <main>
        <Navbar light />
        <section className="main-section  search-notFound-section">
          <H5 text="Search Result For ‘Hospital’" />
          <img src={require("../assets/search.png")} alt="" />
          <H1 text="Oops! Search Not Found" />
          <P3 text="Nothing matched your search criteria. Please try again with different keywords." />
          <div className="input-container">
            <input type="text" placeholder="Type Keywords..." />
            <button>
              <SearchIcon />
            </button>
          </div>
          <ButtonComp
            text="Or Back To Home Page"
            bgColor=""
            color="primary"
            thin
            style={{
              border: "1px solid var(--primary)",
            }}
          />
        </section>
      </main>
      <FooterComp />
    </>
  );
};

export default SerachNotFound;
