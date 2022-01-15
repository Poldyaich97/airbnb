import styled from "styled-components";
const StyledNav = styled.nav`
  margin-left: auto;
  display: flex;
  column-gap: 8px;
`;

const Link = styled.a`
  font-size: 14px;
  line-height: 24px;
  text-decoration: none;
  color: black;
  padding: 12px 0px;
  font-weight: 400;
`;

const ListItem = styled.li`
  display: inline-block;
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
