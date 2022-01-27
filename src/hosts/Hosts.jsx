import styled from "styled-components";
import Container from "../Container/Container";

const WrapperHosts = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  font-size: 32px;
  line-height: 34px;
`;

export default function Hosts(props) {
  return (
    <Container>
      <WrapperHosts>
        <Title>Hosts</Title>
      </WrapperHosts>
    </Container>
  );
}
