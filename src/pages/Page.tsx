import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonPopover,
  IonToolbar,
} from "@ionic/react";
import { useRef, useState } from "react";
import { useParams } from "react-router";
import Draggable from "react-draggable";
import NavImg from "./../components/NavImg";
import ToDark from "./../components/ToDark";
import "./Page.css";
import t1 from "../img/t1.jpg";

const Page: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const [popoverState, setShowPopover] = useState({
    showPopover: false,
    event: undefined,
  });
  //因为Draggable会操纵原始DOM,但是React不建议这样做,所以可以给它传递一个ref,以避免警告
  const nodeRef = useRef(null);
  const handleStart = (e: any) => {
    console.log("handleStart");
    console.log(e);
  };
  const handleDrag = () => console.log("handleDrag");
  const handleStop = () => console.log("handleStop");

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonButtons slot="end">
            <ToDark />
          </IonButtons>
          <IonButtons slot="end" className="mr-2">
            <NavImg imgURL="https://api.lorem.space/image/face?hash=28212" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <div className="flex justify-center mt-5">
          <Draggable
            axis="both" //拖动的方向
            grid={[1, 1]} //每次拖动应该移动多少,C1:X,C2:Y
            scale={1.6} //摩擦度数,越高越难拖动
            // bounds={{ top: 1, bottom: 1 }} //限制拖动地方
            onStart={handleStart} //开始拖动发生的事情
            onDrag={handleDrag} //拖动时发生的事情
            onStop={handleStop} //结束拖动发生的事情
            nodeRef={nodeRef} //传递ref避免报错警告
          >
            <div
              ref={nodeRef} //传递ref避免报错警告
            >
              <div className="card w-[91vw] bg-base-100 shadow-xl">
                <figure>
                  <img src={t1} alt="Shoes" />
                </figure>
                <div className="card-body bg-slate-200">
                  <h2 className="card-title">
                    Shoes!
                    <div className="badge badge-secondary">NEW</div>
                  </h2>
                  <pre data-prefix="$">
                    <code>npm install {name} 页面。</code>
                  </pre>
                  <pre data-prefix="$">
                    <code>{name} instaling done!</code>
                  </pre>
                  <div className="card-actions justify-end ml-5 mt-5">
                    <div className="badge badge-info">Fashion</div>
                    <div className="badge badge-primary">Products</div>
                  </div>
                </div>
              </div>
            </div>
          </Draggable>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Page;
