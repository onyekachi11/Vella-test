import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonSearchbar } from '@ionic/react';
import React from 'react';


interface Search {
  searchInput: any;
  setSearchinput: any;
}


const Search: React.FC<Search> = ({ searchInput ,setSearchinput}) => { 

    const handleOnChange = (e:any): void => {
      setSearchinput(e.target.value);
    };
  return (
    <IonToolbar color={"primary"}>
      <IonSearchbar
        type="text"
        value={searchInput}
        onIonInput={handleOnChange}
        className="mt-2"
        placeholder="search products"
        showCancelButton="focus"
      ></IonSearchbar>
    </IonToolbar>
  );
};

export default Search;