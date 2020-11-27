import React from "react";
import { MyContext } from "../App";
import { Component as CardDetails } from "./CardDetails";

export const Component = ({ name }: { name?: string }) => {
  return (
    <MyContext.Consumer>
      {({ selectedCard, userData }) => (
        <header>
          <h1>Activity tracker</h1>
          <section>
            <button>Login</button>
          </section>
          {/* CARD DETAIL */}
          {userData.cards
            .filter((card) => card.id === selectedCard)
            .map((card) => (
              <CardDetails key={card.id} card={card} />
            ))}
        </header>
      )}
    </MyContext.Consumer>
  );
};
