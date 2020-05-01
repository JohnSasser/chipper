import React from "react";

function Jumbotron(props) {
  return (
    <div className="jumbotron text-center">
      <h2 className="display-4">{props.text}</h2>
    </div>
  );
}

export default Jumbotron;
