import styled from "styled-components";
import Stub from "./Stub";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes, Link } from "react-router-dom";
import Help from "./help";

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
    <BrowserRouter>
      <React.Fragment>
        <StyledStub />
        <Wrapper>
          <AppHeader />
          <Routes>
            <Route path="/help" element={<Help />} />
          </Routes>
          <Main />
          <AppFooter />
        </Wrapper>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
