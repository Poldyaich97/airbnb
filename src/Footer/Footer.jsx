import styled from "styled-components";
import Container from "../Container/Container";
import "../index.css";
import "./Footer.css";
import footerLogo from "./footerLogo.svg";

const StyledFooter = styled.div``;
const StyledContent = styled.div`
  display: flex;
  padding: 48px 0px;
  box-shadow: 0px -0.5px 0px rgba(72, 72, 72, 0.3);
`;
const StyledBurger = styled.div`
  margin-right: 100px;
`;
const StyledSelect = styled.select`
  width: 228px;
  height: 48px;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  margin-bottom: 16px;
  display: block;
`;
const Informations = styled.div`
  display: flex;
`;
const Column = styled.div`
  display: inline-block;
  margin-right: 60px;
`;
const Title = styled.h5`
  font-size: 15px;
  line-height: 18px;
  margin: 0px 0px 16px 0px;
`;
const List = styled.ul`
  padding: 0;
  margin: 0;
`;
const Element = styled.li`
  list-style: none;
`;
const Link = styled.a`
  text-decoration: none;
  color: #636363;
  font-size: 15px;
  line-height: 18px;
`;

cons;
function Footer() {
  return (
    <StyledFooter>
      <Container>
        <StyledContent>
          <StyledBurger>
            <StyledSelect name="test">
              <option disabled>Выберите Язык</option>
              <option value="Русский">Русский</option>
              <option value="Китайский">Китайский</option>
              <option value="CШАшовский:D">CШАшовский:D</option>
            </StyledSelect>
            <StyledSelect name="test">
              <option disabled>Выберите валюту</option>
              <option value="Рубль">Рубль</option>
              <option value="КитайскБиткоиний">Биткоин</option>
              <option value="Доллар">Доллар</option>
            </StyledSelect>
          </StyledBurger>
          <Informations>
            <Column>
              <Title>Airbnb</Title>
              <List>
                <Element>
                  <Link href="#">About us</Link>
                </Element>
                <Element>
                  <Link href="#">Careers</Link>
                </Element>
                <Element>
                  <Link href="#">Press</Link>
                </Element>
                <Element>
                  <Link href="#">Policies</Link>
                </Element>
                <Element>
                  <Link href="#">Help</Link>
                </Element>
                <Element>
                  <Link href="#">Diversity & Belonging</Link>
                </Element>
              </List>
            </Column>
            <Column>
              <Title>Airbnb</Title>
              <List>
                <Element>
                  <Link href="#">About us</Link>
                </Element>
                <Element>
                  <Link href="#">Careers</Link>
                </Element>
                <Element>
                  <Link href="#">Press</Link>
                </Element>
                <Element>
                  <Link href="#">Policies</Link>
                </Element>
                <Element>
                  <Link href="#">Help</Link>
                </Element>
                <Element>
                  <Link href="#">Diversity & Belonging</Link>
                </Element>
              </List>
            </Column>
            <Column>
              <Title>Airbnb</Title>
              <List>
                <Element>
                  <Link href="#">About us</Link>
                </Element>
                <Element>
                  <Link href="#">Careers</Link>
                </Element>
                <Element>
                  <Link href="#">Press</Link>
                </Element>
                <Element>
                  <Link href="#">Policies</Link>
                </Element>
                <Element>
                  <Link href="#">Help</Link>
                </Element>
                <Element>
                  <Link href="#">Diversity & Belonging</Link>
                </Element>
              </List>
            </Column>
          </Informations>
        </StyledContent>
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
    </StyledFooter>
  );
}

export default Footer;
