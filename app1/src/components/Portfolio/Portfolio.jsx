import React, { useState } from 'react';
import './Portfolio.css';

function Portfolio() {
  const images = [
    "/images/poert1.png",
    "/images/port2.png",
    "/images/port3.png",
    "/images/poert1.png",
    "/images/port2.png",
    "/images/port3.png",
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (img) => {
    setSelectedImage(img);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <section className="mt-5 pt-5 portfolio-section">
      <div className="text-center">
        <h1 className="fw-bolder pt-3" style={{ color: '#2C3E50' }}>PORTFOLIO COMPONENT</h1>

        <div className="d-flex justify-content-center align-items-center gap-3 pb-3 pt-3">
          <div style={{ height: '5px', width: '80px', backgroundColor: '#2C3E50' }}></div>
          <i className="fa fa-star glowing-star" style={{ color: '#2C3E50' }}></i>
          <div style={{ height: '5px', width: '80px', backgroundColor: '#2C3E50' }}></div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          {images.map((image, index) => (
            <div className="col-sm-12 col-md-6 col-lg-4 p-2" key={index}>
              <div className="image-container" onClick={() => openImage(image)}>
                <img src={image} className="w-100" alt={`work-${index}`} />
                <div className="overlay">
                  <i className="fa fa-search-plus icon"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="image-overlay d-flex justify-content-center align-items-center" onClick={closeImage}>
          <img src={selectedImage} className="selected-img" onClick={(e) => e.stopPropagation()} alt="Selected Work" />
        </div>
      )}
    </section>
  );
}

export default Portfolio;
