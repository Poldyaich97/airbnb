import styled from "styled-components";

const Container = styled.div`
  width: 961px;
  margin: auto;
`;

const StyleExplore = styled.div`
  margin-bottom: 47px;
`;

export default function Explore() {
  return (
    <div className="explore">
      <h2 className="main__title explore__title ">Explore Airbnb</h2>
      <div className="explore__columns">
        <div className="explore__columns__column">
          <img src={columnsOne} />
          <p className="columns__title">Homes</p>
        </div>
        <div className="explore__columns__column">
          <img src={columnsTwo} />
          <p className="columns__title">Experiences</p>
        </div>
        <div className="explore__columns__column">
          <img src={columnsThree} />
          <p className="columns__title">Restaurants</p>
        </div>
      </div>
    </div>
  );
}
