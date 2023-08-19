import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonModal,
  IonButtons,
  IonToast,
} from "@ionic/react";
import React, { useRef,useState } from "react";
import { useAppSelector } from "../app/hooks";
import { RootState } from "../app/store";
import UserDetails from "../pages/userDetails";
import Cartdetails2 from "./cartdetails";

const Cart: React.FC = () => {
  const userDetails = useAppSelector(
    (state: RootState) => state.persistedReducer.userDetails
  );

  const modal = useRef<HTMLIonModalElement>(null);

  const confirm = () => {
    const inputValue1 = userDetails.username;
    const inputValue2 = userDetails.email;
    const inputValue3 = userDetails.address;
    modal.current?.dismiss(
      { inputValue1, inputValue2, inputValue3 },
      "confirm"
    );
  };

  const openModal = () => {
    if (modal.current) {
      modal.current.present();
    }
  };
  const [isOpen, setIsOpen] = useState(false);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={"primary"}>
          <IonTitle>Cart</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding ">
        {/*****  Available items in the cart **************/}
        <div className=" max-w-l">
          <Cartdetails2 openModal={openModal} />
        </div>

        {/*****  dissplay modal for user entry **************/}
        <div>
          <IonModal ref={modal}>
            <IonHeader>
              <IonToolbar>
                <IonButtons slot="start">
                  <IonButton
                    routerLink="/cart"
                    onClick={() => modal.current?.dismiss()}
                  >
                    Cancel
                  </IonButton>
                </IonButtons>
                <IonTitle>Welcome</IonTitle>
                <IonButtons slot="end">
                  <IonButton
                    strong={true}
                    routerLink="/checkout"
                    onClick={() => {
                      userDetails.username === "" ||
                      userDetails.address === "" ||
                      userDetails.email === ""
                        ? setIsOpen(true)
                        : confirm();
                        
                    }}
                  >
                    Confirm
                  </IonButton>
                </IonButtons>
              </IonToolbar>
            </IonHeader>

            {/*****  where users input details **************/}
            <UserDetails />
          </IonModal>
        </div>
        <IonToast
          isOpen={isOpen}
          message="Please complete details"
          onDidDismiss={() => setIsOpen(false)}
          duration={5000}
          color={"primary"}
          icon="globe"
        ></IonToast>
      </IonContent>
    </IonPage>
  );
};

export default Cart;
