import React from "react";
import Pre from "../Pre";
import "../styles/Inputs.css";

const Input = props => {
  return (
    <div>
      <Pre
        content={`
<form>
  <div class="form-group">
    <label>{props.label} {props.required && <span>*</span>}</label>
    <input
      type={props.type}
      class="form-control"
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
            class="form-control"
            placeholder={props.placeholder}
          />
        </div>
      </form>
    </div>
  );
};

export default Input;
