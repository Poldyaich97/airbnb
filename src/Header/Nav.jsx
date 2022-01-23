import styled from "styled-components";
const NavWrapper = styled.nav`
  display: flex;
  column-gap: 8px;
`;

const Link = styled.a`
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
    </NavWrapper>
  );
}

export default Nav;
