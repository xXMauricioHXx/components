import React from "react";
import Button from '../components/buttons/Button';

class Buttons extends React.Component {
  render() {
    return (
      <div className="screens">
        <h1>Buttons: </h1>
        <ul className="p-0">          
          <li>
            <h3>Primary</h3>
            <Button value="Button" type="button-primary" />
          </li>
          <li>
            <h3>Default</h3>
            <Button value="Button" type="button-default" />
          </li>
        </ul>
      </div>
    );
  }
}

export default Buttons;
