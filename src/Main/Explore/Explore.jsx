import styled from "styled-components";
import { StyledTitle } from "../SectionTitle/SectionTitle";
import experiencesOne from "./explore_1.jpg";
import experiencesTwo from "./explore_2.jpg";
import experiencesThree from "./explore_3.jpg";

const Title = styled(StyledTitle)`
  margin-bottom: 24px;
`;

const Columns = styled.div`
  display: flex;
  column-gap: 18px;
  margin-top: 24px;
`;
const Column = styled.div`
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 4px;
  display: flex;
  width: 310px;
  @media (max-width: 1024px) {
    width: 236px;
    flex-direction: column;
  }
`;
const WrapperImage = styled.div`
  width: 96px;
  height: 72px;
  margin-right: 24px;
  @media (max-width: 700px) {
    width: 144px;
    height: 78px;
    margin-right: 0px;
  }
`;
const StyledImg = styled.img`
  height: 100%;
  width: 100%;
`;
const StyledText = styled.div`
  display: flex;
  align-items: center;
`;
const Description = styled.p`
  font-size: 17px;
  line-height: 20px;
  text-align: center;
  margin: 0;
  font-weight: bold;
  @media (max-width: 700px) {
    padding: 16px 0px 16px 12px;
  }
`;

export default function Explore(props) {
  return (
    <div className={props.className}>
      <Title>Explore Airbnb</Title>
      <Columns>
        <Column>
          <WrapperImage>
            <StyledImg src={experiencesOne} />
          </WrapperImage>
          <StyledText>
            <Description>Homes</Description>
          </StyledText>
        </Column>
        <Column>
          <WrapperImage>
            <StyledImg src={experiencesTwo} />
          </WrapperImage>

          <StyledText>
            <Description>Experiences</Description>
          </StyledText>
        </Column>
        {/* <Column>
          <WrapperImage>
            <StyledImg src={experiencesThree} />
          </WrapperImage>

          <StyledText>
            <Description>Restaurants</Description>
          </StyledText>
        </Column> */}
      </Columns>
    </div>
  );
}
