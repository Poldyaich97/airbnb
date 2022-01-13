import styled from "styled-components";
import Container from "../Container/Container";
import Explore from "./Explore/Explore";
import Experiences from "./Experiences/Experiences.jsx";
import Homes from "./Homes/Homes";
import Popular from "./Popular/Popular";
import Featured from "./Featured/Featured";

const StyledExplore = styled(Explore)`
  margin-bottom: 48px;
`;
const StyledExperiences = styled(Experiences)`
  margin-bottom: 68px;
`;
const StyledHomes = styled(Homes)`
  margin-bottom: 50px;
`;
const StyledPopular = styled(Popular)`
  margin-bottom: 48px;
`;
const StyledFeatured = styled(Featured)`
  margin-bottom: 64px;
`;

const StyledMain = styled.main``;
function Main(props) {
  return (
    <StyledMain className={props.className}>
      <Container>
        <StyledExplore />
        <StyledExperiences />
        <StyledHomes />
        <StyledPopular />
        <StyledFeatured />
      </Container>
    </StyledMain>
  );
}

export default Main;
