import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonNavLink,
  IonButton,
  IonIcon,
} from "@ionic/react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { cartOutline } from "ionicons/icons";
import CartPage from "../pages/checkoutPage";
import { menuController } from "@ionic/core/components";
import CartDetails from "./cart";

import React from "react";

const ProductPageHeader: React.FC = () => {
  const cartValue = useAppSelector(
    (state) => state.persistedReducer.cartValue.cartValue
  );

  async function openEndMenu() {
    // Open the menu by side
    await menuController.open("end");
  }
  return (
    <div className=" flex items-center justify-between px-4 py-2 border border-primaryColor  mb-5 text-primaryColor text-lg rounded">
      <p>Product</p>
      <div className=" relative ">
        {cartValue === 0 ? null : (
          <p className="absolute z-10 right-0 top-0 bg-primaryColor text-lightColor rounded-full text-xs w-4 h-4 flex justify-center items-center ">
            {cartValue}
          </p>
        )}

        <IonIcon icon={cartOutline} color="" size="large" slot="end" />
      </div>
    </div>
  );
};

export default ProductPageHeader;
