import React from "react";
import { H4 } from "../helper/heading";

const FeatureCard = ({ image, heading, itemsCount = 0, coloured = false }) => {
  let listItem = [
    "Join your hand with us for a better life",
    "Let's do the right thing now",
    "Lorem ipsum dolor sit amet",
    "children where we are able to fulfill all",
  ];
  listItem = [...listItem.slice(0, itemsCount)];
  return (
    <div
      className="feature-card"
      style={{
        backgroundColor: coloured
          ? "var(--primary)"
          : "var(--textPrimaryWithOpacity)",
      }}
    >
      <div className="image-container">
        <img src={require(`../assets/${image}.png`)} alt="features" />
      </div>
      <H4
        text={heading}
        fontWeight="700"
        style={{
          color: coloured ? "var(--light)" : null,
          listStylePosition: "inside",
        }}
      />
      <p
        style={{
          color: coloured ? "#EEEEEE" : "var(--customDarkGrey)",
        }}
        className="helper-p4"
      >
        Lorem ipsum dolor sit amet, consetetur sadipscing sed diam nonumy tempor
        invidunt ut labore et magna aliquyam erat, sed diam voluptua....
      </p>
      <ol>
        {listItem.map((item, index) => {
          return (
            <li
              style={{
                color: coloured ? "var(--light)" : null,
                listStylePosition: "inside",
                fontWeight: 400,
              }}
              key={index}
              className="helper-p4"
            >
              {item}
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default FeatureCard;
