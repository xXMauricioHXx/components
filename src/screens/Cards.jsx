import React from "react";
import CardDefault from "../components/cards/CardDefault";

class Inputs extends React.Component {
  render() {
    return (
      <div className="screens">
        <h1>Cards: </h1>
        <ul className="p-0">
          <li>
            <h3>Default</h3>
            <CardDefault
              title="Card default"
              img="https://epocacosmeticos.vteximg.com.br/arquivos/ids/213963-300-300/rouge-dior-do-acetinado-ao-matte-dior-batom-771.jpg"
              content={`
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla faucibus, neque vel fermentum varius, augue orci lobortis turpis, eu blandit quam turpis eu mauris. Phasellus in risus in nunc ullamcorper iaculis. Curabitur a ligula consectetur, blandit urna sagittis, venenatis erat. Aenean dictum sem urna, quis varius ligula interdum et. Vivamus eu ullamcorper nisi. Cras consectetur magna a mauris sodales hendrerit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
            `}
            />
          </li>
        </ul>
      </div>
    );
  }
}

export default Inputs;
