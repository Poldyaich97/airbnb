import styled from "styled-components";

import Header from "./Header/Header";

import Footer from "./Footer/Footer";
import React from "react";
import { Outlet } from "react-router-dom";

const AppHeader = styled(Header)`
  margin-bottom: 48px;
`;

const AppFooter = styled(Footer)`
  margin-top: 64px;
  margin-bottom: 48px;
  @media (max-width: 750px) {
    margin-top: 40px;
    margin-bottom: 18px;
  }
`;

function Root() {
  return (
    <React.Fragment>
      <AppHeader />
      <Outlet />
      <AppFooter />
    </React.Fragment>
  );
}

export default Root;
