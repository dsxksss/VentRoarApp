import React from "react";
import IDaisyTipBtn from "../interface/IDaisyTipBtn";
const DaisyTipBtn: React.FC<IDaisyTipBtn> = ({
  position = "botton",
  tip = "null",
}) => {
  return (
    <div
      className={`tooltip-${position} tooltip tooltip-success`}
      data-tip={`${tip}`}
    >
      <button className="btn btn-success">success</button>
    </div>
  );
};
export default DaisyTipBtn;
