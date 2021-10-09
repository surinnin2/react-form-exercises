import React from "react";
import { render } from "@testing-library/react";
import NewTodoForm from "./NewTodoForm";

test('renders page', () => {
    render(<NewTodoForm/>);
  });
  
  test('snapshot test', () => {
    const { asFragment } = render(<NewTodoForm/>)
    expect(asFragment()).toMatchSnapshot()
  })