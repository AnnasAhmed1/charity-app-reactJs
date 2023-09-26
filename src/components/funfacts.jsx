import React from "react";
import FactsCard from "./factsCard";

const Funfacts = ({ bgColor, animatedRef  }) => {
  const factsData = [
    {
      image: "people_rised",
      number: "4597+",
      bottomText: "People rised",
      percentage: "65",
    },
    {
      image: "volunteer",
      number: "8945+",
      bottomText: "Volunteer",
      percentage: "75",
    },
    {
      image: "poor_saved",
      number: "10M+",
      bottomText: "Poor People Saved",
      percentage: "90",
    },
    {
      image: "country_member",
      number: "100+",
      bottomText: "Country Member",
      percentage: "55",
    },
  ];
  return (
    <div
      className="facts-container main-section/"
      style={{
        marginTop: "40px",
      }}
      id="animation-section" 
    >
      {factsData?.map((fact, index) => {
        return (
          <FactsCard
            key={index}
            image={fact.image}
            number={fact.number}
            bottomText={fact.bottomText}
            bgColor={bgColor}
            percentage={fact.percentage}
            animatedRef={animatedRef} 
          />
        );
      })}
    </div>
  );
};

export default Funfacts;
