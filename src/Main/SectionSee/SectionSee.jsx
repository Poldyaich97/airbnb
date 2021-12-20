import styled from "styled-components";
import Arrow from "./arrow.svg";
const StyledSeeAll = styled.div`
  display: flex;
  align-items: flex-end;
  text-align: right;
`;
const StyledLink = styled.a`
  text-decoration: none;
  position: relative;
  color: #383838;

  &::before {
    content: url(${Arrow});
    position: absolute;
    top: 0px;
    left: 50px;
    z-index: 12;
  }
`;
export default function SeeAll() {
  return (
    <StyledSeeAll>
      <StyledLink href="#">See all</StyledLink>
    </StyledSeeAll>
  );
}
