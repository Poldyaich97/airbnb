import styled from "styled-components";
import { StyledTitle } from "../SectionTitle/SectionTitle";
import SeeAll from "../SectionSee/SectionSee.jsx";
import HomesCards from "./HomesCards";
import React, { useState, useEffect } from "react";
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
  let NumCard;
  if (window.innerWidth > 750) {
    NumCard = 3;
  } else {
    NumCard = 2;
  }
  const [result, setResultat] = useState([]);
  useEffect(() => {
    const API = "https://ipwbxlctkx.api.quickmocker.com/homes";
    fetch(API)
      .then((res) => res.json())
      .then((data) => setResultat(data));
  }, []);

  return (
    <div className={props.className}>
      <HeaderTitle>
        <StyledTitle>Homes</StyledTitle>
        <SeeAll />
      </HeaderTitle>
      <Columns>
        {result.slice(0, NumCard).map((element, pos) => (
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
