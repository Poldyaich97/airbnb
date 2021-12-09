import "../index.css";
import "./Footer.css";
import footerLogo from "./footerLogo.svg";
import facebook from "./facebook.svg";
import twitter from "./twitter.svg";

import Container from "../Container/Container";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="footer__content">
          <div className="footer_left">
            <select
              name="test"
              id="footer__language"
              className="footer__language footer_select"
            >
              <option disabled>Выберите Язык</option>
              <option value="Русский">Русский</option>
              <option value="Китайский">Китайский</option>
              <option value="CШАшовский:D">CШАшовский:D</option>
            </select>
            <select
              name="test"
              id="footer__language"
              className="footer__money footer_select"
            >
              <option disabled>Выберите валюту</option>
              <option value="Рубль">Рубль</option>
              <option value="КитайскБиткоиний">Биткоин</option>
              <option value="Доллар">Доллар</option>
            </select>
          </div>
          <div className="footer_right">
            <div className="footer__airbnb">
              <h5 className="footer_title">Airbnb</h5>
              <ul className="footer_nav">
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">About us</a>
                </li>
              </ul>
            </div>
            <div className="footer__airbnb">
              <h5 className="footer_title">Discover</h5>
              <ul className="footer_nav">
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">About us</a>
                </li>
              </ul>
            </div>
            <div className="footer__airbnb">
              <h5 className="footer_title">Hosting</h5>
              <ul className="footer_nav">
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">About us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer__links">
          <div className="footer__links_left">
            <img src={footerLogo} className="footer__links_logo" />
            <span>© Airbnb Inc.</span>
          </div>
          <div className="footer__links_right">
            <ul>
              <li>
                <a href="#">Terms</a>
              </li>
              <li>
                <a href="#">Privacy</a>
              </li>
              <li>
                <a href="#">Site map</a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
