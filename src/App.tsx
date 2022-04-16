import {
  IonApp,
  IonBadge,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonMenuButton,
  IonRouterOutlet,
  IonSplitPane,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonText,
  IonToolbar,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router-dom";
import Menu from "./components/Menu";
import { ToastContainer, Slide } from "react-toastify";
import HomePage from "./pages/HomePage";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";
import "react-toastify/dist/ReactToastify.css";
/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import StarPage from "./pages/StarPage";
import UserPage from "./pages/UserPage";
import { home, mailOutline, person, star } from "ionicons/icons";
import NavImg from "./components/NavImg";
import ToDark from "./components/ToDark";

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar className="flex">
          <IonButtons slot="start">
            <IonMenuButton>
              <NavImg imgUrl="https://api.lorem.space/image/face?hash=28212" />
            </IonMenuButton>
          </IonButtons>
          <IonText className="font-sans text-[1.2rem] font-bold">
            VentRoar
          </IonText>
          <IonButtons slot="end">
            <ToDark />
          </IonButtons>
          <IonButtons slot="end">
            <IonIcon
              className="mr-3 h-[1.7rem] w-[1.7rem]"
              icon={mailOutline}
            />
            <IonBadge color="success"></IonBadge>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonReactRouter>
          <IonTabs className="z-10">
            <IonRouterOutlet id="main">
              <Route exact path="/">
                <Redirect to="/HomePage/Inbox" />
              </Route>
              <Route exact path="/HomePage/:name">
                <HomePage />
              </Route>
              <Route exact path={"/HomePage"}>
                <HomePage />
              </Route>
              <Route exact path={"/StarPage"}>
                <StarPage />
              </Route>
              <Route exact path={"/UserPage"}>
                <UserPage />
              </Route>
            </IonRouterOutlet>
            <IonTabBar slot="bottom" color="light">
              <IonTabButton tab="HomePage" href="/HomePage">
                <IonIcon icon={home} />
              </IonTabButton>
              <IonTabButton tab="StarPage" href="/StarPage">
                <IonIcon icon={star} />
              </IonTabButton>
              <IonTabButton tab="UserPage" href="/UserPage">
                <IonIcon icon={person} />
                <IonBadge
                  color="success"
                  className="flex h-3 w-3 items-center justify-center rounded-full p-1"
                ></IonBadge>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
          <IonSplitPane contentId="main">
            <Menu />
          </IonSplitPane>
        </IonReactRouter>
      </IonContent>

      <ToastContainer
        theme={"light"}
        transition={Slide}
        toastClassName={"select-none top-14 text-black"}
        // className={"left-[20vw]  w-[80vw]"}
        rtl={false} //调换消息栏位置
        closeOnClick={false} //按动关闭
        autoClose={2000} //自动关闭,false为取消自动关闭
        limit={2} //最大同时显示个数
        draggable //是否启动滑动关闭
        draggablePercent={30} //滑动多少可以关闭
        hideProgressBar //隐藏进度条
        closeButton={false} //消息框关闭按钮是否显示
      />
    </IonApp>
  );
};

export default App;
