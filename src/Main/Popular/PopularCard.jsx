import styled from "styled-components";
import React from "react";
const Wrapper = styled.div`
  //   width: 223px;
`;
const HeaderColumn = styled.div`
  margin-bottom: 12px;
`;
const StyledImage = styled.img`
  object-fit: contain;
  width: 100%;
  height: 160px;
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
export default function PopularCard(props) {
  return (
    <React.Fragment>
      <Wrapper>
        <HeaderColumn>
          <StyledImage src={props.scr} alt="imgOne" />
        </HeaderColumn>
        <PriceTitle>
          <СountryTitle>{props.type}</СountryTitle>
          <NameTitle>{props.title}</NameTitle>
          <NameSubtitle>{props.price}</NameSubtitle>
        </PriceTitle>
      </Wrapper>
    </React.Fragment>
  );
}
