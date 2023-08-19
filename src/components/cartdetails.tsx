import {
  IonButton,
} from "@ionic/react";
import React, { useRef } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { RootState } from "../app/store";
import {
  subtractCartQuantity,
  calculateTotal,
  addCartQuantity,
} from "../features/addtocartSlice";

interface Cartdetails2Props {
  openModal: () => void;
}
const Cartdetails: React.FC<Cartdetails2Props> = ({ openModal }) => {

  const selectedProducts = useAppSelector(
    (state: RootState) => state.persistedReducer.cartValue.cartProductDetails
  );
  const totalPrice = useAppSelector((state: RootState) =>
    state.persistedReducer.cartValue.totalPrice
  );

  const dispatch = useAppDispatch();

  const emptyCart = () => {
    const data: string | null = localStorage.getItem("persist:root");
    if (data !== null) {
      const data2 = JSON.parse(data);

      delete data2.cartDetails;
      delete data2.cartValue;
      delete data2.products;

      const updatedDataString = JSON.stringify(data2);
      localStorage.setItem("persist:root", updatedDataString);
    }
    window.location.reload();
  };

  return (
    <>
      {selectedProducts.map((item) => (
        <div key={item.id} className="  md:w-1/2 my-0 m-auto">
          <div className="flex justify-betwee  border border-t-primaryColor mt-3 p-2 text-primaryColor text-xs   h-24">
            <div className="w-16 h-16 flex justify-center">
              <img src={item.image} alt="" className="w-full" />
            </div>
            <div className="ml-2 flex flex-col justify-between w-full">
              <p>{item.title}</p>
              <div className="flex justify-between items-center">
                <p>Amount: ${item.price}</p>
                <div className="flex items-center">
                  <IonButton
                    size="small"
                    onClick={() => {
                      dispatch(subtractCartQuantity({ id: item.id }));
                      dispatch(calculateTotal());
                    }}
                  >
                    -
                  </IonButton>
                  <p className="mx-2">{item.amount}</p>
                  <IonButton
                    size="small"
                    onClick={() => {
                      dispatch(addCartQuantity({ id: item.id }));
                      dispatch(calculateTotal());
                    }}
                  >
                    +
                  </IonButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      {selectedProducts.length === 0 ? (
        <div className="text-secondaryColor text-2xl flex flex-col h-full justify-center items-center">
          <p>No tems found...</p>
          <p>Please add items...</p>
        </div>
      ) : (
        <div className="  md:w-1/2 my-0 m-auto">
          <IonButton expand="full" className="mt-3" onClick={openModal}>
            Checkout (${totalPrice.toFixed(2)})
          </IonButton>
          <IonButton
            expand="full"
            className="mt-3"
            onClick={() => {
              emptyCart();
            }}
          >
            Empty cart
          </IonButton>
        </div>
      )}
    </>
  );
};

export default Cartdetails;
