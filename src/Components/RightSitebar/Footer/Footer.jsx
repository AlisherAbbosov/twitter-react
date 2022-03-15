import React from "react";
import "./Footer.scss";
const Footer = () => {
  return (
    <div className="footer">
      <ul className="footer__list">
        <li className="footer__item">
          <a className="footer__link" href="#link">
            <p className="footer__text">Terms of Service</p>
          </a>
        </li>
        <li className="footer__item">
          <a className="footer__link" href="#link">
            <p className="footer__text">Privacy Policy</p>
          </a>
        </li>
        <li className="footer__item">
          <a className="footer__link" href="#link">
            <p className="footer__text">Cookie Policy</p>
          </a>
        </li>
        <li className="footer__item">
          <a className="footer__link" href="#link">
            <p className="footer__text">Imprint</p>
          </a>
        </li>
        <li className="footer__item">
          <a className="footer__link" href="#link">
            <p className="footer__text">Ads Info</p>
          </a>
        </li>
        <li className="footer__item">
          <a className="footer__link" href="#link">
            <p className="footer__text">More ···</p>
          </a>
        </li>
        <li className="footer__item">
          <a className="footer__link" href="#link">
            <p className="footer__text">© 2021 Twitter, Inc.</p>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
