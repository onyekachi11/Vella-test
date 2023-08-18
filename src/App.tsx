import { Route } from 'react-router-dom';
import { IonApp, IonNav, IonRouterOutlet, IonTabs, setupIonicReact,IonTabBar,IonTabButton,IonIcon,IonLabel } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { home,cart } from "ionicons/icons";

// import Home from './pages/Home';
import Welcome from './pages/welcome';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Tailwind styles */
import './theme/tailwind.css';

/* Theme variables */
import './theme/variables.css';

/* Imports*/
import Product from './pages/Product';
import CheckoutPage from './pages/checkoutPage';
import Cart from './components/cart';
import { useAppSelector } from './app/hooks';


setupIonicReact();

const App: React.FC = () => {

  const cartValue = useAppSelector((state) => state.persistedReducer.cartValue.cartValue);

  return(

    <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/">
            <Welcome />
          </Route>
          <Route path="/store" render={() => <Product />} exact={true} />
          <Route path="/cart" render={() => <Cart />} exact={true} />
          <Route component={CheckoutPage} path="/checkout" />
        </IonRouterOutlet>

        <IonTabBar slot="bottom" color={"primary"}>
          <IonTabButton tab="store" href="/store">
            <IonIcon icon={home} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>

          <IonTabButton tab="cart" href="/cart">
            <div className=" relative  flex flex-col">
              {cartValue === 0 ? null : (
                <p className="absolute z-10 right-0 top-0 bg-secondaryColor text-lightColor rounded-full text-xs w-4 h-4 flex justify-center items-center ">
                  {cartValue}
                </p>
              )}

              <IonIcon icon={cart} size='large' />
            <IonLabel>Cart</IonLabel>
            </div>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
  )
  };

export default App;
