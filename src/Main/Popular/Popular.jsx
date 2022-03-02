import styled from "styled-components";
import { StyledTitle } from "../SectionTitle/SectionTitle";
import SeeAll from "../SectionSee/SectionSee.jsx";
import React, { useState, useEffect } from "react";
import PopularCard from "./PopularCard";

const Columns = styled.div`
  display: flex;
  column-gap: 22px;
  overflow: hidden;
  padding: 24px 0px 64px 0px;
`;
const HeaderTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default function Popular() {
  const [resultat, setResultat] = useState({ data: [] });
  useEffect(() => {
    const API = "https://ipwbxlctkx.api.quickmocker.com/reservations";
    fetch(API)
      .then((res) => res.json())
      .then((data) => setResultat(data));
  }, []);

  const a = [
    {
      type: "Generic Soft Chips",
      title: "Oliver",
      price: 72,
      imageSource: "https://i.ibb.co/cC55P1P/Rectangle-6-1.png",
    },
    {
      type: "Intelligent Cotton Salad",
      title: "Michele",
      price: 55,
      imageSource: "https://i.ibb.co/SV14Pc9/Rectangle-6.png",
    },
    {
      type: "Generic Cotton Mouse",
      title: "Max",
      price: 87,
      imageSource: "https://i.ibb.co/V9cvST7/Rectangle-6-3.png",
    },
    {
      type: "Licensed Cotton Gloves",
      title: "Bessie",
      price: 1,
      imageSource: "https://i.ibb.co/VJ2QgBZ/Rectangle-6-2.png",
    },
  ];

  return (
    <div>
      <HeaderTitle>
        <StyledTitle>Popular reservations around the world</StyledTitle>
        <SeeAll />
      </HeaderTitle>
      <Columns>
        {a.map((element, pos) => (
          <div key={pos}>
            <PopularCard
              scr={element.imageSource}
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
