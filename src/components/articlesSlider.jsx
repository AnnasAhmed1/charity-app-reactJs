import React from "react";
import Slider from "react-slick";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import ArticlesCard from "./articlesCard";
const ArticlesSlider = () => {
  const articlesData = [
    {
      name: "Esther Howard",
      date: "12 sep 2021",
      heading: "Charity, Expectations vs. Reality",
    },
    {
      name: "Jacob Jones",
      date: "22 Aug 2021 ",
      heading: "This Week's Top Stories About Charity",
    },
    {
      name: "Floyd Miles",
      date: "30 Jul 2021",
      heading: "Why You Should Focus on Charity",
    },
    {
      name: "Esther Howard",
      date: "12 sep 2021",
      heading: "Charity, Expectations vs. Reality",
    },
    {
      name: "Jacob Jones",
      date: "22 Aug 2021 ",
      heading: "This Week's Top Stories About Charity",
    },
    {
      name: "Floyd Miles",
      date: "30 Jul 2021",
      heading: "Why You Should Focus on Charity",
    },
    {
      name: "Esther Howard",
      date: "12 sep 2021",
      heading: "Charity, Expectations vs. Reality",
    },
    {
      name: "Jacob Jones",
      date: "22 Aug 2021 ",
      heading: "This Week's Top Stories About Charity",
    },
    {
      name: "Floyd Miles",
      date: "30 Jul 2021",
      heading: "Why You Should Focus on Charity",
    },
  ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SamplePrevArrow />,
    prevArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const arrowStyle = {
    position: "absolute",
    top: "-40px",
    color: "var(--dark)",
    cursor: "pointer",
    backgroundColor: "var(--bgGrey)",
    borderRadius: "50%",
    padding: "5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <button
        style={{
          right: "60px",
          ...arrowStyle,
        }}
        onClick={onClick}
      >
        <KeyboardArrowLeftIcon
          style={{
            fontSize: "25px",
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
          right: "10px",
          ...arrowStyle,
        }}
        onClick={onClick}
      >
        <ChevronRightIcon
          style={{
            fontSize: "25px",
          }}
        />
      </button>
    );
  }

  return (
    <div className="articles-container articles-slider">
      <Slider {...settings}>
        {articlesData?.map((article, index) => {
          return (
            <ArticlesCard
              key={index}
              name={article.name}
              date={article.date}
              heading={article.heading}
            />
          );
        })}
      </Slider>
    </div>
  );
};

export default ArticlesSlider;
