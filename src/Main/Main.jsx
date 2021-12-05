import "./Main.css";

import columnsOne from "./columnsOne.svg";
import columnsTwo from "./columnsTwo.svg";
import columnsThree from "./columnsThree.svg";
import expOneImg from "./expOneImg.svg";
import expTwoImg from "./expTwoImg.svg";
import expThreeImg from "./expThreeImg.svg";
import expFourImg from "./expFourImg.svg";
import homesOne from "./homesOne.svg";
import featuredOne from "./featuredOne.svg";
import star from "./star.svg";

function Main() {
  return (
    <main className="main">
      <div className="container">
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
        <div className="experiences">
          <h2 className="main__title experiences__title">Experiences</h2>
          <div className="main__seeAll">
            <a href="#">See all</a>
          </div>
          <div className="columns">
            <div className="columns__column">
              <div className="columns__column_img experiences_img">
                <img src={expOneImg} alt="imgOne" />
              </div>
              <div className="columns__column_price">
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
              <div className="columns__column_img experiences_img">
                <img src={expTwoImg} alt="imgOne" />
              </div>
              <div className="columns__column_price">
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
            <div className="columns__column ">
              <div className="columns__column_img experiences_img">
                <img src={expThreeImg} alt="imgOne" />
              </div>
              <div className="columns__column_price experiences_img">
                <h5>$29</h5>
                <span>Forest therapy</span>
              </div>
              <div className="columns__column_rating ">
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
            <div className="columns__column ">
              <div className="columns__column_img experiences_img">
                <img src={expFourImg} alt="imgOne" />
              </div>
              <div className="columns__column_price">
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
            <div className="columns__column ">
              <div className="columns__column_img experiences_img">
                <img src={expTwoImg} alt="imgOne" />
              </div>
              <div className="columns__column_price">
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
            <div className="columns__column ">
              <div className="columns__column_img experiences_img">
                <img src={expTwoImg} alt="imgOne" />
              </div>
              <div className="columns__column_price">
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
        <div className="homes">
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
        </div>
      </div>
    </main>
  );
}

export default Main;
