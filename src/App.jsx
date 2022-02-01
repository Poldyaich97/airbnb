import styled from "styled-components";
import Stub from "./mobilStub/Stub";
import Main from "./Main/Main";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Help from "./help";
import Root from "./Root";
import Hosts from "./Hosts/Hosts";
import Host from "./Hosts/Host";
import Experiences from "./Main/Experiences/Experiences";
import Cards from "./Main/Experiences/Cards.jsx";
import Card from "./Main/Experiences/Card.jsx";

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
              <Route index element={<Main />} />
              <Route path="help" element={<Help />} />
              <Route path="login" element={<div>LogIn</div>} />
              <Route path="hosts" element={<Hosts />}>
                <Route path=":hostId" element={<Host />} />
              </Route>
              <Route path="experiences" element={<Experiences />} />
              <Route path="cards" element={<Cards />}>
                <Route path=":Id" element={<Card />} />
              </Route>
            </Route>
          </Routes>
        </Wrapper>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
