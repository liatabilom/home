import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Loader from "react-loader-spinner";
import Woolworths from "./images/Woolworths.png";
import Zara from "./images/Zara.png";
import BananaRepublic from "./images/BananaRepublic.png";
import BrooksBrothers from "./images/BrooksBrothers.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import "./Card1.css";

class Card1 extends Component {
  state = {
    loaded: true
  };

  carousel = () => {
    if (this.state.loaded === true) {
      return (
        <div>
          <Carousel
            autoPlay={true}
            showThumbs={false}
            showStatus={false}
            transition={5000}
            swipeScrollTolerance={1}
            infiniteLoop={true}
          >
            <div>
              <p className="legend">
                WOOL
                <br />
                WORT
                <br />
                HS
              </p>
              <img src={Woolworths} alt="Woolworths" />
            </div>
            <div>
              <p className="legend">
                ZARA
                <br />
                WOM
                <br />
                AN
              </p>
              <img src={Zara} alt="Zara" />
            </div>
            <div>
              <p className="legend">
                BANA NA
                <br />
                REPUB
                <br />
                LIC
              </p>
              <img src={BananaRepublic} alt="Banana Republic" />
            </div>
            <div>
              <p className="legend">
                BROO
                <br />
                KSBR
                <br />
                OTHE RS
              </p>
              <img src={BrooksBrothers} alt="Brooks Brothers" />
            </div>
          </Carousel>
        </div>
      );
    } else {
      return (
        <div className="loader">
          <Loader type="Puff" color="#464159" height="100" width="100" />
        </div>
      );
    }
  };

  //UPDATE FONT SIZE
  render() {
    return (
      <div>
        <h1>
          <div className="carousel">{this.carousel()}</div>
        </h1>
        <h5>
          <div className="selector">
            <span>
              WOMEN
              <FontAwesomeIcon
                icon={faPlusCircle}
                size="1x"
                className="plusIcon1"
              />
              MULHER
            </span>
          </div>
        </h5>
      </div>
    );
  }
}

export default Card1;
