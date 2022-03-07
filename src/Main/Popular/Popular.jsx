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
        {resultat.slice(0, 4).map((element, pos) => (
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
