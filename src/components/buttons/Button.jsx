import React from 'react';
import Pre from '../Pre';
import "../styles/DefaultButton.css";
import "../styles/PrimaryButton.css";

const Button = props => {
  return (
    <div>
      <Pre
        content={`<button className={\`btn btn-primary \${props.type}\`}>{props.value}</button>`}
      />
      <button className={`btn btn-primary ${props.type}`}>{props.value}</button>
    </div>
  );
};

export default Button;
