import styled from "styled-components";
import Container from "../Container/Container";
import "../index.css";
import "./Footer.css";
import footerLogo from "./footerLogo.svg";
import Twitter from "./Twitter.svg";
import Facebook from "./Facebook.svg";

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
const Underground = styled.div`
  padding: 12px 0px 35px 0px;
  display: flex;
`;
const StyledLogo = styled.div`
  margin-right: 10px;
  display: inline-block;
`;
const StyledImage = styled.img`
  width: 22px;
  height: 22px;
  display: block;
`;
const StyledText = styled.div``;
const StyledParagraph = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin: 0;
  padding: 0;
  display: inline-block;
`;
const StyledLeft = styled.div`
  display: flex;
  align-items: center;
`;
const StyledRight = styled.div`
  margin-left: auto;
  margin-right: 0;
`;
const StyledNavigation = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  column-gap: 16px;
`;
const SocialNetwork = styled.div`
  display: flex;
`;

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
        <Underground>
          <StyledLeft>
            <StyledLogo>
              <StyledImage src={footerLogo} />
            </StyledLogo>
            <StyledParagraph>© Airbnb Inc.</StyledParagraph>
          </StyledLeft>
          <StyledRight>
            <StyledNavigation>
              <Element>
                <Link href="#">Terms</Link>
              </Element>
              <Element>
                <Link href="#">Terms</Link>
              </Element>
              <Element>
                <Link href="#">Terms</Link>
              </Element>
              <Element>
                <Link href="#">
                  <StyledImage src={Twitter} />
                </Link>
              </Element>
              <Element>
                <Link href="#">
                  <StyledImage src={Facebook} />
                </Link>
              </Element>
            </StyledNavigation>
          </StyledRight>
        </Underground>
      </Container>
    </StyledFooter>
  );
}

export default Footer;
