import React from "react";
import tshirt1 from "../../pictures/tshirt1.jpg";
import tshirt2 from "../../pictures/tshirt2.png";
import tshirt3 from "../../pictures/tshirt3.jpg";

export default function Images() {
  return (
    <div>
      <img src={tshirt1} width="400px" height="400px"></img>
      <img src={tshirt2} width="400px" height="400px"></img>
      <img src={tshirt3} width="400px" height="400px"></img>
    </div>
  );
}
