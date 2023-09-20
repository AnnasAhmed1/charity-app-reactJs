import React from "react";
import Navbar from "./navbar";
import { H5 } from "../helper/heading";
import { P1 } from "../helper/paragraph";

const PageHead = ({ page = "", subNav }) => {
  return (
    <section className="bgGray relative section1" id="top">
      <div className="trapezium absolute"></div>

      <img
        src={require("../assets/patch.png")}
        className="absolute patch-image"
        alt=""
      />
      <Navbar />
      <div className="main-section container">
        <H5
          text={page}
          center
          color="light"
          style={{
            width: "60%",
            margin: "0 auto",
          }}
        />
        <P1
          text={`Home / ${subNav ? subNav : page}`}
          nunito
          center
          color="light"
          underline
          fontWeight="500"
        />
      </div>
    </section>
  );
};

export default PageHead;
