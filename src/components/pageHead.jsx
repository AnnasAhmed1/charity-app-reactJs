import React from "react";
import Navbar from "./navbar";
import { H5 } from "../helper/heading";
import { P1 } from "../helper/paragraph";

const PageHead = ({ page = "" }) => {
  return (
    <section className="bgGray relative section1">
      <div className="trapezium absolute"></div>

      <img
        src={require("../assets/patch.png")}
        className="absolute patch-image"
        alt=""
      />
      <Navbar />
      <div className="main-section container">
        <H5 text={page} center color="light" />
        <P1 text={`Home / ${page}`} nunito center color="light" underline />
      </div>
    </section>
  );
};

export default PageHead;
