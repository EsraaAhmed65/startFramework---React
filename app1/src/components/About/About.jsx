import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="about-bg d-flex flex-column justify-content-center align-items-center">
      <div className="text-center">
        <h1 className="fw-bolder text-white pt-3">ABOUT COMPONENT</h1>
        <div className="d-flex justify-content-center align-items-center gap-3 pb-3 pt-3">
          <div className="line"></div>
          <i className="fa fa-star text-white glowing-star"></i>
          <div className="line"></div>
        </div>
      </div>

      <div className="container">
        <div className="row g-4">
          <div className="col-md-12 col-lg-6 mt-4">
            <p className="text-white">
              Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
            </p>
          </div>
          <div className="col-md-12 col-lg-6 mb-5">
            <p className="text-white">
              Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;