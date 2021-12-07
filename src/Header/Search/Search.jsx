import styled from "styled-components";
import search from "./search.svg";

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
  padding: 12px 40px 12px 0px;
`;

const Input = styled.input.attrs((props) => ({
  type: "search",
  placeholder: "Try “Miami”",
}))`
  width: 350px;
  height: 24px;
  font-size: 16px;
  line-height: 24px;
  border: none;
  padding: 0px 10px 0px 50px;
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
