import React from "react";
import { P2 } from "../helper/paragraph";

const SubHeading = ({ text = "" }) => {
  return (
    <div className="subheading">
      <P2 text={text} />
      <div class="horizontal-line"></div>
    </div>
  );
};

export default SubHeading;
