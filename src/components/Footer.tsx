import React, { useState } from "react";
import styled from "styled-components";

const Footer = styled.footer`
  display: flex;
  justify-content: space-around;
  padding: 1rem;
`;

const InputRow = styled.form`
  /* width: 100%; */
  flex: 1;
  display: flex;
  flex-direction: column;
  label {
    display: flex;
    span {
      text-align: center;
      min-width: 30%;
    }
    & > * {
      flex: 1;
    }
  }
`;

export const Component = () => {
  const [editing, setEditing] = useState(false);
  const addNewEntry = () => console.log("ADD NEW ENTRY");
  return (
    <Footer>
      <button onClick={() => setEditing(!editing)} disabled={editing}>
        <span>New</span>
      </button>
      {editing ? (
        <InputRow onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="Task-Title">
            <span>Task Title</span>
            <input type="text" name="Task-Title" id="Task-Title" />
          </label>
          <label htmlFor="Task-DaysToGo">
            <span>Days To Go</span>
            <input type="text" name="Task-DaysToGo" id="Task-DaysToGo" />
          </label>
          <button onClick={addNewEntry}>Save</button>
        </InputRow>
      ) : (
        <button>
          <span>Account</span>
        </button>
      )}
    </Footer>
  );
};
