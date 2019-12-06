import React from "react";
import "./Inputs.css";
import Input from "../components/inputs/Input";
import Select from '../components/inputs/Select';
import TextArea from '../components/inputs/TextArea';

class Inputs extends React.Component {
  render() {
    return (
      <div>
        <h1>Inputs: </h1>
        <ul className="p-0">
          <li>
            <h3>Text</h3>
            <Input
              placeholder="Your e-mail"
              required={true}
              type="email"
              label="E-mail"
            />
          </li>
          <li>
            <h3>Password</h3>
            <Input
              placeholder="Your password"
              required={true}
              type="password"
              label="Password"
            />
          </li>
          <li>
            <h3>Select</h3>
            <Select items={['Option 1', 'Option 2']} label="Selects" required={true}/>
          </li>
          <li>
            <h3>Text Area</h3>
            <TextArea label="Text Area" required={true}/>
          </li>
        </ul>
      </div>
    );
  }
}

export default Inputs;
