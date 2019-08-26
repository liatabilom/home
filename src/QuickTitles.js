import React, { Component } from "react";

class QuickTitles extends Component {
  titleSwitch = () => {
    if (this.props.id === "wool") return <div>WOOLWORTHS</div>;
    if (this.props.id === "zara") return <div>ZARA</div>;
    if (this.props.id === "banana") return <div>BANANA REPUBLIC</div>;
    return <div>BROO KSBR OTHE RS</div>;
  };
  render() {
    return <div>{this.titleSwitch()}</div>;
  }
}

export default QuickTitles;
