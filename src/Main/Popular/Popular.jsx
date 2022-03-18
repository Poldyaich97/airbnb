import styled from "styled-components";
import { StyledTitle } from "../SectionTitle/SectionTitle";
import SeeAll from "../SectionSee/SectionSee.jsx";
import React, { useState, useEffect } from "react";
import PopularCard from "./PopularCard";

const Columns = styled.div`
  display: flex;
  column-gap: 22px;
  overflow: hidden;
`;
const HeaderTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

export default function Popular() {
  let NumCard;
  if (window.innerWidth > 1024) {
    NumCard = 4;
    console.log(NumCard);
  } else if (window.innerWidth > 750) {
    NumCard = 3;
    console.log(NumCard);
  } else {
    NumCard = 2;
    console.log(NumCard);
  }
  const [resultat, setResultat] = useState([]);
  useEffect(() => {
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
        {resultat.slice(0, NumCard).map((element, pos) => (
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
