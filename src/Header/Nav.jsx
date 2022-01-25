import styled from "styled-components";
import { Route, Routes, Link } from "react-router-dom";
const NavWrapper = styled.nav`
  display: flex;
  column-gap: 8px;
`;

const Linki = styled.a`
  line-height: 24px;
  text-decoration: none;
  color: #383838;
  padding: 12px 0px;
  font-size: 14px;
`;

const ListItem = styled.li`
  display: block;
`;

function Nav(props) {
  return (
    <NavWrapper className={props.className}>
      <ListItem>
        <Linki href="#">Become a host</Linki>
      </ListItem>
      <ListItem>
        <Link to="/help">Help</Link>
      </ListItem>
      <ListItem>
        <Linki href="#">Sign Up</Linki>
      </ListItem>
      <ListItem>
        <Linki href="#">Log In</Linki>
      </ListItem>
    </NavWrapper>
  );
}

export default Nav;
