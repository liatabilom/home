import React, { Component } from "react";
import QuickTitle from "./QuickTitles";
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
          >
            <div id="wool">
              <img src={Woolworths} alt="Woolworths" />
            </div>
            <div id="zara">
              <img src={Zara} alt="Zara" />
            </div>
            <div id="banana">
              <img src={BananaRepublic} alt="Banana Republic" />
            </div>
            <div id="brooks">
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
          <span className="title">
            <QuickTitle id={this.id} />
          </span>
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
