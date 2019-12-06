import React from "react";
import Pre from "../Pre";
import "../styles/Inputs.css";

const Select = props => {
  return (
    <div>
      <Pre
        content={`
<form>
  <div className="form-group">
    <label>
      {props.label} {props.required && <span>*</span>}
    </label>
    <select className="form-control">
      {props.items.map((item, index) => (
        <option key={index}>{item}</option>
      ))}
    </select>
  </div>
</form>
        `}
      />
      <form>
        <div className="form-group">
          <label>
            {props.label} {props.required && <span>*</span>}
          </label>
          <select className="form-control">
            {props.items.map((item, index) => (
              <option key={index}>{item}</option>
            ))}
          </select>
        </div>
      </form>
    </div>
  );
};

export default Select;
