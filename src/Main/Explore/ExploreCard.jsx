import styled from "styled-components";

const Column = styled.div`
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 4px;
  display: flex;
  width: 310px;
  @media (max-width: 1024px) {
    width: 236px;
  }
  @media (max-width: 750px) {
    width: 144px;
    flex-direction: column;
  }
`;
const WrapperImage = styled.div`
  width: 96px;
  height: 72px;
  margin-right: 24px;
  @media (max-width: 750px) {
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
const Title = styled.p`
  font-size: 17px;
  line-height: 20px;
  text-align: center;
  margin: 0;
  font-weight: bold;
  @media (max-width: 750px) {
    padding: 16px 0px 16px 12px;
  }
`;

export default function ExploreCard(props) {
  return (
    <Column>
      <WrapperImage>
        <StyledImg src={props.scr} />
      </WrapperImage>
      <StyledText>
        <Title>{props.title}</Title>
      </StyledText>
    </Column>
  );
}
