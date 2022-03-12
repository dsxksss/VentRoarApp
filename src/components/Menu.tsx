import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from "@ionic/react";
import { useEffect, useState } from "react";
import AXIOS from "./../services/httpServices";
import { useLocation } from "react-router-dom";
import {
  bookmarkOutline,
  mailOutline,
  mailSharp,
  paperPlaneOutline,
  paperPlaneSharp,
} from "ionicons/icons";
import "./Menu.css";

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: "Inbox",
    url: "/page/Inbox",
    iosIcon: mailOutline,
    mdIcon: mailSharp,
  },
  {
    title: "Outbox",
    url: "/page/Outbox",
    iosIcon: paperPlaneOutline,
    mdIcon: paperPlaneSharp,
  },
];

const labels = ["Family", "Notes", "Reminders"];

const Menu: React.FC = () => {
  const location = useLocation();
  const [userList, setList] = useState<never[] | any>([]);
  const getData = async () => {
    const { data } = await AXIOS.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    //随机产生一个 “个位整数”
    const sum = Math.round(Math.random() * 10);
    //利用此数随机产生一个user
    setList(data[sum]);
  };
  useEffect(() => {
    getData();
    return setList([]);
  }, []);
  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>{userList.name}</IonListHeader>
          <IonNote>{userList.email}</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem
                  className={
                    location.pathname === appPage.url ? "selected" : ""
                  }
                  routerLink={appPage.url}
                  routerDirection="none"
                  lines="none"
                  detail={false}
                >
                  <IonIcon
                    slot="start"
                    ios={appPage.iosIcon}
                    md={appPage.mdIcon}
                  />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

        <IonList id="labels-list">
          <IonListHeader>Labels</IonListHeader>
          {labels.map((label, index) => (
            <IonItem lines="none" key={index}>
              <IonIcon slot="start" icon={bookmarkOutline} />
              <IonLabel>{label}</IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
