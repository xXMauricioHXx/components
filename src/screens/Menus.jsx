import React from "react";

import DefaultMenu from '../components/menus/DefaultMenu';

class Menus extends React.Component {
  render() {
    return (
      <div className="screens">
        <h1>Menus: </h1>
        <ul className="p-0">          
          <li>
            <h3>Horizontal: </h3>
            <DefaultMenu />
          </li>          
        </ul>
      </div>
    );
  }
}

export default Menus;
