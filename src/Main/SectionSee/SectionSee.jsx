import styled from "styled-components";
import Arrow from "./arrow.svg";
const StyledSeeAll = styled.div`
  display: flex;
  align-items: center;
  text-align: right;
`;
const StyledLink = styled.a`
  text-decoration: none;
  position: relative;
  color: #383838;
  padding-right: 16px;
  font-size: 14px;
  line-height: 24px;

  &::before {
    content: url(${Arrow});
    position: absolute;
    top: 0px;
    right: 0;
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
