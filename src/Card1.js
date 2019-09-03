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

  handleRedirect = () => {
    let url = "https://shecodes.io";
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
              <img
                src={Woolworths}
                alt="Woolworths"
                style={{ height: 225, width: 300 }}
              />
            </div>
            <div>
              <p className="legend">
                ZARA
                <br />
                WOM
                <br />
                AN
              </p>
              <img src={Zara} alt="Zara" style={{ height: 225, width: 350 }} />
            </div>
            <div>
              <p className="legend">
                BANA
                <br />
                NA
                <br />
                REPUB
                <br />
                LIC
              </p>
              <img
                src={BananaRepublic}
                alt="Banana Republic"
                style={{ height: 225, width: 350 }}
              />
            </div>
            <div>
              <p className="legend">
                BROO
                <br />
                KSBR
                <br />
                OTHE
                <br />
                RS
              </p>
              <img
                src={BrooksBrothers}
                alt="Brooks Brothers"
                style={{ height: 225, width: 350 }}
              />
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
                size="2x"
                className="plusIcon1"
                onClick={() => `https://www.google.com/search?q=weather`}
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
