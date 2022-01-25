import styled from "styled-components";
import Container from "./Container/Container";

const BackgroundHelp = styled.div`
  height: 100%;
  width: 100%;
`;
const ContentHelp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TitleHelp = styled.h1`
  font-size: 48px;
  font-weight: bold;
`;
const SubTitle = styled.p`
  font-size: 24px;
`;

export default function Help() {
  return (
    <BackgroundHelp>
      <Container>
        <ContentHelp>
          <TitleHelp>Help</TitleHelp>
          <SubTitle>
            Сделанные на базе интернет-аналитики выводы призывают нас к новым
            свершениям, которые, в свою очередь, должны быть функционально
            разнесены на независимые элементы.
          </SubTitle>
        </ContentHelp>
      </Container>
    </BackgroundHelp>
  );
}
