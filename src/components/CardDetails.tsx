import React from "react";
import styled from "styled-components";
import { Card } from "../types";

const CardDetailsRoot = styled.section`
  // Layout
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  // Other
  /* border: 5px solid #444; */
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
          <button>
            <span>Postpone</span>
          </button>
          <button>
            <span>Edit</span>
          </button>
          <button>
            <span>Delete</span>
          </button>
        </ButtonRow>
      </BottomHalf>
    </CardDetailsRoot>
  );
};
