import React, { Component } from "react";
import Editorial from "./images/Editorial.png";
import Draggable from "react-draggable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import "./Card3.css";

class Card3 extends Component {
  render() {
    return (
      <div
        style={{
          height: "450px",
          width: "1000px",
          position: "relative",
          overflow: "hidden"
        }}
      >
        <Draggable onStart={() => false}>
          <div className="container">
            <img src={Editorial} alt="" className="card3" />
            <div className="content">
              <p>EDITORIAL_</p>
            </div>
          </div>
        </Draggable>
        <a href="https://www.shecodes.io">
          <FontAwesomeIcon
            icon={faPlusCircle}
            size="1x"
            className="plusIcon3"
          />
        </a>
      </div>
    );
  }
}

export default Card3;
