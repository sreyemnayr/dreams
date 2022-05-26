import React from "react";
import Upper32 from "../Upper32";
import Lower22 from "../Lower22";
import "./Biono92.css";

function Biono92(props) {
  const { lower2Props, lower2Props2 } = props;

  return (
    <div className="container-center-horizontal">
      <div className="bio-no border-1px-medgray--100 screen">
        <Upper32 className={lower2Props.className} />
        <Lower22 icons={lower2Props2.icons} buttonProps={lower2Props2.buttonProps} />
      </div>
    </div>
  );
}

export default Biono92;
