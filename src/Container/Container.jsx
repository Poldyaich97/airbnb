import styled from "styled-components";

const Container = styled.div`
  width: 960px;
  margin: 0px auto;

  @media (max-width: 1024px) {
    width: 750px;
  }

  @media (max-width: 750px) {
    width: 306px;
  }
`;

export default Container;
