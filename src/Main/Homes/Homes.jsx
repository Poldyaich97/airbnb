import styled from "styled-components";
import { StyledTitle } from "../SectionTitle/SectionTitle";
import SeeAll from "../SectionSee/SectionSee.jsx";
import HomesCards from "./HomesCards";
import React, { useState, useEffect } from "react";
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
  margin-bottom: 24px;
  display: flex;
  align-items: center;
`;

export default function Homes(props) {
  const [result, setResult] = useState([]);
  const [cardNumber, setCardNumber] = useState(getCardsNumber([3, 3, 2]));

  useEffect(() => {
    window.addEventListener("resize", () => {
      setCardNumber(getCardsNumber([3, 3, 2]));
    });
    const API = "https://ipwbxlctkx.api.quickmocker.com/homes";
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setResult(data);
      });
  }, []);

  return (
    <div className={props.className}>
      <HeaderTitle>
        <StyledTitle>Homes</StyledTitle>
        <SeeAll />
      </HeaderTitle>
      <Columns>
        {result.slice(0, cardNumber).map((element, pos) => (
          <div key={pos}>
            <HomesCards
              scr={element.imageSource}
              price={element.price}
              houseType={element.houseType}
              bedsCount={element.bedsCount}
              title={element.title}
            />
          </div>
        ))}
      </Columns>
    </div>
  );
}
