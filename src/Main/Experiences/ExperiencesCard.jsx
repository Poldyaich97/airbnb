import styled from "styled-components";
import Raiting from "../Raiting/RatingLine";
import { Link } from "react-router-dom";
const StyledLink = styled(Link)`
  color: #383838;
  text-decoration: none;
`;

const Column = styled.div`
  height: 395px;
  width: 228px;
  @media (max-width: 1024px) {
    width: 240px;
  }
  @media (max-width: 750px) {
    width: 144px;
    height: 280px;
  }
`;
const WrapperImage = styled.div`
  margin-bottom: 8px;
`;
const StyledImage = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
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
  @media (max-width: 750px) {
    font-size: 13px;
    line-height: 15px;
  }
`;
const NameTitle = styled.span`
  font-size: 15px;
  line-height: 18px;
  font-weight: 300;
  @media (max-width: 750px) {
    font-size: 13px;
    line-height: 15px;
  }
`;
const FooterColumn = styled.div`
  text-align: start;
  line-height: 16px;
  @media (max-width: 750px) {
    font-size: 12px;
    line-height: 15px;
  }
`;

export default function ExperiencesCard(props) {
  return (
    <div className={props.className}>
      <Column>
        <StyledLink to="/cards/exp-1">
          <WrapperImage>
            <StyledImage src={props.scr} alt="imgOne" />
          </WrapperImage>
          <PriceTitle>
            <SubTitle>${props.price}</SubTitle>
            <NameTitle>{props.title}</NameTitle>
          </PriceTitle>
          <FooterColumn>
            <Raiting />
          </FooterColumn>
        </StyledLink>
      </Column>
    </div>
  );
}
