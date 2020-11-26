import React from "react";
import "./App.css";
import { Component as Header } from "./components/Header";
import { Component as CardsGrid } from "./components/CardsGrid";
import { Component as Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header name="Card" />
      <CardsGrid />
      <Footer />
    </div>
  );
}

export default App;
