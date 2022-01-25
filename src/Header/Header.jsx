import styled from "styled-components";
import Container from "../Container/Container";
import Search from "./Search/Search.jsx";
import Nav from "./Nav.jsx";
import logo from "./logo.svg";
import { Route, Routes, Link } from "react-router-dom";

const Root = styled.header`
  box-shadow: 0px 0.5px 0px rgba(72, 72, 72, 0.3);
  padding: 12px 0px;
`;
const Content = styled.div`
  display: flex;
  align-items: center;
`;
const StyledNav = styled(Nav)`
  margin-left: auto;
`;
const Logo = styled.div`
  margin-right: 50px;
`;
const StyledImg = styled.img`
  width: 30px;
  height: 30px;
  display: block;
`;
function Header(props) {
  return (
    <Root className={props.className}>
      <Container>
        <Content>
          <Logo>
            <Link to="/#">
              <StyledImg src={logo} alt="logo" />
            </Link>
          </Logo>
          <Search />
          <StyledNav />
        </Content>
      </Container>
    </Root>
  );
}

export default Header;
