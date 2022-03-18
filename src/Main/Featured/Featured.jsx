import styled from "styled-components";
import { StyledTitle } from "../SectionTitle/SectionTitle";
import React, { useState, useEffect } from "react";
import FeaturedCard from "./FeaturedCard";

const Title = styled(StyledTitle)`
  margin-bottom: 24px;
`;

const Columns = styled.div`
  display: flex;
  column-gap: 18px;
`;
const Column = styled.div``;

export default function Featured(props) {
  let NumCard;
  if (window.innerWidth > 1024) {
    NumCard = 6;
    console.log(NumCard);
  } else if (window.innerWidth > 750) {
    NumCard = 4;
    console.log(NumCard);
  } else {
    NumCard = 3;
    console.log(NumCard);
  }
  const [result, setResult] = useState({ data: [] });
  useEffect(() => {
    const API = "https://ipwbxlctkx.api.quickmocker.com/destinations";
    fetch(API)
      .then((res) => res.json())
      .then((data) => setResult(data));
  }, []);

  return (
    <div className={props.className}>
      <Title>Featured destinations</Title>
      <Columns>
        {result.data.slice(0, NumCard).map((element, pos) => (
          <Column key={pos}>
            <FeaturedCard scr={element.imageSource} title={element.title} />
          </Column>
        ))}
      </Columns>
    </div>
  );
}
