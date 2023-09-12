import React from "react";
import Navbar from "../components/navbar";
import "../styles/pages/notFound.css";
import FooterComp from "../components/footerComp";

const NotFound = () => {
  return (
    <>
      <main>
        <Navbar light />
        <section className="main-section  notFound-section">
          <img src={require("../assets/404.png")} alt="" />
        </section>
      </main>
      <FooterComp />
    </>
  );
};

export default NotFound;
