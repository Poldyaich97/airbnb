import styled from "styled-components";
import { StyledTitle } from "../SectionTitle/SectionTitle";
import SeeAll from "../SectionSee/SectionSee.jsx";
import PopularPictureOne from "./PopularPictureOne.png";
const StyledPopular = styled.div``;

export default function Popular() {
  return (
    <StyledPopular>
      <StyledTitle>Homes</StyledTitle>
      <SeeAll></SeeAll>
      <div className="columns popular__columns">
        <div className="columns__column">
          <div className="columns__column_img popular_img">
            <img src={PopularPictureOne} alt="imgOne" />
          </div>
          <div className="columns__column_price popular__price">
            <h5>Chumley’s</h5>
            <span>About $60 per person</span>
          </div>
        </div>
      </div>
    </StyledPopular>
  );
}
