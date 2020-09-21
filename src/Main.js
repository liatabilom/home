import React, { Component } from "react";
import Search from "./Search";
import AllCards from "./AllCards";
import Pages from "./Pages";
import "./Main.css";

class Main extends Component {
  render() {
    return (
      <div className="mainHeader">
        <div className="header">
          <header>
            Na'dia
            <br />
            Correia Gonc,alves
          </header>
        </div>
        <Search />
        <div className="row">
          <div className="side">
            <h2>
              <AllCards />
            </h2>
          </div>
        </div>
        <div className="footer">
          <h2>
            <Pages />
          </h2>
        </div>
      </div>
    );
  }
}

export default Main;
