import React from "react";
import Pre from "../Pre";
import "../styles/Inputs.css";

const Select = props => {
  return (
    <div>
      <Pre
        content={`
<form>
  <div class="form-group">
    <label>
      {props.label} {props.required && <span>*</span>}
    </label>
    <select class="form-control">
      <option>Default select</option>
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
          <select class="form-control">
            <option>Default select</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Select;
