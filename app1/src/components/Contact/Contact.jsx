import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <section id="contact" className="p-5 mt-5 contact-section">
            <div className="container">
                <div className="text-center">
                    <h1 className="fw-bolder pt-3" style={{ color: '#2C3E50' }}>CONTACT COMPONENT</h1>

                    <div className="d-flex justify-content-center align-items-center gap-3 pb-3 pt-3">
                        <div style={{ height: '5px', width: '80px', backgroundColor: '#2C3E50' }}></div>
                        <i className="fa fa-star glowing-star" style={{ color: '#2C3E50' }}></i>
                        <div style={{ height: '5px', width: '80px', backgroundColor: '#2C3E50' }}></div>
                    </div>
                </div>

                <form className="contact-form">
                    <div className="form-group position-relative mb-4">
                        <input type="text" className="custom-input" required placeholder=" " />
                        <label className="floating-label">userName:</label>
                    </div>
                    <div className="form-group position-relative mb-4">
                        <input type="number" className="custom-input" required placeholder=" " />
                        <label className="floating-label">userAge:</label>
                    </div>
                    <div className="form-group position-relative mb-4">
                        <input type="email" className="custom-input" required placeholder=" " />
                        <label className="floating-label">userEmail:</label>
                    </div>
                    <div className="form-group position-relative mb-4">
                        <input type="password" className="custom-input" required placeholder=" " />
                        <label className="floating-label">userPassword:</label>
                    </div>
                    <div className="text-start">
                        <button type="submit" className="btn btn-success">Send Message</button>
                    </div>

                </form>

            </div>
        </section>
    );
}

export default Contact;
