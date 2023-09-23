import React from "react";
import { P3, P4 } from "../helper/paragraph";
import { H3 } from "../helper/heading";
import ButtonComp from "../helper/button";
import { Link } from "react-router-dom";

const CauseCard = ({
  subHeading = "",
  heading = "",
  percentage = "",
  goal = "",
  raised = "",
  imageButton = true,
}) => {
  return (
    <div className="cause-card">
      <div className="image-container relative">
        {imageButton ? (
          <img src={require("../assets/patch.png")} alt="" />
        ) : null}
      </div>
      <div className="text-container">
        <P3 text={subHeading} color="primary" />
        <H3 text={heading} />
        <P4 text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, possimus?" />
        <div className="progress-container">
          <div>
            <P4 text="Donatone" />
            <P4 text={percentage} />
          </div>
          <div className="progressbar">
            <div
              style={{
                width: percentage,
              }}
            ></div>
          </div>
          <div>
            <P4 text={`Raised: ${raised}`} />
            <P4 text={`Goal: ${goal}`} />
          </div>
        </div>
        {imageButton ? (
          <Link to="/donate">
            <ButtonComp text="Donate Now" />
          </Link>
        ) : null}
      </div>
    </div>
  );
};

export default CauseCard;
