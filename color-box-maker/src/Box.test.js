import React from "react"
import { render } from '@testing-library/react';
import Box from './Box';

test('renders page', () => {
  render(<Box />);
});

test('snapshot test', () => {
  const { asFragment } = render(<Box/>)
  expect(asFragment()).toMatchSnapshot()
})