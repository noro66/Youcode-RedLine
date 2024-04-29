import React from 'react';
import './Footer.scss'; // Import the SCSS file

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-left">
                    <div className="footer-logo">
                        <img src="/images/picture.svg" alt="Taxi image" className="footer-logo-img" />
                    </div>
                    <div className="footer-social">
                        <a href="#"><i className="ri-facebook-circle-fill"></i></a>
                        <a href="#"><i className="ri-instagram-line"></i></a>
                        <a href="#"><i className="ri-linkedin-box-line"></i></a>
                        <a href="#"><i className="ri-youtube-line"></i></a>
                        <a href="#"><i className="ri-twitter-x-line"></i></a>
                    </div>
                </div>

                <div className="footer-middle">
                    <div className="footer-nav">
                        <a href="" className="footer-nav-link">Home</a>
                        <a href="" className="footer-nav-link">About</a>
                        <a href="" className="footer-nav-link">Contact</a>
                    </div>
                    <div className="footer-nav">
                        <a href="" className="footer-nav-link">Imprint</a>
                        <a href="" className="footer-nav-link">Privacy</a>
                        <a href="" className="footer-nav-link">Credits</a>
                    </div>
                </div>

                <div className="footer-right">
                    <form action="#" className="footer-form">
                        <input type="text" placeholder="Subscribe to Newsletter" className="footer-form-input" />
                        <button className="footer-form-button">Submit</button>
                    </form>
                    <div className="footer-copyright">
                        Copyright &copy; 2024 All Right Not Reserved
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
