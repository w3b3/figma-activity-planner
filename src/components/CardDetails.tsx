import React from "react";
import styled from "styled-components";
import { Card } from "../types";

export const Component = ({ card }: { card: Card }) => {
  const CardRoot = styled.section`
    // Layout
    display: flex;
    flex-direction: column;
    // Other
    border: 5px solid black;
  `;

  const BottomHalf = styled.div`
    display: flex;
  `;
  const ButtonRow = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  `;
  return (
    <CardRoot>
      {/* <h2>another set of deadlifts</h2> */}
      <h2>{card.title}</h2>
      <BottomHalf>
        <p>{card.description.text}</p>
        <ButtonRow>
          <button>I did it!</button>
          <button>Postpone</button>
        </ButtonRow>
      </BottomHalf>
      {/* <p>
                  Goal is to complete each set every 3 days. Current set is
                  around 8x with 30lbs. Note that I can...
                </p> */}
    </CardRoot>
  );
};
