import React from "react";
import ICardBadge from "../interface/ICardBadge";

const CardBadge: React.FC<ICardBadge> = ({ imgUrl, title, detail }) => {
  return (
    <div className="card mb-2 w-[91vw] bg-base-100 shadow-md">
      <figure>
        <img src={imgUrl} alt="Shoes" className="bg-cover" />
      </figure>
      <div className="card-body bg-slate-200">
        <h2 className="card-title">
          Shoes!
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <pre data-prefix="$">
          <code>npm install {title} 页面。</code>
        </pre>
        <pre data-prefix="$">
          <code>{detail} instaling done!</code>
        </pre>
        <div className="card-actions ml-5 mt-5 justify-end">
          <div className="badge badge-info">Fashion</div>
          <div className="badge badge-primary">Products</div>
        </div>
      </div>
    </div>
  );
};
export default CardBadge;
