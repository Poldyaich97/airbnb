import styled from "styled-components";
import Raiting from "../RaitingSuperhost/RatingSuperhost";

const HeaderColumn = styled.div`
  margin-bottom: 8px;
`;
const WrapperImage = styled.div`
  height: 204px;
`;
const StyledImage = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  display: block;
`;
const PriceTitle = styled.div`
  font-weight: bold;
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
`;
const NameSubtitle = styled.p`
  margin: 0;
  font-weight: 400;
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
        <WrapperImage>
          <StyledImage src={props.scr} alt="imgOne" />
        </WrapperImage>
      </HeaderColumn>
      <PriceTitle>
        <SubTitle>${props.price}</SubTitle>
        <NameTitle>{props.title}</NameTitle>
        <NameSubtitle>
          {props.houseType} · {props.bedsCount} {result}
        </NameSubtitle>
      </PriceTitle>
      <FooterColumn>
        <Raiting />
        {/* тут вопрос. записал в todo  */}
      </FooterColumn>
    </div>
  );
}
