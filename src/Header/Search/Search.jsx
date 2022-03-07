import styled from "styled-components";
import search from "./search.svg";
import { useState } from "react";
import React from "react";

const Wrapper = styled.label`
  position: relative;

  &::before {
    content: url(${search});
    position: absolute;
    top: 12px;
    left: 16px;
    z-index: 1;
  }
`;

const Input = styled.input`
  width: 350px;
  font-size: 16px;
  font-weight: 400;
  font-family: "Circular Air";
  line-height: 24px;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  padding: 11px 12px 11px 40px;
  border-radius: 4px;
`;

export default function Search() {
  let textInput = React.createRef();
  const [output, setOutput] = useState("Hello");

  function showInput(event) {
    setOutput(textInput.current.value);
  }

  return (
    <Wrapper>
      <Input
        type="search"
        placeholder="Try “Miami”"
        onInput={showInput}
        value={output}
        ref={textInput}
      />
    </Wrapper>
  );
}
