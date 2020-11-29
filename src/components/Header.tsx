import React from "react";
import styled from "styled-components";

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #111;
  box-shadow: 0px 0px 6px black;
  padding: 1rem;
`;

export const Component = ({ name }: { name?: string }) => {
  return (
    <Header>
      <h1>Activity tracker</h1>
      <section>
        <button>
          <span>Login</span>
        </button>
      </section>
    </Header>
  );
};
