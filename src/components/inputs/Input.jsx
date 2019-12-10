import React from "react";
import Pre from "../Pre";
import "../styles/Inputs.css";

const Input = props => {
  return (
    <div className="input-container">
      <Pre
        content={`
<form>
  <div className="form-group">
    <label>{props.label} {props.required && <span>*</span>}</label>
    <input
      type={props.type}
      className="form-control"
      placeholder={props.placeholder}
    />
  </div>
</form>
        `}
      />
      <form>
        <div className="form-group">
          <label>
            {props.label} {props.required && <span>*</span>}
          </label>
          <input
            type={props.type}
            className="form-control"
            placeholder={props.placeholder}
          />
        </div>
      </form>
    </div>
  );
};

export default Input;
