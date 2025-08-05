import React from 'react';
import './Home.css';
import avatar from '../../assets/avataaars.svg'; 

function Home() {
  return (
    <section className="home-bg pt-5 mt-5">
      <div className="d-flex justify-content-center align-items-center">
        <img src={avatar} alt="avatar" />
      </div>

      <div>
        <h1 className="fw-bolder text-white text-center pt-3">Start Framework</h1>

        <div className="d-flex justify-content-center align-items-center gap-3 pb-3">
          <div className="line"></div>
          <i className="fa fa-star text-white glowing-star"></i>
          <div className="line"></div>
        </div>
      </div>

      <div>
        <p className="text-center text-white">Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </section>
  );
}

export default Home;
