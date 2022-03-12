import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonToolbar,
} from "@ionic/react";
import { useParams } from "react-router";
import NavImg from "./../components/NavImg";
import ToDark from "./../components/ToDark";
import "./Page.css";

const Page: React.FC = () => {
  const { name } = useParams<{ name: string }>();

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
          <div className="mockup-code mt-[-9vh] min-w-[91vw] flex flex-col">
            <pre data-prefix="$">
              <code>开始安装 {name} 页面。</code>
            </pre>
            <pre data-prefix=">" className="text-warning">
              <code>{name} 正在安装中...</code>
            </pre>
            <pre data-prefix=">" className="text-success">
              <code>{name} 安装成功!</code>
            </pre>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Page;
