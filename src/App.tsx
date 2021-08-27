import {
  IonApp,
  IonIcon,
  IonLabel,
  IonPage,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
import '@ionic/react/css/display.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/float-elements.css';
/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/typography.css';
import { calendarNumberOutline, newspaperOutline } from 'ionicons/icons';
import { Redirect, Route, Switch } from 'react-router-dom';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
/* Theme variables */
import './theme/variables.css';





const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonPage id="main">
        <Switch>
          <Route path="/" exact>
            <Redirect to="/tabs/tab1"/>
          </Route>
          <Route path="/tabs/">
            <IonTabs>
              <IonRouterOutlet id="main">
                <Switch>
                  <Route path="/tabs/tab1" exact component={Tab1} />
                </Switch>
              </IonRouterOutlet>
              <IonTabBar slot="bottom">
                <IonTabButton tab="reports" href="/tabs/tab1">
                  <IonIcon icon={newspaperOutline} />
                  <IonLabel>Tab 1</IonLabel>
                </IonTabButton>
              </IonTabBar>
            </IonTabs>
          </Route>
          <Route path="/test/">
            <IonTabs>
              <IonRouterOutlet id="main">
                <Switch>
                  <Route path="/test/test" exact component={Tab2} />
                </Switch>
              </IonRouterOutlet>
              <IonTabBar slot="bottom">
                <IonTabButton tab="purchasingDue" href="/test/test">
                  <IonIcon icon={calendarNumberOutline} />
                  <IonLabel>Tab2</IonLabel>
                </IonTabButton>
              </IonTabBar>
            </IonTabs>
          </Route>
        </Switch>
      </IonPage>
    </IonReactRouter>
  </IonApp>
);

export default App;
