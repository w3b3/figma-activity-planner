import React from "react";
import styled from "styled-components";

const Footer = styled.footer`
  display: flex;
  justify-content: space-around;
  padding: 1rem;
`;

export const Component = ({ a }: { a?: string }) => {
  return (
    <Footer>
      <button>
        <span>New</span>
      </button>
      <button>
        <span>Account</span>
      </button>
    </Footer>
  );
};
