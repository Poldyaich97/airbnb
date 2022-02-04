import styled from "styled-components";
import { Link } from "react-router-dom";
const NavWrapper = styled.nav`
  display: flex;
  column-gap: 8px;
`;
const StyledLink = styled(Link)`
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
        <StyledLink to="/hosts">Become a host</StyledLink>
      </ListItem>
      <ListItem>
        <StyledLink to="/help">Help</StyledLink>
      </ListItem>
      <ListItem>
        <StyledLink to="#">Sign Up</StyledLink>
      </ListItem>
      <ListItem>
        <StyledLink to="/login">Log In</StyledLink>
      </ListItem>
    </NavWrapper>
  );
}

export default Nav;
