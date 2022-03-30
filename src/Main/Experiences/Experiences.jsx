import styled from "styled-components";
import { StyledTitle } from "../SectionTitle/SectionTitle";
import SectionSee from "../SectionSee/SectionSee.jsx";
import ExperiencesCard from "./ExperiencesCard";
import React, { useState, useEffect } from "react";
import getCardsNumber from "../getCards";

const HeaderTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
`;

const Columns = styled.div`
  display: flex;
  column-gap: 16px;
`;

export default function Experiences(props) {
  const [result, setResult] = useState([]);
  const [cardNumber, setCardNumber] = useState(getCardsNumber([4, 3, 2]));

  useEffect(() => {
    window.addEventListener("resize", () => {
      setCardNumber(getCardsNumber([4, 3, 2]));
    });
    const API = "https://ipwbxlctkx.api.quickmocker.com/experiences";
    fetch(API)
      .then((res) => res.json())
      .then((data) => setResult(data));
  }, []);

  return (
    <div>
      <HeaderTitle>
        <StyledTitle>Experiences</StyledTitle>
        <SectionSee to="cards" />
      </HeaderTitle>
      <Columns>
        {result.slice(0, cardNumber).map((element, pos) => (
          <div key={pos}>
            <ExperiencesCard
              scr={element.imageSource}
              price={element.price}
              title={element.title}
            />
          </div>
        ))}
      </Columns>
    </div>
  );
}
