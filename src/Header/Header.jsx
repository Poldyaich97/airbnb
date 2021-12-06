import styled from "styled-components";
import "./Header.css";
import "../Container/Container.jsx";
import Search from "./Search/Search.jsx";
import Nav from "./Nav/Nav.jsx";
import logo from "./logo.svg";

const Root = styled.header`
  margin-bottom: 50px;
  box-shadow: 0px 0.5px 0px rgba(72, 72, 72, 0.3);
`;
const Container = styled.div`
  width: 961px;
  margin: auto;
`;
const Content = styled.div`
  display: flex;
`;
const Logo = styled.div`
  padding: 24px 50px 24px 80px;
`;
function Header() {
  return (
    <Root>
      <Container>
        <Content>
          <Logo>
            <img src={logo} alt="logo" /> {/*не знаю как сделать стили img */}
          </Logo>
          <Search />
          <Nav />
        </Content>
      </Container>
    </Root>
  );
}

export default Header;
