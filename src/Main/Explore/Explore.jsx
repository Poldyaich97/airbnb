import styled from "styled-components";
import { StyledTitle } from "../SectionTitle/SectionTitle";
import ExploreCard from "./ExploreCard";
import React, { useState, useEffect } from "react";

const Title = styled(StyledTitle)`
  margin-bottom: 24px;
`;

const Columns = styled.div`
  display: flex;
  column-gap: 18px;
  margin-top: 24px;
`;

export default function Explore(props) {
  let NumCard;
  if (window.innerWidth > 750) {
    NumCard = 3;
  } else {
    NumCard = 2;
  }
  const [result, setResultat] = useState([]);
  useEffect(() => {
    const API = "https://ipwbxlctkx.api.quickmocker.com/Explore";
    fetch(API)
      .then((res) => res.json())
      .then((data) => setResultat(data));
  }, []);
  return (
    <div className={props.className}>
      <Title>Explore Airbnb</Title>
      <Columns>
        {result.slice(0, NumCard).map((element, pos) => (
          <div key={pos}>
            <ExploreCard scr={element.imageSouce} title={element.title} />
          </div>
        ))}
      </Columns>
    </div>
  );
}
