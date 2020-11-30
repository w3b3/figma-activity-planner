import React from "react";
import { MyContext } from "../App";
import { Component as CardDetails } from "./CardDetails";

export const Component = () => {
  return (
    <MyContext.Consumer>
      {({ selectedCard, userData }) => {
        return userData.cards
          .filter((card) => card.id === selectedCard)
          .map((card) => <CardDetails key={card.id} card={card} />);
      }}
    </MyContext.Consumer>
  );
};
