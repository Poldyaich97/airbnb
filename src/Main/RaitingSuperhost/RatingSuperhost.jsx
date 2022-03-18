import styled from "styled-components";
import star from "./star.svg";
import React from "react";
const WrapperRaiting = styled.div`
  display: flex;
  column-gap: 8px;
  @media (max-width: 700px) {
    font-size: 12px;
    line-height: 14px;
  }
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
const ReviewsLine = styled.p`
  margin: 0;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  @media (max-width: 700px) {
    font-size: 12px;
    line-height: 14px;
  }
`;
export default function RatingSuperhost(props) {
  return (
    <WrapperRaiting>
      <RaitingLine>
        <StarImage src={star} />
        <StarImage src={star} />
        <StarImage src={star} />
        <StarImage src={star} />
        <StarImage src={star} />
      </RaitingLine>
      <ReviewsLine>97 · Superhost</ReviewsLine>
    </WrapperRaiting>
  );
}
