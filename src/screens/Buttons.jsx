import React from "react";
import "./Buttons.css";
import PrimaryButton from "../components/buttons/PrimaryButton";
import DefaultButton from '../components/buttons/DefaultButton';

class Buttons extends React.Component {
  render() {
    return (
      <div>
        <h1>Buttons: </h1>
        <ul className="p-0">
          <li>
            <h3>Primary</h3>
            <PrimaryButton />
          </li>
          <li>
            <h3>Default</h3>
            <DefaultButton />
          </li>
        </ul>
      </div>
    );
  }
}

export default Buttons;
