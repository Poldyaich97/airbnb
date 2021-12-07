import styled from "styled-components";
const StyledNav = styled.nav`
  padding: 27px 0px 28px 189px;
  margin-left: auto;
`;

const Link = styled.a`
  font-family: Circular Air;
  font-size: 14px;
  line-height: 24px;
  font-style: normal;
  font-weight: normal;
  text-decoration: none;
  color: black;
`;

const ListItem = styled.li`
  text-decoration: none;
  list-style: none;
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
