import styled from "styled-components";

const StyledNav = styled.nav`
  padding: 27px 0px 28px 189px;
  margin-left: auto;
`;

const Link = styled.a`
  font-size: 14px;
  line-height: 24px;
  margin-right: 30px;
  text-decoration: none;
  color: black;
`;

const ListItem = styled.li`
  text-decoration: none;
  list-style: none;
  display: inline-block;
  margin-right: 30px;
`;

function Nav() {
  return (
    <StyledNav>
      <ListItem>
        <Link href="#">Test</Link>
      </ListItem>
      <ListItem>
        <Link href="#">Test</Link>
      </ListItem>
      <ListItem>
        <Link href="#">Test</Link>
      </ListItem>
      <ListItem>
        <Link href="#">Test</Link>
      </ListItem>
    </StyledNav>
  );
}

export default Nav;
