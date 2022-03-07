import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";

const WrapperPage = styled.div`
  padding: 20px 0px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
`;
const StyledLink = styled(Link)`
  line-height: 24px;
  text-decoration: none;
  color: #383838;
  font-family: "Circular Air";
`;
const StyledButton = styled.button`
  border-radius: 20px;
  background: white;
`;

export default function PageNotFound() {
  return (
    <WrapperPage>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <StyledButton>
        <StyledLink to="/">Go back to the main page</StyledLink>
      </StyledButton>
    </WrapperPage>
  );
}
