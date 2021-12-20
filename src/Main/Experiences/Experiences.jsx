import styled from "styled-components";
import expImg from "./expImg.png";
import { StyledTitle } from "../SectionTitle/SectionTitle";
import SeeAll from "../SectionSee/SectionSee.jsx";
import Raiting from "../Raiting/RatingLine";
const StyledExperiences = styled.div``;
const Columns = styled.div`
  display: flex;
  column-gap: 17px;
  overflow: hidden;
  padding: 24px 0px 29px 0px;
`;
const HeaderTitle = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Column = styled.div``;
const WrapperImage = styled.div`
  height: 350px;
`;
const StyledImage = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  display: block;
`;
const PriceTitle = styled.div``;
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
const FooterColumn = styled.div`
  text-align: start;
`;

export default function Experiences() {
  return (
    <StyledExperiences>
      <HeaderTitle>
        <StyledTitle>Experiences</StyledTitle>
        <SeeAll />
      </HeaderTitle>
      <Columns>
        <Column>
          <WrapperImage>
            <StyledImage src={expImg} alt="imgOne" />
          </WrapperImage>
          <PriceTitle>
            <TittleTitle>$29</TittleTitle>
            <NameTitle>Forest therapy</NameTitle>
          </PriceTitle>
          <FooterColumn>
            <Raiting />
          </FooterColumn>
        </Column>
      </Columns>
    </StyledExperiences>
  );
}
