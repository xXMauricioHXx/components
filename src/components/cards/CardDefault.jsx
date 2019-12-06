import React from "react";
import Pre from "../Pre";
import "../styles/CardDefault.css";

const CardDefault = props => {
  return (
    <div>
      <Pre
        content={`
<div className="card">
  <img src={props.img} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.content}</p>
    <button className={\`btn btn-primary button-primary\`}>Go To</button>
  </div>
</div>
      `}
      />
      <div class="container-width">
        <div className="card">
          <img src={props.img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.content}</p>
            <button className={`btn btn-primary button-primary`}>Go To</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDefault;
