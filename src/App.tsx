import React, { useEffect, useState } from "react";
import "./App.css";
import { Component as Header } from "./components/Header";
import { Component as CardsGrid } from "./components/CardsGrid";
import { Component as Footer } from "./components/Footer";
import { userData } from "./mock-initial-state";
import { v4 as uuid } from "uuid";
import * as firebase from "firebase/app";
// import * as firebase from "firebase";
import "firebase/firestore";
import { UserData } from "./types";

// import {
//   FirebaseAppProvider,
//   useFirestoreDocData,
//   useFirestore,
//   SuspenseWithPerf,
// } from "reactfire";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8Nc9U_1P0zKxF3Xaxv2ceYv60VxHo4xY",
  authDomain: "react-count-down.firebaseapp.com",
  databaseURL: "https://react-count-down.firebaseio.com",
  projectId: "react-count-down",
  storageBucket: "react-count-down.appspot.com",
  messagingSenderId: "953647787215",
  appId: "1:953647787215:web:be2d8c521c10cf941fdbba",
  measurementId: "G-MMTL88BWGB",
};
// Initialize your Web app as described in the Get started for Web
// https://firebase.google.com/docs/web/setup#using-module-bundlers
firebase.initializeApp(firebaseConfig);
// Firebase previously initialized using firebase.initializeApp().
const db: any = firebase.firestore();
// eslint-disable-next-line no-restricted-globals
if (location.hostname === "localhost") {
  db.useEmulator("localhost", 8080);
}

// const UserName = () => {
// easily access the Firestore library
// const userRef = useFirestore().collection("todo").doc("burrito");
// console.log(userRef);
// subscribe to a document for realtime updates. just one line!
// const { status, data } = useFirestoreDocData<any>(userRef);
// easily check the loading status
// console.log(status, data);
// if (status === "loading") {
// return <p>Fetching burrito...</p>;
// }
// return <p>The burrito is {data?.yummy ? "good" : "bad"}!</p>;
// };

export const MyContext = React.createContext({
  userData,
  updateSelectedCard: console.info,
  selectedCard: "",
});
MyContext.displayName = "MyAppState";

// When React renders a component that subscribes to this Context object it will read the current context value from the closest matching Provider above it in the tree.

function App() {
  const [selectedCard, setSelectedCard] = useState<string>("");
  const handleContextUpdate = (id: string) => {
    setSelectedCard(id);
  };
  useEffect(() => {
    // TEMP: ADD A NEW USERS ON COMPONENT LOAD
    // STEP 1 -  CREATE THE USER INPUT
    const userData: UserData = {
      user: {
        name: "Ada Lovelace",
        email: "ada@love.lace",
        id: uuid(),
      },
      cards: [],
      meta: {
        authenticated: false,
        lastLogin: Date.now().toString(),
      },
    };
    // STEP 2 - SEND THE PAYLOAD TO FIRESTORE
    const output = db
      .collection("todos")
      .add(userData)
      .then((docRef: any) =>
        console.log("Document written with ID: ", docRef.id)
      )
      .catch((error: any) => console.error("Error adding document: ", error));
    return output;
  }, []);
  return (
    <MyContext.Provider
      value={{
        userData,
        updateSelectedCard: handleContextUpdate,
        selectedCard: selectedCard,
      }}
    >
      {/* Providers can be nested to override values deeper within the tree. */}
      {/* <FirebaseAppProvider firebaseConfig={firebaseConfig}> */}
      <div className="App">
        {/* <SuspenseWithPerf
            fallback={<p>loading burrito status...</p>}
            traceId={"load-burrito-status"}
          > */}
        {/* <UserName /> */}
        {/* </SuspenseWithPerf> */}
        <Header name="Card" />
        <CardsGrid />
        <Footer />
      </div>
      {/* </FirebaseAppProvider> */}
    </MyContext.Provider>
  );
}

export default App;
