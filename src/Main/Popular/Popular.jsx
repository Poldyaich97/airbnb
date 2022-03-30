import styled from "styled-components";
import { StyledTitle } from "../SectionTitle/SectionTitle";
import SeeAll from "../SectionSee/SectionSee.jsx";
import React, { useState, useEffect } from "react";
import PopularCard from "./PopularCard";
import getCardsNumber from "../getCards";

const Columns = styled.div`
  display: flex;
  column-gap: 18px;
  @media (max-width: 1024px) {
    column-gap: 16px;
  }
`;
const HeaderTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

export default function Popular() {
  const [result, setResultat] = useState([]);
  const [cardNumber, setCardNumber] = useState(getCardsNumber([4, 3, 2]));

  useEffect(() => {
    window.addEventListener("resize", () => {
      setCardNumber(getCardsNumber([4, 3, 2]));
    });
    const API = "https://ipwbxlctkx.api.quickmocker.com/reservations";
    fetch(API)
      .then((res) => res.json())
      .then((data) => setResultat(data));
  }, []);

  return (
    <div>
      <HeaderTitle>
        <StyledTitle>Popular reservations around the world</StyledTitle>
        <SeeAll />
      </HeaderTitle>
      <Columns>
        {result.slice(0, cardNumber).map((element, pos) => (
          <div key={pos}>
            <PopularCard
              scr={element.imageSouce}
              title={element.title}
              price={element.price}
              type={element.type}
            />
          </div>
        ))}
      </Columns>
    </div>
  );
}
