import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

const Welcome: React.FC = () => {

    return (
      <IonPage>
        <IonContent color={"primary"} className="ion-padding">
          <section className="flex flex-col items-center justify-center h-full font text-center font-bold text-5xl ">
            <p>
              Welcome <br /> to <br /> Maxi Store
            </p>
            <IonButton
              routerLink="/store"
              shape="round"
              fill="outline"
              color={"light"}
              className="mt-5"
            >
              Go to store
            </IonButton>
          </section>
        </IonContent>
      </IonPage>
    );
};

export default Welcome;