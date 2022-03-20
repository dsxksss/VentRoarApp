import React, { useState } from "react";
import IDaisyModal from "../interface/IDaisyModal";
const DaisyModal: React.FC<IDaisyModal> = ({
  _id,
  titleMsg = "null",
  msg = "null",
  showBtn = false,
  isOpen,
}) => {
  const [open, setOpen] = useState<boolean>(isOpen);
  return (
    <>
      {showBtn && (
        <label htmlFor={`${_id}`} className="modal-button btn">
          打开模态窗口
        </label>
      )}
      <input type="checkbox" id={`${_id}`} className="modal-toggle" />
      {isOpen && (
        <div className={`modal items-center ${open ? "modal-open" : " "}`}>
          <div className="modal-box w-[88vw] rounded-b-2xl">
            <h3 className="mt-5 break-all text-lg font-bold">{titleMsg}</h3>
            <p className="py-3">{msg}</p>
            <div className="modal-action">
              <label htmlFor={`${_id}`}>
                <button
                  className="btn"
                  onClick={() => {
                    setOpen(!open);
                  }}
                >
                  好的我知道了👌
                </button>
              </label>
            </div>
          </div>
        </div>
      )}
      {!isOpen && (
        <div className={`modal items-center`}>
          <div className="modal-box w-[88vw] rounded-b-2xl">
            <h3 className="mt-5 break-all text-lg font-bold">{titleMsg}</h3>
            <p className="py-3">{msg}</p>
            <div className="modal-action">
              <label htmlFor={`${_id}`} className="btn">
                好的我知道了👌
              </label>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DaisyModal;
