import styled from "styled-components";
import Raiting from "../RaitingSuperhost/RatingSuperhost";

const HeaderColumn = styled.div`
  margin-bottom: 8px;
  height: 204px;
  width: 310px;
  @media (max-width: 1024px) {
    height: 158px;
    width: 240px;
  }
  @media (max-width: 750px) {
    width: 135px;
    height: 92px;
  }
`;

const StyledImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  display: block;
`;
const PriceTitle = styled.div`
  font-weight: bold;
  display: flex;
  flex-direction: column;
  row-gap: 2px;
  margin-bottom: 7px;
  @media (max-width: 1024px) {
    margin-bottom: 5px;
  }

  @media (max-width: 750px) {
    margin-bottom: 4px;
  }
`;
const SubTitle = styled.h5`
  display: inline-block;
  margin: 0px 2px 0px 0px;
  font-size: 15px;
  line-height: 18px;
`;
const NameTitle = styled.span`
  font-size: 15px;
  line-height: 18px;
  @media (max-width: 750px) {
    font-size: 13px;
    line-height: 15px;
  }
`;
const NameSubtitle = styled.p`
  margin: 0;
  font-weight: 400;
  @media (max-width: 750px) {
    font-weight: 300;
    font-size: 13px;
    line-height: 15px;
  }
`;
const FooterColumn = styled.div`
  text-align: start;
`;

export default function HomesCards(props, data) {
  let result;
  if (props.bedsCount === 1) {
    result = "bed";
  } else result = "beds";

  return (
    <div>
      <HeaderColumn>
        <StyledImage src={props.scr} alt="imgOne" />
      </HeaderColumn>
      <PriceTitle>
        <div>
          <SubTitle>${props.price}</SubTitle>
          <NameTitle>{props.title}</NameTitle>
        </div>
        <NameSubtitle>
          {props.houseType} · {props.bedsCount} {result}
        </NameSubtitle>
      </PriceTitle>
      <FooterColumn>
        <Raiting />
      </FooterColumn>
    </div>
  );
}
