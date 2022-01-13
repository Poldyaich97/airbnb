import styled from "styled-components";
import { StyledTitle } from "../SectionTitle/SectionTitle";
import SeeAll from "../SectionSee/SectionSee.jsx";
import HomesImg from "./HomesImg.png";
import Raiting from "../Raiting/RatingLine";
const Columns = styled.div`
  display: flex;
  column-gap: 17px;
  overflow: hidden;
`;
const HeaderTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`;
const Column = styled.div``;
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
const TittleTitle = styled.h5`
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
  line-height: 18px;
`;
const FooterColumn = styled.div`
  text-align: start;
`;
const StyledHomes = styled.div``;
export default function Homes(props) {
  return (
    <StyledHomes className={props.className}>
      <HeaderTitle>
        <StyledTitle>Homes</StyledTitle>
        <SeeAll />
      </HeaderTitle>
      <Columns>
        <Column>
          <HeaderColumn>
            <WrapperImage>
              <StyledImage src={HomesImg} alt="imgOne" />
            </WrapperImage>
          </HeaderColumn>
          <PriceTitle>
            <TittleTitle>$82</TittleTitle>
            <NameTitle>La Salentina, see, nature & relax</NameTitle>
            <NameSubtitle>Entire house · 9 beds</NameSubtitle>
          </PriceTitle>
          <FooterColumn>
            <Raiting></Raiting>
          </FooterColumn>
        </Column>
      </Columns>
    </StyledHomes>
  );
}
