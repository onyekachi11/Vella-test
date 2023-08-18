import { useEffect, useState } from "react";
import {
  IonCard,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import "../theme/tailwind.css";
import { addCircleOutline, star } from "ionicons/icons";
import { fetchProducts } from "../features/productSlice";
import Search from "../components/search";
import CartDetails from "../components/cart";
import { addToCart, calculateTotal } from "../features/addtocartSlice";
import { setSelectedProduct } from "../features/cartdetailSlice";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import ProductPageHeader from "../components/productPageHeader";
import { RootState } from "../app/store";

const Product: React.FC = () => {
  const product = useAppSelector((state) => state.persistedReducer.products);
  const dispatch = useAppDispatch();

  const [searchInput, setSearchInput] = useState("");

  const productAmount = useAppSelector(
    (state: RootState) => state.persistedReducer.products.amount
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <CartDetails />
      <IonPage id="main-content">
        <IonHeader color={"primary"}>
          <IonToolbar color={"primary"}>
            <IonTitle>Maxi Store</IonTitle>
          </IonToolbar>
          <Search searchInput={searchInput} setSearchinput={setSearchInput} />
        </IonHeader>

        <IonContent className="ion-padding" color={"light"}>
          <ProductPageHeader />

          {product.loading && (
            <p className=" h-full flex items-center justify-center text-primaryColor text-2xl">
              {" "}
              Loading........
            </p>
          )}

          {!product.loading && product.error ? (
            <p className=" h-full flex items-center justify-center text-primaryColor text-2xl">
              Error: {product.error}
            </p>
          ) : null}

          <section className=" grid grid-cols-2 gap-5   md:grid-cols-4">
            {product.products
              .filter((value) => {
                if (searchInput === "") {
                  return value;
                } else if (
                  value.title
                    .toLowerCase()
                    .includes(searchInput.toLowerCase()) ||
                  value.description
                    .toLowerCase()
                    .includes(searchInput.toLocaleUpperCase())
                ) {
                  return value;
                }
              })
              .map((product) => (
                <IonCard
                  key={product.id}
                  className="w-30  m-1  bg-gradient text-lightColor flex flex-col justify-between "
                >
                  <div className=" flex justify-center items-center h-52 w-32 mt-6 mx-auto">
                    <img src={product.image} alt="" />
                  </div>
                  <div className="mt-3 p-5">
                    <p className="text-sm text-zinc-800">{product.title}</p>
                    <div className="flex items-center justify-between text-xs mt-5">
                      <p className="text-sm text-zinc-800"> ${product.price}</p>

                      <IonIcon
                        icon={addCircleOutline}
                        className="text-2xl text-zinc-900 hover:cursor-pointer"
                        onClick={() => {
                          dispatch(
                            addToCart({
                              image: product.image,
                              title: product.title,
                              price: product.price,
                              id: product.id,
                              amount: productAmount,
                            })
                          );
                          dispatch(
                            setSelectedProduct({
                              id: product.id,
                              image: product.image,
                              amount: productAmount,
                              price: product.price,
                              title: product.title,
                            })
                          );
                          dispatch(calculateTotal());
                        }}
                      />
                    </div>
                  </div>
                </IonCard>
              ))}
          </section>
        </IonContent>
      </IonPage>
    </>
  );
};

export default Product;
