import React from "react";
import styled, { css } from "styled-components";
import { MyContext } from "../App";
import { Card } from "../types";

const Article = styled.article`
  //Layout
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // Other
  cursor: pointer;
  ${(props: { pinned?: boolean }) =>
    // props.pinned &&
    // css`
    //   border: 1px solid crimson;
    // `}
    css`
      ${props.pinned
        ? "box-shadow: inset 0 0 8px crimson"
        : "box-shadow: inset 0 0 8px white"}
    `}
`;

export const Component = ({ card }: { card: Card }) => {
  return (
    <MyContext.Consumer>
      {({ updateSelectedCard }) => (
        <Article
          className="Card"
          pinned={card.meta.pinned}
          onClick={() => updateSelectedCard(card.id)}
        >
          <h2 className="Card-title">{card.title}</h2>
          <span className="Card-metric">
            <span>{card.date.day} </span>days
          </span>
        </Article>
      )}
    </MyContext.Consumer>
  );
};
