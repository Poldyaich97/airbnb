import styled from "styled-components";
import bgStub from "./bgStub.jpg";

const BackgroundStub = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${bgStub});
  background-size: cover;
  background-position: center center;
  backdrop-filter: blur(5px);
  display: none;
  position: relative;
  &::before {
    content: "";
    backdrop-filter: blur(6px);
    position: absolute;
    height: 100vh;
    width: 100vw;
    z-index: -1;
  }
`;
const WrapperStub = styled.div`
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;
const TitleStub = styled.h1`
  margin: 0 0 20px 0;
  font-size: 32px;
  font-weight: 600;
  color: #f5f5f5;
  text-align: center;
  font-family: "Circular Air Light";
  z-index: 3;
`;
const SubtitleStub = styled.p`
  font-size: 24px;
  font-weight: 600;
  color: #f5f5f5;
  font-family: "Circular Air Light";
  text-align: center;
`;

export default function Stub(props) {
  return (
    <BackgroundStub className={props.className}>
      <WrapperStub>
        <div>
          <TitleStub>Вечер в хату,господа</TitleStub>
          <SubtitleStub>Прошу зайти с пк.</SubtitleStub>
          <SubtitleStub>Мобильная версия сайта недоступна!</SubtitleStub>
        </div>
      </WrapperStub>
    </BackgroundStub>
  );
}
