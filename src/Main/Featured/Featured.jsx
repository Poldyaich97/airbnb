import styled from "styled-components";
import { StyledTitle } from "../SectionTitle/SectionTitle";
import React, { useState, useEffect } from "react";
import FeaturedCard from "./FeaturedCard";
import getCardsNumber from "../getCards";

const Title = styled(StyledTitle)`
  margin-bottom: 24px;
`;

const Columns = styled.div`
  display: flex;
  column-gap: 18px;
`;
const Column = styled.div``;

export default function Featured(props) {
  const [result, setResult] = useState({ data: [] });
  const [cardNumber, setCardNumber] = useState(getCardsNumber([6, 4, 3]));

  useEffect(() => {
    window.addEventListener("resize", () => {
      setCardNumber(getCardsNumber([6, 4, 3]));
    });
    const API = "https://lzu9fc6y5h.api.quickmocker.com/destination";
    fetch(API)
      .then((res) => res.json())
      .then((data) => setResult(data));
  }, []);

  return (
    <div className={props.className}>
      <Title>Featured destinations</Title>
      <Columns>
        {result.data.slice(0, cardNumber).map((element, pos) => (
          <Column key={pos}>
            <FeaturedCard scr={element.imageSource} title={element.title} />
          </Column>
        ))}
      </Columns>
    </div>
  );
}
