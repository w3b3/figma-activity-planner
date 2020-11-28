import React from "react";
import styled from "styled-components";
import { Card } from "../types";

const CardDetailsRoot = styled.section`
  // Layout
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // Other
  border: 5px solid #111;
  background-color: #222;
`;

const BottomHalf = styled.div`
  display: flex;
`;
const ButtonRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const Component = ({ card }: { card: Card }) => {
  return (
    <CardDetailsRoot>
      <h2>{card.title}</h2>
      <BottomHalf>
        <p>{card.description.text}</p>
        <ButtonRow>
          <button>I did it!</button>
          <button>Postpone</button>
        </ButtonRow>
      </BottomHalf>
    </CardDetailsRoot>
  );
};
