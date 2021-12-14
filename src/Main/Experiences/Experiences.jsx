import styled from "styled-components";
import expImg from "./expImg.png";
import star from "./star.svg";
import { StyledTitle } from "../SectionTitle/SectionTitle";
import SeeAll from "../SectionSee/SectionSee.jsx";
const StyledExperiences = styled.div``;
const Columns = styled.div`
  display: flex;
  column-gap: 17px;
  overflow: hidden;
  padding: 24px 0px 29px 0px;
`;
const Column = styled.div``;
const HeaderColumn = styled.div``;
const StyledImage = styled.img`
  width: 230px;
  height: 350px;
  mix-blend-mode: 8px;
`;
const PriceTitle = styled.div`
  margin-bottom: 6px;
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
const FooterColumn = styled.div`
  text-align: start;
`;
const RaitingLine = styled.div`
  text-align: start;
  display: flex;
  column-gap: 4px;
  align-items: center;
`;
const StarImage = styled.img`
  width: 12px;
  height: 12px;
`;
const ReviewsLine = styled.div`
  margin: 0;
`;

export default function Experiences() {
  return (
    <StyledExperiences>
      <StyledTitle>Experiences</StyledTitle>
      <SeeAll />
      <Columns>
        <Column>
          <StyledImage src={expImg} alt="imgOne" />
          <PriceTitle>
            <TittleTitle>$29</TittleTitle>
            <NameTitle>Forest therapy</NameTitle>
          </PriceTitle>
          <FooterColumn>
            <RaitingLine>
              <StarImage src={star} />
              <StarImage src={star} />
              <StarImage src={star} />
              <StarImage src={star} />
              <StarImage src={star} />
              <ReviewsLine>44 reviews</ReviewsLine>
            </RaitingLine>
          </FooterColumn>
        </Column>
      </Columns>
    </StyledExperiences>
  );
}
