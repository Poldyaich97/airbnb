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
