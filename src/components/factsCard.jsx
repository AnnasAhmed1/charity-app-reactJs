import React from "react";
import { P3 } from "../helper/paragraph";

const FactsCard = ({
  image,
  number = "",
  bottomText = "",
  bgColor = "rgba(37, 42, 52, 0.08)",
}) => {
  return (
    // (
    //   <div className="card-animation">
    //     <img
    //       style={{
    //         margin: "0 auto",
    //       }}
    //       src={require(`../assets/${image}.png`)}
    //       alt=""
    //     />
    //   </div>
    // );
    <div
      style={{
        backgroundColor: bgColor,
      }}
      className="fact-card"
    >
      <div className="image/ card-animation rounded-container/">
        <img src={require(`../assets/${image}.png`)} alt="" />
      </div>
      <h1>{number}</h1>
      <P3 text={bottomText} center />
    </div>
  );
};

export default FactsCard;
