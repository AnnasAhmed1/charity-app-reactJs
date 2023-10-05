import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import Slider from "react-slick";
import TestimonialCard from "./testimonialCard";
const TestimonialsSection = ({ text, head = true, slider = true }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SamplePrevArrow />,
    prevArrow: <SampleNextArrow />,
  };

  const arrowStyle = {
    position: "absolute",
    bottom: "50%",
    color: "var(--light)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <button
        style={{
          left: "-50px",
          ...arrowStyle,
        }}
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
    const { onClick } = props;
    return (
      <button
        style={{
          right: "-50px",
          ...arrowStyle,
        }}
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
      <div className="container">
        {slider ? (
          <Slider {...settings}>
            <TestimonialCard text={text} head={head} />
            <TestimonialCard text={text} head={head} />
          </Slider>
        ) : (
          <TestimonialCard text={text} head={head} />
        )}
      </div>
    </section>
  );
};

export default TestimonialsSection;
