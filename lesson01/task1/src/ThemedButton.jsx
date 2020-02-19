import React from "react";
import { ThemeContext } from "./themes-context";

class ThemedButton extends React.Component {
  render() {
    this.context;
    return (
      <button
        {...this.props}
        style={{
          backgroundColor: this.context.backgroundColor,
          color: this.context.fontColor
        }}
        className="btn"
      ></button>
    );
  }
}

ThemedButton.contextType = ThemeContext;

export default ThemedButton;
