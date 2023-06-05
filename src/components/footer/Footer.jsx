import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container container">
        <h1 className="footer_title">Marco</h1>

        <ul className="footer_list">
          <li>
            <a href="#about" className="footer_link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer_link">
              Projects
            </a>
          </li>
          <li>
            <a href="#testimonials" className="footer_link">
              Testimonials
            </a>
          </li>
        </ul>

        <div className="footer_social">
          <a
            href="https://www.instagram.com/"
            className="home_social-icon"
            target="_blank"
          >
            <i className="bx bxl-instagram"></i>
          </a>
          <a
            href="https://github.com/"
            className="home_social-icon"
            target="_blank"
          >
            <i class='bx bxl-github'></i>
          </a>
          <a
            href="https://discord.com/"
            className="home_social-icon"
            target="_blank"
          >
            <i className="bx bxl-discord"></i>
          </a>
        </div>

        <span className="footer_copy">
            &#169; Vincentius Marco Melandri. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
