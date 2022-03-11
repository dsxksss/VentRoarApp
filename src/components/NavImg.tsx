import React from "react";

interface NEED {
  imgURL: string;
  size: string;
}

const NavImg: React.FC<NEED> = ({ imgURL, size }) => {
  return (
    <div className="avatar online">
      <div className={`w-${size} rounded-full`}>
        <img src={imgURL} />
      </div>
    </div>
  );
};
export default NavImg;
