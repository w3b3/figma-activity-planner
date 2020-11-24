import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Testing group", () => {
  // HEADER
  test("renders Login", () => {
    render(<App />);
    const target = screen.getByText(/login/i);
    expect(target).toBeInTheDocument();
  });

  test("renders card expanded with title", () => {
    render(<App />);
    const target = screen.getByText(/another set of deadlifts/i);
    expect(target).toBeInTheDocument();
  });
  test("renders card expanded with subtitle", () => {
    render(<App />);
    const target = screen.getByText(
      /Goal is to complete each set every 3 days./i
    );
    expect(target).toBeInTheDocument();
  });
  test("renders card expanded with Confirm button", () => {
    render(<App />);
    const target = screen.getByText(/Just did it!/i);
    expect(target).toBeInTheDocument();
  });
  test("renders card expanded with Postpone button", () => {
    render(<App />);
    const target = screen.getByText(/postpone/i);
    expect(target).toBeInTheDocument();
  });

  // CARD COMPONENT
  test("renders at least one Card", () => {
    render(<App />);
    const target = screen.getByText(/haircut/i);
    expect(target).toBeInTheDocument();
  });

  //FOOTER
  test("renders button for add an entry", () => {
    render(<App />);
    const target = screen.getByText(/new/i);
    expect(target).toBeInTheDocument();
  });
  test("renders button for edit an entry", () => {
    render(<App />);
    const target = screen.getByText(/edit/i);
    expect(target).toBeInTheDocument();
  });
  test("renders button for delete an entry", () => {
    render(<App />);
    const target = screen.getByText(/delete/i);
    expect(target).toBeInTheDocument();
  });
});
