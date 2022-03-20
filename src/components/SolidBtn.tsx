import { heart, trash } from "ionicons/icons";
import timeSCV from "../utils/timeSCV";
import { toast } from "react-toastify";
import {
  IonIcon,
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonModal,
  IonNote,
} from "@ionic/react";
import { useState } from "react";
import ISolidBtn from "../interface/ISolidBtn";

const SolidButton: React.FC<ISolidBtn> = ({ id, text, textTitle, svcTime }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <IonItemSliding className="rounded-xl shadow-md" key={id} id={id}>
      <IonItem lines="none" className="rounded-md shadow-md">
        <IonLabel
          onClick={() => {
            setShowModal(!showModal);
          }}
        >
          <h2 className="pt-2">{textTitle}</h2>
          <p className="pt-3">{text}</p>
        </IonLabel>
        <IonNote slot="end">
          <div className="text-[0.85rem] font-bold">{timeSCV(svcTime)}</div>
        </IonNote>
      </IonItem>
      <IonItemOptions side="end">
        <IonItemOption
          onClick={() => {
            toast.success("已收藏", {
              closeButton: true,
              hideProgressBar: false,
              autoClose: 2000,
              toastId: id,
            });
          }}
          color="success"
        >
          <IonIcon className="text-white" slot="icon-only" icon={heart} />
        </IonItemOption>
        <IonItemOption
          onClick={() => {
            toast.error("已删除", {
              closeButton: true,
              hideProgressBar: false,
              autoClose: 2000,
              toastId: id,
            });
          }}
          color="danger"
        >
          <IonIcon slot="icon-only" icon={trash} />
        </IonItemOption>
      </IonItemOptions>

      <IonModal
        isOpen={showModal}
        initialBreakpoint={0.5} //默认占屏比例(最好设置中间值)
        breakpoints={[0, 0.5, 0.9]} //设置占屏比例
        onDidDismiss={() => setShowModal(false)}
      >
        <IonItem lines="full" className="mt-1 select-none">
          <h2 className="pt-3 text-[1rem] font-bold">{textTitle}</h2>
          <IonNote slot="end">
            <div className="text-[1rem] font-bold">{timeSCV(svcTime)}</div>
          </IonNote>
        </IonItem>
        <div className="mx-4 pt-3 text-[1.1rem]">{text}</div>
      </IonModal>
    </IonItemSliding>
  );
};

export default SolidButton;
