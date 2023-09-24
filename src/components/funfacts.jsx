import React from "react";
import FactsCard from "./factsCard";

const Funfacts = ({ bgColor }) => {
  const factsData = [
    {
      image: "people_rised1",
      number: "4597+",
      bottomText: "People rised",
    },
    {
      image: "volunteer1",
      number: "8945+",
      bottomText: "Volunteer",
    },
    {
      image: "poor_saved1",
      number: "10M+",
      bottomText: "Poor People Saved",
    },
    {
      image: "country_member1",
      number: "100+",
      bottomText: "Country Member",
    },
  ];
  return (
    <div className="facts-container main-section">
      {factsData?.map((fact, index) => {
        return (
          <FactsCard
            key={index}
            image={fact.image}
            number={fact.number}
            bottomText={fact.bottomText}
            bgColor={bgColor}
          />
        );
      })}
    </div>
  );
};

export default Funfacts;
