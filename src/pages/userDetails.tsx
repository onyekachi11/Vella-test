import {
  IonContent,
  IonItem,
  IonInput,
} from "@ionic/react";
import React, { useRef, useState } from "react";
import { OverlayEventDetail } from "@ionic/core/components";
import { setUserDetails } from "../features/userdetailSlice";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { RootState } from "../app/store";

const UserDetails: React.FC = () => {
  const dispatch = useAppDispatch();
  
  const userDetails = useAppSelector((state: RootState) => state.persistedReducer.userDetails);

  const handleNameChange = (newName: string) => {
    dispatch(setUserDetails({...userDetails,username:newName}));
  };

  const handleEmailChange = (newEmail: string) => {
    dispatch(setUserDetails({ ...userDetails, email: newEmail }));
  };

  const handleAddressChange = (newAddress: string) => {
    dispatch(setUserDetails({ ...userDetails, address: newAddress }));
  };


  return (
    <>
      <IonContent className="ion-padding">
        <IonItem className="text-sm">
          <IonInput
            type="text"
            placeholder="Your name"
            label="Name:"
            labelPlacement="floating"
            value={userDetails.username}
            onIonChange={(e) => handleNameChange(e.detail.value!)}
          />
        </IonItem>
        <IonItem className="text-sm">
          <IonInput
            type="email"
            label="Email:"
            labelPlacement="floating"
            placeholder="Your Email"
            value={userDetails.email}
            onIonChange={(e) => handleEmailChange(e.detail.value!)}
          />
        </IonItem>
        <IonItem className="text-sm">
          <IonInput
            type="text"
            placeholder="Your Address"
            label="Address:"
            labelPlacement="floating"
            value={userDetails.address}
            onIonChange={(e) => handleAddressChange(e.detail.value!)}
          />
        </IonItem>
      </IonContent>
    </>
  );
};
export default UserDetails;
