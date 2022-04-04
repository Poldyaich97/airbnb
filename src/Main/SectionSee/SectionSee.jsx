import styled from "styled-components";
import Arrow from "./arrow.svg";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  text-decoration: none;
  position: relative;
  color: #383838;
  padding-right: 16px;
  font-size: 14px;
  line-height: 24px;
  width: 56px;
  text-align: right;
  @media (max-width: 700px) {
    width: 72px;
  }

  &::before {
    content: url(${Arrow});
    position: absolute;
    top: 0px;
    right: 0;
    z-index: 1;
  }
`;
export default function SectionSee(props) {
  return <StyledLink to={props.to || ""}>See all</StyledLink>;
}
