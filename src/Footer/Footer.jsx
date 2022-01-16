import styled from "styled-components";
import Container from "../Container/Container";
import footerLogo from "./footerLogo.svg";
import twitter from "./twitter.svg";
import facebook from "./facebook.svg";
import instagram from "./instagram.svg";

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
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  margin-bottom: 16px;
  display: block;
  padding: 12px 16px;
`;
const Informations = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
const Column = styled.div`
  display: inline-block;
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
  box-shadow: 0px -0.5px 0px rgba(72, 72, 72, 0.3);
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
  display: flex;
  column-gap: 28px;
`;
const StyledNavigation = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  column-gap: 16px;
`;
const StyledIcons = styled.div`
  display: flex;
  column-gap: 12px;
`;

function Footer(props) {
  return (
    <StyledFooter className={props.className}>
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
                <Link href="#">Privacy</Link>
              </Element>
              <Element>
                <Link href="#">Site map</Link>
              </Element>
            </StyledNavigation>
            <StyledIcons>
              <Element>
                <Link href="#">
                  <StyledImage src={twitter} />
                </Link>
              </Element>
              <Element>
                <Link href="#">
                  <StyledImage src={facebook} />
                </Link>
              </Element>
              <Element>
                <Link href="#">
                  <StyledImage src={instagram} />
                </Link>
              </Element>
            </StyledIcons>
          </StyledRight>
        </Underground>
      </Container>
    </StyledFooter>
  );
}

export default Footer;
