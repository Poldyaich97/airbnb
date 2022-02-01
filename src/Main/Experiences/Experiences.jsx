import styled from "styled-components";
import expImg from "./expImg.png";
import { StyledTitle } from "../SectionTitle/SectionTitle";
import SectionSee from "../SectionSee/SectionSee.jsx";
import Raiting from "../Raiting/RatingLine";
import { Link } from "react-router-dom";
const StyledLink = styled(Link)`
  color: #383838;
  text-decoration: none;
`;

const Columns = styled.div`
  display: flex;
  column-gap: 18px;
`;
const HeaderTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
`;
const Column = styled.div`
  width: 230px;
`;
const WrapperImage = styled.div`
  height: 350px;
  margin-bottom: 8px;
`;
const StyledImage = styled.img`
  object-fit: cover;
  height: 100%;
  display: block;
`;
const PriceTitle = styled.div`
  line-height: 1;
  margin-bottom: 6px;
`;
const SubTitle = styled.h5`
  display: inline-block;
  margin: 0px 2px 0px 0px;
  font-size: 15px;
  line-height: 18px;
  font-weight: bold;
`;
const NameTitle = styled.span`
  font-size: 15px;
  line-height: 18px;
  font-weight: 300;
`;
const FooterColumn = styled.div`
  text-align: start;
  line-height: 16px;
`;

export default function Experiences(props) {
  return (
    <div className={props.className}>
      <HeaderTitle>
        <StyledTitle>Experiences</StyledTitle>
        <StyledLink to="cards">
          <SectionSee />
        </StyledLink>
      </HeaderTitle>
      <Columns>
        <Column>
          <StyledLink to="/cards/exp-1">
            <WrapperImage>
              <StyledImage src={expImg} alt="imgOne" />
            </WrapperImage>
            <PriceTitle>
              <SubTitle>$29</SubTitle>
              <NameTitle>Forest therapy</NameTitle>
            </PriceTitle>
            <FooterColumn>
              <Raiting />
            </FooterColumn>
          </StyledLink>
        </Column>
        <Column>
          <StyledLink to="/cards/exp-2">
            <WrapperImage>
              <StyledImage src={expImg} alt="imgOne" />
            </WrapperImage>
            <PriceTitle>
              <SubTitle>$29</SubTitle>
              <NameTitle>Forest therapy</NameTitle>
            </PriceTitle>
            <FooterColumn>
              <Raiting />
            </FooterColumn>
          </StyledLink>
        </Column>
        <Column>
          <StyledLink to="/cards/exp-3">
            <WrapperImage>
              <StyledImage src={expImg} alt="imgOne" />
            </WrapperImage>
            <PriceTitle>
              <SubTitle>$29</SubTitle>
              <NameTitle>Forest therapy</NameTitle>
            </PriceTitle>
            <FooterColumn>
              <Raiting />
            </FooterColumn>
          </StyledLink>
        </Column>
        <Column>
          <StyledLink to="/cards/exp-4">
            <WrapperImage>
              <StyledImage src={expImg} alt="imgOne" />
            </WrapperImage>
            <PriceTitle>
              <SubTitle>$29</SubTitle>
              <NameTitle>Forest therapy</NameTitle>
            </PriceTitle>
            <FooterColumn>
              <Raiting />
            </FooterColumn>
          </StyledLink>
        </Column>
      </Columns>
    </div>
  );
}
