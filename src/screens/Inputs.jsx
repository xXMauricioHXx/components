import React from "react";
import "./Buttons.css";
import TextInput from "../components/inputs/TextInput";

class Buttons extends React.Component {
  render() {
    return (
      <div>
        <h1>Inputs: </h1>
        <ul className="p-0">
          <li>
            <h3>Text</h3>
            <TextInput />
          </li>          
        </ul>
      </div>
    );
  }
}

export default Buttons;
