import "./Main.css";

import columnsOne from "./columnsOne.svg";
import columnsTwo from "./columnsTwo.svg";
import columnsThree from "./columnsThree.svg";
import columnOneImg from "./columnOneImg.svg";
import star from "./star.svg";
function Main() {
  return (
    <main className="main">
      <div className="container">
        <div className="explore">
          <h2 className="main__title ">Explore Airbnb</h2>
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
          <div className="experiences__columns">
            <div className="experiences__column">
              <div className="experiences__column_img">
                <img src={columnOneImg} alt="imgOne" />
              </div>
              <div className="experiences__column_price">
                <h5>$29</h5>
                <span>Forest therapy</span>
              </div>
              <div className="experiences__column_rating">
                <div className="experiences__column_star">
                  <img src={star} />
                  <img src={star} />
                  <img src={star} />
                  <img src={star} />
                  <img src={star} />
                </div>
                <span>44 reviews</span>
              </div>
            </div>
            <div className="experiences__column">
              <div className="experiences__column_img">
                <img src={columnOneImg} alt="imgOne" />
              </div>
              <div className="experiences__column_price">
                <h5>$29</h5>
                <span>Forest therapy</span>
              </div>
              <div className="experiences__column_rating">
                <div className="experiences__column_star">
                  <img src={star} />
                  <img src={star} />
                  <img src={star} />
                  <img src={star} />
                  <img src={star} />
                </div>
                <span>44 reviews</span>
              </div>
            </div>
            <div className="experiences__column">
              <div className="experiences__column_img">
                <img src={columnOneImg} alt="imgOne" />
              </div>
              <div className="experiences__column_price">
                <h5>$29</h5>
                <span>Forest therapy</span>
              </div>
              <div className="experiences__column_rating">
                <div className="experiences__column_star">
                  <img src={star} />
                  <img src={star} />
                  <img src={star} />
                  <img src={star} />
                  <img src={star} />
                </div>
                <span>44 reviews</span>
              </div>
            </div>
            <div className="experiences__column">
              <div className="experiences__column_img">
                <img src={columnOneImg} alt="imgOne" />
              </div>
              <div className="experiences__column_price">
                <h5>$29</h5>
                <span>Forest therapy</span>
              </div>
              <div className="experiences__column_rating">
                <div className="experiences__column_star">
                  <img src={star} />
                  <img src={star} />
                  <img src={star} />
                  <img src={star} />
                  <img src={star} />
                </div>
                <span>44 reviews</span>
              </div>
            </div>
            <div className="experiences__column">
              <div className="experiences__column_img">
                <img src={columnOneImg} alt="imgOne" />
              </div>
              <div className="experiences__column_price">
                <h5>$29</h5>
                <span>Forest therapy</span>
              </div>
              <div className="experiences__column_rating">
                <div className="experiences__column_star">
                  <img src={star} />
                  <img src={star} />
                  <img src={star} />
                  <img src={star} />
                  <img src={star} />
                </div>
                <span>44 reviews</span>
              </div>
            </div>
            <div className="experiences__column">
              <div className="experiences__column_img">
                <img src={columnOneImg} alt="imgOne" />
              </div>
              <div className="experiences__column_price">
                <h5>$29</h5>
                <span>Forest therapy</span>
              </div>
              <div className="experiences__column_rating">
                <div className="experiences__column_star">
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
      </div>
    </main>
  );
}

export default Main;
