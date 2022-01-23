import styled from "styled-components";
import Container from "../Container/Container";
import Explore from "./Explore/Explore";
import Experiences from "./Experiences/Experiences.jsx";
import Homes from "./Homes/Homes";
import Popular from "./Popular/Popular";
import Featured from "./Featured/Featured";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 48px;
`;

function Main(props) {
  return (
    <div className={props.className}>
      <Container>
        <Wrapper>
          <Explore />
          <Experiences />
          <Homes />
          <Popular />
          <Featured />
        </Wrapper>
      </Container>
    </div>
  );
}

export default Main;
