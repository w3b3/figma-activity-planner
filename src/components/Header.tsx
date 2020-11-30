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

const SignedUser = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    max-height: 2rem;
    border-radius: 50%;
    margin-left: 4px;
    box-shadow: 0 0 0 2px white;
  }
`;
export const Component = ({
  user,
  handleAuthentication,
}: {
  user: any;
  handleAuthentication: () => void;
}) => {
  return (
    <Header>
      <h1>Activity tracker</h1>
      {user ? (
        <SignedUser>
          <span>{user.email}</span>
          <img src={user.photoURL} alt="User Signed In" />
        </SignedUser>
      ) : (
        <section id="firebaseui-auth-container">
          <button onClick={handleAuthentication}>
            <span>Login</span>
          </button>
        </section>
      )}
    </Header>
  );
};
