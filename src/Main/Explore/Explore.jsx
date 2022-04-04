import styled from "styled-components";
import { StyledTitle } from "../SectionTitle/SectionTitle";
import ExploreCard from "./ExploreCard";
import React, { useState, useEffect } from "react";
import getCardsNumber from "../getCards";

const Title = styled(StyledTitle)`
  margin-bottom: 24px;
`;

const Columns = styled.div`
  display: flex;
  column-gap: 18px;
  margin-top: 24px;
`;

export default function Explore(props) {
  const [result, setResult] = useState([]);
  const [cardNumber, setCardNumber] = useState(getCardsNumber([3, 3, 2]));

  useEffect(() => {
    window.addEventListener("resize", () => {
      setCardNumber(getCardsNumber([3, 3, 2]));
    });
    const API = "https://lzu9fc6y5h.api.quickmocker.com/explore";
    fetch(API)
      .then((res) => res.json())
      .then((data) => setResult(data));
  }, []);
  return (
    <div className={props.className}>
      <Title>Explore Airbnb</Title>
      <Columns>
        {result.slice(0, cardNumber).map((element, pos) => (
          <div key={pos}>
            <ExploreCard scr={element.imageSouce} title={element.title} />
          </div>
        ))}
      </Columns>
    </div>
  );
}
