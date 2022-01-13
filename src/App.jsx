import styled from "styled-components";
import Stub from "./Stub";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";

const AppHeader = styled(Header)`
  margin-bottom: 48px;

  @media (max-width: 480px) {
    display: none;
  }
`;
const AppMain = styled(Main)`
  @media (max-width: 480px) {
    display: none;
  }
`;
const AppFooter = styled(Footer)`
  margin-bottom: 48px;

  @media (max-width: 480px) {
    display: none;
  }
`;
const Wrapper = styled.div``;

const StyledStub = styled(Stub)`
  @media (max-width: 480px) {
    display: flex;
  } ;
`;

function App() {
  return (
    <Wrapper>
      <StyledStub />
      <AppHeader />
      <AppMain />
      <AppFooter />
    </Wrapper>
  );
}

export default App;
