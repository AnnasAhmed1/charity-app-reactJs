import React from "react";

import TestimonialCard from "./testimonialCard";
import Slider from "react-slick";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
const TestimonialsSection = ({ text, head = true }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SamplePrevArrow />,
    prevArrow: <SampleNextArrow />,
  };
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <button
        style={{
          position: "absolute",
          left: "-50px",
          bottom: "50%",

          color: "var(--light)",

          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="custom-arrow custom-prev-arrow"
        onClick={onClick}
      >
        <KeyboardArrowLeftIcon
          style={{
            fontSize: "55px",
          }}
        />
      </button>
    );
  }
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <button
        style={{
          position: "absolute",
          right: "-50px",
          bottom: "50%",

          color: "var(--light)",

          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="custom-arrow custom-prev-arrow"
        onClick={onClick}
      >
        <ChevronRightIcon
          style={{
            fontSize: "55px",
          }}
        />
      </button>
    );
  }
  return (
    <section className="main-section testimonial-conatainer">
      {/* <TestimonialCard text={text} head={head} /> */}
      <div className="container">
        <Slider {...settings}>
          <TestimonialCard text={text} head={head} />
          <TestimonialCard text={text} head={head} />
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialsSection;
