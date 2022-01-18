import styled from "styled-components";
import Stub from "./Stub";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import React from "react";

const AppHeader = styled(Header)`
  margin-bottom: 48px;
`;

const AppFooter = styled(Footer)`
  margin-bottom: 48px;
`;
const Wrapper = styled.div`
  @media (max-width: 480px) {
    display: none;
  }
`;

const StyledStub = styled(Stub)`
  @media (min-width: 480px) {
    display: none;
  } ;
`;

function App() {
  return (
    <React.Fragment>
      <StyledStub />
      <Wrapper>
        <AppHeader />
        <Main />
        <AppFooter />
      </Wrapper>
    </React.Fragment>
  );
}

export default App;
