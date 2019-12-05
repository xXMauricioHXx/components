import React from "react";
import "./Buttons.css";
import PrimaryButton from "../components/buttons/PrimaryButton";

class Buttons extends React.Component {
  render() {
    return (
      <div>
        <h1>Buttons: </h1>
        <PrimaryButton />
      </div>
    );
  }
}

export default Buttons;
