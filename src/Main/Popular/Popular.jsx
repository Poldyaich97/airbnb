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
const HeaderTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderColumn = styled.div`
  margin-bottom: 12px;
`;
const WrapperImage = styled.div`
  height: 160px;
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
const СountryTitle = styled.h5`
  display: block;
  font-size: 10px;
  line-height: 12px;
  margin: 0px;
  text-transform: uppercase;
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
  font-weight: 300;
`;
export default function Popular() {
  return (
    <StyledPopular>
      <HeaderTitle>
        <StyledTitle>Popular reservations around the world</StyledTitle>
        <SeeAll />
      </HeaderTitle>
      <Columns>
        <div>
          <HeaderColumn>
            <WrapperImage>
              <StyledImage src={PopularPictureOne} alt="imgOne" />
            </WrapperImage>
          </HeaderColumn>
          <PriceTitle>
            <СountryTitle>Speakeasy</СountryTitle>
            <NameTitle>Chumley’s</NameTitle>
            <NameSubtitle>About $60 per person</NameSubtitle>
          </PriceTitle>
        </div>
      </Columns>
    </StyledPopular>
  );
}
