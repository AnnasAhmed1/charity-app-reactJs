import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { P4 } from "../helper/paragraph";
import { H3 } from "../helper/heading";
import ButtonComp from "../helper/button";

const ArticlesCard = ({ name = "", date = "", heading = "" }) => {
  return (
    <div className="article-card">
      <div className="grey-container"></div>
      <div className="text-container">
        <div className="flex-between">
          <p className="helper-p4">
            <PersonIcon />
            {name}
          </p>
          <p className="helper-p4">
            <CalendarMonthIcon />
            {date}
          </p>
        </div>
        <H3 text={heading} />
        <P4 text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi veritatis nihil minus minima sint sapiente temporibus culpa facilis." />
        <ButtonComp text="Read More" />
      </div>
    </div>
  );
};

export default ArticlesCard;
