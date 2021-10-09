import React from "react"
import { render } from '@testing-library/react';
import TodoList from './TodoList';

test('renders page', () => {
  render(<TodoList />);
});

test('snapshot test', () => {
  const { asFragment } = render(<TodoList/>)
  expect(asFragment()).toMatchSnapshot()
})