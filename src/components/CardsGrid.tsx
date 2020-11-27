import React from "react";
import { MyContext } from "../App";
import { Component as Card } from "./Card";
export const Component = ({ a }: { a?: string }) => {
  return (
    <MyContext.Consumer>
      {/* the value argument passed to the function will be equal to the value prop of the closest Provider for this context above in the tree. If there is no Provider for this context above, the value argument will be equal to the defaultValue that was passed to createContext(). */}
      {({ userData }) => (
        <main className="App-main">
          {userData.cards.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </main>
      )}
    </MyContext.Consumer>
  );
};
