import styled from "styled-components";
import star from "./star.svg";
import React from "react";
const WrapperRaiting = styled.div`
  display: flex;
  column-gap: 8px;
`;
const RaitingLine = styled.div`
  display: flex;
  column-gap: 4px;
  align-items: center;
`;
const StarImage = styled.img`
  width: 12px;
  height: 12px;
  @media (max-width: 1024px) {
    width: 9px;
    height: 9px;
  }

  @media (max-width: 750px) {
    width: 7px;
    height: 7px;
  }
`;

export default function RatingLine() {
  return (
    <WrapperRaiting>
      <RaitingLine>
        <StarImage src={star} />
        <StarImage src={star} />
        <StarImage src={star} />
        <StarImage src={star} />
        <StarImage src={star} />
      </RaitingLine>
      <div>44 reviews</div>
    </WrapperRaiting>
  );
}
