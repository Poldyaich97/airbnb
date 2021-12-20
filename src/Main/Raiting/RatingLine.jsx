import styled from "styled-components";
import star from "./star.svg";

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
    <RaitingLine>
      <StarImage src={star} />
      <StarImage src={star} />
      <StarImage src={star} />
      <StarImage src={star} />
      <StarImage src={star} />
      <ReviewsLine>44 reviews</ReviewsLine>
    </RaitingLine>
  );
}
