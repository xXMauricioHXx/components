import React from "react";
import Pre from '../Pre';
import "../styles/PrimaryButton.css";

const PrimaryButton = () => {
  return (
    <div>
      <Pre content={`<button className="btn btn-primary button-primary">Button</button>`} />
      <button className="btn btn-primary button-primary">Button</button>
    </div>
  );
};

export default PrimaryButton;
