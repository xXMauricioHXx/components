import React from "react";
import Pre from '../Pre';
import "../styles/DefaultButton.css";

const DefaultButton = () => {
  return (
    <div>
      <Pre content={`<button className="btn btn-default button-default">Button</button>`} />
      <button className="btn btn-default button-default">Button</button>
    </div>
  );
};

export default DefaultButton;
