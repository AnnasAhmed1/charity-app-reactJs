import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { P4 } from "../helper/paragraph";
import { H3 } from "../helper/heading";
import ButtonComp from "../helper/button";
import { Link } from "react-router-dom";

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
        <Link to="/blog">
          <ButtonComp text="Read More" />
        </Link>
      </div>
    </div>
  );
};

export default ArticlesCard;
