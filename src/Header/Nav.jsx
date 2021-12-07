import styled from "styled-components";
const StyledNav = styled.nav`
  margin-left: auto;
`;

const Link = styled.a`
  font-family: Circular Air;
  font-size: 14px;
  line-height: 24px;
  text-decoration: none;
  color: black;
  padding: 12px 0px;
`;

const ListItem = styled.li`
  display: inline-block;
  margin-right: 8px;
`;

function Nav() {
  return (
    <StyledNav>
      <ListItem>
        <Link href="#">Become a host</Link>
      </ListItem>
      <ListItem>
        <Link href="#">Help</Link>
      </ListItem>
      <ListItem>
        <Link href="#">Sign Up</Link>
      </ListItem>
      <ListItem>
        <Link href="#">Log In</Link>
      </ListItem>
    </StyledNav>
  );
}

export default Nav;
