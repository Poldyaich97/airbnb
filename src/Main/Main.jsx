import styled from "styled-components";
import Container from "../Container/Container";
import Explore from "./Explore/Explore";
import Experiences from "./Experiences/Experiences.jsx";
import Homes from "./Homes/Homes";
import Popular from "./Popular/Popular";
import Featured from "./Featured/Featured";

const StyledExplore = styled(Explore)`
  margin-bottom: 100px;
`;
const StyledMain = styled.main`
  padding: 48px 0px;
`;
function Main() {
  return (
    <StyledMain>
      <Container>
        <StyledExplore />
        <Experiences />
        <Homes />
        <Popular />
        <Featured />
      </Container>
    </StyledMain>
  );
}

export default Main;
