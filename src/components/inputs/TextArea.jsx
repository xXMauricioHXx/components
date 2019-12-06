import React from "react";
import Pre from "../Pre";
import "../styles/Inputs.css";

const TextArea = props => {
  return (
    <div>
      <Pre
        content={`
<form>
  <div className="form-group">
    <label>
      {props.label} {props.required && <span>*</span>}
    </label>
    <textarea className="form-control" rows={props.rows}></textarea>
  </div>
</form>
        `}
      />
      <form>
        <div className="form-group">
          <label>
            {props.label} {props.required && <span>*</span>}
          </label>
          <textarea className="form-control" rows={props.rows}></textarea>
        </div>
      </form>
    </div>
  );
};

export default TextArea;