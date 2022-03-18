import styled from "styled-components";
import { StyledTitle } from "../SectionTitle/SectionTitle";
import SectionSee from "../SectionSee/SectionSee.jsx";
import ExperiencesCard from "./ExperiencesCard";
import React, { useState, useEffect } from "react";

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
    const API = "https://ipwbxlctkx.api.quickmocker.com/experiences";
    fetch(API)
      .then((res) => res.json())
      .then((data) => setResultat(data));
  }, []);

  return (
    <div>
      <HeaderTitle>
        <StyledTitle>Experiences</StyledTitle>
        <SectionSee to="cards" />
      </HeaderTitle>
      <Columns>
        {resultat.slice(0, NumCard).map((element, pos) => (
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
