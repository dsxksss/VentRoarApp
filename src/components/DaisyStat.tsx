import React from "react";

const DaisyStat: React.FC = () => {
  return (
    <div className="stats stats-vertical w-[92vw] bg-success text-gray-100">
      <div className="stat">
        <div className="stat-title">Account balance</div>
        <div className="stat-value">$89,400</div>
        <div className="stat-actions">
          <button className="btn btn-sm glass">Add funds</button>
        </div>
      </div>

      <div className="stat">
        <div className="stat-title">Current balance</div>
        <div className="stat-value">$89,400</div>
        <div className="stat-actions space-x-3">
          <button className="btn btn-sm">Withdrawal</button>
          <button className="btn btn-sm ">deposit</button>
        </div>
      </div>
    </div>
  );
};
export default DaisyStat;
