import React, { useState } from "react";
import "./App.css";
import { Component as Header } from "./components/Header";
import { Component as CardsGrid } from "./components/CardsGrid";
import { Component as Footer } from "./components/Footer";
import { userData } from "./mock-initial-state";

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
        <Header name="Card" />
        <CardsGrid />
        <Footer />
      </div>
    </MyContext.Provider>
  );
}

export default App;
