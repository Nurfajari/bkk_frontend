import React, { useState } from "react";

const CarouselSlide = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      title: "Slide 1",
      content: "Ini adalah slide 1",
    },
    {
      title: "Slide 2",
      content: "Ini adalah slide 2",
    },
    {
      title: "Slide 3",
      content: "Ini adalah slide 3",
    },
  ];

  const handleNextSlide = () => {
    setActiveIndex((activeIndex + 1) % slides.length);
  };

  const handlePreviousSlide = () => {
    setActiveIndex((activeIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div>
      <div className="carousel">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${activeIndex === index ? "active" : ""}`}
          >
            <h1>{slide.title}</h1>
            <p>{slide.content}</p>
          </div>
        ))}
      </div>
      <div className="controls">
        <button onClick={handlePreviousSlide}>Previous</button>
        <button onClick={handleNextSlide}>Next</button>
      </div>
    </div>
  );
};

export default CarouselSlide
