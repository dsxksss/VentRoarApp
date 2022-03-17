import React from "react";
import INavImg from "../interface/INavImg";

const NavImg: React.FC<INavImg> = ({ imgUrl }) => {
  return (
    <div className="avatar online">
      <div className="w-8 h-8 select-none rounded-full">
        <img src={imgUrl} alt="img" />
      </div>
    </div>
  );
};
export default NavImg;
