import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonToolbar,
} from "@ionic/react";
import { useParams } from "react-router";
import Draggable from "react-draggable";
import NavImg from "./../components/NavImg";
import ToDark from "./../components/ToDark";

import "./Page.css";
import { useRef } from "react";

const Page: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  //因为Draggable会操纵原始DOM,但是React不建议这样做,所以可以给它传递一个ref,以避免警告
  const nodeRef = useRef(null);
  const handleStart = () => console.log("handleStart");
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
        <div className="flex justify-center items-center h-[91vh]">
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
              className="mockup-code mt-[-9vh] min-w-[91vw] flex flex-col"
            >
              <pre data-prefix="$">
                <code>开始安装 {name} 页面。</code>
              </pre>
              <pre data-prefix=">" className="text-warning">
                <code>{name} 正在安装中......</code>
              </pre>
              <pre data-prefix=">" className="text-success">
                <code>{name} 安装成功!</code>
              </pre>
            </div>
          </Draggable>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Page;
