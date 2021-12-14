import styled from "styled-components";
import { StyledTitle } from "../SectionTitle/SectionTitle";
import columnsOne from "./columnsOne.svg";
import columnsTwo from "./columnsTwo.svg";
import columnsThree from "./columnsThree.svg";

const StyledExplore = styled.div``;

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
const StyledImg = styled.img`
  width: 96px;
  height: 72px;
  margin-right: 24px;
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
`;

export default function Explore() {
  return (
    <StyledExplore>
      <StyledTitle>Explore Airbnb</StyledTitle>
      <Columns>
        <Column>
          <StyledImg src={columnsOne} />
          <StyledRight>
            <StyledDescription>Homes</StyledDescription>
          </StyledRight>
        </Column>
        <Column>
          <StyledImg src={columnsTwo} />
          <StyledRight>
            <StyledDescription>Experiences</StyledDescription>
          </StyledRight>
        </Column>
        <Column>
          <StyledImg src={columnsThree} />
          <StyledRight>
            <StyledDescription>Restaurants</StyledDescription>
          </StyledRight>
        </Column>
      </Columns>
    </StyledExplore>
  );
}
