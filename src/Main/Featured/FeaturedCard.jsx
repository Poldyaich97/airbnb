import styled from "styled-components";
import React from "react";

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
export default function FeaturedCard(props) {
  return (
    <React.Fragment>
      <WrapperImage>
        <StyledImage src={props.scr} alt="imgOne" />
      </WrapperImage>
      <TittleTitle className="featured__column_title">
        {props.title}
      </TittleTitle>
    </React.Fragment>
  );
}
