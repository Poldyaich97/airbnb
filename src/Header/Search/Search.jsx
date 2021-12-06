import styled from "styled-components";

const Test = styled.div`
  padding: 16px 10px;
  background-color: white;
`;

const Wrapper = styled.div`
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  border-radius: 4px;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  position: relative;
`;
const Input = styled.input.attrs((props) => ({
  type: "search",
  placeholder: "Try “Miami”",
}))`
  width: 100%;
  height: 100%;
  font-size: 16px;
  line-height: 24px;
  border: none;
  padding: 12px 191px 12px 53px;
`;

export default function Search() {
  return (
    <Test>
      <Wrapper>
        <Input></Input>
      </Wrapper>
    </Test>
  );
}
