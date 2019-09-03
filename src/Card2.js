import React, { Component } from "react";
import CarouselAuto from "./images/CarouselAuto.png";
import Draggable from "react-draggable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import "./Card2.css";

class Card2 extends Component {
  render() {
    return (
      <div
        className="parent"
        style={{
          height: "500px",
          width: "275px",
          position: "relative",
          overflow: "auto",
          padding: "0"
        }}
      >
        <div className="clearfix">
          <div className="float-left">
            <a href="https://www.shecodes.io">
              <FontAwesomeIcon
                icon={faPlusCircle}
                size="1x"
                className="plusIcon2"
              />
            </a>
          </div>
        </div>
        <div
          className="float-left"
          style={{ height: "1000px", width: "50px", padding: "0" }}
        >
          <Draggable
            axis="y"
            bounds={(0, 10, 0, 10)}
            handle=".handle"
            grid={(25, 25)}
            allowAnyClick={true}
            cancel={".body"}
            disabled={true}
          >
            <img
              src={CarouselAuto}
              alt="Carousel"
              className="carouselAuto"
              style={{ height: 2000, width: 200 }}
            />
          </Draggable>
        </div>
      </div>
    );
  }
}

export default Card2;
