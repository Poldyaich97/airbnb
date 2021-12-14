import styled from "styled-components";
import { StyledTitle } from "../SectionTitle/SectionTitle";
import featuredOne from "./Featured.png";
const StyledFeatured = styled.div``;
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
  width: 147px;
  height: 220px;
`;
const TittleTitle = styled.h5`
  display: inline-block;
  margin: 0px 2px 0px 0px;
  font-size: 15px;
  line-height: 18px;
`;
export default function Featured() {
  return (
    <StyledFeatured>
      <StyledTitle>Featured destinations</StyledTitle>
      <Columns>
        <Column>
          <HeaderColumn>
            <StyledImage src={featuredOne} alt="imgOne" />
          </HeaderColumn>
          <TittleTitle className="featured__column_title">Paris</TittleTitle>
        </Column>
        <Column>
          <HeaderColumn>
            <StyledImage src={featuredOne} alt="imgOne" />
          </HeaderColumn>
          <TittleTitle className="featured__column_title">Paris</TittleTitle>
        </Column>
        <Column>
          <HeaderColumn>
            <StyledImage src={featuredOne} alt="imgOne" />
          </HeaderColumn>
          <TittleTitle className="featured__column_title">Paris</TittleTitle>
        </Column>
        <Column>
          <HeaderColumn>
            <StyledImage src={featuredOne} alt="imgOne" />
          </HeaderColumn>
          <TittleTitle className="featured__column_title">Paris</TittleTitle>
        </Column>
        <Column>
          <HeaderColumn>
            <StyledImage src={featuredOne} alt="imgOne" />
          </HeaderColumn>
          <TittleTitle className="featured__column_title">Paris</TittleTitle>
        </Column>
        <Column>
          <HeaderColumn>
            <StyledImage src={featuredOne} alt="imgOne" />
          </HeaderColumn>
          <TittleTitle className="featured__column_title">Paris</TittleTitle>
        </Column>
      </Columns>
    </StyledFeatured>
  );
}
