import { useState } from "react";
import "../styles/carousel.css";
import data from "../data/data";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  return (
    <div className="carousel">
      <h2>Supernatural Manhwas</h2>
      <div className="carousel-container">
        <div className="carousel-item">
          <img src={data[currentIndex].img} alt={data[currentIndex].name} />
          <h3>{data[currentIndex].name}</h3>
          <p>{data[currentIndex].writer}</p>
          <p>{data[currentIndex].genre}</p>
          <p>{data[currentIndex].releaseYear}</p>
          <p>{data[currentIndex].description}</p>
        </div>
      </div>
      <div>
        <FaAngleLeft onClick={handlePrev} className="carousel-btn"/>
        <FaAngleRight onClick={handleNext} className="carousel-btn"/>
      </div>
    </div>
  );
};

export default Carousel;
