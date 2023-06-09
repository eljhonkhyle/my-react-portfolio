import React from 'react';
import "./footer.css";


const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">EKB</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#skills" className="footer__link">Skills</a>
                </li>

                <li>
                    <a href="#services" className="footer__link">Services</a>
                </li>
            </ul>

            <div className="footer__social">
            <a href="https://www.facebook.com/eljhonkhyle.balderama/" className="footer__social-link" target="_blank">
        <i className="bx bxl-facebook"></i>
        </a>

        <a href="https://www.instagram.com/eljhonkhylee/" className="footer__social-link" target="_blank">
        <i className="bx bxl-instagram-alt"></i>
        </a>

        <a href="https://www.twitter.com/EljhonKhyle/" className="footer__social-link" target="_blank">
        <i className="bx bxl-twitter"></i>
        </a>

        <a href="https://www.linkedin.com/in/eljhon-khyle-balderama-9ab27125b/" className="footer__social-link" target="_blank">
        <i class='bx bxl-linkedin-square'></i>
        </a>
            </div>

            <span className="footer__copy">&#169; 2023 Eljhon Khyle Balderama | All Rights Reserved.</span>
        </div>
    </footer>
  )
}

export default Footer