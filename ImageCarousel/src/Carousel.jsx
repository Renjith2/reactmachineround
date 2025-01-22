import React, { useEffect, useState } from "react";
import "./Carousel.css";

function Carousel() {
  const [image, setImage] = useState([]);
  const [index, setIndex] = useState(0);
  const fetchdata = async () => {
    const url = "https://www.reddit.com/r/aww/top/.json?t=all";
    const data = await fetch(url);
    const images = await data.json();
    const info = images.data.children;
    const result = info
      .map((item) => item.data.url_overridden_by_dest)
      .filter((url) => url?.endsWith(".jpg"));
    setImage(result);
  };
  useEffect(() => {
    const tid = setInterval(() => {
      setIndex((prev) => (prev + 1) % image.length);
    }, 3000);

    return () => clearInterval(tid);
  }, [image.length]);
  useEffect(() => {
    fetchdata();
    
  }, []);
  
  const handleFN = (key) => {
    const lastIdx = image.length - 1;
    if (key === "right") {
      setIndex((prev) => (prev === lastIdx ? 0 : prev + 1));
    } else if (key === "left") {
      setIndex((prev) => (prev === 0 ? lastIdx : prev - 1));
    }
  };
  return (
    <div className="outer-div">
      <div className="image-container">
        {image.length > 0 && (
          <>
            <div onClick={()=>handleFN("left")} className="left-arrow">&lt;</div>
            <img alt="carousel" className="carousel-image" src={image[index] }/>
            <div onClick={()=>handleFN("right")} className="right-arrow">&gt;</div>
          </>
        )}
      </div>
    </div>
  );
}

export default Carousel;
