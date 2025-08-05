import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <>
            <div className="footer-bg">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-md-12 col-lg-4 mt-4 p-5">
                            <h3 className="px-1 text-white text-center">LOCATION</h3>
                            <p className="text-white text-center">2215 John Daniel Drive</p>
                            <p className="text-white text-center">Clark, MO 65243</p>
                        </div>

                        <div className="col-md-12 col-lg-4 mt-4 p-5">
                            <h3 className="px-1 text-white text-center">AROUND THE WEB</h3>
                            <div className="icons text-center text-white">
                                <span className="icon-circle"><i className="fab fa-facebook-f"></i></span>
                                <span className="icon-circle"><i className="fab fa-twitter"></i></span>
                                <span className="icon-circle"><i className="fab fa-linkedin-in"></i></span>
                                <span className="icon-circle"><i className="fas fa-globe"></i></span>
                            </div>

                        </div>

                        <div className="col-md-12 col-lg-4 mt-4 p-5">
                            <h3 className="px-1 text-white text-center">ABOUT FREELANCER</h3>
                            <p className="text-white text-center">
                                Freelance is a free to use, licensed Bootstrap theme created by Route
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="cppy-right-color text-center text-white p-4">
                <p>Copyright © Your Website 2021</p>
            </div>
        </>
    );
}

export default Footer;
