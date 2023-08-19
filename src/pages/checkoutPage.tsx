import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonBackButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonButton,
  IonToast
} from "@ionic/react";
import React,{useState} from "react";
import { RootState } from "../app/store";
import { useAppDispatch,useAppSelector } from "../app/hooks";


const CheckoutPage: React.FC = () => {
  const userDetails = useAppSelector((state: RootState) => state.persistedReducer.userDetails);

  const subTotal = useAppSelector(
    (state: RootState) => state.persistedReducer.cartValue.totalPrice
  ).toFixed(2);

  const fee = 10

  const amountToPay = (subTotal + fee)

  const [isOpen, setIsOpen] = useState(false);

  return (
    <IonPage className=" w-screen flex items-center justify-center">
      <div className=" h-full w-screen ">
        <IonHeader>
          <IonToolbar color={"primary"}>
            <IonButtons slot="start">
              <IonBackButton></IonBackButton>
            </IonButtons>
            <IonTitle color={"light"}>Checkout</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonCard className="p-5 text-primaryColor ">
            <p className=" text-lg">Name: {userDetails.username}</p>
            <p>Email: {userDetails.email}</p>
            <p>Address: {userDetails.address} </p>
          </IonCard>
          <IonCard>
            <IonCardContent>
              <div className="flex justify-between">
                <p>Subtotal</p>
                <p>${subTotal}</p>
              </div>
              <div className="flex justify-between border-b-2 border-b-primaryColor pb-2">
                <p>Delevery Fee</p>
                <p>${fee}</p>
              </div>
              <div className="flex justify-between mt-2">
                <p>Total</p>
                <p>${amountToPay}</p>
              </div>
              <IonButton
                expand="full"
                className="mt-5"
                onClick={() => setIsOpen(true)}
              >
                Proceed to Payment
              </IonButton>
              <IonButton
                expand="full"
                className="mt-5"
                routerLink="/store"
              >
                Go Home
              </IonButton>
            </IonCardContent>
          </IonCard>
          <IonToast
            isOpen={isOpen}
            message="Order Successfull. You will recieve you package soon"
            onDidDismiss={() => setIsOpen(false)}
            duration={5000}
            color={"primary"}
            icon="globe"
          ></IonToast>
        </IonContent>
      </div>
    </IonPage>
  );
};

export default CheckoutPage;
