import "./Main.css";
import styled from "styled-components";
import Container from "../Container/Container";
import Explore from "./Explore/Explore";
import Experiences from "./Experiences/Experiences.jsx";

const MainExplore = styled(Explore)`
  margin-bottom: 47px;
`;

function Main() {
  return (
    <main className="main">
      <Container>
        <MainExplore></MainExplore>
        <Experiences></Experiences>
        {/* <div className="homes">
          <h2 className="main__title">Homes</h2>
          <div className="main__seeAll">
            <a href="#">See all</a>
          </div>
          <div className="columns homes__columns">
            <div className="columns__column">
              <div className="columns__column_img homes_img">
                <img src={homesOne} alt="imgOne" />
              </div>
              <div className="columns__column_price home__price">
                <h5>$29</h5>
                <span>Forest therapy</span>
              </div>
              <div className="columns__column_rating">
                <div className="columns__column_star">
                  <img src={star} />
                  <img src={star} />
                  <img src={star} />
                  <img src={star} />
                  <img src={star} />
                </div>
                <span>44 reviews</span>
              </div>
            </div>
            <div className="columns__column">
              <div className="columns__column_img homes_img">
                <img src={homesOne} alt="imgOne" />
              </div>
              <div className="columns__column_price home__price">
                <h5>$29</h5>
                <span>Forest therapy</span>
              </div>
              <div className="columns__column_rating">
                <div className="columns__column_star">
                  <img src={star} />
                  <img src={star} />
                  <img src={star} />
                  <img src={star} />
                  <img src={star} />
                </div>
                <span>44 reviews</span>
              </div>
            </div>
            <div className="columns__column">
              <div className="columns__column_img homes_img">
                <img src={homesOne} alt="imgOne" />
              </div>
              <div className="columns__column_price home__price">
                <h5>$29</h5>
                <span>Forest therapy</span>
              </div>
              <div className="columns__column_rating">
                <div className="columns__column_star">
                  <img src={star} />
                  <img src={star} />
                  <img src={star} />
                  <img src={star} />
                  <img src={star} />
                </div>
                <span>44 reviews</span>
              </div>
            </div>
            <div className="columns__column">
              <div className="columns__column_img homes_img">
                <img src={homesOne} alt="imgOne" />
              </div>
              <div className="columns__column_price home__price">
                <h5>$29</h5>
                <span>Forest therapy</span>
              </div>
              <div className="columns__column_rating">
                <div className="columns__column_star">
                  <img src={star} />
                  <img src={star} />
                  <img src={star} />
                  <img src={star} />
                  <img src={star} />
                </div>
                <span>44 reviews</span>
              </div>
            </div>
          </div>
        </div>
        <div className="popular">
          <h2 className="main__title">Popular reservations around the world</h2>
          <div className="main__seeAll">
            <a href="#">See all</a>
          </div>
        </div>
        <div className="columns popular__columns">
          <div className="columns__column">
            <div className="columns__column_img popular_img">
              <img src={homesOne} alt="imgOne" />
            </div>
            <div className="columns__column_price popular__price">
              <h5>Chumley’s</h5>
              <span>About $60 per person</span>
            </div>
          </div>
          <div className="columns__column">
            <div className="columns__column_img popular_img">
              <img src={homesOne} alt="imgOne" />
            </div>
            <div className="columns__column_price popular__price">
              <h5>Chumley’s</h5>
              <span>About $60 per person</span>
            </div>
          </div>
          <div className="columns__column">
            <div className="columns__column_img popular_img">
              <img src={homesOne} alt="imgOne" />
            </div>
            <div className="columns__column_price popular__price">
              <h5>Chumley’s</h5>
              <span>About $60 per person</span>
            </div>
          </div>
          <div className="columns__column">
            <div className="columns__column_img popular_img">
              <img src={homesOne} alt="imgOne" />
            </div>
            <div className="columns__column_price popular__price">
              <h5>Chumley’s</h5>
              <span>About $60 per person</span>
            </div>
          </div>
          <div className="columns__column">
            <div className="columns__column_img popular_img">
              <img src={homesOne} alt="imgOne" />
            </div>
            <div className="columns__column_price popular__price">
              <h5>Chumley’s</h5>
              <span>About $60 per person</span>
            </div>
          </div>
        </div>
        <div className="featured">
          <h2 className="main__title featured__title">Featured destinations</h2>
          <div className="columns featured__columns">
            <div className="columns__column">
              <div className="columns__column_img featured__column_img">
                <img src={featuredOne} alt="imgOne" />
              </div>
              <h5 className="featured__column_title">Paris</h5>
            </div>
            <div className="columns__column">
              <div className="columns__column_img featured__column_img">
                <img src={featuredOne} alt="imgOne" />
              </div>
              <h5 className="featured__column_title">Paris</h5>
            </div>
            <div className="columns__column">
              <div className="columns__column_img featured__column_img">
                <img src={featuredOne} alt="imgOne" />
              </div>
              <h5 className="featured__column_title">Paris</h5>
            </div>
            <div className="columns__column">
              <div className="columns__column_img featured__column_img">
                <img src={featuredOne} alt="imgOne" />
              </div>
              <h5 className="featured__column_title">Paris</h5>
            </div>
            <div className="columns__column">
              <div className="columns__column_img featured__column_img">
                <img src={featuredOne} alt="imgOne" />
              </div>
              <h5 className="featured__column_title">Paris</h5>
            </div>
            <div className="columns__column">
              <div className="columns__column_img featured__column_img">
                <img src={featuredOne} alt="imgOne" />
              </div>
              <h5 className="featured__column_title">Paris</h5>
            </div>
            <div className="columns__column">
              <div className="columns__column_img featured__column_img">
                <img src={featuredOne} alt="imgOne" />
              </div>
              <h5 className="featured__column_title">Paris</h5>
            </div>
            <div className="columns__column">
              <div className="columns__column_img featured__column_img">
                <img src={featuredOne} alt="imgOne" />
              </div>
              <h5 className="featured__column_title">Paris</h5>
            </div>
          </div>
        </div> */}
      </Container>
    </main>
  );
}

export default Main;
