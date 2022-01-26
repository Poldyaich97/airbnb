import styled from "styled-components";
import Stub from "./Stub";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes, Link } from "react-router-dom";
import Help from "./help";
import Root from "./Root";

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
          <Routes>
            <Route path="/" element={<Root />}>
              <Route path="/help" element={<Help />} />
              <Route index element={<Main />} />
              <Route path="/login" element={<div>LogIn</div>} />
              <Route path="/hosts" element={<div>hosts</div>} />
            </Route>
          </Routes>
        </Wrapper>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
