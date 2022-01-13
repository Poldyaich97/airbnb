import styled from "styled-components";
import { StyledTitle } from "../SectionTitle/SectionTitle";
import featuredOne from "./Featured.png";
const StyledFeatured = styled.div``;

const Title = styled(StyledTitle)`
  margin-bottom: 24px;
`;

const Columns = styled.div`
  display: flex;
  column-gap: 17px;
  overflow: hidden;
`;
const Column = styled.div``;
const HeaderColumn = styled.div`
  margin-bottom: 8px;
`;
const WrapperImage = styled.div`
  height: 220px;
`;
const StyledImage = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  display: block;
`;
const TittleTitle = styled.h5`
  display: inline-block;
  margin: 0px 2px 0px 0px;
  font-size: 15px;
  line-height: 18px;
`;
export default function Featured(props) {
  return (
    <StyledFeatured className={props.className}>
      <Title>Featured destinations</Title>
      <Columns>
        <Column>
          <HeaderColumn>
            <WrapperImage>
              <StyledImage src={featuredOne} alt="imgOne" />
            </WrapperImage>
          </HeaderColumn>
          <TittleTitle className="featured__column_title">Paris</TittleTitle>
        </Column>
      </Columns>
    </StyledFeatured>
  );
}
