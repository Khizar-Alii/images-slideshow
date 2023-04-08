import React, { useState, useEffect  , useRef} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Gallery.css"; 
import { useInView } from 'react-intersection-observer';

const Gallery = ({ galleryImages }) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1, 
  });

  useEffect(() => {
    if (inView) {
      setIsIntersecting(true);
    }
  }, [inView]);
  const sliderRef = useRef(null);

  const handlePrevious = () => {
    sliderRef.current.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  // Slick settings for the slider
  const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 4, // Number of images to show in the grid view
    slidesToScroll: 1,
    centerMode: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Number of images to show in the grid view on smaller screens
        },
      },
    ],
  };

  return (
    <div className={`gallery-container ${isIntersecting ? "active" : ""}`} ref={ref}>
      <h1 className={`heading ${isIntersecting ? "active" : ""}`}>Details of perfection</h1>
      <div className="arrow-container left" onClick={handlePrevious}>
        &lt;
      </div>
      <div className="arrow-container right" onClick={handleNext}>
        &gt;
      </div>
      <Slider ref={sliderRef} {...settings}>
        {galleryImages.map((image, index) => (
          <div key={index}>
            <img
              src={image.url}
              alt={image.alt}
              title={image.title}
              className="img-gallery"
            />
            <h3 className="image-title">{image.title}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Gallery;
