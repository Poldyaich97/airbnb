import styled from "styled-components";
import { StyledTitle } from "../SectionTitle/SectionTitle";
import SeeAll from "../SectionSee/SectionSee.jsx";
import PopularPictureOne from "./PopularPictureOne.png";
const StyledPopular = styled.div``;
const Columns = styled.div`
  display: flex;
  column-gap: 17px;
  overflow: hidden;
  padding: 24px 0px 64px 0px;
`;
const Column = styled.div``;
const HeaderColumn = styled.div`
  margin-bottom: 12px;
`;
const StyledImage = styled.img`
  width: 229px;
  height: 164px;
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
const СountryTitle = styled.h5`
  display: block;
  font-size: 12px;
  line-height: 12px;
  margin: 0px;
`;
const NameTitle = styled.span`
  font-size: 18px;
  line-height: 21px;
  display: block;
  padding: 4px 0px;
  margin: 0;
`;
const NameSubtitle = styled.p`
  margin: 0;
  font-size: 18px;
  line-height: 21px;
  font-weight: 400;
`;
export default function Popular() {
  return (
    <StyledPopular>
      <StyledTitle>Homes</StyledTitle>
      <SeeAll></SeeAll>
      <Columns>
        <Column>
          <HeaderColumn>
            <StyledImage src={PopularPictureOne} alt="imgOne" />
          </HeaderColumn>
          <PriceTitle>
            <СountryTitle>Speakeasy</СountryTitle>
            <NameTitle>Chumley’s</NameTitle>
            <NameSubtitle>About $60 per person</NameSubtitle>
          </PriceTitle>
        </Column>
        <Column>
          <HeaderColumn>
            <StyledImage src={PopularPictureOne} alt="imgOne" />
          </HeaderColumn>
          <PriceTitle>
            <СountryTitle>Speakeasy</СountryTitle>
            <NameTitle>Chumley’s</NameTitle>
            <NameSubtitle>About $60 per person</NameSubtitle>
          </PriceTitle>
        </Column>
        <Column>
          <HeaderColumn>
            <StyledImage src={PopularPictureOne} alt="imgOne" />
          </HeaderColumn>
          <PriceTitle>
            <СountryTitle>Speakeasy</СountryTitle>
            <NameTitle>Chumley’s</NameTitle>
            <NameSubtitle>About $60 per person</NameSubtitle>
          </PriceTitle>
        </Column>
        <Column>
          <HeaderColumn>
            <StyledImage src={PopularPictureOne} alt="imgOne" />
          </HeaderColumn>
          <PriceTitle>
            <СountryTitle>Speakeasy</СountryTitle>
            <NameTitle>Chumley’s</NameTitle>
            <NameSubtitle>About $60 per person</NameSubtitle>
          </PriceTitle>
        </Column>
      </Columns>
    </StyledPopular>
  );
}
