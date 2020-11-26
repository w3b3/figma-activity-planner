import React from "react";
import { Component as Card } from "./Card";
export const Component = ({ a }: { a?: string }) => {
  return (
    <main className="App-main">
      <Card />
      <Card />
    </main>
  );
};
