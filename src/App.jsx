import styled from "styled-components";
import Stub from "./mobilStub/Stub";
import Main from "./Main/Main";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Help from "./help";
import Root from "./Root";
import Hosts from "./hosts/Hosts";

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
              <Route path="/hosts" element={<Hosts />}>
                <Route path="min" element={<div>Голяк</div>} />
                <Route path="medium" element={<div>Норм</div>} />
                <Route path="high" element={<div>Красавчик</div>} />
                {/* <Route path=":hostType" element={<Hosts />} /> */}
              </Route>
            </Route>
          </Routes>
        </Wrapper>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
