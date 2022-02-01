import styled from "styled-components";
import Container from "../../Container/Container";
import { Outlet, Link } from "react-router-dom";

const WrapperHosts = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0px;
`;
const Title = styled.h1`
  font-size: 32px;
  line-height: 34px;
`;
const Links = styled.div`
  display: flex;
  column-gap: 20px;
  margin-bottom: 10px;
`;
const StyledLink = styled(Link)`
  line-height: 24px;
  text-decoration: none;
  color: #383838;
  padding: 12px 0px;
  font-size: 14px;
`;

export default function Cards(props) {
  return (
    <Container>
      <WrapperHosts>
        <Title>Cards</Title>
        <Links>
          <StyledLink to="exp-1">Хата 1</StyledLink>
          <StyledLink to="exp-2">Хата 2</StyledLink>
          <StyledLink to="exp-3">Хата 3</StyledLink>
        </Links>
        <Outlet />
      </WrapperHosts>
    </Container>
  );
}
