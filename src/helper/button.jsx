import React from "react";
import "../styles/helper.css";

const ButtonComp = ({
  text = "",
  bgColor = "",
  full = false,
  color = "",
  thin = false,
  onClick = () => {},
  white = false,
  hover = true,
  style = {},
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`helper-p3 helper-button  ${
        thin ? "helper-button-thin" : null
      } 
      ${hover ? (white ? "white-button" : "primary-button") : null}
      
      flex ${className}`}
      style={{
        backgroundColor: `var(--${bgColor})`,
        cursor: "pointer",
        width: full ? "100%" : null,
        color: `var(--${color})`,
        ...style,
      }}
    >
      {text}
    </button>
  );
};

export default ButtonComp;
