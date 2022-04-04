import styled from "styled-components";
import bgStub from "./bgStub.jpg";

const BackgroundStub = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  position: relative;
  z-index: 0;
  &::before {
    content: "";
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: -1;
    background: url(${bgStub}) center / cover no-repeat;
    filter: blur(5px);
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
`;
const SubtitleStub = styled.p`
  font-size: 24px;
  font-weight: 300;
  color: #f5f5f5;
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
