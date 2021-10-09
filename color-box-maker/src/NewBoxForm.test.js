import React from "react"
import { render } from '@testing-library/react';
import NewBoxForm from './NewBoxForm';

test('renders page', () => {
  render(<NewBoxForm />);
});

test('snapshot test', () => {
  const { asFragment } = render(<NewBoxForm/>)
  expect(asFragment()).toMatchSnapshot()
})