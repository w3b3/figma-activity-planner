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
  margin: 0 auto;
  padding: 0.5rem;
  // Other
  cursor: pointer;
  border-left: 5px solid #222;
  border-right: 5px solid #222;
  border-bottom: 1px dashed #444;

  &:hover,
  &:active {
    background-color: #222;
    border-right: 5px solid #007fff;
  }

  ${(props: { pinned?: boolean }) =>
    props.pinned &&
    css`
      border-left: 5px solid crimson;
    `}
`;

// ${props.pinned
// ? "border-left: 5px solid crimson"
// : "border-left: 5px solid #222"}
/* )} */

const CardTitle = styled.h2`
  margin-bottom: 1rem;
  ${(props: { pinned?: boolean }) =>
    // props.pinned &&
    // css`
    //   border: 1px solid crimson;
    // `}
    css`
      ${props.pinned
        ? "text-decoration: 5px underline crimson"
        : "text-decoration: 5px underline #444"}
    `}
`;

const FullWidthWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
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
          <FullWidthWrapper>
            <span className="Card-metric">
              <span>{card.date.day} </span>days
            </span>
            <button className="primary">
              <span>I did it!</span>
            </button>
            <button
              onClick={() => console.log("Toogle Pinned State for ", card.id)}
              disabled={card.meta.pinned}
            >
              <span>{card.meta.pinned ? "Pinned" : "Pin this"}</span>
            </button>
          </FullWidthWrapper>
        </Article>
      )}
    </MyContext.Consumer>
  );
};
