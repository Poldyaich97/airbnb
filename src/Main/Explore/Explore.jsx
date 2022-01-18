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
  flex-basis: 100%;
`;
const WrapperImage = styled.div`
  height: 72px;
  margin-right: 24px;
`;
const StyledImg = styled.img`
  height: 100%;
  width: 100%;
`;
const StyledRight = styled.div`
  display: flex;
  align-items: center;
`;
const StyledDescription = styled.p`
  font-size: 17px;
  line-height: 20px;
  text-align: center;
  margin: 0;
  font-weight: bold;
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
          <StyledRight>
            <StyledDescription>Homes</StyledDescription>
          </StyledRight>
        </Column>
        <Column>
          <WrapperImage>
            <StyledImg src={experiencesTwo} />
          </WrapperImage>

          <StyledRight>
            <StyledDescription>Experiences</StyledDescription>
          </StyledRight>
        </Column>
        <Column>
          <WrapperImage>
            <StyledImg src={experiencesThree} />
          </WrapperImage>

          <StyledRight>
            <StyledDescription>Restaurants</StyledDescription>
          </StyledRight>
        </Column>
      </Columns>
    </div>
  );
}
