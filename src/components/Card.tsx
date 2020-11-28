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
  border-bottom: 2px dashed #444;
  ${(props: { pinned?: boolean }) =>
    // props.pinned &&
    // css`
    //   border: 1px solid crimson;
    // `}
    css`
      ${props.pinned
        ? "border-left: 5px solid crimson"
        : "border-left: 5px solid #222"}
    `}
`;

const CardTitle = styled.h2`
  ${(props: { pinned?: boolean }) =>
    // props.pinned &&
    // css`
    //   border: 1px solid crimson;
    // `}
    css`
      ${props.pinned && "text-decoration: 5px underline crimson"}
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
          <CardTitle pinned={card.meta.pinned}>{card.title}</CardTitle>
          <span className="Card-metric">
            <span>{card.date.day} </span>days
          </span>
        </Article>
      )}
    </MyContext.Consumer>
  );
};
