import styled from "styled-components";
import { StyledTitle } from "../SectionTitle/SectionTitle";
import SeeAll from "../SectionSee/SectionSee.jsx";
import HomesImg from "./HomesImg.png";
import star from "./star.svg";
const Columns = styled.div`
  display: flex;
  column-gap: 17px;
  overflow: hidden;
  padding: 24px 0px 64px 0px;
`;
const Column = styled.div``;
const HeaderColumn = styled.div`
  margin-bottom: 8px;
`;
const StyledImage = styled.img`
  width: 310px;
  height: 204px;
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
const RaitingLine = styled.div`
  text-align: start;
  display: flex;
  column-gap: 4px;
`;
const StarImage = styled.img`
  width: 12px;
  height: 12px;
  padding: 6px 0px;
`;
const ReviewsLine = styled.div`
  margin: 0;
`;
const StyledHomes = styled.div``;
export default function Popular() {
  return (
    <StyledHomes>
      <StyledTitle>Homes</StyledTitle>
      <SeeAll></SeeAll>
      <Columns>
        <Column>
          <HeaderColumn>
            <StyledImage src={HomesImg} alt="imgOne" />
          </HeaderColumn>
          <PriceTitle>
            <TittleTitle>$82</TittleTitle>
            <NameTitle>La Salentina, see, nature & relax</NameTitle>
            <NameSubtitle>Entire house · 9 beds</NameSubtitle>
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
        <Column>
          <HeaderColumn>
            <StyledImage src={HomesImg} alt="imgOne" />
          </HeaderColumn>
          <PriceTitle>
            <TittleTitle>$82</TittleTitle>
            <NameTitle>La Salentina, see, nature & relax</NameTitle>
            <NameSubtitle>Entire house · 9 beds</NameSubtitle>
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
        <Column>
          <HeaderColumn>
            <StyledImage src={HomesImg} alt="imgOne" />
          </HeaderColumn>
          <PriceTitle>
            <TittleTitle>$82</TittleTitle>
            <NameTitle>La Salentina, see, nature & relax</NameTitle>
            <NameSubtitle>Entire house · 9 beds</NameSubtitle>
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
        <Column>
          <HeaderColumn>
            <StyledImage src={HomesImg} alt="imgOne" />
          </HeaderColumn>
          <PriceTitle>
            <TittleTitle>$82</TittleTitle>
            <NameTitle>La Salentina, see, nature & relax</NameTitle>
            <NameSubtitle>Entire house · 9 beds</NameSubtitle>
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
    </StyledHomes>
  );
}
