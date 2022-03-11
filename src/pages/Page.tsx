import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useParams } from "react-router";
import "./Page.css";
import NavImg from "./../components/NavImg";
import ToDark from "./../components/ToDark";

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
        <div className="flex justify-center items-center h-[91vh]">{name}</div>
      </IonContent>
    </IonPage>
  );
};

export default Page;
