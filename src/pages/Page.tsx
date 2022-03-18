import {
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonMenuButton,
  IonPage,
  IonText,
  IonToolbar,
} from "@ionic/react";
// import { useRef } from "react";
import { useParams } from "react-router";
import { mailUnreadOutline } from "ionicons/icons";
// import Draggable from "react-draggable";
import NavImg from "./../components/NavImg";
import ToDark from "./../components/ToDark";
import "./Page.css";
import t1 from "../img/t1.jpg";
import CardBadge from "../components/CardBadge";

const Page: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  //因为Draggable会操纵原始DOM,但是React不建议这样做,所以可以给它传递一个ref,以避免警告
  // const nodeRef = useRef(null);
  // const handleStart = (e: any) => {
  //   console.log("handleStart");
  //   console.log(e);
  // };
  // const handleDrag = () => console.log("handleDrag");
  // const handleStop = () => console.log("handleStop");

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="flex">
          <IonButtons slot="start">
            <IonMenuButton>
              <NavImg imgUrl="https://api.lorem.space/image/face?hash=28212" />
            </IonMenuButton>
          </IonButtons>
          <IonText className="font-bold font-sans text-[1.2rem]">
            VentRoar
          </IonText>
          <IonButtons slot="end">
            <ToDark />
          </IonButtons>
          <IonIcon
            className="h-[1.7rem] w-[1.7rem] mr-3"
            slot="end"
            icon={mailUnreadOutline}
          />
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <div className="flex flex-col space-y-6 items-center justify-center mt-5">
          {/* <Draggable
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
            > */}

          <CardBadge imgUrl={t1} title={name} detail={name} />
          {/* </div>
          </Draggable> */}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Page;
