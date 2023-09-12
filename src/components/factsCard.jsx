import React from "react";
import { P3 } from "../helper/paragraph";

const FactsCard = ({
  image,
  number = "",
  bottomText = "",
  bgColor = "rgba(37, 42, 52, 0.08)",
}) => {
  return (
    <div
      style={{
        backgroundColor: bgColor,
      }}
      className="fact-card"
    >
      <img src={require(`../assets/${image}.png`)} alt="" />
      <h1>{number}</h1>
      <P3 text={bottomText} center />
    </div>
  );
};

export default FactsCard;
