import styled from "styled-components";
import Arrow from "./arrow.svg";

const StyledLink = styled.a`
  text-decoration: none;
  position: relative;
  color: #383838;
  padding-right: 16px;
  font-size: 14px;
  line-height: 24px;
  width: 56px;
  text-align: right;

  &::before {
    content: url(${Arrow});
    position: absolute;
    top: 0px;
    right: 0;
    z-index: 1;
  }
`;
export default function SectionSee() {
  return <StyledLink href="#">See all</StyledLink>;
}
