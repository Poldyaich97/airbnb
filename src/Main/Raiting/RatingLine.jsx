import styled from "styled-components";
import star from "./star.svg";
import React from "react";
const WrapperRaiting = styled.div`
  display: flex;
  column-gap: 8px;
`;
const RaitingLine = styled.div`
  text-align: start;
  display: flex;
  column-gap: 4px;
  align-items: center;
`;
const StarImage = styled.img`
  width: 12px;
  height: 12px;
`;
const ReviewsLine = styled.div`
  margin: 0;
`;
export default function SeeAll() {
  return (
    // <React.Fragment>
    <WrapperRaiting>
      <RaitingLine>
        <StarImage src={star} />
        <StarImage src={star} />
        <StarImage src={star} />
        <StarImage src={star} />
        <StarImage src={star} />
      </RaitingLine>
      <ReviewsLine>44 reviews</ReviewsLine>
    </WrapperRaiting>

    // </React.Fragment>
  );
}
