import React from "react"
import { render } from '@testing-library/react';
import Todo from "./Todo"

test('renders', () => {
  render(<Todo />);
});

test('snapshot test', () => {
  const { asFragment } = render(<Todo/>)
  expect(asFragment()).toMatchSnapshot()
})