import "./Main.css";
import styled from "styled-components";
import Container from "../Container/Container";
import Explore from "./Explore/Explore";
import Experiences from "./Experiences/Experiences.jsx";
import Homes from "./Homes/Homes";
import Popular from "./Popular/Popular";
import Featured from "./Featured/Featured";

const MainExplore = styled(Explore)`
  margin-bottom: 47px;
`;

function Main() {
  return (
    <main className="main">
      <Container>
        <MainExplore></MainExplore>
        <Experiences></Experiences>
        <Homes></Homes>
        <Popular></Popular>
        <Featured></Featured>
      </Container>
    </main>
  );
}

export default Main;
