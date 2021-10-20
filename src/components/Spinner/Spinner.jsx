import React from "react";
import loader from "./ajax-loader.gif";
function Spinner() {
  return (
    <div className="text-center">
      <img className="my-3" src={loader} alt="" />
    </div>
  );
}

export default Spinner;
