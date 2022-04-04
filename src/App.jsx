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
import PageNotFound from "./PageNotFound";
import LogIn from "./Login";
import SignIn from "./SignIn";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <React.Fragment>
        <div>
          <Routes>
            <Route path="/" element={<Root />}>
              <Route index element={<Main />} />
              <Route path="help" element={<Help />} />
              <Route path="login" element={<LogIn />} />
              <Route path="signIn" element={<SignIn />} />
              <Route path="hosts" element={<Hosts />}>
                <Route path=":hostId" element={<Host />} />
              </Route>
              <Route path="experiences" element={<Experiences />} />
              <Route path="cards" element={<Cards />}>
                <Route path=":Id" element={<Card />} />
              </Route>
              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Routes>
        </div>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
