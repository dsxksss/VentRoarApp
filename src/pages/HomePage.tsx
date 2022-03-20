import { useRef } from "react";
// import Draggable from "react-draggable";
import { IonContent, IonPage, IonSlide, IonSlides } from "@ionic/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/virtual";
import { useParams } from "react-router";
import CardBadge from "../components/CardBadge";
import t1 from "../img/t1.jpg";
import "./HomePage.css";

const Page: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  //因为Draggable会操纵原始DOM,但是React不建议这样做,所以可以给它传递一个ref,以避免警告
  const nodeRef = useRef(null);
  // const handleStart = (e: any) => {
  //   console.log("handleStart");
  //   console.log(e);
  // };
  // const handleDrag = () => console.log("handleDrag");
  // const handleStop = () => console.log("handleStop");
  // Create array with 1000 slides
  const slideOpts = {
    initialSlide: 0,
    speed: 500,
  };
  return (
    <IonPage>
      <IonContent>
        <div className="mt-5 flex flex-col items-center justify-center space-y-6">
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

          {/* </div>
          </Draggable> */}
        </div>
        <IonSlides pager={true} options={slideOpts} ref={nodeRef}>
          <IonSlide>
            <CardBadge imgUrl={t1} title={`${name}1`} detail={`${name}1`} />
          </IonSlide>
          <IonSlide>
            <CardBadge
              imgUrl={
                "https://images.unsplash.com/photo-1640622659787-d15655c3a2ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              }
              title={`${name}2`}
              detail={`${name}2`}
            />
          </IonSlide>
          <IonSlide>
            <CardBadge
              imgUrl={
                "https://images.unsplash.com/photo-1647595439361-e12605a18bc0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              }
              title={`${name}3`}
              detail={`${name}3`}
            />
          </IonSlide>
          <IonSlide>
            <CardBadge
              imgUrl={
                "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              }
              title={`${name}4`}
              detail={`${name}4`}
            />
          </IonSlide>
        </IonSlides>
      </IonContent>
    </IonPage>
  );
};

export default Page;
