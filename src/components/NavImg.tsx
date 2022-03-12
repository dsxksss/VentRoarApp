import React from "react";

interface NEED {
  imgURL: string;
}

const NavImg: React.FC<NEED> = ({ imgURL }) => {
  return (
    <div className="avatar online">
      <div className="w-8 h-8 select-none rounded-full">
        <img src={imgURL} />
      </div>
    </div>
  );
};
export default NavImg;
