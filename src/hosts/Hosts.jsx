import styled from "styled-components";
import Container from "../Container/Container";
import { Outlet, Link } from "react-router-dom";
// import { getHosts } from "./data";

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

export default function Hosts(props) {
  // let hosts = getHosts();
  // let host = hosts.find((item) => item.id === 1);

  return (
    <Container>
      <WrapperHosts>
        <Title>Hosts</Title>
        <Links>
          <StyledLink to="min">min</StyledLink>
          <StyledLink to="medium">medium</StyledLink>
          <StyledLink to="high">high</StyledLink>
        </Links>
        <Outlet />
      </WrapperHosts>
    </Container>
  );
}
