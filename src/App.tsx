import React, { useEffect, useState } from "react";
import "./App.css";
import { Component as Header } from "./components/Header";
import { Component as CardsGrid } from "./components/CardsGrid";
import { Component as Footer } from "./components/Footer";
import { Component as CardDetailsWrapper } from "./components/CardDetailsWrapper";

import { userData as mockUserData } from "./mock-initial-state";
// import { v4 as uuid } from "uuid";
import firebase from "firebase";
import "firebase/firestore";
import { UserData } from "./types";

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

export const MyContext = React.createContext({
  userData: mockUserData,
  updateSelectedCard: console.info,
  selectedCard: "",
});
MyContext.displayName = "MyAppState";

// When React renders a component that subscribes to this Context object it will read the current context value from the closest matching Provider above it in the tree.

function App() {
  const [selectedCard, setSelectedCard] = useState<string>("");
  const [userData] = useState<UserData>(mockUserData); //TEMP: re-add setter
  // const [firebaseToken, setFirebaseToken] = useState<string>("");
  const [firebaseUser, setFirebaseUser] = useState<any>(null);
  const handleContextUpdate = (id: string) => {
    setSelectedCard(id);
  };

  const authWithGoogle = () => {
    if (!firebase.auth().currentUser) {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(function (result: any) {
          // This gives you a Google Access Token. You can use it to access the Google API.
          // setFirebaseToken(result.credential.accessToken);
          // The signed-in user info.
          setFirebaseUser(result.user);
        });
      // .catch(function (error) {
      //   // Handle Errors here.
      //   var errorCode = error.code;
      //   var errorMessage = error.message;
      //   // The email of the user's account used.
      //   var email = error.email;
      //   // The firebase.auth.AuthCredential type that was used.
      //   var credential = error.credential;
      // });
      // [END signin]
    }
  };
  // Does this MUST be async?
  const SaveUserDataToFirestore = (user: {
    name: string;
    email: string;
    id: string;
  }) => {
    // TEMP: ADD A NEW USERS ON COMPONENT LOAD
    // STEP 1 -  CREATE THE USER INPUT
    const userData: UserData = {
      user: {
        name: user.name,
        email: user.email,
        id: user.id,
      },
      cards: [],
      meta: {
        authenticated: true,
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
  };

  // Does this MUST be async
  const RetrieveMockDataFromFirestore = () => {
    db.collection("todos")
      .get()
      .then((querySnapshot: any) => {
        querySnapshot.forEach((doc: any) => {
          console.log(doc.id, doc.data());
        });
      });
  };

  // const FindRegisteredUserFirestore = (id: string) => {
  //   db.collection("todos")
  //     .get()
  //     .then((querySnapshot: any) => {
  //       querySnapshot.find((doc: any) => {
  //         console.log(doc.id, doc.data());
  //       });
  //     });
  // };

  useEffect(() => {
    console.log("initial rendering");
    // SaveMockDataToFirestore();
    // Auth with Google
    firebase.auth().onAuthStateChanged((user: any) => {
      if (user) {
        // User is signed in.
        console.log("USER response", user);
        SaveUserDataToFirestore({
          name: user.displayName,
          email: user.email,
          id: user.uid,
        });
        setFirebaseUser(user);
      }
    });
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
      <div className="App">
        <Header handleAuthentication={authWithGoogle} user={firebaseUser} />
        <CardsGrid />
        <CardDetailsWrapper />
        <Footer />
        <button onClick={RetrieveMockDataFromFirestore}>
          <span>Read from Firestore</span>
        </button>
        {/* <button onClick={SaveMockDataToFirestore}> */}
        {/* <span>Save to Firestore</span> */}
        {/* </button> */}
      </div>
    </MyContext.Provider>
  );
}

export default App;
