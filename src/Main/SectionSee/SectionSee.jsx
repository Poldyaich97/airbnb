import styled from "styled-components";

const StyledSeeAll = styled.div`
  display: flex;
  align-items: flex-end;
  text-align: right;
`;
const StyledLink = styled.a`
  text-decoration: none;
  color: #383838;
`;
export default function SeeAll() {
  return (
    <StyledSeeAll>
      <StyledLink href="#">See all</StyledLink>
    </StyledSeeAll>
  );
}
